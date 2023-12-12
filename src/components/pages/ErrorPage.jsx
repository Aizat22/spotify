import { Button, Col, Container } from "react-bootstrap";
import Spotify from "../assets/spotify.svg";
import { useNavigate } from "react-router-dom";
const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Container fluid className="bg-dark vh-100">
        <Col>
          <div className="vh-100 d-flex flex-column align-items-center justify-content-center">
            <img src={Spotify} alt="spotify" height={45} />
            <h1 className="mt-4 fw-bold">Page not found</h1>
            <p>We can't seem to find the page you are looking for.</p>
            <Button
              onClick={() => navigate("/")}
              className="rounded-pill bg-white text-black px-4 py-2 fw-semibold mt-3"
            >
              Home
            </Button>
            <br />
            <span className="fw-semibold">Help</span>
          </div>
        </Col>
      </Container>
    </>
  );
};

export default ErrorPage;
