import React, { useRef, useCallback } from "react";
import { useEventListener } from "../functions/front";

function ProgressBar() {
  const progress_bar = useRef(null);

  const handler = useCallback(() => {
    if (progress_bar.current) {
      const html = document.documentElement;
      const body = document.body;
      const st = "scrollTop";
      const sh = "scrollHeight";

      const scroll_percentage =
        ((html[st] || body[st]) /
          ((html[sh] || body[sh]) - html.clientHeight)) *
        100;
      progress_bar.current.value = scroll_percentage;
      progress_bar.current.textContent = `${scroll_percentage}%`;
    }
  });

  useEventListener("scroll", handler);

  // Affichage DOM
  return (
    <progress
      ref={progress_bar}
      className="progress is-primary is-small"
      value="0"
      max="100"
    >
      0%
    </progress>
  );
}

export default ProgressBar;
