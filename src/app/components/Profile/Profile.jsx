import { useContext, useState } from 'react';
import profileImage from './profile.jpg';

import './Profile.css';

export const Profile = () => {
    const [show, setShow] = useState(false);

    const handleDropdown = () => {
        setShow(!show);
    };

    return (
        <div className="profile-container">
            <img src={profileImage} className='profile-img' alt="profile" onClick={handleDropdown} />
            {show && <ProfileDropDown />}
        </div>
    );
}

import { IoIosSettings } from "react-icons/io";
import { IoLogOutSharp } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import Dropdown from 'react-bootstrap/Dropdown';
export const ProfileDropDown = () => {
    return (
        <div className="dropdown-container mt-1">
            <div className='dropdownMenu pb-3'>
                <Dropdown.Item href="/setting" className='icons-title'><IoIosSettings className='mx-1' /> Setting</Dropdown.Item>
                <Dropdown.Item href="/profile" className='icons-title'> <CgProfile className='mx-1' /> Profile</Dropdown.Item>
                <Dropdown.Item href="/logout" className='icons-title'><IoLogOutSharp className='mx-1' /> LogOut</Dropdown.Item>
            </div>
        </div>
    );
};  
