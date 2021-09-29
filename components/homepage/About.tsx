const About = () => {
  return (
    <section id='about-museum' className='bg-black py-28'>
      <div className='container mx-auto px-5 relative z-10'>
        <div className='grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-4'>
          <div className='detail text-white order-1 md:order-0'>
            <div className='flex h-full justify-center flex-col'>
              <h1 className='title'>01. About Museum</h1>
              <p className='subtitle'>Virtual Museum Khatulistiwa</p>
              <p className='description py-7'>
                Sebuah projek pembuatan map museum di minecraft dengan 3 tema
                besar yaitu, budaya khatulistiwa sebagai konteks,{' '}
                <mark>khatulistiwa dan konteks sosial politik global</mark>, dan
                dekolonisasi seni. intinya tema projek museum ini berhubungan
                dengan pembuatan karya seni/sejarah yang ada di negara garis
                katulistiwa. projek ini tercipta dengan bekerjasama dengan
                yayasan seni <mark>Biennale Yogyakarta</mark>.<br />
                <br /> Museum virtual ini di bangun oleh <mark>MIVUBI</mark> ,
                yang merupakan team kolaborasi dari Mineversal dan Unibuild
                Indonesia yang bergerak dalam komunitas Minecraft di Indonesia.{' '}
              </p>
              <div className='pt-2'>
                <a
                  href='https://biennalejogja.org/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <button className='mr-4 mv-btn btn-blue font-dmSans text-xl transition duration-300 ease-in-out hover:bg-dark-blue'>
                    Biennale Jogja
                  </button>
                </a>

                <a
                  href='https://minecraft-id.net/about/mivubi'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <button className='mv-btn btn-outline-blue font-dmSans text-xl transition duration-300 ease-in-out hover:bg-secondary-blue hover:text-white'>
                    Mivubi
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className='relative order-0 md:order-1 transition duration-300 ease-in-out transform hover:scale-105'>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className='m-auto'
              width='451px'
              height='596px'
              alt=''
              src='https://media.discordapp.net/attachments/445232632679235595/889818744422027264/unknown.png?width=425&height=559'
              draggable={false}
            ></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
