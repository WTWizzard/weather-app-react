import React from "react";

export const SecondaryCard = ({data, id}) => {
    return (
        <div className="main__cards-item sky-gradient-13" id={id}>
            <div className="main__cards-item-info">
                <p className="main__cards-item-day">{data.weather[0].name}</p>
                <p className="main__cards-item-temp">
                    <span className='main__cards-item-temp max'></span>
                    <span className='main__cards-item-temp min'></span>
                </p>
            </div>
        </div>
    )
}
