import React from "react";
import styles from "./video_item.module.css";

const VideoItem = ({ item }) => {
  return (
    <li className={styles.container}>
      <div className={styles.video}>
        <img
          className={styles.img}
          src={item.thumbnails.medium.url}
          alt={item.description}
        />
        <div className={styles.metadata}>
          <p className={styles.title}>{item.title}</p>
          <p className={styles.channel}>{item.channelTitle}</p>
        </div>
      </div>
    </li>
  );
};

export default VideoItem;
