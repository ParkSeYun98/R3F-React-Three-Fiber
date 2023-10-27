import { useFrame } from "@react-three/fiber"
import { useRef } from "react"

function MyElement3D() {
    const refMesh = useRef()

    // delta : 이전 프레임과 현재 프레임 사이의 경과 시간 (단위 : 밀리초)
    useFrame((state, delta) => {
        refMesh.current.rotation.y += delta
    })

    return (
        <>
            {/* 조명 */}
            <directionalLight position={[1, 1, 1]}/>

            {/* mesh : 렌더링할 3차원 모델 */}
            {/* x축으로 0도, y축으로 45도, z축으로 0도 회전 */}
            <mesh ref={refMesh} rotation-y={45*Math.PI/180}> 

                {/* boxGeometry : 정육면체 */}
                <boxGeometry/>

                {/* 색상을 정의하기 위한 Material */}
                <meshStandardMaterial color="#e67e22"/>
            </mesh>
        </>
    )
}

export default MyElement3D