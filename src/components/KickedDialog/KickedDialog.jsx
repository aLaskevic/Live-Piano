import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeXmark } from "@fortawesome/free-solid-svg-icons";
import { faVolumeHigh } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import "./KickedDialog.css";

export default function KickedDialog(props) {
  return (
    <>
      <div className="kick-modal">
        <div className="kick-modal-content">
          <h3>You've been kicked!</h3>
          <button
            className="kick-modal-buttons-kick"
            onClick={() => window.location.reload()}
          >
            Back to Home
          </button>
        </div>
      </div>
    </>
  );
}
