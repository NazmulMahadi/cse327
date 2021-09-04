import React, { useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { jobs } from '../../redux/actions/postJobActions'
import { collection, getDocs } from '@firebase/firestore'
import { firestore } from '../../firebase'
import { converSnapshotToDocArray } from '../../firebase/firebase.utils'
import Loader from '../loader/loader'

const CareerOppurtunities = () => {
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()

  React.useEffect(() => {
    const getJobs = async () => {
      try {
        setLoading(true)
        const jobsRef = collection(firestore, '/jobs')
        const snap = await getDocs(jobsRef)
        const jobArr = converSnapshotToDocArray(snap)
        dispatch(jobs(jobArr))
        setLoading(false)
      } catch (error) {
        setLoading(false)
      }
    }
    getJobs()
  }, [dispatch])

  const value = useSelector((state) => {
    return state.postReducers
  })

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
    <>
      <div className='d-flex flex-wrap justify-content-center align-items-center my-5'>
        {value.map((d, idx) => {
          return (
            <Card
              key={idx}
              style={{ width: '18rem', backgroundColor: '#dff4a0' }}
              className='text-dark m-2'
            >
              <Card.Body>
                <h5 className='fw-bold text-dark'> {d.title} </h5>
                <Button
                  className=' fw-bold m-1'
                  size='sm'
                  variant='warning'
                  style={{ borderRadius: '35px' }}
                >
                  Apply Now
                </Button>
                <Button
                  className=' fw-bold m-1'
                  size='sm'
                  variant='warning'
                  style={{ borderRadius: '35px' }}
                >
                  Bookmark
                </Button>
                <Button
                  className=' fw-bold m-1'
                  size='sm'
                  variant='warning'
                  style={{ borderRadius: '35px' }}
                >
                  {d.salary}
                </Button>
                <Button
                  className=' fw-bold m-1 m-1'
                  size='sm'
                  variant='warning'
                  style={{ borderRadius: '35px' }}
                >
                  {d.location}
                </Button>
              </Card.Body>
            </Card>
          )
        })}
      </div>
    </>
  )
}

export default CareerOppurtunities
