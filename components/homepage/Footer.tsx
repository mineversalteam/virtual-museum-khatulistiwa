const Footer = () => {
  return (
    <div>
      <footer className='pt-20 pb-32 bg-primary-blue relative'>
        <div className='container mx-auto px-5 relative z-10'>
          <h1 className='text-lg text-white font-dmSans font-medium'>
            Presented by{' '}
          </h1>
          <div className='flex justify-center items-center pt-5'>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt=''
              className='mx-5'
              height='135px'
              width='135px'
              src='/assets/logos/mineversal.png'
              draggable={false}
            />

            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt=''
              className='mx-5'
              height='135px'
              width='135px'
              src='/assets/logos/mcindo.png'
              draggable={false}
            />

            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt=''
              className='mx-5'
              height='135px'
              width='428px'
              src='https://media.discordapp.net/attachments/445232632679235595/889901118811938816/unknown.png?width=771&height=238'
              draggable={false}
            />

            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt=''
              className='mx-5'
              height='135px'
              width='135px'
              src='/assets/logos/unibuild.png'
              draggable={false}
            />

            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt=''
              className='mx-5'
              height='135px'
              width='135px'
              src='https://media.discordapp.net/attachments/445232632679235595/889901867918839818/unknown.png?width=238&height=238'
              draggable={false}
            />
          </div>
        </div>

        <p className='text-center text-white text-lg absolute w-full bottom-8 font-dmSans'>
          Copyright © 2021 Mineversal Team. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Footer;
