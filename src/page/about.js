/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import Fade from 'react-reveal/Fade';
import Layout from "../common/component/layout/layout";
import { Box, Button, Text, Container,useColorModeValue, Heading, Image, Link, Stack, Center } from '@chakra-ui/react';
import retret2 from "../assets/images/retret2.jpg";
import logoKanisius from "../assets/images/educations/logoKanisius.png";
import logoPL from "../assets/images/educations/logoPL.png";
import logoTrappsila from "../assets/images/educations/logoTrappsila.png";
import logoUGM from "../assets/images/educations/logoUGM.png";
import ai4impact from "../assets/images/achievement/ai4impact.jpeg";
import as from "../assets/images/toolsnskills/as.png";
import css from "../assets/images/toolsnskills/css.png";
import figma from "../assets/images/toolsnskills/figma.png";
import html from "../assets/images/toolsnskills/html.png";
import kotlin from "../assets/images/toolsnskills/kotlin.png";
import psd from "../assets/images/toolsnskills/psd.png";
import react from "../assets/images/toolsnskills/react.png";
import vsc from "../assets/images/toolsnskills/vsc.png";

export default function About(props) {
    return ( 
        <>
            <Layout >
                {/* foto */}
                <Container maxW="3xl" paddingTop={{ base: "5", md: "15", lg: "40" }} paddingLeft={{ base: "7", md: "20", lg: "20" }} paddingRight={{ base: "7", md: "20", lg: "20" }}>
                    <Fade duration={500} distance="30px" fraction={0.4} bottom>
                        <Image
                            src ={retret2}
                            alt=""
                            loading="lazy"
                            boxSize="full"
                            objectFit="cover"
                            borderRadius="xl"
                            width="full"
                        />
                    </Fade>
                </Container>

                {/* lain-lain */}
                <Container maxW="7xl" paddingTop={{ base: "2", md: "6", lg: "10" }} 
                    paddingLeft={{ base: "7", md: "20", lg: "20" }} 
                    paddingRight={{ base: "7", md: "20", lg: "20" }} 
                    paddingBottom={{ base: "7", md: "20", lg: "10" }} 
                    minHeight="90vh">
                    <Fade duration={500} distance="30px" fraction={0.4} bottom>
                        {/* about me */}
                        <Box paddingBottom={{ base: "7", md: "30", lg: "50" }}>
                            <Heading as="h2" color="#FF6347" letterSpacing={"-.0.001rem"} lineHeight={"-.0.001rem"} fontSize={{ base: "lg", md: "xl", lg: "2xl" }}>
                                Hello, i'm Valentino Paksidena Griffith Valeryan
                            </Heading>
                            <br/>
                            <Text textAlign="justify">
                                You can call me anything from Valentino, Griffith, or Ipit. But i prefer to be called Ipit haha. 
                                I was born 20 years ago in Yogyakarta and grew up here too. Wow can't believe i'm that old now, time flies you know.
                                I love to play basketball, badminton, and volley in high school.
                                Now my hobbies are playing games, playing fingerboards, and tinkering with pc or laptops.
                                
                                <br/><br/>
                                I'm currently majoring Applied Bachelor Software Engineering at Universitas Gadjah Mada since 2019.
                                I've been learning many things throughout college, such as Python, Java, Kotlin, React, HTML, CSS, JavaScript, PHP, Laravel, etc. 
                                But now i'm leaning towards UI/UX. Because sometimes i get stuck when writing codes especially when it is too complicated.
                                So feel free to browse my website, i hope you like it :D
                            </Text>
                        </Box>
                        
                        {/* Educations */}
                        <Box paddingBottom={{ base: "7", md: "30", lg: "50" }}>
                            <Heading as="h2" color="#FF6347" textAlign="center" 
                                letterSpacing={"-.0.001rem"} lineHeight={"-.0.001rem"} 
                                fontSize={{ base: "xl", md: "3xl", lg: "5xl" }} 
                                paddingBottom={{ base: "5"}}>
                                Educations
                            </Heading>
                            <Center>
                                <Stack direction="row" spacing={20}>
                                    <Image
                                    boxSize={{ base: "150px", md: "200px", lg: "200px" }}
                                    src={logoKanisius}
                                    alt="SD Kanisius"
                                    />
                                    <Image
                                    boxSize={{ base: "150px", md: "200px", lg: "200px" }} 
                                    src={logoPL}
                                    alt="SMP PL"
                                    />
                                    <Image
                                    boxSize={{ base: "150px", md: "200px", lg: "200px" }}
                                    src={logoTrappsila}
                                    alt="SMAN 9 Yogyakarta"
                                    />
                                    <Image
                                    boxSize={{ base: "150px", md: "200px", lg: "200px" }}
                                    src={logoUGM}
                                    alt="Universitas Gadjah Mada"
                                    />
                                </Stack>
                            </Center>
                        </Box>
                        
                        {/* Achievements */}
                        <Box paddingBottom={{ base: "7", md: "30", lg: "50" }}>
                            <Heading as="h2" color="#FF6347" textAlign="center" 
                                letterSpacing={"-.0.001rem"} lineHeight={"-.0.001rem"} 
                                fontSize={{ base: "xl", md: "3xl", lg: "5xl" }}
                                paddingBottom={{ base: "5"}}>
                                Achievement
                            </Heading>
                            <Center>
                                <Box maxW={'290px'} w={'full'} bg={useColorModeValue('white', 'gray.800')} boxShadow={'2xl'} rounded={'md'} overflow={'hidden'}>
                                    <Image 
                                    h={'290px'} w={'full'}
                                    src={ai4impact}
                                    objectFit={'cover'}/>

                                <Box p={6}>
                                    <Stack spacing={0} align={'center'} mb={5}>
                                        <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                                            Ajeng Bot
                                        </Heading>
                                        <Text color={'gray.500'}>ai4impact</Text>
                                    </Stack>

                                    <Stack direction={'row'} justify={'center'} spacing={6}>
                                        <Stack spacing={0} align={'center'}>
                                            <Text fontWeight={600}>3rd winner</Text>
                                            <Text fontSize={'sm'} color={'gray.500'} align={'center'}>
                                                Ajeng is a bot that help you explore Yogyakarta!
                                            </Text>
                                        </Stack>
                                    </Stack>

                                    <Link href="https://app.smojo.org/vgriffith97/Ajeng">
                                        <Button 
                                            w={'full'} mt={8} 
                                            bg={useColorModeValue('#151f21', 'gray.900')} 
                                            color={'white'} rounded={'md'} 
                                            _hover={{
                                                transform: 'translateY(-2px)',
                                                boxShadow: 'lg',}}>
                                            Visit
                                        </Button>
                                    </Link> 
                                </Box>
                                </Box>
                            </Center>
                        </Box>
                        
                        {/* tools & skills */}
                        <Box paddingBottom={{ base: "7", md: "30", lg: "50" }}>
                            <Heading as="h2" color="#FF6347" textAlign="center" 
                            letterSpacing={"-.0.001rem"} lineHeight={"-.0.001rem"} 
                            fontSize={{ base: "xl", md: "3xl", lg: "5xl" }}
                            paddingBottom={{ base: "5"}}>
                                Tools & skills
                            </Heading>
                            {/* tools */}
                            <Center>
                                <Stack direction="row" spacing={10}>
                                    <Image
                                    boxSize={{ base: "70px", md: "90px", lg: "100px" }} 
                                    src={figma}
                                    alt="Figma"
                                    />
                                    <Image
                                    boxSize={{ base: "70px", md: "90px", lg: "100px" }} 
                                    src={psd}
                                    alt="Adobe Photoshop"
                                    />
                                    <Image
                                    boxSize={{ base: "70px", md: "90px", lg: "100px" }} 
                                    src={vsc}
                                    alt="Visual Studio Code"
                                    />
                                    <Image
                                    boxSize={{ base: "70px", md: "90px", lg: "100px" }} 
                                    src={as}
                                    alt="Android Studio"
                                    />
                                    <Image
                                    boxSize={{ base: "70px", md: "90px", lg: "100px" }} 
                                    src={html}
                                    alt="html"
                                    />
                                    <Image
                                    boxSize={{ base: "70px", md: "90px", lg: "100px" }} 
                                    src={css}
                                    alt="css"
                                    />
                                    <Image
                                    boxSize={{ base: "70px", md: "90px", lg: "100px" }} 
                                    src={react}
                                    alt="React JS"
                                    />
                                    <Image
                                    boxSize={{ base: "70px", md: "90px", lg: "100px" }} 
                                    src={kotlin}
                                    alt="Kotlin"
                                    />
                                </Stack>
                            </Center>
                        </Box>
                    </Fade>
                </Container>
            </Layout>
        </>
    );
}