import React, { useEffect, useState } from "react"
import './App.css';

import headerResponse from './header.json';
import sectionResponse from './sections.json';
import menuItemsResponse from './menu-items.json';

import Layout from "./modules/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
	const [isArrowButtonVisible, setIsArrowButtonVisible] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", listenToScroll);

		return () => {
			window.removeEventListener("scroll", listenToScroll);
		};
	}, []);

	const listenToScroll = () => {
		const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
		setIsArrowButtonVisible((winScroll >= 300));
	}

	const renderMainMenu = () => {
		return (
			<Layout 
				menuItems={menuItemsResponse.menu.items} 
				sections={sectionResponse.sections} 
				showButtonGoHeader={isArrowButtonVisible} 
				header={headerResponse.header}
			/>
		)
	}

	const renderDeliveryMenu = () => {
		return (
			<Layout 
				menuItems={menuItemsResponse.menu.items} 
				sections={sectionResponse.sections} 
				showButtonGoHeader={isArrowButtonVisible} 
				header={headerResponse.header}
			/>
		)
	}

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={renderMainMenu()} />
				<Route path="/delivery" element={renderDeliveryMenu()} />
			</Routes>
		</BrowserRouter>		
	);
}

export default App;
