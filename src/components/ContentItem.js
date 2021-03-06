import React, { Component } from "react";
import "./ContentItem.scss";

export default class ContentItem extends Component {
    render() {
        const { heading, subheading, tagline, children, hideRule, pageBreak } = this.props;
        return (
            <div className="content-item">
                <h3>{heading}</h3>
                <p>{subheading}</p>
                <p className="tagline">{tagline}</p>
                {children}
                {!hideRule && <hr />}
                {pageBreak && <div class="page-break" />}
            </div>
        );
    }
}
