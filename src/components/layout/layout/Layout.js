import React from 'react';
import S from './style.js';
import NavSection from '../navSection/NavSection.js';
import { Outlet } from 'react-router-dom';
import SideSection from '../sideSection/SideSection.js';

const Layout = () => {
	return (
		<S.WindowsContainer>
			<NavSection />
			<S.Seperator>
				<Outlet />
			</S.Seperator>
			<SideSection />
		</S.WindowsContainer>
	);
};

export default Layout;