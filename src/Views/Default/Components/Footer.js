"use strict";

/* Package System */
import React from "react";
import Link from "next/link";
import BackToTop from "@views/Default/Components/BackToTop";
import Fab from "@mui/material/Fab";

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  render() {
    return (
      <>

        <footer id="nl-footer">
          <div className="nl-footer__top">
            <div className="container">
              <div className="inner">
                
                <div className="serviceCategoriesList">
                  <div className="Logo">
                    <img alt="image" src="/images/andat.png" width="110" />

                    <div className="logo-description">
                      Phòng khám đa khoa quốc tế An Đạt mong muốn chung tay góp
                      sức cho ngành y tế nước nhà tạo nên một cộng đồng khỏe
                      mạnh, một xã hội an yên và hạnh phúc.
                    </div>
                  </div>

                  <div className="menuLeft">
                    <div className="menu-contact-info">Thông tin liên hệ</div>
                    <div className="location--">
                      <img
                        className="markerPin02Icon"
                        alt=""
                        src="/images/location.png"
                      />
                      <div className="location">
                        Số 37 đường 70 Yên Xá, Tân Triều, Thanh Trì, Hà Nội
                      </div>
                    </div>
                    <div className="hotline">
                      <img
                        className="phoneIcon1"
                        alt=""
                        src="/images/hotline.png"
                      />
                      <div className="hotline0972978">
                        Hotline: 0972 978 933
                      </div>
                    </div>
                    <div className="email">
                      <img
                        className="mail01Icon"
                        alt=""
                        src="/images/email.png"
                      />
                      <div className="emailContactandatcliniccom">
                        Email: contact@andatclinic.com
                      </div>
                    </div>
                  </div>
                  <div className="menuLeft1">
                    <div className="menu-ds">Danh sách dịch vụ</div>
                    <div className="menu-tq">Khám sức khoẻ tổng quát</div>
                    <div className="menu-lx">Khám sức khoẻ lái xe</div>
                    <div className="menu-ut">Tầm soát ung thư</div>
                    <div className="menu-dl">Dịch vụ da liễu</div>
                  </div>

                  <div className="menuLeft2">
                    <div className="menu--kh">Hỗ trợ khách hàng</div>
                    <div className="menu--lh">Liên hệ</div>
                    <div className="menu--introduction">Giới thiệu</div>
                    <div className="menu--recruitment">Tuyển dụng</div>
                    <div className="menu--question">Câu hỏi thường gặp</div>
                    <div className="menu--security">Chính sách bảo mật</div>
                    <div className="menu--Terms-service">
                      Điều khoản dịch vụ
                    </div>
                  </div>
                </div>
                </div>
            </div>
          </div>

          <div className="bottomBar">
            <div className="bottomBar-descrption">
              Giấy phép kinh doanh số: 0109614417 do Sở kế hoạch và Đầu tư Tp Hà
              Nội cấp ngày 28/04/2021 I Người đại diện: Nguyễn Thị Hạnh
            </div>
            <div className="bottomBar-TC">Lượt truy cập trong ngày: 32,839</div>
          </div>
         
         
          <div className="bottomBar1">
            <div className="menuLeft3">
              <p className="anDatAll">© 2023 An Dat. All rights reserved.</p>
            </div>

            <div className="menuLeft4">
              <div className="navMenuRight">
                <img
                  className="iconfacebook"
                  alt=""
                  src="/images/facebook.png"
                />
                <img
                  className="iconyoutobe"
                  alt=""
                  src="/images/youtube-kids.png"
                />
                <img
                  className="iconinstagram"
                  alt=""
                  src="/images/instagram.png"
                />
                <img className="icontiktok" alt="" src="/images/tiktok.png" />
                <img className="icontw" alt="" src="/images/twitter.png" />
              </div>
            </div>
          </div>
        </footer>

        <BackToTop {...this.props}>
          <Fab
            color="secondary"
            size="small"
            aria-label="scroll back to top"
            onClick={this.handleScrollTop}
          >
            <i className="fas fa-angle-up"></i>
          </Fab>
        </BackToTop>
      </>
    );
  }
}

export default Footer;
