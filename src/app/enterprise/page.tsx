"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { SpotlightCard } from '@/components/ui/SpotlightCard';
import { FadeIn } from '@/components/ui/FadeIn';
import { Shield, Cloud, Settings, Activity, Lock, Users, Check } from 'lucide-react';

export default function EnterprisePage() {
    const router = useRouter();
    const navigate = (path: string) => router.push(path);

    return (
        <div className="pt-32 pb-20 px-6 min-h-screen">
            {/* Hero */}
            <div className="max-w-7xl mx-auto text-center mb-24 relative">
                {/* Background Effects */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-900/20 blur-[100px] rounded-full pointer-events-none" />

                <FadeIn>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 mb-8">
                        <Shield size={14} className="text-blue-400" />
                        <span className="text-xs font-semibold text-blue-400 tracking-wide uppercase">Enterprise Ready</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
                        Intelligence at <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to-blue-600">Global Scale.</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
                        The infrastructure to deploy, manage, and secure on-device AI across millions of endpoints.
                        SOC2 Type II compliant.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Button className="h-12 px-8" onClick={() => navigate('contact')}>Talk to Sales</Button>
                        <Button variant="outline" className="h-12 px-8">View Compliance</Button>
                    </div>
                </FadeIn>
            </div>

            {/* Feature Grid */}
            <div className="max-w-7xl mx-auto mb-32">
                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        { icon: Shield, title: "Bank-Grade Security", desc: "End-to-end encryption for all model weights and telemetry. SSO enforcement via Okta/Azure AD." },
                        { icon: Cloud, title: "Private Cloud Fallback", desc: "Deploy the fallback inference engine in your own AWS/GCP VPC. Data never touches our servers." },
                        { icon: Settings, title: "Custom Model Registry", desc: "Host fine-tuned proprietary models with strict access controls and versioning." },
                        { icon: Activity, title: "Fleet Observability", desc: "Real-time metrics on inference latency, error rates, and model drift across all devices." },
                        { icon: Lock, title: "Compliance Ready", desc: "BAA available for HIPAA workloads. SOC2 Type II and GDPR compliant infrastructure." },
                        { icon: Users, title: "Dedicated Support", desc: "24/7 engineering support with 15-minute SLA for critical incidents." }
                    ].map((feat, i) => (
                        <SpotlightCard key={i} className="p-8 rounded-2xl bg-gray-900/20 border border-white/10 h-full">
                            <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-6">
                                <feat.icon className="text-blue-400" size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{feat.title}</h3>
                            <p className="text-sm text-gray-400 leading-relaxed">{feat.desc}</p>
                        </SpotlightCard>
                    ))}
                </div>
            </div>

            {/* Security/Compliance Badge Bar */}
            <div className="max-w-7xl mx-auto mb-32 border-y border-white/5 py-12 bg-white/[0.01]">
                <div className="text-center mb-8 text-sm font-semibold text-gray-500 uppercase tracking-widest">Security & Compliance</div>
                <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-60">
                    {['SOC2 Type II', 'HIPAA', 'GDPR', 'ISO 27001', 'CCPA'].map((cert) => (
                        <div key={cert} className="flex items-center gap-2 text-white font-mono font-bold text-lg border border-white/10 px-4 py-2 rounded">
                            <Check size={16} className="text-green-400" /> {cert}
                        </div>
                    ))}
                </div>
            </div>

            {/* Comparison Table */}
            <div className="max-w-5xl mx-auto mb-32">
                <h2 className="text-3xl font-bold text-white mb-12 text-center">Plan Comparison</h2>
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-white/10">
                                <th className="py-4 pl-4 text-sm font-medium text-gray-500 uppercase tracking-wider">Feature</th>
                                <th className="py-4 px-8 text-sm font-bold text-white">Starter</th>
                                <th className="py-4 px-8 text-sm font-bold text-white">Pro</th>
                                <th className="py-4 px-8 text-sm font-bold text-blue-400">Enterprise</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-300 text-sm">
                            {[
                                { name: "Monthly Active Devices", start: "10k", pro: "100k", ent: "Unlimited" },
                                { name: "Model Hosting", start: "Public Only", pro: "Public Only", ent: "Custom/Private" },
                                { name: "Cloud Fallback", start: "Shared", pro: "Shared", ent: "Private VPC" },
                                { name: "Analytics Retention", start: "7 Days", pro: "30 Days", ent: "1 Year" },
                                { name: "SSO / SAML", start: "-", pro: "-", ent: <Check size={16} className="text-green-400" /> },
                                { name: "SLA", start: "Standard", pro: "99.9%", ent: "99.99%" },
                                { name: "Support", start: "Community", pro: "Email", ent: "Dedicated Slack" },
                            ].map((row, i) => (
                                <tr key={i} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                                    <td className="py-4 pl-4 font-medium text-white">{row.name}</td>
                                    <td className="py-4 px-8 text-gray-500">{row.start}</td>
                                    <td className="py-4 px-8 text-gray-400">{row.pro}</td>
                                    <td className="py-4 px-8 text-white font-bold">{row.ent}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Bottom CTA */}
            <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-white/10 rounded-3xl p-12 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none"></div>
                <h2 className="text-3xl font-bold text-white mb-6 relative z-10">Ready to scale?</h2>
                <p className="text-gray-400 mb-8 max-w-lg mx-auto relative z-10">
                    Get in touch with our solutions engineering team to design a deployment architecture that fits your security needs.
                </p>
                <Button className="h-12 px-8 relative z-10 mx-auto" onClick={() => navigate('contact')}>Contact Enterprise Sales</Button>
            </div>
        </div>
    );
}
