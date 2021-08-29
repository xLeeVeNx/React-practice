import React, { useState } from 'react';
import GreetingContainer from './GreetingContainer';
import { v1 } from 'uuid';

// types
export type UserType = {
	_id: string,
	name: string,
};

// уровень работы с глобальными данными
function HW3() {
	const [ users, setUsers ] = useState<UserType[]>([]); // need to fix any

	const addUserCallback = (name: string) => { // need to fix any
		setUsers([ ...users, {_id: v1(), name} ]); // need to fix
	};

	return (
		<div>
			<GreetingContainer users={ users } addUserCallback={ addUserCallback } />
			<hr />
		</div>
	);
}

export default HW3;
