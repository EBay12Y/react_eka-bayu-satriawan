import React from "react";
import { Navbar, Hero, Works, ContactUs, Services, AboutUs, Clients, Footer } from "./components"

function App() {

  return (
    <div>
      <Navbar />
      <Hero />
      <Works />
      <ContactUs />
      <Services />
      <AboutUs />
      <Clients />
      <Footer />
    </div>
  );
}

export default App;