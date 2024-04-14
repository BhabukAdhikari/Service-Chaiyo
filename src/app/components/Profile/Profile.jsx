import profileImage from './profile.jpg'
import { useContext, useState } from 'react'

import './Profile.css'
export const Profile = () => {
    const [show, setShow] = useState(false)
    const handleDropdown = () => {
        setShow(!show)
    }
    return (
        <>
            <img src={profileImage} className='profile-img' alt="profile" onClick={handleDropdown} />
            <DropDown />
            {/* <p className='text-center text-light'>{name}</p> */}
        </>
    )
}

export const DropDown = () => {
    return (
        <select>
            <option>1</option>
            <option>2</option>
            <option>3</option>
        </select>
    )
}