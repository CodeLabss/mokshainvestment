//   "use client"

//   import { useEffect, useRef } from "react"
//   import * as THREE from "three"

//   export function BgComponent() {
//     const containerRef = useRef<HTMLDivElement>(null)
//     const canvasRef = useRef<HTMLDivElement>(null)
// // const rendererRef = useRef<WebGLRenderer | null>(null)
//   const rendererRef = useRef<THREE.WebGLRenderer | null>(null);

//     useEffect(() => {
//       if (!containerRef.current || !canvasRef.current) return

//       const vertexShader = `
//         varying vec2 vUv;
//         void main(){
//           vUv = uv;
//           gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
//         }
//       `

//       const displayShader = `
//         uniform float iTime;
//         uniform vec2 iResolution;
//         uniform float uDistortionAmount;
//         uniform vec3 uColor1;
//         uniform vec3 uColor2;
//         uniform vec3 uColor3;
//         uniform vec3 uColor4;
//         uniform float uColorIntensity;
//         uniform float uSoftness;
//         varying vec2 vUv;

//         void main() {
//           vec2 fragCoord = vUv * iResolution;
//           float mr = min(iResolution.x, iResolution.y);
//           vec2 uv = (fragCoord * 2.0 - iResolution.xy) / mr;

//           float d = -iTime * 0.5;
//           float a = 0.0;
//           for (float i = 0.0; i < 8.0; ++i) {
//             a += cos(i - d - a * uv.x);
//             d += sin(uv.y * i + a);
//           }

//           d += iTime * 0.5;

//           float mixer1 = cos(uv.x * d) * 0.5 + 0.5;
//           float mixer2 = cos(uv.y * a) * 0.5 + 0.5;
//           float mixer3 = sin(d + a) * 0.5 + 0.5;

//           float smoothAmount = clamp(uSoftness * 0.1, 0.0, 0.9);
//           mixer1 = mix(mixer1, 0.5, smoothAmount);
//           mixer2 = mix(mixer2, 0.5, smoothAmount);
//           mixer3 = mix(mixer3, 0.5, smoothAmount);

//           vec3 col = mix(uColor1, uColor2, mixer1);
//           col = mix(col, uColor3, mixer2);
//           col = mix(col, uColor4, mixer3 * 0.4);

//           col *= uColorIntensity;

//           // --- Adaptive transparency based on brightness ---
//           float luminance = dot(col, vec3(0.299, 0.587, 0.114));
//           float adaptiveAlpha = mix(0.25, 0.75, 1.0 - luminance);

//           gl_FragColor = vec4(col, adaptiveAlpha);
//         }
//       `

//       const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1)
//       const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
//       renderer.setClearColor(0x000000, 0) // transparent bg
//       rendererRef.current = renderer

//       renderer.setSize(window.innerWidth, window.innerHeight)
//       canvasRef.current.appendChild(renderer.domElement)

//       const displayMaterial = new THREE.ShaderMaterial({
//         uniforms: {
//           iTime: { value: 0 },
//           iResolution: {
//             value: new THREE.Vector2(window.innerWidth, window.innerHeight),
//           },
//           uDistortionAmount: { value: 2.5 },
//           uColor1: { value: new THREE.Vector3(0.72, 1.0, 0.96) },
//           uColor2: { value: new THREE.Vector3(0.43, 0.20, 0.40) },
//           uColor3: { value: new THREE.Vector3(0.0, 0.2, 1.0) },
//           uColor4: { value: new THREE.Vector3(0.4, 0.82, 0.99) },
//           uColorIntensity: { value: 1.0 },
//           uSoftness: { value: 1.0 }
//         },
//         vertexShader,
//         fragmentShader: displayShader,
//         transparent: true,
//       })

//       // const geometry = new THREE.PlaneGeometry(2, 2)
//       // const displayPlane = new THREE.Mesh(geometry, displayMaterial)

//       // function animate() {
//       //   requestAnimationFrame(animate)
//       //   displayMaterial.uniforms.iTime.value = performance.now() * 0.001
//       //   renderer.render(displayPlane, camera)
//       // }
//       const geometry = new THREE.PlaneGeometry(2, 2)
// const displayPlane = new THREE.Mesh(geometry, displayMaterial)
// const scene = new THREE.Scene()
// scene.add(displayPlane)

// function animate() {
//   requestAnimationFrame(animate)
//   displayMaterial.uniforms.iTime.value = performance.now() * 0.001
//   renderer.render(scene, camera)
// }


//       const handleResize = () => {
//         const width = window.innerWidth
//         const height = window.innerHeight
//         renderer.setSize(width, height)
//         displayMaterial.uniforms.iResolution.value.set(width, height)
//       }

//       window.addEventListener("resize", handleResize)
//       animate()

//       return () => {
//         window.removeEventListener("resize", handleResize)
//         renderer.dispose()
//         geometry.dispose()
//         displayMaterial.dispose()
//         rendererRef.current = null
//       }
//     }, [])

//     return (
//       <div ref={containerRef} className="pointer-events-none fixed inset-0 -z-10">
//         <div ref={canvasRef} className="absolute inset-0" />
//       </div>
//     )
//   }

"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export function BgComponent() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);

  useEffect(() => {
    if (!containerRef.current || !canvasRef.current) return;

    // --- Vertex Shader ---
    const vertexShader = `
      varying vec2 vUv;
      void main(){
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `;

    // --- Fragment Shader ---
    const displayShader = `
      uniform float iTime;
      uniform vec2 iResolution;
      uniform vec3 uColor1;
      uniform vec3 uColor2;
      uniform vec3 uColor3;
      uniform vec3 uColor4;
      uniform float uColorIntensity;
      uniform float uSoftness;
      varying vec2 vUv;

      void main() {
        vec2 fragCoord = vUv * iResolution;
        float mr = min(iResolution.x, iResolution.y);
        vec2 uv = (fragCoord * 2.0 - iResolution.xy) / mr;

        float d = -iTime * 0.5;
        float a = 0.0;
        for (float i = 0.0; i < 8.0; ++i) {
          a += cos(i - d - a * uv.x);
          d += sin(uv.y * i + a);
        }

        d += iTime * 0.5;

        float mixer1 = cos(uv.x * d) * 0.5 + 0.5;
        float mixer2 = cos(uv.y * a) * 0.5 + 0.5;
        float mixer3 = sin(d + a) * 0.5 + 0.5;

        float smoothAmount = clamp(uSoftness * 0.1, 0.0, 0.9);
        mixer1 = mix(mixer1, 0.5, smoothAmount);
        mixer2 = mix(mixer2, 0.5, smoothAmount);
        mixer3 = mix(mixer3, 0.5, smoothAmount);

        vec3 col = mix(uColor1, uColor2, mixer1);
        col = mix(col, uColor3, mixer2);
        col = mix(col, uColor4, mixer3 * 0.4);

        col *= uColorIntensity;

        float luminance = dot(col, vec3(0.299, 0.587, 0.114));
        float adaptiveAlpha = mix(0.25, 0.75, 1.0 - luminance);

        gl_FragColor = vec4(col, adaptiveAlpha);
      }
    `;

    // --- Camera & Renderer Setup ---
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setClearColor(0x000000, 0);
    rendererRef.current = renderer;

    renderer.setSize(window.innerWidth, window.innerHeight);
    canvasRef.current.appendChild(renderer.domElement);

    // --- Shader Material ---
    const displayMaterial = new THREE.ShaderMaterial({
      uniforms: {
        iTime: { value: 0 },
        iResolution: {
          value: new THREE.Vector2(window.innerWidth, window.innerHeight),
        },
        uColor1: { value: new THREE.Vector3(0.72, 1.0, 0.96) },
        uColor2: { value: new THREE.Vector3(0.43, 0.20, 0.40) },
        uColor3: { value: new THREE.Vector3(0.0, 0.2, 1.0) },
        uColor4: { value: new THREE.Vector3(0.4, 0.82, 0.99) },
        uColorIntensity: { value: 1.0 },
        uSoftness: { value: 1.0 },
      },
      vertexShader,
      fragmentShader: displayShader,
      transparent: true,
    });

    const geometry = new THREE.PlaneGeometry(2, 2);
    const displayPlane = new THREE.Mesh(geometry, displayMaterial);
    const scene = new THREE.Scene();
    scene.add(displayPlane);

    // --- Animation Loop ---
    let isUnmounted = false;
    function animate() {
      if (isUnmounted) return;
      requestAnimationFrame(animate);
      displayMaterial.uniforms.iTime.value = performance.now() * 0.001;
      renderer.render(scene, camera);
    }
    animate();

    // --- Resize Handling ---
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      renderer.setSize(width, height);
      displayMaterial.uniforms.iResolution.value.set(width, height);
    };
    window.addEventListener("resize", handleResize);

    // --- Cleanup ---
    return () => {
      isUnmounted = true;
      window.removeEventListener("resize", handleResize);
      if (canvasRef.current && renderer.domElement.parentNode === canvasRef.current) {
        canvasRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
      geometry.dispose();
      displayMaterial.dispose();
      rendererRef.current = null;
    };
  }, []);

  return (
    <div ref={containerRef} className="pointer-events-none fixed inset-0 -z-10">
      <div ref={canvasRef} className="absolute inset-0" />
    </div>
  );
}
