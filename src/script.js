import './style.css'
import * as THREE from 'three'
/* import gsap from 'gsap' */

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)



// Animation

let time = Date.now() //Per normalizzare il framerate con il metodo del tempo

//Metodo Clock
const clock = new THREE.Clock()

const tick = () =>
{
    const currentTime = Date.now()
    const deltaTime = currentTime - time
    time = currentTime

    mesh.rotation.y += 0.001 * deltaTime

    //Metodo Clock

     
    const elapsedTime = clock.getElapsedTime()
    
    // mesh.rotation.y = elapsedTime
    

    // Effetto seno/coseno, va su e torna giù di continuo, a LOOP.
    mesh.position.x = Math.sin(elapsedTime)
    mesh.position.y = Math.cos(elapsedTime)
    

    //Renderizzare ad ogni tick
    renderer.render(scene, camera)

    window.requestAnimationFrame(tick)
}

tick()