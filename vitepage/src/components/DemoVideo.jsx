import './styles/DemoVideo.css';

const DemoVideo = ({ videoID }) => {
    const src = `https://drive.google.com/file/d/${videoID}/preview`;
    return (
        <div className='demo-video'>
            <iframe
                width="100%"
                height="100%"
                src={src}
                title="Google Drive video player"
                frameBorder="0"
                allow="autoplay"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default DemoVideo;