import Viewer from '@/components/viewer';
import { MapRegion, Provider as ViewerProvider } from '@/hooks/ViewerContext';

interface IProps {
  maps: MapRegion[];
}

const Home = ({ maps }: IProps) => {
  return (
    <ViewerProvider data={maps}>
      <Viewer />
    </ViewerProvider>
  );
};

export const getServerSideProps = async ({ req }: any) => {  
  const protocol = req.headers['x-forwarded-proto'] || 'http'
  const baseUrl = req ? `${protocol}://${req.headers.host}` : ''
  const [maps] = await Promise.all([
    fetch(baseUrl + '/data/maps.json').then((res) =>
      res.json()
    ),
  ]);

  return {
    props: {
      maps,
    },
  };
};

export default Home;
