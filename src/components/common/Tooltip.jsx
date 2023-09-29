import React from "react";

function Tooltip(props) {
  const {
    showAlways = false,
    hideOnClick = false,
    arrow = false,
    content,
    placement = "top",
    trigger = "mouseenter",
  } = props;

  return (
    <div
      className="inline-block"
      data-tippy-placement={placement}
      data-tippy-arrow={arrow ? "round" : "sharp"}
      data-tippy-trigger={trigger}
      data-tippy-hideOnClick={hideOnClick}
    >
      {content}
    </div>
  );
}

export default Tooltip;
