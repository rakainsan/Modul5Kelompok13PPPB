import { Fragment } from "react";
import CardBig from "../component/CardBig"; import CardSmall from "../component/CardSmall"; import "./Movie.css";

export default function Buku() {
    const STAR_COLOR = "rgb(220, 117, 21)";
    const STAR_SIZE = 20;

    const poster = [
        {
            title: "Dandadan", id: 1,
            rate: 4,
            genre: "action, mistery, comedy",
            img: "https://m.media-amazon.com/images/I/81cUBwUTL+L.jpg",
        },
        {
            title: "Ambacong", id: 2,
            rate: 4,
            genre: "Horror, ambatukam",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgNLJobL2eJC4FAVwZhGXqBimljB_1NQDBmg&s",
        },
        {
            title: "Ambareact", id: 3,
            rate: 4,
            genre: "Horror, sci-fi, thriller",
            img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1514214246i/37673070.jpg",
        },
        
    ];
    const data = [
        {
            title: "Ambaheimer", id: 1,
            rate: 4,
            genre: "biography, drama, history", img:
                "https://m.media-amazon.com/images/I/71lqDylcvGL.jpg",
        },
        {
            title: "OppenNgawi", id: 2,
            rate: 4,
            genre: "biography, drama, history", img:
                "https://m.media-amazon.com/images/I/71lqDylcvGL.jpg",
        },
        {
            title: "The Journey of Mas Faiz", id: 3,
            rate: 4,
            genre: "biography, drama, history", img:
                "https://m.media-amazon.com/images/I/71lqDylcvGL.jpg",
        },
        {
            title: "Oppenheimer", id: 4,
            rate: 4,
            genre: "biography, drama, history", img:
                "https://m.media-amazon.com/images/I/71lqDylcvGL.jpg",
        },
        {
            title: "Oppenheimer", id: 5,
            rate: 4,
            genre: "biography, drama, history", img:
                "https://m.media-amazon.com/images/I/71lqDylcvGL.jpg",
        },
        {
            title: "Oppenheimer", id: 6,
            rate: 4,
            genre: "biography, drama, history", img:
                "https://m.media-amazon.com/images/I/71lqDylcvGL.jpg",
        },
    ];

    return (
        <>
            <p id="movies">Top Books</p>
            <div className="containerTop">
                {poster.map((item, index) => (
                    <Fragment key={item.id}>
                        <CardBig title={item.title} img={item.img} genre={item.genre} size={STAR_SIZE} color={STAR_COLOR}
                        />
                        {data.length === index + 1 ? (
                            <div style={{ marginRight: 40 }} />
                        ) : null}
                    </Fragment>
                ))}
            </div>
            <div className="rowcoba">
                <div className="column">
                <p id="movies">All Books</p>
                {data.map((item, index) => (
                    <Fragment key={item.id}>
                        
                        <CardSmall title={item.title} img={item.img} genre={item.genre} size={STAR_SIZE} color={STAR_COLOR}
                            onClick={() => alert("item id = " + item.id)}
                        />
                        {data.length === index + 1 && <div style={{ marginBottom: 80 }} />}
                    </Fragment>
                ))}
                </div>
                <div className="column">
                <p id="movies">All Books</p>
                {data.map((item, index) => (
                    <Fragment key={item.id}>
                        <CardSmall title={item.title} img={item.img} genre={item.genre} size={STAR_SIZE} color={STAR_COLOR}
                            onClick={() => alert("item id = " + item.id)}
                        />
                        {data.length === index + 1 && <div style={{ marginBottom: 80 }} />}
                    </Fragment>
                ))}
                </div>
            </div>
        </>
    );
}
