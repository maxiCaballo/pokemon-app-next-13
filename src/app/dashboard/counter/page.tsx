import { CartCounter } from '@/shopping-cart';

export const metadata = {
	title: 'Shopping cart',
	description: 'simple counter',
};

export default function CounterPage() {
	return (
		<div className='flex flex-col items-center justify-center w-full h-full'>
			<span>Products cart</span>
			<CartCounter />
		</div>
	);
}
