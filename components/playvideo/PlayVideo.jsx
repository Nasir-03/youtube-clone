import React, { useEffect, useState } from "react";
import video1 from "../../src/assets/video.mp4";
import like from "../../src/assets/like.png";
import dislike from "../../src/assets/dislike.png";
import share from "../../src/assets/share.png";
import save from "../../src/assets/save.png";
import jack from "../../src/assets/jack.png";
import user_profile from "../../src/assets/user_profile.jpg";
import "./PlayVideo.css";
import { API_KEY } from "../../src/Data";
import { valueConvertor } from "../../src/Data";
import moment from "moment";
import Navbar from "../navbar/Navbar";
import Sidebar from "../page/sidebar/Sidebar";

export default function PlayVideo({ videoId, setup }) {
  const [data, setData] = useState(null);
  const [channelData, setChannelData] = useState(null);
  const [commentData, setCommentData] = useState([]);

  // console.log("Setup prop:", setup);

  const fetchChannel = async () => {
    if (!data) return;

    try {
      const channelResponse = await fetch(
        `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${data.snippet.channelId}&key=${API_KEY}`
      );

      if (!channelResponse.ok) {
        throw new Error(
          `Channel fetch error! Status: ${channelResponse.status}`
        );
      }

      const channelData = await channelResponse.json();
      setChannelData(channelData.items[0]);
    } catch (error) {
      console.error("Error fetching channel data:", error);
    }
  };

  const fetchComments = async () => {
    try {
      // Fetch comments for the video
      const commentResponse = await fetch(
        // `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${videoId}&key=${API_KEY}`
        `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${videoId}&maxResults=100&key=${API_KEY}`
      );

      if (!commentResponse.ok) {
        throw new Error(
          `Comments fetch error! Status: ${commentResponse.status}`
        );
      }

      const commentData = await commentResponse.json();
      setCommentData(commentData.items); // Set the fetched comments
    } catch (error) {
      console.error("Error fetching comments data:", error);
    }
  };

  const fetchVideoData = async () => {
    try {
      const res = await fetch(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
      );

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const process = await res.json();
      setData(process.items[0]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchVideoData();
  }, [videoId]);

  useEffect(() => {
    fetchChannel();
    fetchComments();
  }, [data]);

  return (
    <>
       <div className={`sidebar-section ${setup ? "" : "small-setup"}`}>
        <Sidebar />
       </div> 
      <div className="paly-video">
        <iframe
          width="1022"
          height="575"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          // title="The 2013 IPL Fixing Scandal"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>

        <h2>{data ? data.snippet.title : "Title here"}</h2>
        <div className="playVideo-info">
          <div className="profile">
            <img
              src={
                channelData ? channelData.snippet.thumbnails.default.url : ""
              }
              alt="jack"
            />
            <div className="info">
              <h1>{data ? data.snippet.channelTitle : "ChannelName"}</h1>
              <p>
                {channelData
                  ? valueConvertor(channelData.statistics.subscriberCount)
                  : "22"}
                subscribers
              </p>
            </div>
            <button className="subs">Subscribe</button>
          </div>
          <div className="like-portion">
            <div className="like-part">
              <span className="like-item">
                <img src={like} alt="like" />{" "}
                {data ? valueConvertor(data.statistics.likeCount) : ""}
              </span>
              <hr />
              <span className="dislike-item">
                <img src={dislike} alt="dislike" />
              </span>
            </div>
            <span className="spn">
              <img src={share} alt="share" />
              share
            </span>
            <span className="spn">
              <img src={save} alt="save" />
              save
            </span>
          </div>
        </div>
        {/* </div> */}
        <div className="discription">
          <span>
            <h3>
              {" "}
              {data ? valueConvertor(data.statistics?.viewCount) : "150k"} views
              &bull;
              {data ? moment(data.snippet?.publishedAt).fromNow() : ""}
            </h3>
          </span>
          <p>{data ? data.snippet.description.slice(0, 250) : ""}</p>
        </div>
        <div className="comments">
          <p>
            {data ? valueConvertor(data.statistics.commentCount) : 250} Comments
          </p>
          <hr />
        </div>
        {Array.isArray(commentData) &&
          commentData.map((item, index) => (
            <div className="comment-section" key={index}>
              <img
                src={item.snippet.topLevelComment.snippet.authorProfileImageUrl}
                alt="image"
              />
              <div>
                <span>
                  <h3>
                    {item.snippet.topLevelComment.snippet.authorDisplayName}
                  </h3>
                  <p>7days ago</p>
                </span>
                <p style={{ padding: "10px", color: "#555" }}>
                  {item.snippet.topLevelComment.snippet.textDisplay}
                </p>
                <div className="comment-action">
                  <img src={like} alt="" />
                  <span>
                    {valueConvertor(
                      item.snippet.topLevelComment.snippet.likeCount
                    )}
                  </span>
                  <img src={dislike} alt="" />
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
