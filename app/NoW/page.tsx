// async function getMovie() {
//     //read from API
//     const url = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';
//     const options = {
//         method: 'GET',
//         headers: {
//             accept: 'application/json',
//             Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3Y2EwMWIwOTg3ODViM2Q2NGNiMGU2YjcxMjlhNmI1YSIsIm5iZiI6MTczODAzNzY5OS4xMDcsInN1YiI6IjY3OTg1OWMzYmE0Zjk0MWY0NDhmMjk1ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kJPn6PCwKxCC6e4fEM-_teTUwvnSXwY1PpD8r9CLjSM'
//         }//eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3Y2EwMWIwOTg3ODViM2Q2NGNiMGU2YjcxMjlhNmI1YSIsIm5iZiI6MTczODAzNzY5OS4xMDcsInN1YiI6IjY3OTg1OWMzYmE0Zjk0MWY0NDhmMjk1ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kJPn6PCwKxCC6e4fEM-_teTUwvnSXwY1PpD8r9CLjSM
//     };

// import Card from "../component/card";
import CardNewERVerSion from "../component/cart";

//     const result = fetch(url, options)
//         .then(res => res.json())
//         .then(json => console.log(json))
//         .catch(err => console.error(err));
//     return result

//     // const result = await fetch(url, options)
//     // return result.json()
// }
async function MyHerpFn() {
    const url = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3Y2EwMWIwOTg3ODViM2Q2NGNiMGU2YjcxMjlhNmI1YSIsIm5iZiI6MTczODAzNzY5OS4xMDcsInN1YiI6IjY3OTg1OWMzYmE0Zjk0MWY0NDhmMjk1ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kJPn6PCwKxCC6e4fEM-_teTUwvnSXwY1PpD8r9CLjSM'
        }
    };

    const MyHeroAcademia = await fetch(url, options)
    // .then(res => res.json())
    // .then(json => console.log(json))
    // .catch(err => console.error(err));

    if (!MyHeroAcademia.ok) {
        throw new Error("CAnt Go anylonger Use Chat Plase");
    }
    const AcademiaHero = await MyHeroAcademia.json()


    return AcademiaHero;
}
export default async function Page() {
    const HeroMovie = await MyHerpFn();
    console.log(HeroMovie)

    return (
        //displayHere
        <div>
            {HeroMovie.results.map((moee, index) => {
                const MoviePic = `https://image.tmdb.org/t/p/w500${moee.backdrop_path}`;
                return (
                    <div key={index} className="table-row-group bg-slate-500">
                        <CardNewERVerSion src={MoviePic} title={moee.title} />

                    </div>
                )
            })}
        </div>
    );
}
{/* // 
//     {HeroMovie.map((movie, index) => (
//         <div key={index}>
//             {movie.original_title}
//         </div>
//     ))} */}


{/* {HeroMovie.map((movie, index) => (
        <div key={index}>
            {movie.id}
        </div>
    ).key?.length)} */}