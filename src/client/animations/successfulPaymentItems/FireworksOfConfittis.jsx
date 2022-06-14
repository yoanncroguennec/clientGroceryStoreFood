import React, { useCallback, useEffect, useRef, useState } from "react";
import ReactCanvasConfetti from "react-canvas-confetti";

const canvasStyles = {
  height: "100%",  
  left: 0,  
  position: "fixed",
  pointerEvents: "none",
  top: 0,
  width: "100%"
};

export default function Fireworks({btnDisabled}) {
  const refAnimationInstance = useRef(null);
  const [intervalId, setIntervalId] = useState();

  const getInstance = useCallback((instance) => {
    refAnimationInstance.current = instance;
  }, []);
  
  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  function getAnimationSettings(originXA, originXB) {
  // LIST ACCESSORIES
  return {
    // "default: 45" : Vitesse les confettis commenceront à aller, en pixels.
    startVelocity: 30,
    // "default: 45" : Jusqu'où les confettis peuvent-ils être décentrés, en degrés. 45 signifie que les confettis seront lancés à l'angle défini plus ou moins 22,5 degrés.
    spread: 360,
    // "default: 200" : Combien de fois les confettis se déplaceront
    ticks: 60,
    // "default: 100" : Les confettis doivent être au-dessus
    zIndex: 0,
    // Nombre de confettis lancé
    particleCount: 150,
    // D'où commence à tirer des confettis
    origin: {
      // "0" étant le bord gauche et "1" le bord droit
      x: randomInRange(originXA, originXB),
      // "0" étant le bord supérieur et "1" le bord inférieur
      y: Math.random() - 0.2
    }
  };
}

  const nextTickAnimation = useCallback(() => {
    if (refAnimationInstance.current) {
      // Représente le feux d'artifice de GAUCHE
      refAnimationInstance.current(getAnimationSettings(0.1, 0.3));
      // Représente le feux d'artifice de DROITE
      refAnimationInstance.current(getAnimationSettings(0.7, 0.9));
    }
  }, []);

  const startAnimation = useCallback(() => {
    if (!intervalId) {
      setIntervalId(setInterval(nextTickAnimation, 400));
    }
  }, [intervalId, nextTickAnimation]);

  useEffect(() => {
    return () => {
      clearInterval(intervalId);
    };
  }, [intervalId]);

  return (
    <>
      <div>
        <button
          disabled={btnDisabled}
          onClick={startAnimation}
        >
          Payer
        </button>
      </div>
      <ReactCanvasConfetti refConfetti={getInstance} style={canvasStyles} />
    </>
  );
}
