import "./Piano.css";

function Keyboard(props) {
  /*
   * Plays a note as audio
   * note : string -> represents a note as string
   */
  props.socket.addEventListener("message", (message) => {
    const data = JSON.parse(message.data);
    let color;
    if (data.type == "playNote") {
      for (let i = 0; i < props.userList.length; i++) {
        if (props.userList[i].name == data.name) {
          color = props.userList[i].color;
        }
      }

      document.getElementById(data.note).style.backgroundColor = color;
      const path = "/notes/" + data.note + ".mp3";
      var audio = new Audio(path);
      audio.play();
    }
    if (data.type == "stopNote") {
      const button = document.getElementById(data.note);
      if (button.classList[0] == "white")
        document.getElementById(data.note).style.backgroundColor = "white";
      if (button.classList[0] == "black")
        document.getElementById(data.note).style.backgroundColor = "black";
    }
  });

  function playNote(wnote) {
    if (props.socket.readyState == 1)
      props.socket.send(
        JSON.stringify({
          type: "playNote",
          note: wnote,
          name: props.connection.name,
          sessionId: props.connection.sessionId,
        })
      );
  }

  function stopNote(wnote) {
    if (props.socket.readyState == 1)
      props.socket.send(
        JSON.stringify({
          type: "stopNote",
          note: wnote,
          name: props.connection.name,
          sessionId: props.connection.sessionId,
        })
      );
  }

  return (
    <>
      <div id="keyBoard">
        <div
          className="white t"
          id="C1"
          onMouseDown={(e) => {
            playNote(e.target.id);
          }}
          onMouseUp={(e) => {
            stopNote(e.target.id);
          }}
        ></div>
        <div
          className="black"
          id="Db1"
          onMouseDown={(e) => {
            playNote(e.target.id);
          }}
          onMouseUp={(e) => {
            stopNote(e.target.id);
          }}
        ></div>
        <div
          className="white"
          id="D1"
          onMouseDown={(e) => {
            playNote(e.target.id);
          }}
          onMouseUp={(e) => {
            stopNote(e.target.id);
          }}
        ></div>
        <div
          className="black"
          id="Eb1"
          onMouseDown={(e) => {
            playNote(e.target.id);
          }}
          onMouseUp={(e) => {
            stopNote(e.target.id);
          }}
        ></div>
        <div
          className="white"
          id="E1"
          onMouseDown={(e) => {
            playNote(e.target.id);
          }}
          onMouseUp={(e) => {
            stopNote(e.target.id);
          }}
        ></div>
        <div
          className="white t"
          id="F1"
          onMouseDown={(e) => {
            playNote(e.target.id);
          }}
          onMouseUp={(e) => {
            stopNote(e.target.id);
          }}
        ></div>
        <div
          className="black"
          id="Gb1"
          onMouseDown={(e) => {
            playNote(e.target.id);
          }}
          onMouseUp={(e) => {
            stopNote(e.target.id);
          }}
        ></div>
        <div
          className="white"
          id="G1"
          onMouseDown={(e) => {
            playNote(e.target.id);
          }}
          onMouseUp={(e) => {
            stopNote(e.target.id);
          }}
        ></div>
        <div
          className="black"
          id="Ab1"
          onMouseDown={(e) => {
            playNote(e.target.id);
          }}
          onMouseUp={(e) => {
            stopNote(e.target.id);
          }}
        ></div>
        <div
          className="white"
          id="A1"
          onMouseDown={(e) => {
            playNote(e.target.id);
          }}
          onMouseUp={(e) => {
            stopNote(e.target.id);
          }}
        ></div>
        <div
          className="black"
          id="Bb1"
          onMouseDown={(e) => {
            playNote(e.target.id);
          }}
          onMouseUp={(e) => {
            stopNote(e.target.id);
          }}
        ></div>
        <div
          className="white"
          id="B1"
          onMouseDown={(e) => {
            playNote(e.target.id);
          }}
          onMouseUp={(e) => {
            stopNote(e.target.id);
          }}
        ></div>
        <div
          className="white t"
          id="C2"
          onMouseDown={(e) => {
            playNote(e.target.id);
          }}
          onMouseUp={(e) => {
            stopNote(e.target.id);
          }}
        ></div>
        <div
          className="black"
          id="Db2"
          onMouseDown={(e) => {
            playNote(e.target.id);
          }}
          onMouseUp={(e) => {
            stopNote(e.target.id);
          }}
        ></div>
        <div
          className="white"
          id="D2"
          onMouseDown={(e) => {
            playNote(e.target.id);
          }}
          onMouseUp={(e) => {
            stopNote(e.target.id);
          }}
        ></div>
        <div
          className="black"
          id="Eb2"
          onMouseDown={(e) => {
            playNote(e.target.id);
          }}
          onMouseUp={(e) => {
            stopNote(e.target.id);
          }}
        ></div>
        <div
          className="white"
          id="E2"
          onMouseDown={(e) => {
            playNote(e.target.id);
          }}
          onMouseUp={(e) => {
            stopNote(e.target.id);
          }}
        ></div>
        <div
          className="white t"
          id="F2"
          onMouseDown={(e) => {
            playNote(e.target.id);
          }}
          onMouseUp={(e) => {
            stopNote(e.target.id);
          }}
        ></div>
        <div
          className="black"
          id="Gb2"
          onMouseDown={(e) => {
            playNote(e.target.id);
          }}
          onMouseUp={(e) => {
            stopNote(e.target.id);
          }}
        ></div>
        <div
          className="white"
          id="G2"
          onMouseDown={(e) => {
            playNote(e.target.id);
          }}
          onMouseUp={(e) => {
            stopNote(e.target.id);
          }}
        ></div>
        <div
          className="black"
          id="Ab2"
          onMouseDown={(e) => {
            playNote(e.target.id);
          }}
          onMouseUp={(e) => {
            stopNote(e.target.id);
          }}
        ></div>
        <div
          className="white"
          id="A2"
          onMouseDown={(e) => {
            playNote(e.target.id);
          }}
          onMouseUp={(e) => {
            stopNote(e.target.id);
          }}
        ></div>
        <div
          className="black"
          id="Bb2"
          onMouseDown={(e) => {
            playNote(e.target.id);
          }}
          onMouseUp={(e) => {
            stopNote(e.target.id);
          }}
        ></div>
        <div
          className="white"
          id="B2"
          onMouseDown={(e) => {
            playNote(e.target.id);
          }}
          onMouseUp={(e) => {
            stopNote(e.target.id);
          }}
        ></div>
        <div
          className="white t"
          id="C3"
          onMouseDown={(e) => {
            playNote(e.target.id);
          }}
          onMouseUp={(e) => {
            stopNote(e.target.id);
          }}
        ></div>
        <div
          className="black"
          id="Db3"
          onMouseDown={(e) => {
            playNote(e.target.id);
          }}
          onMouseUp={(e) => {
            stopNote(e.target.id);
          }}
        ></div>
        <div
          className="white"
          id="D3"
          onMouseDown={(e) => {
            playNote(e.target.id);
          }}
          onMouseUp={(e) => {
            stopNote(e.target.id);
          }}
        ></div>
        <div
          className="black"
          id="Eb3"
          onMouseDown={(e) => {
            playNote(e.target.id);
          }}
          onMouseUp={(e) => {
            stopNote(e.target.id);
          }}
        ></div>
        <div
          className="white"
          id="E3"
          onMouseDown={(e) => {
            playNote(e.target.id);
          }}
          onMouseUp={(e) => {
            stopNote(e.target.id);
          }}
        ></div>
        <div
          className="white t"
          id="F3"
          onMouseDown={(e) => {
            playNote(e.target.id);
          }}
          onMouseUp={(e) => {
            stopNote(e.target.id);
          }}
        ></div>
        <div
          className="black"
          id="Gb3"
          onMouseDown={(e) => {
            playNote(e.target.id);
          }}
          onMouseUp={(e) => {
            stopNote(e.target.id);
          }}
        ></div>
        <div
          className="white"
          id="G3"
          onMouseDown={(e) => {
            playNote(e.target.id);
          }}
          onMouseUp={(e) => {
            stopNote(e.target.id);
          }}
        ></div>
        <div
          className="black"
          id="Ab3"
          onMouseDown={(e) => {
            playNote(e.target.id);
          }}
          onMouseUp={(e) => {
            stopNote(e.target.id);
          }}
        ></div>
        <div
          className="white"
          id="A3"
          onMouseDown={(e) => {
            playNote(e.target.id);
          }}
          onMouseUp={(e) => {
            stopNote(e.target.id);
          }}
        ></div>
        <div
          className="black"
          id="Bb3"
          onMouseDown={(e) => {
            playNote(e.target.id);
          }}
          onMouseUp={(e) => {
            stopNote(e.target.id);
          }}
        ></div>
        <div
          className="white"
          id="B3"
          onMouseDown={(e) => {
            playNote(e.target.id);
          }}
          onMouseUp={(e) => {
            stopNote(e.target.id);
          }}
        ></div>
        <div
          className="white t"
          id="C4"
          onMouseDown={(e) => {
            playNote(e.target.id);
          }}
          onMouseUp={(e) => {
            stopNote(e.target.id);
          }}
        ></div>
        <div
          className="black"
          id="Db4"
          onMouseDown={(e) => {
            playNote(e.target.id);
          }}
          onMouseUp={(e) => {
            stopNote(e.target.id);
          }}
        ></div>
        <div
          className="white"
          id="D4"
          onMouseDown={(e) => {
            playNote(e.target.id);
          }}
          onMouseUp={(e) => {
            stopNote(e.target.id);
          }}
        ></div>
        <div
          className="black"
          id="Eb4"
          onMouseDown={(e) => {
            playNote(e.target.id);
          }}
          onMouseUp={(e) => {
            stopNote(e.target.id);
          }}
        ></div>
        <div
          className="white"
          id="E4"
          onMouseDown={(e) => {
            playNote(e.target.id);
          }}
          onMouseUp={(e) => {
            stopNote(e.target.id);
          }}
        ></div>
        <div
          className="white t"
          id="F4"
          onMouseDown={(e) => {
            playNote(e.target.id);
          }}
          onMouseUp={(e) => {
            stopNote(e.target.id);
          }}
        ></div>
        <div
          className="black"
          id="Gb4"
          onMouseDown={(e) => {
            playNote(e.target.id);
          }}
          onMouseUp={(e) => {
            stopNote(e.target.id);
          }}
        ></div>
        <div
          className="white"
          id="G4"
          onMouseDown={(e) => {
            playNote(e.target.id);
          }}
          onMouseUp={(e) => {
            stopNote(e.target.id);
          }}
        ></div>
        <div
          className="black"
          id="Ab4"
          onMouseDown={(e) => {
            playNote(e.target.id);
          }}
          onMouseUp={(e) => {
            stopNote(e.target.id);
          }}
        ></div>
        <div
          className="white"
          id="A4"
          onMouseDown={(e) => {
            playNote(e.target.id);
          }}
          onMouseUp={(e) => {
            stopNote(e.target.id);
          }}
        ></div>
        <div
          className="black"
          id="Bb4"
          onMouseDown={(e) => {
            playNote(e.target.id);
          }}
          onMouseUp={(e) => {
            stopNote(e.target.id);
          }}
        ></div>
        <div
          className="white"
          id="B4"
          onMouseDown={(e) => {
            playNote(e.target.id);
          }}
          onMouseUp={(e) => {
            stopNote(e.target.id);
          }}
        ></div>
        <div
          className="white t"
          id="C5"
          onMouseDown={(e) => {
            playNote(e.target.id);
          }}
          onMouseUp={(e) => {
            stopNote(e.target.id);
          }}
        ></div>
        <div
          className="black"
          id="Db5"
          onMouseDown={(e) => {
            playNote(e.target.id);
          }}
          onMouseUp={(e) => {
            stopNote(e.target.id);
          }}
        ></div>
        <div
          className="white"
          id="D5"
          onMouseDown={(e) => {
            playNote(e.target.id);
          }}
          onMouseUp={(e) => {
            stopNote(e.target.id);
          }}
        ></div>
        <div
          className="black"
          id="Eb5"
          onMouseDown={(e) => {
            playNote(e.target.id);
          }}
          onMouseUp={(e) => {
            stopNote(e.target.id);
          }}
        ></div>
        <div
          className="white"
          id="E5"
          onMouseDown={(e) => {
            playNote(e.target.id);
          }}
          onMouseUp={(e) => {
            stopNote(e.target.id);
          }}
        ></div>
        <div
          className="white t"
          id="F5"
          onMouseDown={(e) => {
            playNote(e.target.id);
          }}
          onMouseUp={(e) => {
            stopNote(e.target.id);
          }}
        ></div>
        <div
          className="black"
          id="Gb5"
          onMouseDown={(e) => {
            playNote(e.target.id);
          }}
          onMouseUp={(e) => {
            stopNote(e.target.id);
          }}
        ></div>
        <div
          className="white"
          id="G5"
          onMouseDown={(e) => {
            playNote(e.target.id);
          }}
          onMouseUp={(e) => {
            stopNote(e.target.id);
          }}
        ></div>
        <div
          className="black"
          id="Ab5"
          onMouseDown={(e) => {
            playNote(e.target.id);
          }}
          onMouseUp={(e) => {
            stopNote(e.target.id);
          }}
        ></div>
        <div
          className="white"
          id="A5"
          onMouseDown={(e) => {
            playNote(e.target.id);
          }}
          onMouseUp={(e) => {
            stopNote(e.target.id);
          }}
        ></div>
        <div
          className="black"
          id="Bb5"
          onMouseDown={(e) => {
            playNote(e.target.id);
          }}
          onMouseUp={(e) => {
            stopNote(e.target.id);
          }}
        ></div>
        <div
          className="white"
          id="B5"
          onMouseDown={(e) => {
            playNote(e.target.id);
          }}
          onMouseUp={(e) => {
            stopNote(e.target.id);
          }}
        ></div>
        <div
          className="white t"
          id="C6"
          onMouseDown={(e) => {
            playNote(e.target.id);
          }}
          onMouseUp={(e) => {
            stopNote(e.target.id);
          }}
        ></div>
        <div
          className="black"
          id="Db6"
          onMouseDown={(e) => {
            playNote(e.target.id);
          }}
          onMouseUp={(e) => {
            stopNote(e.target.id);
          }}
        ></div>
        <div
          className="white"
          id="D6"
          onMouseDown={(e) => {
            playNote(e.target.id);
          }}
          onMouseUp={(e) => {
            stopNote(e.target.id);
          }}
        ></div>
        <div
          className="black"
          id="Eb6"
          onMouseDown={(e) => {
            playNote(e.target.id);
          }}
          onMouseUp={(e) => {
            stopNote(e.target.id);
          }}
        ></div>
        <div
          className="white"
          id="E6"
          onMouseDown={(e) => {
            playNote(e.target.id);
          }}
          onMouseUp={(e) => {
            stopNote(e.target.id);
          }}
        ></div>
        <div
          className="white t"
          id="F6"
          onMouseDown={(e) => {
            playNote(e.target.id);
          }}
          onMouseUp={(e) => {
            stopNote(e.target.id);
          }}
        ></div>
      </div>
    </>
  );
}

export default Keyboard;
