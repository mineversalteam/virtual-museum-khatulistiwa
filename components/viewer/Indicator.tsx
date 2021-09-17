import { ViewerValues } from '@/hooks/ViewerContext';
import { motion } from 'framer-motion';

interface IProps {
  data: ViewerValues;
}

const Indicator = ({ data }: IProps) => {
  return (
    <motion.div
      animate={data.show360 ? 'visible' : 'hidden'}
      variants={{
        visible: {
          opacity: 1,
          transition: {
            duration: 0.01,
            ease: 'easeIn',
          },
        },
        hidden: {
          opacity: 0,
          transition: {
            duration: 0.3,
            ease: 'easeIn',
            delay: 2,
          },
        },
      }}
      className='flex items-center justify-center w-full h-screen pointer-events-none'
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src='/assets/icons/360deg.webp'
        alt='360 Indicator'
        width='120'
        height='120'
      />
    </motion.div>
  );
};

export default Indicator;
