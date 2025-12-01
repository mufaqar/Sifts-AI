"use client";
import Image from "next/image";
import { FaPlay, FaVolumeUp } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";
import VideoPlayer from "./VideoPlayer";
import { useState } from "react";

const VideoList = [
    {
        id: 1,
        name: "Zainab",
        language: "English",
        avatar: "/images/video1.png",
        video: "https://www.youtube.com/watch?v=XEsz0Sv9HTg",
    },
    {
        id: 2,
        name: "Weaam",
        language: "English",
        avatar: "/images/video3.png",
        video: "https://www.youtube.com/watch?v=JywMhmS0I_E",
    },
    {
        id: 3,
        name: "Ali",
        language: "German",
        avatar: "/images/video4.png",
        video: "https://www.youtube.com/watch?v=SRGCBzHsauE",
    },
];

const getYouTubeId = (url: any) => {
    const regExp =
        /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
};

export default function VideoSection() {
    const [selectedVideo, setSelectedVideo] = useState(
        getYouTubeId(VideoList[0].video)
    );
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <section className="mx-auto max-w-7xl px-4 py-16 md:py-20">
            <div className="mx-auto max-w-3xl text-center">
                <div
                    className="mb-3 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium backdrop-blur-sm"
                    style={{
                        borderColor: "var(--brand-border)",
                        background: "#F8FAFC",
                        color: "var(--brand-subtext)",
                    }}
                >
                    <HiSparkles className="w-3.5 h-3.5" /> AI Conversational
                </div>

                <h2
                    className="text-3xl md:text-4xl font-semibold tracking-tight"
                    style={{ color: "var(--brand-text)" }}
                >
                    Conversational AI That Works Like Your Best Employee
                </h2>

                <p className="mt-3 leading-relaxed text-(--brand-subtext)">
                    Your data becomes fully conversational...
                </p>
            </div>
            {isPlaying ? (
                <VideoPlayer videoId={selectedVideo} />
            ) : (
                <div className="mt-10 mx-auto max-w-4xl bg-white rounded-3xl md:py-12 md:px-8 p-5 border border-(--brand-border)">
                    <div className="flex flex-col md:flex-row gap-10 items-center">
                        {/* Avatar */}
                        <div className="md:w-1/3 w-fit mx-auto relative">
                            <Image
                                src="/images/video1.png"
                                width={250}
                                height={250}
                                alt="Speaker"
                                className="rounded-full border-4 border-blue-600 object-cover" />

                            <span className="absolute top-6 right-6 border-2 h-8 w-8 border-blue-600 bg-black text-white text-xs font-bold px-2 py-1 rounded-full">
                                AI
                            </span>
                        </div>
                        <div className="relative md:w-2/3 w-full">
                            <p className="text-sm font-medium text-(--brand-subtext)">
                                and a complimentary dance class <span className="brand-gradient text-white px-1 py-1 rounded ">voucher</span>
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-row md:flex-row gap-10 mt-10">
                        <div className="w-2/3 flex items-center space-x-4">
                            <button
                                className="text-sm bg-blue-600 text-white flex items-center justify-center min-w-10 min-h-10 rounded-full cursor-pointer">
                                <FaPlay />
                            </button>

                            {/* Progress Bar */}
                            <input
                                readOnly
                                type="range"
                                min="0"
                                max="100"
                                value="50"
                                className="w-full h-1 rounded-lg accent-blue-600 cursor-pointer"
                            />
                        </div>
                        <div className="relative w-1/3 flex items-center justify-end space-x-2">
                            {/* Volume Control */}
                            <button
                                className="text-sm text-gray-700 flex items-center justify-center w-8 h-8 cursor-pointer"
                            >
                                <FaVolumeUp />
                            </button>
                            <input
                                readOnly
                                type="range"
                                min="0"
                                max="100"
                                value="50"
                                className="w-24 h-1 rounded-lg accent-blue-600 cursor-pointer"
                            />
                        </div>
                    </div>
                </div>
            )
            }
            {/* Video List */}
            <div className="mx-auto max-w-5xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4 mt-12">
                {VideoList.map((item, idx) => (
                    <div
                        key={idx}
                        onClick={() => {
                            setSelectedVideo(getYouTubeId(item.video)); // change video
                            setIsPlaying(true); // open player
                        }}
                        className={`${selectedVideo === getYouTubeId(item.video) ? "border-black/50" : " border-(--brand-border)"} py-1.5 px-2 rounded-full flex items-center gap-3 bg-[#F8FAFC] border cursor-pointer `}
                    >
                        <Image
                            src={item.avatar}
                            width={40}
                            height={40}
                            alt={item.name}
                            className="rounded-full"
                        />

                        <div className="flex-1">
                            <p className="font-semibold text-sm">{item.name}</p>
                            <p className="text-xs text-gray-500">{item.language}</p>
                        </div>

                        <button

                            className="text-sm bg-blue-600 text-white flex items-center justify-center w-8 h-8 rounded-full cursor-pointer"
                        >
                            <FaPlay />
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}
