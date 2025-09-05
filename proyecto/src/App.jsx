import { FaFacebookF, FaInstagram, FaYoutube, FaTwitch, FaSnapchatGhost, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFutbol } from "react-icons/fa";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      {/* FOOTER */}
      <footer className="footer">
        {/* Parte superior: Logo + Redes */}
        <div className="footer-top">
          {/* Logo */}
          <img
            src="https://www.realmadrid.com/StaticFiles/RealMadridResponsive/images/header_logo.svg"
            alt="Real Madrid"
            className="footer-logo"
          />

          {/* Redes sociales */}
          <div className="footer-socials">
            <a href="https://www.facebook.com/RealMadrid/" target="_blank" rel="noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/realmadrid/" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
            <a href="https://twitter.com/realmadrid" target="_blank" rel="noreferrer">
              <FaXTwitter />
            </a>
            <a href="https://www.youtube.com/realmadrid" target="_blank" rel="noreferrer">
              <FaYoutube />
            </a>
            <a href="https://onefootball.com/es/equipo/real-madrid-26" target="_blank" rel="noreferrer">
              <FaFutbol />
            </a>
            <a href="https://www.twitch.tv/realmadrid" target="_blank" rel="noreferrer">
              <FaTwitch />
            </a>
            <a href="https://www.snapchat.com/add/realmadrid" target="_blank" rel="noreferrer">
              <FaSnapchatGhost />
            </a>
            <a href="https://www.tiktok.com/@realmadrid" target="_blank" rel="noreferrer">
              <FaTiktok />
            </a>
          </div>
        </div>

        {/* Línea separadora */}
        <hr className="footer-line" />

        {/* Parte inferior */}
        <div className="footer-bottom">
          <p>Real Madrid © 2025 Todos los derechos reservados</p>
          <div className="footer-links">
            <a href="https://www.realmadrid.com/sponsors" target="_blank" rel="noreferrer">
              VER TODOS LOS PATROCINADORES
            </a>
            <span>·</span>
            <a href="#">Aviso Legal</a>
            <span>·</span>
            <a href="#">Política de Privacidad</a>
            <span>·</span>
            <a href="#">Política de Cookies</a>
            <span>·</span>
            <a href="#">Canal de información</a>
            <span>·</span>
            <a href="https://www.realmadrid.com" target="_blank" rel="noreferrer">
              realmadrid.com
            </a>
          </div>
        </div>
      </footer>

      {/* ESTILOS DIRECTOS */}
      <style>{`
        :root {
          --rm-font-family-default: RMNeue, Arial, Helvetica, sans-serif;
          --rm-color-grayscale-off-black: #14142B;
          --rm-color-grayscale-line: #E1E5EA;
          --rm-color-primary-white: #FFF;
        }

        body {
          margin: 0;
          font-family: var(--rm-font-family-default);
          font-size: 1rem;
          line-height: 1.5;
          color: var(--rm-color-grayscale-off-black);
        }

        .footer {
          background: var(--rm-color-primary-white);
          border-top: 1px solid var(--rm-color-grayscale-line);
          padding: 20px 40px;
        }

        .footer-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10px;
        }

        .footer-logo {
          height: 56px;
        }

        .footer-socials {
          display: flex;
          gap: 20px;
          font-size: 22px;
        }

        .footer-socials a {
          color: var(--rm-color-grayscale-off-black);
          transition: color 0.3s ease;
        }

        .footer-socials a:hover {
          color: #1a3a6d;
        }

        .footer-line {
          border: none;
          border-top: 1px solid var(--rm-color-grayscale-line);
          margin: 15px 0;
        }

        .footer-bottom {
          font-size: 13px;
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
        }

        .footer-links {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .footer-links a {
          color: var(--rm-color-grayscale-off-black);
          text-decoration: none;
        }

        .footer-links a:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
}
