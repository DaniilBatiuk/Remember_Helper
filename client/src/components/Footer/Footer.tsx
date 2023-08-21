import React from 'react';
import Logo from '../../../public/Logo.png';
import './Footer.scss';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__list">
          <div className="footer__column column">
            <a href="/">
              <img src={Logo.src} alt="Logo" className="column__logo" />
            </a>
            <div className="column__texts">
              <p className="column__text">Created in 2023</p>
              <p className="column__text">Created by Daniil Batiuk</p>
              <p className="column__text">Created to improve programming skills</p>
            </div>
          </div>
          <div className="footer__column column">
            <h2 className="column__title">Tests</h2>
            <ul className="column__list">
              <li className="column__list-item">Ordinary test</li>
              <li className="column__list-item">Reverse test</li>
              <li className="column__list-item">Select test</li>
            </ul>
          </div>
          <div className="footer__column column">
            <h2 className="column__title">Get in Touch</h2>
            <address className="column__contacts contacts">
              <div className="contacts__contact"> Kremenchug, UA</div>
              <div className="contacts__contact"> daniilbatiuk480@gmail.com</div>
              <div className="contacts__contact"> +38-(068)-905-06-93</div>
              <div className="contacts__links">
                <a href="https://github.com/DaniilBatiuk" target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="42"
                    height="42"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"
                    />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/daniil-batiuk-59a923271/" target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
                    viewBox="0 0 16 16"
                    style={{ paddingTop: '4px' }}
                  >
                    <path
                      fill="currentColor"
                      d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248c-.015-.709-.52-1.248-1.342-1.248c-.822 0-1.359.54-1.359 1.248c0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586c.173-.431.568-.878 1.232-.878c.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252c-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
                    />
                  </svg>
                </a>
                <a href="https://www.instagram.com/danil_batyuk/" target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="42"
                    height="42"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    >
                      <path d="M4 8a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z" />
                      <path d="M9 12a3 3 0 1 0 6 0a3 3 0 1 0-6 0m7.5-4.5v.01" />
                    </g>
                  </svg>
                </a>
              </div>
            </address>
          </div>
        </div>
        <div className="footer__love">Build with love.</div>
      </div>
    </footer>
  );
};
export default Footer;
