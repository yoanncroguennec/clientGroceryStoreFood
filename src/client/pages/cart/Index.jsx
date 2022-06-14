import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
// COMPONENTS
import CartMobile from "./CartMobile";
import CartDesktop from "./CartDesktop";



export default function CartPage() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <>
            {matches 
                ? <CartMobile matches={matches}/>
                : <CartDesktop matches={matches}/>
            }
        </>
    );
}
