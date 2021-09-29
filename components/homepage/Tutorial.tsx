import TutorialIcon from './TutorialIcon';

const IMAGES: Record<string, string> = {
  'Install Minecraft':
    'https://media.discordapp.net/attachments/854941249831043082/889836738393026560/unknown.png?width=1080&height=276',
  'Go to Multiplayer':
    'https://media.discordapp.net/attachments/445232632679235595/889896106853564466/unknown.png?width=900&height=207',
  'Add Server':
    'https://media.discordapp.net/attachments/445232632679235595/889896522756522064/unknown.png?width=913&height=220',
  'Join Server':
    'https://media.discordapp.net/attachments/445232632679235595/889897481276645426/unknown.png?width=1010&height=232',
};

const Tutorial = () => {
  return (
    <section id='tutorial' className='bg-black py-28'>
      <div className='container mx-auto px-5 relative z-10'>
        <div className='grid grid-cols-1 md:grid-cols-2'>
          <div className='grid grid-cols-1 gap-y-6 pr-0 md:pr-10 order-0 md:order-1'>
            {Object.keys(IMAGES).map((k, i) => (
              <TutorialIcon
                key={i}
                text={k}
                url='#'
                background={IMAGES[k]}
                index={(i + 1).toString().padStart(2, '0')}
              />
            ))}
          </div>
          <div className='flex flex-col h-100 justify-center text-white pt-10 md:pt-0 md:pl-10 order-1 md:order-0'>
            <h1 className='title'>Tutorials Offline</h1>
            <p className='subtitle'>How to play this maps</p>
            <p className='description py-7'>
              Tutorial berikut diperuntukan untuk kamu yang ingin mengaksesnya
              melalui offline dengan menekan setiap step ya!, namun jika kamu
              ingin mengunjunginya secara online kamu dapat mengikuti step 1 dan
              membuka menu multiplayer saat pada game dan menambah server dengan
              ip <mark>museum.minecraft-id.net</mark>
            </p>
            <div className='pt-2'>
              <a href='#' target='_blank' rel='noreferrer noopener'>
                <button className='w-full mt-2 md:mt-0 md:w-auto mr-4 mv-btn btn-blue font-dmSans text-xl transition duration-300 ease-in-out hover:bg-dark-blue'>
                  Video Tutorial
                </button>
              </a>

              <button className='w-full mt-5 md:mt-0 md:w-auto mv-btn btn-outline-blue font-dmSans text-xl transition duration-300 ease-in-out hover:bg-secondary-blue hover:text-white'>
                Full Tutorial
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tutorial;
