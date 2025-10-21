module.exports = [
"[project]/mokshainvestment/components/WhatsAppFloating.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WhatsAppFloating
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mokshainvestment/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mokshainvestment/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mokshainvestment/node_modules/react-icons/fa/index.mjs [app-rsc] (ecmascript)");
;
;
;
const WHATSAPP_PHONE = "9029026060"; // replace with your real number
function WhatsAppFloating() {
    const wa = `https://wa.me/${WHATSAPP_PHONE.replace(/[^\d]/g, "")}`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
        href: wa,
        target: "_blank",
        className: "fixed bottom-5 right-5 z-50 inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-500 text-white shadow-lg hover:bg-emerald-600",
        "aria-label": "Chat on WhatsApp",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-xl",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FaWhatsapp"], {}, void 0, false, {
                fileName: "[project]/mokshainvestment/components/WhatsAppFloating.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this)
        }, void 0, false, {
            fileName: "[project]/mokshainvestment/components/WhatsAppFloating.tsx",
            lineNumber: 17,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/mokshainvestment/components/WhatsAppFloating.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
}),
"[project]/mokshainvestment/components/BgComponent.tsx [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

// "use client"
// import { useEffect, useRef } from "react"
// import * as THREE from "three"
// function hexToRgb(hex: string) {
//   const r = Number.parseInt(hex.slice(1, 3), 16) / 255
//   const g = Number.parseInt(hex.slice(3, 5), 16) / 255
//   const b = Number.parseInt(hex.slice(5, 7), 16) / 255
//   return [r, g, b]
// }
// export function BgComponent() {
//   const containerRef = useRef<HTMLDivElement>(null)
//   const canvasRef = useRef<HTMLDivElement>(null)
//   const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
//   const materialsRef = useRef<{
//     fluidMaterial: THREE.ShaderMaterial | null;
//     displayMaterial: THREE.ShaderMaterial | null;
//   }>({ fluidMaterial: null, displayMaterial: null })
//   const mouseRef = useRef({ x: 0, y: 0, prevX: 0, prevY: 0, lastMoveTime: 0 })
//   useEffect(() => {
//     if (!containerRef.current || !canvasRef.current) return
//     const vertexShader = `
//       varying vec2 vUv;
//       void main(){
//         vUv = uv;
//         gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
//       }
//     `
//     const fluidShader = `
//       uniform float iTime;
//       uniform vec2 iResolution;
//       uniform vec4 iMouse;
//       uniform int iFrame;
//       uniform sampler2D iPreviousFrame;
//       uniform float uBrushSize;
//       uniform float uBrushStrength;
//       uniform float uFluidDecay;
//       uniform float uTrailLength;
//       uniform float uStopDecay;
//       varying vec2 vUv;
//       vec2 ur, U;
//       float ln(vec2 p, vec2 a, vec2 b) {
//         return length(p - a - (b - a) * clamp(dot(p - a, b - a) / dot(b - a, b - a), 0.0, 1.0));
//       }
//       vec4 t(vec2 v, int a, int b) {
//         return texture2D(iPreviousFrame, fract((v + vec2(float(a), float(b))) / ur));
//       }
//       vec4 t(vec2 v) {
//         return texture2D(iPreviousFrame, fract(v / ur));
//       }
//       float area(vec2 a, vec2 b, vec2 c) {
//         float A = length(b - c), B = length(c - a), C = length(a - b), s = 0.5 * (A + B + C);
//         return sqrt(max(0.0, s * (s - A) * (s - B) * (s - C))); 
//       }
//       void main() {
//         U = vUv * iResolution;
//         ur = iResolution.xy;
//         if (iFrame < 1) {
//           float w = 0.5 + sin(0.2 * U.x) * 0.5;
//           float q = length(U - 0.5 * ur);
//           gl_FragColor = vec4(0.1 * exp(-0.001 * q), 0.0, w, 1.0);
//         } else {
//           vec2 v = U;
//           vec2 A = v + vec2(1, 1);
//           vec2 B = v + vec2(1, -1);
//           vec2 C = v + vec2(-1, 1);
//           vec2 D = v + vec2(-1, -1);
//           for (int i = 0; i < 8; i++) {
//             v -= t(v).xy;
//             A -= t(A).xy;
//             B -= t(B).xy;
//             C -= t(C).xy;
//             D -= t(D).xy;
//           }
//           vec4 me = t(v);
//           vec4 n = t(v, 0, 1);
//           vec4 e = t(v, 1, 0);
//           vec4 s = t(v, 0, -1);
//           vec4 w = t(v, -1, 0);
//           vec4 ne = 0.25 * (n + e + s + w);
//           me = mix(t(v), ne, vec4(0.15, 0.15, 0.95, 0.0));
//           me.z = me.z - 0.01 * ((area(A, B, C) + area(B, C, D)) - 4.0);
//           vec4 pr = vec4(e.z, w.z, n.z, s.z);
//           me.xy = me.xy + 100.0 * vec2(pr.x - pr.y, pr.z - pr.w) / ur;
//           me.xy *= uFluidDecay;
//           me.z *= uTrailLength;
//           if (iMouse.z > 0.0) {
//             vec2 mousePos = iMouse.xy;
//             vec2 mousePrev = iMouse.zw;
//             vec2 mouseVel = mousePos - mousePrev;
//             float velMagnitude = length(mouseVel);
//             float q = ln(U, mousePos, mousePrev);
//             vec2 m = mousePos - mousePrev;
//             float l = length(m);
//             if (l > 0.0) m = min(10.0, 10.0) * m / l;
//             float brushSizeFactor = 1e-4 / uBrushSize;
//             float strengthFactor = 0.03 * uBrushStrength;
//             float falloff = exp(-brushSizeFactor * q * q * q);
//             falloff = pow(falloff, 0.5);
//             me.xyz += strengthFactor * falloff * vec3(m, 10.0);
//             if (velMagnitude < 2.0) {
//               float distToCursor = length(U - mousePos);
//               float influence = exp(-distToCursor * 0.01);
//               float cursorDecay = mix(1.0, uStopDecay, influence);
//               me.xy *= cursorDecay;
//               me.z *= cursorDecay;
//             }
//           }
//           gl_FragColor = clamp(me, -0.4, 0.4);
//         }
//       }
//     `
//     const displayShader = `
//       uniform float iTime;
//       uniform vec2 iResolution;
//       uniform sampler2D iFluid;
//       uniform float uDistortionAmount;
//       uniform vec3 uColor1;
//       uniform vec3 uColor2;
//       uniform vec3 uColor3;
//       uniform vec3 uColor4;
//       uniform float uColorIntensity;
//       uniform float uSoftness;
//       varying vec2 vUv;
//       void main() {
//         vec2 fragCoord = vUv * iResolution;
//         vec4 fluid = texture2D(iFluid, vUv);
//         vec2 fluidVel = fluid.xy;
//         float mr = min(iResolution.x, iResolution.y);
//         vec2 uv = (fragCoord * 2.0 - iResolution.xy) / mr;
//         uv += fluidVel * (0.5 * uDistortionAmount);
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
//         gl_FragColor = vec4(col, 1.0);
//       }
//     `
//     const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1)
//     const renderer = new THREE.WebGLRenderer({ antialias: true })
//     rendererRef.current = renderer
//     renderer.setSize(window.innerWidth, window.innerHeight)
//     canvasRef.current.appendChild(renderer.domElement)
//     const fluidTarget1 = new THREE.WebGLRenderTarget(
//       window.innerWidth,
//       window.innerHeight,
//       {
//         minFilter: THREE.LinearFilter,
//         magFilter: THREE.LinearFilter,
//         format: THREE.RGBAFormat,
//         type: THREE.FloatType,
//       }
//     )
//     const fluidTarget2 = new THREE.WebGLRenderTarget(
//       window.innerWidth,
//       window.innerHeight,
//       {
//         minFilter: THREE.LinearFilter,
//         magFilter: THREE.LinearFilter,
//         format: THREE.RGBAFormat,
//         type: THREE.FloatType,
//       }
//     )
//     let currentFluidTarget = fluidTarget1
//     let previousFluidTarget = fluidTarget2
//     let frameCount = 0
//     const fluidMaterial = new THREE.ShaderMaterial({
//       uniforms: {
//         iTime: { value: 0 },
//         iResolution: {
//           value: new THREE.Vector2(window.innerWidth, window.innerHeight),
//         },
//         iMouse: { value: new THREE.Vector4(0, 0, 0, 0) },
//         iFrame: { value: 0 },
//         iPreviousFrame: { value: null },
//         uBrushSize: { value: 25 },
//         uBrushStrength: { value: 0.5 },
//         uFluidDecay: { value: 0.98 },
//         uTrailLength: { value: 0.8 },
//         uStopDecay: { value: 0.85 },
//       },
//       vertexShader,
//       fragmentShader: fluidShader,
//     })
//     const displayMaterial = new THREE.ShaderMaterial({
//       uniforms: {
//         iTime: { value: 0 },
//         iResolution: {
//           value: new THREE.Vector2(window.innerWidth, window.innerHeight),
//         },
//         iFluid: { value: null },
//         uDistortionAmount: { value: 2.5 },
//         uColor1: { value: new THREE.Vector3(0.7215686274509804, 1, 0.9686274509803922) },
//         uColor2: { value: new THREE.Vector3(0.43137254901960786, 0.20392156862745098, 0.4) },
//         uColor3: { value: new THREE.Vector3(0.00392156862745098, 0.2, 1) },
//         uColor4: { value: new THREE.Vector3(0.4, 0.8196078431372549, 0.996078431372549) },
//         uColorIntensity: { value: 1.0 },
//         uSoftness: { value: 1.0 }
//       },
//       vertexShader,
//       fragmentShader: displayShader,
//     })
//     materialsRef.current = { fluidMaterial, displayMaterial }
//     const geometry = new THREE.PlaneGeometry(2, 2)
//     const fluidPlane = new THREE.Mesh(geometry, fluidMaterial)
//     const displayPlane = new THREE.Mesh(geometry, displayMaterial)
//     function animate() {
//       requestAnimationFrame(animate)
//       const time = performance.now() * 0.001
//       fluidMaterial.uniforms.iTime.value = time
//       displayMaterial.uniforms.iTime.value = time
//       fluidMaterial.uniforms.iFrame.value = frameCount
//       if (performance.now() - mouseRef.current.lastMoveTime > 100) {
//         fluidMaterial.uniforms.iMouse.value.set(0, 0, 0, 0)
//       }
//       fluidMaterial.uniforms.iPreviousFrame.value = previousFluidTarget.texture
//       renderer.setRenderTarget(currentFluidTarget)
//       renderer.render(fluidPlane, camera)
//       displayMaterial.uniforms.iFluid.value = currentFluidTarget.texture
//       renderer.setRenderTarget(null)
//       renderer.render(displayPlane, camera)
//       const temp = currentFluidTarget
//       currentFluidTarget = previousFluidTarget
//       previousFluidTarget = temp
//       frameCount++
//     }
//     const handleResize = () => {
//       const width = window.innerWidth
//       const height = window.innerHeight
//       renderer.setSize(width, height)
//       fluidMaterial.uniforms.iResolution.value.set(width, height)
//       displayMaterial.uniforms.iResolution.value.set(width, height)
//       fluidTarget1.setSize(width, height)
//       fluidTarget2.setSize(width, height)
//       frameCount = 0
//     }
//     window.addEventListener("resize", handleResize)
//     animate()
//     return () => {
//       window.removeEventListener("resize", handleResize)
//       renderer.dispose()
//       fluidTarget1.dispose()
//       fluidTarget2.dispose()
//       geometry.dispose()
//       fluidMaterial.dispose()
//       displayMaterial.dispose()
//       materialsRef.current = { fluidMaterial: null, displayMaterial: null }
//       rendererRef.current = null
//     }
//   }, [])
//   useEffect(() => {
//     const canvas = rendererRef.current?.domElement
//     if (!canvas) return
//     const handleMouseMove = (e: MouseEvent) => {
//       if (!true || !materialsRef.current.fluidMaterial) return
//       const rect = canvas.getBoundingClientRect()
//       mouseRef.current.prevX = mouseRef.current.x
//       mouseRef.current.prevY = mouseRef.current.y
//       mouseRef.current.x = e.clientX - rect.left
//       mouseRef.current.y = rect.height - (e.clientY - rect.top)
//       mouseRef.current.lastMoveTime = performance.now()
//       materialsRef.current.fluidMaterial.uniforms.iMouse.value.set(
//         mouseRef.current.x,
//         mouseRef.current.y,
//         mouseRef.current.prevX,
//         mouseRef.current.prevY
//       )
//     }
//     const handleMouseLeave = () => {
//       if (materialsRef.current.fluidMaterial) {
//         materialsRef.current.fluidMaterial.uniforms.iMouse.value.set(
//           0,
//           0,
//           0,
//           0
//         )
//       }
//     }
//     canvas.addEventListener("mousemove", handleMouseMove)
//     canvas.addEventListener("mouseleave", handleMouseLeave)
//     if (!true && materialsRef.current.fluidMaterial) {
//       materialsRef.current.fluidMaterial.uniforms.iMouse.value.set(0, 0, 0, 0)
//     }
//     return () => {
//       canvas.removeEventListener("mousemove", handleMouseMove)
//       canvas.removeEventListener("mouseleave", handleMouseLeave)
//     }
//   }, [])
//   return (
//     <div ref={containerRef} className="pointer-events-none fixed inset-0 -z-10">
//       <div ref={canvasRef} className="absolute inset-0" />
//     </div>
//   )
// }
// "use client"
// import { useEffect, useRef } from "react"
// import * as THREE from "three"
// export function BgComponent() {
//   const containerRef = useRef<HTMLDivElement>(null)
//   const canvasRef = useRef<HTMLDivElement>(null)
//   const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
//   useEffect(() => {
//     if (!containerRef.current || !canvasRef.current) return
//     const vertexShader = `
//       varying vec2 vUv;
//       void main(){
//         vUv = uv;
//         gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
//       }
//     `
//     const displayShader = `
//       uniform float iTime;
//       uniform vec2 iResolution;
//       uniform float uDistortionAmount;
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
//         // --- Adaptive transparency based on brightness ---
//         float luminance = dot(col, vec3(0.299, 0.587, 0.114));
//         float adaptiveAlpha = mix(0.25, 0.75, 1.0 - luminance);
//         gl_FragColor = vec4(col, adaptiveAlpha);
//       }
//     `
//     const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1)
//     const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
//     renderer.setClearColor(0x000000, 0) // transparent bg
//     rendererRef.current = renderer
//     renderer.setSize(window.innerWidth, window.innerHeight)
//     canvasRef.current.appendChild(renderer.domElement)
//     const displayMaterial = new THREE.ShaderMaterial({
//       uniforms: {
//         iTime: { value: 0 },
//         iResolution: {
//           value: new THREE.Vector2(window.innerWidth, window.innerHeight),
//         },
//         uDistortionAmount: { value: 2.5 },
//         uColor1: { value: new THREE.Vector3(0.72, 1.0, 0.96) },
//         uColor2: { value: new THREE.Vector3(0.43, 0.20, 0.40) },
//         uColor3: { value: new THREE.Vector3(0.0, 0.2, 1.0) },
//         uColor4: { value: new THREE.Vector3(0.4, 0.82, 0.99) },
//         uColorIntensity: { value: 1.0 },
//         uSoftness: { value: 1.0 }
//       },
//       vertexShader,
//       fragmentShader: displayShader,
//       transparent: true,
//     })
//     const geometry = new THREE.PlaneGeometry(2, 2)
//     const displayPlane = new THREE.Mesh(geometry, displayMaterial)
//     function animate() {
//       requestAnimationFrame(animate)
//       displayMaterial.uniforms.iTime.value = performance.now() * 0.001
//       renderer.render(displayPlane, camera)
//     }
//     const handleResize = () => {
//       const width = window.innerWidth
//       const height = window.innerHeight
//       renderer.setSize(width, height)
//       displayMaterial.uniforms.iResolution.value.set(width, height)
//     }
//     window.addEventListener("resize", handleResize)
//     animate()
//     return () => {
//       window.removeEventListener("resize", handleResize)
//       renderer.dispose()
//       geometry.dispose()
//       displayMaterial.dispose()
//       rendererRef.current = null
//     }
//   }, [])
//   return (
//     <div ref={containerRef} className="pointer-events-none fixed inset-0 -z-10">
//       <div ref={canvasRef} className="absolute inset-0" />
//     </div>
//   )
// }
// grey
// "use client"
// import { useEffect, useRef } from "react"
// import * as THREE from "three"
// function hexToRgb(hex: string) {
//   const r = Number.parseInt(hex.slice(1, 3), 16) / 255
//   const g = Number.parseInt(hex.slice(3, 5), 16) / 255
//   const b = Number.parseInt(hex.slice(5, 7), 16) / 255
//   return [r, g, b]
// }
// export function BgComponent() {
//   const containerRef = useRef<HTMLDivElement>(null)
//   const canvasRef = useRef<HTMLDivElement>(null)
//   const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
//   const materialsRef = useRef<{
//     fluidMaterial: THREE.ShaderMaterial | null;
//     displayMaterial: THREE.ShaderMaterial | null;
//   }>({ fluidMaterial: null, displayMaterial: null })
//   const mouseRef = useRef({ x: 0, y: 0, prevX: 0, prevY: 0, lastMoveTime: 0 })
//   useEffect(() => {
//     if (!containerRef.current || !canvasRef.current) return
//     const vertexShader = `
//       varying vec2 vUv;
//       void main(){
//         vUv = uv;
//         gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
//       }
//     `
//     const fluidShader = `
//       uniform float iTime;
//       uniform vec2 iResolution;
//       uniform vec4 iMouse;
//       uniform int iFrame;
//       uniform sampler2D iPreviousFrame;
//       uniform float uBrushSize;
//       uniform float uBrushStrength;
//       uniform float uFluidDecay;
//       uniform float uTrailLength;
//       uniform float uStopDecay;
//       varying vec2 vUv;
//       vec2 ur, U;
//       float ln(vec2 p, vec2 a, vec2 b) {
//         return length(p - a - (b - a) * clamp(dot(p - a, b - a) / dot(b - a, b - a), 0.0, 1.0));
//       }
//       vec4 t(vec2 v, int a, int b) {
//         return texture2D(iPreviousFrame, fract((v + vec2(float(a), float(b))) / ur));
//       }
//       vec4 t(vec2 v) {
//         return texture2D(iPreviousFrame, fract(v / ur));
//       }
//       float area(vec2 a, vec2 b, vec2 c) {
//         float A = length(b - c), B = length(c - a), C = length(a - b), s = 0.5 * (A + B + C);
//         return sqrt(max(0.0, s * (s - A) * (s - B) * (s - C))); 
//       }
//       void main() {
//         U = vUv * iResolution;
//         ur = iResolution.xy;
//         if (iFrame < 1) {
//           float w = 0.5 + sin(0.2 * U.x) * 0.5;
//           float q = length(U - 0.5 * ur);
//           gl_FragColor = vec4(0.1 * exp(-0.001 * q), 0.0, w, 1.0);
//         } else {
//           vec2 v = U;
//           vec2 A = v + vec2(1, 1);
//           vec2 B = v + vec2(1, -1);
//           vec2 C = v + vec2(-1, 1);
//           vec2 D = v + vec2(-1, -1);
//           for (int i = 0; i < 8; i++) {
//             v -= t(v).xy;
//             A -= t(A).xy;
//             B -= t(B).xy;
//             C -= t(C).xy;
//             D -= t(D).xy;
//           }
//           vec4 me = t(v);
//           vec4 n = t(v, 0, 1);
//           vec4 e = t(v, 1, 0);
//           vec4 s = t(v, 0, -1);
//           vec4 w = t(v, -1, 0);
//           vec4 ne = 0.25 * (n + e + s + w);
//           me = mix(t(v), ne, vec4(0.15, 0.15, 0.95, 0.0));
//           me.z = me.z - 0.01 * ((area(A, B, C) + area(B, C, D)) - 4.0);
//           vec4 pr = vec4(e.z, w.z, n.z, s.z);
//           me.xy = me.xy + 100.0 * vec2(pr.x - pr.y, pr.z - pr.w) / ur;
//           me.xy *= uFluidDecay;
//           me.z *= uTrailLength;
//           if (iMouse.z > 0.0) {
//             vec2 mousePos = iMouse.xy;
//             vec2 mousePrev = iMouse.zw;
//             vec2 mouseVel = mousePos - mousePrev;
//             float velMagnitude = length(mouseVel);
//             float q = ln(U, mousePos, mousePrev);
//             vec2 m = mousePos - mousePrev;
//             float l = length(m);
//             if (l > 0.0) m = min(10.0, 10.0) * m / l;
//             float brushSizeFactor = 1e-4 / uBrushSize;
//             float strengthFactor = 0.03 * uBrushStrength;
//             float falloff = exp(-brushSizeFactor * q * q * q);
//             falloff = pow(falloff, 0.5);
//             me.xyz += strengthFactor * falloff * vec3(m, 10.0);
//             if (velMagnitude < 2.0) {
//               float distToCursor = length(U - mousePos);
//               float influence = exp(-distToCursor * 0.01);
//               float cursorDecay = mix(1.0, uStopDecay, influence);
//               me.xy *= cursorDecay;
//               me.z *= cursorDecay;
//             }
//           }
//           gl_FragColor = clamp(me, -0.4, 0.4);
//         }
//       }
//     `
//     const displayShader = `
//       uniform float iTime;
//       uniform vec2 iResolution;
//       uniform sampler2D iFluid;
//       uniform float uDistortionAmount;
//       uniform vec3 uColor1;
//       uniform vec3 uColor2;
//       uniform vec3 uColor3;
//       uniform vec3 uColor4;
//       uniform float uColorIntensity;
//       uniform float uSoftness;
//       varying vec2 vUv;
//       void main() {
//         vec2 fragCoord = vUv * iResolution;
//         vec4 fluid = texture2D(iFluid, vUv);
//         vec2 fluidVel = fluid.xy;
//         float mr = min(iResolution.x, iResolution.y);
//         vec2 uv = (fragCoord * 2.0 - iResolution.xy) / mr;
//         uv += fluidVel * (0.5 * uDistortionAmount);
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
//         gl_FragColor = vec4(col, 1.0);
//       }
//     `
//     const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1)
//     const renderer = new THREE.WebGLRenderer({ antialias: true })
//     rendererRef.current = renderer
//     renderer.setSize(window.innerWidth, window.innerHeight)
//     canvasRef.current.appendChild(renderer.domElement)
//     const fluidTarget1 = new THREE.WebGLRenderTarget(
//       window.innerWidth,
//       window.innerHeight,
//       {
//         minFilter: THREE.LinearFilter,
//         magFilter: THREE.LinearFilter,
//         format: THREE.RGBAFormat,
//         type: THREE.FloatType,
//       }
//     )
//     const fluidTarget2 = new THREE.WebGLRenderTarget(
//       window.innerWidth,
//       window.innerHeight,
//       {
//         minFilter: THREE.LinearFilter,
//         magFilter: THREE.LinearFilter,
//         format: THREE.RGBAFormat,
//         type: THREE.FloatType,
//       }
//     )
//     let currentFluidTarget = fluidTarget1
//     let previousFluidTarget = fluidTarget2
//     let frameCount = 0
//     const fluidMaterial = new THREE.ShaderMaterial({
//       uniforms: {
//         iTime: { value: 0 },
//         iResolution: {
//           value: new THREE.Vector2(window.innerWidth, window.innerHeight),
//         },
//         iMouse: { value: new THREE.Vector4(0, 0, 0, 0) },
//         iFrame: { value: 0 },
//         iPreviousFrame: { value: null },
//         uBrushSize: { value: 10 },
//         uBrushStrength: { value: 10 },
//         uFluidDecay: { value: 0.98 },
//         uTrailLength: { value: 0.8 },
//         uStopDecay: { value: 0.85 },
//       },
//       vertexShader,
//       fragmentShader: fluidShader,
//     })
//     const displayMaterial = new THREE.ShaderMaterial({
//       uniforms: {
//         iTime: { value: 0 },
//         iResolution: {
//           value: new THREE.Vector2(window.innerWidth, window.innerHeight),
//         },
//         iFluid: { value: null },
//         uDistortionAmount: { value: 2.5 },
//         uColor1: { value: new THREE.Vector3(0.14901960784313725, 0.37254901960784315, 0.26666666666666666) },
//         uColor2: { value: new THREE.Vector3(0.3333333333333333, 0.4196078431372549, 0.1843137254901961) },
//         uColor3: { value: new THREE.Vector3(0.12156862745098039, 0.11764705882352941, 0.12156862745098039) },
//         uColor4: { value: new THREE.Vector3(0.15294117647058825, 0.3254901960784314, 0.27450980392156865) },
//         uColorIntensity: { value: 1.0 },
//         uSoftness: { value: 1.0 }
//       },
//       vertexShader,
//       fragmentShader: displayShader,
//     })
//     materialsRef.current = { fluidMaterial, displayMaterial }
//     const geometry = new THREE.PlaneGeometry(2, 2)
//     const fluidPlane = new THREE.Mesh(geometry, fluidMaterial)
//     const displayPlane = new THREE.Mesh(geometry, displayMaterial)
//     function animate() {
//       requestAnimationFrame(animate)
//       const time = performance.now() * 0.001
//       fluidMaterial.uniforms.iTime.value = time
//       displayMaterial.uniforms.iTime.value = time
//       fluidMaterial.uniforms.iFrame.value = frameCount
//       if (performance.now() - mouseRef.current.lastMoveTime > 100) {
//         fluidMaterial.uniforms.iMouse.value.set(0, 0, 0, 0)
//       }
//       fluidMaterial.uniforms.iPreviousFrame.value = previousFluidTarget.texture
//       renderer.setRenderTarget(currentFluidTarget)
//       renderer.render(fluidPlane, camera)
//       displayMaterial.uniforms.iFluid.value = currentFluidTarget.texture
//       renderer.setRenderTarget(null)
//       renderer.render(displayPlane, camera)
//       const temp = currentFluidTarget
//       currentFluidTarget = previousFluidTarget
//       previousFluidTarget = temp
//       frameCount++
//     }
//     const handleResize = () => {
//       const width = window.innerWidth
//       const height = window.innerHeight
//       renderer.setSize(width, height)
//       fluidMaterial.uniforms.iResolution.value.set(width, height)
//       displayMaterial.uniforms.iResolution.value.set(width, height)
//       fluidTarget1.setSize(width, height)
//       fluidTarget2.setSize(width, height)
//       frameCount = 0
//     }
//     window.addEventListener("resize", handleResize)
//     animate()
//     return () => {
//       window.removeEventListener("resize", handleResize)
//       renderer.dispose()
//       fluidTarget1.dispose()
//       fluidTarget2.dispose()
//       geometry.dispose()
//       fluidMaterial.dispose()
//       displayMaterial.dispose()
//       materialsRef.current = { fluidMaterial: null, displayMaterial: null }
//       rendererRef.current = null
//     }
//   }, [])
//   useEffect(() => {
//     const canvas = rendererRef.current?.domElement
//     if (!canvas) return
//     const handleMouseMove = (e: MouseEvent) => {
//       if (!true || !materialsRef.current.fluidMaterial) return
//       const rect = canvas.getBoundingClientRect()
//       mouseRef.current.prevX = mouseRef.current.x
//       mouseRef.current.prevY = mouseRef.current.y
//       mouseRef.current.x = e.clientX - rect.left
//       mouseRef.current.y = rect.height - (e.clientY - rect.top)
//       mouseRef.current.lastMoveTime = performance.now()
//       materialsRef.current.fluidMaterial.uniforms.iMouse.value.set(
//         mouseRef.current.x,
//         mouseRef.current.y,
//         mouseRef.current.prevX,
//         mouseRef.current.prevY
//       )
//     }
//     const handleMouseLeave = () => {
//       if (materialsRef.current.fluidMaterial) {
//         materialsRef.current.fluidMaterial.uniforms.iMouse.value.set(
//           0,
//           0,
//           0,
//           0
//         )
//       }
//     }
//     canvas.addEventListener("mousemove", handleMouseMove)
//     canvas.addEventListener("mouseleave", handleMouseLeave)
//     if (!true && materialsRef.current.fluidMaterial) {
//       materialsRef.current.fluidMaterial.uniforms.iMouse.value.set(0, 0, 0, 0)
//     }
//     return () => {
//       canvas.removeEventListener("mousemove", handleMouseMove)
//       canvas.removeEventListener("mouseleave", handleMouseLeave)
//     }
//   }, [])
//   return (
//     <div ref={containerRef} className="relative w-full h-screen overflow-hidden bg-black">
//       <div ref={canvasRef} className="fixed top-0 left-0 w-full h-full" />
//     </div>
//   )
// }
}),
"[next]/internal/font/google/poppins_fa7ae995.module.css [app-rsc] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "className": "poppins_fa7ae995-module__PLyDCq__className",
  "variable": "poppins_fa7ae995-module__PLyDCq__variable",
});
}),
"[next]/internal/font/google/poppins_fa7ae995.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$poppins_fa7ae995$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[next]/internal/font/google/poppins_fa7ae995.module.css [app-rsc] (css module)");
;
const fontData = {
    className: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$poppins_fa7ae995$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].className,
    style: {
        fontFamily: "'Poppins', 'Poppins Fallback'",
        fontStyle: "normal"
    }
};
if (__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$poppins_fa7ae995$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].variable != null) {
    fontData.variable = __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$poppins_fa7ae995$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].variable;
}
const __TURBOPACK__default__export__ = fontData;
}),
"[project]/mokshainvestment/app/layout.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
// import WhatsAppFloating from "@/components/WhatsAppFloating";
// import type { ReactNode } from "react";
// import { BgComponent } from "@/components/BgComponent";
// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });
// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });
// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };
// //
// export default function RootLayout({ children }: { children: ReactNode }) {
//   return (
//     <html lang="en">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
//       >
//         <BgComponent />
//         {children}
//         <WhatsAppFloating />
//       </body>
//     </html>
//   );
// }
__turbopack_context__.s([
    "default",
    ()=>RootLayout,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mokshainvestment/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$components$2f$WhatsAppFloating$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mokshainvestment/components/WhatsAppFloating.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$components$2f$BgComponent$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mokshainvestment/components/BgComponent.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$poppins_fa7ae995$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[next]/internal/font/google/poppins_fa7ae995.js [app-rsc] (ecmascript)");
;
;
;
;
;
const metadata = {
    title: "Moksha Investment",
    description: "Your Trusted Financial Partner"
};
function RootLayout({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("html", {
        lang: "en",
        className: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$poppins_fa7ae995$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].variable,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("body", {
            className: "antialiased min-h-screen bg-white text-slate-900",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$components$2f$BgComponent$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BgComponent"], {}, void 0, false, {
                    fileName: "[project]/mokshainvestment/app/layout.tsx",
                    lineNumber: 59,
                    columnNumber: 9
                }, this),
                children,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$components$2f$WhatsAppFloating$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/mokshainvestment/app/layout.tsx",
                    lineNumber: 61,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/mokshainvestment/app/layout.tsx",
            lineNumber: 58,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/mokshainvestment/app/layout.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__e7511a6e._.js.map