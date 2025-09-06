"use client";
import { useState, useRef } from 'react';
import Image from 'next/image';
//Components
import './flipTheCoinStyle.css';
import { useHover } from './anim';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button } from 'react-bootstrap';
//Spring
import { useSpring, animated } from '@react-spring/web';

export default function CoinFlip() {
    const [side, setSide] = useState<'heads' | 'tails'>('heads');
    const [isFlipping, setIsFlipping] = useState<boolean>(false);
    const [hover, setHover] = useState<boolean>(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const hoverAnim = useHover(hover, 1.05);

    const coinImage = 
        side === 'heads'
        ? 'https://raw.githubusercontent.com/MrSeager/flip-the-coin/refs/heads/main/src/resources/heads.svg'
        : 'https://raw.githubusercontent.com/MrSeager/flip-the-coin/refs/heads/main/src/resources/tails.svg';

    const { rotate } = useSpring({
        rotate: isFlipping ? 36000 : 0,
        config: { duration: isFlipping ? 2000 : 0 },
        reset: true,
    });

    const handleFlip = () => {
        if (audioRef.current) {
            audioRef.current.currentTime = 0;
            audioRef.current.play();
        }

        if (isFlipping) return;
        setIsFlipping(true);

        const flipDuration = 2000;
        const flipInterval = 100;
        let flipCount = 0;

        const interval = setInterval(() => {
        setSide(prev => (prev === 'heads' ? 'tails' : 'heads'));
        flipCount += flipInterval;

        if (flipCount >= flipDuration) {
            clearInterval(interval);
            const finalSide = Math.random() < 0.5 ? 'heads' : 'tails';
            setSide(finalSide);
            setIsFlipping(false);
        }
        }, flipInterval);
    };

    return (
        <Container className='mt-5 d-flex flex-column gap-4 align-items-center'>
            <audio ref={audioRef} src='/coin-flip.mp3' preload='auto' />
            
            <animated.div
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                style={{
                    ...hoverAnim,
                    cursor: 'pointer',
                    transform: rotate.to(r => `rotateY(${r}deg)`),
                }}
                onClick={handleFlip}
            >
                <Image 
                src={coinImage} 
                alt="coin" 
                width={175}
                height={175} 
                priority 
                />
            </animated.div>
            
            <animated.div style={hoverAnim}>
                <Image  
                    src='https://raw.githubusercontent.com/MrSeager/flip-the-coin/refs/heads/main/src/resources/shadow.svg' 
                    alt="shadow" 
                    className="mt-3" 
                    width={130}
                    height={20}
                    priority
                />
            </animated.div>
            <h3 className='text-capitalize'>{side}</h3>
            <Button
                onClick={handleFlip}
                disabled={isFlipping}
                type="button" 
                className="cs-btn px-4 py-2 fw-bold border-3 border-top-0 border-start-0 border-end-0 text-uppercase"
            >
                Random
            </Button>
        </Container>
    );
}