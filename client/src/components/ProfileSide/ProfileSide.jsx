import React from 'react'
import LogoSearch from '../LogoSearch/LogoSearch'
import ProfileCard from '../ProfileCard/ProfileCard'
import './ProfileSide.css'
import FollowersCard from '../FollowersCard/FollowersCard'
import SideNav from '../Menu/SideNav'

const ProfileSide = () => {
  return (
    <div className='ProfileSide'>
        <LogoSearch/>
        {/* <ProfileCard/> */}
        <SideNav/>
        <FollowersCard/>
    </div>
  )
}

export default ProfileSide
