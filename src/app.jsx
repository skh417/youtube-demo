import React, { useState, useEffect } from "react";
import "./app.css";
import VideoList from "./components/video_list/video_list";
import SearchHeader from "./components/search_header/search_header";

function App({ youtube }) {
  const [videos, setVideos] = useState();

  const search = (query) => {
    youtube
      .search(query) //
      .then((res) => setVideos(res));
  };

  useEffect(() => {
    youtube
      .mostPopular() //
      .then((res) => setVideos(res));
  }, []);

  return (
    <div>
      <SearchHeader onSearch={search} />
      {videos && <VideoList videos={videos} />}
    </div>
  );
}

export default App;
