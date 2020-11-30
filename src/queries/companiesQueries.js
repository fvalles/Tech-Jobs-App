/* eslint-disable import/prefer-default-export */
import { gql } from '@apollo/client';

export const COMPANIES_DATA = gql`
  query CompaniesData {
    companies {
      id
      name
      logoUrl
      websiteUrl
    }
  }
`;

export const COMPANIES_JOBS = gql`
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
