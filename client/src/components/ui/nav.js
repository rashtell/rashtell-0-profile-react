import React from 'react';
import { NavUl } from '../mini-components/listItems';
import { navData } from '../../data/data';



export const Nav = ({ navLinkActive }) => {
  return (
    <nav
      id={navData.nav.navId}
      role={navData.nav.role}
    >
      <a
        href={navData.a1.href}
        className={navData.a1.className}
      >
        <i>
        </i>
      </a>
      <div
        className={navData.div1.className}
      >
        <div className={navData.div2.className} style={navData.div2.style}
        >
        </div>
        <div
          className={navData.div3.className}
        >
          <div
            className={navData.div4.className}
          >
            <div
              className={navData.div5.className}
            >
              <h1
                className={navData.h1.className}
              >
                <a
                  href={navData.a2.href} className={navData.a2.className}
                >
                  {navData.a2.name}
                </a>
              </h1>

              <NavUl navLinkActive={navLinkActive} />

            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
