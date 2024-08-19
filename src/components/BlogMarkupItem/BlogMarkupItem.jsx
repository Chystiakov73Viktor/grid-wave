import { LiWrapper } from "./BlogMarkupItem.styled";

const BlogMarkupItem = ({ cardData }) => {
  const { title, imageUrl, content} = cardData;

  return (
    <LiWrapper>
      <a href="#" className="blog-link">
      <img className="blog-image" src={imageUrl} alt={title} />
      <div className="wrapper">
      <h2 className="blog-title">{title}</h2>
      <p className="blog-content">{content}</p>
      </div>
      </a>
    </LiWrapper>
  );
};

export default BlogMarkupItem;