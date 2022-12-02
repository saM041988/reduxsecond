import React from 'react';
import { FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa';


const Home = () => {
    return(
        <>
            <section className="section-one">
                <div className="container">
            <div className="row">
                <div className="col-md-8 sec-left">
                    <h3 className="mb-4">The Best Of Advanture In You</h3>
                    <div className="scale_image_container">
                    <div className="overlay">
                        <div className="sec-left-text">
                        <h3>Fade Overlay</h3>
                        <p>Odisha travel blogs</p>
                        <button type="button">Read More</button>
                        </div>
                    </div>
                    <img src="images/img1.jpeg" alt="animal image" className="img-fluid" />
                    </div>
                    <div className="row mt-4">
                    <div className="col-md-6">
                        <div className="blog_sec_1">
                        <div className="article_img">
                            <a href="#">
                            <img src="images/img1.jpeg" alt="image" className="img-fluid" />
                            </a>
                        </div>
                        <div className="article_content">
                            <div className="article_title">
                            <h5>
                                Tips dan trick cara menghemat bajed ketika liburan, bagaimana
                                memilih penginapan dan kuliner
                            </h5>
                            <ul className="list-inline post_name">
                                <li className="list-item">
                                <span>by Gundu</span>
                                </li>
                                <li className="list-item">
                                <span>august 20, 2020</span>
                                </li>
                            </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="blog_sec_1">
                        <div className="article_img">
                            <a href="#">
                            <img src="images/img1.jpeg" alt="image" className="img-fluid" />
                            </a>
                        </div>
                        <div className="article_content">
                            <div className="article_title">
                            <h5>
                                Tips dan trick cara menghemat bajed ketika liburan, bagaimana
                                memilih penginapan dan kuliner
                            </h5>
                            <ul className="list-inline post_name">
                                <li className="list-item">
                                <span>by Gundu</span>
                                </li>
                                <li className="list-item">
                                <span>august 20, 2020</span>
                                </li>
                            </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <section className="newsletter">
                    <div className="row">
                        <div className="newsletter-inner mt-4">
                        <h5>The most important events of the day.</h5>
                        <div className="input-group newsletter-form">
                            <input
                            type="text"
                            className="form-control input-form"
                            placeholder="Your email address"
                            />
                            <div className="input-group-append">
                            <button className="btn btn-primary" type="button">
                                subscribe
                            </button>
                            </div>
                        </div>
                        </div>
                    </div>
                    </section>
                    <section className="occasions my-5">
                    <div className="row">
                        <div className="col-md-3">
                        <div className="article_img2">
                            <a href="#">
                            <img src="images/img1.jpeg" alt="image" className="img-fluid" />
                            </a>
                        </div>
                        </div>
                        <div className="col-md-9">
                        <div className="article-blog2">
                            <div className="article-blog-category">Festivals</div>
                            <div className="article-blog-author-details">
                            <ul>
                                <li>
                                <span>By Gundu</span>
                                </li>
                                <li>august 21, 2022</li>
                            </ul>
                            </div>
                            <div className="article-blog-desc">
                            <h5>Ratha Yatra</h5>
                            <p>World Famous Ratha Yatra</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-3">
                        <div className="article_img2">
                            <a href="#">
                            <img src="images/img1.jpeg" alt="image" className="img-fluid" />
                            </a>
                        </div>
                        </div>
                        <div className="col-md-9">
                        <div className="article-blog2">
                            <div className="article-blog-category">Festivals</div>
                            <div className="article-blog-author-details">
                            <ul>
                                <li>
                                <span>By Gundu</span>
                                </li>
                                <li>august 21, 2022</li>
                            </ul>
                            </div>
                            <div className="article-blog-desc">
                            <h5>Ratha Yatra</h5>
                            <p>World Famous Ratha Yatra</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </section>
                </div>
                <div className="col-md-4 sec-right">
                    <div className="row">
                    <section className="blog-post-new">
                        <div>
                        <div>
                            <ul className="nav nav-tabs" role="tablist">
                            <li className="nav-item">
                                <a
                                className="nav-link active"
                                data-toggle="tab"
                                href="#home"
                                role="tab"
                                >
                                <i className="now-ui-icons objects_umbrella-13" /> Latest
                                Posts
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                className="nav-link"
                                data-toggle="tab"
                                href="#profile"
                                role="tab"
                                >
                                <i className="now-ui-icons shopping_cart-simple" /> Popular
                                Posts
                                </a>
                            </li>
                            </ul>
                        </div>
                        <div>
                            {/* Tab panes */}
                            <div className="tab-content tab-content-section">
                            <div className="tab-pane active" id="home" role="tabpanel">
                                <p></p>
                                <div className="row mt-3">
                                <div className="col-md-4">
                                    <div className="article_img1">
                                    <a href="#">
                                        <img
                                        src="images/img1.jpeg"
                                        alt="image"
                                        className="img-fluid"
                                        />
                                    </a>
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <div className="article_title">
                                    <h5>Tips dan trick cara...</h5>
                                    <p />
                                    <ul className="list-inline post_name">
                                        <li className="list-item">
                                        <span>by Gundu</span>
                                        </li>
                                        <li className="list-item">
                                        <span>august 20, 2020</span>
                                        </li>
                                    </ul>
                                    </div>
                                </div>
                                </div>
                                <div className="row mt-3">
                                <div className="col-md-4">
                                    <div className="article_img1">
                                    <a href="#">
                                        <img
                                        src="images/img1.jpeg"
                                        alt="image"
                                        className="img-fluid"
                                        />
                                    </a>
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <div className="article_title">
                                    <h5>Tips dan trick cara...</h5>
                                    <p />
                                    <ul className="list-inline post_name">
                                        <li className="list-item">
                                        <span>by Gundu</span>
                                        </li>
                                        <li className="list-item">
                                        <span>august 20, 2020</span>
                                        </li>
                                    </ul>
                                    </div>
                                </div>
                                </div>
                                <div className="row mt-3">
                                <div className="col-md-4">
                                    <div className="article_img1">
                                    <a href="#">
                                        <img
                                        src="images/img1.jpeg"
                                        alt="image"
                                        className="img-fluid"
                                        />
                                    </a>
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <div className="article_title">
                                    <h5>Tips dan trick cara...</h5>
                                    <p />
                                    <ul className="list-inline post_name">
                                        <li className="list-item">
                                        <span>by Gundu</span>
                                        </li>
                                        <li className="list-item">
                                        <span>august 20, 2020</span>
                                        </li>
                                    </ul>
                                    </div>
                                </div>
                                </div>
                                <p />
                            </div>
                            <div className="tab-pane" id="profile" role="tabpanel">
                                <p></p>
                                <div className="row mt-3">
                                <div className="col-md-4">
                                    <div className="article_img1">
                                    <a href="#">
                                        <img
                                        src="images/img1.jpeg"
                                        alt="image"
                                        className="img-fluid"
                                        />
                                    </a>
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <div className="article_title">
                                    <h5>Tips dan trick cara...</h5>
                                    <p />
                                    <ul className="list-inline post_name">
                                        <li className="list-item">
                                        <span>by Gundu</span>
                                        </li>
                                        <li className="list-item">
                                        <span>august 20, 2020</span>
                                        </li>
                                    </ul>
                                    </div>
                                </div>
                                </div>
                                <div className="row mt-3">
                                <div className="col-md-4">
                                    <div className="article_img1">
                                    <a href="#">
                                        <img
                                        src="images/img1.jpeg"
                                        alt="image"
                                        className="img-fluid"
                                        />
                                    </a>
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <div className="article_title">
                                    <h5>Tips dan trick cara...</h5>
                                    <p />
                                    <ul className="list-inline post_name">
                                        <li className="list-item">
                                        <span>by Gundu</span>
                                        </li>
                                        <li className="list-item">
                                        <span>august 20, 2020</span>
                                        </li>
                                    </ul>
                                    </div>
                                </div>
                                </div>
                                <div className="row mt-3">
                                <div className="col-md-4">
                                    <div className="article_img1">
                                    <a href="#">
                                        <img
                                        src="images/img1.jpeg"
                                        alt="image"
                                        className="img-fluid"
                                        />
                                    </a>
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <div className="article_title">
                                    <h5>Tips dan trick cara...</h5>
                                    <p />
                                    <ul className="list-inline post_name">
                                        <li className="list-item">
                                        <span>by Gundu</span>
                                        </li>
                                        <li className="list-item">
                                        <span>august 20, 2020</span>
                                        </li>
                                    </ul>
                                    </div>
                                </div>
                                </div>
                                <p />
                            </div>
                            </div>
                        </div>
                        </div>
                    </section>
                    </div>
                    <section className="blog-post-new1">
                    <div className="row">
                        <div className="stay-conneted my-3">
                        <h3>Stay Connected</h3>
                        <div className="social-icons">
                            <a href="#">
                            <div className="facebook">
                                <span className="widget-icon">
                                <FaFacebookF />
                                </span>
                                <span className="widget-counter">437 Fans</span>
                                <span className="widget-name">Likes</span>
                            </div>
                            </a>
                            <a href="#">
                            <div className="twitter mt-3">
                                <span className="widget-icon">
                                <FaTwitter />
                                </span>
                                <span className="widget-counter">89 Followers</span>
                                <span className="widget-name">Followers</span>
                            </div>
                            </a>
                            <a href="#">
                            <div className="youtube mt-3">
                                <span className="widget-icon">
                                <FaYoutube />
                                </span>
                                <span className="widget-counter">255 Subscribers</span>
                                <span className="widget-name">Subscribers</span>
                            </div>
                            </a>
                        </div>
                        </div>
                    </div>
                    </section>
                    <section className="blog-post-new2 my-3">
                    <div className="row">
                        <div className="popular-catagory">
                        <div className="popular-catagory-title">
                            <h6 className="text-white">Category</h6>
                        </div>
                        <ul className="list-styled popular-catagory-list">
                            <li>
                            <a href="#">
                                Hotels <span>6</span>
                            </a>
                            </li>
                            <li>
                            <a href="#">
                                Vehicles <span>6</span>
                            </a>
                            </li>
                            <li>
                            <a href="#">
                                Resturants <span>6</span>
                            </a>
                            </li>
                            <li>
                            <a href="#">
                                Foods <span>6</span>
                            </a>
                            </li>
                            <li>
                            <a href="#">
                                Lifestyle <span>6</span>
                            </a>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </section>
                    <section className="gallery">
                    <div className="row">
                        <div className="gallery-inner">
                        <h3>Gallery</h3>
                        <div className="row">
                            <ul className="gallery-inner-list">
                            <li>
                                <a>
                                <img
                                    src="images/img1.jpeg"
                                    alt="image"
                                    className="img-fluid"
                                />
                                <span className="icon-insta">
                                    <i className="fa fa-instagram" />
                                </span>
                                </a>
                            </li>
                            <li>
                                <a>
                                <img
                                    src="images/img1.jpeg"
                                    alt="image"
                                    className="img-fluid"
                                />
                                <span className="icon-insta">
                                    <i className="fa fa-instagram" />
                                </span>
                                </a>
                            </li>
                            <li>
                                <a>
                                <img
                                    src="images/img1.jpeg"
                                    alt="image"
                                    className="img-fluid"
                                />
                                <span className="icon-insta">
                                    <i className="fa fa-instagram" />
                                </span>
                                </a>
                            </li>
                            <li>
                                <a>
                                <img
                                    src="images/img1.jpeg"
                                    alt="image"
                                    className="img-fluid"
                                />
                                <span className="icon-insta">
                                    <i className="fa fa-instagram" />
                                </span>
                                </a>
                            </li>
                            </ul>
                        </div>
                        <div className="row">
                            <ul className="gallery-inner-list">
                            <li>
                                <a>
                                <img
                                    src="images/img1.jpeg"
                                    alt="image"
                                    className="img-fluid"
                                />
                                <span className="icon-insta">
                                    <i className="fa fa-instagram" />
                                </span>
                                </a>
                            </li>
                            <li>
                                <a>
                                <img
                                    src="images/img1.jpeg"
                                    alt="image"
                                    className="img-fluid"
                                />
                                <span className="icon-insta">
                                    <i className="fa fa-instagram" />
                                </span>
                                </a>
                            </li>
                            <li>
                                <a>
                                <img
                                    src="images/img1.jpeg"
                                    alt="image"
                                    className="img-fluid"
                                />
                                <span className="icon-insta">
                                    <i className="fa fa-instagram" />
                                </span>
                                </a>
                            </li>
                            <li>
                                <a>
                                <img
                                    src="images/img1.jpeg"
                                    alt="image"
                                    className="img-fluid"
                                />
                                <span className="icon-insta">
                                    <i className="fa fa-instagram" />
                                </span>
                                </a>
                            </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    </section>
                </div>
                </div>
                </div>
             </section> 

             <section className="section-two">
                <div className="container">
                    <h4 className="text-center mb-3">The Best Of Advanture In You</h4>
                    <p className="text-center mb-3">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus nemo
                    blanditiis optio officiis. Nam, harum.
                    </p>
                    <div className="row mt-2">
                        <div className="col-md-4">
                            <div className="article_widget3">Festival</div>
                            <div className="article_img3">
                            <a href="#">
                                <img src="images/img1.jpeg" alt="image" className="img-fluid" />
                            </a>
                            </div>
                            <div className="article_content3 ">
                            <div className="article_title">
                                <h5>
                                Tips dan trick cara menghemat bajed ketika liburan, bagaimana
                                memilih penginapan dan kuliner
                                </h5>
                                <ul className="list-inline post_name">
                                <li className="list-item">
                                    <span>by Gundu</span>
                                </li>
                                <li className="list-item">
                                    <span>august 20, 2020</span>
                                </li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="article_widget3">Festival</div>
                            <div className="article_img3">
                            <a href="#">
                                <img src="images/img1.jpeg" alt="image" className="img-fluid" />
                            </a>
                            </div>
                            <div className="article_content3 ">
                            <div className="article_title">
                                <h5>
                                Tips dan trick cara menghemat bajed ketika liburan, bagaimana
                                memilih penginapan dan kuliner
                                </h5>
                                <ul className="list-inline post_name">
                                <li className="list-item">
                                    <span>by Gundu</span>
                                </li>
                                <li className="list-item">
                                    <span>august 20, 2020</span>
                                </li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="article_widget3">Festival</div>
                            <div className="article_img3">
                            <a href="#">
                                <img src="images/img1.jpeg" alt="image" className="img-fluid" />
                            </a>
                            </div>
                            <div className="article_content3 ">
                            <div className="article_title">
                                <h5>
                                Tips dan trick cara menghemat bajed ketika liburan, bagaimana
                                memilih penginapan dan kuliner
                                </h5>
                                <ul className="list-inline post_name">
                                <li className="list-item">
                                    <span>by Gundu</span>
                                </li>
                                <li className="list-item">
                                    <span>august 20, 2020</span>
                                </li>
                                </ul>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-3">
                    <div className="col-md-4">
                        <div className="article_widget3">Festival</div>
                        <div className="article_img3">
                        <a href="#">
                            <img src="images/img1.jpeg" alt="image" className="img-fluid" />
                        </a>
                        </div>
                        <div className="article_content3 ">
                        <div className="article_title">
                            <h5>
                            Tips dan trick cara menghemat bajed ketika liburan, bagaimana
                            memilih penginapan dan kuliner
                            </h5>
                            <ul className="list-inline post_name">
                            <li className="list-item">
                                <span>by Gundu</span>
                            </li>
                            <li className="list-item">
                                <span>august 20, 2020</span>
                            </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="article_widget3">Festival</div>
                        <div className="article_img3">
                        <a href="#">
                            <img src="images/img1.jpeg" alt="image" className="img-fluid" />
                        </a>
                        </div>
                        <div className="article_content3 ">
                        <div className="article_title">
                            <h5>
                            Tips dan trick cara menghemat bajed ketika liburan, bagaimana
                            memilih penginapan dan kuliner
                            </h5>
                            <ul className="list-inline post_name">
                            <li className="list-item">
                                <span>by Gundu</span>
                            </li>
                            <li className="list-item">
                                <span>august 20, 2020</span>
                            </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="article_widget3">Festival</div>
                        <div className="article_img3">
                        <a href="#">
                            <img src="images/img1.jpeg" alt="image" className="img-fluid" />
                        </a>
                        </div>
                        <div className="article_content3 ">
                        <div className="article_title">
                            <h5>
                            Tips dan trick cara menghemat bajed ketika liburan, bagaimana
                            memilih penginapan dan kuliner
                            </h5>
                            <ul className="list-inline post_name">
                            <li className="list-item">
                                <span>by Gundu</span>
                            </li>
                            <li className="list-item">
                                <span>august 20, 2020</span>
                            </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
        </>
    );
}

export default Home