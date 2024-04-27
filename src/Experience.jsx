import {
  Environment,
  FlyControls,
  Loader,
  OrbitControls,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import World from "./world/World";
import { Physics } from "@react-three/rapier";
import Lights from "./lights/Lights";
import Environments from "./environments/Environments";
import { Perf } from "r3f-perf";
import WelcomeText from "./world/WelcomText";

const Experience = () => {
  return (
    <>
      <ambientLight />
      <FlyControls />
      <OrbitControls enableZoom={false} enablePan={false} />

      <Perf position={"top-left"} />
      <directionalLight position={[10, 1.5, -95]} />
      <OrbitControls makeDefault />
      <Lights />
      <WelcomeText position={[0, 1.5, -92]} />
      <Environments />
      <Physics debug={true}>
        <World />
      </Physics>
    </>
  );
};

export default Experience;

