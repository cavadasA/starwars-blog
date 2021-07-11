import React, { useContext, useEffect, useState } from "react";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import { Card } from "../component/card";

export const Home = () => {
	const { actions } = useContext(Context);
	const [characters, setCharacters] = useState(actions.getCharacters());
	const [charactersProps, setCharactersProps] = useState([]);

	function pruebisima() {
		characters.forEach(element => {
			fetch(element[url])
				.then(response => response.json())
				.then(data => console.log(data.result));
		});
	}

	useEffect(() => {
		if (characters.length === 0) {
			fetch("https://www.swapi.tech/api/people")
				.then(response => response.json())
				.then(data => actions.setCharacters(data.results))
				.then(() => setCharacters(actions.getCharacters()))
				.then(() => pruebisima());
		}
	}, []);

	return (
		<div className="mt-5 ml-5 row">
			<h1>Characters</h1>
			{charactersProps.map(character => {
				return (
					<div className="col-4" key={character.uid}>
						<Card
							key={character.uid}
							name={character.result.properties.name}
							gender={character.result.properties.gender}
						/>
					</div>
				);
			})}
		</div>
	);
};
