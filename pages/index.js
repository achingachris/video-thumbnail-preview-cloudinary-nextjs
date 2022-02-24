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

  // const video = new CloudinaryVideo('video_1', { cloudName: 'chris101' }).transformation(previewHover())
  // const video = new CloudinaryVideo('video_1', {
  //   cloudName: 'chris101',
  // }).videoEdit(preview().duration('5.0'))
  const video = new CloudinaryVideo('video_1', {
    cloudName: 'chris101',
  }).videoEdit(preview().duration('5.0'))

  // video preview on hover
  // onMouseOver
  const previewHover = () => {
    // console.log('mouse over')
    video.transformation(previewHover())
  }
  //  onMouseOut
  const previewOut = (event) => {
    console.log('mouse left')
  }

  return (
    <div className='container'>
      <h1 className='text-center'>Cloudinary Video Show</h1>

      <div className='row'>
        <div className='col-lg-4 col-md-4'>
          <AdvancedVideo
            cldVid={video_1}
            controls
            className='container'
            // onMouseEnter={previewHover}
            // onMouseLeave={previewOut}
          />
        </div>
        <div className='col-lg-4 col-md-4'>
          <AdvancedVideo
            cldVid={video_2}
            controls
            className='container'
            // onMouseEnter={previewHover}
            // onMouseLeave={previewOut}
          />
        </div>
        <div className='col-lg-4 col-md-4'>
          <AdvancedVideo
            cldVid={video_3}
            controls
            className='container'
            // onMouseEnter={previewHover}
            // onMouseLeave={previewOut}
          />
        </div>
      </div>

      <div className='row'>
        <div className='col'>
          <AdvancedVideo
            cldVid={video}
            controls
            className='container'
            // onMouseEnter={previewHover}
            // onMouseLeave={previewOut}
          />
        </div>
      </div>
    </div>
  )
}

export default Home
