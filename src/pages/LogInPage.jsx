import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const { useState } = require('react');
const { useDispatch } = require('react-redux');
const { logInThunk } = require('redux/users/users-thunk');

const LogInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword]  = useState('');

  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        throw new Error();
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    dispatch(logInThunk({ email, password }))
      .unwrap()
      .then(() => {
        setEmail('');
        setPassword('');
      })
      .catch(()=>alert('Please fill all fields'));
  };

  return (
    <Container md={{ span: 6, offset: 3 }}>
      <Form onSubmit={handleSubmit}>
        <img
          className="mx-auto h-12 w-auto"
          src="https://play-lh.googleusercontent.com/h6z0ro9wtsxb20fgLaIDXJrXtWqDyvm_Bnfk-q3JFbg08R2PgNq8ZSAoUX1DYDXLofPD=w240-h480-rw"
          alt="Phonebook"
        />
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={handleChange}
            name="email"
            value={email}
            type="email"
            placeholder="Enter email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={handleChange}
            type="password"
            name="password"
            value={password}
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Log in
        </Button>
      </Form>
    </Container>
  );
};

export default LogInPage;
