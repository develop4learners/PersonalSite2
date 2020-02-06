import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';
import React from 'react';
import Image from 'gatsby-image';
//export const Sy
  //.pictureContainer img:hover

const Paddings = styled.div`
  color:red;
  padding:4px 8px;
`;

export const HoverImg = styled.div`
  &:hover {
    opacity: .5;
  }
`;

export const Title = styled.span`
  display: block;
  font-size: 2rem;
  font-weight: 500;
  margin: 2rem 2rem 1rem;
`;

export const Copy = styled.p`
  color: #757575;
  margin: 0 2rem 2rem;

  ${MEDIA.TABLET`
    margin-bottom: 4rem;
  `};
`;
