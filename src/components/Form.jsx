import React from "react";
import { useState } from "react";
import Card from './Card';
import styles from './Form.module.css';

const Form = () => {
    
    const [favouriteShow, setFavouriteShow] = useState("");
    const [favouriteMovie, setFavouriteMovie] = useState("");
    const [errorInput, setErrorInput] = useState("");
    const [showCard, setShowCard] = useState(false);
    
    const onChangeFavouriteShow = (e) => setFavouriteShow(e.target.value);
    const onChangeFavouriteMovie = (e) => setFavouriteMovie(e.target.value);
    
    const onSubmitForm = (e) => {
        
        e.preventDefault();
        
        const validFavouriteShow = favouriteShow.trim();
        
        if(validFavouriteShow.length >= 3 && favouriteMovie.length >= 6) {
            setErrorInput("");
            setShowCard(true);
        }
        else {
            setErrorInput("Por favor, chequea que la información sea correcta");
            setShowCard(false);
        }
    }
    
    return (
        <form onSubmit={onSubmitForm}>
            <input type="text" placeholder="Ingresa tu serie favorita" value={favouriteShow} onChange={onChangeFavouriteShow}/>
            <input type="text" placeholder="Ingresa tu película favorita" value={favouriteMovie} onChange={onChangeFavouriteMovie}/>
            <button type="submit" className={styles.button}>Enviar</button>
            {errorInput ? <div className={styles.error}>{errorInput}</div> : null}
            {showCard ? <Card show={favouriteShow} movie={favouriteMovie}/> : null}
        </form>
    )
}

export default Form;