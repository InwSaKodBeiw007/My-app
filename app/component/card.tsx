import Image from "next/image";
import Link from "next/link";

export default function Card({ src, title }: { src: string, title: string }) {
    return (
        <div>
            <Image src={src} width={150} height={150} className="w-auto h-auto" alt="CardFirst" />
            <div key={97}>{title}</div>
            <div key={43}><Link href="#">{'>>> ClickHere <<<'}</Link></div>
        </div>
    );
}