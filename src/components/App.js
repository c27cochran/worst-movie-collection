import React from 'react';
import { Link } from 'react-router';
import { Navbar, Nav, NavItem, Grid, Row, Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import '../assets/styles/App.css';

function App({ children }) {
  return (
    <div className="App">
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Worst Movie Collection</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <LinkContainer to="/add">
              <NavItem eventKey={1}>Add a Movie</NavItem>
            </LinkContainer>
            <LinkContainer to="/movies">
              <NavItem eventKey={2}>All Movies</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Grid>
        <Row>
          <Col>
            <div>{ children }</div>
          </Col>
        </Row>
      </Grid>
    </div>
  );
}

App.propTypes = {
  children: React.PropTypes.element.isRequired,
};

export default App;
