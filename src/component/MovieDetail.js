// src/components/MovieDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';

const moviesData = [
    {
        id: 1,
        title: "Ambatufilm",
        genre: "Ngawifest",
        description: "Seorang mas mas hitam yang ingin mengajr cita-cita tujuan hidupnya menjadi idol JMK48, dengan segala jerih payah jatuh bangun bangun jatuh lorem ipsum apakah mas mas ngawi ini pada akhirnya bisa mencapai cita-citanya sebagi idol JMK48??????",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB5hAXfwnN5fZ9ojeTMKVvoq2BqHWp1K29aFjO2OMvkmvHTql8YW6w0A7IsxAlsET4OUk&usqp=CAU",
    },
    {
        id: 2,
        title: "The Imitation Game",
        genre: "action, sci-fi",
        description: "A thief who steals corporate secrets through dream-sharing technology is given the task of planting an idea into a CEO's mind.",
        img: "https://m.media-amazon.com/images/I/51zWfB+K3BL._AC_.jpg",
    },
    {
        id: 3,
        title: "A Beautiful mind",
        genre: "action, thriller",
        description: "An ex-hitman comes out of retirement to track down the gangsters that took everything from him.",
        img: "https://m.media-amazon.com/images/I/71s7T8F3UeL._AC_SY679_.jpg",
    },
    
];

const MovieDetail = () => {
    const { id } = useParams();
    const movie = moviesData.find(movie => movie.id === parseInt(id));

    if (!movie) {
        return <h2>Movie not found!</h2>;
    }

    return (
        <div style={{ textAlign: 'center', color: 'white' }}>
    <h1>{movie.title}</h1>
    <img src={movie.img} alt={movie.title} style={{ width: '300px' }} />
    <p><strong>Genre:</strong> {movie.genre}</p>
    <p>{movie.description}</p>
</div>

    );
};

export default MovieDetail;
