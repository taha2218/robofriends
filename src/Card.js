import React from 'react';

const Card = (props) => {
    return(
        <div className = 'light-blue bg-navy dib br3 pa3 ma2 bw2 shadow-5 grow tc'>
            <img src ={`https://robohash.org/${props.id}?200x200`} alt = 'Profile_Photo' />
            <div>
                <h2>{props.name}</h2>
                <p>{props.email}</p>
            </div>
        </div>
    );
}

export default Card ;