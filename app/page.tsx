import Image from "next/image";
import Card from "./component/card";

export default function Page() {
  return (
    <div className="place-items-center">
      <h1 className="text-3xl text-center">Home Pages</h1>


      <Image src="/warning.jpg" width={150} height={150} className="w-auto h-auto" alt="players" />
      <ul className="text-6xl">66162110237-4 Thanawat Poomikan</ul>

      <div className="w-full justify-between bottom-3 flex">
        <Card src="/Card1.jpg" title="Player: 1"></Card>
        <Card src="/Card2.jpg" title="Player: 2"></Card>
        <Card src="/Card3.jpg" title="Player: 3"></Card>
      </div>

    </div >
  );
}