import React from 'react';
import VideoListItem from './VideoListItem';

const VideoList = props => {
  if (!props.videos) {
    return <div>Loading.......</div>;
  }
  const videoItems = props.videos.map(video => {
    return (
      <VideoListItem
        onVideoSelect={props.onVideoSelect}
        key={video.etag}
        video={video}
      />
    );
  });
  return (
    <div className="col-md-4">
      <ul className="list-group">{videoItems}</ul>
    </div>
  );
};
export default VideoList;
