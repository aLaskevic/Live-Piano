import { useState } from "react";
import React from "react";
import "./CreateSession.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function cLobby(props) {
  const [name, setName] = useState("");

  function createLobby(e) {
    e.preventDefault();
    if (name.length < 5) {
      return;
    }

    if (props.socket.readyState != 1) {
      return;
    }

    const connection = { type: "createLobby", name: name };

    props.socket.send(JSON.stringify(connection));
  }

  return (
    <>
      <div id="home">
        <div id="container">
          <div className="title">
            <span id="Live">Live</span>
            <span id="Piano">Piano</span>
            <div>Invite your friends to a session!</div>
          </div>
          <form>
            <input
              type="Text"
              placeholder="Enter your name"
              className="input-text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            ></input>
            <button className="btn btn-primary" onClick={createLobby}>
              Create session
            </button>
            <button
              className="btn btn-outlined-primary"
              onClick={(e) => {
                e.preventDefault();
                props.display(false);
              }}
            >
              Join session
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default cLobby;
