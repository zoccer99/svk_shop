import React, { Component } from 'react';

class BlogEntry extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        
        return (
            
                <article className="postcard light blue w-75 ">
                    <a className="postcard__img_link" href="#">
                        <img className="postcard__img" src="https://picsum.photos/1000/1000?blur" alt="Image Title" />
                    </a>
                    <div className="postcard__text t-dark">
                        <h1 className="postcard__title blue"><a href="#">{this.props.headline}</a></h1>
                        <div className="postcard__subtitle small">
                            <time datetime="2020-05-25 12:00:00">
                                <i className="fas fa-calendar-alt mr-2"></i>
                            </time>
                        </div>
                        <div className="postcard__bar"></div>
                        <div className="postcard__preview-txt">{this.props.text}</div>
                        <ul className="postcard__tagbox">
                            <li className="tag__item"><i className="fas fa-tag mr-2"></i>Kader</li>
                            <li className="tag__item"><i className="fas fa-clock mr-2"></i>Liga</li>
                            <li className="tag__item play blue">
                                <a href="#"><i className="fas fa-play mr-2"></i>...</a>
                            </li>
                        </ul>
                    </div>
                </article>
            
        );
    }
}

BlogEntry.propTypes = {

};

export default BlogEntry;