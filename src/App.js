import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { WelcomeHome } from './screens/welcomeHome/WelcomeHome';
import { Works } from './screens/works/Works';
import { Photographers } from './screens/photographers/Photographers';
import { Contact } from './screens/contact/Contact';
import { Directors } from './screens/directors/Directors';
import { PhotographerId } from './screens/photographerId/PhotographerId';
import { DirectorId } from './screens/directorsId/DirectorId';
import { WorksId } from './screens/worksId/WorksId';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<WelcomeHome />} />
        <Route path="/works" element={<Works />} />
        <Route path="/photographers" element={<Photographers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/directors" element={<Directors />} />
        <Route path="/photographers/:id" element={<PhotographerId />} />
        <Route path="/directors/:id" element={<DirectorId />} />
        <Route path="/works/:id" element={<WorksId />} />
      </Routes>
    </Router>
  );
}

export default App;
