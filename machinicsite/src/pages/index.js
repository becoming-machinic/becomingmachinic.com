import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Img from "../assets/logo.svg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <p>Our clients haven't cared about our minimalist web presence or lack of stock photography.</p>
    <p>What they <em>have</em> cared about is the money and time they've saved by working with us to integrate their existing IT infrastructure and business processes.</p>
    <p>Need to connect RPG applications on your IBM i to a cloud application? SCADA controllers and mobile applications? Data from your manufacturing floor into your ERP system?</p>
    <p>Our solutions are tailored, not bespoke, and are available at <a href="https://machinic.io">machinic.io</a> or on-premise as a virtual appliance.</p>
    <p>Call us at 1-612-428-0415, or email at <a href="mailto:sales@machinic.io">sales@machinic.io</a> and let's talk.</p>
  </Layout>
)

export default IndexPage
