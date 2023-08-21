import React from 'react';
      import Card from 'react-bootstrap/Card';

   const Player = ({ name, team, nationality, jerseyNumber, age, image }) => {
    return (
      <Card className="player-card">
        <img className="player-image" src={process.env.PUBLIC_URL + image} alt={name} />
        <Card.Body className="player-info">
          <h2>{name}</h2>
          <p>Team: {team}</p>
          <p>Nationality: {nationality}</p>
          <p>Jersey Number: {jerseyNumber}</p>
          <p>Age: {age}</p>
        </Card.Body>
      </Card>
    );
  };
  
  export default Player;