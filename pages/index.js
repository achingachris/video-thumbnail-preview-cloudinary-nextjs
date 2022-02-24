import { AdvancedVideo } from '@cloudinary/react'
import { Cloudinary } from '@cloudinary/url-gen'

const Home = () => {
  // Create and configure your Cloudinary instance.
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'chris101',
    },
  })

  // Use the video with public ID
  const video_1 = cld.video('video_1')
  const video_2 = cld.video('video_2')
  const video_3 = cld.video('video_3')

  // video preview on hover
  // onMouseOver
  const previewHover = (event) => {
    event.Player.play()
  }
  //  onMouseOut
  const previewOut = (event) => {
    event.Player.videojs.load()
  }

  return (
    <div className='container'>
      <h1 className='text-center'>Cloudinary Video Show</h1>

      <div className='row'>
        <div className='col-lg-4 col-md-4'>
          <AdvancedVideo cldVid={video_1} controls className='container' onMouseEnter={previewHover} />
        </div>
        <div className='col-lg-4 col-md-4'>
          <AdvancedVideo cldVid={video_2} controls className='container' onMouseEnter={previewHover} />
        </div>
        <div className='col-lg-4 col-md-4'>
          <AdvancedVideo cldVid={video_3} controls className='container' onMouseEnter={previewHover} />
        </div>
      </div>
    </div>
  )
}

export default Home
