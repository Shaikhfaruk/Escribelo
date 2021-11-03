import React from "react";
import UserOneImage from "../../assets/users/user1.png";
import StackGrid from "react-stack-grid";
import styled from "styled-components";
import DownArrow from "../../assets/down-arrow.png";
import { Text } from "../../styled-component/typography";
import { Box, Grid, GridItem } from "../../styled-component/container";

const data = [
  {
    title: "Rishab nair",
    title2: "Founder at RA Marketing",
    imageUrl: UserOneImage,
    description:
      "Loving this app. I am a pretty good copywriter, but this thing is gold! It will save me a ton of time coming up with fresh content. I give it some basic ideas and it spits out straight",
  },
  {
    title: "Ashutosh kapoor",
    title2: "Guitarist",
    imageUrl: UserOneImage,
    description:
      "This AI is freaking incredible. Writing content for my company used to take hours and my brain would be mush at the end of each day. With Jarvis, I can spark creativity at any point in the day - whether I'm building out trainings, copywriting for social media, or creating books for lead generation. My only wish is that I could have met Jarvis (the AI's name) sooner! I have shown a brief glimpse at what the AI does to other friends of mi....",
    expandIcon: true,
  },
  {
    title: "Tiara shah",
    title2: "Guitarist",
    imageUrl: UserOneImage,
    description:
      "Loving this app. I am a pretty good copywriter, but this thing is gold! It will save me a ton of time coming up with fresh content. ",
  },

  {
    title: "Rishab nair",
    title2: "Founder at RA Marketing",
    imageUrl: UserOneImage,
    description:
      "Loving this app. I am a pretty good copywriter, but this thing is gold! It will save me a ton of time coming up with fresh content. I give it some basic ideas and it spits out straight. It's like I've employed a full-time copywriter for 10% of the cost!",
  },
  {
    title: "Rishab nair",
    title2: "Founder at RA Marketing",
    imageUrl: UserOneImage,
    description:
      "This AI is freaking incredible. Writing content for my company used to take hours and my brain would be mush at the end of each day. With Jarvis, I can spark creativity at any point in the day - whether I'm building out trainings, copywriting for social media, or creating books for lead generation. My only wish is that I could have met Jarvis (the AI's name) sooner! I have shown a brief glim.....",
    expandIcon: true,
  },
  {
    title: "Tiara shah",
    title2: "Founder at RA Marketing",
    imageUrl: UserOneImage,
    description:
      "Loving this app. I am a pretty good copywriter, but this thing is gold! It will save me a ton of time coming up with fresh content. I give it some basic ideas and it spits out straight. I just discovered this tool today from the Trends group, and I am already blown away. Brilliant tool you guys have made here! I love how quick and easy it is to create great copy, and honestly writes way better than I ever could.This AI is freaking incredible. With Jarvis, I can spark creativity at any point in the day ",
  },
  {
    title: "Ram kapurr",
    title2: "Founder at RA Marketing",
    imageUrl: UserOneImage,
    description:
      "I just discovered this tool today from the Trends group, and I am already blown away. Brilliant tool you guys have made here! I love how quick and easy it is to create great copy, and honestly writes way better than I ever could. ",
  },
  {
    title: "Tiara shah",
    title2: "Founder at RA Marketing",
    imageUrl: UserOneImage,
    description:
      "This AI is freaking incredible. Writing content for my company used to take hours and my brain would be mush at the end of each day. With Jarvis, I can spark creativity at any point in the day - whether I'm building out trainings, copywriting for social media, or creating books for lead generation. My only wish is that I could have met Jarvis (the AI's name) sooner! I have shown a brief glimpse at what the AI does to other friends of mine in business and they were shocked just with one tool - BUT the team is constantly expanding the types of content that the AI produces. Thank you for developing such a time/life saving tool ",
  },
  {
    title: "Ram kapur",
    title2: "Founder at RA Marketing",
    imageUrl: UserOneImage,
    description:
      "This AI is freaking incredible. Writing content for my company used to take hours and my brain would be mush at the end of each day. With Jarvis, I can spark creativity at any point in the day - whether I'm building out trainings, copywriting for social media, or creating books for lead generation. My only wish is that I could have met Jarvis (the AI's name) sooner! I have shown a brief glimpse at what the AI does to other friends of mine in business and they were shocked just with one tool - BUT the team is constantly expanding the types of content that the AI produces. Thank you for developing such a time/life saving tool ",
  },
  {
    title: "Ashutosh kapoor",
    title2: "Guitarist",
    imageUrl: UserOneImage,
    description:
      "I just discovered this tool today from the Trends group, and I am already blown away. Brilliant tool you guys have made here! I love how quick and easy it is to create great copy, and honestly writes way better than I ever could. ",
  },
  {
    title: "Tiara shah",
    title2: "Ceo at shopifyquuickly",
    imageUrl: UserOneImage,
    description:
      "Loving this app. I am a pretty good copywriter, but this thing is gold! It will save me a ton of time coming up with fresh content. I give it some basic ideas and it spits out straight",
  },
];
const CustomGrid = () => {
  const [cardNumber, setCardNumber] = React.useState(15);
  const setCardNumberFunc = () => {
    if (window.innerWidth <= 768) {
      setCardNumber(5);
    } else {
      setCardNumber(15);
    }
  };
  React.useEffect(() => {
    window.addEventListener("resize", setCardNumberFunc);
    setCardNumberFunc();
    return () => {
      window.removeEventListener("resize", setCardNumberFunc);
    };
  });
  return (
    <>
      <Box mt={"20px"} mb={"80px"}>
        <Grid jCenter>
          <GridItem lg={9} lmd={10} md={12}>
            <StackGrid columnWidth={220} gutterWidth={25} gutterHeight={25}>
              {data?.slice(0, cardNumber - 1)?.map((item, index) => (
                <Card
                  title={item.title}
                  title2={item.title2}
                  description={item.description}
                  imageUrl={item.imageUrl}
                  expandIcon={item.expandIcon}
                  key={index}
                />
              ))}
            </StackGrid>
          </GridItem>
        </Grid>
      </Box>
    </>
  );
};

export default CustomGrid;

const Card = ({ imageUrl, title, title2, description, expandIcon }) => (
  <>
    <CardContentWrapper>
      {expandIcon && <img src={DownArrow} className={"expandIcon"} />}
      <Grid column gap={5}>
        <GridItem>
          <Grid gap={10} aCenter>
            <GridItem>
              <UserImage src={imageUrl} />
            </GridItem>
            <GridItem>
              <Grid column>
                <GridItem>
                  <Text
                    left
                    color={"#7A7A7A"}
                    wt={700}
                    family={"Nunito"}
                    variant={8}
                  >
                    {title}
                  </Text>
                </GridItem>
                <GridItem>
                  <Text
                    left
                    color={"rgba(0, 0, 0, 0.41)"}
                    family={"Nunito"}
                    variant={9}
                  >
                    {title2}
                  </Text>
                </GridItem>
              </Grid>
            </GridItem>
          </Grid>
        </GridItem>
        <GridItem>
          <Grid>
            <GridItem>
              <Text
                left
                color={"white"}
                lineH={"15px"}
                wt={500}
                color={"#7A7A7A"}
                family={"Nunito"}
                variant={9}
              >
                {description}
              </Text>
            </GridItem>
          </Grid>
        </GridItem>
      </Grid>
    </CardContentWrapper>
  </>
  //   <CardContentWrapper>
  //     <div className={"sec1"}>
  //       {expandIcon && <img src={DownArrow} className={"expandIcon"} />}
  //       <img src={imageUrl} alt="" />
  //       <div className={"sec2"}>
  //         <Text left color={"#7A7A7A"} wt={700} family={"Nunito"} variant={8}>
  //           {title}
  //         </Text>
  //         <Text left color={"rgba(0, 0, 0, 0.41)"} family={"Nunito"} variant={9}>
  //           {title2}
  //         </Text>
  //       </div>
  //     </div>
  //     <Text
  //       left
  //       color={"white"}
  //       lineH={"15px"}
  //       wt={500}
  //       color={"#7A7A7A"}
  //       family={"Nunito"}
  //       variant={8}
  //     >
  //       {description}
  //     </Text>
  //   </CardContentWrapper>
);

// export const CardContentWrapper = styled.div`
//   background-color: #FFF;
//   width: 100%;
//   box-shadow: 0px 16px 60px rgba(0, 0, 0, 0.12);
//   border-radius: 10px;

//   height: 100%;
//   min-height: fit-content;
//   padding: 20px;
//   position: relative;

//   .sec1 {
//     display: flex;
//     gap: 20px;
//   }
//   img {
//     width: ${(props) => (props.imageSize ? `${props.imageSize}px` : "60px")};
//     height: ${(props) => (props.imageSize ? `${props.imageSize}px` : "60px")};
//     border-radius: 50%;
//     @media screen and (max-width: 768px) {
//       width: 25px;
//       height: 25px;
//     }
//   }
//   .expandIcon {
//     width: 15px;
//     height: 15px;
//     position: absolute;
//     bottom: 10px;
//     right: 10px;
//   }
// `;

const CardContentWrapper = styled.div`
  background-color: #fff;
  width: 100%;
  box-shadow: 0px 16px 60px rgba(0, 0, 0, 0.12);
  border-radius: 10px;
  padding: 20px;
  .expandIcon {
     width: 13px;
     height: 10px;
     position: absolute;
     bottom: 10px;
     right: 10px;
   }
`;

const UserImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  @media screen and (max-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;
