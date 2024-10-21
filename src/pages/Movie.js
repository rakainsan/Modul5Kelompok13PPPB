import { Fragment } from "react";
import { useNavigate } from "react-router-dom"; // Impor useNavigate
import CardBig from "../component/CardBig";
import CardSmall from "../component/CardSmall";
import "./Movie.css";

export default function Movie() {
    const STAR_COLOR = "rgb(220, 117, 21)";
    const STAR_SIZE = 20;
    const navigate = useNavigate(); // Inisialisasi useNavigate

    const poster = [
        {
            title: "Ambawick", id: 1,
            rate: 4,
            genre: "action, fighting",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe9ixzCoRHMS1HK9V6SDFX9Sds7LbbmSz2bg&s",
        },
        {
            title: "Ambatron dan Rusdi", id: 2,
            rate: 4,
            genre: "action, sci-fi, robot",
            img: "https://i.ytimg.com/vi/biisthYHX3o/maxresdefault.jpg",
        },
        {
            title: "Supermuani", id: 3,
            rate: 4,
            genre: "action, thriller, superhero",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhhiuoSxxNE0XhitrlwbrJcuT3jkFrah-rgw&s",
        },
    ];

    const data = [
        {
            title: "Ambatufilm", id: 1,
            rate: 4,
            genre: "biography, drama, history",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB5hAXfwnN5fZ9ojeTMKVvoq2BqHWp1K29aFjO2OMvkmvHTql8YW6w0A7IsxAlsET4OUk&usqp=CAU",
        },
        {
            title: "The Imitation Game", id: 2,
            rate: 4,
            genre: "biography, drama, history",
            img: "https://m.media-amazon.com/images/I/71lqDylcvGL.jpg",
        },
        {
            title: "A Beautiful Mind", id: 3,
            rate: 4,
            genre: "biography, drama",
            img: "https://m.media-amazon.com/images/I/71lqDylcvGL.jpg",
        },
        {
            title: "The Social Network", id: 4,
            rate: 4,
            genre: "biography, drama",
            img: "https://m.media-amazon.com/images/I/71lqDylcvGL.jpg",
        },
        {
            title: "Hidden Figures", id: 5,
            rate: 4,
            genre: "biography, drama",
            img: "https://m.media-amazon.com/images/I/71lqDylcvGL.jpg",
        },
        {
            title: "The Theory of Everything", id: 6,
            rate: 4,
            genre: "biography, drama",
            img: "https://m.media-amazon.com/images/I/71lqDylcvGL.jpg",
        },
    ];

    return (
        <>
            <p id="movies">Top Movies</p>
            <div className="containerTop">
                {poster.map((item, index) => (
                    <Fragment key={item.id}>
                        <CardBig
                            title={item.title}
                            img={item.img}
                            genre={item.genre}
                            size={STAR_SIZE}
                            color={STAR_COLOR}
                        />
                        {poster.length === index + 1 ? (
                            <div style={{ marginRight: 40 }} />
                        ) : null}
                    </Fragment>
                ))}
            </div>
            <div className="rowcoba">
                <div className="column">
                    <p id="movies">All Movies</p>
                    {data.map((item, index) => (
                        <Fragment key={item.id}>
                            <CardSmall
                                title={item.title}
                                img={item.img}
                                genre={item.genre}
                                size={STAR_SIZE}
                                color={STAR_COLOR}
                                onClick={() => navigate(`/movie/${item.id}`)} // Navigasi ke detail film
                            />
                            {data.length === index + 1 && <div style={{ marginBottom: 80 }} />}
                        </Fragment>
                    ))}
                </div>
                <div className="column">
                    <p id="movies">All Movies</p>
                    {data.map((item, index) => (
                        <Fragment key={item.id}>
                            <CardSmall
                                title={item.title}
                                img={item.img}
                                genre={item.genre}
                                size={STAR_SIZE}
                                color={STAR_COLOR}
                                onClick={() => navigate(`/movie/${item.id}`)} // Navigasi ke detail film
                            />
                            {data.length === index + 1 && <div style={{ marginBottom: 80 }} />}
                        </Fragment>
                    ))}
                </div>
            </div>
        </>
    );
}
