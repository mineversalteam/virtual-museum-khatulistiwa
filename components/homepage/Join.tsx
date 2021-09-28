import Link from 'next/link';
const Join = () => {
  return (
    <section id='join' className='bg-black pt-16 pb-24'>
      <div className='container mx-auto px-5 relative z-10'>
        <div className='text-center text-white'>
          <h1 className='title'>02. Enter Museum</h1>
          <p className='subtitle'>360 View & Public Minecraft Server</p>
        </div>
        <Link href='/maps' passHref>
          <div className='bg-360 w-full flex items-center justify-center my-10 cursor-pointer'>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src='/assets/icons/360deg.webp'
              width='143px'
              height='auto'
              alt=''
            ></img>
          </div>
        </Link>
        <button className='mv-btn text-3xl h-14 font-minecraftia btn-blue w-full transition duration-300 ease-in-out hover:bg-dark-blue'>
          museum.minecraft-id.net
        </button>
      </div>
    </section>
  );
};

export default Join;
