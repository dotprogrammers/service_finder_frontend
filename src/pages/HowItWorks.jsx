import React from "react";
import {
  Pencil,
  Mail,
  CheckCircle,
  Star,
  UserPlus,
  User,
  Shield,
  Search,
  LineChart,
  Briefcase,
  ShieldCheck,
  DollarSign,
  Clock,
  Users,
  Heart,
} from "lucide-react";
import { Link } from "react-router-dom";
import Faq from "../components/Faq/Faq";
import HowServiceFinderWork from "../components/about/HowServiceFinderWork";
import HowItWorksBaneer from "../components/HowItWorks/HowItWorksBaneer";
import ServiceSeekers from "../components/HowItWorks/ServiceSeekers";
import ServiceProviders from "../components/HowItWorks/ServiceProviders";
import WhyChooseDSY from "../components/HowItWorks/WhyChooseDSY";

const HowItWorks = () => {
  return (
    <>
      <HowItWorksBaneer />
      <HowServiceFinderWork />
      <ServiceSeekers />
      <ServiceProviders />
      <WhyChooseDSY />
      <Faq />;
    </>
  );
};

export default HowItWorks;
