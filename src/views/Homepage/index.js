import React from 'react';

const index = (props) => {
  return (
    <div className="homepage">
      <div className="overlay"></div>
      <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
        <source src="mp4/bg.mp4" type="video/mp4"/>
      </video>

      <div className="masthead">
        <div className="masthead-bg"></div>
        <div className="container h-100">
          <div className="row h-100">
            <div className="col-12 my-auto">
              <div className="masthead-content text-white py-5 py-md-0">
                <h1 className="mb-3">Coming Soon!</h1>
                <p className="mb-5">We're working hard to finish the development of this site. Our target launch date is &nbsp;
                  <strong>January 2019</strong>! Sign up for updates using the form below!</p>
                <div className="input-group input-group-newsletter">
                  <input type="email" className="form-control" placeholder="Enter email..." aria-label="Enter email..." aria-describedby="basic-addon"/>
                  <div className="input-group-append">
                    <button className="btn btn-secondary" type="button">Notify Me!</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="social-icons">
        <ul className="list-unstyled text-center mb-0">
          <li className="list-unstyled-item">
            <a href="#">
              <i className="fa fa-twitter"></i>
            </a>
          </li>
          <li className="list-unstyled-item">
            <a href="#">
              <i className="fa fa-facebook"></i>
            </a>
          </li>
          <li className="list-unstyled-item">
            <a href="#">
              <i className="fa fa-instagram"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default index;