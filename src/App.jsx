import React, { useState } from "react";
import { BrowserRouter as Router , Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CoursesPage from "./pages/CoursesPage";
import ContactPage from "./pages/ContactPage";
import AdmissionsPage from "./pages/AdmissionsPage";
import './App.css'
import ChatbotComponent from "./components/Chatbot/ChatbotComponents";
import DeveloperInfoPopup from "./components/DeveloperInfo/DeveloperInfoPopup";

const App = () => {
  const [showPopup, setShowPopup] = useState(true);
  const handleClosePopup = () => {
    setShowPopup(false);
  };
  return(
    < >
    <div>
        {/* Your main application content */}
        <DeveloperInfoPopup
          show={showPopup}
          onClose={handleClosePopup}
          studentName="Sanskruti Anil Shelke"
          studentPhotoUrl="/Images/sanskruti.jpg" // Path to their photo
          uniqueMessage="Learned so much during this OJT! This app showcases my independent coding and deployment skills"
        />
      </div>
    <div>
      <Router>
        <Routes>
          <Route path="/homepage" element={<HomePage/>}/>
          <Route path="/admissionpage" element={<AdmissionsPage/>}/>
          <Route path="/aboutpage" element={<AboutPage/>}/>
          <Route path="/coursespage" element={<CoursesPage/>}/>
          <Route path="/contactpage" element={<ContactPage/>}/>
        </Routes>
        <ChatbotComponent/>
      </Router>
    </div>
    </>
  )
}

export default App