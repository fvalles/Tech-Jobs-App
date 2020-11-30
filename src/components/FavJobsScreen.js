import React, { useState, useCallback } from 'react';
import isEqual from 'lodash.isequal';
import { useFocusEffect } from '@react-navigation/native';
import { FlatList } from 'react-native';
import { StyledText } from './StyledText';
import { StyledView } from './StyledView';
import { getAllData } from './AsyncStorageHelper';

export default function FavJobsScreen() {
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
    return (
      <>
        <StyledView viewType="favJob">
          <StyledView viewType="jobTitleRow">
            <StyledText textType="companyJobSaved">{jobData.companyName}</StyledText>
          </StyledView>
          <StyledView viewType="locationsRow">
            <StyledText>{jobData.jobTitle}</StyledText>
          </StyledView>
        </StyledView>
      </>
    );
  };

  return storedData.length > 0 ? (
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
