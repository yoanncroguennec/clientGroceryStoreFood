import { Box, Container } from "@mui/material";
// STYLES
import { styled } from "@mui/material/styles";

export const BoutonPseudoSticky = styled(Container)(() => ({
    alignItems: "center",
    boxShadow: "rgb(38, 57, 77) 0px 20px 120px 5px",
    border: "5px solid black",
    background: "linear-gradient(to right top, #d16ba5, #d570ad, #da75b4, #de7abc, #e27fc4, #e07cca, #de7ad0, #db78d6, #ce6fde, #bd67e7, #a662f1, #875ffb)",
    borderRadius: "50%",
    display: "flex",
    flex: "nowrap",
    height: "120px",
    fontWeight: "700",
    padding: 5,
    position: "absolute",
    fontSize: "9px",
    right: "20px",
    top: "0px",
    width: "135px", 
}));

export const BoutonNavigationSticky = styled(Container)(() => ({
    alignItems: "center",
    border: "5px solid black",
    borderRadius: "90px 0px 0px 90px",
    display: "flex",
    flex: "nowrap",
    height: "60px",
    padding: 5,
    position: "absolute",
    right: "-20px",
    width: "100px", 
    "&:hover": {
        background: "green",
        boxShadow: "rgb(38, 57, 77) 0px 20px 90px 20px",
        opacity: "0.7",
        right: "0px",
        animation: "$slide 4s infinite"
    },
    "@keyframes slide": {
        "0%":   {left: "0px", opacity: "100%", top: "0px"},
        "50%":   {left: "0px", top: "200px"},
        "100%":  {left: "0px", opacity: "0%", top: "0px"},
    }
}));

export const ActionIconsContainerDesktop = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  position: "sticky",
  top: 50,
  zIndex: "999"
}));

export const ActionIconsContainerMobile = styled(Box)(() => ({
  display: 'flex',
  background: "red",
//   background: "#fff5b4",
  position: "fixed",
  bottom: 0,
  height: "100px",
  width: "100%",
  left: 0,
  width: '100%',
  alignItems: 'center',
  zIndex: 99,  
  borderTop: `1px solid black`
}));

export const AnimationIconRotate = styled('button')(() => ({
    background: "transparent",
    border: "none",
    transform: "rotate(0deg)",
    marginLeft: "-15px",
    "&:hover": {
        animation: "slide 2s 2",
        "@keyframes slide": {
            "0%":   {transform: "rotate(0deg)",},
            "33%":   {transform: "rotate(-45deg)",},
            "66%":   {transform: "rotate(45deg)",},
            "100%":  {transform: "rotate(0deg)",},
        }
    },
}));
