import { useState } from "react";
import React from "react";
import "./welcome.css";
import Keyboard from "../Keyboard/keyboard";
import CreateLobby from "../CreateLobby/createlobby";
import JoinLobby from "../JoinLobby/joinlobby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function welcome() {
  const [connection, setConnection] = useState();
  const [createLobby, setcreateLobby] = useState(true);
  return (
    <>
      <FontAwesomeIcon icon="copy" />
      {connection && (
        <div className="copy-code">
          <span>{connection.lobbyId}</span>
        </div>
      )}
      {createLobby
        ? !connection && (
            <CreateLobby
              connection={setConnection}
              display={setcreateLobby}
            ></CreateLobby>
          )
        : !connection && (
            <JoinLobby
              connection={setConnection}
              display={setcreateLobby}
            ></JoinLobby>
          )}
      {connection ? <Keyboard connection={connection}></Keyboard> : ""}
    </>
  );
}

export default welcome;
