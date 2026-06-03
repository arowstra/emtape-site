import Image, { type StaticImageData } from "next/image";

type ScreenshotPhoneProps = {
  src: StaticImageData;
  alt: string;
  caption?: string;
  className?: string;
  priority?: boolean;
};

export default function ScreenshotPhone({
  src,
  alt,
  caption,
  className = "",
  priority = false,
}: ScreenshotPhoneProps) {
  return (
    <figure className={`group ${className}`.trim()}>
      <div className="relative overflow-hidden rounded-[2rem] border border-slate-900/10 bg-[#0f1931] p-2 shadow-[0_28px_60px_rgba(15,25,49,0.18)] transition-transform duration-300 group-hover:-translate-y-1">
        <div className="overflow-hidden rounded-[1.55rem] bg-white">
          <Image
            src={src}
            alt={alt}
            priority={priority}
            className="h-auto w-full"
            sizes="(max-width: 768px) 84vw, (max-width: 1200px) 40vw, 30vw"
          />
        </div>
      </div>
      {caption ? (
        <figcaption className="mt-3 text-sm leading-6 text-muted">{caption}</figcaption>
      ) : null}
    </figure>
  );
}
