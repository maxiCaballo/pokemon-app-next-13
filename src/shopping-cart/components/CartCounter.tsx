'use client';
import { useAppDispatch, useAppSelector } from '@/store';
import { addOne, substractOne } from '@/store/counter/counterSlice';
// import { Dispatch, SetStateAction, useState } from 'react';

interface PageProps {
  value?: number;
}

interface ButtonProps {
  text: string;
  handleClick: () => void;
}
const Button = ({ text, handleClick }: ButtonProps) => (
  <button
    className="className='flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
    onClick={() => handleClick()}
  >
    {text}
  </button>
);

export const CartCounter = ({ value = 0 }: PageProps) => {
  const count = useAppSelector((state) => state.count.counter);
  const dispatch = useAppDispatch();
  return (
    <>
      <span className="text-9xl">{count}</span>
      <div>
        <Button text="+ 1" handleClick={() => dispatch(addOne())} />
        <Button text="- 1" handleClick={() => dispatch(substractOne())} />
      </div>
    </>
  );
};
