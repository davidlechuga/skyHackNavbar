import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
// Importar estilos Css
import './style/Navbar.css';

// importar Imagen
import twitgov_logo from '../imagenes/twitgov_logo.png';

class Navbar extends Component {
	render() {
		return (
			<Fragment>
				<div className="Navbar">
					<div className="container-fluid">
						<nav className="navbar navbar-expand-lg navbar-light ">
							<button
								className="navbar-toggler"
								type="button"
								data-toggle="collapse"
								data-target="#navbarTogglerDemo02"
								aria-controls="navbarTogglerDemo02"
								aria-expanded="false"
								aria-label="Toggle navigation"
							>
								<span className="navbar-toggler-icon" />
							</button>

							<div className="collapse navbar-collapse" id="navbarTogglerDemo02">
								<ul className="navbar-nav mt-2 mt-lg-0">
									<li className="nav-item active">
										<Link className="nav-link" to="/">
											{' '}
											Home <span className="sr-only">(current)</span>{' '}
										</Link>
									</li>
									<li className="nav-item">
										<Link className="nav-link" to="/intereses">
											{' '}
											intereses{' '}
										</Link>
									</li>
									<li className="nav-item">
										<Link className="nav-link" to="/usuarios">
											{' '}
											Usuarios{' '}
										</Link>
									</li>
									<li className="nav-item">
										<Link className="nav-link" to="/muestra">
											{' '}
											Muestras{' '}
										</Link>
									</li>
									<li className="nav-item search-box">
										<input
											type="text"
											name=""
											className="search-txt"
											placeholder="Type to search"
										/>
										<a className="search-btn" href="/">
											<i className="fas fa-search" />
										</a>
									</li>
								</ul>
							</div>
						</nav>
					</div>
				</div>

				<div className="Background-nav">
					<img src={twitgov_logo} alt="logo" className="Navbar__brand-logo" />
					<span className="font-weight-light"> Twit </span>
					<span className="font-weight-bold"> Gov </span>
				</div>
			</Fragment>
		);
	}
}
export default Navbar;
