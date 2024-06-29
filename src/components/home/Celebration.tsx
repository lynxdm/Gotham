import { Button } from '../shared';

export const Celebration = () => {
  return (
    <section className='celebration-wrapper'>
      <div className='container celebration-content'>
        <h2 className='text-5xl text-center'>
          You don&apos;t Want to Miss Out on the 11th Year of DevFest Lagos!
        </h2>
        <p className='text-xl'>
          We&apos;re celebrating 11 years of DevFest Lagos. Get your Early Bird tickets soon.
        </p>
        <Button label='Get Early Bird Tickets' size='lg' />
      </div>
    </section>
  );
};
