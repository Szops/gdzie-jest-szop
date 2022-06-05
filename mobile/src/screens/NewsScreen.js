import styled from 'styled-components';
import React, {useEffect} from 'react';
import {HugeText, Title} from '../components/Text';
import {ArticleTile} from '../components/ArticleTile';
import {ScreenWrapper} from '../components/Wrapper';

export const NewsScreenName = 'NewsScreen';

const StyledScrollView = styled.ScrollView`
  width: 90%;
`;

const StyledLine = styled.View`
  border-bottom-color: grey;
  border-bottom-width: 1px;
  width: 85%;
  left: 5%;
`;

const StyledHeader = styled.View`
  padding-top: 30px;
  padding-left: 5%;
  width: 100%;
  justify-content: space-around;
`;

export default function NewsScreen() {
  const [articles, setArticles] = React.useState([]);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'free-news.p.rapidapi.com',
      'X-RapidAPI-Key': '2915b80a68mshb37586ab695075ap1b0170jsn7405883e3cea',
    },
  };
  useEffect(() => {
    fetch(
      'https://free-news.p.rapidapi.com/v1/search?q=environment&lang=en',
      options,
    )
      .then(response => response.json())
      .then(response => response.articles)
      .then(setArticles)
      .then(() => setIsLoaded(true))
      .catch(() => setIsLoaded(false));
  }, []);

  return (
    <ScreenWrapper home>
      <StyledScrollView>
        <Title>Environmental news</Title>
        <StyledLine />
        {articles.map(article => (
          <ArticleTile
            text={article.title}
            image={article.media}
            url={article.link}
            key={article._id}
          />
        ))}
      </StyledScrollView>
    </ScreenWrapper>
  );
}
