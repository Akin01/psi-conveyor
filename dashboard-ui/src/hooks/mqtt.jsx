import { useState, useEffect } from "react";
import mqtt from "mqtt";

const host = "broker.emqx.io";
const port = 8083;
const clientId = `psi_responsi${Math.random().toString(16).slice(3)}`;

const mqttConnectionOption = {
  clientId,
  keepalive: 30,
  protocolId: "MQTT",
  protocolVersion: 4,
  clean: true,
  reconnectPeriod: 1000,
  connectTimeout: 30 * 1000,
  rejectUnauthorized: false,
};

const useMqttConnection = (topics) => {
  const [connectStatus, setConnectStatus] = useState("connecting");
  const [isSubcribe, setIsSubcribe] = useState(false);
  const [client, setClient] = useState(null);

  useEffect(() => {
    setClient(mqtt.connect(`ws://${host}:${port}/mqtt`, mqttConnectionOption));
  }, []);

  useEffect(() => {
    if (client) {
      client.on("connect", () => {
        setConnectStatus("connected");
      });
      client.on("reconnect", () => setConnectStatus("reconnecting"));
      client.on("error", (err) =>
        setConnectStatus(`connection failed: ${err}`)
      );
    }
  }, [client, connectStatus]);

  useEffect(() => {
    if (client) {
      client.subscribe(topics, (err) => {
        if (err) setIsSubcribe(false);
        setIsSubcribe(true);
      });
    }

    return () => {
      client?.unsubscribe(topics);
    };
  }, [client, topics]);

  return [client, connectStatus, isSubcribe];
};

export default useMqttConnection;
