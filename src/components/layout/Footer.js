import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/svg/logo/logo2.svg";

const Column = ({ title, links = [], isTargetLink = false }) => {
  return (
    <div className=" mb-10 relative w-3/6 md:w-auto">
      <h3 className="text-lg mb-5 font-bold font-serif text-temp-primary">
        {title}
      </h3>

      <ul className="space-y-5 text-temp-gray text-sm-15">
        {links.map((link) => (
          <li key={link.id} className="hover:text-temp-primary">
            {isTargetLink ? (
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                {link.linkName}
              </a>
            ) : (
              <Link to={link.url}>{link.linkName}</Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Footer = () => {
  const columnData1 = [
    {
      id: "i1",
      url: "/individual",
      linkName: "Individual",
    },
    {
      id: "i2",
      url: "/corporate",
      linkName: (
        <>
          Corporate{" "}
          <span className="rounded-full py-1 px-2 bg-temp-orange font-bold text-temp-white text-xs">
            Coming Soon
          </span>
        </>
      ),
    },
  ];

  const columnData2 = [
    {
      id: "j1",
      url: "/about",
      linkName: "About",
    },
    {
      id: "j2",
      url: "/team",
      linkName: "The Team",
    },
    {
      id: "j3",
      url: "/careers",
      linkName: "Careers",
    },
    {
      id: "j4",
      url: "/blog",
      linkName: "Blog",
    },
    {
      id: "j5",
      url: "/contact",
      linkName: "Contact",
    },
  ];

  const columnData3 = [
    {
      id: "k1",
      url: "/refund-policy",
      linkName: "Refund Policy",
    },
    {
      id: "k2",
      url: "/insurance-policy",
      linkName: "Insurance Policy",
    },
    {
      id: "k3",
      url: "/rental-policy",
      linkName: "Rental Policy",
    },
  ];

  const columnData4 = [
    {
      id: "l1",
      url: "",
      linkName: "Facebook",
    },
    {
      id: "l2",
      url: "",
      linkName: "Twitter",
    },
    {
      id: "l3",
      url: "",
      linkName: "Instagram",
    },
  ];
  return (
    <footer className="py-10 pb-24">
      <div className="flex flex-wrap justify-between space-y-5 md:pr-9">
        <div className="max-w-full md:max-w-xs mt-5">
          <div className="mb-7">
            <img src={Logo} alt="Logo" />
          </div>
          <div className="space-y-5 text-sm-15">
            <p className="text-temp-gray">
              A secure & fully insured peer to peer rental marketplace for
              equipment
            </p>
            <p className="font-bold text-temp-gray">hello@tempown.com</p>
            <p className="text-temp-gray">
              The Business Centre 61 Wellfield Road Roath Cardiff CF24 3DG
            </p>
          </div>
        </div>
        <div className="flex flex-wrap justify-start sm:justify-between lg:justify-around  flex-grow lg:ml-20">
          <Column title="Platform" links={columnData1} />

          <Column title="The Company" links={columnData2} />

          <Column title="Legal" links={columnData3} />

          <Column title="Social" links={columnData4} isTargetLink={true} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
