import { useEffect, useRef } from 'react';
import { useGLTF, useAnimations } from "@react-three/drei";
import { CuboidCollider, CylinderCollider, RigidBody } from "@react-three/rapier";

export default function World(props) {
    const { nodes, materials, animations } = useGLTF("/assets/models/world/WorldSquidGames.glb");
    const { actions } = useAnimations(animations);
    const actionsRef = useRef();

    useEffect(() => {
        // Asignar las acciones a la referencia
        actionsRef.current = actions;

        // Reproducir todas las animaciones al cargar la escena
        if (actionsRef.current) {
            Object.values(actionsRef.current).forEach((action) => {
                action.play();
            });
        }
    }, [actions]);
    
    return (
        <group {...props} dispose={null}>
            <group>
                {/* Renderizar las partes del modelo y asignarles colisionadores */}
                <RigidBody type="fixed" colliders="trimesh">
                    <mesh onClick={(e) => e.stopPropagation()} geometry={nodes.Walls.geometry} material={materials.wallMaterial} />
                </RigidBody>
                <RigidBody type="fixed" colliders="trimesh">
                    <mesh onClick={(e) => e.stopPropagation()} receiveShadow={true} geometry={nodes.Floor.geometry} material={materials.floorMaterial} />
                </RigidBody>
                <RigidBody type="fixed" colliders={false}>
                    <mesh onClick={(e) => e.stopPropagation()} castShadow={true} geometry={nodes.WoodenFence.geometry} material={materials.woodMaterial}>
                        {/* Colisionadores para los cercos de madera */}
                        <CuboidCollider args={[0.2, 0.5, 47.5]} position={[-3.8, 0.5, -47]} />
                        <CuboidCollider args={[0.2, 0.5, 47.5]} position={[4.2, 0.5, -47]} />
                    </mesh>
                </RigidBody>
                <RigidBody colliders={false} type="fixed">
                    <mesh onClick={(e) => e.stopPropagation()} geometry={nodes.Tree.geometry} material={materials.treeMaterial} position={[0, 0, -96]} />
                    {/* Colisionador para el árbol */}
                    <CylinderCollider args={[1, 0.5]} position={[0, 1, -96]} />
                </RigidBody>
            </group>
        </group>
    );
}

// Carga previa del modelo
useGLTF.preload("/assets/models/world/WorldSquidGames.glb");

