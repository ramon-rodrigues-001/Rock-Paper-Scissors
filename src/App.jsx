import React, { Component, Fragment, useState } from 'react';
import Pontuacion from './components/pontuacion/Score';
import Triangle from './components/original/triangle/Triangle';
import Pentagon from './components/bonus/Pentagon/Pentagon';
import { Resultado, definirResultado } from './components/ResultadoPartida/Resultado';



function App() {
  const [position, setPosition] = useState(0)
  function mudarPosition() {
    setPosition(position === 0 ? 1 : 0);
  }

  let [escolhaIA_escolhaPlayer, setEscolhaIA_escolhaPlayer] = useState(
    {
      escolhaIA: '',
      escolhaPlayer: ''
    }
  )

    // Quantidades de pontos = 0
  let [pontos, setPontos] = useState(0)
  

  function reiniciarEscolhas() {
    setEscolhaIA_escolhaPlayer(escolhaIA_escolhaPlayer = {
      escolhaIA: '',
      escolhaPlayer: ''
    })
  }

  function youEscolha(evento) {
    // Defenido a escolha do IA
    let posibles;
    let ramdomIA;

    if (position == 0) {
      posibles = [
        "rock", 
        "paper", 
        "scissors"]
      ramdomIA = Math.floor(Math.random() * 3)
    }
    else if (position == 1) {
      posibles = [
        "rock", 
        "paper", 
        "scissors", 
        "lizard", 
        "spock"]
      ramdomIA = Math.floor(Math.random() * 5)
    }
    
    // Coletando a escolha do jogador
    const alvo = evento.currentTarget;

    setEscolhaIA_escolhaPlayer(escolhaIA_escolhaPlayer = {
      escolhaIA: posibles[ramdomIA],
      escolhaPlayer: alvo.id
    })

    // Verifica se ganhou e soma pontos 
    const resulted = definirResultado(escolhaIA_escolhaPlayer.escolhaIA, escolhaIA_escolhaPlayer.escolhaPlayer)
    if (resulted === 'ganhou') {
      setPontos(pontos + 1)
    }
    else if (resulted === 'perdeu') {
      setPontos(pontos = 0)
    }
  };



  return (
    <Fragment>
      <Pontuacion 
        position={position}
        pontos={pontos}
      />
      <Pentagon  
        position={position}
        mudarPosition={mudarPosition}
        youEscolha={youEscolha}
        escolhaIA_escolhaPlayer={escolhaIA_escolhaPlayer}

      />
      <Triangle  
        position={position}
        mudarPosition={mudarPosition}
        youEscolha={youEscolha}
        escolhaIA_escolhaPlayer={escolhaIA_escolhaPlayer}
      />
      <Resultado 
        escolhaIA_escolhaPlayer={escolhaIA_escolhaPlayer}
        reiniciarEscolhas={reiniciarEscolhas}
      />
    </Fragment>
  ); 
}

export default App;
