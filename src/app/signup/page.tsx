"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { HeroGeometricBackground } from '@/components/ui/shape-landing-hero';

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#020202]">
      <HeroGeometricBackground className="z-0" />
      
      <div className="relative z-10 w-full max-w-md p-8 rounded-2xl border border-white/10 bg-black/50 backdrop-blur-xl shadow-2xl">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-white mb-2">Create an account</h1>
          <p className="text-gray-400 text-sm">Get started with Mirai today</p>
        </div>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-gray-400 mb-1.5 uppercase tracking-wider">First Name</label>
              <input 
                type="text" 
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
                placeholder="John"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-400 mb-1.5 uppercase tracking-wider">Last Name</label>
              <input 
                type="text" 
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
                placeholder="Doe"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-400 mb-1.5 uppercase tracking-wider">Email</label>
            <input 
              type="email" 
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
              placeholder="name@company.com"
            />
          </div>
          
          <div>
            <label className="block text-xs font-medium text-gray-400 mb-1.5 uppercase tracking-wider">Password</label>
            <input 
              type="password" 
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
              placeholder="Create a password"
            />
          </div>

          <Button className="w-full h-11 mt-2">Create Account</Button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-400">
          Already have an account?{' '}
          <Link href="/signin" className="font-medium transition-colors">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
}
