import React from 'react';
import './Dictionary.scss';
import Input from '../UI/Input/Input';

const Dictionary: React.FC = () => {
  return (
    <section className="dictionary">
      <h2 className="dictionary__title">English-Russian</h2>
      <form className="dictionary__form">
        <div className="dictionary__search">
          <Input type="text" placeholder="Search..." />
          <button type="submit" className="dictionary__search-button">
            Search
          </button>
        </div>
        <div className="dictionary__svg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="42"
            height="42"
            viewBox="0 0 24 24"
            className="dictionary__delete"
          >
            <path
              fill="currentColor"
              d="M7 21q-.825 0-1.413-.588T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.588 1.413T17 21H7ZM17 6H7v13h10V6ZM9 17h2V8H9v9Zm4 0h2V8h-2v9ZM7 6v13V6Z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="42"
            height="42"
            viewBox="0 0 24 24"
            className="dictionary__add"
          >
            <path
              fill="currentColor"
              d="M5 21q-.825 0-1.413-.588T3 19V5q0-.825.588-1.413T5 3h4.2q.325-.9 1.088-1.45T12 1q.95 0 1.713.55T14.8 3H19q.825 0 1.413.588T21 5v6.7q-.475-.225-.975-.388T19 11.075V5H5v14h6.05q.075.55.238 1.05t.387.95H5Zm0-3v1V5v6.075V11v7Zm2-1h4.075q.075-.525.238-1.025t.362-.975H7v2Zm0-4h6.1q.8-.75 1.788-1.25T17 11.075V11H7v2Zm0-4h10V7H7v2Zm5-4.75q.325 0 .537-.213t.213-.537q0-.325-.213-.537T12 2.75q-.325 0-.537.213t-.213.537q0 .325.213.537T12 4.25ZM18 23q-2.075 0-3.538-1.463T13 18q0-2.075 1.463-3.538T18 13q2.075 0 3.538 1.463T23 18q0 2.075-1.463 3.538T18 23Zm-.5-2h1v-2.5H21v-1h-2.5V15h-1v2.5H15v1h2.5V21Z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="42"
            height="42"
            viewBox="0 0 24 24"
            className="dictionary__update"
          >
            <path fill="currentColor" d="M5 18.08V19h.92l9.06-9.06l-.92-.92z" opacity=".3" />
            <path
              fill="currentColor"
              d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM5.92 19H5v-.92l9.06-9.06l.92.92L5.92 19zM20.71 5.63l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83l3.75 3.75l1.83-1.83a.996.996 0 0 0 0-1.41z"
            />
          </svg>
        </div>
      </form>
    </section>
  );
};
export default Dictionary;
