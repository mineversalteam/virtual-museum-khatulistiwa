interface IProps {
  url: string;
}

const Video = ({ url }: IProps) => {
  return (
    <video
      src={url}
      className='select-none rounded'
      draggable={false}
      controls
      loop
      autoPlay={true}
    />
  );
};

export default Video;
