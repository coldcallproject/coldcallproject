import React from 'react';
import BaseCarousel from './core/BaseCarousel';
import ProfileCard from './ProfileCard';
import { getMentors } from '../data/mentors';

import '../styles/ProfileCardsCarousel.css';

const ProfileCardsCarousel = (props) => {
    const { theme } = props
    const titleClassName = (theme.charAt(0).toUpperCase() + theme.slice(1) + ' title').replace(/\s/g, '-')

    return (
        <div>
            <div className={ titleClassName }>{ theme.toUpperCase() }</div>
            <BaseCarousel show={2}>
                {getMentors(theme).map(m => <ProfileCard name={m} />)}
            </BaseCarousel>
        </div>
    )
};

export default ProfileCardsCarousel;