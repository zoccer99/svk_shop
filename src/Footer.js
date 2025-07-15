import React from "react";

function Footer() {
  return (
      <footer className="footer text-center text-lg-start w-100">
        <div className="container p-4">
          <div className="row">
            <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
              <h5 className="text-uppercase">SV 1893 Kretzschau e.V.</h5>
              <p>
                Der Sportverein für Fußballbegeisterte in Kretzschau und Umgebung.
                Wir fördern den Jugendfußball und bieten eine Heimat für alle Altersklassen.
              </p>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Links</h5>
              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-white">Impressum</a>
                </li>
                <li>
                  <a href="#!" className="text-white">Datenschutz</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Kontakt</h5>
              <ul className="list-unstyled mb-0">
                <li>
                  <p>Musterstraße 123</p>
                </li>
                <li>
                  <p>04564 Kretzschau</p>
                </li>
                <li>
                  <p>info@sv-kretzschau.de</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          © 2022 SV 1893 Kretzschau e.V.
        </div>
      </footer>
  );
}

export default Footer;
