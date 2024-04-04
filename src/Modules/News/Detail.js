"use strict";

/* Package System */
import React from "react";
import { connect } from "react-redux";
import Action from "@libs/Action";
import { OPEN_SEARCH } from "@config/ActionTypes";

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
  handleToggle = () => {
    this.props.setStatus(OPEN_SEARCH, !this.props.stateStatus.open.search);
  };
  async componentDidMount() {
    this._isMounted = true;
    console.log(111, this.props.slug);
    this.getData();
  }

  // componentDidMount() {

  //   fetch('your-api-endpoint')
  //     .then(response => response.json())
  //     .then(data => {
  //       this.setState({ dataPage: data });
  //     })
  //     .catch(error => console.error('Error fetching data:', error));
  // }

  componentWillUnmount() {
    this._isMounted = false;
  }

  async componentDidUpdate(prevProps, prevState) {
    if (this.state.dataPage.length == 0) {
      this.getData();
    }
  }

  getData = () => {
    try {
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
                  {/* <div className="breadcrumbss">
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
                  </div> */}


<div className="breadcrumbss">
   <div className="link">
    <div className="link1">
      <div className="content-homepage">Trang chủ</div>
    </div>
  </div> 
{/* 
   {this.state.dataPage && this.state.dataPage.length > 0 && (
    this.state.dataPage.map((item, index) => (
      <div key={item.id} className="link">
        <div className="link1">
          <div className="content-homepage">
            {item.title}
          </div>
        </div>
      </div>
    ))
  )} */}


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
    Dịch vụ khám và tư vấn dinh dưỡng cho người bệnh tim mạch 

    </div>

  </div>
</div>
  {/* {this.state.dataPage && this.state.dataPage.length > 0 && (
    this.state.dataPage.map((item, index) => (
      <div key={item.id} className="link-">
        <div className="link-service">
          <div className="textx">
            {item.title}
          </div>
        </div>
      </div>
    ))
  )} */}
</div>


{/* 
                  <div className="content-text">
                     Dịch vụ khám và tư vấn dinh dưỡng cho người bệnh tim mạch 

                  </div>  */}
                  {this.state.dataPage && this.state.dataPage.length > 0 && (
    this.state.dataPage.map((item, index) => (
      <div key={item.id} className="content-text">
        
            {item.title}
          </div>
    
    ))
  )} 
                  

                  <div className="buttom">
                    <div className="text-consion">Đăng bởi</div>
                    <div className="text-consions">Admin</div>

                    <div className="time">
                      <div className="clock">
                        <img alt="" src="/images/clock1.png" />
                      </div>

                      <div className="date">21:20 - 23/08/2022</div>
                    </div>

                    <div className="see">
                      <div className="eye">
                        <img alt="" src="/images/view.png" />
                      </div>
                      <div className="view">1,9K lượt xem</div>
                    </div>
                  </div>
                  {/* <div className="images">
                    <img alt="" src="/images/andatt.png" />
                  </div> */}
                   {/* {_data.title}  */}
                   {this.state.dataPage && this.state.dataPage.length > 0 && (
              <>

                {this.state.dataPage.map((item) => (
                  <div key={item.id} className="images">
                    <img
                   
                      loading="eager"
                      alt=""
                      src={
                        item.image != null
                          ? `${process.env.CDN_URL_S3}${item.image}`
                          : ``
                      }
                    />
                  
                  </div>
                ))}
              </>
            )}
                  {/* <div className="content-news-paragraph">
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
                  </div> */}

                    <div className="content-news-paragraph">
                      <div className="caret-wrapper">
                        <img alt="" src="/images/quote (2).png" />
                      </div>
                      <div className="content-news-text">
                        {this.state.dataPage &&
                          this.state.dataPage.length > 0 &&
                          this.state.dataPage.map((item, index) => (
                            <div key={index}>
                              {item.title}
                            </div>
                          ))}
                      </div>
                    </div>


            


                <div className="conttent">
                  {/* Thông tin chung */}
                  <div className="conttent-neww">
                  {this.state.dataPage &&
                    this.state.dataPage.length > 0 &&
                    this.state.dataPage.map((item, index) => (
                      <div key={index} dangerouslySetInnerHTML={{ __html: item.content }}>
                        {/* This will replace the item title with the content */}
                      </div>
                    ))}
                </div>

                </div> 

                  {/* <div className="imagefurit">
                    <div className="imagess">
                      <img alt="" src="/images/furit.png" />
                    </div>
                    <div className="furit-text">Chú thích hình ảnh</div>
                  </div> */}

                   {/* {this.state.dataPage && this.state.dataPage.length > 0 && (
                    <div className="imagefurit">
                      {this.state.dataPage.map((item) => (
                        <div key={item.id} className="imagess">
                          <img
                            loading="eager"
                            alt=""
                            src={
                              item.image != null
                                ? `${process.env.CDN_URL_S3}${item.image}`
                                : ``
                            }
                          />
                        </div>
                      ))}
                      <div className="furit-text">Chú thích hình ảnh</div>
                    </div>
                  )}  */}


                  {/* <div className="conttents">
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
                  </div> */}

             {/* <div className="conttents">
                  Dấu hiệu cảnh báo bệnh tim mạch
                  <div className="conttent-newws">
                    {this.state.dataPage &&
                      this.state.dataPage.length > 0 &&
                      this.state.dataPage.map((item, index) => (
                        <div key={index}>
                          {item.title}
                        </div>
                      ))}
                  </div>
                  <div className="conttent-newws">
                    Cơn đau thắt ngực: bệnh nhân bị đau đột ngột vùng sau xương ức,vùng ngực trái dữ dội, cảm giác thắt bóp nghẹt tim; hướng lan lên vai và mặt trong cánh tay trái.Cơn đau kéo dài 5- 10 phút.Kèm cảm thấy ngạt thở. Cơn đau thắt ngực có thể xuất hiện nhiều lần sau này , và dần dẫn đến nhồi máu cơ tim và đột tử.
                  </div>
                  <div className="conttent-newws-text">
                    <p>
                      Chóng mặt: do tình trạng rối loạn nhịp tim nặng gây ra.
                    </p>
                    <p>
                      Ho: Ho kéo dài dai dẳng hoặc khò khè, đôi lúc ho ra máu có thể là dấu hiệu của suy tim.
                    </p>
                    <p>
                      Mệt mỏi: Biểu hiện này cho thấy có khả năng bạn bị suy tim.
                    </p>
                    <p>
                      Mạch nhanh hoặc không đều: Tình trạng này kéo dài kèm theo yếu cơ, chóng mặt thì chính là triệu chứng của nhồi máu cơ tim, suy tim, loạn nhịp tim.
                    </p>
                    <p>
                      Khó thở: Cảm giác hết hơi, hụt hơi, thở dốc… rất thường thấy ở bệnh nhân tim mạch.
                    </p>
                    <p>
                      Phù: Suy tim là nguyên nhân dẫn đến tích tụ dịch trong cơ thể, khiến người bệnh bị phù (thường là ở bàn chân, cổ chân, cẳng chân và bụng), dẫn tới chán ăn.
                    </p>
                  </div>
                  <div className="conttentts">
                    Mục tiêu của dinh dưỡng trong điều trị bệnh tim mạch
                    <div className="conttent-newws">
                      {this.state.dataPage &&
                        this.state.dataPage.length > 0 &&
                        this.state.dataPage.map((item, index) => (
                          <div key={index}>
                            {item.tittle}
                          </div>
                        ))}
                    </div>
                    <div className="conttent-newws">
                      Giảm thiểu tình trạng ứ trệ tuần hoàn, kiểm soát tình trạng ứ muối và nước trong cơ thể.
                    </div>
                    <div className="conttent-newws">
                      Giảm bớt các triệu chứng khó chịu: buồn nôn, chán ăn…
                    </div>
                    <div className="conttent-newws">
                      Cải thiện tình trạng dinh dưỡng, nhất là những trường hợp bệnh tim nặng, kéo dài làm bệnh nhân suy kiệt.
                    </div>
                    <div className="conttent-newws">
                      Đặc biệt ở bệnh nhân suy mòn nhằm giảm bớt triệu chứng chán ăn, buồn nôn.
                    </div>
                  </div>
                  <div className="conttentts">
                    Nguyên tắc dinh dưỡng giúp phòng ngừa và hỗ trợ điều trị bệnh tim mạch
                    <div className="conttent-newws">
                      Ăn nhiều bữa nhỏ, giúp giảm gánh nặng cho tim và hệ tiêu hóa.
                    </div>
                    <div className="conttent-newws">
                      Hạn chế nước ( nước canh, nước súp,…) trong suy tim có phù, khó thở.
                    </div>
                    <div className="conttent-newws">
                      Tuân thủ chế độ ăn : tăng cường rau xanh và trái cây, giảm protein từ động vật và giảm tinh bột, hạn chế chất béo xấu, kiêng hoàn toàn rượu, bia và thuốc lá.
                    </div>
                    <div className="conttent-newws">
                      Thực hiện chế độ ăn nhạt ( tổng lượng muối &lt; 5 gam / ngày).
                    </div>
                    <div className="conttent-newws">
                      Bên cạnh chế độ ăn, việc vận động – tập luyện phù hợp cũng rất cần thiết với bệnh nhân tim mạch. Bạn nên duy trì luyện tập tối thiểu 30 phút/ngày, 4-6 ngày/tuần. Các môn thể thao thích hợp với bệnh nhân tim mạch là đi bộ, đạp xe, bơi lội, ..
                    </div>
                    <div className="conttent-newws">
                      Thấu hiểu những lo lắng và trăn trở của các bệnh nhân tim mạch về một chế độ ăn uống tốt cho “sức khỏe tim mạch”, Phòng Khám Đa Khoa Quốc Tế An Đạt mang đến dịch vụ chăm sóc sức khỏe toàn diện cho người bệnh tim mạch với phác đồ dinh dưỡng chuyên biệt.
                    </div>
                  </div>
                </div> */} 



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
                          <form
                            id="appointment-form"
                            action="/submit"
                            method="POST"
                          >
                            <div
                              className="back d-lg-none"
                              onClick={this.handleToggle}
                            >
                              <i className="far fa-long-arrow-left"></i>
                            </div>
                            {this.state.value != "" && (
                              <button
                                onClick={this.handleClear}
                                type="reset"
                                className="d-lg-none"
                              >
                                <i className="fal fa-times"></i>
                              </button>
                            )}
                            <div className="colum">
                              <div className="input-name">
                                <div className="input-content">
                                  <div className="name-input">
                                    <input
                                      type="text"
                                      name="full_name"
                                      required
                                      placeholder="Your Full Name *"
                                    />
                                  </div>
                                </div>
                                <div className=""></div>
                              </div>

                              <div className="input-namee">
                                <div className="input-contentt">
                                  <div>
                                    <input
                                      type="tel"
                                      name="phone_number"
                                      required
                                      placeholder="Your Phone Number *"
                                    />
                                  </div>
                                </div>
                              </div>

                              <div className="input-namme">
                                <div className="inputt-content">
                                  <div class="input-field">
                                    <input
                                      type="tel"
                                      name="phone_number"
                                      required
                                      placeholder="Description of your situation*"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="columm">
                              <div className="bottom">
                                <button
                                  type="submit"
                                  form="appointment-form"
                                  className="bottom-text"
                                >
                                  Submit
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="line1"></div>

                  <div className="tem">
                    <div className="tem-icon">
                      <div className="tem-content">Thẻ:</div>
                      <div className="ingredient">
                        <div className="addcard-content">
                          <a href="#">Tim mạch</a>
                        </div>
                        <div className="addcard-content-health">
                          <a href="#">Sức khỏe</a>
                        </div>
                        <div className="addcard-content-cook">
                          <a href="#">Cooking</a>
                        </div>
                        <div className="addcard-content-chat">
                          <a href="#">Chat</a>
                        </div>
                        <div className="addcard-content-art">
                          <a href="#">Art</a>
                        </div>
                        <div className="addcard-content-draw">
                          <a href="#">Drawing</a>
                        </div>
                        <div className="addcard-content-climic">
                          <a href="#">An Đạt climic</a>
                        </div>
                        <div className="addcard-content-game">
                          <a href="#">Games</a>
                        </div>
                        <div className="addcard-content-cookk">
                          <a href="#">Cooking</a>
                        </div>
                        <div className="addcard-content-sing">
                          <a href="#">Singing</a>
                        </div>
                      </div>
                    </div>

                    <div className="share">
                      <div className="content-share">Chia sẻ:</div>
                      <div className="icon-share">
                        <div className="icon-share-face">
                          <a href="https://www.facebook.com">
                            <img alt="" src="/images/facebook12.png" />
                          </a>
                        </div>
                        <div className="pinterest">
                          <a href="https://www.pinterest.com">
                            <img alt="" src="/images/pinterest1.png" />
                          </a>
                        </div>
                        <div className="social-x">
                          <a href="https://www.twitter.com">
                            <img alt="" src="/images/twitter12.png" />
                          </a>
                        </div>
                        <div className="linnk-ph">
                          <a href="https://www.example.com">
                            <img alt="" src="/images/link12.png" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="line2"></div>
                  <div className="team">
                    {/* <div className="servicee">
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
                    </div> */}

                    <div className="servicee">
                      <div className="service-tem">
                        <div className="service-content">Dịch vụ</div>
                        <div className="rectangle"></div>
                      </div>
                      <div className="list-service">
                        {this.state.dataPage &&
                          this.state.dataPage.length > 0 &&
                          this.state.dataPage.map((item, index) => (
                            <div key={index} className={`list-text${index}`}>
                              <div className="chevron">
                              <img alt="" src="/images/double-chevron.png" />
                              </div>
                              <div className={`list-content${index}`}>
                                {item.title}
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>

                    <div className="featured article">
                      <div className="service-contentt">
                        Bài viết nổi bật
                        <div className="rectanglee"></div>
                      </div>
                      <div className="news-image">
                        {this.state.dataPage &&
                          this.state.dataPage.length > 0 &&
                          this.state.dataPage.map((item) => (
                            <div key={item.id} className="travel">
                            <div className="travel-image">
                                <img
                                  alt=""
                                  src={`${process.env.CDN_URL_S3}${item.image}`}
                                />
                              </div>

                              <div className="travel-content">{item.title}</div>
                            </div>
                          ))}
                      </div>

                      <div className="service-contentts">
                        Truyền thông
                        <div className="rectanglees"></div>
                      </div>
                      <div className="news-images">
                        {this.state.dataPage &&
                          this.state.dataPage.length > 0 &&
                          this.state.dataPage.map((item) => (
                            <div key={item.id} className="travel">
                              <div className="travel-images">
                                <img
                                  alt=""
                                  src={`${process.env.CDN_URL_S3}${item.image}`}
                                />
                              </div>
                              <div className="travel-contents">
                                {item.title}
                              </div>
                            </div>
                          ))}
                      </div>

                      <div className="love-images">
                        <img alt="" src="/images/imageslove.png" />
                      </div>
                    </div>
                  </div>
                  {/* <div className="featured article">
                      <div className="service-contentt">
                        Bài viết nổi bật
                        <div className="rectanglee"></div>
                      </div>
                      <div className="news-image">
                        <div className="travel">
                          <div className="travel-image">
                            <img alt="" src="/images/rectangle-1039-1@2x.png" />
                          </div>
                          <div className="travel-content">
                            Travelling as a way of self-discovery and progress
                            in the life
                          </div>
                        </div>

                        <div className="travel1">
                          <div className="travel-image">
                            <img alt="" src="/images/rectangle-1039-5@2x.png" />
                          </div>
                          <div className="travel-content">
                            How to write content about your photographs
                          </div>
                        </div>

                        <div className="travel2">
                          <div className="travel-image">
                            <img alt="" src="/images/rectangle-1039-2@2x.png" />
                          </div>
                          <div className="travel-content">
                            How a visual artist redefines success in graphic
                            design
                          </div>
                        </div>

                        <div className="travel3">
                          <div className="travel-image">
                            <img alt="" src="/images/rectangle-1039-3@2x.png" />
                          </div>
                          <div className="travel-content">
                            Travelling as a way of self-discovery and progress
                          </div>
                        </div>
                      </div>

                      <div className="service-contentts">
                        Truyền thông
                        <div className="rectanglees"></div>
                      </div>
                      <div className="news-images">
                        <div className="travels">
                          <div className="travel-images">
                            <img alt="" src="/images/rectangle-1039-1@2x.png" />
                          </div>
                          <div className="travel-contents">
                            Travelling as a way of self-discovery and progress
                            in the life
                          </div>
                        </div>

                        <div className="travel1s">
                          <div className="travel-image">
                            <img alt="" src="/images/rectangle-1039-5@2x.png" />
                          </div>
                          <div className="travel-content">
                            How to write content about your photographs
                          </div>
                        </div>

                        <div className="travel2s">
                          <div className="travel-image">
                            <img alt="" src="/images/rectangle-1039-2@2x.png" />
                          </div>
                          <div className="travel-content">
                            How a visual artist redefines success in graphic
                            design
                          </div>
                        </div>

                        <div className="travel3s">
                          <div className="travel-image">
                            <img alt="" src="/images/rectangle-1039-3@2x.png" />
                          </div>
                          <div className="travel-content">
                            Travelling as a way of self-discovery and progress
                          </div>
                        </div>
                      </div> 

                      <div className="love-images">
                        <img alt="" src="/images/imageslove.png" />
                      </div>
                    </div> */}

                  <div className="related articles">
                    <div className="servic-content">
                      Bài viết liên quan
                      <div className="rectanle"></div>
                    </div>
                    <section className="pageSegmentation">
                      {this.state.dataPage &&
                        this.state.dataPage.length > 0 && (
                          <>
                            {this.state.dataPage.map((item) => (
                              <div key={item.id} className="cartTin-Tuc">
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
                                <div className="partner-Logos">
                                  <div className="number-BasedContent">
                                    {item.created_at}
                                  </div>
                                  <a>
                                    <div className="mcv-SeK1">{item.title}</div>
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
