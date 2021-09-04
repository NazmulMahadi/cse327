import React from 'react'
import { useForm } from 'react-hook-form'
import { updateDoc } from '@firebase/firestore'
import { auth } from '../../firebase'
import { getUserRef } from '../../firebase/firebase.utils'
import { useDispatch } from 'react-redux'
import { set } from '../../redux/actions/authActions'

const UpdateProfile = () => {
  const dispatch = useDispatch()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    updateProfile(data)
  }

  const updateProfile = async (profile) => {
    const user = auth.currentUser
    if (!user) return

    const userRef = getUserRef(user)

    // Set the "capital" field of the city 'DC'
    await updateDoc(userRef, {
      name: profile.Name,
      phone: profile.Phone,
      passingYear: profile.PassingYear,
      department: profile.Department,
      occupation: profile.Occupation,
    })

    dispatch(set(profile.Name))
    alert('Profile Updated')
  }
  return (
    <div className='my-5 p-2'>
      <h1 className='text-center'>Update Profile</h1>
      <form
        className=' mx-auto text-center'
        style={{ width: '300px' }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          type='name'
          className='text-dark form-control  mb-2 '
          placeholder='new name'
          {...register('Name', { required: true })}
        />

        {/* errors will return when field validation fails  */}
        {errors.Name && <span className='text-danger'>Name is required</span>}

        <input
          className='text-dark form-control  mb-2'
          placeholder='new phone'
          {...register('Phone', { required: true })}
        />

        {/* errors will return when field validation fails  */}
        {errors.Phone && <span className='text-danger'>Phone is required</span>}

        <input
          className='text-dark form-control  mb-2'
          placeholder='new passing year'
          {...register('PassingYear', { required: true })}
        />

        {/* errors will return when field validation fails  */}
        {errors.PassingYear && (
          <span className='text-danger'>This field is required</span>
        )}

        <input
          className='text-dark form-control  mb-2'
          placeholder='new department'
          {...register('Department', { required: true })}
        />

        {/* errors will return when field validation fails  */}
        {errors.Department && (
          <span className='text-danger'>Department is required</span>
        )}

        <input
          className='text-dark form-control  mb-2'
          placeholder='new Occupation'
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
          type='reset'
          className='btn btn-success mx-2'
          style={{ borderRadius: '0' }}
        >
          Cancel
        </button>
      </form>
    </div>
  )
}

export default UpdateProfile
