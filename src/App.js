import React from 'react'
import { BrowserRouter, Link, Route, Routes, useMatch, useParams } from 'react-router-dom'
import About from './About'
import Bio from './Bio'
import Date from './Date'
import Home from './Home'
import Mm from './Mm'

const App = () => {
  return (
   <BrowserRouter> 
     <div>
      <ul>
        <li>
          <Link to={'/Home'}>Home</Link>
          </li><li>
          <Link to={'/About'}>About</Link>
        </li>
        <li>
          <Link to={'/user'}>User</Link>
        </li>
      </ul>
     </div>
    
     <Routes>
      <Route path='/Home' element={<Home/>}/>
      <Route path='/About' element={<About/>}>
      <Route path='/About/Bio' element={<Bio/>}/>
      <Route path='/About/Date' element={<Date/>}>
        <Route path='/About/Date/mm' element={<Mm/>}/>
        <Route path='/About/Date/yy' element={<Year/>}/>
      </Route>
      {/* <Route path='/mm' element={<Mm/>}/> */}
      </Route>
      
      
      
      {/* <Route path='/user' element={<User/>}/> */}
      
      {/* <Route path="/topics">
           <Topics/> 
          </Route>*/}
     </Routes>
   </BrowserRouter>

  )
}

export default App

// const Userx = () => {
//   return (
//     <>
//       <h1>User url</h1>

//       <nav>
//         <Link to="/user/profile">Profile</Link>
//         <Link to="/user/account">Account</Link>
//       </nav>
//     </>
//   );
// };



// const User = () => {
//   return (
//     <>
//       <h1>User</h1>

//       <nav>
//         <Link to="profile">Profile</Link>
//         <Link to="account">Account</Link>
//       </nav>
//     </>
//   );
// };






function Year() {
  return (
    <div> <li><Link to={'/About/Bio'}>mm</Link></li>
      <h2>Year</h2>
    </div>
  );
}






// import * as React from "react";
// import {
//   BrowserRouter as Router,
//   Link,
//   Route,
//   useParams,
//   Routes,
//   Outlet
// } from "react-router-dom";
// import { getTopic, getResource, getTopics } from "./Api";

// function Home() {
//   return (
//     // <React.Fragment>
// <div>

//     <h1>Home</h1>
//       <p>
//         Welcome to our content index. Head over to{" "}
//         <Link to="/topics">/topics</Link> to see our catalog.
//       </p>
//     {/* </React.Fragment> */}
//     </div>  
//   );
// }

// function Resource() {
//   const { topicId, resourceId } = useParams();

//   const { name, description, id } = getResource({ topicId, resourceId });

//   return (
//     <div>
//       <h3>{name}</h3>
//       <p>{description}</p>
//       <a href={`https://ui.dev/${id}`}>Read Post</a>
//     </div>
//   );
// }

// function Topic() {
//   const { topicId } = useParams();
//   const topic = getTopic(topicId);

//   return (
//     <div>
//       <h2>{topic.name}</h2>
//       <p>{topic.description}</p>

//       <ul>
//         {topic.resources.map((sub) => (
//           <li key={sub.id}>
//             <Link to={sub.id}>{sub.name}</Link>
//           </li>
//         ))}
//       </ul>

//       <hr />

//       <Outlet />
//     </div>
//   );
// }

// function Topics() {
//   const topics = getTopics();

//   return (
//     <div>
//       <h1>Topics</h1>
//       <ul>
//         {topics.map(({ name, id }) => (
//           <li key={id}>
//             <Link to={id}>{name}</Link>
//           </li>
      
//         ))}
//       </ul>

//       <hr />

//       <Outlet />
//     </div>
//   );
// }

// export default function App() {
//   return (
//     <Router>
//       <div>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/topics">Topics</Link>
//           </li>
//         </ul>

//         <hr />

//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/topics" element={<Topics />}>
//             <Route path=":topicId" element={<Topic />}>
//               <Route path=":resourceId" element={<Resource />} />
//             </Route>
//           </Route>
//         </Routes>
//       </div>
//     </Router>
//   );
// }


















