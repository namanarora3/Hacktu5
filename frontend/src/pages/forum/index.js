import React from 'react';
import CardMembership from '../../components/CardForum'; // Assuming CardMembership is the correct component for rendering forum cards
import Garbage from '../../../public/images/rimjhim/garbage.png';

const issuesData = [
  {
    issueName: 'First Issue',
    issueDescription: 'I am writing to bring to your attention a pressing issue that affects our community deeply - the improper disposal of garbage in public areas. It has come to my attention, as well as that of many concerned citizens, that our streets, parks, and other public spaces are increasingly becoming dumping grounds for waste and litter. This irresponsible disposal of garbage not only poses a significant threat to public health but also tarnishes the beauty of our neighborhoods and harms the environment. The accumulation of garbage leads to foul odors, attracts pests and vermin, and creates breeding grounds for diseases. Furthermore, it contributes to pollution of our waterways and soil, endangering the delicate ecological balance upon which our ecosystem relies. As residents who take pride in our community, we find it unacceptable that our public spaces are being treated with such disregard. It is imperative that immediate action be taken to address this issue and implement effective waste management solutions.',
    location: 'Location A',
    date: '2024-02-09',
    upvoteCount: 10,
    shareCount: 5,
    image: Garbage
  }
];

function Forum() {
  return (
    <div>
      <CardMembership issues={issuesData} />
    </div>
  );
}

export default Forum;
