import React from 'react'
import { Box, Card, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
// ROUTES
import Footer from '../../routes/Footer'
import Navbar from '../../routes/navbar/Index'




export default function Delivery() {
  return (
    <>
    
      <Navbar />

        <Box>
            <Typography variant='h4' sx={{marginBottom: 5, fontWeight: "bold"}}>
                Livraison à domicile ou en point relais
            </Typography>

            {/* SECTION TEXT DELIVERY */}
            <Typography>
              À La Fourche, nous vous proposons la livraison de vos courses à domicile ou en point relais. Vous trouverez ici les transporteurs que nous avons sélectionnés ainsi que les frais de livraison appliqués. Nous vous donnons également plus d'informations sur l'empreinte carbone de la livraison, les déchets générés par la livraison et les employés de notre entrepôt.
            </Typography>

            <Typography variant='h5'sx={{marginTop: 1, marginBottom: 1, fontWeight: "bold"}}>
              1. Livraison à domicile
            </Typography>
          
            {/* SECTION TOP CHRONO */}
            <Card sx={{background: "pink", width: 900, margin: "0 auto", padding: 2, textAlign: "center", marginTop: 5, marginBottom: 5}}>
                <img src="/assets/imgs/footerDeliveryPage/logoTopChrono.jpg" style={{width: 150}}/>
                <Typography variant='h5'sx={{marginTop: 1, marginBottom: 1, fontWeight: "bold"}}>
                  Livraison Zéro Déchet à domicile et consigne (3 jours ouvrés)
                </Typography>
                <Typography>
                  Disponible à Paris et en petite couronne : 75 - 92 - 93 - 94
                </Typography>
                <Typography>
                  39 € d'achats et plus : 2,49€ / Moins de 39€ d’achats : 3,49€
                </Typography>
                <Typography>
                  Avec la livraison sans carton Top Chrono, vos courses sont livrées sur le pas de votre porte en 3 jours ouvrés :
                </Typography>
                <Typography>
                  - sur un créneau horaire de 2 heures, de votre choix (du lundi au samedi, entre 14h et 22h)
                </Typography>
                <Typography>
                  - dans des sacs consignés (à rendre au livreur lors de la commande suivante) et sur le pas de votre porte
                </Typography>
                <Typography>
                  Vos sacs en kraft consignés seront ramenés à l'entrepôt La Fourche et réutilisés. 
                </Typography>
                <Typography>
                  Mode de livraison compatible avec notre système de consigne de bocaux et bouteilles. Plus d'infos ici
                </Typography>                
            </Card>


            {/* SECTION GLS */}
            <Card sx={{background: "pink", width: 900, margin: "0 auto", padding: 2, textAlign: "center", marginTop: 5, marginBottom: 5}}>
                <img src="/assets/imgs/footerDeliveryPage/glsLogo.png" style={{width: 150}}/>
                <Typography variant='h5'sx={{marginTop: 1, marginBottom: 1, fontWeight: "bold"}}>
                  Livraison à domicile (3 à 4 jours ouvrés)
                </Typography>
                <Typography>
                  39 € d'achats et plus : 2,49€ / Moins de 39€ d’achats : 3,49€
                </Typography>
                <Typography>
                  Livraison à domicile avec signature en France métropolitaine en 3 à 4 jours ouvrés. Si vous n'êtes pas présent, vous avez le droit à un second passage.
                </Typography>
                <Typography>
                  Cette livraison n'est pas disponible dans les territoires d'outre-mer français (DROM-COM).
                </Typography>     
            </Card>





            <Typography variant='h5'sx={{marginTop: 1, marginBottom: 1, fontWeight: "bold"}}>
              2. Livraison courses en point relais
            </Typography>

            {/* SECTION RELAIS COLIS */}
            <Card sx={{background: "pink", width: 900, margin: "0 auto",padding: 2, textAlign: "center", marginTop: 5, marginBottom: 5}}>
                <img src="/assets/imgs/footerDeliveryPage/logoRelaisColis.jpg" style={{width: 150}}/>
                <Typography variant='h5'sx={{marginTop: 1, marginBottom: 1, fontWeight: "bold"}}>
                  Livraison courses en point relais Relais colis (4 à 5 jours ouvrés)
                </Typography>
                <Typography>
                  49 € d'achats et plus : GRATUIT / Moins de 49€ d’achats : 1,99€
                </Typography>
                <Typography>
                  5 000 points relais en France.
                </Typography>
                <Typography>
                  Livraison sous 4 à 5 jours ouvrés. Nous ne livrons pas dans les territoires d'outre-mer (DROM-COM).
                </Typography>
                <Typography>
                    <Link to="https://www.relaiscolis.com/trouver-un-relais">
                      Trouvez le point relais le plus proche de chez vous
                    </Link>
                </Typography>       
            </Card>

            {/* SECTION MONDIAL RELAY */}
            <Card sx={{background: "pink", width: 900, margin: "0 auto",padding: 2, textAlign: "center", marginTop: 5, marginBottom: 5}}>
                <img src="/assets/imgs/footerDeliveryPage/logoMondialRelay.png" style={{width: 150}}/>
                <Typography variant='h5'sx={{marginTop: 1, marginBottom: 1, fontWeight: "bold"}}>
                  Livraison courses en point relais Mondial Relay (4 à 5 jours ouvrés) 
                </Typography>
                <Typography>
                  FRANCE / BELGIQUE / LUXEMBOURG : 49 € d'achats et plus : GRATUIT / Moins de 49€ d’achats : 1,99€
                </Typography>
                <Typography>
                  7 000 points relais en France, en Belgique et au Luxembourg.
                </Typography>
                <Typography>
                  Livraison sous 4 à 5 jours ouvrés. Nous ne livrons pas dans les territoires d'outre-mer (DROM-COM).
                </Typography>
                <Typography>
                    <Link to="https://www.mondialrelay.fr/trouver-le-point-relais-le-plus-proche-de-chez-moi">
                      Trouvez le point relais le plus proche de chez vous
                    </Link>
                </Typography>             
            </Card>

            {/* SECTION UPS */}
            <Card sx={{background: "pink", width: 900, margin: "0 auto",padding: 2, textAlign: "center", marginTop: 5, marginBottom: 5}}>
                <img src="/assets/imgs/footerDeliveryPage/logoUPS.png" style={{width: 150}}/>
                <Typography variant='h5'sx={{marginTop: 1, marginBottom: 1, fontWeight: "bold"}}>
                  Livraison courses en point relais UPS (4 à 5 jours ouvrés)
                </Typography>
                <Typography>
                  49 € d'achats et plus : GRATUIT / Moins de 49€ d’achats : 1,99€
                </Typography>
                <Typography>
                  4 500 points relais en France.
                </Typography>
                <Typography>
                  Livraison sous 4 à 5 jours ouvrés. Nous ne livrons pas dans les territoires d'outre-mer (DROM-COM).
                </Typography>
                <Typography>
                    <Link to="https://www.ups.com/dropoff/?loc=fr_FR">
                      Trouvez le point relais le plus proche de chez vous
                    </Link>
                </Typography>                            
            </Card>

        </Box>

      <Footer />
    
    </>
  )
}
