import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/contact";
import { Routes, Route} from "react-router-dom";
import Success from "./components/Success";
import Notfound from "./components/Notfound";
import Projects from "./components/Projects";
import Featuredprojects from "./components/featured";
import Newprojects from "./components/newprojects";
import Users from "./components/Users";
import UserDetails from "./components/UserDetails";
import { AuthProvider } from "./components/Auth";
import Login from "./components/Login";
import Logout from "./components/logout";
import Private from "./components/PrivateRoute";

const Lazyabout =React.lazy(()=>import("./components/About"));

function App() {
  return (
    <AuthProvider  className="App">
    <Navbar/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={
        <React.Suspense fallback="Loading...">
          <Lazyabout/>
        </React.Suspense>
      }/>
      <Route path="/success" element={<Success/>}/>
      
    <Route path="/projects"element={<Projects/>}>
    <Route path="featuredprojects"element={<Featuredprojects/>}/>
    <Route path="newprojects"element={<Newprojects/>}/>

      </Route>
      <Route path="/users" element={<Private><Users/></Private>}/>
      <Route path="/users/:userId" element={<UserDetails/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/logout" element={<Logout/>}/>
      <Route path="*"element={<Notfound/>}/>
     </Routes>
    </AuthProvider>
  );
}

export default App;
