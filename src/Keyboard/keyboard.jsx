import "./keyboard.css";

function Keyboard() {
  /*
   * Plays a note as audio
   * note : string -> represents a note as string
   */
  function playNote(note) {
    let path = "/notes/" + note + ".mp3";
    var audio = new Audio("/notes/" + note + ".mp3");
    audio.play();
  }

  return (
    <>
      <div id="keyBoard">
        <div
          className="white t"
          onMouseDown={() => {
            playNote("C1");
          }}
        ></div>
        <div
          className="black"
          id=""
          onMouseDown={() => {
            playNote("Db1");
          }}
        ></div>
        <div
          className="white"
          id="A0"
          onMouseDown={() => {
            playNote("D1");
          }}
        ></div>
        <div
          className="black"
          id=""
          onMouseDown={() => {
            playNote("Eb1");
          }}
        ></div>
        <div
          className="white"
          id="H0"
          onMouseDown={() => {
            playNote("E1");
          }}
        ></div>
        <div
          className="white t"
          onMouseDown={() => {
            playNote("F1");
          }}
        ></div>
        <div
          className="black"
          onMouseDown={() => {
            playNote("Gb1");
          }}
        ></div>
        <div
          className="white"
          onMouseDown={() => {
            playNote("G1");
          }}
        ></div>
        <div
          className="black"
          id=""
          onMouseDown={() => {
            playNote("Ab1");
          }}
        ></div>
        <div
          className="white"
          onMouseDown={() => {
            playNote("A1");
          }}
        ></div>
        <div
          className="black"
          onMouseDown={() => {
            playNote("Bb1");
          }}
        ></div>
        <div
          className="white"
          onMouseDown={() => {
            playNote("B1");
          }}
        ></div>
        <div
          className="white t"
          onMouseDown={() => {
            playNote("C2");
          }}
        ></div>
        <div
          className="black"
          id=""
          onMouseDown={() => {
            playNote("Db2");
          }}
        ></div>
        <div
          className="white"
          id="A0"
          onMouseDown={() => {
            playNote("D2");
          }}
        ></div>
        <div
          className="black"
          id=""
          onMouseDown={() => {
            playNote("Eb2");
          }}
        ></div>
        <div
          className="white"
          id="H0"
          onMouseDown={() => {
            playNote("E2");
          }}
        ></div>
        <div
          className="white t"
          id="C1"
          onMouseDown={() => {
            playNote("F2");
          }}
        ></div>
        <div
          className="black"
          id=""
          onMouseDown={() => {
            playNote("Gb2");
          }}
        ></div>
        <div
          className="white"
          id="D1"
          onMouseDown={() => {
            playNote("G2");
          }}
        ></div>
        <div
          className="black"
          id=""
          onMouseDown={() => {
            playNote("Ab2");
          }}
        ></div>
        <div
          className="white"
          id="E1"
          onMouseDown={() => {
            playNote("A2");
          }}
        ></div>
        <div
          className="black"
          id=""
          onMouseDown={() => {
            playNote("Bb2");
          }}
        ></div>
        <div
          className="white"
          id="F1"
          onMouseDown={() => {
            playNote("B2");
          }}
        ></div>
        <div
          className="white t"
          id="G1"
          onMouseDown={() => {
            playNote("C3");
          }}
        ></div>
        <div
          className="black"
          id=""
          onMouseDown={() => {
            playNote("Db3");
          }}
        ></div>
        <div
          className="white"
          id="A1"
          onMouseDown={() => {
            playNote("D3");
          }}
        ></div>
        <div
          className="black"
          id=""
          onMouseDown={() => {
            playNote("Eb3");
          }}
        ></div>
        <div
          className="white"
          id="H1"
          onMouseDown={() => {
            playNote("E3");
          }}
        ></div>
        <div
          className="white t"
          id="C2"
          onMouseDown={() => {
            playNote("F3");
          }}
        ></div>
        <div
          className="black"
          id=""
          onMouseDown={() => {
            playNote("Gb3");
          }}
        ></div>
        <div
          className="white"
          id="D2"
          onMouseDown={() => {
            playNote("G3");
          }}
        ></div>
        <div
          className="black"
          id=""
          onMouseDown={() => {
            playNote("Ab3");
          }}
        ></div>
        <div
          className="white"
          id="E2"
          onMouseDown={() => {
            playNote("A3");
          }}
        ></div>
        <div
          className="black"
          id=""
          onMouseDown={() => {
            playNote("Bb3");
          }}
        ></div>
        <div
          className="white"
          id="F2"
          onMouseDown={() => {
            playNote("B3");
          }}
        ></div>
        <div
          className="white t"
          id="G2"
          onMouseDown={() => {
            playNote("C4");
          }}
        ></div>
        <div
          className="black"
          id=""
          onMouseDown={() => {
            playNote("Db4");
          }}
        ></div>
        <div
          className="white"
          id="A2"
          onMouseDown={() => {
            playNote("D4");
          }}
        ></div>
        <div
          className="black"
          id=""
          onMouseDown={() => {
            playNote("Eb4");
          }}
        ></div>
        <div
          className="white"
          id="H2"
          onMouseDown={() => {
            playNote("E4");
          }}
        ></div>
        <div
          className="white t"
          id="C3"
          onMouseDown={() => {
            playNote("F4");
          }}
        ></div>
        <div
          className="black"
          id=""
          onMouseDown={() => {
            playNote("Gb4");
          }}
        ></div>
        <div
          className="white"
          id="D3"
          onMouseDown={() => {
            playNote("G4");
          }}
        ></div>
        <div
          className="black"
          id=""
          onMouseDown={() => {
            playNote("Ab4");
          }}
        ></div>
        <div
          className="white"
          id="E3"
          onMouseDown={() => {
            playNote("A4");
          }}
        ></div>
        <div
          className="black"
          id=""
          onMouseDown={() => {
            playNote("Bb4");
          }}
        ></div>
        <div
          className="white"
          id="F3"
          onMouseDown={() => {
            playNote("B4");
          }}
        ></div>
        <div
          className="white t"
          id="G3"
          onMouseDown={() => {
            playNote("C5");
          }}
        ></div>
        <div
          className="black"
          id=""
          onMouseDown={() => {
            playNote("Db5");
          }}
        ></div>
        <div
          className="white"
          id="A3"
          onMouseDown={() => {
            playNote("D5");
          }}
        ></div>
        <div
          className="black"
          id=""
          onMouseDown={() => {
            playNote("Eb5");
          }}
        ></div>
        <div
          className="white"
          id="H3"
          onMouseDown={() => {
            playNote("E5");
          }}
        ></div>
        <div
          className="white t"
          id="C4"
          onMouseDown={() => {
            playNote("F5");
          }}
        ></div>
        <div
          className="black"
          id=""
          onMouseDown={() => {
            playNote("Gb5");
          }}
        ></div>
        <div
          className="white"
          id="D4"
          onMouseDown={() => {
            playNote("G5");
          }}
        ></div>
        <div
          className="black"
          id=""
          onMouseDown={() => {
            playNote("Ab5");
          }}
        ></div>
        <div
          className="white"
          id="E4"
          onMouseDown={() => {
            playNote("A5");
          }}
        ></div>
        <div
          className="black"
          id=""
          onMouseDown={() => {
            playNote("Bb5");
          }}
        ></div>
        <div
          className="white"
          id="F4"
          onMouseDown={() => {
            playNote("B5");
          }}
        ></div>
        <div
          className="white t"
          id="G4"
          onMouseDown={() => {
            playNote("C6");
          }}
        ></div>
        <div
          className="black"
          id=""
          onMouseDown={() => {
            playNote("Db6");
          }}
        ></div>
        <div
          className="white"
          id="A4"
          onMouseDown={() => {
            playNote("D6");
          }}
        ></div>
        <div
          className="black"
          id=""
          onMouseDown={() => {
            playNote("Eb6");
          }}
        ></div>
        <div
          className="white"
          id="H4"
          onMouseDown={() => {
            playNote("E6");
          }}
        ></div>
        <div
          className="white t"
          onMouseDown={() => {
            playNote("F6");
          }}
        ></div>
      </div>
    </>
  );
}

export default Keyboard;
