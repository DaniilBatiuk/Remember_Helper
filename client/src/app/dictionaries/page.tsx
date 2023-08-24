import Dictionaries from '@/components/Dictionaries/Dictionaries';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dictionaries',
};

const DictionariesPage: React.FC = () => {
  return <Dictionaries />;
};

export default DictionariesPage;
