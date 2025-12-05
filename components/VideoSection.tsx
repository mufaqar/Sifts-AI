"use client";
import Image from "next/image";
import { FaPlay, FaVolumeUp } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";
import VideoPlayer from "./VideoPlayer";
import { useState } from "react";
import Animation from "./animation";
import { fadeUp } from "@/lib/animations/variants";

const VideoList = [
  {
    id: 1,
    name: "Weaam",
    title: "[AI Service Agent]",
    language: "English",
    avatar: "/images/weaam.jpg",
    video: "https://www.youtube.com/watch?v=XEsz0Sv9HTg",
  },
  {
    id: 2,
    name: "Zainab",
    title: "[AI Business Advisor]",
    language: "English",
    avatar: "/images/zainab.jpg",

    video: "https://www.youtube.com/watch?v=JywMhmS0I_E",
  },

  {
    id: 3,
    name: "Ali",
    title: "[AI Workforce Agent]",
    language: "English",
    avatar: "/images/ali.jpg",
    video: "https://www.youtube.com/watch?v=SRGCBzHsauE",
  },
];

const getYouTubeId = (url: any) => {
  const regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#&?]*).*/;
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
      <div id="ai-demo-service" className="mx-auto max-w-3xl text-center">
        <Animation variants={fadeUp}>
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
        </Animation>
      </div>
      <Animation variants={fadeUp}>
        {isPlaying ? (
          <VideoPlayer videoId={selectedVideo} />
        ) : (
          <div className="mt-10 mx-auto max-w-4xl bg-white rounded-3xl md:py-6 md:px-8 p-5 border border-(--brand-border)">
            <div className="flex flex-col md:flex-row gap-10 items-center">
              {/* Avatar */}
              <div className="md:w-1/3 w-fit mx-auto relative">
                <Image
                  src="/images/zainab.jpg"
                  width={300}
                  height={300}
                  alt="Speaker"
                  className="rounded-full  object-cover"
                />
              </div>
            </div>
            <div className="flex flex-row md:flex-row gap-10 ">
              <div className="w-2/3 flex items-center space-x-4">
                <button
                  onClick={() => {
                    setSelectedVideo(
                      getYouTubeId(
                        "https://www.youtube.com/watch?v=XEsz0Sv9HTg"
                      )
                    ); // change video
                    setIsPlaying(true); // open player
                  }}
                  className="text-sm bg-blue-600 text-white flex items-center justify-center min-w-10 min-h-10 rounded-full cursor-pointer"
                >
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
                <button className="text-sm text-gray-700 flex items-center justify-center w-8 h-8 cursor-pointer">
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
        )}
      </Animation>
      {/* Video List */}

      <div className="mx-auto max-w-5xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4 mt-12">
        {VideoList.map((item, idx) => (
          <Animation variants={fadeUp}>
            <div
              key={idx}
              onClick={() => {
                setSelectedVideo(getYouTubeId(item.video)); // change video
                setIsPlaying(true); // open player
              }}
              className={`${
                selectedVideo === getYouTubeId(item.video)
                  ? "border-black/50"
                  : " border-(--brand-border)"
              } py-1.5 px-2 rounded-full flex items-center gap-3 bg-[#F8FAFC] border cursor-pointer `}
            >
              <Image
                src={item.avatar}
                width={40}
                height={40}
                alt={item.name}
                className="rounded-full"
              />

              <div className="flex-1">
                <p className="font-semibold text-sm">
                  {item.name}{" "}
                  <span className="text-xs text-gray-500"> {item.title} </span>
                </p>
                <p className="text-xs text-gray-500">{item.language}</p>
              </div>

              <button className="text-sm bg-blue-600 text-white flex items-center justify-center w-8 h-8 rounded-full cursor-pointer">
                <FaPlay />
              </button>
            </div>
          </Animation>
        ))}
      </div>
    </section>
  );
}
