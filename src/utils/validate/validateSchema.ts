import * as yup from 'yup'

export default yup.object().shape({
  name: yup.string().required('Name is a required field'),
  email: yup.string().required('Email is required field').email('Invalid email address'),
  phone: yup.string().required('Phone is a required field').matches(/^[\d+]+$/, 'A phone number can only contain numbers').min(10, 'The phone number is not correct').max(14, 'The phone number is not correct'),
  address: yup.string().required('Address is a required field')
})