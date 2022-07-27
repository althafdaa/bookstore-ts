/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Character from '../../../../assets/images/character.png';
import BookOne from '../../../../assets/images/bookone.png';
import BookTwo from '../../../../assets/images/booktwo.png';
import BookThree from '../../../../assets/images/bookthree.png';
import BookFour from '../../../../assets/images/bookfour.png';

const CharacterBanner: FC = () => {
  return (
    <div className="relative">
      <img className="absolute right-0" src={BookOne.src} alt="image" />
      <img className="absolute" src={BookTwo.src} alt="image" />
      <img className="absolute bottom-0" src={BookThree.src} alt="image" />
      <img
        className="absolute bottom-0 right-0"
        src={BookFour.src}
        alt="image"
      />
      <img className="" src={Character.src} alt="image" />
    </div>
  );
};

export default CharacterBanner;
