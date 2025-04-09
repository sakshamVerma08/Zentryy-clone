import React, { useRef, useState } from "react";

const Hero = () => {
  // keeps track of whether user has clicked the mini video player or not.
  const [hasClicked, setHasClicked] = useState(false);

  // keeps track of the currenly playing video's index value.
  const [currentIndex, setCurrentIndex] = useState(0);

  // keeps track of whether a video is currently loading or not.
  const [isLoading, setIsLoading] = useState(true);

  // keeps track of how many videos have been loaded
  const [loadedVideos, setLoadedVideos] = useState(0);

  const totalVideos = 4;

  const handleVideoLoad = () => {
    setLoadedVideos((prev) => prev + 1);
  };

  const upcomingVideoIndex = (currentIndex % totalVideos) + 1;

  const nextVideoRef = useRef();

  const handleMiniVidClick = () => {
    setHasClicked(true);

    setCurrentIndex(upcomingVideoIndex);
  };

  const getVideoSrc = (currentIndex) => `/videos/hero-${currentIndex}.mp4`;

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      <div
        id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75"
      >
        <div>
          <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
            <div
              onClick={handleMiniVidClick}
              className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"
            >
              <video
                ref={nextVideoRef}
                src={getVideoSrc(upcomingVideoIndex)}
                loop
                muted
                id="current-video"
                className="size-64 origin-center scale-150 object-cover object-center"
                onLoadedData={handleVideoLoad}
              ></video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
