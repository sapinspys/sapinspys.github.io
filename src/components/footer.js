import React from "react"

import footerStyles from "./footer.module.scss"

const Footer = () => {
  return (
    <footer className={footerStyles.siteFooter}>
      <div className={footerStyles.siteFooterContent}>
        <p>
          "A man's true delight is to do the things he was made for. He was made
          to show goodwill to his kind, to rise above the promptings of his
          senses,to distinguish appearances from realities, and to pursue the
          study of universal Nature and her works.
        </p>
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/guillermo-arria-devoe/"
              target="__blank"
              rel="noopener"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/guillearria/"
              target="__blank"
              rel="noopener"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href="https://github.com/sapinspys/"
              target="__blank"
              rel="noopener"
            >
              GitHub
            </a>
          </li>
          <li>
            <a href="mailto:guillermo.arriadevoe@gmail.com">Email</a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
