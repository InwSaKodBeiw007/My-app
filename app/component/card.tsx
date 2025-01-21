import Image from "next/image";
import Link from "next/link";

export default function Card({ src, title }: { src: string, title: string }) {
    return (
        <div className="cu">
            <Image src={src} width={150} height={150}  alt="CardFirst" />
            <div>{title}</div>
            <div><Link href="#">{`>>> ClickHere <<<`}</Link></div>
        </div>
    );
}