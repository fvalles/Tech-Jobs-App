import React from 'react';
import { Text, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import { useQuery, gql } from '@apollo/client';
import { StyledText } from './StyledText';
import { StyledTouchableOpacity } from './StyledTouchableOpacity';

const COMPANIES_JOBS = gql`
  query CompaniesJobs {
    companies {
      name
      jobs {
        id
        title
        cities {
          name
        }
        commitment {
          title
        }
        remotes {
          name
        }
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
    const cities = item.cities.reduce((acc, val) => {
      return acc + val.name;
    }, '');

    return (
      <StyledTouchableOpacity containerType="job">
        <StyledText textType="jobTitle">{item.title}</StyledText>
        <StyledText>{cities}</StyledText>
      </StyledTouchableOpacity>
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
