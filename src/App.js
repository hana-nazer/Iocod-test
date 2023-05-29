import React from "react";
import Banner from "./components/Banner";
import IoMarquee from "./components/IoMarquee";
import Splash from "./components/Splash";
import GetStarted from "./components/GetStarted";
import Pillars from "./components/Pillars";
import WhatWeDo from "./components/WhatWeDo";
import Testimonials from "./components/Testimonials";
import LetsTalk from "./components/LetsTalk";
import Footer from "./components/Footer";
function App() {
  return (
    <div>
      <Banner/>
      <IoMarquee/>
      <Splash/>
      <GetStarted/>
      <Pillars/>
      <WhatWeDo/>
      <Testimonials/>
      <LetsTalk/>
      <Footer/>
    </div>
  );
}

export default App;
