import { LitElement, html } from "../../assets/js/vendor/lit.js";

export class CTA extends LitElement {
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <div class="rts-cts-area">
        <div class="container">
          <div class="row">
            <div class="col-gl-12">
              <div class="cta-one-wrapper">
                <div class="left-area">
                  <h3 class="title">Download Our App</h3>
                  <p>
                    Access GPS, scorecard, special offers, tournament
                    information, and more.
                  </p>
                  <div class="row align-items-center">
                    <a
                      href="https://manager.gallusgolf.com/DownloadApp/1169/Stagg-Hill-Golf-Club"
                      target="_blank"
                      class="rts-btn btn-primary cta-button no-underline"
                    >
                      <span>
                        Download
                        <span class="remove-on-mobile"
                          >for iOS or Android</span
                        ></span
                      >

                      <img
                        class="injectable"
                        src="assets/images/service/icons/13.svg"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
                <div class="right">
                  <div class="right-overlay"></div>
                  <div class="app-box d-flex flex flex-column">
                    <img
                      class="stagg-app-logo"
                      src="./assets/images/logo/stagg-app-logo.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}
customElements.define("my-cta", CTA);
