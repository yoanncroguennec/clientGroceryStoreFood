import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
// COMPONENTS
import RequirementsDesktop from "./RequirementsDesktop";
import RequirementsMobile from "./RequirementsMobile";



export default function ListCategoriesAndProducts() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <>
            {matches 
                ? <RequirementsMobile matches={matches}/>
                : <RequirementsDesktop matches={matches}/>
            }
        </>
    );
}
