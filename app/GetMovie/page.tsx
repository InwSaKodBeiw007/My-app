import CardNewERVerSion from "../component/cart";

async function MyHerpFn() {
    const url = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3Y2EwMWIwOTg3ODViM2Q2NGNiMGU2YjcxMjlhNmI1YSIsIm5iZiI6MTczODAzNzY5OS4xMDcsInN1YiI6IjY3OTg1OWMzYmE0Zjk0MWY0NDhmMjk1ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kJPn6PCwKxCC6e4fEM-_teTUwvnSXwY1PpD8r9CLjSM'
        }
    };

    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return data; // ส่ง JSON ที่ได้กลับ
    } catch (error) {
        console.error("Error fetching data:", error);
        return null; // ส่งค่า null กลับในกรณีเกิดข้อผิดพลาด
    }
}

export default async function Page() {
    const HeroMovie = await MyHerpFn();

    // ตรวจสอบว่าข้อมูล HeroMovie ถูกต้อง
    if (!HeroMovie || !HeroMovie.results) {
        return (
            <div>
                <p>Error loading data. Please try again later.</p>
            </div>
        );
    }

    // return (
    //     <div>
    //         {HeroMovie.results.map((movie, index) => (
    //             <div key={index}>
    //                 <h3>{movie.title || movie.name}</h3> {/* บางกรณีอาจไม่มี `title` แต่มี `name` */}
    //             </div>
    //         ))}
    //     </div>
    // );


    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {HeroMovie.results.map((moee, index) => {
                const imageUrl = `https://image.tmdb.org/t/p/w500${moee.backdrop_path}`;
                return (
                    <CardNewERVerSion
                        key={index}
                        src={imageUrl}
                        title={moee.title || "Untitled"}
                    />
                );
            })}
        </div>
    );

}