import React, { Component } from 'react';

class BlogEntry extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            
                <article class="postcard light blue w-75">
                    <a class="postcard__img_link" href="#">
                        <img class="postcard__img" src="https://picsum.photos/1000/1000?blur" alt="Image Title" />
                    </a>
                    <div class="postcard__text t-dark">
                        <h1 class="postcard__title blue"><a href="#">{this.props.headline}</a></h1>
                        <div class="postcard__subtitle small">
                            <time datetime="2020-05-25 12:00:00">
                                <i class="fas fa-calendar-alt mr-2"></i>
                            </time>
                        </div>
                        <div class="postcard__bar"></div>
                        <div class="postcard__preview-txt">{this.props.text}</div>
                        <ul class="postcard__tagbox">
                            <li class="tag__item"><i class="fas fa-tag mr-2"></i>Kader</li>
                            <li class="tag__item"><i class="fas fa-clock mr-2"></i>Liga</li>
                            <li class="tag__item play blue">
                                <a href="#"><i class="fas fa-play mr-2"></i>...</a>
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