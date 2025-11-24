import { LitElement, html } from "../../assets/js/vendor/lit.js";

export class Footer extends LitElement {
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <div class="gradient-footer-wrapper">
        <!-- rts footer area start -->
        <div class="rts-footer-area">
          <div class="container">
            <div class="row">
              <div
                class="col-12 col-md-4 details-column flex-column justify-content-center d-flex"
              >
                <div class="row pt-lg-4">
                  <div class="col-12 col-lg-5">
                    <div class="sitemap-container">
                      <div class="sitemap-label">pages</div>
                      <ul>
                        <li><a href="/greens-fees.html">greens fees</a></li>
                        <li><a href="/membership-fees.html">membership</a></li>
                        <li><a href="/calendar.html">events</a></li>
                        <li><a href="/contact.html#instruction">instruction</a></li>
                        <li><a href="https://www.beechcreekgolfclub.com/OnlineStore">online store</a></li>
                        <li>
                          <a href="/contact.html#message-us">message us</a>
                        </li>
                        <li><a href="/contact.html#scorecard">scorecard</a></li>
                        <li><a href="/book-tee-time.html">book tee time</a></li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-12 col-lg-5 details-col">
                    <div class="deets-container">
                      <div class="details-label">info</div>
                      <a
                        href="tel:8034994653"
                        class="phone-link link d-block text-decoration-none"
                        >(803) 499-4653</a
                      >
                      <a
                        href="https://goo.gl/maps/qqqdUfzWxq42"
                        target="_blank"
                        class="address-link link d-block text-decoration-none"
                      >
                        1800 Sam Gillespie Blvd<br />
                        Sumter, SC 29154
                      </a>
                      <div class="hours-label">hours</div>
                      <div class="hours">7am-5pm, Daily</div> 
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-4 logo-column">
                <a href="/index.html" class="cornered-box">
                  <img
                    src="./assets/images/logo/beech-creek-footer-logo.svg"
                    class="footer-logo"
                    alt=""
                /></a>
              </div>
              <div class="col-12 col-md-4 flex-column d-flex weather-column">
                <!-- ⚜️⚜️⚜️⚜️⚜️ WEATHER BOX STARTS HERE ⚜️⚜️⚜️⚜️⚜️ -->
                <div class="weather-box">
                  <!-- TODAY WEATHER ROW START -->
                  <div class="row today-weather-row align-items-center">
                    <div class="col text-left weather today-weather">
                      mostly clear
                    </div>
                    <div class="col text-center icon">
                      <img
                        src="./assets/images/icons/weather/sun-line.svg"
                        class="today-icon injectable"
                        alt=""
                      />
                    </div>
                    <div
                      class="col text-end temp flex-column justify-content-center align-items-center d-flex"
                    >
                      <div class="temp-box d-flex justify-content-start">
                        <span class="today-temp"> 98</span
                        ><span class="temp-type">°</span>
                      </div>
                    </div>
                  </div>
                  <!-- TODAY WEATHER ROW END -->

                  <!-- TOMORROW WEATHER ROW START -->
                  <div class="row future-weather-row">
                    <div class="col day tomorrow-day">Wed</div>
                    <div class="col icon text-center">
                      <img
                        src="./assets/images/icons/weather/rain.svg"
                        class="tomorrow-icon"
                        alt=""
                      />
                    </div>
                    <div class="col temp text-end tomorrow-hi-lo">98°/80°</div>
                  </div>
                  <!-- TOMORROW WEATHER ROW END -->

                  <!-- DAY AFTER TOMORROW WEATHER ROW START -->
                  <div class="row future-weather-row">
                    <div class="col day DAT-day">thurs</div>
                    <div class="col icon text-center">
                      <img
                        src="./assets/images/icons/weather/rain.svg"
                        class="DAT-icon"
                        alt=""
                      />
                    </div>
                    <div class="col temp text-end DAT-hi-lo">98°/80°</div>
                  </div>
                  <!-- DAY AFTER TOMORROW WEATHER ROW END -->

                  <!-- THREE DAYS FROM TODAY WEATHER ROW START -->
                  <div class="row future-weather-row">
                    <div class="col day TDFT-day">fri</div>
                    <div class="col icon text-center">
                      <img
                        src="./assets/images/icons/weather/rain.svg"
                        class="TDFT-icon"
                        alt=""
                      />
                    </div>
                    <div class="col temp text-end TDFT-hi-lo">98°/80°</div>
                  </div>
                  <!-- THREE DAYS FROM TODAY WEATHER ROW END -->
                </div>
                <!-- ⚜️⚜️⚜️⚜️⚜️ WEATHER BOX ENDS HERE ⚜️⚜️⚜️⚜️⚜️ -->
              </div>
            </div>
            <div class="row extra-details-row">
              <div class="col-12 col-lg-4">
                <a
                  href="https://www.facebook.com/beechcreekgolfclub"
                  class="facebook-reveal"
                  target="_blank"
                >
                  <img
                    src="assets/images/svgs/f.svg"
                    alt=""
                    class="f injectable"
                  /><img
                    src="assets/images/svgs/acebook.svg"
                    alt=""
                    class="acebook injectable"
                  />
                </a>
              </div>
              <div class="col-12 col-lg-4 text-center">
                <a
                  class="link-to-studio no-underline"
                  href="javascript:void(0)"
                  target="_blank"
                >
                  © Beech Creek Golf Club | ${new Date().getFullYear()}
                </a>
              </div>

              <div class="col-12 col-lg-4">
                <a class="teequest-link no-underline" href="javascript:void(0)">
                  <svg
                    class="svg-inline--fa fa-gears"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="gears"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 512"
                    data-fa-i2svg=""
                  >
                    <path
                      d="M308.5 135.3c7.1-6.3 9.9-16.2 6.2-25c-2.3-5.3-4.8-10.5-7.6-15.5L304 89.4c-3-5-6.3-9.9-9.8-14.6c-5.7-7.6-15.7-10.1-24.7-7.1l-28.2 9.3c-10.7-8.8-23-16-36.2-20.9L199 27.1c-1.9-9.3-9.1-16.7-18.5-17.8C173.9 8.4 167.2 8 160.4 8h-.7c-6.8 0-13.5 .4-20.1 1.2c-9.4 1.1-16.6 8.6-18.5 17.8L115 56.1c-13.3 5-25.5 12.1-36.2 20.9L50.5 67.8c-9-3-19-.5-24.7 7.1c-3.5 4.7-6.8 9.6-9.9 14.6l-3 5.3c-2.8 5-5.3 10.2-7.6 15.6c-3.7 8.7-.9 18.6 6.2 25l22.2 19.8C32.6 161.9 32 168.9 32 176s.6 14.1 1.7 20.9L11.5 216.7c-7.1 6.3-9.9 16.2-6.2 25c2.3 5.3 4.8 10.5 7.6 15.6l3 5.2c3 5.1 6.3 9.9 9.9 14.6c5.7 7.6 15.7 10.1 24.7 7.1l28.2-9.3c10.7 8.8 23 16 36.2 20.9l6.1 29.1c1.9 9.3 9.1 16.7 18.5 17.8c6.7 .8 13.5 1.2 20.4 1.2s13.7-.4 20.4-1.2c9.4-1.1 16.6-8.6 18.5-17.8l6.1-29.1c13.3-5 25.5-12.1 36.2-20.9l28.2 9.3c9 3 19 .5 24.7-7.1c3.5-4.7 6.8-9.5 9.8-14.6l3.1-5.4c2.8-5 5.3-10.2 7.6-15.5c3.7-8.7 .9-18.6-6.2-25l-22.2-19.8c1.1-6.8 1.7-13.8 1.7-20.9s-.6-14.1-1.7-20.9l22.2-19.8zM112 176a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM504.7 500.5c6.3 7.1 16.2 9.9 25 6.2c5.3-2.3 10.5-4.8 15.5-7.6l5.4-3.1c5-3 9.9-6.3 14.6-9.8c7.6-5.7 10.1-15.7 7.1-24.7l-9.3-28.2c8.8-10.7 16-23 20.9-36.2l29.1-6.1c9.3-1.9 16.7-9.1 17.8-18.5c.8-6.7 1.2-13.5 1.2-20.4s-.4-13.7-1.2-20.4c-1.1-9.4-8.6-16.6-17.8-18.5L583.9 307c-5-13.3-12.1-25.5-20.9-36.2l9.3-28.2c3-9 .5-19-7.1-24.7c-4.7-3.5-9.6-6.8-14.6-9.9l-5.3-3c-5-2.8-10.2-5.3-15.6-7.6c-8.7-3.7-18.6-.9-25 6.2l-19.8 22.2c-6.8-1.1-13.8-1.7-20.9-1.7s-14.1 .6-20.9 1.7l-19.8-22.2c-6.3-7.1-16.2-9.9-25-6.2c-5.3 2.3-10.5 4.8-15.6 7.6l-5.2 3c-5.1 3-9.9 6.3-14.6 9.9c-7.6 5.7-10.1 15.7-7.1 24.7l9.3 28.2c-8.8 10.7-16 23-20.9 36.2L315.1 313c-9.3 1.9-16.7 9.1-17.8 18.5c-.8 6.7-1.2 13.5-1.2 20.4s.4 13.7 1.2 20.4c1.1 9.4 8.6 16.6 17.8 18.5l29.1 6.1c5 13.3 12.1 25.5 20.9 36.2l-9.3 28.2c-3 9-.5 19 7.1 24.7c4.7 3.5 9.5 6.8 14.6 9.8l5.4 3.1c5 2.8 10.2 5.3 15.5 7.6c8.7 3.7 18.6 .9 25-6.2l19.8-22.2c6.8 1.1 13.8 1.7 20.9 1.7s14.1-.6 20.9-1.7l19.8 22.2zM464 304a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
                    ></path>
                  </svg>
                  Powered by TeeQuest
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}
customElements.define("my-footer", Footer);
