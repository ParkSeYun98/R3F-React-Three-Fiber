import './App.css'
import { Canvas } from '@react-three/fiber'
import MyElement3D from './Component/MyElement3D'

function App() {
  return (
    <>
      {/* camera로부터 거리가 3.5인 픽셀지점은 그 값을 0으로 할당, 
          camera로부터 거리가 6인 지점은 2를 할당 */}
      <Canvas camera = {{near: 3.5, far: 6}} >
        <MyElement3D/>
      </Canvas>   
    </>
  )
}

export default App
