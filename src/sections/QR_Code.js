import React from 'react';
import { Box, Container, Flex, Image, Text, Heading } from 'theme-ui';
import JackpotCard from 'components/cards/jackpot-card';
import jackpotImage from 'assets/real-estate-display-closeup.png';
import jackpotImage1 from 'assets/real-estate-app-image-gallery-screenshot.png';
import jackpotImage2 from 'assets/jackpot-1-2.png';

const JACKPOT_DATA = [
  {
    image: jackpotImage1,
  },
  // {
  //   image: jackpotImage2,
  //   text: "Don't risk sharing your number with a stranger.",
  //   heading: 'Buyers can chat with you from website',
  // },
  // {
  //   image: jackpotImage1,
  //   text: 'Get your blood tests delivered at let home collect sample from the victory of the managments your blood tests.',
  //   heading: 'Buyers can make offers',
  // },
  // {
  //   image: jackpotImage2,
  //   text: "Don't risk sharing your number with a stranger.",
  //   heading: 'Buyers can chat with you from website',
  // },
];

const QrCode = () => {
  return (
    <Box as='section' sx={styles.jackpot}>
      <Container>
        <Flex sx={styles.flex}>
          <Box sx={styles.container}>
            <Image src={jackpotImage} alt='jackpot image' />
            <Image
              sx={styles.overlay}
              src={jackpotImage1}
              alt='jackpot image'
            />
          </Box>
          <Box sx={styles.content}>
            <Box sx={styles.heading}>
              <Text as='span'>WEBSITE AND IMAGE GALLERY QR CODE</Text>
              <Heading as='h3'>Show off your properties</Heading>
            </Box>
            <Box sx={styles.jackpotCardBox}>
              <Text as='span'>
                When advertising a house that’s for sale or an apartment for
                rent, placing a Image Gallery QR Code on a sign can help your
                potential buyer or renter get a better impression of the
                property. When they pass by the window of your real estate firm,
                they can scan the QR Code and get a quick tour using a series of
                high-resolution images within seconds. Show off those sweeping
                vistas from the balcony or relaxing views from the pool to
                entice your potential customers.
              </Text>
            </Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default QrCode;

const styles = {
  jackpot: {
    pt: ['65px', null, null, null, '85px', null, '125px'],
  },
  flex: {
    flexWrap: 'wrap',
  },
  container: {
    position: 'relative',
    float: 'left',
    marginRight: '5rem',
  },

  overlay: {
    position: 'absolute',
    top: 30,
    left: -90,
  },
  content: {
    flex: ['0 0 100%', null, null, null, null, '0 0 37.5%'],
  },
  heading: {
    mb: '30px',
    pt: '60px',
    textAlign: ['center', null, null, null, null, 'left'],
    pl: ['0', null, null, '30px'],
    maxWidth: ['80%', null, null, '100%'],
    mx: ['auto', null, null, '0'],
    span: {
      display: 'block',
      fontSize: '18px',
      color: 'primary',
      fontWeight: 700,
      lineHeight: 1,
      mb: '20px',
    },
    h3: {
      color: '#0F2137',
      fontSize: ['23px', null, null, null, '30px', '36px', '44px'],
      maxWidth: ['100%', null, null, null, null, '90%', '100%'],
      fontWeight: 700,
      letterSpacing: '-1.5px',
      lineHeight: 1.36,
    },
  },
  jackpotCardBox: {
    display: ['grid', null, null, null, null, 'block'],
    gridTemplateColumns: ['1fr', null, null, '1fr 1fr'],
  },
};
