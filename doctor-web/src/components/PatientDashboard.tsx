import React, { useState, useEffect } from 'react';
import { Table, Button, Modal, Card, Tag, Alert } from 'antd';
import { Line } from '@ant-design/charts';

const API_HOST = 'http://localhost:3000';

const PatientDashboard: React.FC = () => {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalLoading, setModalLoading] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState<any>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [patientDetails, setPatientDetails] = useState<any>({ metrics: [], diets: [], riskAnalysis: null });

  useEffect(() => {
    fetch(`${API_HOST}/patients`)
      .then(res => res.json())
      .then(data => {
        setPatients(data);
        setLoading(false);
      });
  }, []);

  const handleViewDetails = async (patient: any) => {
    setSelectedPatient(patient);
    setIsModalVisible(true);
    setModalLoading(true);
    
    try {
      const res = await fetch(`${API_HOST}/patients/${patient.id}/details`);
      const details = await res.json();
      setPatientDetails(details);
    } catch (error) {
      console.error("Failed to fetch patient details:", error);
    } finally {
      setModalLoading(false);
    }
  };
  
  const columns = [
    { title: 'ID', dataIndex: 'id', key: 'id', render: (text: string) => text.substring(0, 8) },
    { title: 'WeChat OpenID', dataIndex: 'wechatOpenId', key: 'wechatOpenId' },
    { title: '创建时间', dataIndex: 'createdAt', key: 'createdAt', render: (text: string) => new Date(text).toLocaleString() },
    {
      title: '操作',
      key: 'action',
      render: (_: any, record: any) => (
        <Button type="primary" onClick={() => handleViewDetails(record)}>查看详情</Button>
      ),
    },
  ];
  
  const uricAcidData = patientDetails.metrics
    .filter((m: any) => m.type === 'uric_acid')
    .map((m: any) => ({ date: new Date(m.recordedAt).toLocaleDateString(), value: m.value }))
    .reverse();

  const uricAcidConfig = {
    data: uricAcidData,
    xField: 'date',
    yField: 'value',
    point: { size: 5, shape: 'diamond' },
    annotations: [{ type: 'line', start: ['min', 420], end: ['max', 420], text: { content: '高危线', style: { fill: 'red' } }, style: { stroke: 'red' } }]
  };

  return (
    <>
      <Table columns={columns} dataSource={patients} rowKey="id" loading={loading} />
      
      <Modal
        title={`患者详情 - ${selectedPatient?.wechatOpenId}`}
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
        width="80vw"
        destroyOnClose
      >
        {modalLoading ? <p>Loading...</p> : (
          <div>
            {patientDetails.riskAnalysis && (
              <Alert
                message={`AI 风险评估: ${patientDetails.riskAnalysis.riskLevel}`}
                description={patientDetails.riskAnalysis.message}
                type={patientDetails.riskAnalysis.riskLevel === 'High' ? 'error' : 'success'}
                showIcon
                style={{ marginBottom: '20px' }}
              />
            )}
            <h3>血尿酸趋势</h3>
            <Line {...uricAcidConfig} />
            <h3 style={{marginTop: '20px'}}>饮食记录</h3>
            {patientDetails.diets.map((d: any) => (
              <Card key={d.id} size="small" style={{marginBottom: '10px'}}>
                <p><strong>日期:</strong> {new Date(d.recordedAt).toLocaleString()}</p>
                <p><strong>交通灯:</strong> <Tag color={d.trafficLight === 'red' ? 'volcano' : d.trafficLight === 'yellow' ? 'gold' : 'green'}>{d.trafficLight.toUpperCase()}</Tag></p>
                <p><strong>描述:</strong> {d.description || 'N/A'}</p>
              </Card>
            ))}
          </div>
        )}
      </Modal>
    </>
  );
};

export default PatientDashboard;
