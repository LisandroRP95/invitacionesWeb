import React from 'react';
import Countdown from 'react-countdown';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import pareja from '../../assets/pareja.jpg';
import './contenido.css';

const Contenido = () => {
  // Configura la fecha objetivo para la cuenta regresiva (por ejemplo, 31 de diciembre de 2024)
  const targetDate = new Date('2024-12-31T23:59:59');

  // Renderizador personalizado para la cuenta regresiva
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <span>¡El evento ha comenzado!</span>;
    } else {
      return (
        <div className="countdown">
          <div className="time-segment">
            <span className="time-value">{days}</span>
            <span className="time-label">Días</span>
          </div>
          <div className="time-segment">
            <span className="time-value">{hours}</span>
            <span className="time-label">Horas</span>
          </div>
          <div className="time-segment">
            <span className="time-value">{minutes}</span>
            <span className="time-label">Minutos</span>
          </div>
          <div className="time-segment">
            <span className="time-value">{seconds}</span>
            <span className="time-label">Segundos</span>
          </div>
        </div>
      );
    }
  };

  return (
    <Container>
      <h1 className="display-3 text-center mt-5 mb-5">Titulo</h1>

      <Card className="text-center mb-5">
        <Card.Body>
          <Card.Title className="display-6 mb-3">Cuenta regresiva:</Card.Title>
          <Countdown date={targetDate} renderer={renderer} />
        </Card.Body>
      </Card>

      <p className="text-center m-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error delectus blanditiis facere soluta temporibus inventore tenetur minus, quam cumque magnam consequatur voluptas porro cum voluptatum nemo enim iusto autem hic voluptate iure quidem quos? Facilis reiciendis, rem atque hic dolor quidem alias voluptates. Sunt iusto quas, quasi quae consectetur quos.
      </p>

      <Image src={pareja} thumbnail />

      <h2 className='display-6 text-center m-5'>Dirección del evento</h2>

      <div className="map-responsive align-items-center mt-5">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d837.1493736047832!2d-60.66083624004921!3d-32.93523114269803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b7abede35d4ed9%3A0xe45a43667e49fe92!2sPizzeria%20Villamil!5e0!3m2!1ses!2sar!4v1717684675658!5m2!1ses!2sar"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </Container>
  );
};

export default Contenido;
