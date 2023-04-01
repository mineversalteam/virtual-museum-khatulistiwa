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

export const getServerSideProps = async ({ req }: any) => {
  const protocol = req.headers['x-forwarded-proto'] || 'http'
  const baseUrl = req ? `${protocol}://${req.headers.host}` : ''

  const [team] = await Promise.all([
    fetch(baseUrl + '/data/team.json').then((res) =>
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
