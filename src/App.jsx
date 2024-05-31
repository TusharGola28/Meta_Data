import React, { useEffect, useState } from 'react';
import axios from 'axios'
export default function App() {
  const [pageTitle, setPageTitle] = useState('Default Title');
  const [pageDescription, setPageDescription] = useState('Default Description');
  const shareUrl = "https://ticketsque.atlassian.net/jira/software/c/projects/TQD/issues/TQD-1070";
  const title = 'Hiii';
  const imageUrl = "https://unsplash.com/photos/green-wooden-door-on-gray-concrete-floor-Ga7aBzN7qDw"; // Hosted image URL

  const handleShare = () => {
    const message = `${title}\n${shareUrl}`;
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}%20${encodeURIComponent(imageUrl)}`;
    window.open(whatsappUrl, '_blank');
  };
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get('http://192.168.1.157:2010/dynamic');
  //       const data = response.data;

  //       const tempElement = document.createElement('div');
  //       tempElement.innerHTML = data;

  //       const titleElement = tempElement.querySelector('title');
  //       const newTitle = titleElement ? titleElement.innerText : 'Default Title';

  //       setPageTitle(document.title = newTitle)
  //       document.title = newTitle;

  //     } catch (error) {
  //       console.error('Error fetching dynamic data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <div>
      {/* Displaying dynamically set meta data */}
      <h1>{pageTitle}</h1>
      <p>{pageDescription}</p>

      <button onClick={handleShare}>Share on Whatsapp</button>
    </div>

  );
}
    // "dev": "concurrently \"npm run server\" \"vite\"",
    // "server": "nodemon ./src/server/server.js",

    // Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium, totam.