import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const Indicator = () => {
  const [show360, setShow360] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setShow360(false));

    return () => clearTimeout(timeout);
  }, []);

  return (
    <motion.div
      animate={{ opacity: show360 ? 1 : 0 }}
      transition={{ duration: 0.3, delay: 2, ease: 'easeIn' }}
      className='flex items-center justify-center w-full h-screen pointer-events-none'
    >
      <Image
        src='/assets/icons/360deg.webp'
        alt='360 Indicator'
        width='120'
        height='120'
      />
    </motion.div>
  );
};

export default Indicator;
