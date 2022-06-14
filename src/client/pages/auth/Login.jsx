import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import {Box, Button, Typography} from '@mui/material';
import axios from "axios";
// IMPORT "TIPPY" => SHOW TOOLTIP
import Tippy from "@tippyjs/react"
import "tippy.js/dist/tippy.css"
// CONTEXT
import { AuthContext } from '../../../admin/utils/context/AuthContext';
// STYLES
import CssTextField from "../../styles/Material_UI/forms/StylesChekout"
// ROUTES
import Navbar from "../../routes/navbar/Index";
import { Container } from '@mui/system';



export default function Login() {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const { user, loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate()

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    console.log(setCredentials);
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/loginClient", credentials);

      
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: res.data
        // payload: res.data.details /// !!!!!!! A REVOIR !!!!!!!
      });

      navigate("/home")



    } catch (err) {
      dispatch({
        type: "LOGIN_FAILURE",
        // payload: err.response.data
        payload: { message: "Vous n'êtes pas inscrit chez nous !"},
      });
    }
  };

  console.log(user);

  return (
    <>
      <Navbar />
    
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "600px",
        }}
        noValidate
        autoComplete="off"
      >
        <Container>
          <Typography variant='h5' align='center'>Pour essayer le site : "yoann" / mdp : "123456789"</Typography>
        </Container>
        <div>
          <Typography variant='h4' align='center'>Se Connecter</Typography>
        </div>
        <div>
          <CssTextField type="text" label="Prénom" id="username" onChange={handleChange} />

          <CssTextField type="password" label="Mot de passe" id="password" onChange={handleChange} />
        </div>

        <div style={{paddingBottom: "20px", alignItems: "center", display: "flex", flexDirection: "column"}}>
          {/* <Tippy content={
            <span style={{color: "orange"}}>
              Pas de compte encore chez nous 😥😥😥
            </span>
          }>
            <Link to="/signup">
              <Button variant='contained'>Inscrivez-vous 😀</Button>   
            </Link>
          </Tippy> */}

          <Button variant='contained' onClick={handleClick}>
            Se connecter
          </Button>
          {error && <span>{error.message}</span>}

          <Link to="/loginAdmin">
            <Button variant='contained'>
              Admin ??
            </Button>
          </Link>
        </div>
      </Box>    
    </>
  )
}
