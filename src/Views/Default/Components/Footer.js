"use strict";

/* Package System */
import React from "react";
import Link from 'next/link';
import BackToTop from '@views/Default/Components/BackToTop';
import Fab from '@mui/material/Fab';

class Footer extends React.Component{

	constructor(props){
		super(props);
	}

	handleScrollTop=()=>{
		window.scrollTo({top:0,behavior:'smooth'})
	}

	render(){
		return(
			<>
				<footer id="nl-footer">
					<div className="nl-footer__top">
						<div className="container">
							<div className="inner">
								<div className="logo">
									<a title="MCV"><img alt="Logo" src="/images/logomcv.png" width="120"/></a>
								</div>

								{/* <div className="dowwn-app">
									<div className="img">
										<a href="https://apps.apple.com/VN/app/id1545324313?mt=8" target="_blank" title="Tải app"><img className="img-fluid" alt="App Store" src="/images/img-app__ios.png" /></a>
									</div>
									<div className="img">
										<a href="https://play.google.com/store/apps/details?id=vn.com.net_love.app" target="_blank" title="Tải app"><img className="img-fluid" alt="Google Play" src="/images/img-app__adr.png" /></a>
									</div>
								</div> */}

								<div className="social">
									<p>Kết nối với chúng tôi:</p>
									{/* <a href="https://www.facebook.com/" title="Facebook" target="_blank"><i className="fab fa-facebook-square"></i></a> */}
									{/* <a href="https://twitter.com/" title="Twitter" target="_blank"><i className="fab fa-twitter-square"></i></a> */}
									<a href="https://www.youtube.com/c/MCVMedia" title="Youtube" target="_blank"><i className="fab fa-youtube"></i></a>
									{/* <a href="https://www.instagram.com/" title="Instagram" target="_blank"><i className="fab fa-instagram"></i></a> */}
									{/* <a href="https://www.tiktok.com/" title="Tiktok" target="_blank"><i className="fab fa-tiktok"></i></a> */}
									<a href="https://www.linkedin.com/company/mcv-group/" title="Linkedin" target="_blank"><i className="fab fa-linkedin"></i></a>
								</div>
							</div>
						</div>
					</div>

					<div className="nl-footer__middle">
						<div className="container">
							<div className="line"></div>
							<div className="row">
								<div className="col-lg-6">
									<div className="ctn">
										<h3>CÔNG TY CỔ PHẦN TẬP ĐOÀN MCV</h3>
										{/* <p>Trụ sở: 18Bis/22/1I Nguyễn Thị Minh Khai, P. Đa Kao, Q. 1, TP HCM</p> */}
										<p>MST: 0102 154 249</p>
										<p>Văn phòng: 19A, E Office Park, KCX Tân Thuận, P. Tân Thuận Đông, Q. 7, TP HCM</p>
										<p>ĐT: <a href="tel:02462752435" title="024 6275 2435">024 6275 2435</a> | Email: <a href="mailto:info@mcv.com.vn" title="info@mcv.com.vn">info@mcv.com.vn</a></p>
										<p>0102154249 do Sở KHDT Hà Nội cấp ngày 30/01/2007, thay đổi lần thứ 04 ngày 30/11/2016</p>
									</div>
								</div>

								<div className="col-lg-6">
									<div className="row">
										{/* <div className="col-md-4">
											<dl>
												<dt>Hỗ trợ</dt>
												<dd>
													<Link href='https://mcv.com.vn/lien-he'><a title="Liên hệ hỗ trợ">Liên hệ hỗ trợ</a></Link>
													<a title="Trung tâm trợ giúp">Trung tâm trợ giúp</a>
												</dd>
											</dl>
										</div>
										<div className="col-md-4">
											<dl>
												<dt>Hợp tác</dt>
												<dd>
													<a title="Liên hệ quảng cáo">Liên hệ quảng cáo</a>
													<a title="Liên hệ hợp tác">Liên hệ hợp tác</a>
												</dd>
											</dl>
										</div> */}
										<div className="col-md-4">
											<dl>
												<dt>Pháp lý</dt>
												<dd>
													<Link href="/privacy"><a title="Chính sách quyền riêng tư">Chính sách quyền riêng tư</a></Link>
													<Link href="/terms"><a title="Điều khoản sử dụng">Điều khoản sử dụng</a></Link>
												</dd>
											</dl>
										</div>
									</div>
								</div>
							</div>
							<div className="line"></div>
						</div>
					</div>

					<div className="nl-footer__bottom">
						<div className="container">
							<p className="text-center">Copyright © 2023 MCV Group Corporation. All Rights Reserved.</p>
						</div>
					</div>
				</footer>

				<BackToTop {...this.props}>
					<Fab color="secondary" size="small" aria-label="scroll back to top" onClick={this.handleScrollTop}>
						<i className="fas fa-angle-up"></i>
					</Fab>
				</BackToTop>
			</>
		)
	}
}

export default Footer;