import Homepage from '@/components/homepage';
import { Member } from '@/components/homepage/TeamMember';

interface IProps {
  team: Member[];
}

const Home = ({ team }: IProps) => {
  return (
    <div id='homepage' className='overflow-x-hidden'>
      <Homepage team={team} />
    </div>
  );
};

export const getServerSideProps = async () => {
  const [team] = await Promise.all([
    fetch('https://api.minecraft-id.net/museum/?data=team').then((res) =>
      res.json()
    ),
  ]);

  return {
    props: {
      team,
    },
  };
};

export default Home;
