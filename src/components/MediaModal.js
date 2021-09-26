import React from "react";

function MediaModal(props) {
  return props.media ? (
    <div className="modal is-active" id="is-media-modal">
      <div
        className="modal-background"
        onClick={(e) => props.setMedia(null)}
      ></div>
      <div className="modal-content">
        {["jpg", "JPG", "png", "PNG"].includes(props.media.split(".")[1]) ? (
          <img
            alt="Image grand format"
            src={require(`../img/${props.media}`).default}
          />
        ) : (
          <video controls autoPlay muted>
            <source
              src={require(`../img/${props.media}`).default}
              alt=""
              type="video/mp4"
            />
          </video>
        )}
      </div>
      <button
        className="modal-close is-large"
        aria-label="close"
        onClick={(e) => props.setMedia(null)}
      ></button>
    </div>
  ) : (
    ""
  );
}

export default MediaModal;
