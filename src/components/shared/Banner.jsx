import { Link } from "react-router-dom";

export default function Banner({ title, backgroundImage, breadcrumb }) {
  return (
    <div className="page-content">
      <div className="aon-page-benner-area">
        <div
          className="aon-page-banner-row"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div
            className="sf-overlay-main"
            style={{ opacity: "0.8", backgroundColor: "#022279" }}
          ></div>
          <div className="sf-banner-heading-wrap">
            <div className="sf-banner-heading-area">
              <div className="sf-banner-heading-large">{title}</div>
              <div className="sf-banner-breadcrumbs-nav">
                <ul className="list-inline">
                  <li>
                    <Link to="/" /> Home{" "}
                  </li>
                  <li>{breadcrumb}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
