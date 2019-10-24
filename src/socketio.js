import io from "socket.io-client";
import { baseUrl } from "./actions/auth";

export default class SocketIO {
  socket = null;

  connect(dispatch, jwt) {
    console.log("Connecting websocket");
    this.socket = io.connect(baseUrl, {
      query: `auth_token=${jwt}`
    });
    this.socket.on("action", payload => {
      console.log("RECEIVED MESSAGE!", payload);
      dispatch(payload)
    });
  }

  disconnect() {
    console.log("Disconnecting websocket");
    this.socket.disconnect();
  }
}
