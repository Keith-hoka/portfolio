import React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import Blogs from '../components/Blogs';
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { blogObjFour, blogObjOne, blogObjThree, blogObjTwo } from '../components/Blogs/Data';
import ScrollToTop from '../components/ScrollToTop';

const BlogsPage = () => {
    return (
        <>
            <ScrollToTop />
            <Icon to="/">
                KH
                <GobackArrow>
                    <BsFillArrowLeftCircleFill />
                </GobackArrow>
            </Icon>
            <Blogs {...blogObjOne}/>
            {/* <Blogs {...blogObjTwo}/>
            <Blogs {...blogObjThree}/>
            <Blogs {...blogObjFour}/> */}
        </>
    )
}

export default BlogsPage

const Icon = styled(Link)`
  margin-left: 32px;
  text-decoration: none;
  color: #01bf71;
  font-weight: 700;
  font-size: 50px;
  font-family: 'Licorice', cursive;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 150px;

  @media screen and (max-width: 480px) {
      margin-left: 16px;
      margin-top: 8px;
  }

  &:hover {
      color: #010606;
      transition: 0.5s ease-out;
  }
`;

const GobackArrow = styled.div`
  font-size: 30px;
  margin-top: 20px;
`;