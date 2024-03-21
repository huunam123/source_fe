"use strict";

/* Package System */
import React from "react";
import {connect} from 'react-redux';
import Action from '@libs/Action';


/* Package Application */
import {fetchApi,changeToSlug} from '@helpers/Common';

/* Package style */
class Detail extends React.Component{

	constructor(props) {
		super(props);
		this._isMounted = false;

		this.state = {
			dataPage: []
		}
	}

	async componentDidMount() {
		this._isMounted = true;
    console.log(1111)
		this.getData();
		
	}

	componentWillUnmount(){
		this._isMounted = false;
	}

	async componentDidUpdate(prevProps,prevState){
		if(this.state.dataPage.length==0){
			this.getData();
		}
	}

	getData = () =>{
		try{
			this._isMounted&&fetchApi(process.env.API_URL+'news?fqnull=deleted_at').then(result=>this._isMounted&&this.setState({
				dataPage: result.data.data
			})).catch(e=>console.log(e));
		} catch (e) {
			console.log(e);
		  }
	}

	render() {
		let _data = typeof(this.state.dataPage[0]) !== 'undefined' ? this.state.dataPage[0] :[];
		return (
			<React.Fragment>
				{(_data?.id)&&<>
				<div id="nl-main">
					<section className="sl-section">
						<div className="container">
						<div className="">
                  {/* <main className="imagee-title"> */}
                    {/* <section className="tmsaticungth"> 
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

                  </main> */}
                  <section className="pageSegmentation"> 
                      <div className="cartTinTuc">
                        <img
                          className="menuBarIcon"
                          loading="eager"
                          alt=""
                          src="/rectangle-1039@2x.png"
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
                          src="/rectangle-1039-1@2x.png"
                        />
                        <div className="parent">
                          <div className="div">21:20 - 23/08/2022</div>
                          <div className="mcvSeK2">
                            Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ...
                          </div>
                        </div>
                      </div>
                      <div className="cartTinTuc2">
                        <img
                          className="cartTinTucItem"
                          alt=""
                          src="/rectangle-1039-2@2x.png"
                        />
                        <div className="group">
                          <div className="div1">21:20 - 23/08/2022</div>
                          <div className="mcvSeK3">
                            Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ...
                          </div>
                        </div>
                      </div>
                      <div className="cartTinTuc3">
                        <img
                          className="cartTinTucInner"
                          alt=""
                          src="/rectangle-1039-3@2x.png"
                        />
                        <div className="frameDiv">
                          <div className="div2">21:20 - 23/08/2022</div>
                          <div className="mcvSeK4">
                            Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ...
                          </div>
                        </div>
                      </div>

                      {/* <div className="cartTinTuc4">
                        <img
                          className="rectangleIcon"
                          alt=""
                          src="/rectangle-1039-4@2x.png"
                        />
                        <div className="parent1">
                          <div className="div3">21:20 - 23/08/2022</div>
                          <div className="mcvSeK5">
                            Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ...
                          </div>
                        </div>
                      </div>
                      <div className="cartTinTuc5">
                        <img
                          className="cartTinTucChild1"
                          alt=""
                          src="/rectangle-1039-5@2x.png"
                        />
                        <div className="parent2">
                          <div className="div4">21:20 - 23/08/2022</div>
                          <div className="mcvSeK6">
                            Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ...
                          </div>
                        </div>
                      </div>
                      <div className="cartTinTuc6">
                        <img
                          className="cartTinTucChild2"
                          alt=""
                          src="/rectangle-1039@2x.png"
                        />
                        <div className="parent3">
                          <div className="div5">21:20 - 23/08/2022</div>
                          <div className="mcvSeK7">
                            Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut ...
                          </div>
                        </div>
                      </div>
                      <div className="cartTinTuc7">
                        <img
                          className="cartTinTucChild3"
                          alt=""
                          src="/rectangle-1039-1@2x.png"
                        />
                        <div className="parent4">
                          <div className="div6">21:20 - 23/08/2022</div>
                          <div className="mcvSeK8">
                            Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ...
                          </div>
                        </div>
                      </div>
                      <div className="cartTinTuc8">
                        <img
                          className="cartTinTucChild4"
                          alt=""
                          src="/rectangle-1039-2@2x.png"
                        />
                        <div className="parent5">
                          <div className="div7">21:20 - 23/08/2022</div>
                          <div className="mcvSeK9">
                            Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ...
                          </div>
                        </div>
                      </div>
                      <div className="cartTinTuc9">
                        <img
                          className="cartTinTucChild5"
                          alt=""
                          src="/rectangle-1039-3@2x.png"
                        />
                        <div className="parent6">
                          <div className="div8">21:20 - 23/08/2022</div>
                          <div className="mcvSeK10">
                            Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ...
                          </div>
                        </div>
                      </div>
                      <div className="cartTinTuc10">
                        <img
                          className="cartTinTucChild6"
                          alt=""
                          src="/rectangle-1039-4@2x.png"
                        />
                        <div className="parent7">
                          <div className="div9">21:20 - 23/08/2022</div>
                          <div className="mcvSeK11">
                            Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ...
                          </div>
                        </div>
                      </div>
                      <div className="cartTinTuc11">
                        <img
                          className="cartTinTucChild7"
                          alt=""
                          src="/rectangle-1039-5@2x.png"
                        />
                        <div className="parent8">
                          <div className="div10">21:20 - 23/08/2022</div>
                          <div className="mcvSeK12">
                            Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ...
                          </div>
                        </div>
                      </div>
                      <div className="cartTinTuc12">
                        <img
                          className="cartTinTucChild8"
                          alt=""
                          src="/rectangle-1039@2x.png"
                        />
                        <div className="parent9">
                          <div className="div11">21:20 - 23/08/2022</div>
                          <div className="mcvSeK13">
                            Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut ...
                          </div>
                        </div>
                      </div>
                      <div className="cartTinTuc13">
                        <img
                          className="cartTinTucChild9"
                          alt=""
                          src="/rectangle-1039-1@2x.png"
                        />
                        <div className="parent10">
                          <div className="div12">21:20 - 23/08/2022</div>
                          <div className="mcvSeK14">
                            Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ...
                          </div>
                        </div>
                      </div>
                      <div className="cartTinTuc14">
                        <img
                          className="cartTinTucChild10"
                          alt=""
                          src="/rectangle-1039-2@2x.png"
                        />
                        <div className="parent11">
                          <div className="div13">21:20 - 23/08/2022</div>
                          <div className="mcvSeK15">
                            Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ...
                          </div>
                        </div>
                      </div>
                      <div className="cartTinTuc15">
                        <img
                          className="cartTinTucChild11"
                          alt=""
                          src="/rectangle-1039-3@2x.png"
                        />
                        <div className="parent12">
                          <div className="div14">21:20 - 23/08/2022</div>
                          <div className="mcvSeK16">
                            Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ...
                          </div>
                        </div>
                      </div>
                      <div className="cartTinTuc16">
                        <img
                          className="cartTinTucChild12"
                          alt=""
                          src="/rectangle-1039-4@2x.png"
                        />
                        <div className="parent13">
                          <div className="div15">21:20 - 23/08/2022</div>
                          <div className="mcvSeK17">
                            Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ...
                          </div>
                        </div>
                      </div>
                      <div className="cartTinTuc17">
                        <img
                          className="cartTinTucChild13"
                          alt=""
                          src="/rectangle-1039-5@2x.png"
                        />
                        <div className="parent14">
                          <div className="div16">21:20 - 23/08/2022</div>
                          <div className="mcvSeK18">
                            Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ...
                          </div>
                        </div>
                      </div> */}
                   </section>
                </div>
							<div className="sl-section__content swpBtn-center">
								
								<div className="container-item">
									
									<div className="container-item-l">
										
										<div className="container-item-title">{_data.name}</div>
										
										<div className="container-item-image"><img className="img-fluid" alt={_data.name} src={_data.image != null ? `${process.env.CDN_URL_S3}${_data.image}` : `${process.env.MCV_IMAGE_URL}${_data.wp_images}&w=828&q=100`} /></div>
										<div className="container-item-desc" dangerouslySetInnerHTML={{__html:_data.content}}>
										</div>
									</div>
									<div className="container-item-r"></div>
								</div>
							</div>
						</div>
					</section>
				</div>
				</>}
			</React.Fragment>
		)
	}
}

const mapStateToProps=state=>{
	return {
		stateStatus:state.status,
		stateUser:state.user
	}
}

const mapDispatchToProps=dispatch=>{
	let _action = new Action();

	return{
		setStatus:(type,val)=>{dispatch(_action.setStatus(type,val))},
		setValueStatus:(type,val)=>{dispatch(_action.setValueStatus(type,val))}
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Detail);