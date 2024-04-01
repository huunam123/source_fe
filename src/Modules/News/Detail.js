"use strict";

/* Package System */
import React from "react";
import { connect } from "react-redux";
import Action from "@libs/Action";

/* Package Application */
import { fetchApi, changeToSlug } from "@helpers/Common";

/* Package style */
class Detail extends React.Component {
  //this.props :là toàn cục
  constructor(props) {
    super(props);
    this._isMounted = false;

    //this.state: là 1 cục nhỏ trong toàn cục
    this.state = {
      dataPage: [],
    };
  }

  async componentDidMount() {
    this._isMounted = true;
    console.log(111, this.props.slug);
    this.getData();
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  async componentDidUpdate(prevProps, prevState) {
    // if (this.state.dataPage.length == 0) {
    //   this.getData();
    // }
  }

  getData = () => {
    try {
      //http://localhost:8201/v1/pl-news?fq=slug:eheh
      this._isMounted &&
        fetchApi(process.env.API_URL + "pl-news?fq=slug:" + this.props.slug)
          .then(
            (result) =>
              this._isMounted &&
              this.setState({
                dataPage: result.data.data,
              })
          )
          .catch((e) => console.log(e));
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    let _data =
      typeof this.state.dataPage[0] !== "undefined"
        ? this.state.dataPage[0]
        : [];
    console.log(_data);
    return (
      <React.Fragment>
        {_data?.id && (
          <>
            {/* <div id="nl-main"> */}
            <div id="nl-detail">
              <section className="sl-section-right">
                <div className="sl-section-cotainer">
                  <div className="breadcrumbss">
                    <div className="link">
                      <div className="link1">
                        <div className="content-homepage">Trang chủ</div>
                      </div>
                    </div>

                    <div className="separator">
                      <div className="text">/</div>
                    </div>

                    <div className="linkk">
                      <div className="content-news">Tin tức</div>
                    </div>

                    <div className="separator">
                      <div className="text">/</div>
                    </div>

                    <div className="link-">
                      <div className="link-service">
                        <div className="textx">
                          Dịch vụ khám và tư vấn dinh dưỡng cho người bệnh tim
                          mạch
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-text">
                    Dịch vụ khám và tư vấn dinh dưỡng cho người bệnh tim mạch
                  </div>

                  <div className="buttom">
                    <div className="text-consion">Đăng bởi</div>
                    <div className="text-consions">Admin</div>

                    <div className="time">
                      <div class="clock">
                        <img alt="" src="/images/clock1.png" />
                      </div>

                      <div className="date">21:20 - 23/08/2022</div>
                    </div>

                    <div className="see">
                      <div class="eye">
                        <img alt="" src="/images/view.png" />
                      </div>
                      <div className="view">1,9K lượt xem</div>
                    </div>
                  </div>
                  <div className="images">
                    <img alt="" src="/images/andatt.png" />
                  </div>
                  {/* {_data.title} */}

                  <div className="content-news-paragraph">
                    <div className="caret-wrapper">
                      <img alt="" src="/images/quote (2).png" />
                    </div>
                    <div className="content-news-text">
                      Bệnh tim mạch là các tình trạng liên quan đến sức khỏe của
                      trái tim, sự hoạt động của các mạch máu gây suy yếu khả
                      năng làm việc của tim. Hệ quả là làm gián đoạn hoặc không
                      cung cấp đủ oxy đến não và các bộ phận khác trong cơ thể,
                      khiến các cơ quan ngừng trệ hoạt động, dẫn đến tử vong.
                    </div>
                  </div>

                  <div className="conttent">
                    Thông tin chung
                    <div className="conttent-neww">
                      Bệnh tim mạch là các tình trạng liên quan đến sức khỏe của
                      trái tim, sự hoạt động của các mạch máu gây suy yếu khả
                      năng làm việc của tim. Hệ quả là làm gián đoạn hoặc không
                      cung cấp đủ oxy đến não và các bộ phận khác trong cơ thể,
                      khiến các cơ quan ngừng trệ hoạt động, dẫn đến tử vong.
                      Các bệnh tim mạch bao gồm: các bệnh mạch máu như bệnh động
                      mạch vành, bệnh cơ tim, nhồi máu cơ tim, loạn nhịp tim và
                      suy tim.
                    </div>
                    <div className="conttent-neww">
                      Theo cố vấn chuyên môn Khoa tim mạch tại Phòng Khám Đa
                      Khoa Quốc Tế An Đạt, có rất nhiều nguyên nhân dẫn tới bệnh
                      tim mạch, trong đó thường gặp nhất là tăng huyết áp, phổi
                      tắc nghẽn mạn tính, di truyền… Ngoài ra, nguyên nhân khiến
                      đối tượng mắc bệnh tim mạch ngày càng trẻ hóa là do chế độ
                      ăn uống không khoa học như ăn thực phẩm chế biến sẵn nhiều
                      dầu mỡ, ăn nhiều chất béo no; sử dụng thuốc lá, bia rượu,
                      nước uống có gas, stress; lười vận động… gây ra tình trạng
                      béo phì, tăng huyết áp, rối loạn mỡ máu, đái tháo đường…
                      và cuối cùng dẫn tới các biến chứng tim mạch.
                    </div>
                    <div className="conttentt">
                      Đối tượng
                      <div className="conttent-neww">
                        Bệnh lý tim mạch là nguyên nhân hàng đầu gây tử vong
                        trên toàn thế giới. Theo ước tính của Tổ chức Y tế Thế
                        giới (WHO), hàng năm trên thế giới có khoảng 17,5 triệu
                        người tử vong do các bệnh liên quan đến tim mạch và số
                        bệnh nhân tim mạch vẫn đang ngày càng gia tăng. Ở nước
                        ta, hiện chưa có thống kê đầy đủ về tỷ lệ mắc bệnh tim
                        mạch trong cộng đồng, nhưng thực tế bệnh tim mạch gia
                        tăng hàng năm rất nhanh chóng. Hiện có khoảng 20% dân số
                        mắc bệnh về tim mạch và tăng huyết áp. Mỗi năm có khoảng
                        200.000 người tử vong vì bệnh tim mạch, chiếm 33% ca tử
                        vong.
                      </div>
                      <div className="conttent-neww">
                        Nếu đang gặp vấn đề về sức khỏe tim mạch hay thuộc một
                        trong các nhóm đối tượng có nguy cơ mắc phải căn bệnh
                        này dưới đây, bạn cần có chế độ dinh dưỡng hợp lý ngay
                        từ hôm nay:
                        <div className="conttent-newww">
                          <ul>
                            <li data-number="1">Người bị tăng huyết áp;</li>
                            <li data-number="2">
                              Người có lượng cholesterol trong máu cao;
                            </li>
                            <li data-number="3">Người bị đái tháo đường;</li>
                            <li data-number="4">Người thừa cân – béo phì;</li>
                            <li data-number="5">
                              Người hút thuốc lá nhiều và lâu năm;
                            </li>
                            <li data-number="6">
                              Người lười/ít vận động, đặc biệt là những người
                              làm công việc có đặc tính ngồi nhiều, hạn chế đi
                              lại;
                            </li>
                            <li data-number="7">
                              Người có bố mẹ hoặc anh chị em ruột mắc bệnh tim
                              mạch.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="imagefurit">
                    <div className="imagess">
                      <img alt="" src="/images/furit.png" />
                    </div>
                    <div className="furit-text">Chú thích hình ảnh</div>
                  </div>

                  <div className="conttents">
                    Dấu hiệu cảnh báo bệnh tim mạch
                    <div className="conttent-newws">
                      Một trong những nguyên nhân khiến các ca tử vong do bệnh
                      tim mạch ngày càng nhiều, là do triệu chứng của bệnh rất
                      khó phát hiện trong giai đoạn đầu. Chỉ đến khi triệu chứng
                      rõ ràng, người bệnh mới đi khám thì lúc này, bệnh đã ở
                      giai đoạn muộn. Do vậy, bạn cần để ý những triệu chứng sau
                      vì đây có thể là dấu hiệu của bệnh tim mạch giai đoạn đầu:
                    </div>
                    <div className="conttent-newws">
                      Cơn đau thắt ngực: bệnh nhân bị đau đột ngột vùng sau
                      xương ức,vùng ngực trái dữ dội, cảm giác thắt bóp nghẹt
                      tim; hướng lan lên vai và mặt trong cánh tay trái.Cơn đau
                      kéo dài 5- 10 phút.Kèm cảm thấy ngạt thở. Cơn đau thắt
                      ngực có thể xuất hiện nhiều lần sau này , và dần dẫn đến
                      nhồi máu cơ tim và đột tử.
                    </div>
                    <div className="conttent-newws-text">
                      <p>
                        Chóng mặt: do tình trạng rối loạn nhịp tim nặng gây ra.
                      </p>
                      <p>
                        Ho: Ho kéo dài dai dẳng hoặc khò khè, đôi lúc ho ra máu
                        có thể là dấu hiệu của suy tim.
                      </p>
                      <p>
                        Mệt mỏi: Biểu hiện này cho thấy có khả năng bạn bị suy
                        tim.
                      </p>
                      <p>
                        Mạch nhanh hoặc không đều: Tình trạng này kéo dài kèm
                        theo yếu cơ, chóng mặt thì chính là triệu chứng của nhồi
                        máu cơ tim, suy tim, loạn nhịp tim.
                      </p>
                      <p>
                        Khó thở: Cảm giác hết hơi, hụt hơi, thở dốc… rất thường
                        thấy ở bệnh nhân tim mạch.
                      </p>
                      <p>
                        Phù: Suy tim là nguyên nhân dẫn đến tích tụ dịch trong
                        cơ thể, khiến người bệnh bị phù (thường là ở bàn chân,
                        cổ chân, cẳng chân và bụng), dẫn tới chán ăn.
                      </p>
                    </div>
                    <div className="conttentts">
                      Mục tiêu của dinh dưỡng trong điều trị bệnh tim mạch
                      <div className="conttent-newws">
                        Giảm thiểu tình trạng ứ trệ tuần hoàn, kiểm soát tình
                        trạng ứ muối và nước trong cơ thể.
                      </div>
                      <div className="conttent-newws">
                        Giảm bớt các triệu chứng khó chịu: buồn nôn, chán ăn…
                      </div>
                      <div className="conttent-newws">
                        Cải thiện tình trạng dinh dưỡng, nhất là những trường
                        hợp bệnh tim nặng, kéo dài làm bệnh nhân suy kiệt.
                      </div>
                      <div className="conttent-newws">
                        Đặc biệt ở bệnh nhân suy mòn nhằm giảm bớt triệu chứng
                        chán ăn, buồn nôn.
                      </div>
                    </div>
                    <div className="conttentts">
                      Nguyên tắc dinh dưỡng giúp phòng ngừa và hỗ trợ điều trị
                      bệnh tim mạch
                      <div className="conttent-newws">
                        Ăn nhiều bữa nhỏ, giúp giảm gánh nặng cho tim và hệ tiêu
                        hóa.
                      </div>
                      <div className="conttent-newws">
                        Hạn chế nước ( nước canh, nước súp,…) trong suy tim có
                        phù, khó thở.
                      </div>
                      <div className="conttent-newws">
                        Tuân thủ chế độ ăn : tăng cường rau xanh và trái cây,
                        giảm protein từ động vật và giảm tinh bột, hạn chế chất
                        béo xấu, kiêng hoàn toàn rượu, bia và thuốc lá.
                      </div>
                      <div className="conttent-newws">
                        Thực hiện chế độ ăn nhạt ( tổng lượng muối &lt; 5 gam /
                        ngày).
                      </div>
                      <div className="conttent-newws">
                        Bên cạnh chế độ ăn, việc vận động – tập luyện phù hợp
                        cũng rất cần thiết với bệnh nhân tim mạch. Bạn nên duy
                        trì luyện tập tối thiểu 30 phút/ngày, 4-6 ngày/tuần. Các
                        môn thể thao thích hợp với bệnh nhân tim mạch là đi bộ,
                        đạp xe, bơi lội, ..
                      </div>
                      <div className="conttent-newws">
                        Thấu hiểu những lo lắng và trăn trở của các bệnh nhân
                        tim mạch về một chế độ ăn uống tốt cho “sức khỏe tim
                        mạch”, Phòng Khám Đa Khoa Quốc Tế An Đạt mang đến dịch
                        vụ chăm sóc sức khỏe toàn diện cho người bệnh tim mạch
                        với phác đồ dinh dưỡng chuyên biệt.
                      </div>
                    </div>
                  </div>
                  <div className="content-table">
                    <div className="table">
                      <div className="text-table">
                        <div className="table-image">
                          <img alt="" src="/images/calendar1.png" />
                        </div>
                        <div className="text-time">Đặt hẹn khám bệnh</div>

                        <div className="lg-content">
                          Vui lòng điền đầy đủ các trường yêu cầu
                        </div>
                      </div>
                      <div className="frame">
                        <div className="frame-text">
                          <div className="colum">
                            <div className="input-name">
                              <div className="input-content">
                                <div className="input-text">Họ và tên</div>
                                <div className="input">*</div>
                              </div>
                            </div>

                            <div className="input-namee">
                              <div className="input-contentt">
                                <div className="input-textt">Số điện thoại</div>
                                <div className="inputt">*</div>
                              </div>
                            </div>

                            <div className="input-namme">
                              <div className="inputt-content">
                                <div className="input-comment">
                                  Mô tả tình trạng đang gặp
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="columm">
                            <div className="bottom">
                              <div className="bottom-text">Gửi</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="line1"></div>

                  <div class="tem">
                    <div class="tem-icon">
                      <div class="tem-content">Thẻ:</div>
                      <div class="ingredient">
                        <div className="addcard-content">Tim mạch</div>
                        <div className="addcard-content-health">Sức khỏe</div>
                        <div className="addcard-content-cook">Cooking</div>
                        <div className="addcard-content-chat">Chat</div>
                        <div className="addcard-content-art">Art</div>
                        <div className="addcard-content-draw">Drawing</div>
                        <div className="addcard-content-climic">
                          An Đạt climic
                        </div>
                        <div className="addcard-content-game">Games</div>
                        <div className="addcard-content-cookk">Cooking</div>
                        <div className="addcard-content-sing">Singing </div>
                      </div>
                    </div>

                    <div className="share">
                      <div className="content-share">Chia sẻ:</div>
                      <div className="icon-share">
                        <div className="icon-share-face">
                          <img alt="" src="/images/facebook12.png" />
                        </div>
                        <div className="pinterest">
                          <img alt="" src="/images/pinterest1.png" />
                        </div>
                        <div className="social-x">
                          <img alt="" src="/images/twitter12.png" />
                        </div>
                        <div className="linnk-ph">
                          <img alt="" src="/images/link12.png" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="line2"></div>
                  <div className="team">
                    <div className="servicee">
                      <div className="service-tem">
                        <div className="service-content">Dịch vụ</div>
                        <div className="rectangle "></div>
                      </div>
                      <div className="list-service">
                        <div className="list-text">
                          <div className="chevron">
                            <img alt="" src="/images/double-chevron.png" />
                          </div>
                          <div className="list-content">
                            Khám và tư vấn dinh dưỡng cho người bệnh tim mạch
                          </div>
                        </div>

                        <div className="list-text1">
                          <div className="chevron">
                            <img alt="" src="/images/double-chevron.png" />
                          </div>
                          <div className="list-content1">
                            Khám sức khỏe đi học, đi làm
                          </div>
                        </div>

                        <div className="list-text2">
                          <div className="chevron">
                            <img alt="" src="/images/double-chevron.png" />
                          </div>
                          <div className="list-content2">
                            Điều trị phục hồi chức năng
                          </div>
                        </div>

                        <div className="list-text3">
                          <div className="chevron">
                            <img alt="" src="/images/double-chevron.png" />
                          </div>
                          <div className="list-content3">Trẻ hóa làn da</div>
                        </div>

                        <div className="list-text4">
                          <div className="chevron">
                            <img alt="" src="/images/double-chevron.png" />
                          </div>
                          <div className="list-content4">
                            Khám sức khỏe lái xe các hạng
                          </div>
                        </div>

                        <div className="list-text5">
                          <div className="chevron">
                            <img alt="" src="/images/double-chevron.png" />
                          </div>
                          <div className="list-content5">Tầm soát ung thư</div>
                        </div>

                        <div className="list-text6">
                          <div className="chevron">
                            <img alt="" src="/images/double-chevron.png" />
                          </div>
                          <div className="list-content6">Sản phụ khoa</div>
                        </div>
                      </div>
                    </div>

                    <div className="featured article">
                      <div className="service-contentt">
                        Bài viết nổi bật
                        <div className="rectanglee"></div>
                      </div>
                      <div class="news-image">
                        <div class="travel">
                          <div class="travel-image">
                            <img alt="" src="/images/rectangle-1039-1@2x.png" />
                          </div>
                          <div class="travel-content">
                            Travelling as a way of self-discovery and progress
                            in the life
                          </div>
                        </div>

                        <div class="travel1">
                          <div class="travel-image">
                            <img alt="" src="/images/rectangle-1039-5@2x.png" />
                          </div>
                          <div class="travel-content">
                            How to write content about your photographs
                          </div>
                        </div>

                        <div class="travel2">
                          <div class="travel-image">
                            <img alt="" src="/images/rectangle-1039-2@2x.png" />
                          </div>
                          <div class="travel-content">
                            How a visual artist redefines success in graphic
                            design
                          </div>
                        </div>

                        <div class="travel3">
                          <div class="travel-image">
                            <img alt="" src="/images/rectangle-1039-3@2x.png" />
                          </div>
                          <div class="travel-content">
                            Travelling as a way of self-discovery and progress
                          </div>
                        </div>
                      </div>

                      <div className="service-contentts">
                        Truyền thông
                        <div className="rectanglees"></div>
                      </div>
                      <div class="news-images">
                        <div class="travels">
                          <div class="travel-images">
                            <img alt="" src="/images/rectangle-1039-1@2x.png" />
                          </div>
                          <div class="travel-contents">
                            Travelling as a way of self-discovery and progress
                            in the life
                          </div>
                        </div>

                        <div class="travel1s">
                          <div class="travel-image">
                            <img alt="" src="/images/rectangle-1039-5@2x.png" />
                          </div>
                          <div class="travel-content">
                            How to write content about your photographs
                          </div>
                        </div>

                        <div class="travel2s">
                          <div class="travel-image">
                            <img alt="" src="/images/rectangle-1039-2@2x.png" />
                          </div>
                          <div class="travel-content">
                            How a visual artist redefines success in graphic
                            design
                          </div>
                        </div>

                        <div class="travel3s">
                          <div class="travel-image">
                            <img alt="" src="/images/rectangle-1039-3@2x.png" />
                          </div>
                          <div class="travel-content">
                            Travelling as a way of self-discovery and progress
                          </div>
                        </div>
                      </div>

                      <div class="love-images">
                        <img alt="" src="/images/imageslove.png" />
                      </div>
                    </div>
                  </div>
                              <div class="related articles">
                                  <div className="servic-content">
                                      Bài viết liên quan
                                    <div className="rectanle"></div>
                                  </div>
                                  <section className="pageSegmentation">
                        {this.state.dataPage && this.state.dataPage.length > 0 && (
                          <>
                            {this.state.dataPage.map((item) => (
                              <div key={item.id} className="cartTinTuc">
                                <img
                                  className="menuBarIcon1"
                                  loading="eager"
                                  alt=""
                                  src={
                                    item.image != null
                                      ? `${process.env.CDN_URL_S3}${item.image}`
                                      : ``
                                  }
                                />
                                <div className="partnerLogos">
                                  <div className="numberBasedContent">
                                    {item.created_at}
                                  </div>
                                 
                                  <a>
                                    <div className="mcvSeK1">{item.title}</div>
                                    
                                  </a> 
                                
                                
                                </div>
                              </div>
                            ))}
                          </>
                        )}
                      </section>

                              </div>
                </div>
              </section>
              {/* </div>  */}
            </div>
          </>
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    stateStatus: state.status,
    stateUser: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  let _action = new Action();

  return {
    setStatus: (type, val) => {
      dispatch(_action.setStatus(type, val));
    },
    setValueStatus: (type, val) => {
      dispatch(_action.setValueStatus(type, val));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
