import Image from 'next/image';
import { Button } from './Button';

const currentYear = new Date().getFullYear();

const socials = [
  { link: 'https://x.com/gdglagos', title: 'twitter' },
  {
    link: 'https://m.facebook.com/100075612535619',
    title: 'facebook',
  },
  { link: 'https://www.instagram.com/gdglagos', title: 'instagram' },
  { link: 'https://www.linkedin.com/company/gdg-lagos', title: 'linkedin' },
  { link: 'https://www.youtube.com/@GDGLagos', title: 'youtube' },
];

const footerLinks = [
  {
    link: 'https://policies.google.com/privacy',
    title: 'Privacy Policy',
  },
  {
    link: 'mailto:team@gdglagos.com',
    title: 'Contact Us',
  },
  {
    link: 'https://developers.google.com/community-guidelines',
    title: 'Community Guidelines',
  },
  {
    link: 'https://gdg.community.dev/gdg-lagos/',
    title: 'Join the community',
  },
  {
    link: '#',
    title: 'Ticket FAQ',
  },
];

export const Footer = () => {
  return (
    <footer className='footer-wrapper'>
      <div className='container'>
        <div className='footer-main'>
          <div>
            <div className='about-pill text-lg'>
              <p>About this event</p>
            </div>
            <p className='text-base'>
              This event is organized by <span>Google Developer Group Lagos (GDG Lagos).</span>{' '}
              Devfest Lagos is an annual conference for tech enthusiasts ranging from novice to
              leaders in the industry. The event features sessions on Mental Health, Mobile, Design,
              Web, Cloud, DevOps, Machine Learning, AR/VR, and many more.{' '}
            </p>
            <p className='text-base'>
              This year, Devfest Lagos will take place between 15th and 16th November 2024, at
              Landmark Events Center, Lagos. The sessions are in parallel; register for sessions
              that fit your profile or things you&apos;d like to learn about.
            </p>
            <div className='socials'>
              <p>Follow us on:</p>
              <div>
                {socials.map((social, key) => (
                  <a
                    href={social.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    key={key}
                    aria-label={`Follow us on ${social.title}`}
                  >
                    <Image
                      src={`/images/icons/${social.title}-icon.svg`}
                      alt={`${social.title}`}
                      width={30}
                      height={20}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div>
            <div className='footer-logo'>
              <Image
                src={'/images/svg/devfest-logo.svg'}
                alt='DevFest Lagos Logo'
                width={300}
                height={94}
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
            <Button label='Get Early Bird Tickets' size='lg' animate={false} />

            <div className='footer-links'>
              <ul>
                {footerLinks.slice(0, 2).map(({ link, title }, key) => (
                  <li className='text-sm' key={key}>
                    <a href={link} target='_blank' rel='noopener noreferrer' aria-label={title}>
                      {title}
                    </a>
                  </li>
                ))}
              </ul>
              <ul>
                {footerLinks.slice(2, 4).map(({ link, title }, key) => (
                  <li className='text-sm' key={key}>
                    <a href={link} target='_blank' rel='noopener noreferrer' aria-label={title}>
                      {title}
                    </a>
                  </li>
                ))}
              </ul>
              <ul>
                {footerLinks.slice(4, 6).map(({ link, title }, key) => (
                  <li className='text-sm' key={key}>
                    <a href={link} target='_blank' rel='noopener noreferrer' aria-label={title}>
                      {title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <p className='footer-copyright'>© {currentYear} Devfest Lagos. All Rights Reserved.</p>
      </div>
    </footer>
  );
};
