'use client';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/store';
import { addOne, resetCounter, initCounterState, substractOne } from '@/store/counter/counterSlice';
import { getInitalCounter } from '@/services';

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

  //*Metodo 1
  // useEffect(() => {
  //   dispatch(initCounterState(value));
  // }, [dispatch, value]);

  //*Metodo 2
  useEffect(() => {
    getInitalCounter().then(({ data: { count } }) => {
      dispatch(initCounterState(count));
    });
  }, [dispatch]);

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

//Todo:
/*
4- Explicar porque el provider de redux es use client y porque deberian estar ahi nuestras inicializaciones de estado.

 - Porque tengo que usar el metodo del initCounterState y el endpoint para inicializar el counter ?
 
 Porque sino cada vez que salgo de la page dashboard/counter y entro se me va a reiniciar el contador. Esto sucede porque el componente counter recibe un value
 y como la page es ssr y tiene el componente counter cada vez que entro y salgo de la misma hago peticion al servidor y le vuelve a mandar el valor establecido.
 
 Por lo tanto tenemos dos metodos para corregir esta problematica:

 1)Solucionandolo desde el gestor de estado que es csr (client side rendering) y cada vez que hace la peticion de la page el componente se monta, le pasa el value y
  con una variable auxiliar, recuerda que ya fue inicializada, de lo contrario la inicializa.
   
 2)Haciendo un llamado http a un endpoint local que me retorna el valor de inicio y no uso el value que recibo del componente. 

*/
