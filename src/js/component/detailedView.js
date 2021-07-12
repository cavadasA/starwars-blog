import React, { Fragment, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";

export const DetailedView = props => {
	const location = useLocation();
	const [propiedades, setPropiedades] = useState(props.location.state.result);

	return (
		<div className="jumbotron">
			{propiedades === undefined ? (
				""
			) : location.pathname.includes("character") ? (
				<Fragment>
					<div className="row">
						<div className="col-6">
							<img src="https://via.placeholder.com/400" className="mx-auto d-block" alt="..." />
						</div>
						<div className="col-6">
							<h1 className="display-4">{propiedades.properties.name}</h1>
							<p className="lead">{propiedades.description}</p>
						</div>
					</div>
					<hr className="my-4" />
					<div className="row">
						<div className="col-2">
							<h5>Name</h5>
							<p>{propiedades.properties.name}</p>
						</div>
						<div className="col-2">
							<h5>Birth Year</h5>
							<p>{propiedades.properties.birth_year}</p>
						</div>
						<div className="col-2">
							<h5>Gender</h5>
							<p>{propiedades.properties.gender}</p>
						</div>
						<div className="col-2">
							<h5>Height</h5>
							<p>{propiedades.properties.height}</p>
						</div>
						<div className="col-2">
							<h5>Skin Color</h5>
							<p>{propiedades.properties.skin_color}</p>
						</div>
						<div className="col-2">
							<h5>Eye Color</h5>
							<p>{propiedades.properties.eye_color}</p>
						</div>
					</div>
				</Fragment>
			) : location.pathname.includes("planet") ? (
				<Fragment>
					<div className="row">
						<div className="col-6">
							<img src="https://via.placeholder.com/400" className="mx-auto d-block" alt="..." />
						</div>
						<div className="col-6">
							<h1 className="display-4">{propiedades.properties.name}</h1>
							<p className="lead">{propiedades.description}</p>
						</div>
					</div>
					<hr className="my-4" />
					<div className="row">
						<div className="col-2">
							<h5>Name</h5>
							<p>{propiedades.properties.name}</p>
						</div>
						<div className="col-2">
							<h5>Climate</h5>
							<p>{propiedades.properties.climate}</p>
						</div>
						<div className="col-2">
							<h5>Population</h5>
							<p>{propiedades.properties.population}</p>
						</div>
						<div className="col-2">
							<h5>Orbital Period</h5>
							<p>{propiedades.properties.orbital_period}</p>
						</div>
						<div className="col-2">
							<h5>Rotation Period</h5>
							<p>{propiedades.properties.rotation_period}</p>
						</div>
						<div className="col-2">
							<h5>Diameter</h5>
							<p>{propiedades.properties.diameter}</p>
						</div>
					</div>
				</Fragment>
			) : (
				""
			)}
		</div>
	);
};

DetailedView.propTypes = {
	location: PropTypes.shape({
		pathname: PropTypes.string.isRequired,
		state: PropTypes.object
	})
};
