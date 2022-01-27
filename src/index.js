import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../src/routerComp/Layout";
import Home from "../src/routerComp/Home";
//import Blogs from "../src/routerComp/Blogs";
import Contact from "../src/routerComp/Contact";
import NoPage from "../src/routerComp/NoPage";
import './index.css' 
import React, { Suspense } from "react";

const Blogs = React.lazy(() => import('../src/routerComp/Blogs'));
const OnceMore = React.lazy(()=> import('../src/routerComp/OneMore'))

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="contact" element={<Contact />} />
            <Route path="next" element={< OnceMore />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));