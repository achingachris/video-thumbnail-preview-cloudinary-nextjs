import { AdvancedVideo } from '@cloudinary/react'
import { Cloudinary, CloudinaryVideo } from '@cloudinary/url-gen'
import { preview } from '@cloudinary/url-gen/actions/videoEdit'

const VidePlayer = () => {
  // video preview on hover
  // onMouseOver
  const startPreview = (e) => {
    const vid = e.target
    vid.muted = true
    vid.play()
  }

  //  onMouseOut
  const stopPreview = (e) => {
    const vid = e.target
    vid.muted = false
    vid.currentTime = 0
    vid.pause()
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
      <div className='row'>
        <div className='col-lg-4 col-md-4'>
          <div className='container'>
            <video
              src={video_a}
              className='container'
              controls
              onMouseEnter={startPreview}
              onMouseLeave={stopPreview}
            ></video>
          </div>
        </div>
        <div className='col-lg-4 col-md-4'>
          <div className='container'>
            <video
              src={video_b}
              className='container'
              controls
              onMouseEnter={startPreview}
              onMouseLeave={stopPreview}
            ></video>
          </div>
        </div>
        <div className='col-lg-4 col-md-4'>
          <div className='container'>
            <video
              src={video_c}
              className='container'
              controls
              onMouseEnter={startPreview}
              onMouseLeave={stopPreview}
            ></video>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VidePlayer
