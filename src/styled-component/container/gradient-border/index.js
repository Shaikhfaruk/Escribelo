import React from "react";

const GradiantConatiner = (props) => {
  const { width, height, innerCorner, children, thick } = props;
  return (
    <div
      style={{
        width: width || 400,
        height: height || 400,
        position: "relative",
      }}
    >
      {innerCorner ? (
        <InnerCornerDiv thick={thick} width={width} height={height}>
          {children}
        </InnerCornerDiv>
      ) : (
        <FlatInnerDiv thick={thick} width={width} height={height}>
          {children}
        </FlatInnerDiv>
      )}
    </div>
  );
};

const InnerCornerDiv = ({ children, thick , width , height}) => (
  <>
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 924 840"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M50 0C22.3857 0 0 22.3857 0 50V790C0 817.614 22.3857 840 50 840H874C901.614 840 924 817.614 924 790V50C924 22.3857 901.614 0 874 0H50ZM62 12C34.3857 12 12 34.3857 12 62V778C12 805.614 34.3858 828 62 828H862C889.614 828 912 805.614 912 778V62C912 34.3857 889.614 12 862 12H62Z"
        fill="url(#g1)"
      />
      <defs>
        <linearGradient id="g1">
          <stop stop-color="#06D9CA" />
          <stop offset=".3" stop-color="#19B6F0" />
          <stop offset="1" stop-color="#6E6CFF" />
        </linearGradient>
      </defs>
    </svg>
    <div
      style={{
        width: "95%",
        height: "95%",
        position: "absolute",
        top: "2.5%",
        left: "2.5%",
        borderRadius: 20,
      }}
    >
      {children}
    </div>
  </>
);

const FlatInnerDiv = ({ children, thick , width  , height }) => (
  <>
    <div
      style={{
        width: width || 400,
        height: height || 400,
        background: `linear-gradient(90deg , #06D9CA 0%, #19B6F0 50%, #6E6CFF 100%)`,
        clipPath: thick
          ? "polygon(5% 10% , 5% 90%, 95% 90% ,95% 10% , 5% 10% , 0 0 , 100% 0 , 100% 100% , 0% 100% , 0 0 )"
          : "polygon(2% 2% , 2% 98%, 98% 98% ,98% 2% , 2% 2% , 0 0 , 100% 0 , 100% 100% , 0% 100% , 0 0 )",
        borderRadius: thick ? 7 : 2,
      }}
    ></div>
    <div
      style={{
        width: thick ? "90%" : "98%",
        height: thick ? "80%" : "98%",
        position: "absolute",
        top: thick ? "10%" : "1%",
        left: thick ? "5%" : "1%",
        borderRadius: thick ? 5 : 10,
      }}
    >
      {children}
    </div>
  </>
);

export default GradiantConatiner;
