import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import Home from "./component/home";
import About from "./component/about";
import Contact from "./component/contact";
import Pricing from "./component/pricing";
import Faq from "./component/faq";
import Blogpost from "./component/blog-post";
import Bloghome from "./component/blog-home";
import Portfolioview from "./component/portfolio-overview";
import Portfolioitem from "./component/portfolio-item";


//create your first component
const Layout = () => {
	
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
					<Route exact path={"/home"} component={Home} />
						<Route exact path={"/about"} component={About} />
						<Route exact path={"/contact"} component={Contact} />
						<Route exact path={"/pricing"} component={Pricing} />
						<Route exact path={"/faq"} component={Faq} />
						<Route exact path={"/blog-post"} component={Blogpost} />
						<Route exact path={"/blog-home"} component={Bloghome} />
						<Route exact path={"/portfolio-overview"} component={Portfolioview} />
						<Route exact path={"/portfolio-item"} component={Portfolioitem} />
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default Layout;
