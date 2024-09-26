import React from "react";

function Footer() {
  return (
    <footer className="footer footer-center bg-base-300 text-base-content p-4">
      <aside>
        <p className="text-xl font-medium">
          Powered by © {new Date().getFullYear()}
          <a
            className="btn btn-link text-xl font-medium"
            href="https://json-api.uz"
            target="_blank"
          >
            json-api.uz
          </a>
        </p>
      </aside>
    </footer>
  );
}

export default Footer;
