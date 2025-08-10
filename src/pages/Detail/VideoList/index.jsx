import { useEffect, useState } from "react"
import Error from "../../../components/Error"
import api from "../../../utils"
import { Splide, SplideSlide } from "@splidejs/react-splide";
import ReactPlayer from "react-player";
import { Video } from "@splidejs/splide-extension-video";
const VideoList = ({id}) => {
    //! STATELER
    const [videos, setVideos] = useState([])
    const [error, setError] = useState(null)
    useEffect(() => {
        api.get(`/movie/${id}/videos`)
          .then((response) => {
            setVideos(response.data.results.slice(0, -1));
          })
          .catch((error) => {
            setError(error.message);
          });
      }, []);
  return (
    <div className="my-10">
   {error ? (<Error info={error} />) : ( videos.length > 0 && (
    <div>
        <h2 className="text-xl font-semibold my-5 md:text-lg">Fragmanlar</h2>
        <Splide extensions={{ Video }} options={{ pagination: false }}>
              {videos.map((video, key) => (
                <SplideSlide key={key}>
                  <div className="w-full h-[30vh] md:h-[50vh]">
                    <ReactPlayer
                      controls
                      width={"100%"}
                      height={"100%"}
                      url={`https://www.youtube.com/embed/${video?.key}`}
                     
                    />
                  </div>
                </SplideSlide>
              ))}
            </Splide>
    </div>
   ))}
    </div>
  )
}

export default VideoList
