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
const Languages = () => {
  return (
    <>
      <Row centered>
        <Col lg={4} md={3} sm={6} xs={6}>
          <Title>Languages</Title>
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
                <Icon
                  icon="vscode-icons:file-type-html"
                  width="40"
                  height="40"
                />
              </IconCards>
              <Text>HTML</Text>
            </Row>
          </ContainerResponsive>
        </Col>
        <Col lg={3} md={3} sm={5} xs={5}>
          <ContainerResponsive>
            <Row centered>
              <IconCards>
                <Icon icon="logos:javascript" width="35" height="35" />
              </IconCards>
              <Text>Javascript</Text>
            </Row>
          </ContainerResponsive>
        </Col>
        <Col lg={3} md={3} sm={5} xs={5}>
          <ContainerResponsive>
            <Row centered>
              <IconCards>
                <Icon
                  icon="vscode-icons:file-type-css"
                  width="40"
                  height="40"
                />
              </IconCards>
              <Text>CSS</Text>
            </Row>
          </ContainerResponsive>
        </Col>
        <Col lg={3} md={3} sm={5} xs={5}>
          <ContainerResponsive>
            <Row centered>
              <IconCards>
                <Icon icon="bi:git" color="#f1502f" width="40" height="40" />
              </IconCards>
              <Text>Git</Text>
            </Row>
          </ContainerResponsive>
        </Col>
      </Row>
    </>
  );
};
export default Languages;
