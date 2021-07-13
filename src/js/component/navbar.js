import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { FaTrash } from "react-icons/fa";

export const Navbar = () => {
	const { actions } = useContext(Context);
	const [favorites, setFavorites] = useState(actions.getFavorites);

	function deleteHandler(name) {
		actions.deleteFavorites(name);
		setFavorites(actions.getFavorites);
	}

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<img src="http://1000marcas.net/wp-content/uploads/2019/12/Star-Wars-Logo-5.png" height={100} />
			</Link>
			<div className="ml-auto">
				<div className="dropdown">
					<button
						className="dropdown-toggle btn btn-primary"
						type="button"
						data-toggle="collapse"
						data-target="#myList">
						Favorites ({favorites.length})<span className="caret" />
					</button>
					<div id="myList" className="dropdown-menu dropdown-menu-right">
						{favorites.length === 0 ? (
							<Link to="#" className="dropdown-item" style={{ textDecoration: "none" }}>
								Add a favorite!
							</Link>
						) : (
							favorites.map(favorite => {
								return (
									<div className="row" key={favorite.toString()}>
										<div className="col-9">
											<Link to="#" className="dropdown-item" style={{ textDecoration: "none" }}>
												{favorite}
											</Link>
										</div>
										<div className="col-3">
											<FaTrash onClick={() => deleteHandler(favorite)} />
										</div>
									</div>
								);
							})
						)}
					</div>
				</div>
			</div>
		</nav>
	);
};
