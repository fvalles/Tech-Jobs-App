import React from 'react';
import { Text, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import { useQuery, gql } from '@apollo/client';
import { StyledText } from './StyledText';
import { StyledView } from './StyledView';

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

export default function SelectedCompanyJobs({ route }) {
  const { loading, error, data } = useQuery(COMPANIES_JOBS);
  const { companyName } = route.params;
  let companyJobsData = null;

  if (loading) return <Text>Loading Company&apos;s jobs...</Text>;
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
      return cities.length !== 0 ? `${acc} / ${val.name}` : `${acc} ${val.name}`;
    }, '');

    const commitment = item.commitment.title;

    return (
      <StyledView viewType="job">
        <StyledText textType="jobTitle">{item.title}</StyledText>
        <StyledView viewType="locations">
          <StyledText>{cities}</StyledText>
          <StyledText textType="remote">{remote}</StyledText>
        </StyledView>
        <StyledText>{commitment}</StyledText>
      </StyledView>
    );
  };

  return (
    /* <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen of the company: {companyName}</Text>
      <Text>{JSON.stringify(companyInfo[0].jobs[0].title)}</Text>
    </View> */

    companyJobsData && (
      <FlatList data={companyJobsData} renderItem={renderItem} keyExtractor={(item) => item.id} />
    )
  );
}

SelectedCompanyJobs.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      companyName: PropTypes.string.isRequired,
    }),
  }).isRequired,
};
