import React from 'react';
import PropTypes from 'prop-types';
import { StyledImage } from './StyledImage';
import defaultLogo from '../assets/enterprise-icon.png';

export default function CompanyLogo({ imageUrl }) {
  const imageSrc = !imageUrl ? defaultLogo : { uri: imageUrl };

  return <StyledImage source={imageSrc} imgType="companyLogo" />;
}

CompanyLogo.defaultProps = {
  imageUrl: '',
};

CompanyLogo.propTypes = {
  imageUrl: PropTypes.string,
};
