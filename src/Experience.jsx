import { Environment, EnvironmentMap, OrbitControls } from "@react-three/drei";
import World from "./world/World";
import { Color } from "three";
import Lights from "./lights/lights";
import Environments from "./environments/environments";

const Experience = () => {
    return (
        <>
            <Lights/>
            <Environments/>
            <OrbitControls makeDefault />
            <World/>

        </>
    )
}

export default Experience;