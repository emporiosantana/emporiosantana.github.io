import React, { useEffect, useState } from "react"
import './App.css';
import MenuItem from "./components/MenuItem";
import SectionList from './components/SectionList';
import sectionResponse from './sections.json';
import menuItemsResponse from './menu-items.json';

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
				<div className="content">
					<div className="full_menu">
						<div className="menu">
							{
								menuItemsResponse.menu.items.map(menuItem => (
									<MenuItem
										srcIcon={menuItem.srcIcon}
										description={menuItem.description}
										name={menuItem.name}
										section={menuItem.section}
									/>
								))
							}
						</div>
					</div>

					<a className={`back-to-top${!isArrowVisible ? ' arrow-hide' : ''}`} href="#header">
						<img className="arrow" src="./images/up-arrow.svg" alt="Seta que retorna ao topo da página"></img>
					</a>
					<SectionList sections={sectionResponse.sections} />
					<h3 className="titulo_produtos">Consulte nossa Equipe</h3>
					<div className="conteudo_produto">
						<p className="descricao_produto">Cervejas Artesanais</p>
						<p className="descricao_produto">Vinhos Nacionais e Importados</p>
					</div>
				</div>

			</body>
			<footer>
				<p className='footer'>Empório Santana Bar ©</p>
			</footer>
		</div>
	);
}

export default App;
