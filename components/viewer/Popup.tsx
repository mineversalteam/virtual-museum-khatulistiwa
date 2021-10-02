import { ViewerValues } from '@/hooks/ViewerContext';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import Model from './Model';
import { useGLTF } from '@react-three/drei';
import Video from '../Video';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import MediaQuery from 'react-responsive';

interface IProps {
  data: ViewerValues;
}

const Popup = ({ data }: IProps) => {
  const info = data.hotspots?.[data.activeInfo]?.info;
  const media = info?.media;
  const map = data.maps[data.activeRegion];

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
        'absolute bg-black bg-opacity-50 z-20 top-0 left-0 flex justify-center w-full h-screen p-2 md:p-12',
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
        <div className='absolute flex flex-col top-0 left-0 z-30 px-14 py-12 md:p-12 w-full h-full'>
          <span
            className='md:absolute z-20 self-end font-minecraftia text-3xl select-none cursor-pointer'
            onClick={() => data.hideInfo()}
          >
            x
          </span>

          <div className='flex-grow overflow-y-auto pr-4 flex flex-col-reverse md:flex-row md:overflow-hidden md:pr-0'>
            <div
              id='viewer-info-popup-content-left'
              className='flex flex-col md:w-1/2 md:pr-8'
            >
              <div className='border-b-2 border-secondary mb-4'>
                <h2 className='font-minecraftTen text-5xl break-words text-gray-900'>
                  {info?.title}
                </h2>
                <p className='mt-2 pb-1 font-dmSans font-semibold text-primary text-xl text-gray-800 break-words'>
                  {`${map?.region}, ${info?.subtitle}`}
                </p>
              </div>

              <div
                className='flex-grow overflow-x-hidden overflow-y-auto'
                id='content-view-desc'
              >
                <Markdown
                  remarkPlugins={[remarkGfm]}
                  className='font-dmSans text-lg break-word pr-4 mb-2 md:mb-0'
                >
                  {info?.description as string}
                </Markdown>
              </div>
            </div>

            <div
              id='viewer-info-popup-content-right'
              className='md:w-1/2 md:pl-8 z-10 relative flex items-center justify-center h-1/2 mb-6 md:h-auto md:mb-0'
            >
              {media?.type === 'model' && <Model url={media?.url} />}

              {media?.type === 'image' && (
                <div className='relative inline-block'>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src='/assets/background/media.webp'
                    alt=''
                    className='absolute h-full w-full select-none'
                    draggable={false}
                  />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={media?.url}
                    alt=''
                    className='select-none rounded'
                    draggable={false}
                  />
                </div>
              )}

              {media?.type === 'video' && (
                <div className='relative inline-block'>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src='/assets/background/media.webp'
                    alt=''
                    className='absolute h-full w-full select-none z-20 pointer-events-none'
                    draggable={false}
                  />

                  <Video url={media?.url} />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Background image */}
        {/* Mobile */}
        <MediaQuery maxWidth={768}>
          <span
            className='absolute top-0 left-0 select-none w-full h-full book-small'
            draggable={false}
          />
        </MediaQuery>
        {/* Desktop or bigger */}
        <MediaQuery minWidth={768}>
          <span
            className='absolute top-0 left-0 select-none w-full h-full book-full'
            draggable={false}
          />
        </MediaQuery>
      </motion.div>
    </motion.div>
  );
};

export default Popup;
