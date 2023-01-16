import { useState } from "react";
import React from "react";
import "./welcome.css";
import Keyboard from "../components/Keyboard/keyboard";
import CreateLobby from "../pages/CreateLobby/createlobby";
import JoinLobby from "../pages/JoinLobby/joinlobby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";

function welcome() {
  const [connection, setConnection] = useState();
  const [createLobby, setcreateLobby] = useState(true);
  const [userList, setUserList] = useState([{ name: "alex" }]);

  return (
    <>
      {console.log(userList)}
      {connection && (
        <div className="room-information">
          <div className="copy-code">
            <span>{connection.lobbyId}</span>
            <div className="copy">
              <FontAwesomeIcon icon={faCopy}></FontAwesomeIcon>
            </div>
          </div>
          <div className="userList"></div>
        </div>
      )}
      {createLobby
        ? !connection && (
            <CreateLobby
              connection={setConnection}
              userList={setUserList}
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
