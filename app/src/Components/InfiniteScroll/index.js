"use client";
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Image5, Image6, Image7, Image8 } from '../../PathImg';
import Image from 'next/image';

const MarqueeContainer = styled.div`
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
  background: #f0f0f0; // Optional: Add a background for visibility
`;

const MarqueeContent = styled.div`
  display: flex;
  will-change: transform;
  transition: transform linear 0s;
`;

const StyledImage = styled(Image)`
  width: 300px; 
  height: 400px; 
  border-radius:3px;
  margin: 0 10px; // Spacing between images
`;

const Marquee = () => {
  const marqueeRef = useRef(null);
  const scrollAmount = useRef(0);
  const speed = 1.2; // Adjust the speed as needed

  const images = [Image5, Image6, Image7, Image8];

  useEffect(() => {
    const interval = setInterval(() => {
      if (marqueeRef.current) {
        scrollAmount.current += speed;
        marqueeRef.current.style.transform = `translateX(-${scrollAmount.current}px)`;

        // Reset the scroll position if it goes past half of the content width
        if (scrollAmount.current >= marqueeRef.current.scrollWidth / 2) {
          scrollAmount.current = 0;
        }
      }
    }, 16); // ~60fps

    return () => clearInterval(interval);
  }, []);

  return (
    <MarqueeContainer>
      <MarqueeContent ref={marqueeRef}>
        {/* Original Images */}
        {images.map((src, index) => (
          <StyledImage key={index} src={src} alt={`Image ${index + 1}`} />
        ))}
        {/* Duplicated Images for Infinite Scroll Effect */}
        {images.map((src, index) => (
          <StyledImage key={index + images.length} src={src} alt={`Image ${index + 1 + images.length}`} />
        ))}
      </MarqueeContent>
    </MarqueeContainer>
  );
};

export default Marquee;
