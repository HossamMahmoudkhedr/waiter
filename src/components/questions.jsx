import { Box, Stack } from '@mui/material';
import React, { useState } from 'react';
import Heading from '../utils/heading';
import { questions } from '../data/questionsData';
import Question from '../utils/question';
import { icons } from '../utils/icons';
import { motion } from 'framer-motion';

const Questions = () => {
	const [isOpened, setIsOpened] = useState(Array(questions.length).fill(false));

	const toggleQuestion = (index) => {
		const newIsOpened = [...isOpened];
		newIsOpened[index] = !newIsOpened[index];
		setIsOpened(newIsOpened);
	};

	const scrollTotheTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};
	return (
		<Box
			id="questions"
			className="container">
			<Stack
				className="set-padding"
				direction={{ xs: 'column', lg: 'row' }}
				sx={{ gap: { xs: '1.25rem', lg: '2.25rem' }, position: 'relative' }}>
				<Box
					onClick={scrollTotheTop}
					component="span"
					sx={{
						position: 'absolute',
						bottom: '0',
						right: '0',
						backgroundColor: 'var(--blue)',
						padding: '1rem',
						borderRadius: '0.75rem',
						cursor: 'pointer',
					}}>
					{icons.up}
				</Box>
				<Box width={{ xs: '100%', lg: '35%' }}>
					<Heading
						text="أبرز الأسئلة الشائعة"
						right={true}
						left={false}
					/>
				</Box>
				<Stack>
					{questions.map((question, i) => (
						<Box
							component={motion.div}
							initial={{ transform: 'translateY(50%)', opacity: 0 }}
							whileInView={{
								transform: 'translateY(0%)',
								opacity: 1,
							}}
							transition={{
								duration: 1,
								delay: i > 0 ? i - 0.5 : 0,
								type: 'spring',
							}}
							viewport={{ once: true }}
							key={question.id}
							onClick={() => toggleQuestion(i)}
							sx={{
								borderBottom: `${
									i !== questions.length - 1
										? '1px solid var(--very-light-gray)'
										: 'unset'
								}`,
								padding: `${i !== 0 ? '1.5rem 0 1.5rem 0' : '0 0 1.5rem 0'}`,
								transition: 'all 0.3s ease-out',
								cursor: 'pointer',
							}}>
							<Question
								question={question.question}
								answer={question.answer}
								opened={isOpened[i]}
							/>
						</Box>
					))}
				</Stack>
			</Stack>
		</Box>
	);
};

export default Questions;
