import React from "react";
import { Timeline } from "@/components/ui/timeline";
import Link from 'next/link';

export function Experience() {
  const data = [
    {
      title: "Summer 2024",
      content: (
        <div className="">

            <h1 className="text-neutral-200 text-2xl md:text-4xl font-normal mb-2">
                Bank of Montreal
            </h1>
            <h1 className="text-neutral-200 text-lg md:text-xl font-normal mb-2">
                Infrastructure Solution Consultant, Data & Infrastructure 
            </h1>
            <p className="text-neutral-500 text-md md:text-lg font-light mb-10">
                Optimized team workflows, enhanced performance management, and improved consulting efficiencies by automating processes, analyzing stakeholder feedback, and delivering actionable insights on data center and cloud infrastructure.
            </p>

            <Link href="https://www.bmo.com/en-ca/main/personal/" target="_blank">
                <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 mb-2">
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                        Visit Here
                    </span>
                </button>
            </Link>
        </div>
      ),
    },
    {
      title: "2023 - 2024",
      content: (
        <div className="">
            <h1 className="text-neutral-200 text-2xl md:text-4xl font-normal mb-2">
                Bell Canada
            </h1>
            <h1 className="text-neutral-200 text-lg md:text-xl font-normal mb-2">
                Design Engineer, Pre-Sales Design, Bell Business Markets
            </h1>
            <p className="text-neutral-500 text-md md:text-lg font-light mb-10 sm:mb-5">
                Collaborated with cross-functional teams to design and integrate solutions for 30+ enterprise customers, streamlined presales processes to boost efficiency by 20%, and managed $4M+ in VoIP and cloud solution deployments, earning praise from clients and senior leadership.
            </p>
            <Link href="https://business.bell.ca/shop" target="_blank">
                <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 mb-2">
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                    Visit Here
                    </span>
                </button>
            </Link>
        </div>
      ),
    },
    {
      title: "Early 2023",
      content: (
        <div className="">
            <h1 className="text-neutral-200 text-2xl md:text-4xl font-normal mb-2">
                Summit SKS
            </h1>
            <h1 className="text-neutral-200 text-lg md:text-xl font-normal mb-2">
                Lead Software Engineer
            </h1>
            <p className="text-neutral-500 text-md md:text-lg font-light mb-10">
                Led a student consulting team to deliver a $14,000 solution that optimized a local arborist’s report processing efficiency by 84%, developed a full-stack React.js and Firebase web app to streamline workflows, and fostered collaborative innovation through grassroots methodology.
            </p>
            <Link href="https://www.summitsks.com" target="_blank">
                <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 mb-2">
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                    Visit Here
                    </span>
                </button>
            </Link>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
