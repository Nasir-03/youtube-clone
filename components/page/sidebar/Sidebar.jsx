import React from "react";
import "./sidebar.css";
import home from "../../../src/assets/home.png";
import game from "../../../src/assets/game_icon.png";
import automobiles from "../../../src/assets/automobiles.png";
import sports from "../../../src/assets/sports.png";
import entertainment from "../../../src/assets/entertainment.png";
import tech from "../../../src/assets/tech.png";
import music from "../../../src/assets/music.png";
import blogs from "../../../src/assets/blogs.png";
import news from "../../../src/assets/news.png";
import jack from "../../../src/assets/jack.png"
import simon from "../../../src/assets/simon.png"
import tom from "../../../src/assets/tom.png"
import megan from "../../../src/assets/megan.png"
import cameron from "../../../src/assets/cameron.png"

export default function Sidebar({ sidebar,category, setCategory }) {
  return (
    <>
      <div className={`sidebar-container ${sidebar?"" : "small-sidebar"}`}>
        <div className="sidebar">
          <div className={`side-link ${category=== 0?"active":""}`} onClick={() => setCategory(0)}>
            <img src={home} alt="home"/> <p>Home</p>
          </div>
          <div className={`side-link ${category=== 20?"active":""}`} onClick={() => setCategory(20)}>
            <img src={game} alt="game" /> <p>Game</p>
          </div>
          <div className={`side-link ${category=== 2?"active":""}`}onClick={() => setCategory(2)}>
            <img src={automobiles} alt="game" /> <p>Automobiles</p>
          </div>
          <div className={`side-link ${category=== 17?"active":""}`} onClick={() => setCategory(17)}>
            <img src={sports} alt="game" /> <p>Sports</p>
          </div>
          <div className={`side-link ${category=== 24?"active":""}`} onClick={() => setCategory(24)}>
            <img src={entertainment} alt="game" /> <p>Entertainment</p>
          </div>
          <div className={`side-link ${category=== 10?"active":""}`} onClick={() => setCategory(10)}>
            <img src={music} alt="game" /> <p>Music</p>
          </div>
          <div className={`side-link ${category=== 28?"active":""}`} onClick={() => setCategory(28)}>
            <img src={tech} alt="game" /> <p>Technology</p>
          </div>
          <div className={`side-link ${category=== 22?"active":""}`} onClick={() => setCategory(22)}>
            <img src={blogs} alt="game" /> <p>Blogs</p>
          </div>
          <div className={`side-link ${category=== 25?"active":""}`} onClick={() => setCategory(25)}>
            <img src={news} alt="game" /> <p>News</p>
          </div>
          <hr />
        </div>
        <div className="subscribed-list">
            <h3>Subscribed</h3>
            <div className="side-link">
               <img src={jack} alt="jack" /> <p>CodeWithHarry</p>
            </div>
            <div className="side-link">
               <img src={simon} alt="jack" /> <p>apna College</p>
            </div>
            <div className="side-link">
               <img src={tom} alt="jack" /> <p>codewithAnuj</p>
            </div>
            <div className="side-link">
               <img src={megan} alt="jack" /> <p>mr.beast</p>
            </div>
          <div className="side-link">
               <img src={cameron} alt="jack" /> <p>mr.hunter</p>
            </div>
            </div>
      </div>
    </>
  );
}
