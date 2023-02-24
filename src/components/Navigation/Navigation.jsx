import {Link} from "react-router-dom"
const { default: UserInfo } = require('components/UserInfo/UserInfo');
const { Navbar, Container, Nav } = require('react-bootstrap');
const { useSelector } = require('react-redux');
const { selectToken } = require('redux/users/users-selector');



const Navigation = () => {
  const token = useSelector(selectToken);

  return (
    <>
    
    <Navbar bg="dark" variant="dark" className="d-flex">
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>


        <Nav className="me-auto">
          {token && (
            <Nav.Link  to="/contacts" as={Link}>
              Contacts
            </Nav.Link>
          )}
          <Nav.Link to="/signup" as={Link}>
            Sign Up
          </Nav.Link>
          <Nav.Link to="/login" as={Link}>Login</Nav.Link>
        </Nav>
        <UserInfo />
      </Container>
    </Navbar>
    <Container className="d-flex flex-column justify-content-center align-items-center" >
    {/* <img
          className="mx-auto h-12 w-auto"
          src="https://play-lh.googleusercontent.com/h6z0ro9wtsxb20fgLaIDXJrXtWqDyvm_Bnfk-q3JFbg08R2PgNq8ZSAoUX1DYDXLofPD=w240-h480-rw"
          alt="Phonebook"
        /> */}
  <h1 >Wellcome to PhoneBook</h1>
  </Container>
    </>
  );
};

export default Navigation;
