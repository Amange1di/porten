import React from 'react';
import "./season.css";
import Card from '../card/Card';

const Season = () => {
    const cardLimit = 3; 
    return (
        <div className='Season'>
            <div className='Season_content'>
                <div className='Season_generalOne'>
                    <h2 className='title_h2'>СЕЗОН 2020/21</h2>
                    <div className='line'></div>
                    <div className="generalCard">
                        <Card limit={cardLimit} /> 
                    </div>
                </div>
                <div className='Season_generalTwo'>
                    <div>
                    <h2 className='title_h2'>Новая коллекция</h2>
                    <div className='line'></div>
                    <button>Каталог</button></div>
                </div>
            </div>
        </div>
    );
};

export default Season;
