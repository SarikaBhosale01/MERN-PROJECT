import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; // Import Navbar
import Footer from "./components/Footer"; // Import Footer
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import ProjectDetails from "./pages/ProjectDetails";
import CreateProject from "./pages/CreateProject";
import ViewProjects from "./pages/ViewProjects";
import ProjectInfoPage from './pages/ProjectInfoPage'; // Verify correct path
// import CreateTask from "./pages/CreateTask";

function App() {
  return (
    <Router>
      <Navbar /> {/* Add Navbar */}
      <div style={styles.content}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/Project-info" element={<ProjectInfoPage />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
          <Route path="/create-project" element={<CreateProject />} />
          <Route path="/projects" element={<ViewProjects/>}></Route>
          <Route 
          path="/projects" 
          element={
            
              <ViewProjects />
            
          } 
        />

          {/* <Route path="/create-task/:projectId" element={<CreateTask />} /> */}
          
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