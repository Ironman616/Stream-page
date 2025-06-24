document.addEventListener("DOMContentLoaded", () => {
  // Add bounce animation style
  const style = document.createElement("style");
  style.innerHTML = `
    @keyframes devBounce {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-4px); }
    }
    .dev-icon {
      display: inline-block;
      animation: devBounce 1.2s infinite;
      color: #0dcaf0;
      margin-left: 6px;
    }
    .footer-text {
      color: #0dcaf0;
      text-decoration: none;
    }
  `;
  document.head.appendChild(style);

  // Create footer
  const footer = document.createElement("footer");
  footer.className = "py-2 text-center border-top border-secondary bg-dark text-light";

  const p = document.createElement("p");
  p.className = "mb-0";

  const link = document.createElement("a");
  link.href = "https://telegram.dog/mladminbot";
  link.target = "_blank";
  link.className = "footer-text";

  const robotIcon = document.createElement("i");
  robotIcon.className = "fa-solid fa-robot me-2";

  const text = document.createTextNode("Made with by LOKI MAWA");

  const laptopIcon = document.createElement("i");
  laptopIcon.className = "fa-solid fa-laptop-code dev-icon";

  link.appendChild(robotIcon);
  link.appendChild(text);
  link.appendChild(laptopIcon);

  p.appendChild(link);
  footer.appendChild(p);
  document.body.appendChild(footer);
});
