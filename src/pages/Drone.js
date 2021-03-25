import React, {useState, useEffect} from 'react';
import styled from "styled-components";

const profileId = "13042641008";
const numberOfPosts = "50";

export default function Drone() {

const [dataFromApi, setDataFromApi] = useState([]);

  useEffect(() => {
    fetch(`https://www.instagram.com/graphql/query/?query_hash=e769aa130647d2354c40ea6a439bfc08&variables={"id":"${profileId}","first":${numberOfPosts}}`)
      .then((res) => res.json())
      .then((data) => {
        setDataFromApi(data.data.user.edge_owner_to_timeline_media.edges);
      })
      .catch((err) => console.log("promise rejected:", err));
  }, []);

    return (
        <DroneWrapper>
           <DroneText>
        <div>
          <h4>Drone Images</h4>
          <p>@deanldrone_</p>
        </div>
        <div>
          <a
            style={{ textDecoration: "none", color: "#000" }}
            href="https://www.instagram.com/deanldrone_/"
            target="_blank"
            rel="noreferrer"
          >
            Follow
          </a>
        </div>
      </DroneText>

      <DroneImg>
        {dataFromApi.map((post, i) => (
          <ImgWrapper key={i}>
            <img
              src={post["node"].display_resources[2].src}
              alt="instagram post"
            />
          </ImgWrapper>
        ))}
      </DroneImg>
        </DroneWrapper>
    )
}

const DroneWrapper = styled.div``

const DroneText = styled.div``

const DroneImg = styled.div``

const ImgWrapper = styled.div`
 width:100%;

 img {
     width:100px;
 }
`