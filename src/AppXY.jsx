import React, { useState } from 'react';
import './AppXY.css';
export default function AppXY() {
  // const [x, setX] = useState(0);
  // const [y, setY] = useState(0);

  // 객체로 묶어서 관리하는 것이 효율적임
  const [position, setPosition] = useState({ x: 0, y: 0, z: 0 });
  return (
    <div
      className='container'
      onPointerMove={(e) => {
        console.log(e.clientX, e.clientY);
        // setPosition({ x: e.clientX, y: e.clientY });
        // X 축으로만 이동이 가능하게 하려면?
        setPosition((prev) => ({ ...prev, x: e.clientX }));
      }}
    >
      <div className='pointer' style={{ transform: `translate(${position.x}px, ${position.y}px)` }}></div>
    </div>
  );
}
