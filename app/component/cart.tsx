import Image from "next/image";
import Link from "next/link";

export default function CardNewERVerSion({ src, title }: { src: string, title: string }) {
    return (
        <div className="p-4 border rounded-lg shadow-md">
            {/* รูปปก */}
            <Image
                src={src}
                width={300}
                height={170}
                className="w-full h-auto rounded-md"
                alt={title}
            />
            {/* ชื่อเรื่อง */}
            <h3 className="mt-2 text-lg font-bold">{title}</h3>
            {/* ลิงก์ */}
            <div className="mt-2 text-blue-500">
                <Link href="#">&#62;&#62;&#62; Click Here &#60;&#60;&#60;</Link>
            </div>
        </div>
    );
}
