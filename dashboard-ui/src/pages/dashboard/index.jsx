import LpgGasCard from "../../components/dashboard/lpgGas";
import MachineStatusCard from "../../components/dashboard/machineStatus";
import TemperatureCard from "../../components/dashboard/temperature";
import SampleNumberCard from "../../components/dashboard/sampleNumber";
import LpgMassCard from "../../components/dashboard/lpgMass";
import ProcessStatusCard from "../../components/dashboard/processStatus";
import useMqttConnection from "../../hooks/mqtt";
import { useEffect, useState } from "react";
import ConnectionStatus from "../../components/dashboard/connectionStatus";
import SubscribeStatus from "../../components/dashboard/subsribeStatus";

const baseTopic = "responsi/data/aktuator";
const dataToAcquisition = [
  ["temp", "temperature", "numeric"],
  ["lpg", "lpgAmmount", "numeric"],
  ["sample-num", "sampleNumber", "numeric"],
  ["mass", "mass", "numeric"],
  ["machine-status", "isMachineStop", "boolean"],
  ["gas-status", "isGasExist", "boolean"],
];

const transformData = (data, type) => {
  if (type === "numeric") {
    return Number(data);
  } else if (type === "boolean") {
    return Boolean(parseInt(data));
  }
};

const Dashboard = () => {
  const [client, connectionStatus, isSubscribe] = useMqttConnection(
    `${baseTopic}/#`
  );

  const [mqttPayload, setMqttPayload] = useState({
    temperature: 0,
    lpgAmmount: 0,
    sampleNumber: 0,
    mass: 0,
    isMachineStop: true,
    isGasExist: false,
  });

  useEffect(() => {
    if (client) {
      client.on("message", (topic, payload) => {
        for (const [topicName, dataMapper, dataType] of dataToAcquisition) {
          if (topic === `${baseTopic}/${topicName}`) {
            setMqttPayload({
              ...mqttPayload,
              [dataMapper]: transformData(payload.toString(), dataType),
            });
          }
        }
      });
    }
  }, [client, mqttPayload]);

  return (
    <div className="w-full h-full flex flex-col gap-10 justify-center">
      <div className="w-full px-16 flex gap-5 justify-start">
        <ConnectionStatus status={connectionStatus} />
        <SubscribeStatus isSubscribe={isSubscribe} />
      </div>
      <div className="w-full h-2/5 px-16 rounded-lg flex justify-between">
        <div className="w-4/6 h-full flex justify-center items-center gap-14 bg-white rounded-lg drop-shadow-lg">
          <TemperatureCard value={mqttPayload.temperature} />
          <LpgGasCard value={mqttPayload.lpgAmmount} />
        </div>
        <div className="w-1/4 h-full bg-white ml-6 rounded-lg flex justify-center items-center drop-shadow-lg">
          <MachineStatusCard isLeak={mqttPayload.isGasExist} />
        </div>
      </div>
      <div className="w-full h-2/5 px-16 rounded-lg flex gap-14 justify-between">
        <div className="w-3/6 h-full bg-white rounded-lg drop-shadow-lg flex justify-center items-center">
          <SampleNumberCard
            data={{
              mass: mqttPayload.mass,
              lpgAmount: mqttPayload.lpgAmmount,
              sampleNumber: mqttPayload.sampleNumber,
              isGasExist: mqttPayload.isGasExist,
            }}
          />
        </div>
        <div className="w-3/6 h-full bg-white rounded-lg drop-shadow-lg flex justify-center items-center">
          <LpgMassCard value={mqttPayload.mass} />
        </div>
        <div className="w-3/6 h-full bg-white rounded-lg drop-shadow-lg flex justify-center items-center">
          <ProcessStatusCard isStop={mqttPayload.isMachineStop} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
