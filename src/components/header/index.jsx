import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import styled from "styled-components";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import CloseIconImage from "@mui/icons-material/Close";
import {
  Container,
  FillItem,
  Grid,
  GridItem,
} from "../../styled-component/container";
import { Text } from "../../styled-component/typography";
import ImageLogo from "../../assets/logo.png";
import GradiantButtonFill from "../../styled-component/buttons/custom-button/graidantButtonFill";
import { useHistory } from "react-router-dom";
const Header = ({match}) => {
  const [open, setOpen] = React.useState(false);
  console.log(match);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        style={{ backgroundColor: "transparent" }}
        elevation={0}
      >
        <DesktopHeader>
          <DesktopAppBar match={match} />
        </DesktopHeader>
        <MobileHeader>
          <MobileAppBar open={open} toggle={setOpen} mathc={match} />
        </MobileHeader>
      </AppBar>
      <TemporaryDrawer open={open} setOpen={setOpen} />
    </Box>
  );
};

export default Header;

const DrawerItems = [
  {
    name: "Inicio",
    link: "/",
  },
  {
    name: "Casos",
    link: "/casos",
  },

  {
    name: "Precios",
    link: "/pricing",
  },
  {
    name : "Afiliados",
    link: "/afiliados",
  },
];

function TemporaryDrawer({ open, setOpen }) {
  const history = useHistory();
  
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpen(open);
  };

  const list = () => (
    <Box
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
      style={{marginTop : "30px"}}
    >
      <CloseIcon>
        <CloseIconImage />
      </CloseIcon>
      <List>
        {DrawerItems.map((item, index) => (
          <ListItem
            button
            key={item.name}
            onClick={() => {
              history.push(item.link);
            }}
          >
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={item.name} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
      <React.Fragment>
        {/* <Button onClick={toggleDrawer(true)}>{"open"}</Button> */}
        <Drawer anchor={"left"} open={open} onClose={toggleDrawer(false)}>
          {list()}
        </Drawer>
      </React.Fragment>
    </div>
  );
}

const MobileAppBar = ({ open, toggle , match }) => {
  const history = useHistory();
  return (
    <Toolbar style={{ width: "100%" }}>
      <Container style={{ margin: "0 auto", padding: 0 }} semiFluid>
        <Grid aCenter jCenter>
          <GridItem onClick={()=>{history.push("/")}}>
            <IconImageMobile src={ImageLogo} alt={"image-logo"} />
          </GridItem>
          <FillItem />
          <GridItem>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={() => toggle(true)}
            >
              <MenuIcon style={{ color: "#00657C" }} />
            </IconButton>
          </GridItem>
        </Grid>
      </Container>
    </Toolbar>
  );
};

const DesktopAppBar = ({match}) => {
  const history = useHistory();

  return (
    <Toolbar style={{ width: "100%", padding: 0 }}>
      <Container style={{ margin: "0 auto", padding: 0 }}>
        <Grid aCenter jCenter>
          <GridItem
            onClick={() => {
              history.push("/");
            }}
          >
            <IconImage src={ImageLogo} alt={"image-logo"} />
          </GridItem>
          <FillItem />
          <GridItem lg={5} lmd={6} md={8} sm={10}>
            <Grid aCenter jEnd gap={20}>
              <GridItem>
                <NavLinks variant={7} onClick={() => history.push("/")}>
                  Inicio
                  {match?.path == "/" && (
                    <UnderLine className={"underline-navbar"} />
                  )}
                </NavLinks>
              </GridItem>
              <GridItem>
                <NavLinks variant={7} onClick={() => history.push("/casos")}>
                  Casos
                  {match?.path == "/casos" && (
                    <UnderLine className={"underline-navbar"} />
                  )}
                </NavLinks>
              </GridItem>
              <GridItem>
                <NavLinks variant={7} onClick={() => history.push("/pricing")}>
                  Precios
                  {match?.path == "/pricing" && (
                    <UnderLine className={"underline-navbar"} />
                  )}
                </NavLinks>
              </GridItem>
              {/* <FillItem style={{maxWidth : "100px"}}/> */}
              <div style={{ width: "0px", display: "block" }}></div>
              <GridItem>
                <NavLinks
                  colorFill
                  variant={7}
                  wt={900}
                  style={{ fontSize: "1rem", marginLeft: "50px" }}
                >
                  Acceder
                  {match?.path == "/acceder" && (
                    <UnderLine className={"underline-navbar"} />
                  )}
                </NavLinks>
              </GridItem>
              <GridItem>
                <GradiantButtonFill
                  width={"150px"}
                  height={"45px"}
                  borderRadius={3}
                  onClick={() => {
                    history.push("/afiliados");
                  }}
                >
                  Registrarse
                </GradiantButtonFill>
              </GridItem>
            </Grid>
          </GridItem>
        </Grid>
      </Container>
    </Toolbar>
  );
};

const IconImage = styled.img`
  width: 200px;
  height: auto;
  object-fit: contain;
`;

const IconImageMobile = styled.img`
  width: 100px;
  height: auto;
  object-fit: contain;
`;

const NavLinks = styled(Text)`
  font-family: "Oxanium";
  font-weight: bold;
  text-align: center;
  line-height: 22px;
  color: #505a5c;
  position: relative;
  cursor: pointer;
  font-size: 1rem;
  .underline-navbar {
    width: 100%;
    transition: width 200ms linear;
  }
  margin-left: 15px;
  margin-right: 15px;
  @media screen and (max-width: 900px) {
    margin-left: 0px;
    margin-right: 0px;
  }
  /* &:hover {
    .underline-navbar {
      width: 100%;
      transition: width 200ms linear;
    }
  } */
`;

const UnderLine = styled.div`
  content: "";
  width: 0;
  height: 3px;
  display: block;
  background-color: black;
  position: absolute;
`;

const UnderLineColor = styled.div`
  content: "";
  width: 0;
  height: 3px;
  display: block;
  background: linear-gradient(
    90deg,
    #06d9ca 4.88%,
    #19b6f0 46.67%,
    #6e6cff 86.76%
  );

  position: absolute;
`;

export const DesktopHeader = styled.div`
  display: flex;
  width: 100%;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const MobileHeader = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

const CloseIcon = styled.div`
  position : absolute;
  top : 10px;
  right : 10px;
  
`
