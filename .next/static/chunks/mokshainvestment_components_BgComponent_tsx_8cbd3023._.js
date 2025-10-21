(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/mokshainvestment/components/BgComponent.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BgComponent",
    ()=>BgComponent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mokshainvestment/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mokshainvestment/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.module.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function BgComponent() {
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const rendererRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BgComponent.useEffect": ()=>{
            if (!containerRef.current || !canvasRef.current) return;
            const vertexShader = "\n        varying vec2 vUv;\n        void main(){\n          vUv = uv;\n          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n        }\n      ";
            const displayShader = "\n        uniform float iTime;\n        uniform vec2 iResolution;\n        uniform float uDistortionAmount;\n        uniform vec3 uColor1;\n        uniform vec3 uColor2;\n        uniform vec3 uColor3;\n        uniform vec3 uColor4;\n        uniform float uColorIntensity;\n        uniform float uSoftness;\n        varying vec2 vUv;\n\n        void main() {\n          vec2 fragCoord = vUv * iResolution;\n          float mr = min(iResolution.x, iResolution.y);\n          vec2 uv = (fragCoord * 2.0 - iResolution.xy) / mr;\n\n          float d = -iTime * 0.5;\n          float a = 0.0;\n          for (float i = 0.0; i < 8.0; ++i) {\n            a += cos(i - d - a * uv.x);\n            d += sin(uv.y * i + a);\n          }\n\n          d += iTime * 0.5;\n\n          float mixer1 = cos(uv.x * d) * 0.5 + 0.5;\n          float mixer2 = cos(uv.y * a) * 0.5 + 0.5;\n          float mixer3 = sin(d + a) * 0.5 + 0.5;\n\n          float smoothAmount = clamp(uSoftness * 0.1, 0.0, 0.9);\n          mixer1 = mix(mixer1, 0.5, smoothAmount);\n          mixer2 = mix(mixer2, 0.5, smoothAmount);\n          mixer3 = mix(mixer3, 0.5, smoothAmount);\n\n          vec3 col = mix(uColor1, uColor2, mixer1);\n          col = mix(col, uColor3, mixer2);\n          col = mix(col, uColor4, mixer3 * 0.4);\n\n          col *= uColorIntensity;\n\n          // --- Adaptive transparency based on brightness ---\n          float luminance = dot(col, vec3(0.299, 0.587, 0.114));\n          float adaptiveAlpha = mix(0.25, 0.75, 1.0 - luminance);\n\n          gl_FragColor = vec4(col, adaptiveAlpha);\n        }\n      ";
            const camera = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OrthographicCamera"](-1, 1, 1, -1, 0, 1);
            const renderer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["WebGLRenderer"]({
                antialias: true,
                alpha: true
            });
            renderer.setClearColor(0x000000, 0); // transparent bg
            rendererRef.current = renderer;
            renderer.setSize(window.innerWidth, window.innerHeight);
            canvasRef.current.appendChild(renderer.domElement);
            const displayMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderMaterial"]({
                uniforms: {
                    iTime: {
                        value: 0
                    },
                    iResolution: {
                        value: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](window.innerWidth, window.innerHeight)
                    },
                    uDistortionAmount: {
                        value: 2.5
                    },
                    uColor1: {
                        value: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0.72, 1.0, 0.96)
                    },
                    uColor2: {
                        value: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0.43, 0.20, 0.40)
                    },
                    uColor3: {
                        value: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0.0, 0.2, 1.0)
                    },
                    uColor4: {
                        value: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0.4, 0.82, 0.99)
                    },
                    uColorIntensity: {
                        value: 1.0
                    },
                    uSoftness: {
                        value: 1.0
                    }
                },
                vertexShader,
                fragmentShader: displayShader,
                transparent: true
            });
            const geometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlaneGeometry"](2, 2);
            const displayPlane = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](geometry, displayMaterial);
            function animate() {
                requestAnimationFrame(animate);
                displayMaterial.uniforms.iTime.value = performance.now() * 0.001;
                renderer.render(displayPlane, camera);
            }
            const handleResize = {
                "BgComponent.useEffect.handleResize": ()=>{
                    const width = window.innerWidth;
                    const height = window.innerHeight;
                    renderer.setSize(width, height);
                    displayMaterial.uniforms.iResolution.value.set(width, height);
                }
            }["BgComponent.useEffect.handleResize"];
            window.addEventListener("resize", handleResize);
            animate();
            return ({
                "BgComponent.useEffect": ()=>{
                    window.removeEventListener("resize", handleResize);
                    renderer.dispose();
                    geometry.dispose();
                    displayMaterial.dispose();
                    rendererRef.current = null;
                }
            })["BgComponent.useEffect"];
        }
    }["BgComponent.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: "pointer-events-none fixed inset-0 -z-10",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: canvasRef,
            className: "absolute inset-0"
        }, void 0, false, {
            fileName: "[project]/mokshainvestment/components/BgComponent.tsx",
            lineNumber: 128,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/mokshainvestment/components/BgComponent.tsx",
        lineNumber: 127,
        columnNumber: 7
    }, this);
}
_s(BgComponent, "JXCQorLGQa3UE+sb6D9IzLx9HJM=");
_c = BgComponent;
var _c;
__turbopack_context__.k.register(_c, "BgComponent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=mokshainvestment_components_BgComponent_tsx_8cbd3023._.js.map