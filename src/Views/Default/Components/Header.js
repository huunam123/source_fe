"use strict";

/* Package System */
import React from "react";
import Link from "next/link";
import { withRouter } from "next/router";
import { connect } from "react-redux";

/* Application */
import Action from "@libs/Action";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import HideOnScroll from "@views/Default/Components/HideOnScroll";
import Search from "@views/Default/Components/Search";
import Image from "next/image";
//import Notification from '@views/Default/Components/Notification';
import User from "@views/Default/Components/User";

/* Package style */
import CssBaseline from "@mui/material/CssBaseline";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bgTransparent: true,
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    if (window.pageYOffset > 0) {
      this.setState({ bgTransparent: false });
    } else {
      this.setState({ bgTransparent: true });
    }
  };

  handleClickOutSide = () => {
    let _status = this.props.stateStatus.open;
    if (
      _status.search == true ||
      _status.notification == true ||
      _status.user == true
    ) {
      this.props.resetOpen();
    }
  };

  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <HideOnScroll {...this.props}>
          <AppBar
            id="nl-header"
            color="inherit"
            className={this.state.bgTransparent == true ? "transparent" : ""}
          >
            <Toolbar>
              <div
                id="nl-header__mastehead"
                className={this.state.bgTransparent ? "transparent" : ""}
              >
                {/* <header className="headers"> */}
                <headers>
                  <div className="topBar">
                    <div className="text">
                      <div className="card">
                        <img
                          className="phoneIcon"
                          loading="eager"
                          alt=""
                          src="/images/hotline.png"
                        />
                        <div className="pagination">+84 1234 56789</div>
                      </div>
                      <div className="card1">
                        <img
                          className="clockIcon"
                          loading="eager"
                          alt=""
                          src="/images/clock.png"
                        />
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
                        <img
                          className="arrowDropDownIcon"
                          alt=""
                          src="/images/down.png"
                        />
                      </div>

                      <div className="social">
                        <img
                          className="icon-facebook"
                          alt=""
                          src="/images/facebook.png"
                        />
                        <img
                          className="icon-twitter"
                          alt=""
                          src="/images/twitter.png"
                        />
                        <img
                          className="icon-youtobe"
                          alt=""
                          src="/images/youtube-kids.png"
                        />
                        <img
                          className="icon-instagram"
                          alt=""
                          src="/images/instagram (1).png"
                        />
                        <img
                          className="icon-tiktok"
                          alt=""
                          src="/images/tiktok.png"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="menuBar">
                    <img
                      className="image36Icon"
                      loading="eager"
                      alt=""
                      src="/images/andat.png"
                    />
                    <div className="linH">
                      <div className="homepage">Trang chủ</div>
                      <div className="Introduction">
                        <div className="introduction1">Giới thiệu</div>
                        <img
                          className="arrowDropDownIcon1"
                          alt=""
                          src="/images/down-arrow.png"
                        />
                      </div>
                      <div className="introduction2">
                        <div className="menu-service">Dịch vụ</div>
                        <img
                          className="arrowDropDownIcon2"
                          alt=""
                          src="/images/down-arrow.png"
                        />
                      </div>
                      <div className="menu--doctor">Bác sĩ</div>
                      <div className="introduction3">
                        <div className="memu--infrastructure">
                          Cơ sở hạ tầng
                        </div>
                        <img
                          className="arrowDropDownIcon3"
                          alt=""
                          src="/images/down-arrow.png"
                        />
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
                      <img
                        className="calendarIcon"
                        alt=""
                        src="/images/calendar.png"
                      />
                      <div className="subtitle">Đặt lịch khám</div>
                    </button>
                  </div>
                </headers>

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
                          <div className="phone"></div>
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

                <main>
                  {/* //  className="khmsckho"> */}
                  <div className="tmsaticungth">
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
                  </div>

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

                    <div className="cartTinTuc2">
                      <img
                        className="cartTinTucItem"
                        alt=""
                        src="/images/rectangle-1039-2@2x.png"
                      />
                      <div className="group">
                        <div className="div1">21:20 - 23/08/2022</div>
                        <div className="mcvSeK3">
                          Ut enim ad minim veniam, quis nostrud exercitation
                          ullamco laboris nisi ut aliquip ex ...
                        </div>
                      </div>
                    </div>

                    <div className="cartTinTuc4">
                      <img
                        className="rectangleIcon"
                        alt=""
                        src="/images/rectangle-1039-4@2x.png"
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
                        src="/images/rectangle-1039-5@2x.png"
                      />
                      <div className="parent2">
                        <div className="div4">21:20 - 23/08/2022</div>
                        <div className="mcvSeK6">
                          Ut enim ad minim veniam, quis nostrud exercitation
                          ullamco laboris nisi ut aliquip ex ...
                        </div>
                      </div>
                    </div>

                    <div className="cartTinTuc3">
                      <img
                        className="cartTinTucInner"
                        alt=""
                        src="/images/rectangle-1039-3@2x.png"
                      />
                      <div className="frameDiv">
                        <div className="div2">21:20 - 23/08/2022</div>
                        <div className="mcvSeK4">
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

                    <div className="cartTinTuc2">
                      <img
                        className="cartTinTucItem"
                        alt=""
                        src="/images/rectangle-1039-2@2x.png"
                      />
                      <div className="group">
                        <div className="div1">21:20 - 23/08/2022</div>
                        <div className="mcvSeK3">
                          Ut enim ad minim veniam, quis nostrud exercitation
                          ullamco laboris nisi ut aliquip ex ...
                        </div>
                      </div>
                    </div>

                    <div className="cartTinTuc4">
                      <img
                        className="rectangleIcon"
                        alt=""
                        src="/images/rectangle-1039-4@2x.png"
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
                        src="/images/rectangle-1039-5@2x.png"
                      />
                      <div className="parent2">
                        <div className="div4">21:20 - 23/08/2022</div>
                        <div className="mcvSeK6">
                          Ut enim ad minim veniam, quis nostrud exercitation
                          ullamco laboris nisi ut aliquip ex ...
                        </div>
                      </div>
                    </div>

                    <div className="cartTinTuc3">
                      <img
                        className="cartTinTucInner"
                        alt=""
                        src="/images/rectangle-1039-3@2x.png"
                      />
                      <div className="frameDiv">
                        <div className="div2">21:20 - 23/08/2022</div>
                        <div className="mcvSeK4">
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

                    <div className="cartTinTuc2">
                      <img
                        className="cartTinTucItem"
                        alt=""
                        src="/images/rectangle-1039-2@2x.png"
                      />
                      <div className="group">
                        <div className="div1">21:20 - 23/08/2022</div>
                        <div className="mcvSeK3">
                          Ut enim ad minim veniam, quis nostrud exercitation
                          ullamco laboris nisi ut aliquip ex ...
                        </div>
                      </div>
                    </div>

                    <div className="cartTinTuc4">
                      <img
                        className="rectangleIcon"
                        alt=""
                        src="/images/rectangle-1039-4@2x.png"
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
                        src="/images/rectangle-1039-5@2x.png"
                      />
                      <div className="parent2">
                        <div className="div4">21:20 - 23/08/2022</div>
                        <div className="mcvSeK6">
                          Ut enim ad minim veniam, quis nostrud exercitation
                          ullamco laboris nisi ut aliquip ex ...
                        </div>
                      </div>
                    </div>

                    <div className="cartTinTuc3">
                      <img
                        className="cartTinTucInner"
                        alt=""
                        src="/images/rectangle-1039-3@2x.png"
                      />
                      <div className="frameDiv">
                        <div className="div2">21:20 - 23/08/2022</div>
                        <div className="mcvSeK4">
                          Ut enim ad minim veniam, quis nostrud exercitation
                          ullamco laboris nisi ut aliquip ex ...
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
                      <div className="content2">
                        <div className="number1">2</div>
                      </div>
                    </div>
                    <div className="paginationNumberBase2">
                      <div className="content3">
                        <div className="number2">3</div>
                      </div>
                    </div>
                    <div className="paginationNumberBase3">
                      <div className="content4">
                        <div className="number3">...</div>
                      </div>
                    </div>
                    <div className="paginationNumberBase4">
                      <div className="content5">
                        <div className="number4">8</div>
                      </div>
                    </div>
                    <div className="paginationNumberBase5">
                      <div className="content6">
                        <div className="number5">9</div>
                      </div>
                    </div>
                    <div className="paginationNumberBase6">
                      <div className="content7">
                        <div className="number6">10</div>
                      </div>
                    </div>
                  </div>
                </main>
              </div>
            </Toolbar>
          </AppBar>
        </HideOnScroll>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    stateStatus: state.status,
  };
};

const mapDispatchToProps = (dispatch) => {
  let _action = new Action();

  return {
    resetOpen: () => {
      dispatch(_action.resetOpen());
    },
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
