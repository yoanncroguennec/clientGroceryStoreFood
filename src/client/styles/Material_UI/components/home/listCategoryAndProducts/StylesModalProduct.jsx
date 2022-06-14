import styled from "@emotion/styled";
import { Button } from "@mui/material";

export const ButtonCloseModal = styled(Button)({
  position: 'absolute',
  background: "red",
  fontSize: 20,
  color: "black",
  border: "2px solid black",
  borderRadius: "50%",
  top: 5,
  left: 140,
  "&:hover": {
    background: "red",
    boxShadow: "rgb(38, 57, 77) 0px 20px 90px 20px",
    opacity: "0.7"
  },  
});

export const ButtonAddCardModal = styled(Button)({
    background: "red",
    fontSize: 20,
    color: "black"
});