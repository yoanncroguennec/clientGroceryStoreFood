import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
// COMPONENTS
import SlideImgsDesktop from "./SlideImgsDesktop";
import SlideImgsMobile from "./SlideImgsMobile";



export default function SlideImgsSliderHeader() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <>
            {matches 
                ? <SlideImgsMobile matches={matches}/>
                : <SlideImgsDesktop matches={matches}/>
            }
        </>
    );
}
