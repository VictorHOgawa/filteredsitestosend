import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Libraries
import { BrowserRouter } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";
import { LazyMotion, domMax } from "framer-motion";

// css
import "./Assets/css/icons.css";
import "./Assets/css/global.css";
import "./Assets/css/pages.css";
import "./index.scss";

import CreativeAgencyPage from "./Sites/CreativeAgency";
import DigitalagencyPage from "./Sites/DigitalAgency";
import FurnitureShopPage from "./Sites/FurnitureShop";
import InteractiveportfolioPage from "./Sites/InteractivePortfolio";
import MarketingAgencyPage from "./Sites/MarketingAgency";
import PhotographyPage from "./Sites/Photography";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <LazyMotion features={domMax}>
    <ParallaxProvider>
      <BrowserRouter>
        {/* <App /> */}

        {/* Alterar qual site aparece */}

        {/* <DigitalagencyPage /> */}

        {/* <CreativeAgencyPage /> */}

        {/* <FurnitureShopPage /> */}

        {/* <InteractiveportfolioPage /> */}

        {/* <MarketingAgencyPage /> */}

        <PhotographyPage />
      </BrowserRouter>
    </ParallaxProvider>
  </LazyMotion>
);
