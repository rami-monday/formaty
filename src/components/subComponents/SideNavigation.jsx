import React, { useState } from "react";
import SignOut from "./SignOut";
import "../style/SideNavigation.css";
import { MdClear, MdSpaceDashboard, MdEmail } from "react-icons/md";
import { FaAlignJustify, FaHome } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


export const SideNavigation = ({ user }) => {
  const [showNav, setShowNav] = useState(true);
  const navigate = useNavigate();

  return (
    <div className={"sideNavigation " + (showNav && "closeSideNavigator")}>
      <div className="UserInformation">
        <h5>{user?.username}</h5>
        <div className="accountManagment">
          <div className="card">
            <SignOut />
          </div>
        </div>
        <MdClear
          className={showNav ? "openSideNav" : "closeSideNav"}
          onClick={() => setShowNav(true)}
        />
        <FaAlignJustify className={showNav ? "closeSideNav" : "openSideNav"} onClick={() => setShowNav(false)} />
      </div>
      <div className="sideNavItems">
        <p className="sideNavItem" onClick={() => navigate("/dashboard/")}>
          DashBoard <MdSpaceDashboard className="sideNavIcons" />
        </p>
        <p className="sideNavItem">
          Landing Page <FaHome className="sideNavIcons" />
        </p>
        <p className="sideNavItem">
          About <FaInfoCircle className="sideNavIcons" />
        </p>
        <p className="sideNavItem">
          Contact Us <MdEmail className="sideNavIcons" />
        </p>
        <p className="sideNavItem">DashBoard</p>
        <p className="sideNavItem">DashBoard</p>
      </div>
    </div>
  );
};

export default SideNavigation;
