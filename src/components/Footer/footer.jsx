import React from "react";
import Styled from "styled-components";
import { Popup } from "semantic-ui-react";

const StyledFooter = Styled.footer`
  background:white;
  width:100%;
`;
const StyledWrapCopyright = Styled.div`
  background:#cf0a2c;
`;
const StyledCopyright = Styled.div`
  width:60%;
  margin:auto;
  display:flex;
  justify-content:space-between;
  padding: 10px 0px;
  && > div > div > p, && > div > div > a > p, && > div > p{
    color:white;
    margin-right:10px;
  }
  && > div > div{
    display:flex;
    justify-content:space-around;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <StyledWrapCopyright>
        <StyledCopyright>
          <div>
            <p>© 2019 Kiero. Todos los derechos reservados.</p>
            <div>
              <a href="https://www.sic.gov.co/">
                <p>www.sic.gov.co</p>
              </a>
              <a href="https://www.kiero.co/terms">
                <p>Términos y condiciones</p>
              </a>
              <a href="https://www.kiero.co/privacity">
                <p>Política de privacidad</p>
              </a>
              <Popup
                content={
                  <div>
                    <h4>Contáctenos</h4>
                    <div>
                      <h4>Lunes a Viernes: 7:00AM - 5:30PM</h4>
                      <h4>Sábados: 8:00AM - 4:00PM</h4>
                    </div>
                    <div>
                      <p>Contáctenos</p>
                      <p>(4) 604 6458</p>
                      <p>01 8000 186464</p>
                      <p>(Línea gratuita)</p>
                      <p> +57 (1) 5800817 WhatsApp</p>
                      <br />
                      <p>
                        Dirección: Carrera 54 #1A-54 Oficina 201, Medellín -
                        Colombia.
                      </p>
                    </div>
                  </div>
                }
                trigger={<p>Contáctenos</p>}
              />
              <a href="https://www.kiero.co/help">
                <p>Ayuda / PQR</p>
              </a>
            </div>
          </div>
          <div>
            <a href="https://www.kiero.co/apps">
              <img
                src="data:image/png;base64,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"
                alt="app kiero"
              />
            </a>
          </div>
        </StyledCopyright>
      </StyledWrapCopyright>
    </StyledFooter>
  );
};

export default Footer;
