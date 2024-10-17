import React from 'react'
import PlayVideo from '../../playvideo/PlayVideo'
import './Video.css'
import Recomended from '../../recomended/Recomended'
import { useParams } from 'react-router'

export default function Video({setup}) {
  const {categoryId, videoId} = useParams();
  return (
    <>
      <div className="video-container">
        <PlayVideo videoId={videoId} setup={setup}/>
        <Recomended categoryId={categoryId}/>
      </div>
    </>
  )
}
