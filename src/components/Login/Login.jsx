import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { set } from '../../redux/actions/authActions'
import { auth } from '../../firebase'
import { signInWithEmailAndPassword } from '@firebase/auth'
import { getUserRef } from '../../firebase/firebase.utils'
import { getDoc } from '@firebase/firestore'
import { useHistory } from 'react-router-dom'

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const dispatch = useDispatch()
  const history = useHistory()

  const onSubmit = async (data) => {
    try {
      const { email, password } = data
      const userCred = await signInWithEmailAndPassword(auth, email, password)
      const userRef = getUserRef(userCred.user)
      const snapshot = await getDoc(userRef)
      if (snapshot.exists) {
        dispatch(set(snapshot.data().name))
        alert('Login successful!')
        history.push('/')
      }
    } catch (error) {
      const errorCode = error.code
      const errorMessage = error.message
      alert(errorCode, errorMessage)
    }
  }

  return (
    <div className='my-5 p-2'>
      <h2 className='text-light text-center fw-bold'>Sign In</h2>
      <form
        className=' mx-auto text-center'
        style={{ width: '300px' }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          className='text-dark form-control  mb-2'
          placeholder='email'
          {...register('email', { required: true })}
        />

        {/* errors will return when field validation fails  */}
        {errors.email && <span className='text-danger'>Email is required</span>}

        <input
          type='password'
          className='text-dark form-control  mb-2'
          placeholder='password'
          {...register('password', { required: true, minLength: 6 })}
        />

        {/* errors will return when field validation fails  */}
        {errors.password && (
          <span className='text-danger'>password is required</span>
        )}
        <br />
        <input
          type='submit'
          className='btn btn-success mx-2'
          style={{ borderRadius: '0' }}
        />
        <button
          type=''
          className='btn btn-success mx-2'
          style={{ borderRadius: '0' }}
        >
          Cancel
        </button>
      </form>
    </div>
  )
}

export default Login
