import { useEffect } from 'react';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { renderText } from '../../Function/GeneratedFunction';
import { revealVariants } from '../../Function/AnimatedFunction/AnimatedFunction';

const Home = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.4,delay: 3 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [inView, controls]);

  return (
    <section
      ref={ref}
      data-scroll-section
      style={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <motion.h1
        className="text-3xl font-bold mb-4 text-white"
        initial="hidden"
        animate={controls}
        variants={revealVariants()}
      >
        {renderText({
          text: 'Welcome to My Portfolio',
          controls,
          variants: revealVariants(),
        })}
      </motion.h1>

      <motion.h1
        className="text-3xl font-bold mb-4 text-white"
        initial="hidden"
        animate={controls}
        variants={revealVariants()}
      >
        {renderText({
          text: 'Hello, I am John Doe',
          controls,
          variants: revealVariants(),
        })}
      </motion.h1>
    </section>
  );
};

export default Home;
