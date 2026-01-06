"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { DocCodeBlock } from '@/components/ui/DocCodeBlock';
import { FadeIn } from '@/components/ui/FadeIn';
import { Terminal, Lock, Zap, Box, ChevronRight, Hash } from 'lucide-react';

const sections = [
  { id: 'intro', title: 'Introduction', icon: Terminal },
  { id: 'auth', title: 'Authentication', icon: Lock },
  { id: 'chat', title: 'Chat Completions', icon: Zap },
  { id: 'models', title: 'List Models', icon: Box },
];

export default function ApiReferencePage() {
  const [activeSection, setActiveSection] = useState('intro');

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#020202] pt-24 flex">
      {/* Mobile Navigation */}
      <div className="lg:hidden fixed left-0 right-0 top-16 z-30 bg-[#020202]/90 backdrop-blur-md border-b border-white/5 overflow-x-auto no-scrollbar">
        <div className="flex items-center gap-2 p-4 min-w-max">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium transition-colors border ${activeSection === section.id
                ? 'bg-blue-500/10 text-blue-400 border-blue-500/20'
                : 'text-gray-400 border-transparent hover:text-white hover:bg-white/5'
                }`}
            >
              <section.icon size={14} />
              {section.title}
            </button>
          ))}
        </div>
      </div>

      {/* Sidebar Navigation */}
      <div className="hidden lg:block w-64 fixed left-0 top-24 bottom-0 border-r border-white/5 bg-[#020202] overflow-y-auto z-20">
        <div className="p-6">
          <h2 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-6">API Reference</h2>
          <nav className="space-y-1">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${activeSection === section.id
                  ? 'bg-blue-500/10 text-blue-400'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
              >
                <section.icon size={16} />
                {section.title}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 lg:pl-64 pt-12 lg:pt-0">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 lg:py-12">

          {/* Introduction */}
          <section id="intro" className="mb-24 scroll-mt-32">
            <FadeIn>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                  <Terminal size={24} />
                </div>
                <h1 className="text-3xl lg:text-4xl font-bold text-white">API Reference</h1>
              </div>
              <p className="text-lg lg:text-xl text-gray-400 leading-relaxed mb-8 max-w-3xl">
                The Mirai API is designed to be a drop-in replacement for OpenAI's API.
                You can use standard client libraries by simply changing the <code className="text-blue-400 bg-blue-500/10 px-1.5 py-0.5 rounded text-sm">baseURL</code>.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="min-w-0">
                  <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    Base URL
                  </h3>
                  <div className="bg-[#0A0A0A] border border-white/10 rounded-lg p-4 font-mono text-sm text-gray-300 overflow-x-auto">
                    https://api.mirai.com/v1
                  </div>
                </div>
                <div className="min-w-0">
                  <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-purple-500" />
                    Local URL
                  </h3>
                  <div className="bg-[#0A0A0A] border border-white/10 rounded-lg p-4 font-mono text-sm text-gray-300 overflow-x-auto">
                    http://localhost:3000/v1
                  </div>
                </div>
              </div>
            </FadeIn>
          </section>

          {/* Authentication */}
          <section id="auth" className="mb-24 scroll-mt-32 border-t border-white/5 pt-12 lg:pt-16">
            <div className="grid xl:grid-cols-2 gap-8 lg:gap-12">
              <div>
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <Lock className="text-gray-500" size={24} />
                  Authentication
                </h2>
                <p className="text-gray-400 mb-6">
                  The Mirai API uses API keys for authentication. Visit your <span className="text-white underline cursor-pointer">dashboard</span> to view and manage your API keys.
                </p>
                <p className="text-gray-400 mb-6">
                  Authentication to the API is performed via HTTP Bearer Auth. Provide your API key as the Bearer token in the Authorization header.
                </p>

                <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4 mb-6">
                  <p className="text-yellow-200 text-sm">
                    <strong>Warning:</strong> Your API keys carry many privileges, so be sure to keep them secure! Do not share your secret API keys in publicly accessible areas such as GitHub, client-side code, and so forth.
                  </p>
                </div>
              </div>
              <div>
                <div className="sticky top-32">
                  <DocCodeBlock
                    lang="bash"
                    code={`curl https://api.mirai.com/v1/models \\
  -H "Authorization: Bearer $MIRAI_API_KEY"`}
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Chat Completions */}
          <section id="chat" className="mb-24 scroll-mt-32 border-t border-white/5 pt-12 lg:pt-16">
            <div className="grid xl:grid-cols-2 gap-8 lg:gap-12">
              <div className="min-w-0">
                <div className="flex items-center gap-3 mb-6">
                  <span className="px-2 py-1 rounded bg-green-500/10 text-green-400 text-xs font-mono font-bold border border-green-500/20">POST</span>
                  <h2 className="text-2xl font-bold text-white">Create chat completion</h2>
                </div>
                <p className="text-gray-400 mb-8">
                  Creates a model response for the given chat conversation.
                </p>

                <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">Body Parameters</h3>
                <div className="space-y-6">
                  {[
                    { name: 'model', type: 'string', req: true, desc: 'ID of the model to use. See the model endpoint compatibility table for details on which models work with the Chat API.' },
                    { name: 'messages', type: 'array', req: true, desc: 'A list of messages comprising the conversation so far.' },
                    { name: 'temperature', type: 'number', req: false, desc: 'What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random.' },
                    { name: 'stream', type: 'boolean', req: false, desc: 'If set, partial message deltas will be sent, like in ChatGPT. Tokens will be sent as data-only server-sent events.' },
                  ].map((param) => (
                    <div key={param.name} className="border-b border-white/5 pb-6 last:border-0">
                      <div className="flex items-baseline gap-3 mb-2 flex-wrap">
                        <span className="font-mono text-blue-400 font-bold">{param.name}</span>
                        <span className="text-xs text-gray-500 font-mono">{param.type}</span>
                        {param.req && <span className="text-xs text-red-400 font-mono">Required</span>}
                      </div>
                      <p className="text-sm text-gray-400 leading-relaxed">{param.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="min-w-0">
                <div className="sticky top-32 space-y-6">
                  <DocCodeBlock
                    lang="bash"
                    code={`curl https://api.mirai.com/v1/chat/completions \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer $MIRAI_API_KEY" \\
  -d '{
    "model": "llama-3-70b",
    "messages": [
      {
        "role": "system",
        "content": "You are a helpful assistant."
      },
      {
        "role": "user",
        "content": "Hello!"
      }
    ]
  }'`}
                  />

                  <div className="bg-[#0A0A0A] border border-white/10 rounded-xl overflow-hidden">
                    <div className="px-4 py-2 border-b border-white/5 bg-white/5 text-xs font-mono text-gray-500">
                      Response
                    </div>
                    <div className="p-4 overflow-x-auto">
                      <pre className="font-mono text-sm text-green-400/80 leading-relaxed">
                        {`{
  "id": "chatcmpl-123",
  "object": "chat.completion",
  "created": 1677652288,
  "model": "llama-3-70b",
  "choices": [{
    "index": 0,
    "message": {
      "role": "assistant",
      "content": "Hello there, how may I assist you today?"
    },
    "finish_reason": "stop"
  }],
  "usage": {
    "prompt_tokens": 9,
    "completion_tokens": 12,
    "total_tokens": 21
  }
}`}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* List Models */}
          <section id="models" className="mb-24 scroll-mt-32 border-t border-white/5 pt-12 lg:pt-16">
            <div className="grid xl:grid-cols-2 gap-8 lg:gap-12">
              <div className="min-w-0">
                <div className="flex items-center gap-3 mb-6">
                  <span className="px-2 py-1 rounded bg-blue-500/10 text-blue-400 text-xs font-mono font-bold border border-blue-500/20">GET</span>
                  <h2 className="text-2xl font-bold text-white">List models</h2>
                </div>
                <p className="text-gray-400 mb-8">
                  Lists the currently available models, and provides basic information about each one such as the owner and availability.
                </p>
              </div>

              <div className="min-w-0">
                <div className="sticky top-32 space-y-6">
                  <DocCodeBlock
                    lang="bash"
                    code={`curl https://api.mirai.com/v1/models \\
  -H "Authorization: Bearer $MIRAI_API_KEY"`}
                  />

                  <div className="bg-[#0A0A0A] border border-white/10 rounded-xl overflow-hidden">
                    <div className="px-4 py-2 border-b border-white/5 bg-white/5 text-xs font-mono text-gray-500">
                      Response
                    </div>
                    <div className="p-4 overflow-x-auto">
                      <pre className="font-mono text-sm text-green-400/80 leading-relaxed">
                        {`{
  "object": "list",
  "data": [
    {
      "id": "llama-3-70b",
      "object": "model",
      "created": 1686935002,
      "owned_by": "meta"
    },
    {
      "id": "mistral-large",
      "object": "model",
      "created": 1686935002,
      "owned_by": "mistral-ai"
    }
  ]
}`}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
