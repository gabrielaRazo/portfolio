import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Row } from '../../pages/wrapp/wrapp.style';
import {
  faLaptopCode,
  faGraduationCap,
} from '@fortawesome/free-solid-svg-icons';
import {
  Card,
  ColorWrap,
  ContainerDivider,
  MainIcon,
  CardRelative,
} from './card.style';
import Languages from '../languages/languages';
import Certification from '../certification/certification';
const CardWrap = () => {
  return (
    <>
      <Card>
        <ColorWrap>
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
            </Col>
            <Col collapse="xs" none="sm" hidden="md" lg={6}>
              <ContainerDivider>
                <Row centered>
                  <Col xs={2} sm={2} md={1} lg={1}>
                    <MainIcon>
                      <FontAwesomeIcon icon={faGraduationCap} />
                    </MainIcon>
                  </Col>
                </Row>
                <Row>
                  <Col xs={1} sm={1} md={1} lg={1}></Col>
                  <Col xs={11} sm={11} md={11} lg={11}>
                    <Certification />
                  </Col>
                </Row>
              </ContainerDivider>
            </Col>
          </Row>
        </ColorWrap>
        <Col collapse="lg" xs={12} sm={12} md={12}>
          <CardRelative>
            <ColorWrap>
              <Row centered>
                <Col xs={2} sm={2} md={1} lg={1}>
                  <MainIcon>
                    <FontAwesomeIcon icon={faGraduationCap} />
                  </MainIcon>
                </Col>
              </Row>
              <Row>
                <Col xs={1} sm={1} md={1} lg={1}></Col>
                <Col xs={11} sm={11} md={11} lg={11}>
                  <Certification />
                </Col>
              </Row>
            </ColorWrap>
          </CardRelative>
        </Col>
        <br />
      </Card>
    </>
  );
};
export default CardWrap;
