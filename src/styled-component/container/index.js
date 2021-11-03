const { default: styled } = require("styled-components");

export const Container = styled.div`
  width: ${(props) =>
    (props.fluid && "100%") || (props.semiFluid && "95%") || "90%"};

  margin: 1rem auto;
  padding: 1rem 0px;

  ${(props) => props.m && `margin : ${props.m}`};
  ${(props) => props.pd && `padding : ${props.pd}`};

  @media screen and (max-width: 1024px) {
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    ${(props) => props.fixWidth && `width : ${props.fixWidth}`};
    ${(props) => props.fixWidthMobile && `width : ${props.fixWidthMobile}`};
    margin: 1rem auto;
    padding: 1rem 0px;
  }

  ${(props) => props.fixWidth && `width : ${props.fixWidth}`};
`;

export const Grid = styled.div`
  width: 100%;
  display: flex;
  flex-direction: ${(props) => (props.column ? "column" : "row")};
  gap: ${(props) => `${props.gap}px` || "0px"};
  ${props=>props.wrap && `flex-wrap : wrap ; `}
  justify-content: ${(props) =>
    (props.jCenter && "center") ||
    (props.jEnd && "flex-end") ||
    (props.jStart && "flex-start") ||
    (props.jSpaceBetween && "space-between") ||
    (props.jSpaceAround && "space-around")};

  align-items: ${(props) =>
    (props.aCenter && "center") || (props.aEnd && "flex-end") || "flex-start"};

  @media screen and (max-width: 768px) {
    ${(props) => props.colMb && `flex-direction :  column`};
    ${(props) =>
      props.mobileJustify && `justify-content : ${props.mobileJustify}`};
    ${(props) =>
      props.mobileAlign && `align-items : ${props.mobileAlign}`};
  }
`;

export const GridItem = styled.div`
  ${(props) => props.lg && `width : ${(100 / 12) * props.lg}%`};
  text-align: ${(props) => props.align || "left"};
  @media screen and (max-width: 1300px) {
    ${(props) => props.lmd && `width : ${(100 / 12) * props.lmd}%`};
  }
  @media screen and (max-width: 1024px) {
    ${(props) => props.md && `width : ${(100 / 12) * props.md}%`};
  }
  @media screen and (max-width: 768px) {
    ${(props) => props.sm && `width : ${(100 / 12) * props.sm}%`};
  }
  @media screen and (max-width: 512px) {
    ${(props) => props.xs && `width : ${(100 / 12) * props.xs}%`};
  }
`;

export const FillItem = styled.div`
  flex: 1;
`;

export const FullHeightConainer = styled(Container)`
  min-height: 100vh;
`;

export const Box = styled.div`
  padding: ${(props) => props.pd || 0};
  margin: ${(props) => props.m || 0};
  ${(props) => props.mt && `margin-top : ${props.mt}`};
  ${(props) => props.mb && `margin-bottom : ${props.mb}`};
  ${(props) => props.ml && `margin-left : ${props.ml}`};
  ${(props) => props.mr && `margin-right : ${props.mr}`};

  ${(props) => props.pt && `padding-top : ${props.pt}`};
  ${(props) => props.pb && `padding-bottom : ${props.pb}`};
  ${(props) => props.pl && `padding-left : ${props.pl}`};
  ${(props) => props.pr && `padding-right : ${props.pr}`};

  @media screen and (max-width: 768px) {
    ${(props) => props.mPd && `padding : ${props.mPd}`};
    ${(props) => props.mMr && `margin : ${props.mMr}`};

    ${(props) => props.mobileMt && `margin-top : ${props.mobileMt}`};
    ${(props) => props.mobileMb && `margin-bottom : ${props.mobileMb}`};
    ${(props) => props.mobileMl && `margin-left : ${props.mobileMl}`};
    ${(props) => props.mobileMr && `margin-right : ${props.mobileMr}`};

    ${(props) => props.mobilept && `padding-top : ${props.mobilept}`};
    ${(props) => props.mobilepb && `padding-bottom : ${props.mobilepb}`};
    ${(props) => props.mobilepl && `padding-left : ${props.mobilepl}`};
    ${(props) => props.mobilepr && `padding-right : ${props.mobilepr}`};
  }
`;
