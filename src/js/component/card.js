import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { FaRegHeart } from "react-icons/fa";
import { Context } from "../store/appContext";

export const Card = props => {
	const { actions } = useContext(Context);
	const [properties, setProperties] = useState();

	useEffect(() => {
		fetch(props.url)
			.then(response => response.json())
			.then(data => setProperties(data));
	}, []);

	function favoriteHandler(name) {
		actions.setFavorites(name);
	}

	if (props.type === "character") {
		return (
			<div className="card" style={{ width: 18 + "rem" }}>
				<img src="https://via.placeholder.com/150" className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title">{props.name}</h5>
					<p className="card-text">
						Gender: {properties === undefined ? "Loading..." : properties.result.properties.gender}
					</p>
					<p className="card-text">
						Hair color: {properties === undefined ? "Loading..." : properties.result.properties.hair_color}
					</p>
					<p className="card-text">
						Eye Color: {properties === undefined ? "Loading..." : properties.result.properties.eye_color}
					</p>
					<div className="row">
						<div className="col-6">
							<Link
								to={
									properties === undefined
										? "/"
										: {
												pathname: "/character/" + properties.result.uid,
												state: properties
										  }
								}
								className="btn btn-outline-primary">
								Learn More!
							</Link>
						</div>
						<div className="col-6">
							<button
								type="button"
								className="btn btn-outline-warning"
								onClick={() => favoriteHandler(props.name)}>
								<FaRegHeart />
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	} else if (props.type === "planet") {
		return (
			<div className="card" style={{ width: 18 + "rem" }}>
				<img src="https://via.placeholder.com/150" className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title">{props.name}</h5>
					<p className="card-text">
						Population: {properties === undefined ? "Loading..." : properties.result.properties.population}
					</p>
					<p className="card-text overflow-auto">
						Terrain: {properties === undefined ? "Loading..." : properties.result.properties.terrain}
					</p>
					<div className="row">
						<div className="col-6">
							<Link
								to={
									properties === undefined
										? "/"
										: {
												pathname: "/planet/" + properties.result.uid,
												state: properties
										  }
								}
								className="btn btn-outline-primary">
								Learn More!
							</Link>
						</div>
						<div className="col-6">
							<button
								type="button"
								className="btn btn-outline-warning"
								onClick={() => favoriteHandler(props.name)}>
								<FaRegHeart />
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
};

Card.propTypes = {
	name: PropTypes.string,
	url: PropTypes.string,
	type: PropTypes.string
};
