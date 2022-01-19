import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages';
import ContactPage from './pages/contact';
import AboutPage from './pages/about';
import BlogsPage from './pages/blogs';
import ResumePage from './pages/resume';
import ProjectsDetailsPage from './pages/projectsDetails';
import { Worker } from '@react-pdf-viewer/core';

function App() {
  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.11.338/build/pdf.worker.min.js">
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/contact" component={ContactPage} exact />
          <Route path="/about" component={AboutPage} exact />
          <Route path="/blogs" component={BlogsPage} exact />
          <Route path="/resume" component={ResumePage} exact />
          <Route path="/projects-details" component={ProjectsDetailsPage} exact />
        </Switch>
      </Router>
    </Worker>
  );
}

export default App;
