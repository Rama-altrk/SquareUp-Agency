
import { COLORS } from '../../assets/constants/colors';
import { FONTS } from '../../assets/constants/fonts';
import Button from '../Button/Button';

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

      <div className="bh-cards" style={{backgroundColor:COLORS.grey15}}>
        {
        reviews.map((item, index) => (
          <div className="bh-card" key={index} style={{backgroundColor:COLORS.grey10}}>
            <h3 className='bh3' style={{color:COLORS.green80,...FONTS.medium}}>{item.title}</h3>
            <p className='bh-p' style={{color:COLORS.grey90,...FONTS.regular}}>{item.text} </p>

            <div className="bh-small-card" style={{backgroundColor:COLORS.grey10}}>
              <div className="profile-block">
                <img
                  className="profile-img"
                  src={item.image}
                  alt={item.author}
                />

                <div className="profile-info">
                  <span className="bh-author" style={{color:COLORS.absolutefff,...FONTS.medium}}>{item.author}</span>
                  <p className="bh-author-title" style={{color:COLORS.grey90,...FONTS.regular,fontSize:14}}>{item.authorTitle}</p>
                </div>
              </div>

                <Button 
                    name="Open Website"
                    width="117px"
                    height="50px"
                    fontSize="14px"
                    borderRadius="6px"
                    backgroundColor="var(--grey15)"
                    color="white"
                    border="none"
                    className="bh-btn"/>

            </div>
          </div>
        )
        )}
      </div>

    </div>
  );
}

export default About;

