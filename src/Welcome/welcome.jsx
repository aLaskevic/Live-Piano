import { useState } from "react";
import React from "react";
import "./welcome.css";
import Keyboard from "../Keyboard/keyboard";
import CreateLobby from "../CreateLobby/createlobby";
import JoinLobby from "../JoinLobby/joinlobby";

function welcome() {
  const [connection, setConnection] = useState();
  const [createLobby, setcreateLobby] = useState(true);

  return (
    <>
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
