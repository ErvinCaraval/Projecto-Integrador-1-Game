import { Environment, Sky, Sparkles, Cloud, Stars } from "@react-three/drei";

export default function Environments() {

    return <>

        <Environment
            files={"/assets/hdris/winter_river_4k.hdr"}
            preset={null}
            background={false}
            ground={
                {
                    height: 20,
                    scale: 300,
                    radius: 500
                }
            }
        />
{/* 
        <Sky
            sunPosition={[0, 0, -1]}
            inclination={0.2}
            azimuth={180}

        /> */}

        <Sparkles
            color={"white"}
            count={4550}
            size={25}
            scale={1001}
            speed={0.009}
            position-y={41}

        />

        {/* <Cloud
            opacity={0.5}
            speed={2.5}
            width={500}
            depth={15}
            segments={20}
            position-y={41}
        />
 */}
        {/* <Stars
            radius={1000}
            depth={5000}
            count={50000}
            factor={550}
            saturation={1}
        /> */}





    </>
}

