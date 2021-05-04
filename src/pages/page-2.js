import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout>
    <Seo title="Page two" />
    <h1>My name is David Langley</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

{
  "en": {
    "translation": {
      "siteMetadata": {
        "title": "Translation Example",
      },
    }
  },  
  "el": {
    "translation": {
      "siteMetadata": {
        "title": "Παράδειγμα Μετάφρασης",
      },
    }
  }
}

export default SecondPage
