"use client";

import SampleChart from '../components/SampleChart';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [profile, setProfile] = useState('');
  const router = useRouter();

  const analyze = () => {
    const params = new URLSearchParams({ profile });
    router.push(`/results?${params.toString()}`);
  };

  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-3xl">
        <div className="rounded-3xl bg-white/80 shadow-2xl p-8 md:p-12 backdrop-blur-sm border border-gray-100">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
              Turn Your Talent Into Opportunity
            </h1>
            <p className="mt-4 text-gray-600 text-base md:text-lg">
              AI-powered growth intelligence for women in tech.
            </p>
          </div>

          <div className="mt-8">
            <textarea
              className="w-full min-h-[160px] p-4 rounded-xl border border-gray-200 shadow-sm focus:outline-none focus:ring-4 focus:ring-indigo-100 resize-none"
              placeholder="Paste your LinkedIn profile or CV here"
              value={profile}
              onChange={(e) => setProfile(e.target.value)}
            />
            <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-center gap-3">
                <button
                  onClick={analyze}
                  disabled={!profile.trim()}
                  className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-br from-indigo-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:scale-[1.01] active:scale-100 transition-transform disabled:opacity-50"
                >
                  Analyze My Profile
                </button>
                <button className="inline-flex items-center px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 hover:bg-gray-50">
                  Try Example
                </button>
              </div>

              <div className="text-sm text-gray-500">
                Demo-ready — results generated instantly for prototyping.
              </div>
            </div>
          </div>

          <div className="mt-10">
            <h3 className="text-lg font-medium">Quick preview</h3>
            <div className="mt-4 bg-white p-4 rounded-lg border border-gray-100">
              <SampleChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
