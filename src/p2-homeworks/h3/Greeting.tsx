import React, { ChangeEvent, KeyboardEvent } from 'react';
import s from './Greeting.module.css';

type GreetingPropsType = {
	name: string, // need to fix any
	setNameCallback: (event: ChangeEvent<HTMLInputElement>) => void, // need to fix any
	addUser: () => void, // need to fix any
	error: string, // need to fix any
	totalUsers: number, // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
	{name, setNameCallback, addUser, error, totalUsers}, // деструктуризация пропсов
) => {

	const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => event.charCode === 13 && addUser();

	return (
		<div>
			<div className={ s.box }>
				<div className={ s.container }>
					<input value={ name } onChange={ setNameCallback }
					       className={ `${ s.input } ${ error ? s.error : '' }` }
					       placeholder="Name" onKeyPress={ onKeyPressHandler } />
					<span className={ `${ error ? s.errorText : '' }` }>{ error }</span>
				</div>
				<button className={ s.button } onClick={ addUser }><span>add</span></button>
				<span className={ s.count }>{ totalUsers }</span>
			</div>
		</div>
	);
};

export default Greeting;
