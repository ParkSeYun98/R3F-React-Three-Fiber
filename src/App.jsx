import './App.css'
import { Canvas } from '@react-three/fiber'
import MyElement3D from './Component/MyElement3D'

function App() {
  return (
    <>
      {/* 기본 카메라 : Perspective Camera */}
      {/* 카메라 렌즈 화각 : 75도
          카메라 위치 : 7, 7, 0 
      
      
      */}
      <Canvas 
        orthographic
        camera = {{
          near: 0.1,
          far: 20,
          position: [7, 7, 0],
          zoom: 100
      }} >
        <MyElement3D/>
      </Canvas>   
    </>
  )
}

export default App
