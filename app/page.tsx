import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="place-items-center">
      <h1 className="text-3xl text-center">Home Pages</h1>


      <Image src="/warning.jpg" width={300} height={300} alt="players" />
      <ul>66162110237-4 Thanawat Poomikan</ul>

      <ul>
        <Link href="\page1" className="text-justify ">Go to First-Pages </Link>

      </ul>
      <ul><Link href="\page2">Go to Second-Pages</Link></ul>
      <ul><Link href="\page3">Go to Third-Pages</Link></ul>

    </div >
  );
}