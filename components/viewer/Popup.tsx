import { ViewerValues } from '@/hooks/ViewerContext';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import Model from './Model';
import { useGLTF } from '@react-three/drei';

interface IProps {
  data: ViewerValues;
}

const Popup = ({ data }: IProps) => {
  const info = data.hotspots?.[data.activeInfo]?.info;

  useEffect(() => {
    if (info?.media?.url && info?.media?.type === 'model') {
      useGLTF.preload(info?.media?.url);
    }
  }, [info]);

  return (
    <motion.div
      animate={{
        opacity: data.isShowingInfo ? 1 : 0,
      }}
      transition={{ duration: 0.3, delay: 0.3, ease: 'easeInOut' }}
      id='viewer-info-popup'
      className={[
        'absolute bg-black bg-opacity-50 p-12 z-20 top-0 left-0 flex justify-center w-full h-screen',
        data.isShowingInfo ? 'pointer-events-auto' : 'pointer-events-none',
      ].join(' ')}
    >
      <motion.div
        animate={{
          y: data.isShowingInfo ? '0' : '100vh',
        }}
        id='viewer-info-popup-book'
        transition={{ duration: 0.75, ease: 'backInOut' }}
        className='relative inline-block flex-grow'
      >
        <div className='absolute flex flex-col top-0 left-0 z-30 p-12 w-full h-full'>
          <span
            className='z-20 absolute self-end font-minecraftia text-3xl select-none cursor-pointer'
            onClick={() => data.hideInfo()}
          >
            x
          </span>

          <div className='flex-grow flex overflow-hidden'>
            <div
              id='viewer-info-popup-content-left'
              className='flex flex-col w-1/2 pr-8'
            >
              <div className='border-b-2 border-secondary mb-4'>
                <h2 className='font-minecraftTen text-5xl break-words'>
                  {info?.title}
                </h2>
                <p className='mt-1 pb-1 font-dmSans font-semibold text-primary text-xl break-words'>
                  {info?.subtitle}
                </p>
              </div>

              <div className='flex-grow overflow-y-auto'>
                <p className='font-dmSans text-lg break-word pr-4'>
                  {info?.description}
                </p>
              </div>
            </div>

            <div
              id='viewer-info-popup-content-right'
              className='w-1/2 pl-8 z-10'
            >
              {info?.media?.type === 'model' && (
                <Model url={info?.media?.url} />
              )}
            </div>
          </div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src='/assets/background/book.webp'
          alt=''
          className='absolute top-0 left-0 select-none w-full h-full'
          draggable={false}
        />
      </motion.div>
    </motion.div>
  );
};

export default Popup;
