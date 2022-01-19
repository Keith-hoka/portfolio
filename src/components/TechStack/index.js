import React, { useEffect } from 'react';
import { 
    TechStackContainer,
    TechStackH1,
    TechStackWrapper,
    TechStackCard,
    TechStackIcon,
    TechStackH2 
} from './TechStackElements';
import html from "../../images/html.svg";
import javascript from "../../images/javascript.svg";
import css from "../../images/css.svg";
import react from "../../images/react.svg";
import ruby from "../../images/ruby.svg";
import node from "../../images/nodejs.svg";
import vue from "../../images/vue.svg";
import redux from "../../images/redux.svg";
import jquery from "../../images/jquery.svg";
import postgresql from "../../images/postgresql.svg";
import gatsby from "../../images/gatsby.svg";
import rails from "../../images/rails.svg";
import bootstrap from "../../images/bootstrap.svg";
import materialUI from "../../images/material-ui.svg";
import semanticUI from "../../images/semantic-ui.svg";
import tailwind from "../../images/tailwind.svg";
import next from "../../images/next.svg";
import express from "../../images/express.svg";
import graphql from "../../images/graphql.svg";
import sqlite from "../../images/sqlite.svg";
import firebase from "../../images/firebase.svg";
import mongodb from "../../images/mongodb.svg";
import git from "../../images/git.svg";
import github from "../../images/github.svg";

import Aos from 'aos';
import 'aos/dist/aos.css';

const TechStack = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <TechStackContainer id="tech-stack">
            <TechStackH1>My Tech Stack</TechStackH1>
            <TechStackWrapper>
                <TechStackCard data-aos="flip-left" data-aos-easing="ease-out-cubic">
                    <TechStackIcon src={html} />
                    <TechStackH2>HTML</TechStackH2>
                </TechStackCard>
                <TechStackCard data-aos="flip-left" data-aos-easing="ease-out-cubic">
                    <TechStackIcon src={javascript} />
                    <TechStackH2>JavaScript</TechStackH2>
                </TechStackCard>
                <TechStackCard data-aos="flip-left" data-aos-easing="ease-out-cubic">
                    <TechStackIcon src={css} />
                    <TechStackH2>CSS</TechStackH2>
                </TechStackCard>
                <TechStackCard data-aos="flip-left" data-aos-easing="ease-out-cubic">
                    <TechStackIcon src={react} />
                    <TechStackH2>ReactJS / Native</TechStackH2>
                </TechStackCard>
                <TechStackCard data-aos="flip-left" data-aos-easing="ease-out-cubic">
                    <TechStackIcon src={next} />
                    <TechStackH2>NextJS</TechStackH2>
                </TechStackCard>                <TechStackCard data-aos="flip-left" data-aos-easing="ease-out-cubic">
                    <TechStackIcon src={redux} />
                    <TechStackH2>Redux</TechStackH2>
                </TechStackCard>
                <TechStackCard data-aos="flip-left" data-aos-easing="ease-out-cubic">
                    <TechStackIcon src={jquery} />
                    <TechStackH2>jQuery</TechStackH2>
                </TechStackCard>
                <TechStackCard data-aos="flip-left" data-aos-easing="ease-out-cubic">
                    <TechStackIcon src={vue} />
                    <TechStackH2>VueJS</TechStackH2>
                </TechStackCard>

                <TechStackCard data-aos="flip-left" data-aos-easing="ease-out-cubic">
                    <TechStackIcon src={ruby} />
                    <TechStackH2>Ruby</TechStackH2>
                </TechStackCard>
                <TechStackCard data-aos="flip-left" data-aos-easing="ease-out-cubic">
                    <TechStackIcon src={rails} />
                    <TechStackH2>Rails</TechStackH2>
                </TechStackCard>
                <TechStackCard data-aos="flip-left" data-aos-easing="ease-out-cubic">
                    <TechStackIcon src={node} />
                    <TechStackH2>NodeJS</TechStackH2>
                </TechStackCard>
                <TechStackCard data-aos="flip-left" data-aos-easing="ease-out-cubic">
                    <TechStackIcon src={express} />
                    <TechStackH2>ExpressJS</TechStackH2>
                </TechStackCard>
                <TechStackCard data-aos="flip-left" data-aos-easing="ease-out-cubic">
                    <TechStackIcon src={postgresql} />
                    <TechStackH2>PostgreSQL</TechStackH2>
                </TechStackCard>
                <TechStackCard data-aos="flip-left" data-aos-easing="ease-out-cubic">
                    <TechStackIcon src={graphql} />
                    <TechStackH2>GraphQL</TechStackH2>
                </TechStackCard>
                <TechStackCard data-aos="flip-left" data-aos-easing="ease-out-cubic">
                    <TechStackIcon src={sqlite} />
                    <TechStackH2>SQLite</TechStackH2>
                </TechStackCard>
                <TechStackCard data-aos="flip-left" data-aos-easing="ease-out-cubic">
                    <TechStackIcon src={firebase} />
                    <TechStackH2>Firebase</TechStackH2>
                </TechStackCard>
                <TechStackCard data-aos="flip-left" data-aos-easing="ease-out-cubic">
                    <TechStackIcon src={mongodb} />
                    <TechStackH2>MongoDB</TechStackH2>
                </TechStackCard>

                <TechStackCard data-aos="flip-left" data-aos-easing="ease-out-cubic">
                    <TechStackIcon src={gatsby} />
                    <TechStackH2>gatsby</TechStackH2>
                </TechStackCard>


                <TechStackCard data-aos="flip-left" data-aos-easing="ease-out-cubic">
                    <TechStackIcon src={bootstrap} />
                    <TechStackH2>Bootstrap</TechStackH2>
                </TechStackCard>
                <TechStackCard data-aos="flip-left" data-aos-easing="ease-out-cubic">
                    <TechStackIcon src={materialUI} />
                    <TechStackH2>Material-UI</TechStackH2>
                </TechStackCard>
                <TechStackCard data-aos="flip-left" data-aos-easing="ease-out-cubic">
                    <TechStackIcon src={semanticUI} />
                    <TechStackH2>Semantic-UI</TechStackH2>
                </TechStackCard>
                <TechStackCard data-aos="flip-left" data-aos-easing="ease-out-cubic">
                    <TechStackIcon src={tailwind} />
                    <TechStackH2>Tailwind-CSS</TechStackH2>
                </TechStackCard>


                <TechStackCard data-aos="flip-left" data-aos-easing="ease-out-cubic">
                    <TechStackIcon src={git} />
                    <TechStackH2>Git</TechStackH2>
                </TechStackCard>
                <TechStackCard data-aos="flip-left" data-aos-easing="ease-out-cubic">
                    <TechStackIcon src={github} />
                    <TechStackH2>GitHub</TechStackH2>
                </TechStackCard>

            </TechStackWrapper>
        </TechStackContainer>
    )
}

export default TechStack
