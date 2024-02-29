import React from "react";
import { a } from "@react-spring/three";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";

import mountainScene from "../assets/3d/mountain.glb";

const Mountain = ({ isRotating, setIsRotating, setCurrentStage, ...props }) => {
  const mountainRef = useRef();
  // Get access to the Three.js renderer and viewport
  const { gl, viewport } = useThree();
  const { nodes, materials } = useGLTF(mountainScene);

  // Use a ref for the last mouse x position
  const lastX = useRef(0);
  // Use a ref for rotation speed
  const rotationSpeed = useRef(0);
  // Define a damping factor to control rotation damping
  const dampingFactor = 0.1;

  // Handle pointer (mouse or touch) down event
  const handlePointerDown = (event) => {
    event.stopPropagation();
    event.preventDefault();
    setIsRotating(true);

    // Calculate the clientX based on whether it's a touch event or a mouse event
    const clientX = event.touches ? event.touches[0].clientX : event.clientX;

    // Store the current clientX position for reference
    lastX.current = clientX;
  };

  // Handle pointer (mouse or touch) up event
  const handlePointerUp = (event) => {
    event.stopPropagation();
    event.preventDefault();
    setIsRotating(false);
  };

  // Handle pointer (mouse or touch) move event
  const handlePointerMove = (event) => {
    event.stopPropagation();
    event.preventDefault();
    if (isRotating) {
      // If rotation is enabled, calculate the change in clientX position
      const clientX = event.touches ? event.touches[0].clientX : event.clientX;

      // calculate the change in the horizontal position of the mouse cursor or touch input,
      // relative to the viewport's width
      const delta = (clientX - lastX.current) / viewport.width;

      // Update the mountain's rotation based on the mouse/touch movement
      mountainRef.current.rotation.z += delta * 0.01 * Math.PI;
      //mountainRef.current.rotation.x += delta * 0.01 * Math.PI;

      // Update the reference for the last clientX position
      lastX.current = clientX;

      // Update the rotation speed
      rotationSpeed.current = delta * 0.01 * Math.PI;
    }
  };

  // Handle keydown events
  const handleKeyDown = (event) => {
    if (event.key === "ArrowLeft") {
      if (!isRotating) setIsRotating(true);

      mountainRef.current.rotation.z -= 0.005 * Math.PI;
      rotationSpeed.current = 0.007;
    } else if (event.key === "ArrowRight") {
      if (!isRotating) setIsRotating(true);

      mountainRef.current.rotation.z += 0.005 * Math.PI;
      rotationSpeed.current = -0.007;
    } else if (event.key === "ArrowUp") {
      if (!isRotating) setIsRotating(true);

      mountainRef.current.rotation.x -= 0.005 * Math.PI;
      rotationSpeed.current = -0.007;
    } else if (event.key === "ArrowDown") {
      if (!isRotating) setIsRotating(true);

      mountainRef.current.rotation.x += 0.005 * Math.PI;
      rotationSpeed.current = -0.007;
    }
  };

  // Handle keyup events
  const handleKeyUp = (event) => {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      setIsRotating(false);
    }
  };

  useEffect(() => {
    // Add event listeners for pointer and keyboard events
    const canvas = gl.domElement;
    canvas.addEventListener("pointerdown", handlePointerDown);
    canvas.addEventListener("pointerup", handlePointerUp);
    canvas.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    // Remove event listeners when component unmounts
    return () => {
      canvas.removeEventListener("pointerdown", handlePointerDown);
      canvas.removeEventListener("pointerup", handlePointerUp);
      canvas.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [gl, handlePointerDown, handlePointerUp, handlePointerMove]);

  // This function is called on each frame update
  useFrame(() => {
    // If not rotating, apply damping to slow down the rotation (smoothly)
    if (!isRotating) {
      // Apply damping factor
      rotationSpeed.current *= dampingFactor;

      // Stop rotation when speed is very small
      if (Math.abs(rotationSpeed.current) < 0.001) {
        rotationSpeed.current = 0;
      }

      mountainRef.current.rotation.y += rotationSpeed.current;
    } else {
      // When rotating, determine the current stage based on mountain's orientation
      const rotation = mountainRef.current.rotation.y;

      /**
       * Normalize the rotation value to ensure it stays within the range [0, 2 * Math.PI].
       * The goal is to ensure that the rotation value remains within a specific range to
       * prevent potential issues with very large or negative rotation values.
       *  Here's a step-by-step explanation of what this code does:
       *  1. rotation % (2 * Math.PI) calculates the remainder of the rotation value when divided
       *     by 2 * Math.PI. This essentially wraps the rotation value around once it reaches a
       *     full circle (360 degrees) so that it stays within the range of 0 to 2 * Math.PI.
       *  2. (rotation % (2 * Math.PI)) + 2 * Math.PI adds 2 * Math.PI to the result from step 1.
       *     This is done to ensure that the value remains positive and within the range of
       *     0 to 2 * Math.PI even if it was negative after the modulo operation in step 1.
       *  3. Finally, ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI) applies another
       *     modulo operation to the value obtained in step 2. This step guarantees that the value
       *     always stays within the range of 0 to 2 * Math.PI, which is equivalent to a full
       *     circle in radians.
       */
      const normalizedRotation =
        ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

      console.log(normalizedRotation);

      // Set the current stage based on the mountain's orientation
      switch (true) {
        case normalizedRotation >= 5.45 && normalizedRotation <= 5.85:
          setCurrentStage(4);
          break;
        case normalizedRotation >= 0.85 && normalizedRotation <= 1.3:
          setCurrentStage(3);
          break;
        case normalizedRotation >= 2.4 && normalizedRotation <= 2.6:
          setCurrentStage(2);
          break;
        case normalizedRotation >= 4.25 && normalizedRotation <= 4.75:
          setCurrentStage(1);
          break;
        default:
          setCurrentStage(1);
      }
    }
  });

  return (
    // {mountain 3D model from: https://sketchfab.com/3d-models/foxs-mountains-163b68e09fcc47618450150be7785907}
    <a.group ref={mountainRef} {...props}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Skybox_Material001_0.geometry}
        material={materials["Material.001"]}
      />
      {/* <mesh
        castShadow
        receiveShadow
        geometry={nodes.Skybox_whiteWalls_Model_3_u1_v1_0.geometry}
        material={materials.whiteWalls_Model_3_u1_v1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Skybox_whiteWalls_Model_3_u1_v1_0_1.geometry}
        material={materials.whiteWalls_Model_3_u1_v1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Skybox_whiteWalls_Model_3_u1_v1_0_2.geometry}
        material={materials.whiteWalls_Model_3_u1_v1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Skybox_whiteWalls_Model_3_u1_v1_0_3.geometry}
        material={materials.whiteWalls_Model_3_u1_v1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Skybox_whiteWalls_Model_3_u1_v1_0_4.geometry}
        material={materials.whiteWalls_Model_3_u1_v1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Skybox_whiteWalls_Model_3_u1_v1_0_5.geometry}
        material={materials.whiteWalls_Model_3_u1_v1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Skybox_whiteWalls_Model_3_u1_v1_0_6.geometry}
        material={materials.whiteWalls_Model_3_u1_v1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Skybox_whiteWalls_Model_3_u1_v1_0_7.geometry}
        material={materials.whiteWalls_Model_3_u1_v1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Skybox_whiteWalls_Model_3_u1_v1_0_8.geometry}
        material={materials.whiteWalls_Model_3_u1_v1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Skybox_whiteWalls_Model_3_u1_v1_0_9.geometry}
        material={materials.whiteWalls_Model_3_u1_v1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Skybox_whiteWalls_Model_3_u1_v1_0_10.geometry}
        material={materials.whiteWalls_Model_3_u1_v1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Skybox_whiteWalls_Model_3_u1_v1_0_11.geometry}
        material={materials.whiteWalls_Model_3_u1_v1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Skybox_whiteWalls_Model_3_u1_v1_0_12.geometry}
        material={materials.whiteWalls_Model_3_u1_v1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Skybox_whiteWalls_Model_3_u1_v1_0_13.geometry}
        material={materials.whiteWalls_Model_3_u1_v1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Skybox_whiteWalls_Model_3_u1_v1_0_14.geometry}
        material={materials.whiteWalls_Model_3_u1_v1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Skybox_whiteWalls_Model_3_u1_v1_0_15.geometry}
        material={materials.whiteWalls_Model_3_u1_v1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Skybox_whiteWalls_Model_3_u1_v1_0_16.geometry}
        material={materials.whiteWalls_Model_3_u1_v1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Skybox_whiteWalls_Model_3_u1_v1_0_17.geometry}
        material={materials.whiteWalls_Model_3_u1_v1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Skybox_whiteWalls_Model_3_u1_v1_0_18.geometry}
        material={materials.whiteWalls_Model_3_u1_v1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Skybox_whiteWalls_Model_3_u1_v1_0_19.geometry}
        material={materials.whiteWalls_Model_3_u1_v1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Skybox_whiteWalls_Model_3_u1_v1_0_20.geometry}
        material={materials.whiteWalls_Model_3_u1_v1}
      /> */}
    </a.group>
  );
};

export default Mountain;
