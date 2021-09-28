const Tutorial = () => {
  return (
    <section id='tutorial' className='bg-black py-28'>
      <div className='container mx-auto px-5 relative z-10'>
        <div className='grid grid-cols-2'>
          <div className='grid grid-cols-1 gap-y-6 pr-10'>
            <a href='#'>
              <div
                className='relative flex items-center justify-center w-full h-28 border border-white bg-white rounded bg-cover bg-center'
                style={{
                  backgroundImage:
                    'linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(https://media.discordapp.net/attachments/854941249831043082/889836738393026560/unknown.png?width=1080&height=276)',
                }}
              >
                <h1 className='absolute top-10 left-5 font-minecraftia text-white opacity-70 text-6xl'>
                  01
                </h1>
                <h1 className='text-5xl font-dmSans font-bold text-center text-white'>
                  Install Minecraft
                </h1>
              </div>
            </a>

            <a href='#'>
              <div
                className='relative flex items-center justify-center w-full h-28  border border-white bg-white rounded bg-cover bg-center'
                style={{
                  backgroundImage:
                    'linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(https://media.discordapp.net/attachments/445232632679235595/889896106853564466/unknown.png?width=900&height=207)',
                }}
              >
                <h1 className='absolute top-10 left-5 font-minecraftia text-white opacity-70 text-6xl'>
                  02
                </h1>
                <h1 className='text-5xl font-dmSans font-bold text-center text-white'>
                  Minecraft Map
                </h1>
              </div>
            </a>

            <a href='#'>
              <div
                className='relative flex items-center justify-center w-full h-28  border border-white bg-white rounded bg-cover bg-center'
                style={{
                  backgroundImage:
                    'linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(https://media.discordapp.net/attachments/445232632679235595/889896522756522064/unknown.png?width=913&height=220)',
                }}
              >
                <h1 className='absolute top-10 left-5 font-minecraftia text-white opacity-70 text-6xl'>
                  03
                </h1>
                <h1 className='text-5xl font-dmSans font-bold text-center text-white'>
                  Resource Pack
                </h1>
              </div>
            </a>

            <a href='#'>
              <div
                className='relative flex items-center justify-center w-full h-28  border border-white bg-white rounded bg-cover bg-center'
                style={{
                  backgroundImage:
                    'linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(https://media.discordapp.net/attachments/445232632679235595/889897481276645426/unknown.png?width=1010&height=232)',
                }}
              >
                <h1 className='absolute top-10 left-5 font-minecraftia text-white opacity-70 text-6xl'>
                  04
                </h1>
                <h1 className='text-5xl font-dmSans font-bold text-center text-white'>
                  Import World
                </h1>
              </div>
            </a>
          </div>
          <div className='flex flex-col h-100 justify-center text-white pl-10'>
            <h1 className='title'>Tutorials Offline</h1>
            <p className='subtitle'>How to playing this maps</p>
            <p className='description py-7'>
              Tutorial berikut diperuntukan untuk kamu yang ingin mengaksesnya
              melalui offline dengan menekan setiap step ya!, namun jika kamu
              ingin mengunjunginya secara online kamu dapat mengikuti step 1 dan
              membuka menu multiplayer saat pada game dan menambah server dengan
              ip <mark>museum.minecraft-id.net</mark>
            </p>
            <div className='pt-2'>
              <button className='mr-4 mv-btn btn-blue font-dmSans text-xl transition duration-300 ease-in-out hover:bg-dark-blue'>
                Tutorial Offline
              </button>
              <button className='mv-btn btn-outline-blue font-dmSans text-xl transition duration-300 ease-in-out hover:bg-secondary-blue hover:text-white'>
                Tutorial Online
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tutorial;
