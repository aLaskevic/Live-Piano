import { useEffect, useState } from "react";
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
  const [userList, setUserList] = useState([]);

  return (
    <>
      {connection && (
        <div className="room-information">
          <div className="copy-code">
            <span>{connection.lobbyId}</span>
            <div className="copy">
              <FontAwesomeIcon icon={faCopy}></FontAwesomeIcon>
            </div>
          </div>
          <br></br>
          <div className="user-list">
            {userList.map((user) => {
              return (
                <div style={{ backgroundColor: user.color }}>
                  {user.name.at(0).toUpperCase()}
                </div>
              );
            })}
          </div>
        </div>
      )}
      {createLobby
        ? !connection && (
            <CreateLobby
              connection={setConnection}
              display={setcreateLobby}
              setUserList={setUserList}
            ></CreateLobby>
          )
        : !connection && (
            <JoinLobby
              connection={setConnection}
              display={setcreateLobby}
              setUserList={setUserList}
            ></JoinLobby>
          )}
      {connection ? (
        <Keyboard connection={connection} userList={userList}></Keyboard>
      ) : (
        ""
      )}
    </>
  );
}

export default welcome;
