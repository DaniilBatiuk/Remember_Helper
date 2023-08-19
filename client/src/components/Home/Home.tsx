'use client';
import React from 'react';
import './Home.scss';

const Home: React.FC = () => {
  return (
    <section className="home">
      <h2 className="home__title">About</h2>
      <p className="home__about">
        Learn Helper is designed to help people with comprehension using various tests. To begin
        with, the user must create his own dictionary in which he will place his information that he
        wants to remember. After filling in the dictionary, the user will be able to select a test
        according to the created dictionary. Passing various tests, the user will be able to
        identify elements of the dictionary that he did not remember well and pass a test already
        consisting of these poorly remembered elements. Thanks to different types of tests, it is
        much easier to remember the necessary information.
      </p>
      <div className="home__tests">
        <div className="home__test test">
          <h2 className="test__title">Ordinary test</h2>
          <p className="test__text">
            This is the text in which users will be given an example word and the user will have to
            write its translation. At the end of the test, the user will be offered an additional
            test for the words that the user wrote incorrectly.
          </p>
          <button className="test__button">Try it now</button>
        </div>
        <div className="home__test test">
          <h2 className="test__title">Reverse test</h2>
          <p className="test__text">
            This is the text in which users will be given for example the translation of a word and
            the user will have to write the word itself. At the end of the test, the user will be
            offered an additional test for the words that the user wrote incorrectly.
          </p>
          <button className="test__button">Try it now</button>
        </div>
        <div className="home__test test">
          <h2 className="test__title">Select test</h2>
          <p className="test__text">
            This is the text in which users will choose which words, for example, will be offered to
            them in the test and the user will have to write their translation. At the end of the
            test, the user will be offered an additional test for the words that the user wrote
            incorrectly.
          </p>
          <button className="test__button">Try it now</button>
        </div>
      </div>
    </section>
  );
};

export default Home;
