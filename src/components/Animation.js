/* eslint-disable global-require */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import AnimatedLoader from 'react-native-animated-loader';

const styles = StyleSheet.create({
  lottie: {
    width: 150,
    height: 150,
  },
});

export default function Animation({ animationType }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setVisible(!visible);
    }, 50);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  let animationSrc;
  let backgroundOpacity = 0;
  if (animationType === 'loader') {
    animationSrc = require('../assets/loader.json');
    backgroundOpacity = 1;
  }
  if (animationType === 'lookingForJobs') {
    animationSrc = require('../assets/looking-for-jobs.json');
  }

  return (
    <AnimatedLoader
      visible={visible}
      overlayColor={`rgba(255,255,255,${backgroundOpacity})`}
      source={animationSrc}
      animationStyle={styles.lottie}
      speed={1}
    />
  );
}

Animation.propTypes = {
  animationType: PropTypes.string.isRequired,
};
