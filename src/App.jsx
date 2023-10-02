import VideoCard from "./components/VideoCard";
import array from "./resources/data";
function App() {
  return <>
    {array.map((element) => {
      console.log(element.title);
      console.log(element.imageURL);
      return <div style={{
        border: "3px solid black",
        marginBottom : "3px"
      }}>
        <VideoCard videoTitle={element.title} videoURL={element.imageURL} />
      </div>
    })}


  </>
}

export default App;


