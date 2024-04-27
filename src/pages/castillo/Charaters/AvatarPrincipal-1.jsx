import React, { useEffect, useRef } from 'react'
import { useAnimations, useGLTF } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'
import { useAvatar } from '../Context/AvatarContext'

export const AvatarPrincipal = (props) => {
  const avatarBodyRef = useRef()
  const avatarRef = useRef()
  const {avatar,setAvatar} = useAvatar();
  const { nodes, materials, animations } = useGLTF('/assets/castillo/avatars/ardilla.glb')

  const {actions} = useAnimations(animations,avatarRef)

  useEffect(()=>{
    setAvatar({
      ref: avatarRef.current,
      body: avatarBodyRef.current
    })
  },[avatarBodyRef.current, avatarRef.current])
  
  useEffect(()=>{
    console.log(actions)
    actions["idle"].play();
  },[])

  useEffect(()=>{
    if(avatar.animation !== ""){
      actions[avatar.animation]?.reset().fadeIn(0.5).play();
      return()=>{
        if(actions[avatar.animation]){
            actions[avatar.animation].fadeOut(0.5);
        }
      }
    }
  },[avatar.animation,actions])

  return (
    <RigidBody  ref={avatarBodyRef} position={[0,1.5,-3]} colliders={"hull"}>
       <group  ref={avatarRef} name="Scene">
       <group name="Armature" rotation={[Math.PI/3, 0, 0]}>
          <skinnedMesh
            name="Body"
            geometry={nodes.Body.geometry}
            material={materials['CartoonSquirelMat.002']}
            skeleton={nodes.Body.skeleton}
          />
          <skinnedMesh
            name="eye_L"
            geometry={nodes.eye_L.geometry}
            material={materials['EyeSquirel.002']}
            skeleton={nodes.eye_L.skeleton}
          />
          <skinnedMesh
            name="eye_R"
            geometry={nodes.eye_R.geometry}
            material={materials['EyeSquirel.002']}
            skeleton={nodes.eye_R.skeleton}
          />
          <skinnedMesh
            name="lower_teeh"
            geometry={nodes.lower_teeh.geometry}
            material={materials['TeethMat.002']}
            skeleton={nodes.lower_teeh.skeleton}
          />
          <skinnedMesh
            name="middle_teeth"
            geometry={nodes.middle_teeth.geometry}
            material={materials['TeethMat.002']}
            skeleton={nodes.middle_teeth.skeleton}
          />
          <skinnedMesh
            name="tongue"
            geometry={nodes.tongue.geometry}
            material={materials['TongueMat.002']}
            skeleton={nodes.tongue.skeleton}
          />
          <skinnedMesh
            name="upper_teeth"
            geometry={nodes.upper_teeth.geometry}
            material={materials['TeethMat.002']}
            skeleton={nodes.upper_teeth.skeleton}
          />
          <primitive object={nodes.mixamorigHips} />
        </group>
      </group>
    </RigidBody>
  )
}
useGLTF.preload('/assets/castillo/avatars/ardilla.glb')