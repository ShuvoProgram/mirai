"use client";

import React from 'react';
import { HeroGeometricBackground } from '@/components/ui/shape-landing-hero';
import { FadeIn } from '@/components/ui/FadeIn';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#020202] pt-32 pb-20">
      <HeroGeometricBackground className="fixed inset-0 z-0" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              Building the <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">Intelligence Layer</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Mirai was founded on a simple belief: AI should be ubiquitous, private, and instant. We are building the infrastructure to make that reality.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <FadeIn delay={0.2}>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white">Our Mission</h2>
              <p className="text-gray-400 leading-relaxed text-lg">
                We are decoupling intelligence from the data center. By optimizing inference for edge devices, we enable applications that are faster, cheaper, and more private than cloud-only alternatives.
              </p>
              <p className="text-gray-400 leading-relaxed text-lg">
                The future of AI is hybrid. Mirai seamlessly orchestrates workloads between local NPUs and cloud GPUs, giving developers the best of both worlds without the complexity.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="relative h-[400px] rounded-2xl overflow-hidden border border-white/10 bg-white/5">
               {/* Placeholder for team/office image */}
               <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                  <span className="text-white/20 font-mono text-xl">Mission Visual</span>
               </div>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.4}>
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">The Team</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: "Alex Chen", role: "CEO & Co-founder", bio: "Ex-Google Brain. Led the TensorFlow Lite team." },
                { name: "Sarah Miller", role: "CTO & Co-founder", bio: "PhD from Stanford. Specialized in sparse model optimization." },
                { name: "David Park", role: "Head of Product", bio: "Previously built developer tools at Vercel and Stripe." }
              ].map((member, i) => (
                <div key={i} className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors">
                  <div className="w-20 h-20 rounded-full bg-gray-800 mb-4 mx-auto overflow-hidden relative">
                     <div className="absolute inset-0 bg-gradient-to-tr from-gray-700 to-gray-600" />
                  </div>
                  <h3 className="text-xl font-bold text-white text-center mb-1">{member.name}</h3>
                  <p className="text-blue-400 text-sm text-center mb-4 font-mono">{member.role}</p>
                  <p className="text-gray-400 text-center text-sm">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.5}>
           <div className="text-center border-t border-white/10 pt-20">
              <h2 className="text-3xl font-bold text-white mb-6">Backed by the best</h2>
              <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale">
                 {/* Placeholder logos */}
                 <div className="text-2xl font-bold text-white">SEQUOIA</div>
                 <div className="text-2xl font-bold text-white">ANDREESSEN HOROWITZ</div>
                 <div className="text-2xl font-bold text-white">Y COMBINATOR</div>
                 <div className="text-2xl font-bold text-white">INDEX VENTURES</div>
              </div>
           </div>
        </FadeIn>
      </div>
    </div>
  );
}
