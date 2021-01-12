import React from "react";
import VideoItem from "../video_item/video_item";
import styles from "./video_list.module.css";

const VideoList = ({ videos }) => {
  console.log("videoList--->", videos);
  return (
    <ul className={styles.videos}>
      {videos.map((video) => {
        return <VideoItem key={video.id} item={video.snippet} />;
      })}
    </ul>
  );
};

export default VideoList;
