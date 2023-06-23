import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import './App.css';

const listOfCards = [
	{ title: 'CARD #1', color: 'green' },
	{ title: 'CARD #2', color: 'brown' },
	{ title: 'CARD #3', color: 'red' },
	{ title: 'CARD #4', color: 'black' },
	{ title: 'CARD #5', color: 'blue' },
	{ title: 'CARD #6', color: 'purple' },
];

const map = {
	0: {
		scale: 1,
		translateX: 0,
		zIndex: 3,
		top: 0,
		height: '300px',
		width: '300px',
	},
	1: {
		scale: 1,
		translateX: '200px',
		zIndex: 2,
		top: '20px',
		height: '260px',
		width: '300px',
	},
	2: {
		scale: 1,
		translateX: '400px',
		zIndex: 1,
		top: '40px',
		height: '220px',
		width: '300px',
	},
	3: {
		scale: 0,
		translateX: 0,
		zIndex: 0,
		top: 0,
		height: 0,
		width: 0,
	},
	4: {
		scale: 0,
		translateX: 0,
		zIndex: 0,
		top: 0,
		height: 0,
		width: 0,
	},
	5: {
		scale: 0,
		translateX: 0,
		zIndex: 0,
		top: 0,
		height: 0,
		width: 0,
	},
};

function App() {
	const [cards, setCards] = useState(listOfCards);

	const next = useCallback(() => {
		setCards(([first, ...rest]) => [...rest, first]);
	}, []);

	const prev = useCallback(() => {
		setCards((previous) => [previous.at(-1), ...previous.slice(0, -1)]);
	}, []);

	return (
		<div className='card-wrapper'>
			<div className='card-stack'>
				{cards.map((card, index) => (
					<motion.div
						key={card.color}
						animate={{
							top: map[index].top,
							width: map[index].width,
							scale: map[index].scale,
							height: map[index].height,
							zIndex: map[index].zIndex,
							translateX: map[index].translateX,
							dur: 5,
						}}
						className='card'
						style={{ backgroundColor: card.color }}
					>
						{card.title}
					</motion.div>
				))}
			</div>
			<div>
				<button onClick={prev}>prev</button>
				<button onClick={next}>next</button>
			</div>
		</div>
	);
}

export default App;
