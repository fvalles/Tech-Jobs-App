import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StyledImage } from './StyledImage';
import defaultLogo from '../assets/enterprise-icon.png';

export default function CompanyLogo({ imageUrl }) {
  const [errorImage, setErrorImage] = useState(false);

  const onError = ({ nativeEvent: { error } }) => {
    // eslint-disable-next-line no-console
    console.log(`Error: ${error}`);
    setErrorImage(true);
  };

  const srcImage = !imageUrl || errorImage ? defaultLogo : { uri: imageUrl };

  return <StyledImage source={srcImage} onError={onError} imgType="companyLogo" />;
}

CompanyLogo.defaultProps = {
  imageUrl: '',
};

CompanyLogo.propTypes = {
  imageUrl: PropTypes.string,
};
