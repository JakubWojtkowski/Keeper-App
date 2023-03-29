import React from "react";

function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer>
            <p>Copyright ⓒ wojtko {year}.</p>
        </footer>
    );
}

export default Footer;