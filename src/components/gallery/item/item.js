import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { Title, Copy } from './item.css';
import { Link } from "gatsby"
//import Pdf from "../../../../content/Semerjian-Roberto-CSCL-2019.pdf";
//<a href = {Pdf} does actually work but I wish json would instead...
const Item = ({ title, copy, image, pdf}) => (
  <figure>
    <Link to={pdf}>
      <Img fluid={image ? image.childImageSharp.fluid : {}} alt={title} />
    </Link>
    <figcaption>
      <Title>{title}</Title>
      <Copy>{copy}</Copy>
    </figcaption>
  </figure>
);

Item.propTypes = {
  title: PropTypes.string,
  copy: PropTypes.string,
  image: PropTypes.object.isRequired,
  pdf: PropTypes.object.isRequired
};

export default Item;
