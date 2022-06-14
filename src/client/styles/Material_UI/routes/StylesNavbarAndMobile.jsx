import { IconButton, List, Typography } from "@mui/material";
import {styled} from "@mui/material/styles";
import { Box } from "@mui/system";
import "@fontsource/montez";
// import { Colors, DrawerWidth } from "../theme";
// import { textPopUpTop } from "../../animation";



// SECTION DESKTOP
export const NavbarContainer = styled(Box)(() => ({
    display: 'flex',
    marginTop: 0,
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2px 8px',
    with: "100%"
}));

export const ListItemsNavbar = styled(List)(({  }) => ({
    display: "flex",
    flexGrow: 3,
    justifyContent: "center",
    alignItems: "center",
    // color: "#3d2514",
}));

// SECTION MOBILE
export const AppbarContainer = styled(Box)(() => ({    
  display: 'flex',
  marginTop: 4,
  justifyContent: 'center',
  alignItems: 'center',
  padding: '2px 8px'
}));

export const TitleNavbar = styled(Typography)(() => ({
  padding: "4px",
  flexGrow: 1,
  fontSize: "2.5em",
  fontFamily: '"Montez", "cursive"',
  // color: "green",
  // "&:hover": {
  //   animation: `${textPopUpTop} 0.5s cubic-bezier(0.455, 0.030, 0.515, 0.955) both`,
  // },
}));

// SECTION ACTIONS NAVBAR DESKTOP & MOBILE
export const ActionIconsContainerMobile = styled(Box)(() => ({
  display: 'flex',
  background: "#fff5b4",
  position: "fixed",
  bottom: 0,
  left: 0,
  width: '100%',
  alignItems: 'center',
  zIndex: 99,  
  borderTop: `1px solid black`
}));

export const ActionIconsContainerDesktop = styled(Box)(() => ({
  flexGrow: 0,
}));

export const MyList = styled(List)(({ type }) => ({
    display: type === "row" ? "flex" : "block",
    flexGrow: 3,
  justifyContent: "center",
  alignItems: "center",
}));

// SECTION BUTTON CLOSE DRAWER
export const DrawerCloseButton = styled(IconButton)(() => ({
  position: 'absolute',
  top: 5,
  left: 70,
  zIndex: 1999,      
}));