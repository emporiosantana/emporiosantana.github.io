import React, { useEffect, useState } from "react"
import './App.css';
import SectionList from './components/SectionList';
import data from './sections.json'
// import scrollToComponent from 'react-scroll-to-component';

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
							<a href="#porcoesfrias">
								<div className="menu_itens">
									<img src="./images/queijo.svg" alt="ícones de um queijo ilustrando a aba de porções frias" className='icones_menu' />
									<h2 className="nome_menu">Porções frias</h2>
								</div>
							</a>
							<a href="#porcoesquentes">
								<div className="menu_itens">
									<img src="./images/french-fries.svg" alt="ícones de batata frita ilustrando a aba de porções quentes" className='icones_menu' />
									<h2 className="nome_menu">Porções quentes</h2>
								</div>
							</a>
							<a href="#jantinhas">
								<div className="menu_itens">
									<img src="./images/food.svg" alt="ícones de um prato de comida ilustrando a aba de jantinhas" className='icones_menu' />
									<h2 className="nome_menu">Jantinhas</h2>
								</div>
							</a>
							<a href="#lanches">
								<div className="menu_itens">
									<img src="./images/diet.svg" alt="ícones de hamburguer ilustrando a aba de lanches" className='icones_menu' />
									<h2 className="nome_menu">Lanches</h2>
								</div>
							</a>
						</div>
						<div className="menu">
							<a href="#pratos">
								<div className="menu_itens">
									<img src="./images/meat.svg" alt="ícones de um filé de carne ilustrando a aba de pratos à la carte" className='icones_menu' />
									<h2 className="nome_menu">Pratos à la carte</h2>
								</div>
							</a>
							<a href="#sobremesas">
								<div className="menu_itens">
									<img src="./images/ice-cream-cup.svg" alt="ícones de sorvete ilustrando a aba de proções quentes sobremesas" className='icones_menu' />
									<h2 className="nome_menu">Sobremesas</h2>
								</div>
							</a>
							<a href="#bebAlcool">
								<div className="menu_itens">
									<img src="./images/cerveja.svg" alt="ícones de uma caneca de chopp ilustrando a aba Bebidas Alcoólicas" className='icones_menu' />
									<h2 className="nome_menu">Bebidas Alcoólicas</h2>
								</div>
							</a>
							<a href="#bebNaoAlcool">
								<div className="menu_itens">
									<img src="./images/orange-juice.svg" alt="ícones de um copo de suco ilustrando a aba      Bebidas Não Alcoólicas" className='icones_menu' />
									<h2 className="nome_menu">Bebidas Não Alcoólicas</h2>
								</div>
							</a>
						</div>
					</div>

					<a className={`back-to-top${!isArrowVisible ? ' arrow-hide' : ''}`} href="#header">
						<img className="arrow" src="./images/up-arrow.svg" alt="Seta que retorna ao topo da página"></img>
					</a>
					<SectionList sections={data.sections} />
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
