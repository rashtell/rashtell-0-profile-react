import React, { Component } from 'react';
import { BlogGrid } from '../ui/blog-grid';


export class Blog extends Component {

    displayBLogGrid = () =>
        <BlogGrid pageNumClicked={this.props.pageNumClicked} incrementPageNumMinAndMax={this.props.incrementPageNumMinAndMax} decrementPageNumMinAndMax={this.props.decrementPageNumMinAndMax} contentsPerPage={this.props.contentsPerPage} {...this.props} />

    displayError = () =>
        <section className="ftco-section">
            <div className="container mt-5">
                <div className="row justify-content-center mb-5 pb-5">
                    <div className="col-md-7 text-center heading-section ftco-animate">
                        <span>
                            Error
                        </span>
                        <h2>
                            Ooops, Something went wrong
                        </h2>
                        <h3>
                            {(this.props.error).toString()}
                        </h3>
                    </div>
                </div>

                <div className="row">
                </div>


            </div>
        </section>

    render = () => {
        return (
            <>
                {this.props.fetchSuccess ? this.displayBLogGrid() : this.displayError()}
            </>

        );
    }
}

