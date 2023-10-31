import './App.css'
import { Canvas } from '@react-three/fiber'
import MyElement3D from './Component/MyElement3D'

function App() {
  return (
    <>
      {/* 카메라 렌즈 화각 : 75
          카메라 위치 : 7, 7, 0 */}
      <Canvas camera = {{
        fov: 75,
        position: [7, 7, 0]
      }} >
        <MyElement3D/>
      </Canvas>   
    </>
  )
}

export default App
