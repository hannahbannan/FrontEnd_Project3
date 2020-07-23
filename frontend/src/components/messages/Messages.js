import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import apiUrl from "../apiConfig";

function Message(props) {
  const [state, setState] = useState({ message: "", name: "" });
  const [chat, setChat] = useState([]);
  const [postSender, setPostSender] = useState("");
  const [postRecipient, setPostRecipient] = useState("");
  let readSender = "";
  let readRecipient = "";

  useEffect(() => {
    console.log("use effect was called");
    console.log(props);

    readSender = "placeholder";
    readRecipient = props.match.params.id;
    setPostSender("placeholder");
    setPostRecipient(props.match.params.id);

    const interval = setInterval(() => getNewMessages(), 1000);

    return function cleanup() {
      console.log("use effect cleanup was called");
      clearInterval(interval);
    };
  }, []);

  const getNewMessages = async (e) => {
    try {
      console.log("before api call");
      console.log("readSender: " + readSender);
      console.log("readRecipient: " + readRecipient);
      const response = await axios(
        `${apiUrl}/messages?sender=${readSender}&recipient=${readRecipient}`
      );
      console.log("after api call");
      console.log(response);

      setChat(response.data.messages.reverse());
    } catch (err) {
      console.error(err);
    }
  };

  const onTextChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const onMessageSubmit = (e) => {
    e.preventDefault();
    const { name, message } = state;
    // socket.emit("message", { name, message });

    console.log("postSender: " + postSender);
    console.log("postRecipient: " + postRecipient);

    const postMessageAPI = async (message) => {
      console.log("postSenderPOST: " + postSender);
      console.log("postRecipientPOST: " + postRecipient);

      try {
        console.log("before api call");
        const jsonBody = {
          message: message,
          sender: postSender,
          recipient: postRecipient,
        };
        const response = await axios.post(`${apiUrl}/messages`, jsonBody);
        console.log("after api call");
        console.log(response);
      } catch (err) {
        console.error(err);
      }
    };
    postMessageAPI(message);

    setState({ message: "", name });
  };

  const renderChat = () => {
    return chat.map(({ sender, message }, index) => (
      <div key={index}>
        <h3>
          {sender}: <span>{message}</span>
        </h3>
      </div>
    ));
  };

  return (
    <div className="card">
      <form onSubmit={onMessageSubmit}>
        <h1>Messenger</h1>
        <div className="name-field">
          <TextField
            name="name"
            onChange={(e) => onTextChange(e)}
            value={state.name}
            label="Name"
          />
        </div>
        <div>
          <TextField
            name="message"
            onChange={(e) => onTextChange(e)}
            value={state.message}
            id="outlined-multiline-static"
            variant="outlined"
            label="Message"
          />
        </div>
        <button>Send Message</button>
      </form>
      <div className="render-chat">
        <h1>Chat Log</h1>
        {renderChat()}
      </div>
    </div>
  );
}

export default Message;
