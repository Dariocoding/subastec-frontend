import styled from 'styled-components';
import { Tabs, TabPanel, Tab, TabList } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Grid } from '@mui/material';
import * as React from 'react';
import CardTab from './CardTab';
import InfiniteScroll from 'react-infinite-scroller';
import { CategoriaType, FavoritosType, SubastaType } from '../../../../../entities';
import clienteAxios from '../../../../../config/axios';
import DataGridPlaceholder from '../../../../layout/common/placeholders/DataGridPlaceholder';
import { useAuthContext } from '../../../../../context/autenticacion/authState';

const Container = styled.div`
	.tab_heading h1 {
		font-size: 55px;
		font-weight: 700;
		color: #35407e;
		text-align: center;
		padding: 35px 0px 20px 0px;
	}

	.react-tabs__tab-list {
		border-bottom: none;
		text-align: center;
		padding-bottom: 0px;
	}

	.react-tabs__tab {
		transition: all 0.3s ease;
		margin: 5px 5px;
		padding: 10px 20px;
	}

	.react-tabs__tab:hover,
	.react-tabs__tab--selected {
		background: #2c75b2;
		border-radius: 35px;
		color: #fff;
	}

	.react-tabs__tab-panel.react-tabs__tab-panel--selected {
		-webkit-animation: fadeInUp 500ms ease-in-out; /* Chrome, Safari, Opera */
		animation: fadeInUp 500ms ease-in-out;
	}
`;

const TabsCategories = () => {
	const limit = 3;
	const { usuario } = useAuthContext();
	const [selectedIndex, setSelectedIndex] = React.useState(0);
	const [categoriaSeleccionada, setCategoriaSeleccionada] = React.useState(0);
	const [categorias, setCategorias] = React.useState<CategoriaType[]>([]);
	const [subastas, setSubastas] = React.useState<SubastaType[]>([]);
	const [totalSubastas, setTotalSubastas] = React.useState(0);
	const [favoritos, setFavoritos] = React.useState<FavoritosType[]>([]);
	const [page, setPage] = React.useState(1);
	const [loadingSubastas, setLoadingSubastas] = React.useState(true);
	const [loadingCategorias, setLoadingCategorias] = React.useState(true);

	React.useEffect(() => {
		async function fetchCategorias() {
			setLoadingCategorias(true);
			const reqCategorias = await clienteAxios('categorias/selectCategorias');
			if (categoriaSeleccionada === 0) {
				setCategoriaSeleccionada(
					reqCategorias.data[0]
						? reqCategorias.data[0].idcategoria
						: 0
				);
			}

			setCategorias(reqCategorias.data);
			setLoadingCategorias(false);
		}
		fetchCategorias();
	}, []);

	React.useEffect(() => {
		async function fetchFavoritos() {
			if (usuario.iduser) {
				const url = `favoritos/findByUserId/${usuario.iduser}`;
				const favoritos = await clienteAxios(url);
				setFavoritos(favoritos.data);
			} else setFavoritos([]);
		}
		fetchFavoritos();
	}, [usuario.iduser]);

	React.useEffect(() => {
		fetchSubastas();
	}, [categoriaSeleccionada]);

	const onSelectTab = (tabIndex: number) => {
		setSelectedIndex(tabIndex);
		setSubastas([]);
		setPage(1);
		const categoria = categorias.at(tabIndex);
		setCategoriaSeleccionada(categoria.idcategoria);
	};

	async function fetchSubastas() {
		if (!categoriaSeleccionada) return;
		setLoadingSubastas(true);
		let urlSubastas: string;
		const idCategoriaPaqueteBids = -1;
		const idTodas = -2;
		if (categoriaSeleccionada === idCategoriaPaqueteBids) {
			urlSubastas = `subastas/getSubastasByPaqueteBids/?page=${page}&limit=${limit}`;
		} else if (categoriaSeleccionada === idTodas) {
			urlSubastas = `subastas/getSubastasHome/?page=${page}&limit=${limit}`;
		} else {
			urlSubastas = `subastas/getSubastasByCategoriaId/${categoriaSeleccionada}?page=${page}&limit=${limit}`;
		}
		const req = await clienteAxios(urlSubastas);
		setLoadingSubastas(false);

		setTotalSubastas(req.data.totalSubastas);
		setSubastas([...subastas, ...req.data.subastas]);
		setPage(page + 1);
	}

	const setSubasta = (s: SubastaType) => {
		setSubastas(
			subastas.map(sbt =>
				sbt.idsubasta === s.idsubasta ? { ...sbt, ...s } : sbt
			)
		);
	};

	return (
		<Container id="subastas-en-vivo">
			<div className="tab_heading">
				<h1>Subastas en vivo</h1>
			</div>

			<Tabs onSelect={onSelectTab}>
				<TabList>
					{categorias.map(c => (
						<Tab key={c.idcategoria}>{c.nombre}</Tab>
					))}
				</TabList>
				{categorias.map(c => (
					<TabPanel key={c.idcategoria}>
						<InfiniteScroll
							hasMore={subastas.length < totalSubastas}
							loader={
								<DataGridPlaceholder
									key={c.idcategoria}
								/>
							}
							loadMore={fetchSubastas}
							key={c.idcategoria}
						>
							<Grid container spacing={4}>
								{subastas.map((s, index) => (
									<CardTab
										setSubasta={
											setSubasta
										}
										subasta={s}
										setFavoritos={
											setFavoritos
										}
										favoritos={
											favoritos
										}
										key={index}
									/>
								))}
							</Grid>
						</InfiniteScroll>
					</TabPanel>
				))}
			</Tabs>
		</Container>
	);
};

export default TabsCategories;
