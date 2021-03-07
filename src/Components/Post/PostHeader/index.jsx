import React from "react";
import "./index.css";

function PostHeader({ data }) {
  return (
    <div>
      <header className="header-post">
        <img src={data.avatar_url} alt="Avatar do usuário" />
        <div className="header-text">
          <h3>{data.login}</h3>
          <span className="post-time">há 15 min</span>
        </div>
      </header>
    </div>
  );
}

export default PostHeader;
