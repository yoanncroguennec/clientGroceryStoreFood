import React from 'react'
import { Box, Typography } from '@mui/material'
// ROUTES
import Footer from '../../routes/Footer'
import Navbar from '../../routes/navbar/Index'




export default function SecurePayment() {
  return (
    <>
    
      <Navbar />

        <Box
          sx={{
            height: 600,
            padding: 10
          }}
        >
            <Typography variant='h4' sx={{marginBottom: 5, fontWeight: "bold"}}>
                La sécurité des moyens de paiement à La Fourche
            </Typography>

            <Typography variant='h5' sx={{marginBottom: 5, fontWeight: "bold"}}>
                Les paiements de l'adhésion ainsi que vos commandes sont 100% sécurisés via notre partenaire Stripe. 
            </Typography>

                <img src="/assets/imgs/securePaymentPage/imgCSecurePayment.avif" style={{width: 550, marginBottom: 20}}/>




              
            <Typography>
              Un partenaire de confiance
            </Typography>
            <Typography>
              Le paiement de l'adhésion à La Fourche est géré par Stripe, un des leaders du paiement en ligne dans le monde et utilisé par des centaines de sites internet en France, dont Facebook, Drivy, Deliveroo, Oxfam, Unicef, Frichty, Heetch, KissKissBankBank, Ulule, National Geographic ou encore Rad.
            </Typography>
            <Typography>
              Stripe est reconnu pour son système de paiement hautement sécurisé et techniquement robuste.
            </Typography>
            <Typography>
              Vos informations bancaires restent privées
            </Typography>
            <Typography>
              Toutes les informations de paiements passent par les serveurs de Stripe. Aucune information de carte bancaire n'apparaît à La Fourche, nous n'y avons jamais accès.
            </Typography>
            <Typography>
              Nous acceptons la majorité des cartes bancaires
            </Typography>
            <Typography>
              Nous acceptons les cartes VISA et Mastercard. En revanche, nous n'acceptons pas encore les cartes American Express, mais cela ne saurait tarder !
            </Typography>                                                   
        </Box>

      <Footer />

    </>
  )
}
