import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
// ROUTES
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";



export default function Navbar() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <>
            {matches 
                ? <NavbarMobile matches={matches}/>
                : <NavbarDesktop matches={matches}/>
            }
        </>
    );
}
