import React, { useEffect } from 'react'
import { BaseLayout } from '../shared/BaseLayout'
import { Table, Tag, Typography } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { ICapsule, IRootStore } from '../../types'
import { fetchCapsulesListThunk } from '../../store/features'

const { Title } = Typography

export const CapsulesListPage: React.FC = () => {
  const dispatch = useDispatch()
  const data = (useSelector((store: IRootStore) => store.capsulesList.data) as unknown) as ICapsule[]

  useEffect(() => {
    if (!data) {
      dispatch(fetchCapsulesListThunk())
    }
  }, [data, dispatch])

  return (
    <BaseLayout>
      <Title>Capsules</Title>
      {data && (
        <Table<ICapsule> rowKey="id" dataSource={data} size="middle" bordered>
          <Table.Column<ICapsule> key="serial" title="Serial" dataIndex="serial" align="center" />
          <Table.Column<ICapsule> key="type" title="Type" dataIndex="type" align="center" />
          <Table.Column<ICapsule> key="water_landings" title="Water Landings" dataIndex="water_landings" align="center" />
          <Table.Column<ICapsule> key="land_landings" title="Land Landings" dataIndex="land_landings" align="center" />
          <Table.Column<ICapsule> key="last_update" title="Last Update" dataIndex="last_update" align="center" />
          <Table.Column<ICapsule> key="reuse_count" title="Reuse Count" dataIndex="reuse_count" align="center" />
          <Table.Column<ICapsule> key="status" title="Status" dataIndex="status" render={renderStatus} align="center" />
        </Table>
      )}
    </BaseLayout>
  )
}

function renderStatus(status: string) {
  return status.toLowerCase() === 'retired' ? (
    <Tag color={'purple'}>{status.toUpperCase()}</Tag>
  ) : status.toLowerCase() === 'unknown' ? (
    <Tag color={'blue'}>{status.toUpperCase()}</Tag>
  ) : status.toLowerCase() === 'destroyed' ? (
    <Tag color={'red'}>{status.toUpperCase()}</Tag>
  ) : (
    <Tag color={'green'}>{status.toUpperCase()}</Tag>
  )
}
