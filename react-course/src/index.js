import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import PageOne from './PageTwo/PageOne';
import reportWebVitals from './reportWebVitals';
import {RouterProvider ,  createBrowserRouter} from 'react-router-dom';
import GeneralContent from './components/GeneralContent/GeneralContent';
import PortfoliMenuPage from './components/PortfolioMenuPage/PortfolioMenuPage';
import HireMe from './components/HireMe/HireMe';

const router = createBrowserRouter([
  { path: '/', element: <App/>, children: [
    {path: '/', element: <GeneralContent/>},
    {path: 'portfolio_picker', element: <PortfoliMenuPage/>},
    {path: 'hire_me', element:  <HireMe/>}
  ]},
  {path: '/oldalneve', element: <PageOne/>}
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
