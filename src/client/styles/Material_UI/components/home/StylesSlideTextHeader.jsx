import { Box, styled } from "@mui/system";

export const PromotionsContainer = styled(Box)(({ theme }) => ({
  alignItems: "center",
  background: "pink",
  display: "flex",
  justifyContent: "center",
  border: "5px solid black",
  height: "200px",
  [theme.breakpoints.down('sm')]: {
    height: 100,
  }  
}));
