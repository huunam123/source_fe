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
					<div id="nl-header__mastehead" className={this.state.bgTransparent ? 'transparent' : ''}>
						<header className="headers">
							<div className="topBar">
								<div className="text">
									<div className="card">
										<img className="phoneIcon" loading="eager" alt="" src="/images/hotline.png" />
										<div className="pagination">+84 1234 56789</div>
									</div>
									<div className="card1">
										<img className="clockIcon" loading="eager" alt="" src="/images/clock.png" />
										<div className="th2">Thứ 2 - Chủ Nhật 9:00 - 20:00</div>
										</div>
								</div>
									<div className="text1">
										<div className="card2">
											<img
												className="markerPin01Icon"
												loading="eager"
												alt=""
												src="/images/location.png"
											/>
											<div className="location">
												37 đường 70 Yên Xá, Tân Triều, Thanh Trì, Hà Nội
											</div>
										</div>

											<div className="card3">
												<div className="language">Tiếng Việt</div>
												<img className="arrowDropDownIcon" alt="" src="/images/down.png" />
											</div>
										
										<div className="social">
											<img className="icon-facebook" alt="" src="/images/facebook.png" />
											<img className="icon-twitter" alt="" src="/images/twitter.png" />
											<img className="icon-youtobe" alt="" src="/images/youtube-kids.png" />
											<img className="icon-instagram" alt=""src="/images/instagram (1).png" />
											<img className="icon-tiktok" alt="" src="/images/tiktok.png" />
										</div>
									</div>
							</div>
						
							<div className="menuBar">
								<img className="image36Icon" loading="eager" alt="" src="/images/andat.png" />
								<div className="linH">
									<div className="homepage">Trang chủ</div>
									<div className="Introduction">
										<div className="introduction1">Giới thiệu</div>
										<img className="arrowDropDownIcon1" alt="" src="/images/down-arrow.png"/>
									</div>
									<div className="introduction2">
										<div className="menu-service">Dịch vụ</div>
										<img className="arrowDropDownIcon2" alt="" src="/images/down-arrow.png" />
									</div>
									<div className="menu--doctor">Bác sĩ</div>
									<div className="introduction3">
										<div className="memu--infrastructure">Cơ sở hạ tầng</div>
										<img className="arrowDropDownIcon3" alt="" src="/images/down-arrow.png" />
									</div>
									<div className="menu--news">Tin tức</div>
									<div className="menu--support">Hỗ trợ khách hàng</div>
									<div className="menu--hotline">Liên hệ</div>
								</div>
								<div className="input">
									<div className="input1">
										<div className="content">
											<div className="label">Tìm kiếm</div>
											<img className="icoutlineSearchIcon" alt="" />
										</div>
									</div>
									<div className="helperText">Helper text</div>
								</div>
								<button className="button">
									<img className="calendarIcon" alt="" src="/images/calendar.png" />
									<div className="subtitle">Đặt lịch khám</div>
								</button>
							</div>
						</header>

									


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