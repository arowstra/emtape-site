import Image from "next/image";
import logo from "@/assets/brand/emtape-logo.png";

type BrandMarkProps = {
  size?: number;
};

export default function BrandMark({ size = 44 }: BrandMarkProps) {
  return (
    <Image
      src={logo}
      alt="EmTape logo"
      width={size}
      height={size}
      className="rounded-[22%] shadow-[0_10px_24px_rgba(15,25,49,0.16)]"
      priority
    />
  );
}
