import React from "react"
import './App.css';
import SectionList from './components/SectionList';
import data from './sections.json'
// import scrollToComponent from 'react-scroll-to-component';


function App() {

	return (
		<div className="app">
			<header className='header'>
				<img src="./images/logo.jpeg" alt="Logo do Empório Santana Bar" className='logo' />
			</header>
			<body>
				<div className="menu">
					<a href="#1">
						<div className="menu_itens">
							<img src="./images/queijo.png" alt="ícones de um queijo ilustrando a aba de porções frias" className='icones_menu' />
							<h2 className="nome_menu">Porções frias</h2>
						</div>
					</a>
					<a href="#2">
						<div className="menu_itens">
							<img src="./images/french-fries.png" alt="ícones de batata frita ilustrando a aba de porções quentes" className='icones_menu' />
							<h2 className="nome_menu">Porções quentes</h2>
						</div>
					</a>
					<a href="#5">
						<div className="menu_itens">
							<img src="./images/food.png" alt="ícones de um prato de comida ilustrando a aba de jantinhas" className='icones_menu' />
							<h2 className="nome_menu">Jantinhas</h2>
						</div>
					</a>
					<a href="#6">
						<div className="menu_itens">
							<img src="./images/diet.png" alt="ícones de hamburguer ilustrando a aba de lanches" className='icones_menu' />
							<h2 className="nome_menu">Lanches</h2>
						</div>
					</a>
				</div>
				<div className="menu">
					<a href="#7">
						<div className="menu_itens">
							<img src="./images/meat.png" alt="ícones de um filé de carne ilustrando a aba de pratos à la carte" className='icones_menu' />
							<h2 className="nome_menu">Pratos à la carte</h2>
						</div>
					</a>
					<a href="#8">
						<div className="menu_itens">
							<img src="./images/ice-cream-cup.png" alt="ícones de sorvete ilustrando a aba de proções quentes sobremesas" className='icones_menu' />
							<h2 className="nome_menu">Sobremesas</h2>
						</div>
					</a>
					<a href="#9">
						<div className="menu_itens">
							<img src="./images/cerveja.png" alt="ícones de uma caneca de chopp ilustrando a aba Bebidas Alcoólicas" className='icones_menu' />
							<h2 className="nome_menu">Bebidas Alcoólicas</h2>
						</div>
					</a>
					<a href="#17">
						<div className="menu_itens">
							<img src="./images/orange-juice.png" alt="ícones de um copo de suco ilustrando a aba      Bebidas Não Alcoólicas" className='icones_menu' />
							<h2 className="nome_menu">Bebidas Não Alcoólicas</h2>
						</div>
					</a>
				</div>
				<SectionList sections={data.sections} />
				<h3 className="titulo_produtos">Consulte nossa Equipe</h3>
				<div className="conteudo_produto">
					<p className="descricao_produto">Cervejas Artesanais</p>
					<p className="descricao_produto">Vinhos Nacionais e Importados</p>
				</div>
			</body>
			<footer>
				<p className='footer'>🚀Rocket Team©</p>
			</footer>
		</div>
	);
}

export default App;
