import React from 'react';
import Dictionary from '@/components/Dictionary/Dictionary';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dictionary',
};

const DictionaryPage: React.FC = () => {
  return <Dictionary />;
};

export default DictionaryPage;
