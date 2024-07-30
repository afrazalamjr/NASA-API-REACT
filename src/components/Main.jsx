import './Main.css';
import React, { useState,useEffect } from 'react';
import Sidebar from './SideBar';
import Footer from './Footer.jsx';



export default function Main() {

    
  const [isSidebarVisible, setSideBar] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchdt = async () => {
      const apiKey = import.meta.env.VITE_NASA_API_KEY; // Use the correct prefix for Vite environment variables
      const baseUrl = 'https://api.nasa.gov/planetary/apod';

      try {
        const response = await fetch(`${baseUrl}?api_key=${apiKey}`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Data fetched successfully:', data);
        setData(data); // Update state with fetched data
      } catch (error) {
        console.error('Error fetching data from NASA API:', error);
      }
    };

    fetchdt();
  }, []);

  const toggleSidebar = () => {
    setSideBar(!isSidebarVisible);
  };

  return (
    <>
    <div className='First'>
      {isSidebarVisible && <Sidebar  explanation={data?.explanation} />}
      <div className='Content'>
        <button onClick={toggleSidebar} className="toggle-button">
          {isSidebarVisible ? 'Close Sidebar' : 'Open Sidebar'}
        </button>
        {data && data.url ? (
          <img src={data.url} alt="pic" className="full-page-image" />
        ) : (
          <p>Loading...</p>
        )}
      </div>
      
      
    </div>

    <Footer    title={data?.title}/>
    </>
  );
}
