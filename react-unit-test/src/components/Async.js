import { useCallback, useEffect, useState } from "react";

const Async = () => {
  const [posts, setPosts] = useState([]);

  const fetchData = useCallback(async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const responseData = await response.json();
    if (response.ok) {
      setPosts(responseData);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Async;
