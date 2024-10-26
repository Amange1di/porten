// Card.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import cardImage from "../../assets/card.png"; // Путь к изображению
import { useNavigate } from "react-router-dom";
import "./card.css";

const baseURL = "https://jsonplaceholder.typicode.com/posts?_limit=10"; // URL для получения данных

const Card = ({ limit }) => {
    const navigate = useNavigate();
    const [cards, setCards] = useState([]);

    const truncateText = (text) => {
        return text.split(' ').slice(0, 5).join(' ') + (text.split(' ').length > 2 ? '...' : '');
    };

    const handleClick = (id) => {
        navigate(`/detail/${id}`); 
    };

    const fetchCardData = async () => {
        try {
            const res = await axios.get(baseURL);
            setCards(res.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchCardData();
    }, []);

    return (
        <div className="generalCard">
            {cards.slice(0, limit).map((card) => (
                <div className="card" key={card.id}>
                    <div className="cardimg">
                        <img src={cardImage} alt={card.title} />
                    </div>
                    <h5 onClick={() => handleClick(card.id)}>{truncateText(card.title)}</h5>
                    <p>{truncateText(card.body)}</p>
                </div>
            ))}
        </div>
    );
};

export default Card;
