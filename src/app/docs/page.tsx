"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DocNote } from '@/components/ui/DocNote';
import { DocCodeBlock } from '@/components/ui/DocCodeBlock';
import { DocArchitectureVisual } from '@/components/visuals/DocArchitectureVisual';
import { DocPrivacyVisual } from '@/components/visuals/DocPrivacyVisual';
import { Zap, Cloud, Check, AlertTriangle, Lock, Shield } from 'lucide-react';

export default function DocsPage() {
    const [activeDoc, setActiveDoc] = useState("Introduction");
    const [installTab, setInstallTab] = useState("npm");

    const docContent: Record<string, React.ReactNode> = {
        "Introduction": (
            <>
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">Introduction to Mirai</h1>
                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                    Mirai is the unified inference layer for the intelligent edge. It enables developers to deploy and run state-of-the-art open source models directly on user devices with a single API, handling hardware acceleration (NPU/GPU), quantization, and model caching automatically.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                    <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-colors">
                        <Zap className="text-blue-400 mb-3" size={24} />
                        <div className="text-white font-bold mb-2">Edge First</div>
                        <p className="text-sm text-gray-400 leading-relaxed">
                            Requests are routed to the local device NPU by default. This ensures zero latency, zero marginal cost, and full offline capability.
                        </p>
                    </div>
                    <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-colors">
                        <Cloud className="text-purple-400 mb-3" size={24} />
                        <div className="text-white font-bold mb-2">Cloud Fallback</div>
                        <p className="text-sm text-gray-400 leading-relaxed">
                            Seamlessly routes complex reasoning tasks or requests from underpowered devices to our optimized server-side GPU clusters.
                        </p>
                    </div>
                </div>
                <DocNote type="tip">
                    Mirai is compatible with <strong>iOS 16+</strong>, <strong>Android 12+</strong>, and modern browsers supporting <strong>WebGPU</strong>.
                </DocNote>
            </>
        ),
        "Installation": (
            <>
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">Installation</h1>
                <p className="text-gray-400 mb-6">Install the Mirai SDK via your preferred package manager. We support Node.js, Python, and Rust.</p>

                <div className="flex gap-4 mb-4 border-b border-white/10">
                    {['npm', 'pip', 'cargo'].map(tab => (
                        <button
                            key={tab}
                            onClick={() => setInstallTab(tab)}
                            className={`pb-3 text-sm font-medium transition-colors border-b-2 ${installTab === tab ? 'text-white border-blue-500' : 'text-gray-500 border-transparent hover:text-gray-300'}`}
                        >
                            {tab === 'npm' ? 'Node.js' : tab === 'pip' ? 'Python' : 'Rust'}
                        </button>
                    ))}
                </div>

                {installTab === 'npm' && <DocCodeBlock lang="bash" code="npm install mirai-sdk @mirai/react" />}
                {installTab === 'pip' && <DocCodeBlock lang="bash" code="pip install mirai-python" />}
                {installTab === 'cargo' && <DocCodeBlock lang="bash" code="cargo add mirai-core" />}

                <h3 className="text-xl font-bold text-white mt-8 mb-4">Environment Setup</h3>
                <p className="text-gray-400 mb-4">You&apos;ll need an API key to access our model registry and cloud fallback services.</p>
                <DocCodeBlock lang="env" code="MIRAI_API_KEY=mk_live_..." />
            </>
        ),
        "Quickstart": (
            <>
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">Quickstart</h1>
                <p className="text-gray-400 mb-8">Initialize the client and start streaming tokens immediately. This example shows how to set up a basic chat completion loop.</p>

                <h3 className="text-lg font-bold text-white mb-3">1. Initialize Client</h3>
                <p className="text-gray-400 mb-4 text-sm">Create a client instance. This will automatically trigger a background hardware check to determine device capabilities.</p>
                <DocCodeBlock lang="javascript" code={`import { Mirai } from 'mirai-sdk';\n\nconst client = new Mirai({\n  apiKey: process.env.MIRAI_API_KEY\n});`} />

                <h3 className="text-lg font-bold text-white mt-8 mb-3">2. Generate Text</h3>
                <p className="text-gray-400 mb-4 text-sm">Use the `chat.completions.create` method. If the model isn&apos;t present, it will auto-download (with progress events).</p>
                <DocCodeBlock lang="javascript" code={`const stream = await client.chat.completions.create({\n  model: 'llama-3-8b',\n  messages: [{ role: 'user', content: 'Explain quantum computing' }],\n  stream: true\n});\n\nfor await (const chunk of stream) {\n  process.stdout.write(chunk.choices[0].delta.content);\n}`} />

                <DocNote type="warning">
                    First-time model downloads can range from <strong>1GB to 4GB</strong>. Ensure you handle loading states in your UI.
                </DocNote>
            </>
        ),
        "Architecture": (
            <>
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">Architecture</h1>
                <p className="text-gray-400 mb-8">
                    Mirai acts as an intelligent router between your application code and the underlying execution hardware. It abstracts away the complexity of
                    selecting the right backend (CoreML, Vulkan, CUDA) and managing memory.
                </p>

                <DocArchitectureVisual />

                <div className="space-y-6 mt-8">
                    <div>
                        <h4 className="text-white font-bold mb-2">1. The Router</h4>
                        <p className="text-sm text-gray-400 leading-relaxed">
                            The router analyzes the prompt complexity and device status (battery, thermal state). Simple prompts go to the NPU; complex reasoning routes to the Cloud.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-2">2. Hardware Abstraction Layer (HAL)</h4>
                        <p className="text-sm text-gray-400 leading-relaxed">
                            We compile models into a unified intermediate representation (MIR) that runs on our custom runtime, which binds directly to Metal, WebGPU, or CUDA.
                        </p>
                    </div>
                </div>
            </>
        ),
        "Inference Engine": (
            <>
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">Inference Engine</h1>
                <p className="text-gray-400 mb-6">Our engine uses a custom JIT compiler to optimize transformer weights for the specific mobile chipset detected at runtime.</p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                        <div className="text-green-400 font-mono text-xs mb-1">INT4 Quantization</div>
                        <div className="text-white font-bold">4.2 GB</div>
                        <div className="text-gray-500 text-xs">Memory Footprint</div>
                    </div>
                    <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                        <div className="text-blue-400 font-mono text-xs mb-1">Context Length</div>
                        <div className="text-white font-bold">8192</div>
                        <div className="text-gray-500 text-xs">Tokens</div>
                    </div>
                </div>
                <ul className="space-y-4">
                    <li className="flex items-start gap-3"><Check className="text-green-400 mt-1" size={16} /> <span className="text-gray-300">Apple Neural Engine Support (A14+)</span></li>
                    <li className="flex items-start gap-3"><Check className="text-green-400 mt-1" size={16} /> <span className="text-gray-300">Android NNAPI (Pixel, Samsung)</span></li>
                    <li className="flex items-start gap-3"><Check className="text-green-400 mt-1" size={16} /> <span className="text-gray-300">WebGPU (Chrome, Safari, Firefox)</span></li>
                </ul>
            </>
        ),
        "Model Caching": (
            <>
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">Model Caching</h1>
                <p className="text-gray-400 mb-6">Models are downloaded once and cached in the device&apos;s persistent storage. Subsequent loads are instant (typically &lt;100ms).</p>
                <div className="bg-yellow-500/10 border border-yellow-500/20 p-4 rounded-xl text-yellow-200 text-sm mb-6 flex gap-3">
                    <AlertTriangle size={18} className="shrink-0" />
                    <div>
                        <strong>Storage Quotas:</strong> We automatically manage storage. Old, unused models are evicted based on an LRU (Least Recently Used) policy to respect user space.
                    </div>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Pre-warming</h3>
                <p className="text-gray-400 text-sm mb-4">You can pre-warm models in the background to ensure zero latency when the user engages.</p>
                <DocCodeBlock lang="javascript" code="client.models.preload(['llama-3-8b', 'whisper-v3']);" />
            </>
        ),
        "Privacy": (
            <>
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">Privacy & Security</h1>
                <p className="text-gray-400 mb-8">
                    Mirai is designed for &quot;Local-First&quot; privacy. By default, inference happens entirely within the OS sandbox.
                    No data leaves the device unless you explicitly enable Cloud Fallback.
                </p>

                <DocPrivacyVisual />

                <div className="grid gap-4 mt-8">
                    <div className="p-4 border border-green-500/20 bg-green-500/5 rounded-xl">
                        <h4 className="font-bold text-green-400 mb-1 flex items-center gap-2"><Lock size={14} /> Local Processing</h4>
                        <p className="text-sm text-gray-400">Inputs are processed in RAM and discarded immediately after generation. No disk logging.</p>
                    </div>
                    <div className="p-4 border border-blue-500/20 bg-blue-500/5 rounded-xl">
                        <h4 className="font-bold text-blue-400 mb-1 flex items-center gap-2"><Shield size={14} /> Cloud Encryption</h4>
                        <p className="text-sm text-gray-400">If using Cloud Fallback, data is E2E encrypted (TLS 1.3) and anonymized before processing.</p>
                    </div>
                </div>
            </>
        ),
        "Cloud Fallback": (
            <>
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">Cloud Fallback</h1>
                <p className="text-gray-400 mb-6">Configure rules to route complex queries to the cloud while keeping simple tasks local.</p>
                <DocCodeBlock lang="javascript" code={`const client = new Mirai({\n  fallback: {\n    trigger: 'latency_threshold_exceeded',\n    threshold: 500, // ms\n    provider: 'openai'\n  }\n});`} />

                <h3 className="text-lg font-bold text-white mt-8 mb-4">Trigger Conditions</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-400 text-sm">
                    <li><code className="bg-white/10 px-1 rounded text-white">latency_threshold</code>: If local inference is too slow.</li>
                    <li><code className="bg-white/10 px-1 rounded text-white">memory_pressure</code>: If device RAM is critically low.</li>
                    <li><code className="bg-white/10 px-1 rounded text-white">model_missing</code>: If the local model hasn't finished downloading.</li>
                </ul>
            </>
        ),
        "Client": (
            <>
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">Client API</h1>
                <p className="text-gray-400 mb-4">The main entry point for the SDK.</p>
                <h3 className="text-xl font-bold text-white mt-8 mb-4">Constructor</h3>
                <p className="text-sm font-mono bg-white/5 inline-block px-2 py-1 rounded text-blue-300 mb-4">new Mirai(config: MiraiConfig)</p>
                <p className="text-gray-400">Creates a new instance of the engine. This usually triggers a background hardware check.</p>

                <div className="mt-6">
                    <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-3">Config Options</h4>
                    <div className="space-y-3">
                        {[
                            { name: "apiKey", type: "string", desc: "Your project API key." },
                            { name: "debug", type: "boolean", desc: "Enable verbose logging." },
                            { name: "offlineMode", type: "boolean", desc: "Force disable all network requests." },
                        ].map((prop, i) => (
                            <div key={i} className="flex gap-4 border-b border-white/5 pb-3">
                                <code className="text-blue-400 w-24 shrink-0">{prop.name}</code>
                                <code className="text-purple-400 w-20 shrink-0">{prop.type}</code>
                                <span className="text-gray-400 text-sm">{prop.desc}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </>
        ),
        "Chat": (
            <>
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">Chat Completions</h1>
                <p className="text-gray-400 mb-4">Generate text responses using LLMs.</p>
                <h3 className="text-xl font-bold text-white mt-8 mb-4">create()</h3>
                <p className="text-gray-400 mb-4">Returns a stream or promise resolving to the model output.</p>
                <table className="w-full text-left text-sm text-gray-400">
                    <thead className="border-b border-white/10 text-white">
                        <tr><th className="py-2">Param</th><th>Type</th><th>Description</th></tr>
                    </thead>
                    <tbody className="font-mono text-xs">
                        <tr className="border-b border-white/5"><td className="py-3 text-blue-400">model</td><td>string</td><td>ID of the model to use</td></tr>
                        <tr className="border-b border-white/5"><td className="py-3 text-blue-400">messages</td><td>Message[]</td><td>History of the conversation</td></tr>
                        <tr className="border-b border-white/5"><td className="py-3 text-blue-400">temperature</td><td>number</td><td>Randomness (0.0 - 2.0)</td></tr>
                        <tr className="border-b border-white/5"><td className="py-3 text-blue-400">stream</td><td>boolean</td><td>Return a readable stream</td></tr>
                    </tbody>
                </table>
            </>
        ),
        "Audio": (
            <>
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">Audio API</h1>
                <p className="text-gray-400 mb-6">Speech-to-text and Text-to-speech capabilities via Whisper.</p>
                <DocCodeBlock lang="javascript" code={`// Transcribe audio file\nconst text = await client.audio.transcribe({\n  file: audioBuffer,\n  model: 'whisper-tiny',\n  language: 'en'\n});`} />
                <DocNote>
                    Audio processing is heavily optimized for Apple Neural Engine. Expect <strong>20x real-time</strong> speeds on M-series chips.
                </DocNote>
            </>
        ),
        "Image": (
            <>
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">Image Generation</h1>
                <p className="text-gray-400 mb-6">Generate images locally using Stable Diffusion CoreML optimization.</p>
                <DocCodeBlock lang="javascript" code={`const image = await client.images.generate({\n  prompt: "A cyberpunk city at night",\n  steps: 20\n});`} />
            </>
        )
    };

    const navItems = [
        { section: "Getting Started", items: ["Introduction", "Installation", "Quickstart", "Architecture"] },
        { section: "Core Concepts", items: ["Inference Engine", "Model Caching", "Privacy", "Cloud Fallback"] },
        { section: "API Reference", items: ["Client", "Chat", "Audio", "Image"] },
    ];

    return (
        <div className="pt-24 md:pt-32 pb-20 px-4 md:px-6 min-h-screen max-w-7xl mx-auto flex flex-col md:flex-row gap-8 md:gap-12">
            {/* Sidebar */}
            <div className="w-full md:w-64 flex-shrink-0 space-y-8 h-fit md:sticky md:top-32 bg-[#020202]/80 md:bg-transparent backdrop-blur-md md:backdrop-blur-none p-4 md:p-0 rounded-xl md:rounded-none border border-white/10 md:border-none">
                {navItems.map((group, i) => (
                    <div key={i}>
                        <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">{group.section}</h4>
                        <ul className="space-y-1 border-l border-white/10 pl-4">
                            {group.items.map(item => (
                                <li key={item}>
                                    <button
                                        onClick={() => setActiveDoc(item)}
                                        className={`text-sm text-left transition-colors w-full py-1 ${activeDoc === item ? 'text-blue-400 font-medium border-l-2 border-blue-400 -ml-[17px] pl-4' : 'text-gray-400 hover:text-white'}`}
                                    >
                                        {item}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            {/* Main Content */}
            <div className="flex-1 max-w-3xl min-h-[60vh]">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeDoc}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                    >
                        {docContent[activeDoc]}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}
