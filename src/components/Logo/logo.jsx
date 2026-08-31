
import './logo.css'

const Logo = ({ 
  icon = "/public/img/squareIcon.png", 
  textImg = "/public/img/homeImg/SquareUp.png", 
  altText = "SquareUp" 
}) => {
  return (
    <div className="logo-container">
      <div className="logo-box">
        <img src={icon} alt="Logo Icon" />
      </div>
      <img src={textImg} alt={altText} className="logo-text-img" />
    </div>
  );
};

export default Logo;