import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeXmark } from "@fortawesome/free-solid-svg-icons";
import { faVolumeHigh } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import "./UserIcon.css";

export default function UserIcon(props) {
  const [isOption, setIsOption] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <div
        className="user"
        onMouseEnter={() => setIsOption(true)}
        onMouseLeave={() => setIsOption(false)}
      >
        {isOption ? (
          <div className="user-menu">
            {props.connection.sessionId == props.connection.userId &&
            props.connection.name != props.user.name ? (
              <FontAwesomeIcon
                className="kick"
                icon={faXmark}
                onClick={() => setIsModalOpen(true)}
              ></FontAwesomeIcon>
            ) : (
              ""
            )}
            {isMuted ? (
              <FontAwesomeIcon
                className="user-menu-entry"
                icon={faVolumeXmark}
                onClick={() => {
                  setIsMuted((prev) => !prev);
                }}
              ></FontAwesomeIcon>
            ) : (
              <FontAwesomeIcon
                className="user-menu-entry"
                icon={faVolumeHigh}
                onClick={() => {
                  setIsMuted((prev) => !prev);
                }}
              ></FontAwesomeIcon>
            )}
          </div>
        ) : (
          ""
        )}
        <div
          className="user-icon"
          style={{ backgroundColor: props.user.color }}
        >
          {props.user.name.at(0).toUpperCase()}
        </div>
      </div>
      {isModalOpen ? (
        <div className="kick-modal">
          <div className="kick-modal-content">
            <h3>
              Are you sure that you want to kick{" "}
              <span className="kick-modal-content-user">{props.user.name}</span>
              ?
            </h3>
            <div className="kick-modal-buttons">
              <button
                onClick={() => setIsModalOpen(false)}
                className="kick-modal-buttons-kick"
              >
                Kick
              </button>
              <button
                onClick={() => setIsModalOpen(false)}
                className="kick-modal-buttons-cancel"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
