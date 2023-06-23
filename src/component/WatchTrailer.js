import React, { useEffect } from 'react'
import { Modal } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import YouTube from 'react-youtube';


const WatchTrailer = ({show, setShow}) => {
  const {movieTrailer} = useSelector((state)=> state.movie);

    // console.log("영화비디오",movieTrailer?.results[0]?.name)
 

    const opts: YouTubeProps['opts'] = {
        height: '390',
        width: '640',
        playerVars: {
          autoplay: 1,
        },
      };

      const onPlayerReady: YouTubeProps['onReady'] = (event) => {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
      }
    
  return (
    <div>
     <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        size="xl"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            {movieTrailer.results[0]?.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <YouTube width={400} videoId={movieTrailer?.results[0]?.key} opts={opts} onReady={onPlayerReady} />
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default WatchTrailer
