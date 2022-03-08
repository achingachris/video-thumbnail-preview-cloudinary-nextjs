const VideoPlayer = () => {
  
  return (
    <div>
      {media_urls.map((media) => (
        <div key={media.id} className='col-lg-4 col-md-4'>
          <h1>{media.title}</h1>
          <video width='320' height='240' controls>
            <source src={media.video_url} type='video/mp4' />
          </video>
        </div>
      ))}
    </div>
  )
}

export default VideoPlayer
