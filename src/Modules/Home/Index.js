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
				
				<section className="sl-section">
				<div className="container">
					{/* <div className="sl-section__header"> */}
						<h2>
						<a title="Homepage"></a>
						</h2>
					{/* </div> */}
					
						{/* <div className="history-main">
						<div className="history-left">
							<div className="history-child">
							<p>
							</p>
							</div>
						</div>
						</div> */}
					</div>
				</section>
			</React.Fragment>
		)
	}
}