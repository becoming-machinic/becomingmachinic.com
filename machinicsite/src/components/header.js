import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Img from "../assets/logo.svg"


const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#e8ded2`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 450,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <img src={Img} />
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
