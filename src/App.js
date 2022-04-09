import React, { useEffect, useState } from "react"
import './App.css';

import sectionResponse from './sections.json';
import menuItemsResponse from './menu-items.json';

import ArrowUp from "./components/ArrowUp";
import SectionList from './modules/SectionList';
import MenuItems from "./modules/MenuItems";

function App() {
	const [isArrowVisible, setIsArrowVisible] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", listenToScroll);

		return () => {
			window.removeEventListener("scroll", listenToScroll);
		};
	}, []);

	const listenToScroll = () => {
		const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
		setIsArrowVisible((winScroll >= 300));
	}

	return (

		<div className="app">
			<header className='header' id="header">
				<img src="./images/logo.jpeg" alt="Logo do Empório Santana Bar" className='logo' />
				<img src="./images/ondulacao.jpeg" alt="efeito de onda" className="ondulacao" />
			</header>

			<body>
				<main className="content">
					<MenuItems items={menuItemsResponse.menu.items} />

					<SectionList sections={sectionResponse.sections} />

					<ArrowUp visible={isArrowVisible} description={'Seta que retorna ao topo da página'} href="#header" />
										
					<h3 className="titulo_produtos">Consulte nossa Equipe</h3>
					<div className="conteudo_produto">
						<p className="descricao_produto">Cervejas Artesanais</p>
						<p className="descricao_produto">Vinhos Nacionais e Importados</p>
					</div>
				</main>

			</body>
			<footer>
				<p className='footer'>Empório Santana Bar ©</p>
			</footer>
		</div>
	);
}

export default App;
