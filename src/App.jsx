import { Route, Routes } from "react-router-dom";
import Header from "./components/header";
import "./App.css";
import Page from "./components/page";
import Newp from "./components/Newp";
import Page2 from "./components/Page2";
import Insert from "./components/Insert";
import View from "./components/view";
function App() {
  return (
    <div className="app-container">
      <Header>
        <marquee>Welcome to React Template with Routing</marquee>
      </Header>

      <div className="mid">
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/page1" element={<Page/>} >
          <Route path="newp" element ={<Newp/>}/>
          </Route>
           <Route path="/page2" element={<Page2 />}>
          <Route index element={<h1>Home</h1>} />
          <Route path="home" element={<h1>Home</h1>} />
          <Route path="about" element={<h2>About</h2>} />
          <Route path="services" element={<h2>Services</h2>} />
          <Route path="contact" element={<h2>Contact</h2>} />
        </Route>
          <Route path="/insert" element={<Insert/>} />
          <Route path="/update" element={<h1>Page 4</h1>} />
          <Route path="/delete" element={<h1>Page 5</h1>} />
          <Route path="/view" element={<View/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
