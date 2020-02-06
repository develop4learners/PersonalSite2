import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { Title, Copy, HoverImg } from './item.css';
import { Link } from "gatsby"

const Item = ({ title, copy, image}, index) => (
  <figure>
      <HoverImg>
        <Img fluid={image ? image.childImageSharp.fluid : {}} alt={title} />
      </HoverImg>
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
  //pdf: PropTypes.string.isRequired
};

export default Item;
