import React from 'react';
import { Col, Row } from '../../pages/wrapp/wrapp.style';
import { Icon } from '@iconify/react';
import { Horizontal, IconCards, Text, Title } from './designTools.style';
const DesignTools = () => {
  return (
    <>
      <Row centered>
        <Col lg={4} md={4} sm={4} xs={4}>
          <Title>Design Tools</Title>
        </Col>
        <Col lg={8} md={8} sm={8} xs={8}>
          <Horizontal />
        </Col>
      </Row>

      <Row centered>
        <Col lg={3} md={3} sm={3} xs={3}>
          <IconCards>
            <Icon icon="logos:figma" width="40" height="40" />
          </IconCards>
          <Text>Figma</Text>
        </Col>
        <Col lg={3} md={3} sm={3} xs={3}>
          <IconCards>
            <Icon icon="logos:font-awesome" width="35" height="35" />
          </IconCards>
          <Text>Font Awesome</Text>
        </Col>
        <Col lg={3} md={3} sm={3} xs={3}>
          <IconCards>
            <Icon
              icon="simple-icons:iconify"
              color="#1769aa"
              width="40"
              height="40"
            />
          </IconCards>
          <Text>Iconify.design</Text>
        </Col>
        <Col lg={3} md={3} sm={3} xs={3}>
          <IconCards>
            <Icon icon="iconoir:pen-tablet" width="40" height="40" />
          </IconCards>
          <Text>Tablet & S Pen</Text>
        </Col>
      </Row>
    </>
  );
};
export default DesignTools;
