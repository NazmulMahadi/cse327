import React from 'react'
import { doc, getDoc } from '@firebase/firestore'
import { useParams } from 'react-router-dom'
import { firestore } from '../../firebase'
import Loader from '../loader/loader'

const StoryDetails = () => {
  const params = useParams()
  const [loading, setLoading] = React.useState(false)
  const [story, setStory] = React.useState(undefined)

  React.useEffect(() => {
    const getStory = async () => {
      try {
        setLoading(true)
        const storyRef = doc(firestore, `/stories/${params.id}`)
        const storySnap = await getDoc(storyRef)
        if (storySnap.exists()) {
          setStory(storySnap.data())
        }
        setLoading(false)
      } catch (error) {
        setLoading(false)
      }
    }
    getStory()

    // eslint-disable-next-line react-hooks/exhaustive-deps
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
  if (!loading && !story) {
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
        <p>Story not found!</p>
      </div>
    )
  }
  return (
    <>
      <h1 className='text-center my-5'>{story.title}</h1>
      <div
        style={{ flexDirection: 'column' }}
        className='text-light d-flex justify-content-center align-items-center p-5'
      >
        <img
          className='mx-5'
          src={story.image}
          height='350px'
          width='300px'
          alt=''
        />
        <p style={{ textAlign: 'justify' }}>{story.description}</p>
      </div>
    </>
  )
}

export default StoryDetails
