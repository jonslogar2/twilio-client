import { BrowserRouter, Route, Routes } from 'react-router-dom';

import AboutUs from '../pages/AboutUsPage/AboutUs';
import MainLayout from '../layout/MainLayout/MainLayout';
import ViberPage from '../pages/Viber/ViberPage';
import CallPage from '../pages/Call/CallPage';
import SmsPage from '../pages/Sms/SmsPage';
import Homepage from '../pages/Home/Homepage';

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
