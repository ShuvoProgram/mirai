"use client";

import React from 'react';
import { HeroGeometricBackground } from '@/components/ui/shape-landing-hero';
import { FadeIn } from '@/components/ui/FadeIn';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#020202] pt-32 pb-20">
      <HeroGeometricBackground className="fixed inset-0 z-0" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <FadeIn>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-12">Terms of Service</h1>
          
          <div className="prose prose-invert prose-lg max-w-none text-gray-400">
            <p className="lead text-xl text-white mb-8">
              Last updated: January 6, 2026
            </p>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">1. Agreement to Terms</h2>
              <p className="mb-4">
                These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Mirai Inc. ("we," "us" or "our"), concerning your access to and use of the Mirai website and services.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">2. Intellectual Property Rights</h2>
              <p className="mb-4">
                Unless otherwise indicated, the Site and Services are our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws.
              </p>
              <p>
                The Mirai Core Runtime is licensed under the Apache 2.0 License.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">3. User Representations</h2>
              <p className="mb-4">
                By using the Site, you represent and warrant that:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>All registration information you submit will be true, accurate, current, and complete.</li>
                <li>You will maintain the accuracy of such information and promptly update such registration information as necessary.</li>
                <li>You have the legal capacity and you agree to comply with these Terms of Service.</li>
                <li>You will not use the Site for any illegal or unauthorized purpose.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">4. Prohibited Activities</h2>
              <p className="mb-4">
                You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">5. Limitation of Liability</h2>
              <p>
                In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the site, even if we have been advised of the possibility of such damages.
              </p>
            </section>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
