import Image from "next/image";
import { useRef, useState } from "react";
import { FaPause, FaPlay, FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";


const voices = [
    {
        id: 1,
        name: "Kim",
        language: "English",
        flag: "/images/flags/uk.svg",
        avatar: "/images/video1.png",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    },
    {
        id: 2,
        name: "Dave",
        language: "English",
        flag: "/images/flags/usa.svg",
        avatar: "/images/video2.png",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    },
    {
        id: 3,
        name: "Stephanie",
        language: "German",
        flag: "/images/flags/german.svg",
        avatar: "/images/video3.png",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    },
    {
        id: 4,
        name: "Aksel",
        language: "Norwegian",
        flag: "/images/flags/norway.svg",
        avatar: "/images/video4.png",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
    },
];

export default function VideoSection() {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(100); // volume in %
    const [isMuted, setIsMuted] = useState(false);

    // Play / Pause toggle
    const togglePlay = () => {
        if (!audioRef.current) return;
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };
    // Toggle mute
    const toggleMute = () => {
        if (!audioRef.current) return;
        if (isMuted) {
            audioRef.current.volume = volume / 100;
        } else {
            audioRef.current.volume = 0;
        }
        setIsMuted(!isMuted);
    };

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
                    Your data becomes fully conversational and easy to act on. Talk to your AI naturally, and it analyzes, prepares, or executes tasks in seconds. It works alongside your team—amplifying their impact, just like your most reliable colleague.
                </p>
            </div>
            {/* MAIN CARD */}
            <div className="mt-10 mx-auto max-w-4xl bg-white rounded-3xl md:py-12 md:px-8 p-8 border border-(--brand-border)">
                <div className="flex flex-col md:flex-row gap-10 items-center">
                    {/* Avatar */}
                    <div className="md:w-1/3 w-full relative">
                        <Image
                            src="/images/video1.png"
                            width={350}
                            height={350}
                            alt="Speaker"
                            className="rounded-full border-4 border-blue-600 object-cover" />

                        <span className="absolute top-3 right-3 border-2 h-8 w-8 border-blue-600 bg-black text-white text-xs font-bold px-2 py-1 rounded-full">
                            AI
                        </span>
                    </div>
                    <div className="relative md:w-1/3 w-full">
                        <p className="text-sm font-medium text-(--brand-subtext)">
                            and a complimentary dance class <span className="brand-gradient text-white px-1 py-1 rounded ">voucher</span>
                        </p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-10 mt-10">
                    <div className="md:w-2/3 w-full flex items-center space-x-4">
                        <button
                            className="text-sm bg-blue-600 text-white flex items-center justify-center min-w-10 min-h-10 rounded-full cursor-pointer"
                            onClick={togglePlay}
                        >
                            {isPlaying ? <FaPause /> : <FaPlay />}
                        </button>

                        {/* Progress Bar */}
                        <input
                            type="range"
                            min="0"
                            max="100"
                            value="50"
                            className="w-full h-1 rounded-lg accent-blue-600 cursor-pointer"
                        />
                    </div>
                    <div className="relative md:w-1/3 w-full flex items-center justify-end space-x-2">
                        {/* Volume Control */}
                        <button
                            className="text-sm bg-gray-300 text-gray-700 flex items-center justify-center w-8 h-8 rounded-full cursor-pointer"
                        >
                            {isMuted || volume === 0 ? <FaVolumeMute /> : <FaVolumeUp />}
                        </button>
                        <input
                            onClick={toggleMute}
                            type="range"
                            min="0"
                            max="100"
                            value="50"
                            className="w-24 h-1 rounded-lg accent-blue-600 cursor-pointer"
                        />
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-12">
                {voices.map((v) => (
                    <div
                        key={v.id}
                        className="py-1.5 px-2 rounded-full flex items-center gap-3 bg-[#F8FAFC] border border-(--brand-border)"
                    >
                        <Image
                            src={v.avatar}
                            width={40}
                            height={40}
                            alt={v.name}
                            className="rounded-full"
                        />

                        <div className="flex-1">
                            <p className="font-semibold text-sm flex items-center gap-1">
                                {v.name}
                                <Image
                                    src={v.flag}
                                    width={14}
                                    height={14}
                                    alt="flag"
                                    className="inline-block"
                                />
                            </p>
                            <p className="text-xs text-gray-500">{v.language}</p>
                        </div>

                        <button
                            onClick={() => new Audio(v.audio).play()}
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
