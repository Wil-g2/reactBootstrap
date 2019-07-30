import React, { useState } from "react";
import { Button, Container, Row, Col, ButtonToolbar } from "react-bootstrap";

// Importing the Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [statusGame, setStatusGame] = useState("Inicial");
  const [initValue, setInitValue] = useState(150);
  const [maxValue, setMaxValue] = useState(300);
  const [minValue, setMintValue] = useState(0);
  const [palpite, setPalpite] = useState(1);

  const IniciarJogo = () => {
    setMaxValue(300);
    setInitValue(150);
    setMintValue(0);
    setPalpite(1);
    setStatusGame("Jogando");
  };

  if (statusGame === "Inicial") {
    return (
      <Container>
        <Row>
          <Col xs={{ span: 3, offset: 6 }}>
            <Button variant="success" onClick={IniciarJogo}>
              Iniciar Jogo
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }

  const menor = () => {
    setPalpite(palpite + 1);
    setMaxValue(initValue);
    const proPalpite = parseInt((initValue - minValue) / 2) + minValue;
    setInitValue(proPalpite);
  };

  const maior = () => {
    setPalpite(palpite + 1);
    setMintValue(initValue);
    const proPalpite = parseInt((maxValue - initValue) / 2) + initValue;
    setInitValue(proPalpite);
  };

  const acertou = () => {    
    setStatusGame("Fim");
  };

  if (statusGame==='Fim') {
    return (
      <Container>
        <Row>         
          <Col xs={{ span: 8, offset: 6 }}>
              <p>Acertou o número {initValue} com {palpite} chutes!</p> 
          </Col>
          <Col xs={{ span: 4, offset: 6 }}>
            <Button variant="success" onClick={IniciarJogo}>
              Iniciar Jogo
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    <div className="App">
      <Container>
        <Row>
          <Col xs={{ span: 4, offset: 6 }}>
            <p>Seu número é: {initValue}</p>
          </Col>
        </Row>
        <Row>
          <Col xs={{ span: 4, offset: 6 }}>
            <p>
              Min {minValue}/ Max {maxValue}
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs={{ span: 6, offset: 4 }}>
            <div>
              <Button variant="success" onClick={menor}>
                Menor 
              </Button>
              <Button variant="success" onClick={acertou}>
                Acertou 
              </Button>
              <Button variant="success"  onClick={maior}>
                Maior 
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
