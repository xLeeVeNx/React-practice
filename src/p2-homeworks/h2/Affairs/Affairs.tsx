import React from 'react';
import Affair from '../Affair/Affair';
import {AffairType, FilterType} from '../HW2';
import './Affairs.scss';

type AffairsPropsType = {
    data: AffairType[];
    setFilter: (string: FilterType) => void;
    deleteAffairCallback: (_id: number) => void;
}

function Affairs(props: AffairsPropsType) {
    const setAll = () => {
        props.setFilter('all');
    };
    const setHigh = () => {
        props.setFilter('high');
    };
    const setMiddle = () => {
        props.setFilter('middle');
    };
    const setLow = () => {
        props.setFilter('low');
    };

    return (
        <div className="cards">
            <div className="cards__items">
                {
                    props.data.map((a: AffairType) => (
                        <Affair
                            key={a._id}
                            affair={a}
                            deleteAffairCallback={props.deleteAffairCallback}
                        />
                    ))
                }
            </div>
            <div className="cards__buttons">
                <button className="cards__button" onClick={setAll}>All</button>
                <button className="cards__button" onClick={setHigh}>High</button>
                <button className="cards__button" onClick={setMiddle}>Middle</button>
                <button className="cards__button" onClick={setLow}>Low</button>
            </div>
        </div>
    );
}

export default Affairs;
