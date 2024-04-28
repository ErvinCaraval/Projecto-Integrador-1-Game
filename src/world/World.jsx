import { useGLTF, useTexture } from "@react-three/drei"
import { RepeatWrapping } from "three";

export default function World(props) {
    const { nodes, materials } = useGLTF("/assets/models/world/WorldSquidGames.glb")
    const PATH = "/assets/textures/floor/";

    const propsTexture = useTexture({
        map: PATH + "coast_sand_01_diff_1k.jpg",
        normalMap: PATH + "coast_sand_01_nor_gl_1k.jpg",
        roughnessMap: PATH + "coast_sand_01_rough_1k.jpg",
        displacementMap: PATH + "coast_sand_01_rough_1k.jpg",
    });

    propsTexture.map.repeat.set(4, 64);
    propsTexture.map.wrapS = propsTexture.map.wrapT = RepeatWrapping;

    propsTexture.normalMap.repeat.set(4, 64);
    propsTexture.normalMap.wrapS = propsTexture.normalMap.wrapT = RepeatWrapping;

    propsTexture.roughnessMap.repeat.set(4, 64);
    propsTexture.roughnessMap.wrapS = propsTexture.roughnessMap.wrapT = RepeatWrapping;

    propsTexture.displacementMap.repeat.set(4, 64);
    propsTexture.displacementMap.wrapS = propsTexture.displacementMap.wrapT = RepeatWrapping;

    return (
        <group {...props} dispose={null}>
            <group>

                <mesh receiveShadow={true} geometry={nodes.Floor.geometry} >
                    <meshStandardMaterial {...propsTexture} opacity={0.001} transparent={true} />
                </mesh>


                <mesh geometry={nodes.roca.geometry} material={materials.CaveRock_L_Base} />


                {/* <mesh geometry={nodes.Walls.geometry} material={nodes.Walls.material} /> */}


                <group>
                    <mesh castShadow={true} geometry={nodes.Tree_1.geometry} material={materials.Bark}>
                        <meshStandardMaterial
                            color="#A9D9CF"
                            roughness={0.7}
                            metalness={0.1}
                        />
                    </mesh>
                    <mesh castShadow={true} geometry={nodes.Tree_2.geometry}>
                        <meshStandardMaterial
                            color="#A9D9CF"
                            roughness={0.7}
                            metalness={0.1}
                            {...propsTexture}
                        />
                    </mesh>
                </group>



                <group>
                    <group>
                        <mesh geometry={nodes.Object_3.geometry} material={materials.patas_pinguino} />
                        <mesh geometry={nodes.Object_3_1.geometry} material={materials.cuerpo_pinguino} />
                        <mesh geometry={nodes.Object_3_2.geometry} material={materials.cabeza_pinguino} />
                    </group>
                </group>




                <mesh geometry={nodes.tronco002.geometry} material={materials.stalkMaterial} />


                <group>
                    <mesh
                        geometry={nodes.Object_4002.geometry}
                        material={materials.Material}
                        position={[-18.363, 9.538, -2.021]}
                        rotation={[0, 0, -1.593]}
                        scale={[12.082, 12.082, 19.149]}
                    />
                </group>



                <group>
                    <mesh
                        geometry={nodes.Object_2001.geometry}
                        material={materials['Material.002']}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={7.892}
                    />
                </group>




            </group>
        </group>
    );
}

useGLTF.preload("/assets/models/world/WorldSquidGames.glb");

