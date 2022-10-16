/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useState, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { useSnapshot } from 'valtio'

import { shoeColorState } from '../states/shoe_states'
import { useFrame } from '@react-three/fiber'

export function ShoeModel(props) {
  const { nodes, materials } = useGLTF(`${process.env.PUBLIC_URL}/models/no_brand_draco.glb`)
  const [onHovered, setOnHovered] = useState(null)
  const snap = useSnapshot(shoeColorState)
  const shoe = useRef()

  useEffect(() => {
    const cursor = `<svg width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path fill="rgba(255, 255, 255, 0.5)" d="M29.5 54C43.031 54 54 43.031 54 29.5S43.031 5 29.5 5 5 15.969 5 29.5 15.969 54 29.5 54z" stroke="#000"/><g filter="url(#filter0_d)"><path d="M29.5 47C39.165 47 47 39.165 47 29.5S39.165 12 29.5 12 12 19.835 12 29.5 19.835 47 29.5 47z" fill="${snap.items[onHovered]}"/></g><path d="M2 2l11 2.947L4.947 13 2 2z" fill="#000"/><text fill="#000" style="white-space:pre" font-family="Inter var, sans-serif" font-size="10" letter-spacing="-.01em"><tspan x="35" y="63">${onHovered}</tspan></text></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h64v64H0z"/></clipPath><filter id="filter0_d" x="6" y="8" width="47" height="47" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="2"/><feGaussianBlur stdDeviation="3"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"/><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"/></filter></defs></svg>`
    const auto = `<svg width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="rgba(255, 255, 255, 0.5)" d="M29.5 54C43.031 54 54 43.031 54 29.5S43.031 5 29.5 5 5 15.969 5 29.5 15.969 54 29.5 54z" stroke="#000"/><path d="M2 2l11 2.947L4.947 13 2 2z" fill="#000"/></svg>`
    if (onHovered) {
      document.body.style.cursor = `url('data:image/svg+xml;base64,${btoa(cursor)}'), auto`
      return () => (document.body.style.cursor = `url('data:image/svg+xml;base64,${btoa(auto)}'), auto`)
    }
  }, [onHovered])

  function onPointOver(e) {
    e.stopPropagation()
    setOnHovered(e.object.name)
  }

  function onPointerOut(e) {
    e.intersections.length === 0 && setOnHovered(null)
  }

  function onPointerDown(e){
    e.stopPropagation();
    shoeColorState.currentSelected = e.object.name;
  }

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    shoe.current.rotation.z = -0.2 - (1 + Math.sin(t / 1.5)) / 20
    shoe.current.rotation.x = Math.cos(t / 4) / 8
    shoe.current.rotation.y = Math.sin(t / 4) / 8
    shoe.current.position.y = (1 + Math.sin(t / 1.5)) / 10
  })

  return (
    <group ref={shoe} {...props} dispose={null} scale={window.innerWidth < 640 ? 2 : 2.5}
      onPointerOver={onPointOver}
      onPointerOut={onPointerOut}
      onPointerDown={onPointerDown}
    >
      {nodes.shoe.children.map((item) =>{ 
        return(
          <mesh 
            key={item.name} 
            geometry={item.geometry} 
            name={`${item.material.name}`}
            material={materials[`${item.material.name}`]} 
            material-color={snap.items[`${item.material.name}`]} 
          />
        )
      })}
    </group>
  )
}

// useGLTF.preload(`${process.env.PUBLIC_URL}/models/shoe_draco.glb`)
