import React from 'react'
import { Col, Container, Navbar, Row } from "react-bootstrap";
import Footer from './components/Footer';
import MusicBar from './components/Section/MusicBar';
import { userAtom } from './components/recoil';
import { useRecoilValue } from 'recoil';

function App() {
  const user = useRecoilValue(userAtom);
  return (
    <>
      <Container fluid className="p-0 m-0">
        <Row className="m-0 p-0 ">
          <Col md={2} className="position-fixed m-0 p-0">
            <Navbar />
          </Col>
          <Col md={10} className="p-0 offset-2 ">
          <Footer/>

          </Col>
          {user.user && <MusicBar />}
        </Row>
      </Container>
    </>
  );
}

export default App;
