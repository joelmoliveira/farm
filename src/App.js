import { useEffect } from "react";

// react-router components
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Material Kit 2 React themes
import theme from "assets/theme";
import Homepage from "pages/LandingPages/Homepage";
import Tech from "pages/LandingPages/Tech/tech";
import UseCases from "pages/LandingPages/UseCases/useCases";
import HowItWorks from "pages/LandingPages/HowItWorks/howWorks";
import PartnerUs from "pages/LandingPages/PartnerWithUs/partnerUs";
import AboutUs from "pages/LandingPages/AboutUs/aboutUs";
import ContactUs from "pages/LandingPages/ContactUs/contactUs";

// Material Kit 2 React routes
import routes from "routes";

export default function App() {
  const { pathname } = useLocation();

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return <Route exact path={route.route} element={route.component} key={route.key} />;
      }

      return null;
    });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        {getRoutes(routes)}
        <Route path="*" element={<Navigate to="/homepage" />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/tech" element={<Tech />} />
        <Route path="/usecases" element={<UseCases />} />
        <Route path="/howitworks" element={<HowItWorks />} />
        <Route path="/partnerus" element={<PartnerUs />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
    </ThemeProvider>
  );
}
