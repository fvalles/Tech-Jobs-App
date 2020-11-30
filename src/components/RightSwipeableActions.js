import React from 'react';
import PropTypes from 'prop-types';
import { Animated } from 'react-native';
import { StyledTouchableOpacity } from './StyledTouchableOpacity';
import { StyledView } from './StyledView';
import { white } from '../constants/colors';

export default function RightSwipeableActions({ dragX, onPress }) {
  const scale = dragX.interpolate({
    inputRange: [-100, 0],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });
  return (
    <StyledTouchableOpacity onPress={onPress}>
      <StyledView viewType="removeJob">
        <Animated.Text
          style={[
            {
              color: white,
              fontSize: 22,
              fontWeight: '700',
              padding: 10,
            },
            { transform: [{ scale }] },
          ]}
        >
          Remove Job
        </Animated.Text>
      </StyledView>
    </StyledTouchableOpacity>
  );
}

RightSwipeableActions.propTypes = {
  onPress: PropTypes.func.isRequired,
  dragX: PropTypes.shape({
    interpolate: PropTypes.func.isRequired,
  }).isRequired,
};
