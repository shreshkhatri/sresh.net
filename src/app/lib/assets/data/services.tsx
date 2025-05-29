import WebIcon from "@mui/icons-material/Web";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import SchoolIcon from "@mui/icons-material/School";
import SettingsIcon from "@mui/icons-material/Settings";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';


export const services = [
  {
    title: "Web Application Development",
    description:
      "Custom web apps built with modern technologies for scalable, secure, and performant solutions.",
    icon: <WebIcon sx={{ fontSize: 40, color: "primary.500" }} />,
  },
  {
    title: "Machine Learning & AI Development",
    description:
      "Innovative AI & machine learning solutions tailored to your business needs and automation goals.",
    icon: <SmartToyIcon sx={{ fontSize: 40, color: "primary.500" }} />,
  },
  {
    title: "Moodle LMS Development",
    description:
      "Robust, scalable Learning Management Systems powered by Moodle for effective e-learning experiences.",
    icon: <SchoolIcon sx={{ fontSize: 40, color: "primary.500" }} />,
  },
  {
    title: "Legacy System Maintenance",
    description:
      "Reliable maintenance and modernization of legacy systems to ensure smooth business operations.",
    icon: <SettingsIcon sx={{ fontSize: 40, color: "primary.500" }} />,
  },
  {
    title: "Affordable & Cost-Effective Solutions",
    description:
      "Affordable and cost-effective solutions designed to maximize your ROI without compromising quality.",
    icon: <AttachMoneyIcon sx={{ fontSize: 40, color: "primary.500" }} />,
  },
];