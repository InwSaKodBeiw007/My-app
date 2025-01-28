import { CreateEmail } from "./action";

export default function Page() {
    return (
        <form action={CreateEmail}>
            <input className="border-2 border-black" type="email"
                name="email" />
            <button>Go To TheMall</button>
        </form>
    );
}