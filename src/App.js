import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar"; // Import Navbar
import Footer from "./components/Footer";
import UploadProject from './pages/UploadProject'; // Import Footer
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from './pages/Home';
import Register from './pages/Register';
import ProjectDetails from "./pages/ProjectDetails";
import CreateProject from "./pages/CreateProject";
import ViewProjects from "./pages/ViewProjects";
import ProjectInfoPage from './pages/ProjectInfoPage';
import Contact from "./pages/Contact"; 
import About from "./pages/About"; 
// Add this import at the top of App.js
import Solutions from './pages/Solutions';
import Education from "./pages/Education"; // Adjust path as needed
// Verify correct path
// import CreateTask from "./pages/CreateTask";

function App() {
  return (
    <Router>
      <Navbar /> {/* Add Navbar */}
      <div style={styles.content}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/Project-info" element={<ProjectInfoPage />} />
          <Route path="/projectDetails" element={<ProjectDetails />} />
          <Route path="/home" element={<Home />} />
          <Route path="/create-project" element={<CreateProject />} />
          <Route path="/projects" element={<ViewProjects/>}></Route>
          <Route path="/solutions/:solutionId" element={<Solutions />} />
          <Route path="/projects" element={  <ViewProjects />} />
          {/* <Route path="/education" element={<Education />} /> */}
          <Route path="/education" element={<Education />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          {/* <Route path="/create-task/:projectId" element={<CreateTask />} /> */}
          <Route path="/UploadProject" element={<UploadProject/>}></Route>
        </Routes>
        
      </div>
      <Footer /> {/* Add Footer */}
    </Router>
  );
}

// Basic styles for content area
const styles = {
  content: {
    minHeight: "calc(100vh - 120px)", // Adjust height to fit Navbar and Footer
    padding: "20px",
  },
};

export default App;