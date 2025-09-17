import React from "react";

export default function Footer() {

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer footer-center p-4 bg-base-300 text-base-content">
      <div>
        <p>© rldyen. {currentYear}. All rights reserved.</p>
      </div>
    </footer>
  );
}
