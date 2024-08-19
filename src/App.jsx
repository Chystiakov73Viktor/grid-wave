import AppBar from './components/AppBar/AppBar';
import Footer from './components/Footer/Footer';
import Video from './components/Video/Video';
import { Container } from './components/Container/Container';
import { Section } from './components/Section/Section';
import { CardMarkupList } from 'components/CardMarkupList/CardMarkupList';
import PostsMarkupItem from 'components/PostsMarkupItem/PostsMarkupItem';
import BlogMarkupItem from './components/BlogMarkupItem/BlogMarkupItem';
import SocialNetworksMarkupItem from './components/SocialNetworksMarkupItem/SocialNetworksMarkupItem';

import posts from 'components/PostsMarkupItem/posts.json';
import blogPosts from 'components/BlogMarkupItem/blogPosts.json';
import socialNetworks from 'components/SocialNetworksMarkupItem/socialNetworks.json';

const App = () => {
  return (
    <Container>
      <AppBar />

      <Section className="hero">
        <CardMarkupList
          dataCard={posts}
          ItemComponent={PostsMarkupItem}
          gapClass="posts-gap"
        />
      </Section>

      <Section className="first">
        <CardMarkupList
          dataCard={blogPosts}
          ItemComponent={BlogMarkupItem}
          gapClass="blog-gap"
        />

        <CardMarkupList
          dataCard={socialNetworks}
          ItemComponent={SocialNetworksMarkupItem}
          gapClass="social-gap"
          title="Соцмережі"
        />

        <Video />
      </Section>

      <Footer />
    </Container>
  );
};

export default App;
