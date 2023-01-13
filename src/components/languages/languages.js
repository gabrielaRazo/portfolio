import React from 'react';
import { Col, Row } from '../../pages/wrapp/wrapp.style';
import { Icon } from '@iconify/react';
import {
  Horizontal,
  IconCards,
  Text,
  Title,
  ContainerResponsive,
} from './languages.style';

import { languages } from '../../mock/mockLanguages';
const Languages = () => {
  console.log('languages', languages);
  return (
    <>
      {languages.map((type) => (
        <>
          <Row centered>
            <Col lg={4} md={3} sm={6} xs={6}>
              <Title>{type.title}</Title>
            </Col>
            <Col lg={8} md={9} sm={6} xs={6}>
              <Horizontal />
            </Col>
          </Row>

          <Row centered>
            {type.icons.map((item) => (
              <Col lg={3} md={3} sm={5} xs={5}>
                <ContainerResponsive>
                  <Row centered>
                    <IconCards>
                      {item.icon === true ? (
                        <Icon
                          icon={item.url}
                          color={item.color}
                          width={item.width}
                          height={item.height}
                        />
                      ) : (
                        <img src={item.imgUrl} />
                      )}
                    </IconCards>
                    <Text>{item.title}</Text>
                  </Row>
                </ContainerResponsive>
              </Col>
            ))}
          </Row>
        </>
      ))}
    </>
  );
};
export default Languages;
