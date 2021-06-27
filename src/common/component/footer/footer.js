import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react';
import { FaInstagram, FaWhatsapp, FaYoutube, FaGithub, FaLinkedinIn  } from 'react-icons/fa';
import { MdMailOutline } from "react-icons/md";

const SocialButton = ({children, label, href}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box 
      bg={useColorModeValue('gray.50', 'gray.900')} 
      color={useColorModeValue('gray.700', 'gray.200')}
    >
      <Container as={Stack} 
        maxW={'6xl'} py={4} 
        direction={{ base: 'column', md: 'row' }} 
        spacing={4} 
        justify={{ base: 'center', md: 'space-between' }} 
        align={{ base: 'center', md: 'center' }}
      >
        <Text>© 2021 Valentino P G V. All rights reserved</Text>
        <Stack direction={'row'} spacing={6}>
            <SocialButton label={'e-Mail'} href={'mailto:vgriffith97@gmail.com'}>
                <MdMailOutline />
            </SocialButton>
            <SocialButton label={'YouTube'} href={'https://www.youtube.com/c/EzGreezy'}>
                <FaYoutube />
            </SocialButton>
            <SocialButton label={'Instagram'}  href={'https://www.instagram.com/vgriffith97/'}>
                <FaInstagram />
            </SocialButton>
            <SocialButton label={'Whatsapp'}  href={'https://wa.me/+6281229405758'}>
                <FaWhatsapp />
            </SocialButton>
            <SocialButton label={'Github'}  href={'https://github.com/EzGreezy'}>
                <FaGithub />
            </SocialButton>
            <SocialButton label={'LinkedIn'}  href={'https://www.linkedin.com/in/valentino-paksidena-griffith-valeryan-a50a02200/'}>
                <FaLinkedinIn />
            </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
}