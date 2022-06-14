import { useEffect, useRef, useState } from "react";
import { Slide, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
// STYLES
import { PromotionsContainer } from '../../styles/Material_UI/components/home/StylesSlideTextHeader';



const messages = [
  "Nouvelle arrivage de Fruits Frais 🍉🍉🥥🥥🍍🍍🍓🍓!",
  "La vente d'été commence maintenant !!!!!",
  "Bonne visite 😃 😉 !",
];


export default function SlideTextHeaderDesktop() {
  const [show, setShow] = useState(true);  
  const [messageIndex, setMessageIndex] = useState(0);
  const containerRef = useRef();

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {

    setTimeout(() => {
      setShow(false);
    }, 3000);
  
    const intervalId = setInterval(() => {
      // get next message
      // 5%2 = 1 car 5 = 2x2 + 1
      // 9%3 = 0 car 9 = 3x3 + 0
      // 12%25 = 12 car 12 = 0x25 + 12
      // 129%64 = 1 car 129 = 2x64 + 1
      // DANS NOTRE CODE QUI EST END-DESSOUS "3" car "2 (Dernier message)+1"
      // 3%3 = 0 car 3 = 1x3 + 0
      // Pour info : On rajoute "% messages.length", pour revenir au premier message
      setMessageIndex((i) => (i + 1) % messages.length);

      // slide the message in
      // Affiche les autres messages
      setShow(true);

      // Cache les autres messages au bout de "3000 sec"
      setTimeout(() => {
        setShow(false);
      }, 3000);
    }, 4000);

    return () => {
      // "clearInterval()" : Efface une minuterie définie
      clearInterval(intervalId);
    };
  }, []);

  return (
    <PromotionsContainer ref={containerRef} overflow="*">
      <Slide
        direction={show ? "left" : "right"}
        in={show}
        container={containerRef.current}
        timeout={{
          enter: 500,
          exit: 100,
        }}
      >
        <Box display="flex" justifyContent="center" alignItems="center">
          <Typography variant={matches ? "h5" : "h3"} lineHeight={1} fontWeight="bold">
            {messages[messageIndex]}
          </Typography>
        </Box>        
      </Slide>
    </PromotionsContainer>
  )
}
