import { motion } from 'framer-motion';
import { AnimationControls, Variants } from 'framer-motion';
import { CSSProperties } from 'react';

interface RenderTextProps {
  text: string;
  controls: AnimationControls;
  variants: Variants;
  style?: CSSProperties;
}

export const renderText = ({ text, controls, variants, style }: RenderTextProps) =>
  [...text].map((char, index) => (
    <motion.span
      key={index}
      custom={index}
      initial="hidden"
      animate={controls}
      variants={variants}
      style={{ display: 'inline-block', ...style }}
    >
      {char}
    </motion.span>
  ));
