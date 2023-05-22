import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { WelcomeHome } from './screens/welcomeHome/WelcomeHome';
import { Works } from './screens/works/Works';
import { Photographers } from './screens/photographers/Photographers';
import { Contact } from './screens/contact/Contact';
import { Directors } from './screens/directors/Directors';
import { PhotographerId } from './screens/photographerId/PhotographerId';
import { DirectorId } from './screens/directorsId/DirectorId';
import { WorksId } from './screens/worksId/WorksId';
import FirebaseContextProvider from './context/firebaseContext';
import { VideoId } from './screens/videoId/VideoId';

function App() {
  const location = useLocation();

  const RoutesComp = () => (
    <Routes location={location} key={location.pathname}>
      <Route exact path="/" element={<WelcomeHome />} />
      <Route path="/works" element={<Works />} />
      <Route path="/photographers" element={<Photographers />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/directors" element={<Directors />} />
      <Route path="/photographers/:id" element={<PhotographerId />} />
      <Route path="/directors/:id" element={<DirectorId />} />
      <Route path="/works/:id" element={<WorksId />} />
      <Route path="/video/:id/:name" element={<VideoId />} />
    </Routes>
  )

  return (
    <FirebaseContextProvider>
        <RoutesComp />
    </FirebaseContextProvider>
  );
}

export default App;
