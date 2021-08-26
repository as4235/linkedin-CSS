import { Avatar } from "@material-ui/core";
import "./SideBar.css";

const SideBar = () => {
  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://appleinformed.files.wordpress.com/2021/06/macosmontereywallpaper.jpg"
          alt=""
        />
        <Avatar className="sidebar__avatar" />
        <h2>Ajay</h2>
        <h4>welcome Ajay welcome</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you: </p>
          <p className="sidebar__statNumber">2,345</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post:</p>
          <p className="sidebar__statNumber">2,345</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("reactjs")}
        {recentItem("reactjs")}
        {recentItem("reactjs")}
        {recentItem("reactjs")}
        {recentItem("reactjs")}
      </div>
    </div>
  );
};

export default SideBar;
