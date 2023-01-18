import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
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
import { useDispatch } from 'react-redux';

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

const CardWrap = () => {
  const ref = useRef(null);
  const [width, height] = useWindowSize();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: 'CHANGE_HEIGHT_VALUE',
      height: ref.current.clientHeight + 150,
    });
  }, [width]);

  return (
    <>
      <Card>
        <div ref={ref}>
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
        </div>
      </Card>
    </>
  );
};
export default CardWrap;
