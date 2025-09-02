import styles from "./page.module.css";
//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Image, Button } from 'react-bootstrap';
//Spring
import { useSpring, animated } from '@react-spring/web';
//Images
import CoinImg from '@/resources/heads.svg';

export default function Home() {
  return (
    <Container className="min-vh-100 d-flex flex-column align-items-center justify-content-center gap-3">
      <h1>Flip the coin</h1>
      <h2>Press the coin or the button to flip the coin</h2>
      <Image src="/resources/heads.svg" alt="coin" />
    </Container>
  );
}
