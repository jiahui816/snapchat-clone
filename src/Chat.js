import { Avatar } from "@material-ui/core";
import StopRoundedIcon from "@material-ui/icons/StopRounded";
import React from "react";
import { useDispatch } from "react-redux";
import ReactTimeago from "react-timeago";
import { db } from "./firebase";
import "./Chat.css";
import { selectImage } from "./features/appSlice";
import { useHistory } from "react-router-dom";
function Chat({ id, username, timestamp, read, imageUrl, profilePic }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const open = () => {
    if (!read) {
      dispatch(selectImage(imageUrl));
      db.collection("posts").doc(id).set(
        {
          read: true,
        },
        {
          merge: true,
        }
      );
      history.push("/view");
    }
  };

  return (
    <div onClick={open} className="chat">
      <Avatar className="chat__avatar" src={profilePic} />
      <div className="chat__info">
        <h4>{username}</h4>
        <p>
          Tap to View -{" "}
          <ReactTimeago date={new Date(timestamp?.toDate()).toUTCString()} />
        </p>
      </div>

      {!read && <StopRoundedIcon className="chat__readIcon" />}
    </div>
  );
}

export default Chat;
