const Home = () => {
  const media_urls = [
    {
      id: 1,
      title: 'Video One',
      video_url:
        'https://res.cloudinary.com/chris101/video/upload/v1645684691/video_1.mp4',
    },
    {
      id: 2,
      title: 'Video Two',
      video_url:
        'https://res.cloudinary.com/chris101/video/upload/v1645684672/video_2.mp4',
    },
    {
      id: 3,
      title: 'Video Three',
      video_url:
        'https://res.cloudinary.com/chris101/video/upload/v1645684663/video_3.mp4',
    },
  ]

  // handle mouse enter
  const handleMouseEnter = (e) => {
    const vid = e.target
    vid.muted = true
    vid.play()
  }

  // handle mouse leave
  const handleMouseLeave = (e) => {
    const vid = e.target
    vid.muted = false
    vid.currentTime = 0
    vid.pause()
  }

  return (
    <>
      <h1 className='text-center'>Cloudinary Video Show</h1>
      <div className='container'>
        <div className='row'>
          {media_urls.map((media) => (
            <div key={media.id} className='col-lg-4 col-sm-6 mb-4'>
              <div className='card h-100'>
                <div className='card-body'>
                  <h4 className='card-title'>{media.title}</h4>
                  <video
                    width='320'
                    height='240'
                    controls
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <source src={media.video_url} type='video/mp4' />
                  </video>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Home
