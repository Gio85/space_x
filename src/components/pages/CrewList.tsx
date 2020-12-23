import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { APP_ENDPOINT, ICrew, IRootStore } from '../../types'
import { fetchCrewListThunk } from '../../store/features'
import { Card, Col, Row, Typography } from 'antd'
import { BaseLayout } from '../shared/BaseLayout'
import { Link } from 'react-router-dom'

const { Title } = Typography
const { Meta } = Card

export const CrewListPage: React.FC = () => {
  const dispatch = useDispatch()
  const data = (useSelector((store: IRootStore) => store.crewList.data) as unknown) as Record<string, any>

  useEffect(() => {
    if (!data) {
      dispatch(fetchCrewListThunk())
    }
  }, [data, dispatch])

  return (
    <BaseLayout>
      {data && (
        <div>
          <Title>Crew</Title>
          <Row gutter={[16, 16]} justify="center">
            {data.map((crew: ICrew) => (
              <Col key={crew.id} span={8}>
                <div style={{ width: 240, margin: '0 auto'}}>
                  <Link to={`${APP_ENDPOINT.CREW}/${crew.id}`}>
                    <Card hoverable cover={<img alt="crew" src={`${crew.image}`} style={{ maxHeight: 300 }} />}>
                      <Meta title={`${crew.name}`} />
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
