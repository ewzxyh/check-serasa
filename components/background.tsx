"use client"
import {
    LucideShieldCheck,
    LucideLineChart,
    LucideBarChart,
    LucidePercent,
    LucideStar,
    LucideCircleDollarSign,
    LucideTimer,
} from "lucide-react";
import React from "react";

export default function HeroBackground() {
    return (
        <div className="relative w-full h-[600px] overflow-hidden bg-gradient-to-br">
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, #e5e7eb 1px, transparent 0)`,
                    backgroundSize: "40px 40px",
                }}
            ></div>

            <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-blue-100/30 blur-xl"></div>
            <div className="absolute bottom-40 right-40 w-48 h-48 rounded-full bg-gray-200/40 blur-xl"></div>

            <svg className="absolute inset-0 w-full h-full">
                <path
                    d="M0,100 Q300,150 600,100 T1200,100"
                    fill="none"
                    stroke="rgba(59, 130, 246, 0.1)"
                    strokeWidth="2"
                    className="animate-pulse"
                />
                <path
                    d="M0,200 Q300,250 600,200 T1200,200"
                    fill="none"
                    stroke="rgba(59, 130, 246, 0.1)"
                    strokeWidth="2"
                    className="animate-pulse delay-150"
                />
                <path
                    d="M0,300 Q300,350 600,300 T1200,300"
                    fill="none"
                    stroke="rgba(59, 130, 246, 0.1)"
                    strokeWidth="2"
                    className="animate-pulse delay-300"
                />
            </svg>

            <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 animate-float">
                <LucideShieldCheck className="w-12 h-12 text-blue-200" />
            </div>
            <div className="absolute top-1/4 right-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-float delay-100">
                <LucideLineChart className="w-10 h-10 text-gray-200" />
            </div>
            <div className="absolute bottom-1/1 right-1/4 transform -translate-x-1/2 -translate-y-1/2 animate-float delay-200">
                <LucideBarChart className="w-8 h-8 text-blue-100" />
            </div>

            <div className="absolute top-1/3 right-1/4 w-64 h-64">
                <div className="relative w-full h-full">
                    <div className="absolute inset-0 border-2 border-blue-100/20 rounded-lg transform rotate-45"></div>
                    <div className="absolute inset-4 border-2 border-gray-200/20 rounded-lg transform -rotate-45"></div>
                </div>
            </div>

            <div className="absolute top-3/4 left-3/3 transform -translate-x-1/2 -translate-y-1/2 animate-float delay-300">
                <LucidePercent className="w-9 h-9 text-blue-300" />
            </div>
            <div className="absolute bottom-1/3 left-2/3 transform -translate-x-1/2 -translate-y-1/2 animate-float delay-400">
                <LucideStar className="w-11 h-11 text-yellow-200" />
            </div>
            <div className="absolute top-3/4 right-2/4 transform -translate-x-1/2 -translate-y-1/2 animate-float delay-500">
                <LucideCircleDollarSign className="w-10 h-10 text-green-200" />
            </div>
            <div className="absolute bottom-3/4 right-2/3 transform -translate-x-1/2 -translate-y-1/2 animate-float delay-600">
                <LucideTimer className="w-8 h-8 text-purple-200" />
            </div>

            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span className="text-6xl font-bold text-blue-100/60 blur-[1px] animate-pulse">
                    850
                </span>
            </div>

            <div className="absolute top-14 left-64 transform -translate-x-1/2 -translate-y-1/2">
                <span className="text-6xl font-bold text-blue-100/35 blur-[1px] animate-pulse">
                    970
                </span>
            </div>

            <div className="absolute top-32 right-96 transform -translate-x-2/2 -translate-y-1/2">
                <span className="text-6xl font-bold text-blue-100/35 blur-[1px] animate-pulse">
                    300
                </span>
            </div>

            <style jsx>{`
          @keyframes float {
            0% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-10px);
            }
            100% {
              transform: translateY(0px);
            }
          }
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
        `}</style>
        </div>
    );
}
