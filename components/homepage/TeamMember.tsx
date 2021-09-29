import {
  faFacebook,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export interface Sosmed {
  facebook?: string;
  twitter?: string;
  instagram?: string;
  planetminecraft?: string;
}

export interface Member {
  nickname: string;
  nama: string;
  role: string;
  image: string;
  sosmed: Sosmed;
}

interface IProps {
  profile: Member;
}

const TeamMember = ({ profile }: IProps) => {
  return (
    <div className='item'>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className='rounded border border-1 border-black overflow-hidden'
        src={profile.image}
        width='230px'
        height='230px'
        alt=''
      ></img>

      <div className='detail text-center absolute bottom-0 w-full'>
        <button className='h-9 mv-btn leading-7 md:h-8 btn-blue relative top-5 font-minecraftia'>
          {profile.nickname}
        </button>
        <div className='overlay text-white font-dmSans pt-5 pb-2'>
          <p>{profile.role}</p>
          <div className='sosmed flex justify-center'>
            {profile?.sosmed?.facebook && (
              <a
                href={profile.sosmed.facebook}
                target='_blank'
                rel='noreferrer noopener'
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  className='w-5 m-auto text-lg cursor-pointer filter text-white drop-shadow-lg'
                />
              </a>
            )}
            {profile?.sosmed?.instagram && (
              <a
                href={profile.sosmed.instagram}
                target='_blank'
                rel='noreferrer noopener'
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className='w-5 m-auto text-lg cursor-pointer filter text-white drop-shadow-lg'
                />
              </a>
            )}
            {profile?.sosmed?.twitter && (
              <a
                href={profile.sosmed.twitter}
                target='_blank'
                rel='noreferrer noopener'
              >
                <FontAwesomeIcon
                  icon={faTwitter}
                  className='w-5 m-auto text-lg cursor-pointer filter text-white drop-shadow-lg'
                />
              </a>
            )}
            {profile?.sosmed?.planetminecraft && (
              <a
                href={profile.sosmed.planetminecraft}
                target='_blank'
                rel='noreferrer noopener'
              >
                <FontAwesomeIcon
                  icon={faGlobeAmericas}
                  className='w-5 m-auto text-lg cursor-pointer filter text-white drop-shadow-lg'
                />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
