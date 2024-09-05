import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaYoutube, FaInstagram } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/haikalputra-dev" },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/muhamad-haikal-mulya-putera-3661b1191/",
  },
  {
    icon: <FaYoutube />,
    path: "https://www.youtube.com/@muhamadhaikalmulyap4910",
  },
  { icon: <FaInstagram />, path: "https://www.instagram.com/haikalputrr/" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.path}
            className={iconStyles}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
