import React, { useContext, useEffect, useState } from "react";
import "../../styles/home.scss";
import { Context } from "../store/appContext";

export const Home = () => {
	const { actions } = useContext(Context);
	const [characters, setCharacters] = useState(actions.getCharacters());

	useEffect(() => {
		if (characters.length === 0) {
			fetch("https://www.swapi.tech/api/people")
				.then(response => response.json())
				.then(data => actions.setCharacters(data.results))
				.then(() => setCharacters(actions.getCharacters()));
		}
	}, []);

	return (
		<div className="mt-5">
			<h1>Characters</h1>
		</div>
	);
};
