import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const Card = props => {
	return (
		<div className="card" style={{ width: 18 + "rem" }}>
			<img src="https://via.placeholder.com/150" className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{props.name}</h5>
				<p className="card-text">Gender: {props.gender}</p>
				<p className="card-text">Hair color: {props.hairColor}</p>
				<p className="card-text">Eye Color: {props.eyeColor}</p>
				<a href="#" className="btn btn-primary">
					Go somewhere
				</a>
			</div>
		</div>
	);
};

Card.propTypes = {
	name: PropTypes.string,
	gender: PropTypes.string,
	hairColor: PropTypes.string,
	eyeColor: PropTypes.string
};
