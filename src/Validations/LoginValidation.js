import * as yup from 'yup'

const loginSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(6).required()
})


export default loginSchema