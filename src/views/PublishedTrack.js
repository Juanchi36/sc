import React, { useState } from 'react';
import NavBar from '../components/Backgrounds/NavBar';
import TabBar from '../components/Backgrounds/TabBar';
import Bar from '../components/Bar/Bar';
import YoutubeVideo from '../components/YoutubeVideo/YoutubeVideo';
import TrackTitle from '../components/TrackTitle/TrackTitle';
import UserContainer from '../components/Containers/UserContainer';
import ButtonsContainer from '../components/Containers/ButtonsContainer';
import LikeList from '../components/Lists/LikeList';

import userImage from '../assets/User image.png';
import videoImage from '../assets/Youtube Video@2x.png';
import { data, userPostData, buttonsData, likesData } from '../constants';

function PublishedTrack() {
  const [likeList, setLikeList] = useState(false);
  const handleLikeList = () => {
    setLikeList(!likeList);
  }
  return (
    <div style={{ backgroundColor: '#181716' }}>
      <NavBar />
      {/* <div> */}
      <div style={{ minHeight: '92vh' }}>
        <Bar userImage={userImage} />
        {likeList ? (
          <LikeList data={likesData} handleLikeList={handleLikeList}/>
        ) : (
            <div>
              <YoutubeVideo videoImage={videoImage} />
              <TrackTitle trackTitle={data.title} />
              <UserContainer userImage={userImage} data={userPostData} />
            </div>
          )}
        <ButtonsContainer buttonsData={buttonsData} handleLikeList={handleLikeList} />
      </div>
      <TabBar />
    </div>
  );
}

export default PublishedTrack;
