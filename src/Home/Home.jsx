import { useEffect, useState } from "react";
import React from "react";
import "./Home.css";
import Keyboard from "../components/Piano/Piano";
import CreateLobby from "../pages/CreateSession/CreateSession";
import UserIcon from "../components/UserIcon/UserIcon";
import JoinLobby from "../pages/JoinSession/JoinSession";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";

function welcome() {
  const [connection, setConnection] = useState();
  const [isCreate, setIsCreate] = useState(true);
  const [userList, setUserList] = useState([]);
  const [socket, setSocket] = useState(new WebSocket("ws://localhost:8083"));

  useEffect(() => {
    if (!socket) setSocket(new WebSocket("ws://localhost:8083"));

    socket.onopen = () => console.log("Connection established!");
    socket.onmessage = (message) => {
      const data = JSON.parse(message.data);
      console.log(data);

      if (data.type == "joinLobby" || data.type == "initLobby") {
        setConnection(data);
      }

      if (data.type == "newUser" || data.type == "quitUser") {
        setUserList(data.userNames);
      }
    };
  }, []);
  return (
    <>
      {connection && (
        <div className="room-information">
          <div className="copy-code">
            <span>{connection.sessionId}</span>
            <div className="copy">
              <FontAwesomeIcon icon={faCopy}></FontAwesomeIcon>
            </div>
          </div>
          <br></br>
          {userList.map((user) => {
            return <UserIcon user={user}></UserIcon>;
          })}
        </div>
      )}
      {isCreate
        ? !connection && (
            <CreateLobby display={setIsCreate} socket={socket}></CreateLobby>
          )
        : !connection && (
            <JoinLobby display={setIsCreate} socket={socket}></JoinLobby>
          )}
      {connection ? (
        <Keyboard
          connection={connection}
          socket={socket}
          userList={userList}
        ></Keyboard>
      ) : (
        ""
      )}
    </>
  );
}

export default welcome;
