import { Environment, OrbitControls } from "@react-three/drei";
import World from "./world/World";
import Lights from "./lights/Lights";
import Environments from "./environments/Environments";
import { Perf } from "r3f-perf";
import WelcomeText from "./welcome/WelcomeText";

// import { useFrame } from "@react-three/fiber";
// import { useRef } from "react";

const Experience = () => {
    // const boxRef = useRef(null);

    // useFrame(({clock}, delta) => {
    //     console.log(clock.getElapsedTime());

    //     boxRef.current.position.y = Math.cos(clock.getElapsedTime());
    //     boxRef.current.position.x += 0.1 * delta;
    // });

    return (
        <>
            <Perf position="top-left"/>
            <Lights/>
            <Environments/>
            <OrbitControls target0={[0,0,-2055]} enableZoom={true} enablePan={false}/>
            <World/>
            <WelcomeText position={[0,50,-183]}/>
            
        </>

    )
}

export default Experience;


    {/* <mesh>
                <boxGeometry args={[1,1,1]}/>
                <meshStandardMaterial color="white"/>
            </mesh> */}


         {/* <mesh
                ref={boxRef}
                position={[0, 0, 0]}
                rotation={[0, Math.PI / 3, 0]}
            >
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color="orange" />
            </mesh> */}