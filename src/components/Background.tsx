import React, { useEffect, useRef } from "react";

// @ts-ignore
import BackgroundVideo from "../assets/file.mp4";

export const Background = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75;
    }
  });

  return (
    <video
      ref={videoRef}
      playsInline
      autoPlay
      muted
      loop
      className="fixed inset-0 object-cover w-full h-full opacity-25 -z-10"
    >
      <source src={BackgroundVideo} type="video/mp4" />
    </video>
  );
};
