import React from 'react'
import SignOut from './SignOut'
import '../style/SideNavigation.css'
import { MdClear , MdSpaceDashboard , MdEmail} from "react-icons/md";
import { FaAlignJustify , FaHome } from "react-icons/fa"
import { FaInfoCircle } from "react-icons/fa"

const handleCloseNav = function(){
    document.querySelector(".sideNavigation").style.marginLeft = "-80%";
    document.querySelector(".openSideNav").style.display = "block"
    document.querySelector(".closeSideNav").style.display = "none"
}

const handleOpenNav = function(){
    document.querySelector(".sideNavigation").style.marginLeft = "0px";
    document.querySelector(".openSideNav").style.display = "none"
    document.querySelector(".closeSideNav").style.display = "block"
  }


export const SideNavigation = ({ user }) => {
  return (
    <div className='sideNavigation'>
        <div className='UserInformation'>
            <h5>{user?.email}</h5>
            <div className="accountManagment">
                <div className='card'>
                 <SignOut />
               </div>
             </div>
             <FaAlignJustify className='openSideNav' onClick={handleOpenNav}/>
             <MdClear className='closeSideNav' onClick={handleCloseNav}/>
        </div>      
        <div className="sideNavItems">
                <p className='sideNavItem'>DashBoard <MdSpaceDashboard className='sideNavIcons'/></p>
                <p className='sideNavItem'>Landing Page <FaHome className='sideNavIcons'/></p>
                <p className='sideNavItem'>About <FaInfoCircle className='sideNavIcons'/></p>
                <p className='sideNavItem'>Contact Us <MdEmail className='sideNavIcons'/></p>
                <p className='sideNavItem'>DashBoard</p>
                <p className='sideNavItem'>DashBoard</p>
        </div>
    </div>
  )
}
 
export default  SideNavigation 
