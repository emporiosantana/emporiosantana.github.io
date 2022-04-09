import React, { useEffect, useState } from "react"
import './App.css';

import sectionResponse from './sections.json';
import menuItemsResponse from './menu-items.json';

import Layout from "./modules/Layout";

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

	return (
		<Layout 
			menuItems={menuItemsResponse.menu.items} 
			sections={sectionResponse.sections} 
			showButtonGoHeader={isArrowButtonVisible} 
		/>
	);
}

export default App;
