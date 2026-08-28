
import { COLORS } from '../../assets/constants/colors';
import { FONTS } from '../../assets/constants/fonts';
import './About.css'

function About({ reviews }) {
  return (
    <div className="bt-about">

      <div className="header"   style={{
        backgroundImage: "url('/img/backgrounds/waveToUp.png')",}} >
        <h2 style={{color:COLORS.absolutefff}}>What our Clients say About us</h2>
        <p style={{color:COLORS.grey90}}>
          At SquareUp, we take pride in delivering exceptional digital products and services that drive success for our clients. Here's what some of our satisfied clients have to say about their experience working with us
        </p>
      </div>

      <div className="btcards" style={{backgroundColor:COLORS.grey15}}>
        {
        reviews.map((item, index) => (
          <div className="btcard" key={index} style={{backgroundColor:COLORS.grey10}}>
            <h3 className='bh3' style={{color:COLORS.green80,...FONTS.medium}}>{item.title}</h3>
            <p className='pt' style={{color:COLORS.grey90,...FONTS.regular}}>{item.text} </p>

            <div className="small-card" style={{backgroundColor:COLORS.grey10}}>
              <div className="profile-block">
                <img
                  className="profile-img"
                  src={item.image}
                  alt={item.author}
                />

                <div className="profile-info">
                  <span className="author" style={{color:COLORS.absolutefff,...FONTS.medium}}>{item.author}</span>
                  <p className="author-title" style={{color:COLORS.grey90,...FONTS.regular,fontSize:14}}>{item.authorTitle}</p>
                </div>
              </div>

              <button className='bh-btn' style={{backgroundColor:COLORS.grey15}} >Open Website</button>
            </div>
          </div>
        )
        )}
      </div>

    </div>
  );
}

export default About;

