import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Row, SpaceBottom } from '../../pages/wrapp/wrapp.style';
import {
  faLaptopCode,
  faGraduationCap,
} from '@fortawesome/free-solid-svg-icons';
import { Card, Container, ContainerDivider, MainIcon } from './card.style';
import Languages from '../languages/languages';
import DesignTools from '../designTools/designTools';
import DevTools from '../devTools/devTools';
const CardWrap = () => {
  return (
    <>
      <Card>
        <Container>
          <Row>
            <Col xs={12} sm={12} md={12} lg={6}>
              <Row centered>
                <Col xs={2} sm={2} md={1} lg={1}>
                  <MainIcon>
                    <FontAwesomeIcon icon={faLaptopCode} />
                  </MainIcon>
                </Col>
              </Row>
              <Row>
                <Col xs={1} sm={1} md={1} lg={1}></Col>
                <Col xs={11} sm={11} md={11} lg={11}>
                  <Languages />
                </Col>
              </Row>
              <Row>
                <Col xs={1} sm={1} md={1} lg={1}></Col>
                <Col xs={11} sm={11} md={11} lg={11}>
                  <DevTools />
                </Col>
              </Row>
              <Row>
                <Col xs={1} sm={1} md={1} lg={1}></Col>
                <Col xs={11} sm={11} md={11} lg={11}>
                  <DesignTools />
                </Col>
              </Row>
            </Col>
            <Col xs={12} sm={12} md={12} lg={6}>
              <ContainerDivider>
                <Row centered>
                  <Col xs={2} sm={2} md={1} lg={1}>
                    <MainIcon>
                      <FontAwesomeIcon icon={faGraduationCap} />
                    </MainIcon>
                  </Col>
                </Row>
              </ContainerDivider>
            </Col>
          </Row>
        </Container>
      </Card>
    </>
  );
};
export default CardWrap;
