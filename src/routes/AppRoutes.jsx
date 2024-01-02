import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Homepage from '../pages/Homepage/Homepage';
import AboutUs from '../pages/AboutUsPage/AboutUs';
import MainLayout from '../layout/MainLayout/MainLayout';
import ViberPage from '../pages/Viber/ViberPage';
import CallPage from '../pages/CallPage/CallPage';
import SmsPage from '../pages/Sms/SmsPage';

const AppRoutes = () => {
  return (
    <section>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Homepage />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/viber-page" element={<ViberPage />} />
            <Route path="/sms-page" element={<SmsPage />} />
            <Route path="/call-page" element={<CallPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </section>
  );
};

export default AppRoutes;
