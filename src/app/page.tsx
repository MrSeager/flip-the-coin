import Image from 'next/image';
//Components
import CoinFlip from './CoinFlip';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button } from 'react-bootstrap';
//Spring
import { useSpring, animated } from '@react-spring/web';

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
  return <CoinFlip />;
}
