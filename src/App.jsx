import './App.css';
import Navbar from './components/navbar';
import Services from './components/services';
import Propos from './components/propos';
import Rendez from './components/rendez-vous'; 
import Contact from './components/contact';
import Roundez from './components/roundez';

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <Services />
            <Propos />
            <Rendez />
            <Contact />
          </>
        }
      />

      
      <Route path="/roundez" element={<Roundez />} />
    </Routes>
  );
}

export default App;