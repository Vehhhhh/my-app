import React from 'react';
import '../Home/Track.css'

function TrackNumber() {
  return (
    <div>
        <section>
    <div className="flex flex-col justify-center w-full items-center">
                <h6>Delivery Status</h6>
            <div class="tracking-wrapper">
              <div class="tracking">
                <div id="progress" class="progress-0">
                  <div class="empty-bar"></div>
                  <div class="color-bar"></div>
                  <ul>
                    <li class="bullet-1">
                      <div class="el">
                        <i class="bx bx-check"></i>
                      </div>
                      <div class="txt">Order Accepted</div>
                    </li>
                    <li class="bullet-2">
                      <div class="el">
                        <i class="bx bx-check"></i>
                      </div>
                      <div class="txt">Order Shipped</div>
                    </li>
                    <li class="bullet-3">
                      <div class="el">
                        <i class="bx bx-check"></i>
                      </div>
                      <div class="txt">Order En Route</div>
                    </li>
                    <li class="bullet-4">
                      <div class="el">
                        <i class="bx bx-check"></i>
                      </div>
                      <div class="txt">Order Arrived</div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="controls">
              <div>
                <button id="prev">
                  <i class="bx bx-chevron-left"></i> Prev
                </button>
                <button id="next">
                  Next <i class="bx bx-chevron-right"></i>
                </button>
              </div>
              <div>
                <p>
                  Step: <span id="step">0</span>
                </p>
              </div>
            </div>
                </div>
                </section>
    </div>
  );
}

export default TrackNumber;