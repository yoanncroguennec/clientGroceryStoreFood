import React, { useContext, useState, useEffect } from 'react'
import { Box, Button, List, ListItem, ListItemText, Divider } from '@mui/material'
import { useNavigate } from 'react-router-dom';
// CONTEXT
import { AuthContext } from '../../utils/context/AuthContext'
// ROUTES
import Sidebar from '../../routes/Sidebar';





export default function MyAccountAdmin() {

  const {user, dispatch} = useContext(AuthContext)
  console.log(user.username)

  const infosMyAccount = [
    {
      title: "Prénom",
      desc: `${user.username}`
    },
    {
      title: "Nom de Famille",
      desc: `${user.lastname}`
    },
    {
      title: "Email",
      desc: `${user.email}`
    },
    {
      title: "Numéro de téléphone",
      desc: `${user.phone}`
    },
    {
      title: "Addresse",
      desc: `${user.address}`
    },
    {
      title: "Code Postal",
      desc: `${user.postal_code}`
    },
    {
      title: "Ville",
      desc: `${user.city}`
    },
    {
      title: "Pays",
      desc: `${user.country}`
    }              
  ]

  const [img, setImg] = useState(user.sex)

  useEffect(() => {
    const imgAvatar = () => {
      if(img === true){
        setImg(
          <img style={{height: "450px", width: "300px"}} src="/assets/imgs/auth/avatar3DFemmeV3.png" alt="avatar3DFemmeV3" />
        )
      }else{
        setImg(
          <img style={{height: "450px", width: "300px"}} src="/assets/imgs/auth/avatar3DHommeV1.png" alt="avatar3DHommeV3" />
        )
      }
    }

    imgAvatar();
  }, [])
  
  const navigate = useNavigate();

  // BUTTON LOGOUT
  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGOUT" });
    navigate("/");
  };

  return (
        <div className="home">
      <Sidebar />
      <div className="homeContainer">
    <Box
      sx={{
        width: 900,
        height: 700,
      }}
    >
      <div style={{alignItems: "center", display: "flex", paddingTop: 50, flexWrap: "nowrap", justifyContent: "center"}}>
        <div>
            {img}
        </div>
        <div>
          <List sx={{}}>
            {infosMyAccount.map((infoMyAccount) => {
              return(
                <>
                  <ListItem>
                    <ListItemText align="center" primary={infoMyAccount.title} secondary={infoMyAccount.desc} sx={{margin: "-1px"}} />
                  </ListItem>
                  <Divider sx={{background: "blue"}} />   
                </>
              )
            })}
            <Button variant='contained' onClick={handleClick}>
              Déconnexion
            </Button>
          </List>
        </div>
      </div>
    </Box>
          </div>
    </div>
  )
}
