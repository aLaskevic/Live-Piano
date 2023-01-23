import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeXmark } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import "./UserIcon.css";

export default function UserIcon(props) {
  const [isOption, setIsOption] = useState(false);
  console.log(props.connection);
  console.log(props.user);
  return (
    <div
      className="user"
      onMouseEnter={() => setIsOption(true)}
      onMouseLeave={() => setIsOption(false)}
    >
      {isOption ? (
        <div className="user-menu">
          {props.connection.sessionId == props.connection.userId ? (
            <FontAwesomeIcon className="kick" icon={faXmark}></FontAwesomeIcon>
          ) : (
            ""
          )}
          <FontAwesomeIcon
            className="user-menu-entry"
            icon={faVolumeXmark}
          ></FontAwesomeIcon>
        </div>
      ) : (
        ""
      )}
      <div className="user-icon" style={{ backgroundColor: props.user.color }}>
        {props.user.name.at(0).toUpperCase()}
      </div>
    </div>
  );
}
