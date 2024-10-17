import React, { useEffect } from "react";
import "./Recomended.css";
import { API_KEY, valueConvertor } from "../../src/Data";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Recomended({ categoryId }) {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=100&regionCode=in&videoCategoryId=${categoryId}&key=${API_KEY}`
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
  }, [categoryId]);

  return (
    <>
      <div className="recomended">
        {data.map((items, index) => (
          <Link to={`/video/${items.snippet.categoryId}/${items.id}`} className="recomended-section"key={index}>
            <img src={items.snippet.thumbnails.medium.url} alt="" />
            <div className="recom-info">
              <h4>{items.snippet.title}</h4>
              <h5>{items.snippet.channelTitle}</h5>
              <p>{valueConvertor(items.statistics.viewCount)}views &bull; 8 months ago</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
