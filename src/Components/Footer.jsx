import React from "react";

function Footer(){
    const date = new Date();
  const currentYear = date.getFullYear();
return (
<footer>
    <p>Copyright ⓒ {currentYear} by Arnab Kumar Das</p>
</footer>);
}

export default Footer;