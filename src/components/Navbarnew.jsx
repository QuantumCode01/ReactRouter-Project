
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const Navbarnew=()=>{
  const navigate=useNavigate();
    return(
        <>
            
    <Navbar bg="light">
      <Container>
        <Navbar.Brand as={NavLink} to="/">Navbar</Navbar.Brand>
        <Nav className="m-auto">
          <Nav.Link as={NavLink} to="/">Home</Nav.Link>
          <Nav.Link as={NavLink} to="/about">About</Nav.Link>
          <Nav.Link as={NavLink} to="/product">Product</Nav.Link>
          <Nav.Link as={NavLink} to="/jobs">Jobs</Nav.Link>
        </Nav>
        <Button onClick={()=>navigate('/jobs')}variant="outline-dark">Get Started</Button>
      </Container>
    </Navbar>
 
        </>
        
    )
}
export default Navbarnew