import "./welcome.css";

function welcome() {
  return (
    <div id="home">
      <div className="title">
        <span id="Live">Live</span>
        <span id="Piano">Piano</span>
        <div>Invite your friends to a session!</div>
      </div>
      <form>
        <input type="Text" placeholder="Name" className="input-text"></input>
        <button className="btn btn-primary">Create Lobby</button>
        <button className="btn btn-outlined-primary">Join Lobby</button>
      </form>
    </div>
  );
}

export default welcome;
