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



// for production environment but not live a temporary gradient version
// "use client";

// import { useEffect, useRef } from "react";

// export function BgComponent() {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const canvasRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     // Simple fallback - just return a gradient background
//     if (!containerRef.current) return;
    
//     containerRef.current.style.background = "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
    
//     return () => {
//       if (containerRef.current) {
//         containerRef.current.style.background = "";
//       }
//     };
//   }, []);

//   return (
//     <div ref={containerRef} className="pointer-events-none fixed inset-0 -z-10">
//       <div ref={canvasRef} className="absolute inset-0" />
//     </div>
//   );
// }

// for prod v2
// "use client";

// import { useEffect, useRef } from "react";

// export function BgComponent() {
//   const containerRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (!containerRef.current) return;

//     // Create animated gradient background that mimics the shader effect
//     containerRef.current.style.background = `
//       linear-gradient(
//         135deg,
//         rgba(115, 255, 245, 0.8) 0%,
//         rgba(110, 51, 102, 0.7) 25%,
//         rgba(0, 51, 255, 0.6) 50%,
//         rgba(102, 209, 255, 0.7) 75%,
//         rgba(115, 255, 245, 0.8) 100%
//       )
//     `;
    
//     containerRef.current.style.backgroundSize = `400% 400%`;
//     containerRef.current.style.animation = `gradientShift 15s ease infinite`;

//     // Add the keyframes to the document
//     const style = document.createElement('style');
//     style.textContent = `
//       @keyframes gradientShift {
//         0% {
//           background-position: 0% 50%;
//         }
//         50% {
//           background-position: 100% 50%;
//         }
//         100% {
//           background-position: 0% 50%;
//         }
//       }
      
//       @keyframes float {
//         0%, 100% {
//           transform: translateY(0px) rotate(0deg);
//           opacity: 0.6;
//         }
//         50% {
//           transform: translateY(-20px) rotate(180deg);
//           opacity: 0.8;
//         }
//       }
      
//       @keyframes pulse {
//         0%, 100% {
//           transform: scale(1);
//           opacity: 0.3;
//         }
//         50% {
//           transform: scale(1.1);
//           opacity: 0.5;
//         }
//       }
      
//       .animated-blob {
//         position: absolute;
//         border-radius: 50%;
//         filter: blur(40px);
//         animation: float 8s ease-in-out infinite;
//       }
      
//       .pulse-circle {
//         position: absolute;
//         border-radius: 50%;
//         filter: blur(30px);
//         animation: pulse 6s ease-in-out infinite;
//       }
//     `;
    
//     document.head.appendChild(style);

//     // Create animated blobs
//     const colors = [
//       'rgba(184, 255, 247, 0.4)',  // Cyan
//       'rgba(110, 52, 102, 0.3)',   // Purple
//       'rgba(1, 51, 255, 0.3)',     // Blue
//       'rgba(102, 209, 254, 0.4)'   // Light Blue
//     ];

//     // Add animated elements
//     for (let i = 0; i < 6; i++) {
//       const blob = document.createElement('div');
//       const pulse = document.createElement('div');
      
//       const size = 200 + Math.random() * 300;
//       const left = Math.random() * 100;
//       const top = Math.random() * 100;
//       const color = colors[Math.floor(Math.random() * colors.length)];
//       const delay = Math.random() * 5;
      
//       // Blob element
//       blob.className = 'animated-blob';
//       blob.style.width = `${size}px`;
//       blob.style.height = `${size}px`;
//       blob.style.left = `${left}%`;
//       blob.style.top = `${top}%`;
//       blob.style.background = color;
//       blob.style.animationDelay = `${delay}s`;
      
//       // Pulse element
//       pulse.className = 'pulse-circle';
//       pulse.style.width = `${size * 0.7}px`;
//       pulse.style.height = `${size * 0.7}px`;
//       pulse.style.left = `${(left + 10) % 100}%`;
//       pulse.style.top = `${(top + 10) % 100}%`;
//       pulse.style.background = colors[(Math.floor(Math.random() * colors.length))];
//       pulse.style.animationDelay = `${delay + 2}s`;
      
//       containerRef.current.appendChild(blob);
//       containerRef.current.appendChild(pulse);
//     }

//     return () => {
//       // Cleanup
//       if (containerRef.current) {
//         containerRef.current.style.background = "";
//         containerRef.current.style.backgroundSize = "";
//         containerRef.current.style.animation = "";
        
//         // Remove all child elements
//         while (containerRef.current.firstChild) {
//           containerRef.current.removeChild(containerRef.current.firstChild);
//         }
//       }
      
//       // Remove style element
//       if (document.head.contains(style)) {
//         document.head.removeChild(style);
//       }
//     };
//   }, []);

//   return (
//     <div ref={containerRef} className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
//       {/* This div will be populated with animated elements */}
//     </div>
//   );
// }


// for prod v3
"use client";

import { useEffect, useRef } from "react";

export function BgComponent() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Create the silk-like animated background
    const style = document.createElement('style');
    style.textContent = `
      @keyframes silkFlow {
        0%, 100% {
          background-position: 0% 0%, 100% 100%, 50% 50%;
          filter: hue-rotate(0deg) blur(0px);
        }
        25% {
          background-position: 100% 0%, 0% 100%, 80% 20%;
          filter: hue-rotate(90deg) blur(2px);
        }
        50% {
          background-position: 100% 100%, 0% 0%, 20% 80%;
          filter: hue-rotate(180deg) blur(4px);
        }
        75% {
          background-position: 0% 100%, 100% 0%, 80% 80%;
          filter: hue-rotate(270deg) blur(2px);
        }
      }
      
      @keyframes silkWave {
        0%, 100% {
          transform: translateX(0%) translateY(0%) scale(1) rotate(0deg);
          opacity: 0.6;
        }
        25% {
          transform: translateX(5%) translateY(-3%) scale(1.1) rotate(90deg);
          opacity: 0.8;
        }
        50% {
          transform: translateX(-3%) translateY(5%) scale(1.05) rotate(180deg);
          opacity: 0.7;
        }
        75% {
          transform: translateX(3%) translateY(-2%) scale(1.15) rotate(270deg);
          opacity: 0.9;
        }
      }
      
      @keyframes silkPulse {
        0%, 100% {
          transform: scale(1) rotate(0deg);
          opacity: 0.4;
        }
        33% {
          transform: scale(1.3) rotate(120deg);
          opacity: 0.6;
        }
        66% {
          transform: scale(1.1) rotate(240deg);
          opacity: 0.5;
        }
      }
      
      .silk-layer {
        position: absolute;
        inset: 0;
        background: 
          radial-gradient(circle at 20% 20%, rgba(184, 255, 247, 0.4) 0%, transparent 50%),
          radial-gradient(circle at 80% 80%, rgba(110, 52, 102, 0.3) 0%, transparent 50%),
          radial-gradient(circle at 50% 50%, rgba(1, 51, 255, 0.3) 0%, transparent 60%),
          radial-gradient(circle at 80% 20%, rgba(102, 209, 254, 0.4) 0%, transparent 50%);
        background-size: 400% 400%, 300% 300%, 500% 500%, 350% 350%;
        animation: silkFlow 20s ease-in-out infinite;
        mix-blend-mode: screen;
      }
      
      .silk-wave {
        position: absolute;
        border-radius: 40% 60% 60% 40% / 60% 40% 60% 40%;
        filter: blur(30px);
        animation: silkWave 15s ease-in-out infinite;
        mix-blend-mode: overlay;
      }
      
      .silk-pulse {
        position: absolute;
        border-radius: 50%;
        filter: blur(25px);
        animation: silkPulse 12s ease-in-out infinite;
        mix-blend-mode: soft-light;
      }
    `;
    
    document.head.appendChild(style);

    // Set base container styles
    containerRef.current.style.background = `linear-gradient(135deg, 
      rgba(184, 255, 247, 0.1) 0%, 
      rgba(110, 52, 102, 0.1) 50%, 
      rgba(1, 51, 255, 0.1) 100%)`;
    
    containerRef.current.style.overflow = `hidden`;

    // Create silk layers
    const silkLayer = document.createElement('div');
    silkLayer.className = 'silk-layer';
    containerRef.current.appendChild(silkLayer);

    // Create silk waves with your exact colors
    const colors = [
      'rgba(184, 255, 247, 0.4)',  // Cyan
      'rgba(110, 52, 102, 0.3)',   // Purple
      'rgba(1, 51, 255, 0.3)',     // Blue
      'rgba(102, 209, 254, 0.4)'   // Light Blue
    ];

    // Create 8 silk waves for rich movement
    for (let i = 0; i < 8; i++) {
      const wave = document.createElement('div');
      const pulse = document.createElement('div');
      
      const size = 300 + Math.random() * 400;
      const left = Math.random() * 120 - 10;
      const top = Math.random() * 120 - 10;
      const color = colors[i % colors.length];
      const delay = Math.random() * 10;
      const duration = 15 + Math.random() * 10;
      
      // Silk wave element
      wave.className = 'silk-wave';
      wave.style.width = `${size}px`;
      wave.style.height = `${size}px`;
      wave.style.left = `${left}%`;
      wave.style.top = `${top}%`;
      wave.style.background = color;
      wave.style.animationDelay = `${delay}s`;
      wave.style.animationDuration = `${duration}s`;
      
      // Silk pulse element
      pulse.className = 'silk-pulse';
      pulse.style.width = `${size * 0.6}px`;
      pulse.style.height = `${size * 0.6}px`;
      pulse.style.left = `${(left + 15) % 100}%`;
      pulse.style.top = `${(top + 15) % 100}%`;
      pulse.style.background = colors[(i + 2) % colors.length];
      pulse.style.animationDelay = `${delay + 4}s`;
      pulse.style.animationDuration = `${duration - 3}s`;
      
      containerRef.current.appendChild(wave);
      containerRef.current.appendChild(pulse);
    }

    // Add continuous subtle movement to the entire container
    const moveContainer = () => {
      if (containerRef.current) {
        const time = performance.now() * 0.001;
        const x = Math.sin(time * 0.2) * 1;
        const y = Math.cos(time * 0.15) * 1;
        containerRef.current.style.transform = `translate(${x}px, ${y}px)`;
        requestAnimationFrame(moveContainer);
      }
    };
    
    moveContainer();

    return () => {
      // Cleanup
      if (containerRef.current) {
        containerRef.current.style.background = "";
        containerRef.current.style.overflow = "";
        containerRef.current.style.transform = "";
        
        // Remove all child elements
        while (containerRef.current.firstChild) {
          containerRef.current.removeChild(containerRef.current.firstChild);
        }
      }
      
      // Remove style element
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Silk animation elements will be added here */}
    </div>
  );
}