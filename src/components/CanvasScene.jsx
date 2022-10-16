import React, { Suspense} from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'
import { ShoeModel } from '../model_js/ShoeModel'

const CanvasScene = () => {

    const glConfig = {
		powerPreference: 'high-performance', 
		antialias: true, 
		stencil: true,
		depth: true,
		alpha: true,
		outputEncoding: THREE.sRGBEncoding,
		toneMapping: THREE.ACESFilmicToneMapping,
	}

     
    return (
        <Canvas style={styles.canvasStyle} gl={glConfig}>
            <ambientLight intensity={0.5}/>
            <spotLight intensity={1} angle={0.5} penumbra={1} position={[10, 15, 10]} castShadow />
            <Suspense fallback={null}  >  
                <ShoeModel /> 
                {/* <ContactShadows position={[0, -0.9, 0]} opacity={1} scale={10} blur={1.5} far={0.8} /> */}
            </Suspense>
            <OrbitControls  enableZoom={true} enablePan={false} />
        </Canvas>
    )
}

const styles = {
    canvasStyle: {
        height: '100vh',
        width: '100%',
    }
}

export default CanvasScene