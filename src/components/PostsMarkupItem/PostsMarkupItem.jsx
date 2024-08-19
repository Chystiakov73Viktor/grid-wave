import { LiWrapper } from './PostsMarkupItem.styled';

const PostsMarkupItem = ({ cardData }) => {
  const { imageUrl, title } = cardData;

  return (
    <LiWrapper>
      <a className="post-link" href="#">
          <picture>
          <source media="(min-width: 768px)" srcSet={imageUrl.tablet} />
          <img className="post-image" src={imageUrl.mobile} alt={title} />
        </picture>
        <div className="overlay">
          <h2 className="post-title">{title}</h2>
        </div>
      </a>
    </LiWrapper>
  );
};

export default PostsMarkupItem;
