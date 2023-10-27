import { useFrame } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { useRef } from "react"
import * as THREE from "three"

function MyElement3D() {
    const refMesh = useRef()

    useFrame((state, delta) => {
        refMesh.current.rotation.z += delta
    })

    return (
        <>
            {/* 조명 */}
            <directionalLight position={[1, 1, 1]} />

            {/* World 좌표계 축 표시 */}
            <axesHelper scale={10} />

            {/* 마우스 클릭으로 회전 */}
            <OrbitControls />

            {/* mesh : 렌더링할 3차원 모델 */}
            {/* position 속성 : 좌표계에서 객체의 중심에 해당하는 위치 */}
            {/* rotation 속성 : 해당 방향으로 해당 각도만큼 회전 */}
            {/* degToRad(45) : 라디안 -> 우리가 사용하는 각도로 변환 */}
            {/* scale : 각 방향으로 크기 n배수 조정 */}
            {/* refMesh에 의해 부모가 회전하게 되면, 자식 mesh들도 모두 같이 회전한다. */}
            <mesh 
                ref={refMesh} 
                position-y={2} 
                rotation-z={THREE.MathUtils.degToRad(45)}
                scale={[2, 1, 1]}
            > 

                {/* boxGeometry : 정육면체 */}
                <boxGeometry/>

                {/* 색상을 정의하기 위한 Material */}
                <meshStandardMaterial 
                    color="#e67e22" 
                    opacity={0.5}
                    transparent={true}
                />

                {/* 해당 Mesh에 대한 Local 좌표계 축 표시 */}
                <axesHelper />

                {/* 자식 Mesh */}
                <mesh
                    scale={[0.1, 0.1, 0.1]}
                    position-y={2}
                >
                    {/* 구체 */}
                    <sphereGeometry />

                    <meshStandardMaterial color="red" />

                    <axesHelper scale={5} />
                </mesh>
            </mesh>
        </>
    )
}

export default MyElement3D