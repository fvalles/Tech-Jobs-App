import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { StyledText } from './StyledText';
import { StyledView } from './StyledView';
import { getAllData } from './AsyncStorageHelper';

export default function JobDescriptionScreen() {
  const [storedData, setStoredData] = useState([]);

  useEffect(() => {
    getAllData().then((values) => {
      if (values) {
        if (storedData.length !== values.length) {
          setStoredData((prevStoredData) => {
            return [...values, ...prevStoredData];
          });
        }
      }
    });
  });

  const renderItem = ({ item }) => {
    const jobData = JSON.parse(item[1]);
    return (
      <>
        <StyledView viewType="favJob">
          <StyledView viewType="jobTitleRow">
            <StyledText>Job Title: </StyledText>
            <StyledText textType="bold">{jobData.jobTitle}</StyledText>
          </StyledView>
          <StyledView viewType="locationsRow">
            <StyledText>Company: </StyledText>
            <StyledText textType="bold">{jobData.companyName}</StyledText>
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
