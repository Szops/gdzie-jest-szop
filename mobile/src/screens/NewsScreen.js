import styled from 'styled-components';
import React, {useEffect} from 'react';
import {HugeText} from '../components/Text';
import {ArticleTile} from '../components/ArticleTile';
import {ScreenWrapper} from '../components/Wrapper';

export const NewsScreenName = 'NewsScreen';

const StyledScrollView = styled.ScrollView`
  width: 90%;
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
