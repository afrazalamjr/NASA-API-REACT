import React from 'react';
import './SideBar.css'; // Assuming you have some styles for the sidebar

const Sidebar = ({ explanation }) => {
  return (
    <div className="sidebar">
      <h2>Ttle</h2>
      <p>
      { explanation }
      </p>
    </div>
  );
};

export default Sidebar;
