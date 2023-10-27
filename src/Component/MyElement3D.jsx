import { OrbitControls } from "@react-three/drei";

function MyElement3D() {
    return (
        <>
            <OrbitControls />

            <ambientLight intensity={0.2} />

            <directionalLight position={[0, 1, 0]} />
            <directionalLight position={[1, 2, 8]} intensity = {0.7} />

            <mesh position={[0.7, 0, 0]}>
                <boxGeometry />

                <meshBasicMaterial />
            </mesh>

            <mesh position={[-0.7, 0, 0]}>
                <torusGeometry args={[0.5, 0.5]} />
            </mesh>
        </>
    )
}

export default MyElement3D