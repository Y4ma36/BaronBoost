import contactIcon from "../../assets/Support/contactus.png";
import listIcon from "../../assets/Support/list.png";
import policyIcon from "../../assets/Support/policy.png";
import boosterIcon from "../../assets/Support/booster.png";

const supportData = [
  {
    id: 1,
    name: "Contact Us",
    description: "Get in touch with us for any support or inquiries.",
    link: "contact",
    icon: contactIcon,
  },
  {
    id: 2,
    name: "FAQs",
    description: "Find answers to the most frequently asked questions.",
    link: "faqs",
    icon: listIcon,
  },
  {
    id: 3,
    name: "Policy",
    description: "Read our policies regarding privacy, terms of service, etc.",
    link: "policy",
    icon: policyIcon,
  },
  {
    id: 4,
    name: "Booster-Application",
    description: "Apply to become a booster with us.",
    link: "booster-application",
    icon: boosterIcon,
  },
];

export default supportData;
