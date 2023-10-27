// Drei : R3F에서 사용할 수 있는 유용한 컴포넌트들을 모아놓은 라이브러리
import { OrbitControls, Box } from "@react-three/drei";
import { useControls } from "leva";
import { useEffect, useRef } from "react";

function MyElement3D() {

    const refMesh = useRef()
    const refWireMesh = useRef()

    // const { xSize, ySize, zSize, xSegments, ySegments, zSegments } = useControls({
    //     // 초기값 : 1
    //     // 0.1과 5 사이의 값을 가진다.
    //     // UI를 활용한 조정 단위 : 0.1
    //     xSize: { value: 1, min: 0.1, max: 5, step: 0.01 },
    //     ySize: { value: 1, min: 0.1, max: 5, step: 0.01 },
    //     zSize: { value: 1, min: 0.1, max: 5, step: 0.01 },

    //     // Segment는 1보다 큰 정수여야 한다.
    //     xSegments: { value: 1, min: 1, max: 10, step: 1 },
    //     ySegments: { value: 1, min: 1, max: 10, step: 1 },
    //     zSegments: { value: 1, min: 1, max: 10, step: 1 }
    // })

    // const { radius, widthSegments, heightSegments, phiStart, phiLength, thetaStart, thetaLength } = useControls({
    //     radius: { value: 1, min: 0.1, max: 5, step: 0.01 },
        
    //     // 아래 두 값은 정수이어야 한다.
    //     widthSegments: { value: 32, min: 3, max: 256, step: 1 },
    //     heightSegments: { value: 1, min: 3, max: 256, step: 1 },

    //     phiStart: { value: 0, min: 0, max: 360, step: 0.1 },
    //     phiLength: { value: 360, min: 0, max: 360, step: 0.1 },
        
    //     thetaStart: { value: 0, min: 0, max: 180, step: 0.1 },
    //     thetaLength: { value: 180, min: 0, max: 180, step: 0.1 }
    // })

    const { topRadius, bottomRadius, height, radialSegments, heightSegments, bopen, thetaStart, thetaLength } = useControls({
        
        topRadius: { value: 1, min: 0.1, max: 5, step: 0.01 },
        bottomRadius: { value: 1, min: 0.1, max: 5, step: 0.01 },
        
        height: { value: 1, min: 0.1, max: 5, step: 0.01 },

        radialSegments: { value: 32, min: 1, max: 256, step: 1},
        heightSegments: { value: 1, min: 1, max: 256, step: 1 },
        bopen: { value: false},

        thetaStart: { value: 0, min: 0, max: 360, step: 0.01 },
        thetaLength: { value: 0, min: 0, max: 360, step: 0.01 }
    })
 
    useEffect(() => {

        refWireMesh.current.geometry = refMesh.current.geometry
    // }, [xSize, ySize, zSize, xSegments, ySegments, zSegments])
        // }, [radius, widthSegments, heightSegments, phiStart, phiLength])
    }, [topRadius, bottomRadius, height, radialSegments, heightSegments, bopen, thetaStart, thetaLength])

    return (
        <>
            <OrbitControls />

            <ambientLight intensity = {0.1} />

            <directionalLight 
                position = {[2, 1, 3]}
                intensity = {0.5}
            />

            {/* 위에서 UseEffect를 활용하여 하나의 boxGeometry만 사용하고도 두 Mesh 모두 표현 */}
            <mesh ref={refMesh}>

                {/* boxGeometry는 args를 활용해서 6개의 값을 지정할 수 있음 */}
                {/* 직접 지정하지 않으면 기본 값이 들어간다 (1) */}
                {/* xSize : x축 방향에 대한 크기, xSegments: x축 방향에 대한 분할 수 */}
                {/* 아래 코드는 new THREE.BoxGeometry(xSize, ySize, zSize, xSegments, ySegments, zSegments)와 같다. */}
                {/* <boxGeometry args={[xSize, ySize, zSize, xSegments, ySegments, zSegments]} /> */}

                {/* <sphereGeometry args={[
                    radius, 
                    widthSegments, heightSegments, 
                    phiStart * Math.PI/180, phiLength * Math.PI/180,
                    thetaStart * Math.PI/180, thetaLength * Math.PI/180
                ]} /> */}

                {/* <cylinderGeometry args = {[
                    topRadius, bottomRadius,
                    height,
                    radialSegments, heightSegments,
                    bopen,
                    thetaStart * Math.PI/180, thetaLength * Math.PI/180
                ]} /> */}

                <torusGeometry args={[ 6.593, 0.7029, 9, 49, 3.363652 ]} />

                <meshStandardMaterial color="#1abc9c" />
            </mesh>

            <mesh ref={refWireMesh}>
                {/* <boxGeometry /> */}

                <meshStandardMaterial 
                    emissive = "yellow" 
                    wireframe={true}
                />
            </mesh>

            <axesHelper scale={10} />
        </>
    )
}

export default MyElement3D