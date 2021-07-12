import React, { useContext, useEffect, useState } from "react";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import { Card } from "../component/card";
import loading from "../../img/giphy.gif";

export const Home = () => {
	const { actions } = useContext(Context);
	const [characters, setCharacters] = useState(actions.getCharacters());
	const [planets, setPlanets] = useState(actions.getPlanets());

	useEffect(() => {
		if (characters.length === 0) {
			fetch("https://www.swapi.tech/api/people")
				.then(response => response.json())
				.then(data => actions.setCharacters(data.results))
				.then(() => setCharacters(actions.getCharacters()));
		}
		if (planets.length === 0) {
			fetch("https://www.swapi.tech/api/planets")
				.then(response => response.json())
				.then(data => actions.setPlanets(data.results))
				.then(() => setPlanets(actions.getPlanets()));
		}
	}, []);

	return (
		<div className="container">
			<div className="row">
				<h1 className="text-danger">Characters</h1>
			</div>
			<div className="container testimonial-group">
				<div className="mt-5 row">
					{characters.length === 0 ? (
						<img src={loading} />
					) : (
						characters.map(character => {
							return (
								<div className="col-4" key={character.uid}>
									<Card
										key={character.uid}
										name={character.name}
										url={character.url}
										type="character"
									/>
								</div>
							);
						})
					)}
				</div>
			</div>
			<div className="row mt-2">
				<h1 className="text-danger">Planets</h1>
			</div>
			<div className="container testimonial-group">
				<div className="mt-5 row">
					{planets.length === 0 ? (
						<img className="float-center" src={loading} />
					) : (
						planets.map(planet => {
							return (
								<div className="col-4" key={planet.uid}>
									<Card key={planets.uid} name={planet.name} url={planet.url} type="planet" />
								</div>
							);
						})
					)}
				</div>
			</div>
		</div>
	);
};
