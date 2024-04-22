import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useHelper } from '@react-three/drei';
import { AmbientLight, DirectionalLightHelper, GridHelper,CameraHelper } from 'three';
import { BrowserRouter as Router, Route, Link, Routes, NavLink } from "react-router-dom";
import { Home, Episodes, Locations, Characters, NavBar } from './components/pages';
import './App.css';


const Light = () => {
  return (
    <directionalLight />
  );
};

const Stars = () => {
  const [scroll,setScroll] = useState(false);

  const Star = () => {
    const position = [Math.random()* 100 - 50, Math.random()* 100 - 50, Math.random()* 100 - 50];

    const starRef = useRef();

    const positionSpeedX = Math.random() * 0.01;
    const positionSpeedY = Math.random() * 0.01;
    const positionSpeedZ = Math.random() * 0.01;

    const rotationSpeedX = Math.random() * 0.01;
    const rotationSpeedY = Math.random() * 0.01;
    const rotationSpeedZ = Math.random() * 0.01;

    useFrame(() => {
      starRef.current.position.x += positionSpeedX;
      starRef.current.position.y += positionSpeedY;
      starRef.current.position.z += positionSpeedZ;

      starRef.current.rotation.x += rotationSpeedX;
      starRef.current.rotation.y += rotationSpeedY;
      starRef.current.rotation.z += rotationSpeedZ;
    });

    return (
      <mesh ref={starRef} position={position} onWheel={(e)=>{e.stopPropagation(), setScroll(true)}}>
        <icosahedronGeometry args={[0.5,0,0,0]} />
        <meshStandardMaterial color={"yellow"} />
      </mesh>
    );
  };

  const starsArray = new Array(1000).fill(null);

  return (
    <group>
      {starsArray.map((object, index) => (
        <Star key={index} />
      ))}
    </group>
  );
};

const App = () => {
  return (
    <div>
      <Canvas style={{ height: '100vh', width: '100vw', position: 'fixed',zIndex: -1 }}>
        <Light />
        <Stars />
        <OrbitControls enableZoom={false} />
        {/* <gridHelper args={[100]} /> */}
      </Canvas>
      <NavBar />
    </div>
  );
};

export default App;
