import Card from "../component/card";

export default function Page() {
    return (

        <div className="w-auto h-auto  bottom-5 flex justify-around p-8">
            <Card src="/Card3.jpg" title="Player: 456"></Card>
            <Card src="/Card2.jpg" title="Player: 567"></Card>
        </div>
    )

}