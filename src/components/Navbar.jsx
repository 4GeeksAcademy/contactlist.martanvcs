import { Link } from "react-router-dom"; 

export const Navbar = () => {

	return (
		<nav className="navbar navbar-dark bg-dark px-4">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1 text-white">📱Contactos Pelusos</span>
				</Link>
				
			</div>
		</nav>
	);
};

