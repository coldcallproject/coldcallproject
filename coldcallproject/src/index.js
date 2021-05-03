import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import reportWebVitals from './core/reportWebVitals';
import ProfileCardsCarousel from './components/ProfileCardsCarousel';
import MenuAppBar from './components/core/MenuAppBar';

/* <App /> */

ReactDOM.render(
  <React.StrictMode>
    <MenuAppBar />
    <ProfileCardsCarousel theme="premium" />
    <ProfileCardsCarousel theme="cartoon characters" />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
