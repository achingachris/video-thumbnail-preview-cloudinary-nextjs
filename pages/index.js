import { AdvancedVideo } from '@cloudinary/react'
import { Cloudinary, CloudinaryVideo } from '@cloudinary/url-gen'
import { preview } from '@cloudinary/url-gen/actions/videoEdit'

const Home = () => {
  // Create and configure your Cloudinary instance.
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'chris101',
    },
  })

  // cloudinary id
  const cldID = new Cloudinary({ cloudName: 'chris101' })

  // Use the video with public ID
  const video_1 = cld.video('video_1')
  const video_2 = cld.video('video_2')
  const video_3 = cld.video('video_3')

  // video preview on hover
  // onMouseOver
  const startPreview = (video) => {
    console.log('mouse over')
  }
  //  onMouseOut
  const stopPreview = (video) => {
    console.log('mouse left')
  }

  // video urls
  const video_a =
    'https://res.cloudinary.com/chris101/video/upload/v1645684691/video_1.mp4'
  const video_b =
    'https://res.cloudinary.com/chris101/video/upload/v1645684672/video_2.mp4'
  const video_c =
    'https://res.cloudinary.com/chris101/video/upload/v1645684663/video_3.mp4'

  return (
    <div className='container'>
      <h1 className='text-center'>Cloudinary Video Show</h1>
      {/* <div className='row'>
        <div className='col-lg-4 col-md-4'>
          <AdvancedVideo
            cldVid={video_1}
            controls
            className='container'
            onMouseEnter={startPreview}
            onMouseLeave={stopPreview}
          />
        </div>
        <div className='col-lg-4 col-md-4'>
          <AdvancedVideo
            cldVid={video_2}
            controls
            className='container'
            onMouseEnter={startPreview}
            onMouseLeave={stopPreview}
          />
        </div>
        <div className='col-lg-4 col-md-4'>
          <AdvancedVideo
            cldVid={video_3}
            controls
            className='container'
            onMouseEnter={startPreview}
            onMouseLeave={stopPreview}
          />
        </div>
      </div> */}

      <div className='container'>
        <div className='row'>
          <div className='col-lg-4 col-md-4'>
            <div className='container'>
              <video src={video_a} className='container' controls></video>
            </div>
          </div>
          <div className='col-lg-4 col-md-4'>
            <div className='container'>
              <video src={video_b} className='container' controls></video>
            </div>
          </div>
          <div className='col-lg-4 col-md-4'>
            <div className='container'>
              <video src={video_c} className='container' controls></video>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
