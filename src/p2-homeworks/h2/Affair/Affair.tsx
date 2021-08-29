import React from 'react';
import {AffairType} from '../HW2';
import '../Affairs/Affairs.scss';

type AffairPropsType = {
    affair: AffairType;
    deleteAffairCallback: (_id: number) => void;
};

function Affair(props: AffairPropsType) {
    const deleteCallback = (_id: number) => props.deleteAffairCallback(_id);

    return (
        <div className={props.affair.className}>
            <div className="cards__box">
                <div className="cards__item-wrap">
                    <h2 className="cards__title">{props.affair.name}</h2>
                    <div className="cards__text">need to learn</div>
                </div>
                <div className="cards__desc"><span>{props.affair.month}</span></div>
            </div>

            <div className="cards__pentagon"><span>{props.affair._id} step</span></div>

            <ul className="cards__list">
                {
                    props.affair.list.map((item, index) => (<li className="cards__list-item" key={index}>{item}</li>))
                }
            </ul>

            <button className="cards__item-button" onClick={()=> deleteCallback(props.affair._id)}>Удалить</button>
        </div>
    )
}

export default Affair;
