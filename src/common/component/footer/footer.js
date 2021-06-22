import React from 'react';
import { Box, Text,Heading,Link,Icon } from '@chakra-ui/react';

export default function Footer(props) {
    return ( 
        <>
            <Box paddingLeft={{ base: "7", md: "20", lg: "20" }} 
                paddingRight={{ base: "7", md: "20", lg: "20" }} 
                paddingBottom={{ base: "10" }} position="relative" as="footer" textAlign="center">
                <Heading as="h1" letterSpacing={"-.0.001rem"} lineHeight={"-.0.001rem"} fontSize={{ base: "3xl"}}>
                    Let's connect 😀
                </Heading>
                <Text letterSpacing={"-.0.001rem"} lineHeight={"-.0.001rem"} fontSize={{ base :"md"}} fontWeight="medium">
                    Feel free to reach out to me anytime.
                </Text>
                <Link href="mailto:vgriffith97@gmail.com">vgriffith97@gmail.com</Link>

                <div className = "social-links">
                    <Icon href = "https://www.facebook.com/" rel = "noopener noreferrer" target = "_blank">
                        <i className= "fa fa-facebook-square" aria-hidden="true"/>
                    </Icon>
                </div>
            </Box>
        </>
    );
}