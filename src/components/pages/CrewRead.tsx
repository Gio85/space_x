import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IRootStore } from '../../types'
import { Badge, Button, Card, Col, Descriptions, Row, Typography } from 'antd'
import { BaseLayout } from '../shared/BaseLayout'
import { useParams } from 'react-router-dom'
import { fetchCrewReadThunk } from '../../store/features/crewReadSlice'
import { LinkOutlined } from '@ant-design/icons'

const { Title } = Typography

export const CrewReadPage: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const dispatch = useDispatch()
  const crewMember = (useSelector((store: IRootStore) => store.crewRead.data) as unknown) as Record<string, any>

  useEffect(() => {
    if (!crewMember || id !== crewMember.id) {
      dispatch(fetchCrewReadThunk(id))
    }
  }, [crewMember, dispatch])

  return (
    <BaseLayout>
      {crewMember && (
        <div>
          <Title>{crewMember.name}</Title>
          <Row gutter={16} justify="center">
            <Col span={12}>
              <Card
                style={{ width: 550 }}
                cover={<img alt={`${crewMember.name}`} src={`${crewMember.image}`} style={{ height: 600 }} />}
                bodyStyle={{ padding: 0 }}
              />
            </Col>
            <Col span={12}>
              <Descriptions bordered column={1}>
                <Descriptions.Item label="Status" labelStyle={{ fontWeight: 'bold' }}>
                  {crewMember.status === 'active' ? (
                    <Badge color="green" status="processing" text={crewMember.status.toUpperCase()} />
                  ) : (
                    <Badge color="red" text={crewMember.status.toUpperCase()} />
                  )}
                </Descriptions.Item>
                <Descriptions.Item label="Agency" labelStyle={{ fontWeight: 'bold' }}>
                  {crewMember.agency}
                </Descriptions.Item>
                <Descriptions.Item label="Launches" labelStyle={{ fontWeight: 'bold' }}>
                  {crewMember.launches}
                </Descriptions.Item>
                <Descriptions.Item label="Wikipedia" labelStyle={{ fontWeight: 'bold' }}>
                  <Button type="link" href={crewMember.wikipedia} target="_blank">
                    <LinkOutlined />
                  </Button>
                </Descriptions.Item>
              </Descriptions>
            </Col>
          </Row>
        </div>
      )}
    </BaseLayout>
  )
}
