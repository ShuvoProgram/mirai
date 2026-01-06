"use client";

import React from 'react';
import { HeroGeometricBackground } from '@/components/ui/shape-landing-hero';
import { FadeIn } from '@/components/ui/FadeIn';
import { Button } from '@/components/ui/Button';
import { MapPin, Clock, DollarSign } from 'lucide-react';

const jobs = [
  {
    title: "Senior Systems Engineer (Rust/C++)",
    department: "Core Engine",
    location: "San Francisco / Remote",
    type: "Full-time",
    salary: "$180k - $260k + Equity"
  },
  {
    title: "Machine Learning Research Scientist",
    department: "Model Optimization",
    location: "New York / Remote",
    type: "Full-time",
    salary: "$200k - $300k + Equity"
  },
  {
    title: "Developer Advocate",
    department: "Growth",
    location: "Remote",
    type: "Full-time",
    salary: "$140k - $200k + Equity"
  },
  {
    title: "Frontend Engineer (React/WebGL)",
    department: "Platform",
    location: "San Francisco",
    type: "Full-time",
    salary: "$160k - $220k + Equity"
  }
];

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-[#020202] pt-32 pb-20">
      <HeroGeometricBackground className="z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              Join the <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Revolution</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              We're a team of hackers, researchers, and builders obsessed with making AI accessible to everyone. If you love solving hard problems at the intersection of systems and ML, we want to hear from you.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[
            { title: "Deep Work", desc: "We prioritize long blocks of uninterrupted time. No unnecessary meetings." },
            { title: "Open Source", desc: "We build in public. Our core runtime is open source and we contribute back to the community." },
            { title: "Global Team", desc: "We hire the best talent regardless of location. We are a remote-first company." }
          ].map((value, i) => (
            <FadeIn key={i} delay={0.2 + (i * 0.1)}>
              <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-400">{value.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.5}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8">Open Positions</h2>
            <div className="space-y-4">
              {jobs.map((job, i) => (
                <div key={i} className="group p-6 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-400">
                      <span className="flex items-center gap-1"><MapPin size={14} /> {job.location}</span>
                      <span className="flex items-center gap-1"><Clock size={14} /> {job.type}</span>
                      <span className="flex items-center gap-1"><DollarSign size={14} /> {job.salary}</span>
                    </div>
                  </div>
                  <Button variant="outline" className="shrink-0">Apply Now</Button>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
