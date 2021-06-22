import React from 'react';
import Fade from 'react-reveal/Fade';
import Layout from "../common/component/layout/layout";
import { Box, Text, Container, Grid, GridItem, Heading, Image } from '@chakra-ui/react';
import profile from "../assets/images/profile.png";

export default function Beranda(props) {
    return ( 
        <>
            <Layout >
                <Container maxW="7xl" paddingTop={{ base: "7", md: "20", lg: "40" }} paddingLeft={{ base: "7", md: "20", lg: "20" }} paddingRight={{ base: "7", md: "20", lg: "20" }} paddingBottom={{ base: "20" }} minHeight="90vh">
                    <Fade duration={500} distance="30px" fraction={0.4} bottom>
                        <Box mt={{ base: "44", md: "28", lg: "0" }}>
                        
                        <Grid
                            pt={4}
                            h="full"
                            maxH="450px"
                            templateRows="repeat(6, 1fr)"
                            templateColumns="repeat(12, 1fr)"
                            gap={{base:2,md:4}}
                        >
                            <GridItem rowSpan={6} colSpan={8}>
                                <Heading as="h2" color="#FF6347" letterSpacing={"-.0.001rem"} lineHeight={"-.0.001rem"} fontSize={{ base: "lg", md: "xl", lg: "2xl" }}>
                                    Hi, i'm Valentino Paksidena Griffith Valeryan
                                </Heading>
                                <Heading as="h2" letterSpacing={"-.0.001rem"} lineHeight={"-.0.001rem"} fontSize={{ base: "xl", md: "3xl", lg: "5xl" }}>
                                    I'm a student learning UI/UX
                                </Heading>
                                <Text letterSpacing={"-.0.01rem"} lineHeight={"-.0.001rem"} textAlign="justify" fontSize={{ base: "xs", md: "xs", lg: "sm" }}>
                                    So, welcome to my portofolio. I'm currently majoring Applied Bachelor Software Engineering at Universitas Gadjah Mada.
                                    I've been learning many things throughout college, such as Python, Java, Kotlin, React, etc. But now i'm leaning towards UI/UX.
                                    Feel free to browse my website, i hope you learn something about me :D
                                </Text>
                            </GridItem>
                            <GridItem rowSpan={6} colSpan={4}>
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
                    {/* <Fade duration={500} distance="30px" delay={100} fraction={0.4} bottom>
                        <Box as="section">
                            <Grid
                                h="full"
                                width="full"
                                templateRows="repeat(1, 1fr)"
                                templateColumns="repeat(5, 1fr)"
                                marginTop={{ base: "0.5", md: "7", lg: "1.5" }}
                                gap={{ base: 1, md: 4 }}
                            >
                                <GridItem colSpan={{ base: 5, md: 2, lg: 2 }} width="full" height="full">
                                    <Text letterSpacing={"-.0.01rem"} lineHeight={"-.0.001rem"} textAlign="justify" fontSize={{ base: "xs", md: "xs", lg: "sm" }}>
                                    This website is used for web 3 practicum courses on react js. Designed to use chakra ui as a library in it and use several additional libraries such as animation and dark mode.
                                    </Text>
                                </GridItem>
                                <GridItem colSpan={{ base: 5, md: 2, lg: 2 }} width="full">
                                    <Text letterSpacing={"-.0.01rem"} lineHeight={"-.0.001rem"} textAlign="justify" fontSize={{ base: "xs", md: "xs", lg: "sm" }}>
                                        This website can be modified at will, and various content can be added if necessary. If you want to be migrated into typescript are also welcome, hopefully useful.
                                    </Text>
                                </GridItem>
                            </Grid>
                        </Box>
                    </Fade> */}
                </Container>
            </Layout>
        </>
    );
}