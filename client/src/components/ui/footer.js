import React from "react";
import { footerProps } from "../../data/data";

export const Footer = () => {
  return (
    <footer className={footerProps.footer.className}>
      <div className={footerProps.div1.className}>
        <div className={footerProps.div2.className}>
          <div className={footerProps.div3.className}>
            <div className={footerProps.div4.className}>
              <ul className={footerProps.div4.ul.className}>
                {footerProps.div4.ul.li.map((li, i) => {
                  return (
                    <li key={i} className={li.className}>
                      <a href={li.ahref} target={li.target} rel={li.rel}>
                        <span className={li.spanclassName}></span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className={footerProps.div5.className}>
              <h2 className={footerProps.div5.h2.className}>
                {footerProps.div5.h2.text}
              </h2>
              <p
                className={footerProps.div5.p.className}
                style={{ overflowWrap: "break-word" }}
              >
                <a href={footerProps.div5.p.a.href}>
                  {footerProps.div5.p.a.text}
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className={footerProps.div6.className}>
          <div className={footerProps.div7.className}>
            <p>
              Copyright &copy;
              <script>document.write(new Date().getFullYear());</script>
              All rights reserved | Powered with .
              <i
                className="icon-heart"
                aria-hidden="true"
                style={{ color: "red" }}
              ></i>
              . by .
              <a
                href="https://rashtell.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                rAsHtElL
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
