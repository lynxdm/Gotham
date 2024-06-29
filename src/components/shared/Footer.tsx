import Image from 'next/image';
import { Button } from './Button';

const currentYear = new Date().getFullYear();

const socials = [
  { link: '', title: 'twitter' },
  {
    link: '',
    title: 'facebook',
  },
  { link: '', title: 'instagram' },
  { link: '', title: 'linkedin' },
  { link: '', title: 'youtube' },
];

const footerLinks = [
  {
    link: '',
    title: 'Claim Ticket',
  },
  {
    link: '',
    title: 'Upgrade Ticket',
  },
  {
    link: '',
    title: 'Ticket FAQ',
  },
  {
    link: '',
    title: 'Join the community',
  },
  {
    link: '',
    title: 'Commuinty Guidelines',
  },
  {
    link: '',
    title: 'Privacy policy',
  },
  {
    link: '',
    title: 'Contact Us',
  },
];

export const Footer = () => {
  return (
    <section className='footer-wrapper'>
      <div className='container'>
        <div className='footer-main'>
          <div>
            <div className='about-pill text-lg'>
              <p>About this event</p>
            </div>
            <p className='text-base'>
              This event is organized by <span>Google Developer Group Lagos (GDG Lagos).</span>{' '}
              Devfest Lagos is annual conference for tech enthusiasts ranging from novice to leaders
              in the industry. The event feature sessions on Mental Health, Mobile, Design, Web,
              Cloud, DevOps, Machine Learning, AR/VR and many more.{' '}
            </p>
            <p className='text-base'>
              This year, Devfest Lagos will take place between 15th and 16th November 2024, at
              Landmark Events center, Lagos. The sessions are in parallel, register the sessions
              that fit your profile or things you&apos;d like to learn about.
            </p>
            <div className='socials'>
              <p>Follow us on:</p>
              <div>
                {socials.map((social, key) => (
                  <a href={social.link} target='_blank' rel='noopener noreferrer' key={key}>
                    <Image
                      src={`/images/icons/${social.title}-icon.svg`}
                      alt={social.title}
                      width={30}
                      height={20}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div>
            <div>
              <div className='footer-logo'>
                <Image
                  src={'/images/svg/devfest-logo.svg'}
                  alt='DevFestLagos'
                  width={300}
                  height={94}
                  layout='responsive'
                />
              </div>

              <Button label='Get Early Bird Tickets' size='lg' />
            </div>

            <div className='footer-links'>
              <ul>
                {footerLinks.slice(0, 3).map(({ link, title }, key) => (
                  <li className='text-sm' key={key}>
                    <a href={link} target='_blank' rel='noopener noreferrer'>
                      {title}
                    </a>
                  </li>
                ))}
              </ul>
              <ul>
                {footerLinks.slice(3, 5).map(({ link, title }, key) => (
                  <li className='text-sm' key={key}>
                    <a href={link} target='_blank' rel='noopener noreferrer'>
                      {title}
                    </a>
                  </li>
                ))}
              </ul>
              <ul>
                {footerLinks.slice(5, 7).map(({ link, title }, key) => (
                  <li className='text-sm' key={key}>
                    <a href={link} target='_blank' rel='noopener noreferrer'>
                      {title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <p className='footer-copyright'>© {currentYear} Devfest Lagos. All Rights Reserved. </p>
      </div>
    </section>
  );
};
