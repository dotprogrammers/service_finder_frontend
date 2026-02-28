import { Descriptions } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Faq from "../components/Faq/Faq";
import PricingBanner from "../components/pricing/PricingBanner";
import PricingPlans from "../components/pricing/PricingPlans";

const PricingPage = () => {
  return (
    <>
      <div className="page-content">
        <PricingBanner />
        <PricingPlans />
        <Faq />
      </div>
    </>
  );
};

export default PricingPage;
