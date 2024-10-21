import { Fragment } from "react";
import CardBig from "../component/CardBig"; import CardSmall from "../component/CardSmall"; import "./Movie.css";

export default function Buku() {
    const STAR_COLOR = "rgb(220, 117, 21)";
    const STAR_SIZE = 20;

    const poster = [
        {
            title: "Battle of Rongawi", id: 1,
            rate: 4,
            genre: "Fighting",
            img: "https://i.pinimg.com/736x/8b/f8/be/8bf8be47ffaa803caabeb0f1e39b34b9.jpg",
        },
        {
            title: "Prince Amba", id: 2,
            rate: 4,
            genre: "Openworld",
            img: "https://i.pinimg.com/564x/b4/5c/85/b45c85c256a3a2726871e52fc62ac3ed.jpg",
        },
        {
            title: "AmbatuResing", id: 3,
            rate: 4,
            genre: "Race",
            img: "https://i.pinimg.com/736x/8b/f8/be/8bf8be47ffaa803caabeb0f1e39b34b9.jpg",
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
            <p id="movies">Top Games</p>
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
                <p id="movies">All Games</p>
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
                <p id="movies">All Games</p>
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
