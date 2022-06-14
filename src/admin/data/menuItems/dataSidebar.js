import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

export const menuItems = [
        {
            name: "Dashboard",
            to: '/homeAdmin',
            icon: <DashboardIcon />,
        },
        {
            name: "Utilisateurs",
            to: '/users',
            icon: <PersonOutlineIcon />,
        },
        {
            name: "Produits",
            to: '/products',
            icon: <StoreIcon />,
        },
        // {
        //     name: "Livraison",
        //     to: '#',
        //     icon: <LocalShippingIcon />,
        // },
        // {
        //     name: "Statistiques",
        //     to: '#',
        //     icon: <InsertChartIcon />,
        // },
        // {
        //     name: "Paramètres",
        //     to: '#',
        //     icon: <SettingsApplicationsIcon />,
        // },  
        {
            name: "Profil",
            to: '/myAccountAdmin',
            icon: <AccountCircleOutlinedIcon />,
        },                               
];
