import { Center, Html, Text, Text3D } from "@react-three/drei"

const WelcomeText = (props) => {

    const text = "Cueva de hielo";

    return (


        <Center position={props.position}>
            <Text3D
                font={"/assets/fonts/cuevaDeHieloFont.json"}
                // bevelEnabled
                // bevelSize={0.005}
                // bevelThickness={0.01}
                // height={0.1}
                // letterSpacing={0.05}
                size={5}
            >
                <meshNormalMaterial />
                {text}
            </Text3D>
        </Center>



        // <Text position={props.position}
        //     anchorX={"center"}
        //     anchorY={"middle"}
        //     fontSize={1}
        //     color="#302DE0"
        //     material-displacementScale={0.1}
        //     material-displacementBias={-0.02}
        //     material-depthWrite={false}
        //     material-depthTest={true}
        //     material-opacity={0.8}
        //     castShadow={true}
        //     font="/assets/fonts/cuevaDeHieloFont.ttf"
        // >
        //     Cueva de hielo
        // </Text>

        // <Html 
        //     position={props.position}
        //     center
        //     className="welcome-text"
        //     >
        //     <h2>Cueva de hielo</h2>
        // </Html>

    )
}

export default WelcomeText;