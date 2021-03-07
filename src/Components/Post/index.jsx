import React from "react";

import PostHeader from "./PostHeader";

import "./index.css";

function Post({ data }) {
  return (
    <div>
      <div className="container-post">
        <header>
          <PostHeader data={data} />
        </header>

        <section>
          <p>
            <a href={data.html_url} target="_blank" rel="noreferrer">
              {data.html_url}
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}

export default Post;
