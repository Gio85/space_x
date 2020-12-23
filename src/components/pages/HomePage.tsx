import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IRootStore } from '../../types'
import { fetchCompanyDetailsThunk } from '../../store/features'
import { Descriptions, Typography } from 'antd'
import { BaseLayout } from '../shared/BaseLayout'

const { Title } = Typography

export const HomePage: React.FC = () => {
  const dispatch = useDispatch()
  const data = (useSelector((store: IRootStore) => store.companyDetails.data) as unknown) as Record<string, any>

  useEffect(() => {
    if (!data) {
      dispatch(fetchCompanyDetailsThunk())
    }
  }, [data, dispatch])

  return (
    <BaseLayout>
      {data && (
        <div>
          <Title>Company Details</Title>
          <Descriptions bordered column={1}>
            {Object.keys(data).map((key: string, index: number) => (
              <Descriptions.Item key={index} label={key} labelStyle={{ fontWeight: 'bold' }}>
                {typeof data[key] === 'object'
                  ? Object.keys(data[key]).map((key1) => (
                      <div key={key1}>
                        <p>
                          <span style={{ fontWeight: 'bold' }}>{key1}</span>: {data[key][key1]}
                        </p>
                        <br />
                      </div>
                    ))
                  : data[key]}
              </Descriptions.Item>
            ))}
          </Descriptions>
        </div>
      )}
    </BaseLayout>
  )
}
