import React from 'react';
import Subpage1 from './Subpage1';
import { Outlet } from 'react-router-dom'; // ✅ Required

function Page2() {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      {/* Left side */}
      <div style={{ width: '200px', backgroundColor: '#f0f0f0' }}>
        <Subpage1 />
      </div>

      {/* Right side (dynamic routing content goes here) */}
      <div style={{ flex: 1, padding: '20px', backgroundColor: '#ffffff' }}>
        <Outlet /> {/* ✅ This must be present */}
      </div>
    </div>
  );
}

export default Page2;
