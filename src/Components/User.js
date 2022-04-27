import emptyHeart from "../assets/img/heart.svg";
import fillHeart from "../assets/img/heart-fill.svg"
import './styles/User.css'
import {useState} from "react";

export default function User(props) {
    const [isVisible, setIsVisible] = useState(false)
    return(
        <div key={props.data.id} className="user-container">
            <div className="left-user-container">
                <div className="avatar"><img src={props.data.avatar} alt={"profile-pic-" + props.data.id}/></div>
                <div className="user-datas">
                    <span>{props.data.first_name} {props.data.last_name}</span>
                    <span>{props.data.email}</span>
                </div>
            </div>
            <div>
                <img src={isVisible ? fillHeart : emptyHeart} alt="favorite-heart" onClick={() => setIsVisible(!isVisible)}/>
            </div>
        </div>
    )
}
