"use strict";

/* Package System */
import React from "react";
import { fetchApi, changeToSlug } from "@helpers/Common";
/* Package Application */
import Link from 'next/link';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this._isMounted = false;

    this.state = {
      dataPage: [],
      dataPin: [],
      total:0
    };
  }

  // async componentDidMount() {
  //   this._isMounted = true;
  //   console.log(1111);
  //   this.getData();
  // }

  // componentDidMount() {
  //   this._isMounted = true;
  //   let _limit = 1;
  //   this._isMounted &&
  //     fetchApi(
  //       process.env.API_URL +
  //         "pl-news?fqnull=deleted_at&status=1&limit=3&offset=0"
  //     )
  //       .then(
  //         (result) =>
  //           this._isMounted &&
  //           this.setState({
  //             dataPage: result.data.data,
  //           })
  //       )
  //       .catch((e) => console.log(e));
  // }

  componentDidMount() {
    this._isMounted = true;
    this.fetchData(1); // Fetch data for the first page initially
  }

  fetchData(pageNumber) {
    const limit = 3;
    const offset = (pageNumber - 1) * limit;
    const apiUrl = `${process.env.API_URL}pl-news?fq=forcus:0&fqnull=deleted_at&status=1&limit=${limit}&offset=${offset}`;

    this._isMounted &&
      fetchApi(apiUrl)
        .then((result) => {
          if (this._isMounted) {
            this.setState({
              dataPage: result.data.data,
              currentPage: pageNumber, // Update current page number
              total:result.data.total,
              pageNumber:(result.data.total/3).toFixed()
              
            });
          }
        })
        .catch((e) => console.log(e));
  }

  handlePaginationClick = (pageNumber) => {
    this.fetchData(pageNumber);
  };

  componentWillUnmount() {
    this._isMounted = false;
  }

  async componentDidUpdate(prevProps, prevState) {
    if (this.state.dataPage.length == 0) {
      this.getData();
    }
    if (this.state.dataPin.length == 0) {
      this.getDataPin();
    }
  }

  getData = () => {
    try {
      this._isMounted &&
        fetchApi(process.env.API_URL + "pl-news?fqnull=deleted_at")
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


  getDataPin = () => {
    try {
      this._isMounted &&
        fetchApi(process.env.API_URL + "pl-news?fq=forcus:1&fqnull=deleted_at")
          .then(
            (result) =>
              this._isMounted &&
              this.setState({
                dataPin: result.data.data,
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
    console.log(_data,this.state.pageNumber);
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


           <main className="imagee-title">
            <section className="tmsaticungth">
              {this.state.dataPin && this.state.dataPin.length > 0 && (
                <div key={this.state.dataPin[0].id}className="tmsaticungth"  >
                  <img
                    className="topbarMainIcon"
                    loading="eager"
                    alt=""
                    src={
                      this.state.dataPin[0].image != null
                        ? `${(process.env.CDN_URL_S3)}${this.state.dataPin[0].image}`
                        : ""
                    }
                  /> 

                  <div className="container">
                    <div className="containerChild">
                      <h3 className="mcvSeK">
                        {this.state.dataPin[0].title}
                      </h3>
                      <div className="image">
                        {this.state.dataPin[0].created_at}
                      </div>
                      <div className="sectionFrame">
                        <div className="voNgy1310Container">
                          <div className="voNgy1310" dangerouslySetInnerHTML={ { __html: this.state.dataPin[0].content } }>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </section>
          </main> 

          {/* <main className="imagee-title">
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
                  "`MCV S&E ký kết hợp tác truyền thông chiến lược với GIGA
                  Digital`"
                </h3>          
                <div className="image">21:20 - 23/08/2022</div>
                <div className="sectionFrame">
                  <div className="voNgy1310Container">
                    <p className="voNgy1310">
                      "`Vào ngày 13/10, Công ty Cổ phần Thể thao và Giải trí MCV
                      (MCV S&E) và Công ty TNHH GIGA Distribution (GIGA Digital)
                      đã chính thức ký kết hợp tác chiến lược.`"
                    </p>
                    <p className="haiNV">
                      Hai đơn vị cùng hướng tới mục tiêu mang đến những giá trị
                      thiết thực trong lĩnh lực truyền thông trên nền tảng
                      truyền thông số, nâng tầm độ nhận diện thương hiệu trên
                      thị trường.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </main>  */}

          <section className="pageSegmentation">
            {this.state.dataPage && this.state.dataPage.length > 0 && (
              <>
                {this.state.dataPage.map((item) => (
                  <div key={item.id} className="cartTinTuc">
                    <img
                      className="menuBarIcon"
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
                      <Link href={`/tin-tuc/${item.slug}`}> 
                      <a>
                        <div className="mcvSeK1">{item.title}</div>
                        
                      </a> 
                    </Link>
                    
                    </div>
                  </div>
                ))}
              </>
            )}
          </section>

          {/* <section className="pageSegmentation">
            {this.state.dataPage && this.state.dataPage.length > 0 && (
              <>
                {this.state.dataPage.map((item) => (
                  <>
                    <div key={item.id} className="cartTinTuc">
                      <img
                        className="menuBarIcon"
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
                        <div className="mcvSeK1">{item.title}</div>
                      </div>
                    </div>
                  </>
                ))}
              </>
            )}
          </section> */}

          <div className="containerWithPagination">
            
            {Array.from({ length: this.state.pageNumber }, (_, i) => i + 1).map((pageNumber) => {
              console.log(array)
              // Determine if the current page number should be displayed
              const shouldDisplay =
                pageNumber <= 3 || // Display the first three numbers
                pageNumber >= 8 || // Display the last three numbers
                Math.abs(pageNumber - this.state.currentPage) <= 1; // Display if within 1 page of current page

              if (!shouldDisplay) {
                // Display an ellipsis for skipped pages
                return (
                  <div key={pageNumber} className="paginationNumberBase">
                    <div className="content1">
                      <div className="number">...</div>
                    </div>
                  </div>
                );
              }

              // Determine if the current page number is active
              const isActive = this.state.currentPage === pageNumber;

              // Define the class name based on whether the page is active or not
              const className = `paginationNumberBase${
                isActive ? " active" : ""
              }`;

              // Define the color based on whether the page is active or not
              const textColor = isActive ? "red" : "black"; // Change color to red for active page

              // Display the current page number
              return (
                <div
                  key={pageNumber}
                  className={className}
                  onClick={() => this.handlePaginationClick(pageNumber)}
                >
                  <div className="content1">
                    <div className={`number ${textColor}`}>{pageNumber}</div>
                  </div>
                </div>
              );
            })}
          </div>

        

          {/* <div className="containerWithPagination">
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
          </div> */}
        </body>
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
