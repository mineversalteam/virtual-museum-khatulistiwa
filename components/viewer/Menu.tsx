import { ViewerValues } from '@/hooks/ViewerContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { createContext, useState, useContext } from 'react';
import State from '@/utils/state';

const MenuContext = createContext({});

interface ContextValue {
  data: ViewerValues;
  expanded: boolean;
  setExpanded: State<boolean>;
}

const Expanded = () => {
  const { data, expanded, setExpanded } = useContext(
    MenuContext
  ) as ContextValue;

  return (
    <motion.div
      animate={{
        opacity: expanded ? 1 : 0,
      }}
      transition={{ duration: 0.3, delay: 0.1, ease: 'easeInOut' }}
      className={[
        'opacity-0 select-none z-20 flex flex-col items-center font-minecraftia text-gray-50 absolute top-0 w-full h-screen bg-black bg-opacity-50',
        expanded ? 'pointer-events-auto' : 'pointer-events-none',
      ].join(' ')}
    >
      <span
        className='absolute right-4 top-6 cursor-pointer font-minecraftia text-4xl'
        onClick={() => setExpanded(false)}
      >
        x
      </span>

      <ul className='flex flex-grow flex-col justify-center align-center'>
        {data.maps[data.activeRegion]?.maps?.map((m, i) => (
          <motion.li
            key={m.id}
            className={[
              'mb-2 text-center cursor-pointer transition',
              i === data.activeMap
                ? 'text-2xl filter drop-shadow-md'
                : 'text-md text-gray-200',
            ].join(' ')}
            onClick={() => {
              if (i === data.activeMap) return;
              data.setActiveMap(i);
              setExpanded(false);
            }}
            {...(i !== data.activeMap && { whileHover: { scale: 1.1 } })}
          >
            {m.name}
          </motion.li>
        ))}
      </ul>

      <ul className='list-none flex mb-4'>
        {data.maps.map((m, i) => (
          <motion.li
            key={m.id}
            className={[
              'mr-4 cursor-pointer transition',
              i === 0 && 'ml-4',
              i === data.activeRegion
                ? 'text-3xl filter shadow-md'
                : 'text-xl text-gray-200',
            ].join(' ')}
            onClick={() => {
              if (i === data.activeRegion) return;
              data.reset();
              data.setActiveRegion(i);
            }}
            {...(i !== data.activeRegion && { whileHover: { scale: 1.1 } })}
          >
            {m.region}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

const NotExpanded = () => {
  const { data, expanded, setExpanded } = useContext(
    MenuContext
  ) as ContextValue;
  const region = data.maps[data.activeRegion]?.region;

  return (
    <motion.div
      animate={{
        opacity: expanded ? 0 : 1,
      }}
      transition={{ duration: 0.3, ease: 'easeIn' }}
      className='select-none text-gray-50 text-2xl absolute flex justify-center items-center z-10 bottom-4 w-full'
    >
      <div className='flex items-center pointer-events-auto px-6 bg-black bg-opacity-50'>
        <FontAwesomeIcon
          icon={faCaretLeft}
          className='mr-8 w-3 cursor-pointer filter drop-shadow-lg'
          onClick={() => data.prevRegion()}
        />

        <motion.div
          animate={{ width: '14rem' }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <h1
            className='text-center font-minecraftia mt-5 cursor-pointer filter drop-shadow-lg'
            onClick={() => setExpanded(true)}
          >
            {region}
          </h1>
        </motion.div>

        <FontAwesomeIcon
          icon={faCaretRight}
          className='ml-8 w-3 cursor-pointer filter drop-shadow-lg'
          onClick={() => data.nextRegion()}
        />
      </div>
    </motion.div>
  );
};

const Menu = ({
  data,
}: Omit<Omit<ContextValue, 'expanded'>, 'setExpanded'>) => {
  const [expanded, setExpanded] = useState(false);

  const value = {
    data,
    expanded,
    setExpanded,
  };

  return (
    <MenuContext.Provider value={value}>
      <Expanded />
      <NotExpanded />
    </MenuContext.Provider>
  );
};

export default Menu;
