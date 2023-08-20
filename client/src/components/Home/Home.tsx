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
          <div className="test__icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M17 16q-1.25 0-2.125-.875T14 13q0-1.25.875-2.125T17 10q1.25 0 2.125.875T20 13q0 1.25-.875 2.125T17 16Zm0-2q.425 0 .713-.288T18 13q0-.425-.288-.713T17 12q-.425 0-.713.288T16 13q0 .425.288.713T17 14Zm-6 9v-2.9q0-.525.25-.988t.7-.737q.8-.475 1.688-.788t1.812-.462L17 19l1.55-1.875q.925.15 1.8.463t1.675.787q.45.275.713.738T23 20.1V23H11Zm1.975-2h3.075l-1.35-1.65q-.45.125-.875.325t-.85.425v.9Zm4.975 0H21v-.9q-.4-.25-.825-.438t-.875-.312L17.95 21Zm-1.9 0Zm1.9 0ZM5 21q-.825 0-1.413-.588T3 19V5q0-.825.588-1.413T5 3h14q.825 0 1.413.588T21 5v5q-.4-.5-.875-.95T19 8.45V5H5v14h4.15q-.075.275-.113.55T9 20.1v.9H5ZM7 9h7q.65-.5 1.425-.75T17 8V7H7v2Zm0 4h5q0-.525.112-1.025t.313-.975H7v2Zm0 4h3.45q.275-.225.588-.4t.637-.325V15H7v2Zm-2 2V5v3.425V8v11Zm12-6Z"
              />
            </svg>
          </div>
          <p className="test__text">
            This is the text in which users will be given an example word and the user will have to
            write its translation. At the end of the test, the user will be offered an additional
            test for the words that the user wrote incorrectly.
          </p>
          <button className="test__button">Try it now</button>
        </div>
        <div className="home__test test">
          <h2 className="test__title">Reverse test</h2>
          <div className="test__icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="42"
              height="42"
              viewBox="-1.5 -2.5 24 24"
            >
              <path
                fill="currentColor"
                d="m4.859 5.308l1.594-.488a1 1 0 0 1 .585 1.913l-3.825 1.17a1 1 0 0 1-1.249-.665L.794 3.413a1 1 0 1 1 1.913-.585l.44 1.441C5.555.56 10.332-1.035 14.573.703a9.381 9.381 0 0 1 5.38 5.831a1 1 0 1 1-1.905.608A7.381 7.381 0 0 0 4.86 5.308zm12.327 8.195l-1.775.443a1 1 0 1 1-.484-1.94l3.643-.909a.997.997 0 0 1 .61-.08a1 1 0 0 1 .84.75l.968 3.88a1 1 0 0 1-1.94.484l-.33-1.322a9.381 9.381 0 0 1-16.384-1.796l-.26-.634a1 1 0 1 1 1.851-.758l.26.633a7.381 7.381 0 0 0 13.001 1.25z"
              />
            </svg>
          </div>
          <p className="test__text">
            This is the text in which users will be given for example the translation of a word and
            the user will have to write the word itself. At the end of the test, the user will be
            offered an additional test for the words that the user wrote incorrectly.
          </p>
          <button className="test__button">Try it now</button>
        </div>
        <div className="home__test test">
          <h2 className="test__title">Select test</h2>
          <div className="test__icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M5 21q-.825 0-1.413-.588T3 19V5q0-.825.588-1.413T5 3h14q.2 0 .375.038t.35.112L17.875 5H5v14h14v-6.65l2-2V19q0 .825-.588 1.413T19 21H5Zm6.525-4l-5.65-5.65l1.4-1.4l4.25 4.25L20.7 5.025L22.125 6.4L11.525 17Z"
              />
            </svg>
          </div>
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
