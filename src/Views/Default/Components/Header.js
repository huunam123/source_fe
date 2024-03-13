"use strict";

/* Package System */
import React from "react";
import Link from 'next/link';
import { withRouter } from 'next/router';
import {connect} from 'react-redux';

/* Application */
import Action from '@libs/Action';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import HideOnScroll from '@views/Default/Components/HideOnScroll';
import Search from '@views/Default/Components/Search';
import Image from "next/image";
//import Notification from '@views/Default/Components/Notification';
import User from '@views/Default/Components/User';

/* Package style */
import CssBaseline from '@mui/material/CssBaseline';

class Header extends React.Component{

	constructor(props){
		super(props);
		this.state={
			bgTransparent:true
		}
		this.handleScroll = this.handleScroll.bind(this);
	}

	componentDidMount() {
	    window.addEventListener("scroll", this.handleScroll);
	}

	componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

	handleScroll=()=>{
		if(window.pageYOffset>0){
			this.setState({bgTransparent:false})
		}else{
			this.setState({bgTransparent:true})
		}
	}

	handleClickOutSide=()=>{
		let _status = this.props.stateStatus.open;
		if(_status.search==true||_status.notification==true||_status.user==true){
			this.props.resetOpen();
		}
	}

	render(){

		return(
			<React.Fragment>
				<CssBaseline />
				<HideOnScroll  {...this.props}>
					<AppBar id="nl-header" color="inherit" className={this.state.bgTransparent==true?'transparent':''}>
						<Toolbar>
							<div id="nl-header__mastehead" className={this.state.bgTransparent==true?'transparent':''}>
								
								<div className="d-flex">
									111
									<div id="guide-nav" className="guide-render d-none d-lg-block">
										11111
										<nav id="guide-menu">
											22222
											<ul>
												<li>
													<Link href="/homepage">
														<a title=" " className={this.props.router.query.pages[0]=='homepage'?'active':''}></a>
													</Link>
												</li>
												<li>
													<Link href="/news">
														<a title="" className={(this.props.router?.query?.pages&&(this.props.router.query.pages[0]=='news'))?'active':''}></a>
													</Link>
												</li>
											</ul>
										</nav>
									</div>
									22222
									<div id="guide-nav-mb" className="guide-render">
									</div>
								</div>
							</div>
						</Toolbar>
					</AppBar>
				</HideOnScroll>
			</React.Fragment>
		)
	}
}



const mapStateToProps=state=>{
	return {
		stateStatus:state.status
	}
}

const mapDispatchToProps=dispatch=>{
	let _action = new Action();

	return{
		resetOpen:()=>{dispatch(_action.resetOpen())}
	}
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Header));