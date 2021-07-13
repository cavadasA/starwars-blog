const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			planets: [],
			favorites: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			getCharacters: () => {
				const store = getStore();
				return store.characters;
			},
			setCharacters: array => {
				setStore({ characters: array });
			},
			getPlanets: () => {
				const store = getStore();
				return store.planets;
			},
			setPlanets: array => {
				setStore({ planets: array });
			},
			getFavorites: () => {
				const store = getStore();
				return store.favorites;
			},
			setFavorites: name => {
				const store = getStore();
				let newFavorites = store.favorites;
				newFavorites.push(name);
				setStore({ favorites: newFavorites });
			},
			deleteFavorites: name => {
				const store = getStore();
				let newFavorites = store.favorites;
				let test = newFavorites.filter(favorite => favorite !== name);
				setStore({ favorites: test });
			}
		}
	};
};

export default getState;
