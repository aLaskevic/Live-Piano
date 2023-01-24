import { useEffect, useState } from "react";
import React from "react";
import "./Home.css";
import Keyboard from "../Piano/Piano";
import CreateLobby from "../../pages/CreateSession/CreateSession";
import UserIcon from "../UserIcon/UserIcon";
import JoinLobby from "../../pages/JoinSession/JoinSession";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Home() {
  //const host = "wss://livepiano.onrender.com";
  const host = "ws://localhost:8083";
  const [connection, setConnection] = useState();
  const [isCreate, setIsCreate] = useState(true);
  const [userList, setUserList] = useState([]);
  const [socket, setSocket] = useState(null);

  if (socket == null) setSocket(new WebSocket(host));
  useEffect(() => {
    socket.onopen = () => {
      console.log("connection established!");
    };
    socket.onmessage = (message) => {
      const data = JSON.parse(message.data);
      console.log(data);

      if (data.type == "joinLobby" || data.type == "initLobby") {
        setConnection(data);
      }

      if (data.type == "newUser") {
        setUserList(data.userNames);
        toast.success(`The user ${data.user} joined the Lobby!`, {
          position: "top-left",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }

      if (data.type == "quitUser") {
        setUserList(data.userNames);
        console.log(data);
        toast.error(`The user  ${data.user} left the Lobby!`, {
          position: "top-left",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }

      if (data.type == "playNote") {
        let color;

        for (let i = 0; i < userList.length; i++) {
          if (userList[i].name == data.name) {
            color = userList[i].color;
          }
        }
        document.getElementById(data.note).style.backgroundColor = color;
        const path = "/notes/" + data.note + ".mp3";
        var audio = new Audio(path);
        audio.play();
        console.log(userList);
      }

      if (data.type == "stopNote") {
        const button = document.getElementById(data.note);
        if (button.classList[0] == "white")
          document.getElementById(data.note).style.backgroundColor = "white";
        if (button.classList[0] == "black")
          document.getElementById(data.note).style.backgroundColor = "black";
      }
    };
  }, [userList, connection, socket]);
  return (
    <>
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
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
            return (
              <>
                <div className="block">
                  <UserIcon user={user} connection={connection}></UserIcon>
                </div>
              </>
            );
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

export default Home;
