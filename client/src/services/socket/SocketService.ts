import * as io from "socket.io-client";
import { CONNECT_EVENT, MESSAGE_EVENT } from "./constants";

export default class SocketService {
    public user: string;
    public port: string;
    private onChange: (isConnected: boolean) => void;
    private onMessage: (message: { from: string, content: string, time: string }) => void;
    private socket: any;

    constructor(onChange: (isConnected: boolean) => void, onMessage: (message: { from: string, content: string, time: string }) => void) {
        this.onChange = onChange;
        this.onMessage = onMessage;
        this.socket = "";
        this.user = "";
        this.port = "";
    }

    /**
     * Connect
     */
    public connect = (user: string, port: string) => {
        this.user = user;
        this.port = port;

        // const host = `http://192.168.0.220:${port}`; // Running from local network
        // this.socket = io.connect(host);
        this.socket = io.connect(); // Running from Heroku

        this.socket.on(CONNECT_EVENT, this.onConnected);
    };

    public onConnected = () => {
        this.socket.on(MESSAGE_EVENT, this.onMessage);
        this.onChange(true);
    };

    public sendMessage = (message: { from: string, content: string, time: string }) => {
        if (typeof this.socket.emit === "function") {
          this.socket.emit(MESSAGE_EVENT, message);
        } else {
          console.error("Cannot emit socket messages. Socket.io not connected.");
        }
    };

    public disconnect = () => this.socket.close();
}