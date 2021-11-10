import React from 'react'

import SectionSocialButtons from './subComponents/SectionSocialButtons'
//estimulus check
//
export default () => {
  return (
    <footer className="footer bg-dark">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-5">
            <span className="copyright">Template reafactored and adapted to ReactJs by me</span>
          </div>
          <div className="col-md-3">
            <SectionSocialButtons/>
          </div>
          <div className="col-md-4">
            <ul className="list-inline quicklinks">
              <li className="list-inline-item">
                <a href="https://startbootstrap.com/themes/agency/">Start Bootstrap Agency Template</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}