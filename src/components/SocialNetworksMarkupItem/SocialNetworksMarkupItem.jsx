import { FaInstagramSquare, FaFacebookF, FaYoutube, FaTiktok, FaGithub, FaTwitter } from "react-icons/fa";
import { LiWrapper } from "./SocialNetworksMarkupItem.styled";

const SocialNetworksMarkupItem = ({ cardData }) => {
  const { platform, subscripers } = cardData;

  const icons = {
    instagram: <FaInstagramSquare />,
    facebook: <FaFacebookF />,
    youtube: <FaYoutube />,
    tiktok: <FaTiktok />,
    github: <FaGithub />,
    twitter: <FaTwitter />,
  };

const platformColors = {
  instagram: '#d8def8',
  facebook: '#ffe8f1', 
  youtube: '#fae8ea',
  tiktok: '#e9f9f8',
  github: '#fffddc',
  twitter: '#f2eef8',
};

   const IconComponent = icons[platform];
   const backgroundColor = platformColors[platform];

  return (
    <LiWrapper $backgroundColor={backgroundColor}>
      <a href="#" className="social-link">
        <div className="social-icon">{IconComponent}</div>
        <p className="social-subscripers">{subscripers}</p>
      </a>
    </LiWrapper>
  );
};

export default SocialNetworksMarkupItem;
