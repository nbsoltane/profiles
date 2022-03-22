import React from 'react'
import PropTypes from 'prop-types'
import { ImageAvatar } from './ImageAvatar';
import { Coords } from './Coords';

 const Profile = () => {
  const profiles =[
    {fullName: "Maud Olivier", bio: "Accountable physician with 10 years of experience building up facility profitability and patient wellness. Seeking to deliver excellent healthcare at Hope Hospital. Maintained a 5-star at St. Mary Health Point Hospital health grades, for 129 reviews and 86 percent patient success.", profession: "Doctor", image: "1.jpg"},
    {fullName: "John Olivier",bio: "Johnny Haircut has secured a steady clientele throughout the years who appreciate his keen sense of style. His willingness to stay current with new barbershop phases and trends, as well as his ability to also remain true to the classic cuts bodes well for anyone wishing to look their very best.", profession: "Barber", image: "2.jpg"},
    {fullName: "Nizar Ben Soltane", bio: "I’m a web developer. I spend my whole day, practically every day, experimenting with HTML, CSS, and JavaScript; dabbling with Python and Ruby; and inhaling a wide variety of potentially useless information through a few hundred RSS feeds. I build websites that delight and inform. I do it well.", profession: "web developer", image: "myphoto.jpg"}
  ]
  const styleItem = {padding:"2em 2em", maxWidth: "33.33%",textAlign:"center"}
  return (
    <>
        {profiles.map(profile => (
          <div className="item" style={styleItem}>           
            <ImageAvatar>
              {profile.image}
            </ImageAvatar>
            <Coords fullName = {profile.fullName} bio = {profile.bio} profession= {profile.profession}/>
          </div>
        )
        )}
    </>
  )
}

Profile.propTypes = {
    fullName: PropTypes.string
  };

  export default Profile;