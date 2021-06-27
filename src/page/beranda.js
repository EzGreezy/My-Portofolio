import React from 'react';
import Fade from 'react-reveal/Fade';
import Layout from "../common/component/layout/layout";
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Box, Text, chakra, Stack, useColorModeValue, VisuallyHidden, Container, Grid, GridItem, Heading, Image, Link } from '@chakra-ui/react';
import { FaInstagram, FaWhatsapp, FaYoutube, FaGithub, FaLinkedinIn  } from 'react-icons/fa';
import { MdMailOutline } from "react-icons/md";
import profile from "../assets/images/profile.png";
import mbolang1 from "../assets/images/portofolio/mbolang/mbolang1.jpg";
import mbolang2 from "../assets/images/portofolio/mbolang/mbolang2.jpg";
import mbolang3 from "../assets/images/portofolio/mbolang/mbolang3.jpg";
import eats1 from "../assets/images/portofolio/eats/eats1.jpg";
import eats2 from "../assets/images/portofolio/eats/eats2.jpg";
import eats3 from "../assets/images/portofolio/eats/eats3.jpg";
import ajeng1 from "../assets/images/portofolio/ajeng/ajeng1.jpg";
import ajeng2 from "../assets/images/portofolio/ajeng/ajeng2.jpg";

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


export default function Beranda(props) {
    return ( 
        <>
            <Layout >
                <Container maxW="7xl" 
                    paddingTop={{ base: "7", md: "20", lg: "40" }} 
                    paddingLeft={{ base: "7", md: "20", lg: "20" }} 
                    paddingRight={{ base: "7", md: "20", lg: "20" }} 
                    paddingBottom={{ base: "7", md: "20", lg: "10" }}  
                    minHeight="90vh">

                    {/* Hero */}
                    <Fade duration={500} distance="30px" fraction={0.4} bottom>
                        <Box mt={{ base: "44", md: "28", lg: "0" }} paddingBottom={{ base: "7"}}>
                            <Grid
                                pt={4}
                                h="full"
                                maxH="450px"
                                templateRows="repeat(6, 1fr)"
                                templateColumns="repeat(12, 1fr)"
                                gap={{base:2,md:4}}>
                                <GridItem rowSpan={6} colSpan={8}>
                                    <Heading as="h2" color="#FF6347" letterSpacing={"-.0.001rem"} lineHeight={"-.0.001rem"} fontSize={{ base: "lg", md: "xl", lg: "2xl" }}>
                                        Hi, i'm Valentino Paksidena Griffith Valeryan
                                    </Heading>
                                    <Heading as="h2" letterSpacing={"-.0.001rem"} lineHeight={"-.0.001rem"} fontSize={{ base: "xl", md: "3xl", lg: "5xl" }}>
                                        I'm a student learning UI/UX
                                    </Heading>
                                    <Text paddingRight="50px" paddingTop="20px" paddingBottom="20px" lineHeight={"1.5rem"} textAlign="justify" fontSize={{ base: "xs", md: "xs", lg: "sm" }}>
                                        So, welcome to my portofolio. I'm currently majoring Applied Bachelor Software Engineering at Universitas Gadjah Mada.
                                        I've been learning many things throughout college, such as Python, Java, Kotlin, React, etc. But now i'm leaning towards UI/UX.
                                        Feel free to browse my website, i hope you learn something about me :D
                                    </Text>
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
                                </GridItem>
                                <GridItem rowSpan={6} colSpan={4} paddingLeft={{ base: "7", md: "20", lg: "20" }}>
                                    <Image
                                        src ={profile}
                                        alt=""
                                        loading="lazy"
                                        boxSize="full"
                                        objectFit="cover"
                                        borderRadius="md"
                                        width="full"
                                        height="full"
                                    />
                                </GridItem>
                            </Grid>
                        </Box>
                    </Fade>
                    
                    <Fade duration={500} distance="30px" fraction={0.4} bottom>
                        <Box mt={{ base: "44", md: "28", lg: "0" }}>
                            <Heading as="h1" color="#FF6347" letterSpacing={"-.0.001rem"} lineHeight={"-.0.001rem"} fontSize={{ base: "xl", md: "3xl", lg: "5xl" }}>
                                Projects
                            </Heading>
                        </Box>
                    </Fade>
                    <Fade duration={500} distance="30px" delay={340} fraction={0.4} bottom>
                        <Heading as="h2" letterSpacing={"-.0.001rem"} lineHeight={"-.0.001rem"} fontSize={{ base: "lg", md: "xl", lg: "2xl" }}>
                            Mbolang
                        </Heading>
                        <Grid
                            pt={4}
                            h="full"
                            maxH="450px"
                            templateRows="repeat(6, 1fr)"
                            templateColumns="repeat(12, 1fr)"
                            gap={{base:2,md:4}}
                        >
                            <GridItem rowSpan={6} colSpan={8}>
                                <Image
                                    src ={mbolang1}
                                    loading="lazy"
                                    alt="picture"
                                    boxSize="full"
                                    objectFit="cover"
                                    borderRadius="md"
                                    width="full"
                                    height="full"
                                />
                            </GridItem>
                            <GridItem rowSpan={3} colSpan={4}>
                                <Image
                                    src ={mbolang2}
                                    alt=""
                                    loading="lazy"
                                    boxSize="full"
                                    objectFit="cover"
                                    borderRadius="md"
                                    width="full"
                                    height="full"
                                />
                            </GridItem>
                            <GridItem rowSpan={3} colSpan={4}>
                                <Image
                                    loading="lazy"
                                    src ={mbolang3}
                                    alt=""
                                    boxSize="full"
                                    objectFit="cover"
                                    borderRadius="md"
                                    width="full"
                                    height="full"
                                />
                            </GridItem>
                        </Grid>
                    </Fade>
                    <Fade duration={500} distance="30px" delay={340} fraction={0.4} bottom>
                        <Heading as="h2" letterSpacing={"-.0.001rem"} lineHeight={"-.0.001rem"} 
                            fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
                            paddingTop={{ base: "7", md: "20", lg: "10" }} >
                            Eats!
                        </Heading>
                        <Grid
                            marginTop={{base:2,md:4}}
                            h="full"
                            maxH="700px"
                            templateRows="repeat(6, 1fr)"
                            templateColumns="repeat(12, 1fr)"
                            w="full"
                            gap={{base:2,md:4}}
                        >
                            <GridItem rowSpan={3} colSpan={4}>
                                <Image
                                    src ={eats1}
                                    alt=""
                                    loading="lazy"
                                    boxSize="full"
                                    objectFit="cover"
                                    borderRadius="md"
                                    width="full"
                                    height="full"
                                />
                            </GridItem>
                            <GridItem rowSpan={6} colSpan={8}>
                                <Image
                                   src ={eats2}
                                    alt= ""
                                    boxSize="full"
                                    objectFit="cover"
                                    borderRadius="md"
                                    width="full"
                                    height="full"
                                    loading="lazy"
                                />
                            </GridItem>
                            <GridItem rowSpan={3} colSpan={4}>
                                <Image
                                   src ={eats3}
                                    alt=""
                                    loading="lazy"
                                    boxSize="full"
                                    objectFit="cover"
                                    borderRadius="md"
                                    width="full"
                                    height="full"
                                />
                            </GridItem>
                        </Grid>
                    </Fade>
                    <Fade duration={500} distance="30px" delay={340} fraction={0.4} bottom>
                        <Heading as="h2" letterSpacing={"-.0.001rem"} lineHeight={"-.0.001rem"} 
                        fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
                        paddingTop={{ base: "7", md: "20", lg: "10" }}>
                            Ajeng
                        </Heading>
                        <Grid
                            marginTop={{base:2,md:4}}
                            h="full"
                            templateRows="repeat(6, 1fr)"
                            templateColumns="repeat(12, 1fr)"
                            w="full"
                            gap={{base:2,md:4}}
                        >
                            <GridItem rowSpan={6} colSpan={6}>
                                <Image
                                    src ={ajeng1}
                                    alt=""
                                    loading="lazy"
                                    boxSize="full"
                                    objectFit="cover"
                                    borderRadius="md"
                                    width="full"
                                    height="full"
                                />
                            </GridItem>
                            <GridItem rowSpan={6} colSpan={6}>
                                <Image
                                    src ={ajeng2}
                                    alt=""
                                    loading="lazy"
                                    boxSize="full"
                                    objectFit="cover"
                                    borderRadius="md"
                                    width="full"
                                    height="full"
                                />
                            </GridItem>
                        </Grid>
                    </Fade>

                </Container>
            </Layout>
        </>
    );
}