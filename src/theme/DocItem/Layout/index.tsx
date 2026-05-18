import React from 'react';
import Layout from '@theme-original/DocItem/Layout';
import type LayoutType from '@theme/DocItem/Layout';
import type {WrapperProps} from '@docusaurus/types';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from '@docusaurus/router';

type Props = WrapperProps<typeof LayoutType>;

export default function DocItemLayoutWrapper(props: Props): JSX.Element {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, scale: 0.97, filter: 'blur(5px)' }}
        animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
        exit={{ opacity: 0, scale: 0.97, filter: 'blur(5px)' }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        <Layout {...props} />
      </motion.div>
    </AnimatePresence>
  );
}
