import { NextPage } from 'next';
import ContactNavbar from '../components/ContactNavbar';
import ContactCard from '../components/ContactCard';
import { Group, Center } from '@mantine/core';

const Contact: NextPage = () => {
  return (
    <>
      <ContactNavbar />
      <Center
        style={{
          display: 'flex',
          paddingTop: '40vh',
        }} 
      > 
      <Group>
        <ContactCard
          title={'Email'}
          href={'mailto:ballos.michael@gmail.com'}
          label={'ballos.michael@gmail.com'}
        />
        <ContactCard
          title={'Phone'}
          href={'tel:3162262223'}
          label={'316-226-2223'}
        />
        <ContactCard
          title={'Twitter'}
          href={'https://twitter.com/michael_ballos'}
          label={'@michael_ballos'}
        />
      </Group>
      </Center>
    </>
  );
};

export default Contact;
