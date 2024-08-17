// import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="table">
//       <table>
//         <tr>
//           <th>Name</th>
//           <th>Dept</th>
//           <th>Age</th>
//         </tr>
//         <tr>
//           <td>Surya</td>
//           <td>CSE</td>
//           <td>21</td>
//         </tr>
//         <tr>
//           <td>Sakthi</td>
//           <td>ECE</td>
//           <td>22</td>
//         </tr>
//         <tr>
//           <td>Shahul</td>
//           <td>MECH</td>
//           <td>24</td>
//         </tr>
//       </table>
//       <ol>
//         <li>Item 1</li>
//         <li>Item 2</li>
//         <li>Item 3</li>
//       </ol>
//     </div>
//   );
// }

// import React from 'react';

// function welcome(props){
//   return(
//     <div>
//       <h1>Welcome {props.name}</h1>
//       <h2>Full stack</h2>
//       <h3>Html</h3>
//       <h4>CSS</h4>
//       <h5>JavaScript</h5>
//       <h6>React</h6>
//     </div>
//   )
// }
// export default welcome;
// export default function Welcome(){
//     return <div className="container">
//       <h2>I am Surya</h2>
//       <h3>Welcome to my demo website</h3>
//       <p>This is my world</p>
//     </div>
// }

// import { useEffect , useState } from "react";

// export default function Timer(){
//     const[count,setCount]= useState(0);

//     useEffect(()=>{
//         setTimeout(()=>{
//             setCount((count)=>count+1);
//         },1000);
//     },[count]);
//     return<h1>hello{count}</h1>;
// }

import React, { useState, useEffect } from 'react';
// import ReactDOM from 'react-dom'

export default function Datafunction() {
   const [data, setUser] = useState([]);
   const [loading, setloading] = useState(true);

   useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
         .then((response) => response.json())
         .then((data) => {
            setUser(data);
            setloading(false);
         })
         .catch((error) => {
            console.log("Error fetching data:", error);
            setloading(false);
         });
   }, []);

   return (
      <div>
         { loading && <p>loding</p>}
        <div>
        <h1>List out the user in API</h1>
        <ul>
          {data.map(user=>{
            return <li key={user.id}>{user.name}</li> 
          })}
         </ul>
           </div>
      </div>
   );
}


