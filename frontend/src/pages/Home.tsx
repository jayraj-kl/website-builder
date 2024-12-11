import { Wand2 } from "lucide-react";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';                 
import { TextHoverEffect } from "@/components/ui/text-hover-effect";

export function Home() {
  const [prompt, setPrompt] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (prompt.trim()) {
      navigate('/builder', { state: { prompt } });
    }
  };
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen bg-gradient-to-b from-gray-900 to-black">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid" />
      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-transparent via-rose-500/5 to-transparent" />
      
      <div className="relative w-full max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center space-y-8 mb-16">
          <div className="h-32">
            <TextHoverEffect 
              text="JXTY" 
              className="transform scale-120"
            />
          </div>
          <h1 className="text-3xl font-medium text-gray-300 max-w-2xl mx-auto">
            What can I help you build?
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
          <div className="rounded-xl shadow-2xl p-8 bg-black/40 backdrop-blur-xl border border-white/5">
            <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
              placeholder="Describe the website you want to build..."
              className="w-full h-48 p-6 bg-gray-900/60 text-gray-100 border border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none placeholder-gray-500 text-lg"
            />
            <div className="mt-6 flex justify-end">
              <button
                type="submit"
                className="bg-blue-600 text-gray-100 py-4 px-8 rounded-xl font-medium hover:bg-blue-700 transition-colors text-lg flex items-center gap-2 group"
              >
                Generate Website Plan
                <Wand2 className="w-5 h-5 transition-transform group-hover:rotate-12" />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}