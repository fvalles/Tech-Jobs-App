import React from 'react';
import { Text, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import { useQuery, gql } from '@apollo/client';
import Animation from './Animation';
import { StyledText } from './StyledText';
import { StyledView } from './StyledView';
import { StyledImage } from './StyledImage';
import { StyledTouchableOpacity } from './StyledTouchableOpacity';
import locationIcon from '../assets/location-icon.png';
import clockIcon from '../assets/clock-icon.png';

const COMPANIES_JOBS = gql`
  query CompaniesJobs {
    companies {
      name
      jobs {
        cities {
          name
        }
        commitment {
          title
        }
        description
        id
        remotes {
          name
        }
        title
      }
    }
  }
`;

export default function CompanyJobsScreen({ route, navigation }) {
  const { loading, error, data } = useQuery(COMPANIES_JOBS);
  const { companyName } = route.params;
  let companyJobsData = null;

  if (loading) return <Animation animationType="lookingForJobs" />;
  if (error) return <Text>Error :(. Check your internet connection and reload the App!</Text>;

  if (data) {
    const companyInfo = data.companies.filter((company) => {
      return company.name === companyName;
    });
    const [selectedCompany] = companyInfo;
    companyJobsData = selectedCompany.jobs;
  }

  const renderItem = ({ item }) => {
    const cities = item.cities.reduce((acc, val, idx) => {
      return idx === 0 ? `${val.name}` : `${acc}, ${val.name}`;
    }, '');

    const remote = item.remotes.reduce((acc, val) => {
      return cities.length !== 0 ? `${acc} / ${val.name}` : `${acc}${val.name}`;
    }, '');

    const commitment = item.commitment.title;

    return (
      <StyledView viewType="job">
        <StyledView viewType="jobInfo">
          <StyledText textType="jobTitle">{item.title}</StyledText>
          <StyledView viewType="locationsRow">
            <StyledImage source={locationIcon} imgType="jobScreenIcon" />
            <StyledText>{cities}</StyledText>
            <StyledText textType="remote">{remote}</StyledText>
          </StyledView>
          <StyledView viewType="commitmentRow">
            <StyledImage source={clockIcon} imgType="jobScreenIcon" />
            <StyledText>{commitment}</StyledText>
          </StyledView>
        </StyledView>
        <StyledView viewType="flexCenterRow">
          <StyledTouchableOpacity
            touchableType="descriptionBtn"
            onPress={() => {
              navigation.navigate('JobDescription', {
                jobDesc: item.description,
              });
            }}
          >
            <StyledText textType="descBtn">View Job</StyledText>
          </StyledTouchableOpacity>
        </StyledView>
      </StyledView>
    );
  };

  return companyJobsData.length ? (
    <FlatList data={companyJobsData} renderItem={renderItem} keyExtractor={(item) => item.id} />
  ) : (
    <StyledView viewType="noJobsView">
      <StyledText textType="noJobsMsg">
        {companyName} has no currently vacancies available
      </StyledText>
      <StyledTouchableOpacity touchableType="descriptionBtn" onPress={() => navigation.goBack()}>
        <StyledText textType="descBtn">Go Back</StyledText>
      </StyledTouchableOpacity>
    </StyledView>
  );
}

CompanyJobsScreen.propTypes = {
  navigation: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  route: PropTypes.shape({
    params: PropTypes.shape({
      companyName: PropTypes.string.isRequired,
    }),
  }).isRequired,
};
