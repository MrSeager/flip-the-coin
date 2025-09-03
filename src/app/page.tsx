import styles from "./page.module.css";
//Components
import './flipTheCoinStyle.css';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Image, Button } from 'react-bootstrap';
//Spring
import { useSpring, animated } from '@react-spring/web';

export default function Home() {
  return (
    <Container className="cs-fc-main text-center py-5 min-vh-100 d-flex flex-column align-items-center justify-content-center gap-3">
      <h1 className="display-1 fw-bold cs-text-shadow">Flip the coin</h1>
      <h2>Press the coin or the button to flip the coin</h2>
      <Button className="border-0 bg-transparent">
        <Image 
          fluid 
          src='https://raw.githubusercontent.com/MrSeager/flip-the-coin/refs/heads/main/src/resources/heads.svg' 
          alt="coin" 
          className=""
        />
        <Image 
          fluid 
          src='https://raw.githubusercontent.com/MrSeager/flip-the-coin/refs/heads/main/src/resources/tails.svg' 
          alt="coin" 
          className="d-none"
        />
      </Button>
      <Image 
        fluid 
        src='https://raw.githubusercontent.com/MrSeager/flip-the-coin/refs/heads/main/src/resources/shadow.svg' 
        alt="shadow" 
        className="mt-5" 
      />
      <h3>Heads</h3>
      <Button type="button" className="cs-btn px-4 py-2 fw-bold border-3 border-top-0 border-start-0 border-end-0 text-uppercase">Random</Button>
    </Container>
  );
}
