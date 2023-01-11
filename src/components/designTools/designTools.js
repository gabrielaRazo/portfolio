import React from 'react';
import { Col, Row } from '../../pages/wrapp/wrapp.style';
import { Icon } from '@iconify/react';
import {
  Horizontal,
  IconCards,
  Text,
  Title,
  ContainerResponsive,
} from '../card/card.style';
const DesignTools = () => {
  return (
    <>
      <Row centered>
        <Col lg={4} md={3} sm={6} xs={6}>
          <Title>Design Tools</Title>
        </Col>
        <Col lg={8} md={9} sm={6} xs={6}>
          <Horizontal />
        </Col>
      </Row>

      <Row centered>
        <Col lg={3} md={3} sm={5} xs={5}>
          <ContainerResponsive>
            <Row centered>
              <IconCards>
                <Icon icon="logos:font-awesome" width="35" height="35" />
              </IconCards>
              <Text>Font Awesome</Text>
            </Row>
          </ContainerResponsive>
        </Col>
        <Col lg={3} md={3} sm={5} xs={5}>
          <ContainerResponsive>
            <ContainerResponsive>
              <Row centered>
                <IconCards>
                  <Icon
                    icon="simple-icons:iconify"
                    color="#1769aa"
                    width="40"
                    height="40"
                  />
                </IconCards>
                <Text>Iconify.design</Text>
              </Row>
            </ContainerResponsive>
          </ContainerResponsive>
        </Col>
        <Col lg={3} md={3} sm={5} xs={5}>
          <ContainerResponsive>
            <Row centered>
              <IconCards>
                <Icon icon="iconoir:pen-tablet" width="40" height="40" />
              </IconCards>
              <Text>Tablet & S Pen</Text>
            </Row>
          </ContainerResponsive>
        </Col>
        <Col lg={3} md={3} sm={5} xs={5}>
          <ContainerResponsive>
            <Row centered>
              <IconCards>
                <Icon icon="logos:figma" width="40" height="40" />
              </IconCards>
              <Text>Figma </Text>
            </Row>
          </ContainerResponsive>
        </Col>
      </Row>
    </>
  );
};
export default DesignTools;
