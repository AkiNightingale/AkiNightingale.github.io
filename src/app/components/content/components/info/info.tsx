import React from 'react';
import './info.scss';
import { Button, Stack } from 'ui-kit';

const Info: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const moreTextRef = React.useRef<HTMLSpanElement>(null);
  const [maxHeight, setMaxHeight] = React.useState('0');

  React.useEffect(() => {
    if (open && moreTextRef.current) {
      setMaxHeight(`${moreTextRef.current.scrollHeight}px`);
    } else {
      setMaxHeight('0');
    }
  }, [open]);

  return (
    <Stack gap={0} alignItems='flex-start'>
      <span className='info__title bold'>
          Embark on a space journey
      </span>

      <span className='info__text'>
          {'Travelling into space is one of the most exciting ' +
           'and unforgettable adventures that can change your life forever.' +
           ' And if you have ever dreamed of exploring stars, planets and galaxies, ' +
           'then our company is ready to help you realize this dream. ' +
           'We offer a unique experience that will allow you to go on a space journey ' +
           'and see all the secrets of the universe. ' +
           'We guarantee that every moment in space will be filled with incredible' +
           ' impressions, excitement and new discoveries. ' +
           'Our team of professionals takes care of your safety and comfort' +
           ' so that you can fully enjoy your adventure in space. ' +
           'We offer various options for space excursions.'}
      </span>

      <span
        className={`info__text _more ${open ? '-open' : ''}`}
        ref={moreTextRef}
        style={{ maxHeight }}
      >
        <p>Part 2</p>
        {'Travelling into space is one of the most exciting ' +
         'and unforgettable adventures that can change your life forever.' +
         ' And if you have ever dreamed of exploring stars, planets and galaxies, ' +
         'then our company is ready to help you realize this dream. ' +
         'We offer a unique experience that will allow you to go on a space journey ' +
         'and see all the secrets of the universe. ' +
         'We guarantee that every moment in space will be filled with incredible' +
         ' impressions, excitement and new discoveries. ' +
         'Our team of professionals takes care of your safety and comfort' +
         ' so that you can fully enjoy your adventure in space. ' +
         'We offer various options for space excursions.'}
      </span>

      <Button variant='text' onClick={() => setOpen(!open)}>
        {open ? 'Hide' : 'Read more'}
      </Button>
    </Stack>
  );
};

export default Info;