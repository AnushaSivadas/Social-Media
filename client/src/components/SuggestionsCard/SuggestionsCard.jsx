import React from 'react'
import './SuggestionsCard.css'
import { Followers } from '../../Data/FollowersData'

const SuggestionsCard = () => {
  return (
    <div className='SuggestionsCard'>
      <h3 className='suggest'>Suggestions For You</h3>
      {Followers.map((follower,id)=>{
        return(
            <div className="follower">
                <div>
                    <img src={follower.img} alt=""
                    className='followerImage'/>
                    <div className="name">
                        <span>{follower.name}</span>
                        <span>{follower.username}</span>
                    </div>
                </div>
                <button className='button fc-button'>Follow</button>
            </div>
        )
      })}
    </div>
  )
}

export default SuggestionsCard
