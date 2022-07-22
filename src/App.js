import React from "react";
import { Routes, BrowserRouter, Route, Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import Home from "./Components/home";
import News from "./Components/news";
import About from "./Components/about";
import ContactUs from "./Components/contactUs";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Container>
          <div>Breaking news....</div>
          <Row>
            <Col xs={2}>
              <div>sidebar....</div>
              <ul>
                <Link to={"/about"}>
                  <li>About</li>
                </Link>
                <Link to="/contactUs">
                  <li>Contact Us</li>
                </Link>
                <Link to="/">
                  <li>Home</li>
                </Link>
              </ul>
            </Col>
            <Col>
              <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="news/:newsId" element={<News />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/contactUs" element={<ContactUs />}></Route>
              </Routes>
            </Col>
          </Row>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
