import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ContainerBanner = styled(Box)(({ matches, theme }) => ({
    background: "green",
    display: "flex",
    height: "100%",
    justifyContent: "center",
    padding: "0px 0px",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
        alignItems: "center",
        flexDirection: "column",
    },
}));

export const BannerContent = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    maxWidth: 420,
    padding: "30px",
}));

export const BannerImage = styled("img")(({ src, theme }) => ({
    src: `url(${src})`,
    width: "500px",
    [theme.breakpoints.down("md")]: {
        width: "350px",
    },
    [theme.breakpoints.down("sm")]: {
        height: "300px",      
        width: "320px",
    },
}));

export const BannerTitle = styled(Typography)(({ matches, theme }) => ({
    lineHeight: 1.5,
    fontSize: "72px",
    marginBottom: "20px",
    [theme.breakpoints.down('sm')]: {
        fontSize: '42px',    
    }
}));

export const BannerDescription = styled(Typography)(({ theme }) => ({
    letterSpacing: 1.25,
    lineHeight: 1.25,
    marginBottom: "3em",
    [theme.breakpoints.down("md")]: {
        letterSpacing: 1.15,        
        lineHeight: 1.15,
        marginBottom: "1.5em",
    },
}));

export const BannerShopButton = styled("Button")(() => ({
    background: "#5f2c3e",
    border: "none",
    boxShadow: "12px 12px 2px 1px rgba(0, 0, 255, .2)",
    color: "white",
    fontSize: "19px",
    fontWeight: "bold",
    padding: "20px 20px",
}));
