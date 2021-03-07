import { React, useEffect, useState } from "react";
import axios from "axios";

import Header from "./Components/Header";
import Post from "./Components/Post";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.github.com/users")
      .then((response) => setPosts(response.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <Header />

      {posts.map((post) => (
        <Post key={post.id} data={post} />
      ))}
    </div>
  );
}

export default App;
