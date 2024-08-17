import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
// import React from 'react';
// import ReactDom from 'react-dom';
// import './App.css';
// import Welcome from './App.js';
// import App from './component/footer.js'
// // import './component/footer';
// function Final(){
//   return<div>
//     <Welcome/>
//     <App/>
//   </div>
// }
// ReactDom.render(<Final />,document.getElementById("root"));
// import ReactDom from 'react-dom';
// import React,{useState,useEffect} from 'react';
// function Examplerender(){
//   const[count,setcont]=useState(0);
//   useEffect(()=>{
//     setTimeout(()=>{
//       setcont(count=>count+1)
//     },2000)
// });
// return(
//   <h1>Website Counting details{count}times</h1>
// )}
// ReactDom.render(<Examplerender />,document.getElementById("root"));

// import App 

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>);  