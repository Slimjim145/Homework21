import React from "react";

function BookCard(props) {
  return (
    <div className="card mb-3">
      <div className="row no-gutters">
        <div className="col-md-4">
          <img src={props.image} className="card-img" alt={props.title} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">
              <small className="text-muted"> Authors: {props.authors}</small>
            </p>
            <p className="card-text">{props.description}</p>
            <hr />
            <div clasName="d-flex justify-content-between">
              <a
                href={props.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                View
              </a>
              <button
                className="btn btn-info"
                disabled={props.disabled}
                onClick={props.otherButton}
              >
                {props.otherLabel}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default BookCard;
