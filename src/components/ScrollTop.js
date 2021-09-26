import { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollTop = (props) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    const navbar = document.querySelector(".navbar .navbar-menu");
    if (navbar.classList.contains("is-active")) {
      navbar.classList.remove("is-active");
    }
    const search_modal = document.querySelector("#is-search-modal");
    if (search_modal.classList.contains("is-active")) {
      search_modal.classList.remove("is-active");
    }
  }, [location]);

  return <>{props.children}</>;
};

export default ScrollTop;
