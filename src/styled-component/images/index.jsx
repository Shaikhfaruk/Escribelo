import { Skeleton } from "@mui/material";
import React from "react";
import { ImageCmp } from "./styles";

const Image = (props) => {
  const { src, width, height } = props;
  const [isLoaded, setIsLoaded] = React.useState(false);
  return (
    <>
      {isLoaded ? (
        <ImageCmp src={src} width={width} height={height} />
      ) : (
        <Skeleton>
          <ImageCmp
            src={src}
            width={width}
            height={height}
            onLoad={setIsLoaded(true)}    
          />
        </Skeleton>
      )}
    </>
  );
};

export default Image;
