import React from "react";
import facebook from "../images/icon-facebook.svg";
import twitter from "../images/icon-twitter.svg";
import instagram from "../images/icon-instagram.svg";
import pinterest from "../images/icon-pinterest.svg";
import logo from "../images/footer-logo.svg";

export default function Footer() {
  return (
    <>
      <footer className="bg-slate-900 py-10 lg:py-20 text-center sm:text-left ">
        <div className="max-width grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-5">
          <article>
            <img src={logo} alt="" />
          </article>
          <article>
            <h3 className="text-white text-lg font-bold tracking-wide">
              Features
            </h3>
            <ul>
              <li>
                <button className="text-slate-200 text-sm mt-1 hover:text-cyan-300">
                  Link Shortening
                </button>
              </li>
              <li>
                <button className="text-slate-200 text-sm mt-1 hover:text-cyan-300">
                  Branded Links
                </button>
              </li>
              <li>
                <button className="text-slate-200 text-sm mt-1 hover:text-cyan-300">
                  Analytics
                </button>
              </li>
            </ul>
          </article>

          <article>
            <h3 className="text-white text-lg font-bold tracking-wide">
              Resources
            </h3>
            <ul>
              <li>
                <button className="text-slate-200 text-sm mt-1 hover:text-cyan-300">
                  Blog
                </button>
              </li>
              <li>
                <button className="text-slate-200 text-sm mt-1 hover:text-cyan-300">
                  Developers
                </button>
              </li>
              <li>
                <button className="text-slate-200 text-sm mt-1 hover:text-cyan-300">
                  Support
                </button>
              </li>
            </ul>
          </article>

          <article>
            <h3 className="text-white text-lg font-bold tracking-wide">
              Company
            </h3>
            <ul>
              <li>
                <button className="text-slate-200 text-sm mt-1 hover:text-cyan-300">
                  About
                </button>
              </li>
              <li>
                <button className="text-slate-200 text-sm mt-1 hover:text-cyan-300">
                  Our Team
                </button>
              </li>
              <li>
                <button className="text-slate-200 text-sm mt-1 hover:text-cyan-300">
                  Careers
                </button>
              </li>
              <li>
                <button className="text-slate-200 text-sm mt-1 hover:text-cyan-300">
                  Contact
                </button>
              </li>
            </ul>
          </article>

          <article>
            <ul className="flex items-center">
              <li>
                <button className="hover:opacity-75">
                  <img src={facebook} alt="" />{" "}
                </button>
              </li>
              <li className="ml-4">
                <button className="hover:opacity-75">
                  <img src={twitter} alt="" />
                </button>
              </li>
              <li className="mx-5">
                <button className="hover:opacity-75">
                  <img src={pinterest} alt="" />
                </button>
              </li>
              <li>
                <button className="hover:opacity-75">
                  <img src={instagram} alt="" />
                </button>
              </li>
            </ul>
          </article>
        </div>
      </footer>
    </>
  );
}
