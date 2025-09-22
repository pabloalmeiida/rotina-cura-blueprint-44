import { useInView } from 'react-intersection-observer';

export const useScrollAnimation = (threshold: number = 0.1) => {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce: true,
  });

  return {
    ref,
    className: inView 
      ? 'animate-in fade-in-0 slide-in-from-bottom-8 duration-700 fill-mode-both' 
      : 'opacity-0 translate-y-8'
  };
};