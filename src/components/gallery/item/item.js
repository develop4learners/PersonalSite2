import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { Title, Copy } from './item.css';
import { Link } from "gatsby"
const pdfs = [
  "../../../../content/pdf/Semerjian-Roberto-CSCL-2019.pdf",
  "../../../../content/pdf/Roberto-Davis-AERA-2020.pdf",
  "../../../../content/pdf/Roberto-ICLS-2020.pdf"];

const Item = ({ title, copy, image}, index) => (
  <figure>
    <a href = {pdfs[index]} target = "_blank" rel="noopener noreferrer">
      <Img fluid={image ? image.childImageSharp.fluid : {}} alt={title} />
    </a>
    <figcaption>
      <Title>{title}</Title>
      <Copy>{copy}</Copy>
      <div>Some text</div>
    </figcaption>
  </figure>
);

Item.propTypes = {
  title: PropTypes.string,
  copy: PropTypes.string,
  image: PropTypes.object.isRequired,
  //pdf: PropTypes.string.isRequired
};

export default Item;
