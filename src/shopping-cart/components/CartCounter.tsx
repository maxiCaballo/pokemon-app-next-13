'use client';
import { Dispatch, SetStateAction, useState } from 'react';

interface ButtonProps {
	text: string;
	type: buttonPropsType;
	handleClick: Dispatch<SetStateAction<number>>;
}
type buttonPropsType = 'add' | 'substract';

const Button = ({ text, type, handleClick }: ButtonProps) => (
	<button
		className="className='flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
		onClick={() =>
			handleClick((prev) => {
				if (type === 'add') {
					return prev + 1;
				} else {
					return Math.max(0, prev - 1);
				}
			})
		}
	>
		{text}
	</button>
);

export const CartCounter = () => {
	const [counter, setCounter] = useState(0);
	return (
		<>
			<span className='text-9xl'>{counter}</span>
			<div>
				<Button text='+ 1' type='add' handleClick={setCounter} />
				<Button text='- 1' type='substract' handleClick={setCounter} />
			</div>
		</>
	);
};
