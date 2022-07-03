import { FaChevronUp } from 'react-icons/fa';
import ContainerSection1 from '../../layout/common/ContainerSection1';
import { Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import data from './data';
import * as React from 'react';
import { useState } from 'react';

// @ts-ignore
const Accordion = styled(props => <MuiAccordion disableGutters elevation={1} square {...props} />)<{
	children?: React.ReactNode;
	expanded?: boolean;
	onChange(e: any, newExpanded: boolean): void;
}>(() => ({
	background: 'transparent',
	color: '#fff',
	border: `1px solid #fff`,
	borderRadius: '15px',
	marginBottom: '25px',
	'&:before': {
		display: 'none',
	},
}));

const AccordionSummary = styled(props => (
	<MuiAccordionSummary expandIcon={<FaChevronUp color="#fff" />} {...props} />
))<{ children?: React.ReactNode }>(({ theme }) => ({
	flexDirection: 'row',
	'& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
		transform: 'rotate(180deg)',
	},
	'& .MuiAccordionSummary-content': {
		marginLeft: theme.spacing(1),
	},
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
	padding: theme.spacing(2),
	borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

const Ayuda = () => {
	const [expanded, setExpanded] = useState('panel0-General');

	const handleChange = (panel: string) => (event: any, newExpanded: boolean) => {
		setExpanded(newExpanded ? panel : '');
	};

	return (
		<ContainerSection1>
			<Container maxWidth="lg" style={{ marginTop: '125px' }}>
				{data.map(d => (
					<React.Fragment key={d.titulo}>
						<Typography
							variant="h5"
							marginBottom={4}
							color={'#fff'}
						>
							{d.titulo}
						</Typography>
						{d.data.map(({ titulo, descripcion }, index) => (
							<Accordion
								key={d[1]}
								expanded={
									expanded ===
									`panel${index}-${d.titulo}`
								}
								onChange={handleChange(
									`panel${index}-${d.titulo}`
								)}
							>
								<AccordionSummary
									aria-controls={`panel${index}d-content`}
								>
									<Typography
										variant="h5"
										fontWeight={600}
									>
										{titulo}
									</Typography>
								</AccordionSummary>
								<AccordionDetails>
									<Typography>
										{descripcion}
									</Typography>
								</AccordionDetails>
							</Accordion>
						))}
					</React.Fragment>
				))}
			</Container>
		</ContainerSection1>
	);
};

export default Ayuda;
