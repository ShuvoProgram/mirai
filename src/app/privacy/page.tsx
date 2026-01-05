"use client";

import React from 'react';
import { HeroGeometricBackground } from '@/components/ui/shape-landing-hero';
import { FadeIn } from '@/components/ui/FadeIn';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#020202] pt-32 pb-20">
      <HeroGeometricBackground className="fixed inset-0 z-0" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <FadeIn>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-12">Privacy Policy</h1>
          
          <div className="prose prose-invert prose-lg max-w-none text-gray-400">
            <p className="lead text-xl text-white mb-8">
              Last updated: January 6, 2026
            </p>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
              <p className="mb-4">
                Mirai Inc. ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
              <p>
                Our core philosophy is privacy-by-design. Our inference engine is designed to run locally on your devices, meaning your input data (prompts, images, audio) does not need to be sent to our servers to be processed.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">2. Data We Collect</h2>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Account Information:</strong> When you register, we collect your name, email address, and password.</li>
                <li><strong>Usage Data:</strong> We collect anonymous telemetry data about how the Mirai CLI and SDK are used (e.g., model load times, error rates) to improve performance. You can opt-out of this in your configuration.</li>
                <li><strong>Payment Information:</strong> If you subscribe to our Enterprise plans, our payment processor collects your billing details. We do not store full credit card numbers.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Data</h2>
              <p className="mb-4">
                We use the collected data to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide, operate, and maintain our services.</li>
                <li>Improve, personalize, and expand our services.</li>
                <li>Understand and analyze how you use our services.</li>
                <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">4. Data Security</h2>
              <p>
                We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
              </p>
            </section>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
