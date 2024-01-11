import React from "react";
import "./styles.css";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

function BackToTop() {
    let mybutton = document.getElementById("myBtn");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "flex";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


  return (
    <div className="back-to-top" id="myBtn" onClick={() => topFunction()}>
      <ArrowUpwardIcon style={{ color: "var(--blue)" }} />
    </div>
  );
}

export default BackToTop;
