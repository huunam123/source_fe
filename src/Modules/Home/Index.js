"use strict";

/* Package System */
import React from "react";

/* Package Application */

export default class extends React.Component {

	constructor(props) {
		super(props);
		this._isMounted = false;
		this.state = {
		}
	}

	componentDidMount() {
		this._isMounted = true;
	}

	componentWillUnmount(){
		this._isMounted = false;
	}

	render() {	
		return (
			<React.Fragment>
				<body>



				<div className="second-mv">
                  <div className="titleBreadcrumbs">
                    <div className="archiveTitleParent">
                      <h1 className="archiveTitle">Archive title</h1>
                      <div className="breadcrumbs">
                        <div className="link">
                          <div className="link1">
                            <div className="homepage1">Trang chủ</div>
                          </div>
                        </div>
                        <div className="separator">
                          <div className="phone">/</div>
                        </div>
                        <div className="link2">
                          <div className="link3">
                            <div className="archiveTitle1">Archive title</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
				{/* <div id="nl-main"> */}
					{/* <section className="sl-section">
						<div className="container">
						<div className=""> */}
                   <main className="imagee-title">
                    <section className="tmsaticungth"> 
                      <img
                        className="topbarMainIcon"
                        loading="eager"
                        alt=""
                        src="/images/rectangle-1052@2x.png"
                      />
                      <div className="container">
                        <div className="containerChild" />
                        <h3 className="mcvSeK">
                          "`MCV S&E ký kết hợp tác truyền thông chiến lược với
                          GIGA Digital`"
                        </h3>
                        <div className="image">21:20 - 23/08/2022</div>
                        <div className="sectionFrame">
                          <div className="voNgy1310Container">
                            <p className="voNgy1310">
                              "`Vào ngày 13/10, Công ty Cổ phần Thể thao và Giải
                              trí MCV (MCV S&E) và Công ty TNHH GIGA
                              Distribution (GIGA Digital) đã chính thức ký kết
                              hợp tác chiến lược.`"
                            </p>
                            <p className="haiNV">
                              Hai đơn vị cùng hướng tới mục tiêu mang đến những
                              giá trị thiết thực trong lĩnh lực truyền thông
                              trên nền tảng truyền thông số, nâng tầm độ nhận
                              diện thương hiệu trên thị trường.
                            </p>
                          </div>
                        </div>
                      </div>
                      </section>
                  </main>

                   <section className="pageSegmentation"> 
                      <div className="cartTinTuc">
                        <img
                          className="menuBarIcon"
                          loading="eager"
                          alt=""
                          src="/images/rectangle-1039@2x.png"
                        />
                        <div className="partnerLogos">
                          <div className="numberBasedContent">
                            21:20 - 23/08/2022
                          </div>
                          <div className="mcvSeK1">
						  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ...
                          </div>
                        </div>
                      </div>

                      <div className="cartTinTuc1">
                        <img
                          className="cartTinTucChild"
                          alt=""
                           src="/images/rectangle-1039-1@2x.png"
                        />
                        <div className="parent">
                          <div className="div">21:20 - 23/08/2022</div>
                          <div className="mcvSeK2">
                            Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ...
                          </div>
                        </div>
                      </div>


					  <div className="cartTinTuc">
                        <img
                          className="menuBarIcon"
                          loading="eager"
                          alt=""
                          src="/images/rectangle-1039-2@2x.png"
                        />
                        <div className="partnerLogos">
                          <div className="numberBasedContent">
                            21:20 - 23/08/2022
                          </div>
                          <div className="mcvSeK1">
                            Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut ...
                          </div>
                        </div>
                      </div>

                        <div className="cartTinTuc">
                        <img
                          className="menuBarIcon"
                          loading="eager"
                          alt=""
                          src="/images/rectangle-1039-3@2x.png"
                        />
                        <div className="partnerLogos">
                          <div className="numberBasedContent">
                            21:20 - 23/08/2022
                          </div>
                          <div className="mcvSeK1">
                            Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut ...
                          </div>
                        </div>
                      </div>  

					  
					  <div className="cartTinTuc">
                        <img
                          className="menuBarIcon"
                          loading="eager"
                          alt=""
                          src="/images/rectangle-1039-4@2x.png"
                        />
                        <div className="partnerLogos">
                          <div className="numberBasedContent">
                            21:20 - 23/08/2022
                          </div>
                          <div className="mcvSeK1">
                            Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut ...
                          </div>
                        </div>
                      </div>

					  <div className="cartTinTuc">
                        <img
                          className="menuBarIcon"
                          loading="eager"
                          alt=""
                          src="/images/rectangle-1039-5@2x.png"
                        />
                        <div className="partnerLogos">
                          <div className="numberBasedContent">
                            21:20 - 23/08/2022
                          </div>
                          <div className="mcvSeK1">
						  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ...
                          </div>
                        </div>
                      </div>


					  <div className="cartTinTuc">
                        <img
                          className="menuBarIcon"
                          loading="eager"
                          alt=""
                          src="/images/rectangle-1039@2x.png"
                        />
                        <div className="partnerLogos">
                          <div className="numberBasedContent">
                            21:20 - 23/08/2022
                          </div>
                          <div className="mcvSeK1">
                            Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut ...
                          </div>
                        </div>
                      </div>

                      <div className="cartTinTuc1">
                        <img
                          className="cartTinTucChild"
                          alt=""
                           src="/images/rectangle-1039-1@2x.png"
                        />
                        <div className="parent">
                          <div className="div">21:20 - 23/08/2022</div>
                          <div className="mcvSeK2">
                            Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ...
                          </div>
                        </div>
                      </div>


					  <div className="cartTinTuc">
                        <img
                          className="menuBarIcon"
                          loading="eager"
                          alt=""
                          src="/images/rectangle-1039-2@2x.png"
                        />
                        <div className="partnerLogos">
                          <div className="numberBasedContent">
                            21:20 - 23/08/2022
                          </div>
                          <div className="mcvSeK1">
                            Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut ...
                          </div>
                        </div>
                      </div>

					  <div className="cartTinTuc">
                        <img
                          className="menuBarIcon"
                          loading="eager"
                          alt=""
                          src="/images/rectangle-1039-3@2x.png"
                        />
                        <div className="partnerLogos">
                          <div className="numberBasedContent">
                            21:20 - 23/08/2022
                          </div>
                          <div className="mcvSeK1">
                            Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut ...
                          </div>
                        </div>
                      </div>  

					  
					  <div className="cartTinTuc">
                        <img
                          className="menuBarIcon"
                          loading="eager"
                          alt=""
                          src="/images/rectangle-1039-4@2x.png"
                        />
                        <div className="partnerLogos">
                          <div className="numberBasedContent">
                            21:20 - 23/08/2022
                          </div>
                          <div className="mcvSeK1">
						  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ...
                          </div>
                        </div>
                      </div>

					  <div className="cartTinTuc">
                        <img
                          className="menuBarIcon"
                          loading="eager"
                          alt=""
                          src="/images/rectangle-1039-5@2x.png"
                        />
                        <div className="partnerLogos">
                          <div className="numberBasedContent">
                            21:20 - 23/08/2022
                          </div>
                          <div className="mcvSeK1">
                            Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut ...
                          </div>
                        </div>
                      </div>

					  <div className="cartTinTuc">
                        <img
                          className="menuBarIcon"
                          loading="eager"
                          alt=""
                          src="/images/rectangle-1039@2x.png"
                        />
                        <div className="partnerLogos">
                          <div className="numberBasedContent">
                            21:20 - 23/08/2022
                          </div>
                          <div className="mcvSeK1">
                            Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut ...
                          </div>
                        </div>
                      </div>

                        <div className="cartTinTuc">
                        <img
                          className="menuBarIcon"
                          loading="eager"
                          alt=""
                          src="/images/rectangle-1039-1@2x.png"
                        />
                        <div className="partnerLogos">
                          <div className="numberBasedContent">
                            21:20 - 23/08/2022
                          </div>
                          <div className="mcvSeK1">
						  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ...
                          </div>
                        </div>
                      </div>

                  <div className="cartTinTuc">
                        <img
                          className="menuBarIcon"
                          loading="eager"
                          alt=""
                          src="/images/rectangle-1039-2@2x.png"
                        />
                        <div className="partnerLogos">
                          <div className="numberBasedContent">
                            21:20 - 23/08/2022
                          </div>
                          <div className="mcvSeK1">
                            Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut ...
                          </div>
                        </div>
                      </div>
					  <div className="cartTinTuc">
                        <img
                          className="menuBarIcon"
                          loading="eager"
                          alt=""
                          src="/images/rectangle-1039-3@2x.png"
                        />
                        <div className="partnerLogos">
                          <div className="numberBasedContent">
                            21:20 - 23/08/2022
                          </div>
                          <div className="mcvSeK1">
                            Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut ...
                          </div>
                        </div>
                      </div>

                       <div className="cartTinTuc">
                        <img
                          className="menuBarIcon"
                          loading="eager"
                          alt=""
                          src="/images/rectangle-1039-4@2x.png"
                        />
                        <div className="partnerLogos">
                          <div className="numberBasedContent">
                            21:20 - 23/08/2022
                          </div>
                          <div className="mcvSeK1">
                            Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut ...
                          </div>
                        </div>
                      </div>

					  <div className="cartTinTuc">
                        <img
                          className="menuBarIcon"
                          loading="eager"
                          alt=""
                          src="/images/rectangle-1039-5@2x.png"
                        />
                        <div className="partnerLogos">
                          <div className="numberBasedContent">
                            21:20 - 23/08/2022
                          </div>
                          <div className="mcvSeK1">
						  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ...
                          </div>
                        </div>
                      </div>

                    </section>

				   <div className="containerWithPagination">
                    <div className="paginationNumberBase">
                      <div className="content1">
                        <div className="number">1</div>
                      </div>
                    </div>
                    <div className="paginationNumberBase1">
                      <div className="content1">
                        <div className="number">2</div>
                      </div>
                    </div>
                    <div className="paginationNumberBase2">
                      <div className="content1">
                        <div className="number">3</div>
                      </div>
                    </div>
                    <div className="paginationNumberBase3">
                      <div className="content1">
                        <div className="number">...</div>
                      </div>
                    </div>
                    <div className="paginationNumberBase4">
                      <div className="content1">
                        <div className="number">8</div>
                      </div>
                    </div>
                    <div className="paginationNumberBase5">
                      <div className="content1">
                        <div className="number">9</div>
                      </div>
                    </div>
                    <div className="paginationNumberBase6">
                      <div className="content1">
                        <div className="number">10</div>
                      </div>
                    </div>
					</div> 


                {/* </div> */}
							{/* <div className="sl-section__content swpBtn-center">
								
								<div className="container-item">
									
									<div className="container-item-l">
										
										<div className="container-item-title">{_data.name}</div>
										
										<div className="container-item-image"><img className="img-fluid" alt={_data.name} src={_data.image != null ? `${process.env.CDN_URL_S3}${_data.image}` : `${process.env.MCV_IMAGE_URL}${_data.wp_images}&w=828&q=100`} /></div>
										<div className="container-item-desc" dangerouslySetInnerHTML={{__html:_data.content}}>
										</div>
									</div>
									<div className="container-item-r"></div>
								</div>
							</div> */}
						 {/* </div> */}
					{/* </section>   */}
				 {/* </div>  */}


				</body>
		
			</React.Fragment>
		)
	}
}