import React, { useRef } from 'react';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';

const LocomotiveWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const containerRef = useRef(null);
  
  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        smoothMobile: true, // Enable smooth scrolling on mobile
        getDirection: true, // Enable direction detection
        tablet: { smooth: true }, // Enable smooth scrolling on tablets
        lerp: 0.1, // Set the linear interpolation
      }}
      watch={[]}
      containerRef={containerRef}
    >
      <main data-scroll-container ref={containerRef}>
        {children}
      </main>
    </LocomotiveScrollProvider>
  );
};

export default LocomotiveWrapper;