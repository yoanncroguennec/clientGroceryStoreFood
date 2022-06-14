import React from 'react';
import {Box, Button, TextField, Typography} from '@mui/material';
import { Link } from 'react-router-dom';
import emailjs from "emailjs-com"
// STYLES
import CssTextField from "../styles/Material_UI/forms/StylesChekout"
// ROUTES
import Navbar from '../routes/navbar/Index';
import Footer from '../routes/Footer';





export default function Contact() {

  function sendEmail(e){
    e.preventDefault();

    emailjs.sendForm(
      'service_xnnb9wq',
      'template_550exij',
      e.target,
      'user_Mf8puMM0HZTsfgKbG7GFR'
    ).then(res => {
      console.log(res);
    }).catch(err => console.log(err));
  }
  
  return (
    <>
    
      <Navbar />
    
        <Box
        component="form"
        sx={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "600px",
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <Typography variant='h4'>NOUS CONTACTEZ :</Typography>
        <form onSubmit={sendEmail}>
          <div>
              <CssTextField label="Prénom" name='firstName' id="" />
              <CssTextField label="Nom de Famille" name='lastName' id="" />
              <CssTextField label="Email" name='userEmail' id="" />
          </div>
          <div>
              <CssTextField label="Adresse Postal" name='address' id="" />
              <CssTextField label="Code Postal" name='postalCode' id="" />
              <CssTextField label="Ville" name='city' id="" />
          </div>           
          <div>
            <TextField
              id=""
              label="Tapez ici votre message 😀"
              name='message'
              multiline
              rows={7}
              style={{ width: "700px" }}
            />
          </div>
          <Link to="#">
            <Button variant="contained" type='submit'>Envoyez</Button>
          </Link>
        </form>
      </Box> 
    
      <Footer />
    
    </>

  )
}
