import React from 'react'
import "../Home/Track.css"

export default function Track() {
  return (
  <div className="flex flex-col justify-center w-full items-center">
                <h6>Delivery Status</h6>
            <div className="tracking-wrapper">
              <div className="tracking">
                <div id="progress" className="progress-0">
                  <div className="empty-bar"></div>
                  <div className="color-bar"></div>
                  <ul>
                    <li className="bullet-1">
                      <div className="el">
                        <i className="bx bx-check"></i>
                      </div>
                      <div className="txt">Order Accepted</div>
                    </li>
                    <li className="bullet-2">
                      <div className="el">
                        <i className="bx bx-check"></i>
                      </div>
                      <div className="txt">Order Shipped</div>
                    </li>
                    <li className="bullet-3">
                      <div className="el">
                        <i className="bx bx-check"></i>
                      </div>
                      <div className="txt">Order En Route</div>
                    </li>
                    <li className="bullet-4">
                      <div className="el">
                        <i className="bx bx-check"></i>
                      </div>
                      <div className="txt">Order Arrived</div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
  </div>
  );
} 
