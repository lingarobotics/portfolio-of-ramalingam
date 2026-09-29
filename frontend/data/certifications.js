import certificationData from './certifications.json'

const certifications = Array.isArray(certificationData)
  ? certificationData
  : [certificationData]

export default certifications