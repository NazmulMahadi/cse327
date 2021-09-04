import React from 'react'
import { useForm } from 'react-hook-form'
import { createUserWithEmailAndPassword } from '@firebase/auth'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { createUserProfileDocument } from '../../firebase/firebase.utils'
import { auth } from '../../firebase'

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  let history = useHistory()

  const onSubmit = async (data) => {
    try {
      const {
        email,
        password,
        Name,
        Phone,
        PassingYear,
        Department,
        Occupation,
      } = data

      const userCred = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )
      const d = {
        name: Name,
        phone: Phone,
        passingYear: PassingYear,
        department: Department,
        occupation: Occupation,
      }
      await createUserProfileDocument(userCred.user, d)
      history.push('/login')
      alert('Sign up successful!')
    } catch (error) {
      const errorCode = error.code
      const errorMessage = error.message
      alert(errorCode, errorMessage)
    }
  }

  return (
    <div className='my-5 p-2'>
      <h2 className='text-light text-center fw-bold'>Join Now</h2>
      <form
        className=' mx-auto text-center'
        style={{ width: '300px' }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          type='name'
          className='text-dark form-control  mb-2 '
          placeholder='Name'
          {...register('Name', { required: true })}
        />

        {/* errors will return when field validation fails  */}
        {errors.Name && <span className='text-danger'>Name is required</span>}

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

        <input
          type='password'
          className='text-dark form-control  mb-2'
          placeholder='confirm password'
          {...register('confirmPassword', { required: true, minLength: 6 })}
        />

        {/* errors will return when field validation fails  */}
        {errors.confirmPassword && (
          <span className='text-danger'>This field is required</span>
        )}

        <input
          className='text-dark form-control  mb-2'
          placeholder='Phone'
          {...register('Phone', { required: true })}
        />

        {/* errors will return when field validation fails  */}
        {errors.Phone && <span className='text-danger'>Phone is required</span>}

        <input
          className='text-dark form-control  mb-2'
          placeholder='PassingYear'
          {...register('PassingYear', { required: true })}
        />

        {/* errors will return when field validation fails  */}
        {errors.PassingYear && (
          <span className='text-danger'>This field is required</span>
        )}

        <input
          className='text-dark form-control  mb-2'
          placeholder='Department'
          {...register('Department', { required: true })}
        />

        {/* errors will return when field validation fails  */}
        {errors.Department && (
          <span className='text-danger'>Department is required</span>
        )}

        <input
          className='text-dark form-control  mb-2'
          placeholder='Occupation'
          {...register('Occupation', { required: true })}
        />

        {/* errors will return when field validation fails  */}
        {errors.Occupation && (
          <span className='text-danger'>Occupation is required</span>
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
      <h6 className='text-center my-2'>
        If you already have an account{' '}
        <Link to='/login' className='text-warning mx-2'>
          Sign In
        </Link>
      </h6>
    </div>
  )
}

export default SignUp
