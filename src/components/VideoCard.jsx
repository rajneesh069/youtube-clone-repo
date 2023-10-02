function VideoCard({videoTitle, videoURL}) {
    return <>
        <img src={videoURL}></img>
        <p>{videoTitle}</p>
    </>
}

export default VideoCard;
