import React from "react";
import Card from "../components/Card";
import News from "../components/News";
import CreatePost from "../components/CreatePost";
import Post from "../components/Post";

function Home() {
  return (
    <div className="w-[75%] mx-auto flex justify-evenly ">
      <Card />
      <div>
        <CreatePost />
        <Post />
        <Post/>
      </div>
      <News />
    </div>
  );
}

export default Home;
