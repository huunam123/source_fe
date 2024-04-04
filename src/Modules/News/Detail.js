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

                  {this.state.dataPage &&
                    this.state.dataPage.length > 0 &&
                    this.state.dataPage.map((item, index) => (
                      <div key={item.id} className="content-text">
                        {item.title}
                      </div>
                    ))}

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

                  <div className="content-news-paragraph">
                    <div className="caret-wrapper">
                      <img alt="" src="/images/quote (2).png" />
                    </div>
                    <div className="content-news-text">
                      {this.state.dataPage &&
                        this.state.dataPage.length > 0 &&
                        this.state.dataPage.map((item, index) => (
                          <div key={index}>{item.title}</div>
                        ))}
                    </div>
                  </div>

                  <div className="conttent">
                    <div className="conttent-neww">
                      {this.state.dataPage &&
                        this.state.dataPage.length > 0 &&
                        this.state.dataPage.map((item, index) => (
                          <div
                            key={index}
                            dangerouslySetInnerHTML={{ __html: item.content }}
                          ></div>
                        ))}
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
