import { collection, getDocs } from '@firebase/firestore'
import React, { useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import { firestore } from '../../firebase'
import { converSnapshotToDocArray } from '../../firebase/firebase.utils'
import Loader from '../loader/loader'

const MemberDirectory = () => {
  const [index, setIndex] = useState(0)
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)

  React.useEffect(() => {
    const getUsers = async () => {
      try {
        setLoading(true)
        const usersRef = collection(firestore, '/users')
        const snap = await getDocs(usersRef)
        const usrs = converSnapshotToDocArray(snap)
        setUsers(usrs)
        setLoading(false)
      } catch (error) {
        setLoading(false)
      }
    }
    getUsers()
  }, [])

  const handleNext = () => {
    if (index !== users.length - 1) {
      setIndex(index + 1)
    }
  }
  const handlePrevious = () => {
    if (index !== 0) {
      setIndex(index - 1)
    }
  }

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
      <div className=' d-flex justify-content-center my-5 mx-3 fw-bold'>
        <Table
          striped
          bordered
          hover
          responsive
          variant='dark'
          style={{ width: '550px', borderLeft: '5px double #bd0000' }}
        >
          <tbody>
            <tr>
              <td style={{ width: '210px' }}>Member Name</td>
              <td style={{ width: '210px' }}> {users[index]?.name} </td>
            </tr>
            <tr>
              <td style={{ width: '210px' }}>Department</td>
              <td style={{ width: '210px' }}>{users[index]?.department}</td>
            </tr>
            <tr>
              <td style={{ width: '210px' }}>Passing Year</td>
              <td style={{ width: '210px' }}>{users[index]?.passingYear}</td>
            </tr>

            <tr>
              <td style={{ width: '210px' }}>Occupation</td>
              <td style={{ width: '210px' }}>{users[index]?.occupation}</td>
            </tr>
          </tbody>
        </Table>
      </div>
      <div className='text-center'>
        <Button
          onClick={() => handlePrevious()}
          className='mx-5'
          size='sm'
          variant='outline-success'
          style={{ borderRadius: '0', width: '75px' }}
        >
          Previous
        </Button>
        <Button
          onClick={() => handleNext()}
          className='mx-5'
          size='sm'
          variant='outline-success'
          style={{ borderRadius: '0', width: '75px' }}
        >
          Next
        </Button>
      </div>
    </>
  )
}

export default MemberDirectory
