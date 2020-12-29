import React, { useEffect } from 'react'
import { BaseLayout } from '../shared/BaseLayout'
import { Card, Col, Row, Typography } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { APP_ENDPOINT, IRocket, IRootStore } from '../../types'
import { Link } from 'react-router-dom'
import Meta from 'antd/es/card/Meta'
import { fetchRocketsListThunk } from '../../store/features'

const { Title } = Typography

export const RocketsListPage: React.FC = () => {
  const dispatch = useDispatch()
  const data = (useSelector((store: IRootStore) => store.rocketsList.data) as unknown) as IRocket[]

  useEffect(() => {
    if (!data) {
      dispatch(fetchRocketsListThunk())
    }
  }, [data, dispatch])

  return (
    <BaseLayout>
      {data && (
        <div>
          <Title>Rockets</Title>
          <Row gutter={[8, 8]} justify="center">
            {data.map((rocket: IRocket) => (
              <Col key={rocket.id} span={12}>
                <div style={{ minWidth: 480, margin: '0 auto' }}>
                  <Link to={`${APP_ENDPOINT.ROCKETS}/${rocket.id}`}>
                    <Card
                      hoverable
                      cover={
                        <img
                          alt="rocket"
                          src={`${rocket.flickr_images[Math.floor(Math.random() * rocket.flickr_images.length)]}`}
                          style={{ maxHeight: 300 }}
                        />
                      }
                    >
                      <Meta title={`${rocket.name}`} />
                    </Card>
                  </Link>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      )}
    </BaseLayout>
  )
}
