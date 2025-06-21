import React, { useEffect, useState } from 'react';

const DataFetcher = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // It will run only on 1st render
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts') // Replaced with valid JSON API
      .then(response => response.json())
      .then(json => {
        setData(json);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <ul>
          {data.map(post => (
            <li key={post.id}>{post.title}</li> // Fixed JSX syntax and added key properly
          ))}
        </ul>
      )}
    </div>
  );
};

export default DataFetcher;
