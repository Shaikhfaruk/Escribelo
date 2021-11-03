import React from "react";
import { ReactVideo } from "reactjs-media";
import styled from "styled-components";
import { Box, Container, Grid } from "../../../../styled-component/container";

const VideoPartner = () => {
  return (
    <VideoWrapper>
      <VideoWrapperBlur />
      <Video
        src="https://www.youtube.com/embed/gUui94Xd85s"
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
        title="video"
      />
    </VideoWrapper>
  );
};

export default VideoPartner;

const VideoWrapper = styled.div`
  display: flex;
  position: relative;
  width: 80%;
  height: 500px;
  margin: 100px auto;
  @media screen and (max-width: 768px) {
    margin: 40px auto;
    height: 300px;
  }

  @media screen and (max-width: 512px) {
    margin: 40px auto;
    height: 200px;
  }
`;

const VideoWrapperBlur = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    #06d9ca 4.88%,
    #19b6f0 46.67%,
    #6e6cff 86.76%
  );
  opacity: 1;
  filter: blur(20px);
`;

const Video = styled.iframe`
  position: absolute;
  width: 96%;
  height: 96%;
  top: 2%;
  left: 2%;
  border-radius: 8px;
  border : 0px ;
`;
