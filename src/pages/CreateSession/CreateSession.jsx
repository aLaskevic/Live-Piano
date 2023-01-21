import { useState } from "react";
import React from "react";
import "./CreateSession.css";

function cLobby(props) {
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  function createLobby(e) {
    e.preventDefault();
    if (name.length < 5) {
      setError("Name needs atleast 5 Letters!");
      return;
    }

    if (props.socket.readyState != 1) {
      setError("Connection couldn't establish!");
      return;
    }

    const connection = { type: "createLobby", name: name };

    props.socket.send(JSON.stringify(connection));

    setError("");
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
            <div className="error">{error}</div>
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