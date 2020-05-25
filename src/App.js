import React from 'react';
import logo from './logo.svg';
import './assets/styles/Parallax.scss';
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	console.log('logo', logo); 
	return (
		<main className="parallax">
			<section className="section parallax bg1">
				<div className="content">
					<h1 className="s-title">Tinta</h1>
					<p className="ls">DESIGN AND PRINT</p>
				</div>
			</section>
			<section className="section static">
				<div class="container">
					<div className="content_box">
						<div class="box-1">
							<div className="testimonial-container">
								<div className="testimonial-1">
									<h3>Testimonial One</h3>
									<p class="description text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
								</div>
								<div className="testimonial-2">
									<h3>Testimonial Two </h3>
									<p class="description text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
								</div>
								<div className="testimonial-3">
									<h3>Testimonial Three</h3>
									<p class="description text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
								</div>
							</div>
						</div>
						<div class="box-2">
							<button class="btn btn-more" type="button">More Testimonials</button>
						</div>
					</div>
				</div>
			</section>
			<section className="section parallax bg2">
				<div className="content">
					<div className="content-title">
						<h1 className="s-title text-white"> Products </h1>
					</div>
				</div>
			</section>
			<section className="section parallax bg3">
				<div className="content">
					<div className="content-title">
						<h1 className="s-title"> Promos </h1>
					</div>
				</div>
			</section>
		</main>
	);
}

export default App;
