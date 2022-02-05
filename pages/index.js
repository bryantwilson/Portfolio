import { 
    Container,
    Box,
    Heading,
    Image,
    useColorModeValue
} from "@chakra-ui/react"
import Section from "../components/section"
import Paragraph from "../components/paragraph"
import { BioSection, BioYear } from "../components/bio"
import Head from "next/head"

const Page = () => {
    return (
        <Container>
            <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
                Hello, I&apos;m a full-stack developer from the US!
            </Box>

            <Box display={{md: 'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Bryant Wilson
                    </Heading>
                    <p>
                        Digital Craftsman ( Artist / Developer / Designer)
                    </p>
                </Box>

                <Box 
                    flexShrink={0}
                    mt={{base: 4, md: 0}}
                    ml={{md: 6}}
                    align="center">
                    <Image 
                        borderColor="whiteAlpha.800"
                        borderWidth={2} borderStyle="solid"
                        maxWidth="100px" display="inline-block"
                        borderRadius="full"
                        src="images/pigeon.jpg"
                        alt="Profile Image"
                    />
                </Box>
            </Box>

            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    Work
                </Heading>
                <Paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Paragraph>
            </Section>

            <Section delay={0.2}>
                <Heading as="h3" variant="section-title">
                    Bio
                </Heading>
                <BioSection>
                    <BioYear>1998</BioYear>
                    Born in Tuscaloosa, AL.
                </BioSection>
                <BioSection>
                    <BioYear>2017</BioYear>
                    Graduated High School.
                </BioSection>
                <BioSection>
                    <BioYear>2022</BioYear>
                    Graduated from the University of Alabama with a Bachlor's Degree in MIS.
                </BioSection>
            </Section>

            <Section delay={0.3}>
                <Heading as="h3" variant="section-title">
                    Hobbies
                </Heading>
                <Paragraph>
                    Music, Video Games, Coding, Game Dev, Playing Drums
                </Paragraph>
            </Section>

        </Container>
    )
}

export default Page