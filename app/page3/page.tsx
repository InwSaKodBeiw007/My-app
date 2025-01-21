import Image from "next/image";
import Link from "next/link";

export default function Page() {
    return (
        <div className="text-end text-amber-950">
            <h1 className="text-3xl text-center">This is Third-Pages</h1>

            <div className="place-items-center">
                <Image src="/Hidden-Temple.png" width={300} height={300} alt="Forest" />
                <Link href="..\">Home</Link>
            </div>
            <ul><Link href="\page1">Go to First-Pages </Link></ul>
            <ul><Link href="\page2">Go to Second-Pages</Link></ul>
            <ul><Link href="\page3">Go to Third-Pages</Link></ul>

        </div>
    );
}