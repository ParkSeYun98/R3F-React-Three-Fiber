import { OrbitControls } from "@react-three/drei";
import { useEffect, useRef } from "react";
import * as THREE from "three"

function MyElement3D() {
    const mesh1 = useRef()
    const mesh2 = useRef()

    useEffect(() => {
        mesh2.current.material = mesh1.current.material
    }, [])

    return (
        <>
            <OrbitControls />

            <ambientLight intensity = {0.2} />

            <directionalLight position = {[0, 1, 0]} />
            <directionalLight position = {[1, 2, 8]} intensity = {0.7} />

            <mesh 
                ref = {mesh1}
                position = {[0.7, 0, 0]}
            >
                <boxGeometry />

                {/* 
                visible : 보이는지 안보이는지 true/false
                transparent : 재질 투명 효과 true/false
                opacity : 투명도 (1 : 불투명, 0 : 투명) - transparent가 true일때만 작동
                depthTest : 렌더링 되고 있는 Mesh의 픽셀을 depthBuffer 값을 활용하여 검사할 것인지
                depthWrite : 렌더링 되고 있는 Mesh의 픽셀에 대한 Z 값을 depthBuffer에 기록할 것인지
                side : Mesh를 구성하고 있는 면 중, 어느 면을 렌더링 할 것인지 (기본값 : FrontSide)
                */}
                {/* <meshBasicMaterial 
                    color = "yellow" 
                    wireframe = {false}
                    visible={true}
                    transparent = {true}
                    opacity = {0.5}
                    depthTest = {true}
                    depthWrite = {true}
                    side = {THREE.DoubleSide}
                /> */}

                {/* <meshLambertMaterial
                    wireframe = {false}
                    visible={true}
                    transparent = {true}
                    opacity = {1}
                    depthTest = {true}
                    depthWrite = {true}
                    side = {THREE.FrontSide}

                    // emissive : 재질 자체에서 검출하는 속성값 (기본 : 검정색 - 어떤 색상도 검출 X)
                    // color 색이랑 섞임
                    emissive = {0x666600}
                    color = "#d25383" 
                /> */}

                <meshPhongMaterial
                    wireframe = {false}
                    visible={true}
                    transparent = {true}
                    opacity = {1}
                    depthTest = {true}
                    depthWrite = {true}
                    side = {THREE.FrontSide}

                    emissive = {0x666600}
                    color = {0xff0000} 

                    // specular : 광원에 의해 반사되는 색상 값
                    // shininess : specular의 반사 정도 조절
                    specular = {0xffff00}
                    shininess = {100}

                    // mesh를 평평하게 렌더링할 지 여부
                    flatShading = {true}
                />
            </mesh>

            <mesh 
                ref = {mesh2}
                position = {[-0.7, 0, 0]}
            >
                <torusGeometry args={[0.5, 0.2]} />
            </mesh>
        </>
    )
}

export default MyElement3D