import { useState } from "react";
import { useParams } from "react-router-dom";
import {
  StyledFigureVideo,
  EntryContent,
  StyledIframeVideo,
  StyledAudioPlayer,
  StyledDivBody,
  StyledH1Title,
  StyledH2Title,
  StyledSpanDate
} from "./post.styled";
import { getPostByTitle } from "../../api/posts";
import { extractYoutubeVideoId, getPostDate } from "../../utils/functions";

export const Post = () => {
  const { title } = useParams();
  const [post, setPost] = useState({});
  const [urlYoutube, setUrlYoutube] = useState("");
  const handleQuery = async () => {
    const response = await getPostByTitle(title);
    setPost(response);
    setUrlYoutube(
      `https://youtube.com/embed/${extractYoutubeVideoId(
        response?.url_youtube
      )}`
    );
  };

  useState(() => {
    handleQuery();
  }, []);

  return (
    <div className=" p-4 max-w-5xl mx-auto min-h-screen">
      <EntryContent>
        <StyledH1Title>{post?.title}</StyledH1Title>
        <StyledSpanDate>
          {post && getPostDate(post?.date_creation)}
        </StyledSpanDate>
        <StyledH2Title>Ve el video en youtube:</StyledH2Title>
        <StyledFigureVideo>
          <StyledIframeVideo
            height={422}
            width={750}
            src={urlYoutube}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </StyledFigureVideo>

        <StyledH2Title>Descarga directamente el episodio:</StyledH2Title>
        <StyledFigureVideo>
          <StyledAudioPlayer controls src={post?.url_download} />
        </StyledFigureVideo>
        <StyledDivBody
          dangerouslySetInnerHTML={{
            __html: post?.body
          }}
        />
      </EntryContent>
    </div>
  );
};
