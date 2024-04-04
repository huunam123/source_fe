"use strict";

/* Package System */
import React from "react";
import { fetchApi, changeToSlug } from "@helpers/Common";
/* Package Application */
import Link from "next/link";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this._isMounted = false;

    this.state = {
      dataPage: [],
      dataPin: [],
      total: 0,
    };
  }

  componentDidMount() {
    this._isMounted = true;
    this.fetchData(1);
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
              currentPage: pageNumber,
              total: result.data.total,
              pageNumber: (result.data.total / 3).toFixed(),
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
    console.log(_data, this.state.pageNumber);
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
                <div key={this.state.dataPin[0].id} className="tmsaticungth">
                  <img
                    className="topbarMainIcon"
                    loading="eager"
                    alt=""
                    src={
                      this.state.dataPin[0].image != null
                        ? `${process.env.CDN_URL_S3}${this.state.dataPin[0].image}`
                        : ""
                    }
                  />

                  <div className="container">
                    <div className="containerChild">
                      <h3 className="mcvSeK">{this.state.dataPin[0].title}</h3>
                      <div className="image">
                        {this.state.dataPin[0].created_at}
                      </div>
                      <div className="sectionFrame">
                        <div className="voNgy1310Container">
                          <div
                            className="voNgy1310"
                            dangerouslySetInnerHTML={{
                              __html: this.state.dataPin[0].content,
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </section>
          </main>

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

          <div className="containerWithPagination">
            {Array.from({ length: this.state.pageNumber }, (_, i) => i + 1).map(
              (pageNumber) => {
                console.log(array);
                const shouldDisplay =
                  pageNumber <= 3 ||
                  pageNumber >= 8 ||
                  Math.abs(pageNumber - this.state.currentPage) <= 1;

                if (!shouldDisplay) {
                  return (
                    <div key={pageNumber} className="paginationNumberBase">
                      <div className="content1">
                        <div className="number">...</div>
                      </div>
                    </div>
                  );
                }

                const isActive = this.state.currentPage === pageNumber;

                const className = `paginationNumberBase${
                  isActive ? " active" : ""
                }`;

                const textColor = isActive ? "red" : "black";

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
              }
            )}
          </div>
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
