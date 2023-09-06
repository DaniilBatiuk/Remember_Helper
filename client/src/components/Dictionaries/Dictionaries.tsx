import React from 'react';
import './Dictionaries.scss';
import Input from '../UI/Input/Input';
import Link from 'next/link';

const Dictionaries: React.FC = () => {
  return (
    <section className="dictionaries">
      <h2 className="dictionaries__title">Dictionaries</h2>
      <form className="dictionaries__create">
        <Input type="text" placeholder="Name of new dictionary" />
        <button type="submit" className="dictionaries__new">
          Create
        </button>
      </form>
      <div className="dictionaries__list">
        <Link href="/dictionaries/English-Russian" className="dictionaries__item item">
          <div className="item__title">English-Russian</div>
          <button type="submit" className="item__test">
            Test
          </button>
        </Link>
        <Link href="/dictionaries/English-Russian" className="dictionaries__item item">
          <div className="item__title">English-Russian</div>
          <button type="submit" className="item__test">
            Test
          </button>
        </Link>
      </div>
    </section>
  );
};
export default Dictionaries;
