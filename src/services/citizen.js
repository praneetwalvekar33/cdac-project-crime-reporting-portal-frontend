import axios from 'axios'
import { createError, createUrl } from './utils'

export async function signinUser(email, password) {

    try {
    const url = "http://localhost:8080/users/signin"
    // createUrl('users/signin')
    const body = {
        email,
        password,
    }
    console.log(body.email+""+body.password);
    const response = await axios.post(url, body)
    return response.data
    } catch (ex) {
    return createError(ex)
    }
}