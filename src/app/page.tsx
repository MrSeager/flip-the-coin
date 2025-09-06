//Components
import CoinFlip from './CoinFlip';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

export const generateMetadata = () => {
  return {
    title: 'Flip the Coin',
    description: 'Try your luck with a spinning coin. Heads or tails?',
    keywords: ['coin flip', 'randomizer', 'heads or tails', 'game'],
    openGraph: {
      title: 'Flip the Coin',
      description: 'Try your luck with a spinning coin. Heads or tails?',
      images: [
        {
          url: 'https://raw.githubusercontent.com/MrSeager/flip-the-coin/refs/heads/main/src/resources/heads.svg',
          width: 150,
          height: 150,
        },
      ],
    },
  };
};

export default function Home() {
  return (
    <Container className="user-select-none cs-fc-main text-center py-lg-0 py-5 min-vh-100 d-flex flex-column align-items-center justify-content-center gap-3">
      <h1 className="m-0 display-1 fw-bold cs-text-shadow">Flip the coin</h1>
      <h2 className='m-0'>Press the coin or the button to flip the coin</h2>
      <CoinFlip />
    </Container>
  ); 
}
