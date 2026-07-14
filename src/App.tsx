import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SiteLayout } from "./components/SiteLayout";
import { About } from "./pages/About";
import { Assessment } from "./pages/Assessment";
import { Careers } from "./pages/Careers";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";
import { PublicTransit } from "./pages/PublicTransit";
import { Services } from "./pages/Services";
import { Fleet } from "./pages/Fleet";
import { BrokersPartnerships } from "./pages/BrokersPartnerships";
import { FaqPage } from "./pages/FaqPage";

export function App() {
  return (
    <BrowserRouter>
      <SiteLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/fleet" element={<Fleet />} />
          <Route
            path="/brokers-partnerships"
            element={<BrokersPartnerships />}
          />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/public-transit" element={<PublicTransit />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/assessment" element={<Assessment />} />
          <Route path="/transportation-assessment" element={<Assessment />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </SiteLayout>
    </BrowserRouter>
  );
}
