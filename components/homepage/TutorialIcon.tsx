interface IProps {
  text: string;
  background: string;
  index: string | number;
}

const TutorialIcon = ({ text, background, index }: IProps) => {
  return (
    <div
      className='select-none transition duration-300 ease-in-out transform hover:scale-105 relative flex items-center justify-center w-full h-28  border border-white bg-white rounded bg-cover bg-center'
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${background})`,
      }}
    >
      <h1 className='absolute top-10 left-5 font-minecraftia text-white opacity-70 text-lg md:text-5xl'>
        {index}
      </h1>
      <h1 className='text-2xl md:text-5xl font-dmSans font-bold text-center text-white'>
        {text}
      </h1>
    </div>
  );
};

export default TutorialIcon;
