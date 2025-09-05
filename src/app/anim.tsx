import { useSpring } from '@react-spring/web';

export const useHover = ( hover: boolean, scl: number ) => 
    useSpring({
        scale: hover ? scl : 1,
        config: { tension: 110, friction: 10 },
    });

export const useScale = ( onScreen: boolean ) =>
    useSpring({
        from: { opacity: 0, transform: 'scale(0)' },
        to: { opacity: onScreen ? 1 : 0, transform: onScreen ? 'scale(1)' : 'scale(0)' },
        config: { tension: 180, friction: 20 },
    });

export const useSlide = ( onScreen: boolean, x: number, del: number = 0 ) => 
    useSpring({
        from: { opacity: 0, transform: `translateX(${x}px)` },
        to : { opacity: onScreen ? 1 : 0, transform: onScreen ? 'translateX(0px)' : `translateX(${x}px)` },
        config: { tension: 180, friction: 20 },
        delay: del,
    }); 

export const useFade = ( onScreen: boolean ) => 
    useSpring({
        from: { opacity: 0 },
        to: { opacity: onScreen ? 1 : 0 },
        config: { tension: 180, friction: 20 },
    });

export const useSlideTilt = ( onScreen: boolean, x: number, tiltX: number, del: number ) => 
    useSpring({
        from: { opacity: 0, transform: `translateX(${x}px) skewX(${tiltX}deg) rotateX(${tiltX}deg)`, },
        to: { opacity: onScreen ? 1 : 0, transform: onScreen ? 'translateX(0px) skewX(0deg) rotateX(0deg)' : `translateX(${x}px) skewX(${tiltX}deg) rotateX(${tiltX}deg)` },
        config: { tension: 180, friction: 20 },
        delay: del,
    });