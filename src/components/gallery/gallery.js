import React from 'react';
import PropTypes from 'prop-types';
import Item from 'components/gallery/item';
import { Container } from './gallery.css';
import Pdf1 from "../../../content/pdf/Roberto-ICLS-2020.pdf";
import Pdf2 from "../../../content/pdf/Semerjian-Roberto-CSCL-2019.pdf";
import Pdf3 from "../../../content/pdf/Roberto-Davis-AERA-2020.pdf";
const pdfs = [Pdf1, Pdf2, Pdf3];

const Gallery = ({ items }) => (
  <Container>
    {items.map((item, i) => (
      <a href = {pdfs[i]} key={i} target = "_blank" rel="noopener noreferrer">
        <Item {...item} key={i} />
      </a>
    ))}
  </Container>
);

Gallery.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Gallery;
