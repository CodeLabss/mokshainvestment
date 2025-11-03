// working in dev environment
// "use client";

// import { useEffect, useRef } from "react";
// import {
//   WebGLRenderer,
//   OrthographicCamera,
//   ShaderMaterial,
//   PlaneGeometry,
//   Mesh,
//   Scene,
//   Vector2,
//   Vector3,
// } from "three";



// export function BgComponent() {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const canvasRef = useRef<HTMLDivElement>(null);
//   const rendererRef = useRef<WebGLRenderer | null>(null);

//   useEffect(() => {
//     if (!containerRef.current || !canvasRef.current) return;

//     // --- Vertex Shader ---
//     const vertexShader = `
//       varying vec2 vUv;
//       void main(){
//         vUv = uv;
//         gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
//       }
//     `;

//     // --- Fragment Shader ---
//     const displayShader = `
//       uniform float iTime;
//       uniform vec2 iResolution;
//       uniform vec3 uColor1;
//       uniform vec3 uColor2;
//       uniform vec3 uColor3;
//       uniform vec3 uColor4;
//       uniform float uColorIntensity;
//       uniform float uSoftness;
//       varying vec2 vUv;

//       void main() {
//         vec2 fragCoord = vUv * iResolution;
//         float mr = min(iResolution.x, iResolution.y);
//         vec2 uv = (fragCoord * 2.0 - iResolution.xy) / mr;

//         float d = -iTime * 0.5;
//         float a = 0.0;
//         for (float i = 0.0; i < 8.0; ++i) {
//           a += cos(i - d - a * uv.x);
//           d += sin(uv.y * i + a);
//         }

//         d += iTime * 0.5;

//         float mixer1 = cos(uv.x * d) * 0.5 + 0.5;
//         float mixer2 = cos(uv.y * a) * 0.5 + 0.5;
//         float mixer3 = sin(d + a) * 0.5 + 0.5;

//         float smoothAmount = clamp(uSoftness * 0.1, 0.0, 0.9);
//         mixer1 = mix(mixer1, 0.5, smoothAmount);
//         mixer2 = mix(mixer2, 0.5, smoothAmount);
//         mixer3 = mix(mixer3, 0.5, smoothAmount);

//         vec3 col = mix(uColor1, uColor2, mixer1);
//         col = mix(col, uColor3, mixer2);
//         col = mix(col, uColor4, mixer3 * 0.4);

//         col *= uColorIntensity;

//         float luminance = dot(col, vec3(0.299, 0.587, 0.114));
//         float adaptiveAlpha = mix(0.25, 0.75, 1.0 - luminance);

//         gl_FragColor = vec4(col, adaptiveAlpha);
//       }
//     `;

//     // --- Camera & Renderer Setup ---
//     const camera = new OrthographicCamera(-1, 1, 1, -1, 0, 1);
//     const renderer = new WebGLRenderer({
//       antialias: true,
//       alpha: true,
//     });
//     renderer.setClearColor(0x000000, 0);
//     rendererRef.current = renderer;

//     renderer.setSize(window.innerWidth, window.innerHeight);
//     canvasRef.current.appendChild(renderer.domElement);

//     // --- Shader Material ---
//     const displayMaterial = new ShaderMaterial({
//       uniforms: {
//         iTime: { value: 0 },
//         iResolution: { value: new Vector2(window.innerWidth, window.innerHeight) },
//         uColor1: { value: new Vector3(0.72, 1.0, 0.96) },
//         uColor2: { value: new Vector3(0.43, 0.20, 0.40) },
//         uColor3: { value: new Vector3(0.0, 0.2, 1.0) },
//         uColor4: { value: new Vector3(0.4, 0.82, 0.99) },
//         uColorIntensity: { value: 1.0 },
//         uSoftness: { value: 1.0 },
//       },
//       vertexShader,
//       fragmentShader: displayShader,
//       transparent: true,
//     });

//     const geometry = new PlaneGeometry(2, 2);
//     const displayPlane = new Mesh(geometry, displayMaterial);
//     const scene = new Scene();
//     scene.add(displayPlane);

//     // --- Animation Loop ---
//     let animationFrameId: number;
//     let isUnmounted = false;

//     function animate() {
//       if (isUnmounted) return;
//       animationFrameId = requestAnimationFrame(animate);
//       displayMaterial.uniforms.iTime.value = performance.now() * 0.001;
//       renderer.render(scene, camera);
//     }
//     animate();

//     // --- Resize Handling ---
//     const handleResize = () => {
//       const width = window.innerWidth;
//       const height = window.innerHeight;
//       renderer.setSize(width, height);
//       displayMaterial.uniforms.iResolution.value.set(width, height);
//     };
//     window.addEventListener("resize", handleResize);

//     // --- Cleanup ---
//     return () => {
//       isUnmounted = true;
//       if (animationFrameId) cancelAnimationFrame(animationFrameId);
//       window.removeEventListener("resize", handleResize);
//       if (canvasRef.current && renderer.domElement.parentNode === canvasRef.current) {
//         canvasRef.current.removeChild(renderer.domElement);
//       }
//       renderer.dispose();
//       geometry.dispose();
//       displayMaterial.dispose();
//       rendererRef.current = null;
//     };
//   }, []);

//   return (
//     <div ref={containerRef} className="pointer-events-none fixed inset-0 -z-10">
//       <div ref={canvasRef} className="absolute inset-0" />
//     </div>
//   );
// }



// for production environment
"use client";

import { useEffect, useRef } from "react";

export function BgComponent() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Simple fallback - just return a gradient background
    if (!containerRef.current) return;
    
    containerRef.current.style.background = "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
    
    return () => {
      if (containerRef.current) {
        containerRef.current.style.background = "";
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="pointer-events-none fixed inset-0 -z-10">
      <div ref={canvasRef} className="absolute inset-0" />
    </div>
  );
}