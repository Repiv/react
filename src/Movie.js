import React from 'react';

export default ({Poster, Title}) => (
    <div className="movie">
        <img src={Poster}/>
        <h3>{Title}</h3>
    </div>
);
