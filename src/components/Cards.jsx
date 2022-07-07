import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
import Posts from'./data';
function Cards(){
    return (
        <div className="cards">
            <br/>
            <h1>Bài viết gần đây</h1>
            <br/>
            {console.log(Posts)}
            <div className="cards__container">
                <div className="card__wrapper">
                        <CardItem
                            src='images/img-2.jpg'
                            text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
                            label='Bài Viết'
                            path='/services'
                        />
                    <ul className='cards__items'>
                        <CardItem
                            src='images/img-3.jpg'
                            text='Experience Football on Top of the Himilayan Mountains'
                            label='Adventure'
                            path='/products'
                        />
                        <CardItem
                            src='images/img-4.jpg'
                            text='Experience Football on Top of the Himilayan Mountains'
                            label='Adventure'
                            path='/products'
                        />
                        <CardItem
                            src='images/img-8.jpg'
                            text='Ride through the Sahara Desert on a guided camel tour'
                            label='Adrenaline'
                            path='/products'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards;