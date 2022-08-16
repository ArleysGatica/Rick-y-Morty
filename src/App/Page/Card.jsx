import React, { useState } from 'react';
import { MdOutlineFavoriteBorder, MdFavorite  } from "react-icons/md";

const Card = ({ data }) => {

    const [localStorage, setlocalStorage] = useState(false);
    const [favorite, setFavorite] = useState(() => {
        try {
            const fav = window.localStorage.getItem('favorite');
            return fav ? JSON.parse(fav) : [];
        } catch (e) {
            return [];
        }
    });

    const handleFavorite = () => {
        if (!localStorage) {
            setlocalStorage(true);
            const newFavorite = [...favorite, data];
            window.localStorage.setItem('favorite', JSON.stringify(newFavorite));
            setFavorite(newFavorite);
            console.log(`${data.name} added to favorite`);
        } else {
            const newFavorite = favorite.filter(item => item.id !== data.id);
            window.localStorage.setItem('favorite', JSON.stringify(newFavorite));
            setFavorite(newFavorite);
            console.log(`${data.name} removed from favorite`);
        }
        setlocalStorage( !localStorage);
          }

    return (
        <>
            <article className="page__content__card">
                <div className="Item">
                    <img src={data.image} alt={data.name} />
                </div>
                <div className="seccion-title">
                    <h1>{`${data.name}`}</h1>
                    <p>{data.status}</p>
                    <p>{data.species}</p>
                    <p>{data.type}</p>
                    <p id="specie">
                        {data.species.name === "Human"
                            ? data.origin.name
                            : data.location.name}
                    </p>
                    <div className="botones">
                            <button onClick={handleFavorite}>
                                {favorite.find(item => item.id === data.id)
                                    ? <MdFavorite size={30} color="#f00" />
                                    : <MdOutlineFavoriteBorder size={30} color="#000" />}
                            </button>
                    </div>
                </div>
            </article>
        </>
    );
};

export default Card;
