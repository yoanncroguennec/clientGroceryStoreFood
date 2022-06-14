import React, { useContext, useEffect, useState } from 'react';
import { Grid,
  List,
  ListItemText,
  Typography,
  Button,
  Stack,
  Container,
  TextField,
} from "@mui/material";
import { Link, useNavigate } from 'react-router-dom';
import { Box } from '@mui/system'
// ICONS
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import SendIcon from "@mui/icons-material/Send";
// CONTEXT
import { AuthContext } from '../../admin/utils/context/AuthContext';





export default function Footer() {

    // SECTION BUTTON PAY REDIRECTED USER IF NOT LOGGED IN
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleClick = () => {
        if (user) {
        navigate("/myAccount");
        } else {
        navigate("/login");
        }
    };  


  return (
    <Box
      sx={{
        background: "#333",
        color: "#fff",
        p: { xs: 4, md: 10 },
        pt: 12,
        pb: 12,
        fontSize: { xs: '12px', md: '14px' }
      }}
    >
      <Grid container spacing={2} justifyContent="center">


        {/* LegalInformation */}
        <Grid item lg={2} md={6}>
          <Typography variant="body1" sx={{ color: "white"}}>Mentions Légales</Typography>
          <List>
            <Link to="/generalTermsForSaleAndUse" className='link'>
              <Typography>
                <Typography lineHeight={2} variant="caption2" sx={{ color: "white"}}>CGV/CGU</Typography>
              </Typography>
            </Link>
            <Link to="/privacyPolicy" className='link'>
              <Typography>
                {/* <Typography lineHeight={2} variant="caption2">Politique de Confidentialité</Typography> */}
              </Typography>
            </Link>
            <Link to="/cookiePolicy" className='link'>
              <Typography>
                <Typography lineHeight={2} variant="caption2" sx={{ color: "white"}}>Politique de Cookies</Typography>
              </Typography>
            </Link>
          </List>
        </Grid>

        {/* CustomerService */}
        <Grid item lg={2} md={6}>
          <Typography variant="body1" sx={{ color: "white"}}>Service Client</Typography>
          <List>
            <Link to="/contact" className='link'>
              <Typography>
                <Typography lineHeight={2} variant="caption2" sx={{ color: "white"}}>Nous Contacter</Typography>
              </Typography>
            </Link>
            <Link to="/delivery" className='link'>
              <Typography>
                <Typography lineHeight={2} variant="caption2" sx={{ color: "white"}}>La Livraison</Typography>
              </Typography>
            </Link>
            <Link to="/securePayment" className='link'>
              <Typography>
                <Typography lineHeight={2} variant="caption2" sx={{ color: "white"}}>Paiement Sécurisé</Typography>
              </Typography>
            </Link>
          </List>
        </Grid>

        {/* MyAccount */}
        <Grid item lg={2} md={6}>
          <Typography variant="body1">Mon Compte</Typography>
          <List>
            <Link to="/login" className='link'>
              <Typography>
                <Typography lineHeight={2} variant="caption2" sx={{ color: "white"}}>Se Connecter</Typography>
              </Typography>
            </Link>
            <Link to="/cart" className='link'>
              <Typography>
                <Typography lineHeight={2} variant="caption2" sx={{ color: "white"}}>Mon panier</Typography>
              </Typography>
            </Link>
            <Button onClick={handleClick}>
              <Typography>
                <Typography lineHeight={2} variant="caption2" vsx={{ color: "white"}}>Mon compte</Typography>
              </Typography>
            </Button>
            <Link to="/wishList" className='link'>
              <Typography>
                {/* <Typography lineHeight={2} variant="caption2">Ma liste de souhaits</Typography> */}
              </Typography>
            </Link>
          </List>
        </Grid>

        {/* Newsletter */}
        <Grid item lg={4} md={6}>
          <Typography variant="body1">newsletter</Typography>
          <Stack>
            <TextField
              color="primary"
              label="Email address"
              variant="standard"
            />
            <Button
              startIcon={<SendIcon sx={{ color: "white" }} />}
              sx={{ mt: 4, mb: 4 }}
              variant="contained"
            >
              Subscribe
            </Button>
          </Stack>
        </Grid>

      </Grid> 
    </Box>
  )
}
