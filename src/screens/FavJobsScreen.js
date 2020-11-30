import React, { useState, useCallback } from 'react';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import PropTypes from 'prop-types';
import isEqual from 'lodash.isequal';
import { useFocusEffect } from '@react-navigation/native';
import { FlatList } from 'react-native';
import RightSwipeableActions from '../components/RightSwipeableActions';
import { StyledText } from '../components/StyledText';
import { StyledView } from '../components/StyledView';
import { getAllData, removeData } from '../utils/asyncStorageHelper';
import { StyledTouchableOpacity } from '../components/StyledTouchableOpacity';

export default function FavJobsScreen({ navigation }) {
  const [storedData, setStoredData] = useState([]);
  const [removedJob, setRemovedJob] = useState(false);

  useFocusEffect(
    useCallback(() => {
      const retrieveStoreData = async () => {
        const newStoredData = await getAllData();
        if (!isEqual(storedData, newStoredData)) {
          setStoredData(newStoredData);
        }
      };
      retrieveStoreData();
      if (removedJob) setRemovedJob(false);
    }, [removedJob, storedData])
  );

  const renderItem = ({ item }) => {
    const jobData = JSON.parse(item[1]);
    const jobId = item[0];
    const { companyName, jobTitle, jobDesc } = jobData;
    return (
      <Swipeable
        renderRightActions={(progress, dragX) => (
          <RightSwipeableActions
            progress={progress}
            dragX={dragX}
            onPress={() => {
              removeData(jobId);
              setRemovedJob(true);
            }}
          />
        )}
      >
        <StyledTouchableOpacity
          onPress={() => {
            navigation.navigate('JobDescription', {
              companyName,
              jobDesc,
              jobId,
              jobTitle,
            });
          }}
        >
          <StyledView viewType="favJob">
            <StyledView viewType="jobTitleRow">
              <StyledText textType="companyJobSaved">{companyName}</StyledText>
            </StyledView>
            <StyledView viewType="locationsRow">
              <StyledText>{jobTitle}</StyledText>
            </StyledView>
          </StyledView>
        </StyledTouchableOpacity>
      </Swipeable>
    );
  };

  return storedData?.length > 0 ? (
    <>
      <StyledView viewType="homeScreenTitle">
        <StyledText textType="mainTitle">Saved Jobs</StyledText>
      </StyledView>
      <FlatList data={storedData} renderItem={renderItem} keyExtractor={(item) => item[0]} />
    </>
  ) : (
    <StyledView viewType="noJobsView">
      <StyledText textType="noJobsMsg">You have no Favorite Jobs yet!</StyledText>
    </StyledView>
  );
}

FavJobsScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
