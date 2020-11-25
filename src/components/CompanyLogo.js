/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function CompanyLogo({ imageUrl }) {
  const defaultLogoUrl = '../assets/enterprise-icon.png';

  const imageSrc = !imageUrl ? require(defaultLogoUrl) : { uri: imageUrl };

  return <Logo source={imageSrc} />;
}

const Logo = styled.Image`
  border-radius: 5px;
  height: 45px;
  margin-right: 15px;
  width: 45px;
`;

CompanyLogo.defaultProps = {
  imageUrl: '',
};

CompanyLogo.propTypes = {
  imageUrl: PropTypes.string,
};
