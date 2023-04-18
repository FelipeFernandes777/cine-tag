import Inicio from "./Pages/Inicio";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Favoritos from "Pages/favoritos";
import Player from "Pages/Player";
import NaoEncontrada from "Pages/NaoEncontrada";
import PaginaBase from "Pages/PaginaBase";

export default function AppRoutes() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<PaginaBase />}>
					<Route index element={<Inicio />} />
					<Route path="favoritos" element={<Favoritos />} />
					<Route path=":id" element={<Player />} />
					<Route path='*' element={<NaoEncontrada />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
