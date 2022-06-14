import React, { useState, useEffect, useContext } from 'react';
import { Link } from "react-router-dom";
import {Box, Button, Typography} from '@mui/material';
import styled from "@emotion/styled";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
// CONTEXT
import { UserProfileContext } from "../../utils/context/UserProfileContext"
import { AuthContext } from '../../../admin/utils/context/AuthContext'
// STYLES
import CssTextField from "../../styles/Material_UI/forms/StylesChekout"




// COMPONENT STYLES
const BoxConfirmCart = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  maxWidth: 500,
  lineHeight: 1.5,
}));


export default function ConfirmCart() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const {user} = useContext(AuthContext)
  const [disable, setDisable] = useState(true)

  // FIRST NAME
  function upperCaseFirst(a){
    return (a+'').charAt(0).toUpperCase()+a.substr(1);
  }
  const firstCapitalLetterFirstName = upperCaseFirst(`${user.details.username}`);
  // console.log(firstCapitalLetterFirstName) 
  
  // LAST NAME 
  const lastNameLowerCase = `${user.details.lastname}`
  const lastNameUpperCase = lastNameLowerCase.toUpperCase();
  // console.log(lastNameUpperCase)


    const value = useContext(UserProfileContext)

    const {
        address, 
        zipCode, 
        city, 
        setUserProfileContext
    } = value

    const handleChange = (e) => {
      if(e.target.value.length >= 3){
        setUserProfileContext({[e.target.name]: e.target.value})
        setDisable(false)
      }else{
        setDisable(true)
      }
    }

    return (
      <>
        <BoxConfirmCart
          component="form"
          // width= {matches ? "70%" : "70%"}
          sx={{
            alignItems: "center",
            border: "3px solid black",
            borderRadius: 10,
            boxShadow: "rgba(0, 0, 0, 0.56) 0px 22px 70px 4px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            margin: "0 auto",
            mb: 5,
            mt: 5,
            height: 450,
            
          }}
          noValidate
          autoComplete="off"
        >
              <Typography align='center' variant='h4'>Coordonnées :</Typography>
              <Typography style={{marginTop: 20, marginBottom: 10}}>{lastNameUpperCase} {firstCapitalLetterFirstName}</Typography>

              <Typography>{user.details.email}</Typography>
              
              <CssTextField
                  defaultValue={address}
                  required
                  label="Adresse Postal"
                  name="address"
                  onChange={handleChange}
                  style={{marginTop: 20, marginBottom: 20}}
                  type="text"
                />

                <CssTextField
                  defaultValue={zipCode}
                  name="zipCode"
                  required
                  label="Code Postal"
                  onChange={handleChange}
                  type="text"
                />
                <CssTextField
                  defaultValue={city}
                  required
                  label="Ville"
                  name="city"
                  onChange={handleChange}
                  style={{marginTop: 20, marginBottom: 20}}
                  type="text"
                />
              

                <Button
                  disabled = {disable}
                  style={{background: "rebeccapurple", cursor: "pointer", padding: "10px", width: 200}}
                  variant='contained'
                >
                  <Link
                    to={"/summaryCheckout"}
                    state= {{
                      lastNameUpperCase: `${lastNameUpperCase}`,
                      firstCapitalLetterFirstName: `${firstCapitalLetterFirstName}`,
                      email: `${user.details.email}`,
                    }}
                  >
                    ENVOYEZ
                  </Link>
                </Button>
        </BoxConfirmCart>
      </>
    );
}