"use client";

import React from 'react';
import { HeroGeometricBackground } from '@/components/ui/shape-landing-hero';
import { FadeIn } from '@/components/ui/FadeIn';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    title: "Introducing Mirai 2.0: The Universal Inference Runtime",
    excerpt: "Today we're announcing the biggest update to Mirai yet. Support for Llama 3, 50% faster inference on Apple Silicon, and a new plugin system.",
    date: "Jan 5, 2026",
    author: "Alex Chen",
    category: "Product",
    slug: "introducing-mirai-2"
  },
  {
    title: "Optimizing Transformer Models for Mobile Devices",
    excerpt: "A deep dive into quantization, pruning, and knowledge distillation techniques to fit 7B parameter models on an iPhone 15 Pro.",
    date: "Dec 12, 2025",
    author: "Sarah Miller",
    category: "Engineering",
    slug: "optimizing-transformers-mobile"
  },
  {
    title: "The Economics of Edge vs. Cloud Inference",
    excerpt: "We analyzed the cost per token for 1M daily active users. Moving 80% of inference to the edge can save enterprises up to $500k annually.",
    date: "Nov 28, 2025",
    author: "David Park",
    category: "Analysis",
    slug: "economics-edge-cloud"
  },
  {
    title: "Building a Local RAG Pipeline with Mirai and LangChain",
    excerpt: "Step-by-step tutorial on creating a privacy-preserving document chat application that runs entirely offline.",
    date: "Nov 15, 2025",
    author: "Engineering Team",
    category: "Tutorial",
    slug: "local-rag-tutorial"
  }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#020202] pt-32 pb-20">
      <HeroGeometricBackground className="fixed inset-0 z-0" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <FadeIn>
          <div className="mb-20">
            <h1 className="text-5xl font-bold text-white mb-6 tracking-tight">Blog</h1>
            <p className="text-xl text-gray-400">
              Insights, updates, and engineering deep dives from the Mirai team.
            </p>
          </div>
        </FadeIn>

        <div className="space-y-12">
          {blogPosts.map((post, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <article className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/[0.08] transition-all duration-300">
                <div className="flex flex-col md:flex-row gap-8 justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4 font-mono">
                      <span className="text-blue-400">{post.category}</span>
                      <span>•</span>
                      <span>{post.date}</span>
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-400 leading-relaxed mb-6">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-sm font-medium text-white">
                      <span>By {post.author}</span>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0">
                     <Link href={`/blog/${post.slug}`} className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white group-hover:bg-blue-500 group-hover:scale-110 transition-all">
                        <ArrowRight size={18} />
                     </Link>
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}
