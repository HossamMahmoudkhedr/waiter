import { Box, Stack } from '@mui/material';
import React, { useState } from 'react';
import Heading from '../utils/heading';
import { questions } from '../data/questionsData';
import Question from '../utils/question';

const Questions = () => {
	const [isOpened, setIsOpened] = useState(Array(questions.length).fill(false));

	const toggleQuestion = (index) => {
		const newIsOpened = [...isOpened];
		newIsOpened[index] = !newIsOpened[index];
		setIsOpened(newIsOpened);
	};
	return (
		<Box className="container">
			<Stack
				className="set-padding"
				direction={{ xs: 'column', lg: 'row' }}
				sx={{ gap: { xs: '1.25rem', lg: '2.25rem' } }}>
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
							key={question.id}
							onClick={() => toggleQuestion(i)}
							sx={{
								borderBottom: `${
									i !== questions.length - 1
										? '1px solid var(--very-light-gray)'
										: 'unset'
								}`,
								padding: `${i !== 0 ? '1.5rem 0' : '0 0 1.5rem 0'}`,
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
