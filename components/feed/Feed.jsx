import React, { useEffect, useState } from "react";
import "./feed.css";
import { Link, NavLink } from "react-router-dom";
import { API_KEY } from '../../src/Data'
import { valueConvertor } from '../../src/Data' 
import moment from 'moment';

function Feed({ sidebar, category }) {
  const[data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=500&regionCode=in&videoCategoryId=${category}&key=${API_KEY}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const dataa = await response.json();
      setData(dataa.items);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  },[category])

  return (

    <div className={`feed ${sidebar ? "" : "large-feed"}`}>
      {data.map((item,idx) => (
         <NavLink to={`video/${item.snippet.categoryId}/${item.id}`} className="card nav-link">
         <img src={item.snippet.thumbnails.medium.url} alt="Thumbnail" />
         <h2>{item.snippet.title}</h2>
         <h3>{item.snippet.channelTitle}</h3>
         <p>{valueConvertor(item.statistics.viewCount)} views &bull; {moment(item.snippet.publishedAt).fromNow()}</p>
       </NavLink>
       ))} 
    </div>
  );
}

export default Feed;
