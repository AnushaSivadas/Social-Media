import React,{useEffect} from 'react'
import Cover from '../../img/cover.jpg'
import Profile from '../../img/profileImg.jpg'
import './ProfileCard.css'
import axios from "../../utils/axios";
import { change } from "../../Redux/usernameReducer";
import { verifyToken } from "../../utils/Constants";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";


const ProfileCard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const username = useSelector((state) => {
    return state.username;
  });

  useEffect(() => {     
    const Token = localStorage.getItem("token");
    console.log("token", Token);
    if (!Token) {
      return navigate("/login");
    } else {
      axios
        .post(verifyToken, JSON.stringify({ Token }), {
          headers: { "Content-Type": "application/json" },
        })
        .then((res) => {

          // setName(res.data.user.username);
          // setemail(res.data.user.email);
          // setFullname(res.data.user && res.data.user.fullname);
          // setImage(res.data.user.image.url);

          dispatch(change(res.data.user.username));
          // dispatch(changeImage(res.data.user.image.url));
          // dispatch(changeFollowing(res.data.followingCount));
          // console.log(res.data);

        })
        .catch((err) => {
          localStorage.removeItem("token");
        });
    }
  }, [navigate, dispatch]);
  return (
    <div className='ProfileCard'>
        <div className='ProfileImages'>
            <img  src={Cover} alt="Cover"/>
            <img  src={Profile} alt="Profile"/>
        </div>
        <div className="ProfileName">
        <span>{username}</span>
        <span>Senior UI/UX Designer</span>
      </div>

      <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
            <span>6,890</span>
            <span>Followings</span>
          </div>
          <div className="vl"></div>
          <div className="follow">
            <span>1</span>
            <span>Followers</span>
          </div>

          {/* {ProfilePage && (
            <>
              <div className="vl"></div>
              <div className="follow">
                <span>3</span>
                <span>Posts</span>
              </div>
            </>
          )} */}
        </div>
        <hr />
      </div>
      {/* {ProfilePage ? "" : <span>My Profile</span>} */}
      {/* <span>My Profile</span> */}
      
    </div>
  )
}

export default ProfileCard
