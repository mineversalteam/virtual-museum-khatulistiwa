import { ViewerValues } from '@/hooks/ViewerContext';
import { motion } from 'framer-motion';

interface IProps {
  data: ViewerValues;
}

// eslint-disable-next-line react/display-name
const Loader = ({ data }: IProps) => {
  return (
    <motion.div
      animate={{ y: data.loading ? '0' : '-100vh' }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      initial={false}
      className={[
        'select-none absolute w-full h-screen top-0 left-0 bg-gray-800 z-30 font-minecraftTen text-gray-50 text-5xl flex items-center justify-center',
        data.loading ? 'pointer-events-auto' : 'pointer-events-none',
      ].join(' ')}
      onAnimationComplete={({ y }: { y: string }) =>
        y === '0'
          ? data.emitter.emit('loader:close')
          : data.emitter.emit('loader:open')
      }
    >
      <h2>Loading</h2>
    </motion.div>
  );
};

export default Loader;
