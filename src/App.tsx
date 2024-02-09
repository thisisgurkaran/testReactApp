import React, { useEffect } from "react";
const socket = new WebSocket("ws://localhost:8080");

function App() {
  useEffect(() => {
    // Connection opened
    socket.addEventListener("open", function (event) {
      socket.send("Hello Server!");
    });

    // Listen for messages
    socket.addEventListener("message", function (event) {
      console.log("Message from server ", event.data);
    });

    // Clean up on component unmount
    // return () => socket.close();
  }, []);
  const sendEvent = (e: React.MouseEvent<HTMLButtonElement>) => {
    socket.send("Hello Server button click");
  };
  return (
    <div className="">
      <button onClick={sendEvent}>Send Event </button>
    </div>
  );
}

export default App;
