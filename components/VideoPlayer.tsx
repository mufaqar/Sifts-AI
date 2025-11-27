
export default function VideoPlayer({
    videoId,
    thumbnail,
}: {
    videoId: string;
    thumbnail?: string;
}) {

    const thumbUrl =
        thumbnail ??
        `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

    return (
        <div className="relative w-full aspect-video rounded-xl overflow-hidden cursor-pointer mt-10 mx-auto max-w-4xl bg-white md:py-12 md:px-8 p-8 border border-(--brand-border)">
            <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                className="w-full h-full"
                allow="autoplay; encrypted-media"
                allowFullScreen

            />
        </div>
    );
}
