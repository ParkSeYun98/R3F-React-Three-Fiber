import { Environment, OrbitControls, useHelper } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three"
import {RectAreaLightUniformsLib} from "three/examples/jsm/lights/RectAreaLightUniformsLib"
import {RectAreaLightHelper} from "three/examples/jsm/helpers/RectAreaLightHelper"

const torusGeometry = new THREE.TorusGeometry(0.4, 0.1, 32, 32)
const torusMaterial = new THREE.MeshStandardMaterial({
    color: "#9b59b6",
    roughness: 0.5,
    metalness: 0.9
})

// 초기화
// RectAreaLightUniformsLib.init()

function MyElement3D() {
    useFrame((state) => {
        const time = state.clock.elapsedTime
        const smallSpherePivot = state.scene.getObjectByName("smallSpherePivot")

        smallSpherePivot.rotation.y = THREE.MathUtils.degToRad(time * 50)
        
        // smallSpherePivot.children[0].getWorldPosition(light.current.target.position)
        // smallSpherePivot.children[0].getWorldPosition(light.current.position)
        // smallSpherePivot.children[0].getWorldPosition(light.current.target.position)
    })

    // const light = useRef()
    // useHelper(light, RectAreaLightHelper)

    // useHelper(light, THREE.DirectionalLightHelper)
    // useHelper(light, THREE.PointLightHelper, 0.5)
    // useHelper(light, THREE.SpotLightHelper)

    // const {scene} = useThree()

    // 광원의 타겟을 장면에 추가
    // useEffect(() => {
    //     scene.add(light.current.target)

    //     return () => {
    //         scene.remove(light.current.target)
    //     }
    // }, [light])

    // const { scene } = useThree()

    // useEffect(() => {
    //     scene.add(light.current.target)

    //     return () => {
    //         scene.remove(light.current.target)
    //     }
    // }, [light])

    return (
        <>
            <OrbitControls />

            <Environment 
                blur={0.05}
                background
                files={"././public/images/blue_photo_studio_4k.hdr"}
            />

            {/* intensity : 조명의 강도 */}
            {/* <ambientLight color="#ff0000" intensity={10} /> */}

            {/* 첫번째는 하늘에서 비추는 빛의 색상
                두번째는 땅에서 비추는 빛의 색상
                세번째는 빛의 세기 */}
            {/* <hemisphereLight args={["00f", "#f00", 2]} /> */}

            {/* position : 광원의 위치
                target-position : 광원이 향하는 방향의 목표 위치 */}
            {/* <directionalLight 
                ref={light}
                color={"#0xffffff"}
                intensity={1}
                position={[5, 5, 0]}
                target-position={[1, 0, 0]}
            /> */}

            {/* distance : 점 광원 효과 범위 */}
            {/* <pointLight 
                ref={light}
                color={"#ffffff"}
                intensity={2}
                position={[0, 5, 0]}
                distance={0}
            /> */}

            {/* penumbra : 빛의 감쇠율 */}
            {/* <spotLight 
                ref={light}
                color={"0xffffff"}
                intensity={1}
                position={[0, 5, 0]}
                target-position={[0, 0, 0]}
                distance={0}
                angle={THREE.MathUtils.degToRad(30)}
                penumbra={0.1}
            /> */}

            {/* <rectAreaLight 
                ref={light}
                color="#ffffff"
                intensity={30}
                width={2}
                height={5}
                position={[0, 5, 0]}
                rotation-x={THREE.MathUtils.degToRad(-90)}
            /> */}

            <mesh rotation-x={THREE.MathUtils.degToRad(-90)}>
                <planeGeometry args={[10, 10]} />
                
                <meshStandardMaterial 
                    color={"#2c3e50"}
                    roughness={0.5}
                    metalness={0.5}
                    side={THREE.DoubleSide}
                />
            </mesh>

            <mesh rotation-x={THREE.MathUtils.degToRad(-90)}>
                <sphereGeometry args={[1.5, 64, 64, 0, Math.PI]} />
                
                <meshStandardMaterial 
                    color={"#ffffff"}
                    roughness={0.1}
                    metalness={0.2}
                />
            </mesh>

            {new Array(8).fill().map((item, index) => {
                return (
                    <group key={index} rotation-y={THREE.MathUtils.degToRad(45 * index)}>
                        <mesh 
                        geometry={torusGeometry}
                        material={torusMaterial}
                        position={[3, 0.5, 0]}
                    />
                    </group>
                )
            })}

            <group name="smallSpherePivot">
                <mesh position={[3, 0.5, 0]}>
                    <sphereGeometry args={[0.3, 32, 32]} />
                    
                    <meshStandardMaterial 
                        color={"#e74c3c"}
                        roughness={0.2}
                        metalness={0.5}
                    />
                </mesh>
            </group>
        </>
    )
}

export default MyElement3D