import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

function Home() {
  return (
    <div>
      <Jumbotron>
        <h1>Welcome!</h1>
        <p>Do you like movies? Did you answer { '"YES!"' }? Then we have a CRUD app for you!</p>
        <LinkContainer to="/movies">
          <Button bsStyle="info">Check Out The Movies</Button>
        </LinkContainer>
        <p>or</p>
        <LinkContainer to="/create">
          <Button bsStyle="info">Add a Movie</Button>
        </LinkContainer>
      </Jumbotron>
    </div>
  );
}

export default Home;
