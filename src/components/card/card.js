import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Row, SpaceBottom } from '../../pages/wrapp/wrapp.style';
import {
  faLaptopCode,
  faGraduationCap,
} from '@fortawesome/free-solid-svg-icons';
import { Card, Divider, MainIcon } from './card.style';
const CardWrap = () => {
  return (
    <>
      <Card>
        <SpaceBottom xs={1} sm={1} md={2} lg={2} />
        <Row>
          <Col xs={12} sm={12} md={12} lg={6}>
            <Row centered>
              <Col xs={2} sm={2} md={1} lg={1}>
                <MainIcon>
                  <FontAwesomeIcon icon={faLaptopCode} />
                </MainIcon>
              </Col>
            </Row>
          </Col>
          <Col xs={12} sm={12} md={12} lg={1}>
            <Divider />
          </Col>
          <Col xs={12} sm={12} md={12} lg={5}>
            <Row centered>
              <Col xs={2} sm={2} md={1} lg={1}>
                <MainIcon>
                  <FontAwesomeIcon icon={faGraduationCap} />
                </MainIcon>
              </Col>
            </Row>
          </Col>
        </Row>
      </Card>
    </>
  );
};
export default CardWrap;
