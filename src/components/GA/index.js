import React from 'react';
import { 
    Container,
    ContentWrap,
    Icon,
    GobackArrow,
    AboutCard,
    AboutTitle,
    AboutTitle2,
    AboutImage,
    ContentP,
    AboutContent,
    PostDate
} from './GAElements';
import GAImg from "../../images/GA.jpeg";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

const GA = () => {
    return (
        <>
            <Container>
                <Icon to="/blogs">
                    <GobackArrow>
                            <BsFillArrowLeftCircleFill />
                    </GobackArrow>
                </Icon>
                <ContentWrap>
                    <AboutTitle>Me and General Assembly</AboutTitle>
                    <AboutTitle2>Story about how do I become a Software Engineer</AboutTitle2>
                    <AboutCard>
                            <AboutImage src={GAImg} />
                        <ContentP>
                            <AboutContent>
                                 It is never been easy for me to make career change in my life, especially in this pandemic crisis. I came up this idea since 4 years ago when I moved to Australia, but I thought this was never going to happen to me. It is because I never believed that 3 months course can help you go get a job in totally different industry. Thanks to my friend Harry, I finally made my decision to join General Assembly(GA) with uncertain thoughts in September, 2021. In my journey of learning programming at GA, I was convinced that I will find in IT industry and career change was becoming more possible for me. And I was right! On 15th December, 2021, I got an offer from my first employer Fujifilm, that was only 3 days after my graduation from GA. I was too excited to believe my dream finally came true!
                            </AboutContent>
                            <AboutContent>
                                Thanks to Joel, Rowena, Pat and Shayaan, I can't do this without you guys help! I am proud of studying at GA and become a part of GA.
                            </AboutContent>
                            <PostDate>Edited on 20th, January, 2022.</PostDate>
                        </ContentP>
                    </AboutCard>
                </ContentWrap>
            </Container>
        </>
    )
}

export default GA
