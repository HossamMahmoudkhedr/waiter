import { Box, Stack } from '@mui/material';
import React from 'react';
import TextContainer from './textContainer';
import { motion } from 'framer-motion';

const SolContent = ({
	title,
	head,
	text,
	img,
	xsdir,
	lgdir,
	align,
	bg,
	padding,
	width,
	gap,
	button,
	fs,
	lh,
}) => {
	return (
		<Box
			component={motion.div}
			initial={{ transform: 'translateY(50%)', opacity: 0 }}
			whileInView={{
				transform: 'translateY(0%)',
				opacity: 1,
			}}
			transition={{ duration: 1.5, type: 'spring' }}
			viewport={{ once: true }}
			sx={{
				padding: { xs: '4rem 0', md: '4rem 3rem', lg: padding },
				backgroundImage: bg
					? `url(${require(`../assets/images/${bg}`)})`
					: 'unset',
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover',
				backgroundPosition: 'center',
			}}>
			<Stack
				className="container"
				direction={{ xs: xsdir || 'column', lg: lgdir || 'row' }}
				sx={{
					alignItems: 'center',
					gap: { xs: '4rem', lg: gap || '4rem' },
					justifyContent: 'space-between',
				}}>
				<Box sx={{ width: { xs: '93%', md: '75%', lg: width } }}>
					<TextContainer
						align={align}
						head={head}
						title={title}
						text={text}
						button={button}
						fs={fs}
						lh={lh}
					/>
				</Box>
				<Stack>
					<Box>
						<img
							style={{ width: '100%' }}
							src={require(`../assets/images/${img}`)}
							alt=""
							loading="lazy"
						/>
					</Box>
				</Stack>
			</Stack>
		</Box>
	);
};

export default SolContent;
