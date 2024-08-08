import React from "react";
import Card from "../components/Card";
import News from "../components/News";
import CreatePost from "../components/CreatePost";
import Post from "../components/Post";

function Home() {
  return (
    <div className="mx-auto flex justify-center gap-2">
      <Card />

      <div>
        <CreatePost />
        <Post />
        <Post />
      </div>
      <News />
    </div>
  );
}

export default Home;
