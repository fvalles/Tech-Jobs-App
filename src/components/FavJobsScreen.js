import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import isEqual from 'lodash.isequal';
import { useFocusEffect } from '@react-navigation/native';
import { FlatList } from 'react-native';
import { StyledText } from './StyledText';
import { StyledView } from './StyledView';
import { getAllData } from './AsyncStorageHelper';
import { StyledTouchableOpacity } from './StyledTouchableOpacity';

export default function FavJobsScreen({ navigation }) {
  const [storedData, setStoredData] = useState([]);

  useFocusEffect(
    useCallback(() => {
      const retrieveStoreData = async () => {
        const newStoredData = await getAllData();
        if (!isEqual(storedData, newStoredData)) {
          setStoredData(newStoredData);
        }
      };
      retrieveStoreData();
    }, [storedData])
  );

  const renderItem = ({ item }) => {
    const jobData = JSON.parse(item[1]);
    const jobId = item[0];
    const { companyName, jobTitle, jobDesc } = jobData;
    return (
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
