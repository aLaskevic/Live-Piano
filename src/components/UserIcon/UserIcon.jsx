import { useState } from "react";
import "./UserIcon.css";

export default function UserIcon(props) {
  const [isOption, setIsOption] = useState(false);
  return (
    <div className="user-list">
      <div
        onMouseEnter={() => setIsOption(true)}
        onMouseLeave={() => setIsOption(false)}
      >
        {isOption ? (
          <div
            className="user-list-menu"
            style={{ borderColor: props.user.color }}
          >
            Kick Mute
          </div>
        ) : (
          ""
        )}
        <div
          className="user-list-icon"
          style={{ backgroundColor: props.user.color }}
        >
          {props.user.name.at(0).toUpperCase()}
        </div>
      </div>
    </div>
  );
}
