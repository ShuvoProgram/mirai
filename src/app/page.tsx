"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { ChevronRight } from 'lucide-react';
import { FadeIn } from '@/components/ui/FadeIn';
import { Button } from '@/components/ui/Button';
import { SpotlightCard } from '@/components/ui/SpotlightCard';
import { HeroGeometricBackground } from '@/components/ui/shape-landing-hero';
import { HeroDashboard } from '@/components/visuals/HeroDashboard';
import { BenchmarkGraph } from '@/components/visuals/BenchmarkGraph';
import { ArchitectureVisual } from '@/components/visuals/ArchitectureVisual';
import { UseCases } from '@/components/sections/UseCases';
import { IntegrationSection } from '@/components/sections/IntegrationSection';
import { Testimonials } from '@/components/sections/Testimonials';
import { FAQ } from '@/components/sections/FAQ';
import { Zap, BarChart2, Shield, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import InferenceRoutingVisual from '@/components/ui/inference-routing-visual';


export default function HomePage() {
  const router = useRouter();

  const navigate = (path: string) => {
    router.push(path);
  }

  return (
    <div className="pt-32">
      {/* Background Ambience */}
      <div className="fixed inset-0 z-[-1] bg-[#020202]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute top-0 left-0 right-0 h-[500px] bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))]" />
      </div>

      {/* Hero Section */}
      <HeroDashboard />
      {/* Social Proof */}
      <section className="py-12 border-y border-white/5 bg-white/[0.01] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative">
          <p className="text-center text-xs font-semibold text-gray-500 uppercase tracking-widest mb-8">Powering next-gen AI platforms</p>

          <div className="relative flex overflow-hidden mask-gradient">
            {/* Left/Right Fade Masks */}
            <div className="absolute top-0 bottom-0 left-0 w-24 z-10 bg-gradient-to-r from-[#020202] to-transparent pointer-events-none" />
            <div className="absolute top-0 bottom-0 right-0 w-24 z-10 bg-gradient-to-l from-[#020202] to-transparent pointer-events-none" />

            <motion.div
              className="flex gap-16 md:gap-24 whitespace-nowrap"
              animate={{ x: "-50%" }}
              transition={{
                duration: 40,
                ease: "linear",
                repeat: Infinity
              }}
              style={{ width: "max-content" }}
            >
              {[...Array(4)].map((_, setIndex) => (
                <React.Fragment key={setIndex}>
                  {['ACME Corp', 'Nebula', 'Vertex', 'Synthetix', 'Orbit', 'Hyperion', 'Pulsar', 'Echo'].map((logo, i) => (
                    <div key={`${setIndex}-${i}`} className="flex items-center gap-3 font-bold text-xl text-white opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-default group">
                      <div className="w-5 h-5 bg-white rounded-full opacity-60 group-hover:opacity-100 transition-opacity" />
                      {logo}
                    </div>
                  ))}
                </React.Fragment>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature Grid (Bento) */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Latency belongs local.</h2>
            <p className="text-xl text-gray-400 max-w-2xl">
              Stop routing every user interaction through a centralized API.
              Push intelligence to the edge for instant, zero-cost responses.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 auto-rows-[400px]">
            {/* Card 1: Benchmark */}
            <SpotlightCard className="md:col-span-2 rounded-3xl p-10 flex flex-col">
              <div className="mb-auto">
                <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 border border-blue-500/20">
                  <BarChart2 size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Metal-Accelerated Performance</h3>
                <p className="text-gray-400 max-w-lg">
                  Built on top of Apple&apos;s MLX and CoreML frameworks. We utilize custom kernels to achieve 3x throughput compared to standard Python runtimes.
                </p>
              </div>
              <div className="mt-8">
                <BenchmarkGraph />
              </div>
            </SpotlightCard>

            {/* Card 2: Offline */}
            <SpotlightCard className="rounded-3xl p-10 flex flex-col justify-between bg-gradient-to-b from-gray-900 to-black">
              <div>
                <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center text-green-400 mb-6 border border-green-500/20">
                  <Zap size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Offline First</h3>
                <p className="text-gray-400 text-sm">
                  Models are cached locally. Your app works on airplanes, subways, and remote locations.
                </p>
              </div>
              <div className="relative mt-8 h-32 w-full rounded-xl bg-gray-800/50 overflow-hidden border border-white/5">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map(i => (
                      <motion.div
                        key={i}
                        animate={{ height: [10, 30, 10] }}
                        transition={{ duration: 1, repeat: Infinity, delay: i * 0.1 }}
                        className="w-2 bg-green-500 rounded-full"
                      />
                    ))}
                  </div>
                </div>
                <div className="absolute bottom-2 left-2 text-[10px] text-green-400 font-mono">NO SIGNAL • PROCESSING</div>
              </div>
            </SpotlightCard>

            {/* Card 3: Privacy */}
            <SpotlightCard className="rounded-3xl p-10 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 mb-6 border border-purple-500/20">
                  <Shield size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Native Privacy</h3>
                <p className="text-gray-400 text-sm">
                  PII never leaves the user&apos;s device. Compliant with HIPAA, GDPR, and SOC2 by design.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-2 mt-4">
                {['End-to-End Encrypted', 'Local Storage', 'Audit Logs', 'Zero Retention'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-gray-500 border border-white/5 p-2 rounded bg-black/50">
                    <Check size={10} className="text-purple-400" /> {item}
                  </div>
                ))}
              </div>
            </SpotlightCard>

            {/* Card 4: Architecture */}
            <SpotlightCard className="md:col-span-2 rounded-3xl p-10 flex flex-col">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">Smart Routing Engine</h3>
                <p className="text-gray-400 max-w-lg">
                  Our SDK automatically profiles the user&apos;s hardware. If the device is too slow, we seamlessly fallback to your cloud provider.
                </p>
              </div>
              <ArchitectureVisual />
            </SpotlightCard>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <UseCases />

      {/* Integration Code */}
      <IntegrationSection />

      {/* Card 5: Inference Routing */}
      <div className="md:col-span-3 rounded-3xl p-10 flex flex-col items-center">
        <div className="mb-4 text-center">
          <h3 className="text-2xl font-bold text-white mb-2">Unified Inference Layer</h3>
          <p className="text-gray-400 max-w-lg mx-auto">
            Route inference requests across NPUs, GPUs, and cloud endpoints with a single API call. Automatic failover keeps your app running.
          </p>
        </div>
        <InferenceRoutingVisual
          className="mt-4"
          badgeTexts={{
            first: "NPU",
            second: "GPU",
            third: "Cloud",
            fourth: "Fallback"
          }}
          buttonTexts={{
            first: "llama-3-8b",
            second: "whisper-v3"
          }}
          title="Intelligent inference routing across compute targets"
          circleText="SDK"
          lightColor="#3B82F6"
        />
      </div>

      {/* Testimonials */}
      <Testimonials />

      {/* FAQ */}
      <FAQ />

      {/* Pricing / CTA */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto relative group">
          {/* Rainbow Glow Effect (Blur Layer) */}
          <motion.div
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -inset-1 rounded-[3.2rem] bg-[linear-gradient(45deg,#ff3d00,#ffea00,#00e676,#2979ff,#d500f9,#ff3d00)] opacity-30 blur-2xl group-hover:opacity-50 transition duration-500"
            style={{ backgroundSize: '300% 300%' }}
          />

          {/* Rainbow Border (Sharp Layer) */}
          <motion.div
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -inset-[2px] rounded-[3.1rem] bg-[linear-gradient(45deg,#ff3d00,#ffea00,#00e676,#2979ff,#d500f9,#ff3d00)] opacity-100"
            style={{ backgroundSize: '300% 300%' }}
          />

          <div className="relative rounded-[3rem] bg-[#050505] p-12 md:p-24 text-center overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">Start for free,<br />scale with confidence.</h2>
              <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                Generous free tier for prototypes. Pay-as-you-go for production.
                Enterprises get custom SLA and private VPCs.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button className="h-14 px-10 text-lg" onClick={() => navigate('contact')}>Start Free Project</Button>
                <Button variant="outline" className="h-14 px-10 text-lg" onClick={() => navigate('contact')}>Contact Sales</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}