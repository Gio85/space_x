import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IRootStore } from '../../types'
import { Carousel, Descriptions, Tag, Typography } from 'antd'
import { BaseLayout } from '../shared/BaseLayout'
import { useParams } from 'react-router-dom'
import { fetchRocketReadThunk } from '../../store/features'

const { Title } = Typography

export const RocketReadPage: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const dispatch = useDispatch()
  const rocket = (useSelector((store: IRootStore) => store.rocketRead.data) as unknown) as Record<string, any>

  useEffect(() => {
    if (!rocket || id !== rocket.id) {
      dispatch(fetchRocketReadThunk(id))
    }
  }, [rocket, dispatch])

  return (
    <BaseLayout>
      {rocket && (
        <div>
          <Title>{rocket.name}</Title>
          <Carousel effect="fade" autoplay>
            {rocket.flickr_images.map((pic: string, index: number) => (
              <div key={index}>
                <img
                  src={pic}
                  alt="rocket"
                  style={{
                    width: '50%',
                    height: '480px',
                    margin: '0 auto'
                  }}
                />
              </div>
            ))}
          </Carousel>
          <br />
          <p>{rocket.description}</p>
          <Descriptions bordered size="small" column={3}>
            <Descriptions.Item label="Name">{rocket.name}</Descriptions.Item>
            <Descriptions.Item label="Type">{rocket.type}</Descriptions.Item>
            <Descriptions.Item label="Active">
              {rocket.active.toString() === 'false' ? (
                <Tag color="red">{rocket.active.toString().toUpperCase()}</Tag>
              ) : (
                <Tag color="green">{rocket.active.toString().toUpperCase()}</Tag>
              )}
            </Descriptions.Item>
            <Descriptions.Item label="First Flight">{rocket.first_flight}</Descriptions.Item>
            <Descriptions.Item label="Country">{rocket.country}</Descriptions.Item>
            <Descriptions.Item label="Company">{rocket.company}</Descriptions.Item>
            <Descriptions.Item label="Wikipedia">{rocket.wikipedia}</Descriptions.Item>
            <Descriptions.Item label="Cost per launch">$ {rocket.cost_per_launch}</Descriptions.Item>
            <Descriptions.Item label="Boosters">{rocket.boosters}</Descriptions.Item>
            <Descriptions.Item label="Stages">{rocket.stages}</Descriptions.Item>
            <Descriptions.Item label="Height">
              {Object.keys(rocket.height).map((key) => (
                <>
                  {key} : {rocket.height[key]}
                  <br />
                </>
              ))}
            </Descriptions.Item>
            <Descriptions.Item label="Diameter">
              {Object.keys(rocket.diameter).map((key) => (
                <>
                  {key} : {rocket.diameter[key]}
                  <br />
                </>
              ))}
            </Descriptions.Item>
            <Descriptions.Item label="Mass">
              {Object.keys(rocket.mass).map((key) => (
                <>
                  {key} : {rocket.mass[key]}
                  <br />
                </>
              ))}
            </Descriptions.Item>

          </Descriptions>
        </div>
      )}
    </BaseLayout>
  )
}
