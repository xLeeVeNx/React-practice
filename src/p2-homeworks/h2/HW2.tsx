import React, {useState} from 'react';
import Affairs from './Affairs/Affairs';

// types
export type AffairPriorityType = 'low' | 'middle' | 'high';
export type AffairType = {
    _id: number;
    name: string;
    priority: AffairPriorityType;
    list: string[];
    className: string;
    month: string;
};
export type FilterType = 'all' | AffairPriorityType;

// constants
const defaultAffairs: AffairType[] = [
    {_id: 1, name: 'HTML', priority: 'middle', list: ['Разметка', 'Семантика', 'Валидность', 'Кроссбраузерность', 'Юзабилити'], className: 'cards__item cards__item--green', month: '2 month'},
    {_id: 2, name: 'JavaScript', priority: 'low', list: ['Веб-разработка', 'Крутость', 'Перспективность', 'Популярность', 'DOM'], className: 'cards__item cards__item--purple', month: '5 month'},
    {_id: 3, name: 'React', priority: 'high', list: ['Легкообучаемость', 'Популярность', 'Гибкость', 'Отзывчивость', 'Virtual DOM'], className: 'cards__item cards__item--yellow', month: '3 month'},
    {_id: 4, name: 'TypeScript', priority: 'low', list: ['Типизация', 'Востребованность', 'Валидность', 'Популярность', 'Совместимость'], className: 'cards__item cards__item--blue', month: '1 month'},
    {_id: 5, name: 'Redux', priority: 'high', list: ['Детерминированность', 'Транзакционность', 'Изоляционность', 'Отладка', 'Мониторинг'], className: 'cards__item cards__item--red', month: '1.5 month'},
];

// pure helper functions
export const filterAffairs = (affairs: AffairType[], filter: FilterType): AffairType[] => {
    if(filter === 'high') return affairs.filter(affair => affair.priority === 'high');
    else if(filter === 'middle') return affairs.filter(affair => affair.priority === 'middle');
    else if(filter === 'low') return affairs.filter(affair => affair.priority === 'low');

    return affairs;
};
export const deleteAffair = (affairs: AffairType[], _id: number): AffairType[] => {
    return affairs.filter(affair => affair._id !== _id);
};

function HW2() {
    const [affairs, setAffairs] = useState<AffairType[]>(defaultAffairs);
    const [filter, setFilter] = useState<FilterType>('all');

    const filteredAffairs = filterAffairs(affairs, filter);
    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id));

    return (
        <div>
            <hr/>
            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
            />
            <hr/>
        </div>
    );
}

export default HW2;