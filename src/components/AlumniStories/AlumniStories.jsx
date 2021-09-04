import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from '../loader/loader'
import { collection, getDocs } from '@firebase/firestore'
import './AlumniStories.css'
import { firestore } from '../../firebase'
import { converSnapshotToDocArray } from '../../firebase/firebase.utils'

const AlumniStories = () => {
  const [stories, setStories] = useState([])
  const [loading, setLoading] = useState(false)

  React.useEffect(() => {
    const getUsers = async () => {
      try {
        setLoading(true)
        const usersRef = collection(firestore, '/stories')
        const snap = await getDocs(usersRef)
        const storiesArr = converSnapshotToDocArray(snap)
        setStories(storiesArr)
        setLoading(false)
      } catch (error) {
        setLoading(false)
      }
    }
    getUsers()
  }, [])

  if (loading) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
          paddingTop: '100px',
        }}
      >
        <Loader />
      </div>
    )
  }

  return (
    <div
      className=' d-flex my-5'
      style={{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {stories.map((story, index) => {
        return (
          <Link
            to={`/stories/${story.id}`}
            key={index}
            style={{ cursor: 'pointer' }}
            onClick={() => {}}
          >
            <div
              className='d-flex justify-content-center align-items-center m-2 custom'
              style={{
                height: '100px',
                width: '350px',
                backgroundColor: '#dff4a0',
              }}
            >
              <h3 className='text-dark fw-bold'>{story.title}</h3>
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export default AlumniStories
