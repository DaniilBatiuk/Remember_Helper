import Home from '@/components/Home/Home';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
};

const HomePage: React.FC = () => {
  return <Home />;
};

export default HomePage;
