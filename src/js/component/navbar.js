import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<img src="http://1000marcas.net/wp-content/uploads/2019/12/Star-Wars-Logo-5.png" height={100} />
			</Link>
			<div className="ml-auto">
				<div className="dropdown">
					<a
						className="btn btn-primary dropdown-toggle"
						href="#"
						role="button"
						id="dropdownMenuLink"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false">
						Dropdown link
					</a>
					<div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink">
						<Link to="/demo" className="dropdown-item" style={{ textDecoration: "none" }}>
							Action
						</Link>
						<a className="dropdown-item" href="#">
							Another action
						</a>
						<a className="dropdown-item" href="#">
							Something else here
						</a>
					</div>
				</div>
			</div>
		</nav>
	);
};
