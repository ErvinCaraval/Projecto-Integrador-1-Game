import { Color } from 'three';
import { useMemo } from 'react';
import {useControls} from "leva";
import {controls} from "react";

const Lights = () => {

    // const optionSpotLight = useMemo(() => {
    //     return {

    //         intensitySL: { value: 1, min: 0, max: 100, step: 1 },
    //         colorSL:{value: "#FFF700"}
    //     }

    // }, [])

    // const {intensitySL, colorSL}= useControls("Sport Light", optionSpotLight)
    // console.log(controls);

    return <>

        <ambientLight
            // color={new Color("8F00FF")} intensity={4}
            intensity={0.1}
        />
        <directionalLight
            castShadow={true}
            position={[2, 10, 0]}
            color={new Color("#8F00F")}
            intensity={2}
        />

        {/* <pointLight
            position={[0,2,0]}
            color={new Color("#8F00FF")}
            intensity={10}
            /> */}

        <spotLight

            position={[0, 2, 0]}
            angle={Math.PI / 3}
            // color={colorSL}
            // intensity={intensitySL}
        />

        <hemisphereLight
            position={[2, 10, -2]}
            skyColor={new Color(0xFFFFFF)}
            groundColor={new Color(0x8F00F)}
            intensity={0.00017}
        />

    </>

}

export default Lights;