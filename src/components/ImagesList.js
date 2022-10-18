import { useState, useEffect } from "react";

const ImagesList = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [activePage, setActivePages] = useState (1);

  useEffect(() => {
    setLoading(true);

    fetch(`https://picsum.photos/v2/list?page=${activePage}&limit=10`)
      .then((response) => response.json())
      .then((data) => {
        setImages(images => [...images, ...data]);
        setLoading(false);
      });
  }, [activePage]);

  const handleShowMore = () => {
    setActivePages((activePage)=> activePage + 1);
  };

if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
      <div className="container">  
        <h1>Image Gallery</h1>
        <ul>
          {images.map(({ id,download_url, author}) => (
          <li key={id}><img alt={author} src={download_url} /></li>
        ))} 
        </ul> 
      <div className="btn">
        <button onClick ={handleShowMore}>Show more</button>
      </div> 
    </div>
  );
};

export default ImagesList;