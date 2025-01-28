import Image from "next/image";
import Link from "next/link";

export default function Page() {
    return (
        <div className="top-0 w-full justify-between flex bg-slate-500">
            <div><Image src="/LOGORedHead.jpg" width={120} height={120} className="w-auto h-auto" alt="LOGO" /></div>
            {/* <div> */}
            <ul className=" flex justify-between w-full">
                <li><Link href="../">HOME-Pages</Link></li>
                <li><Link href="\page1">Go to First-Pages </Link></li>
                <li><Link href="\page2">Go to Second-Pages</Link></li>
                <li><Link href="\page3">Go to Third-Pages</Link></li>
                <li><Link href="\Counter">Go to counter</Link></li>
            </ul>
            {/* </div> */}
        </div>
    );
}