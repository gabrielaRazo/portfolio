import React from 'react';
import { Col, Row } from '../../pages/wrapp/wrapp.style';
import { Icon } from '@iconify/react';
import { Horizontal, IconCards, Text, Title } from './languages.style';
const Languages = () => {
  return (
    <>
      <Row centered>
        <Col lg={4} md={4} sm={4} xs={4}>
          <Title>Languages</Title>
        </Col>
        <Col lg={8} md={8} sm={8} xs={8}>
          <Horizontal />
        </Col>
      </Row>

      <Row centered>
        <Col lg={3} md={3} sm={3} xs={3}>
          <IconCards>
            <Icon icon="vscode-icons:file-type-html" width="40" height="40" />
          </IconCards>
          <Text>HTML</Text>
        </Col>
        <Col lg={3} md={3} sm={3} xs={3}>
          <IconCards>
            <Icon icon="logos:javascript" width="35" height="35" />
          </IconCards>
          <Text>Javascript</Text>
        </Col>
        <Col lg={3} md={3} sm={3} xs={3}>
          <IconCards>
            <Icon icon="vscode-icons:file-type-css" width="40" height="40" />
          </IconCards>
          <Text>CSS</Text>
        </Col>
        <Col lg={3} md={3} sm={3} xs={3}>
          <IconCards>
            <Icon icon="bi:git" color="#f1502f" width="40" height="40" />
          </IconCards>
          <Text>Git</Text>
        </Col>
      </Row>
    </>
  );
};
export default Languages;
