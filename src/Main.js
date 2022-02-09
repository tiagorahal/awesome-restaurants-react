import * as React from 'react';
import {
  useEffect,
} from 'react';
import {
  Link,
  useRouteMatch,
} from 'react-router-dom';
import './carousel.css';
import { Carousel } from 'react-responsive-carousel';

import style from './main.module.scss';

const Main = () => {
  
  useEffect(() => {
    refetch();
  }, []);

  const { url } = useRouteMatch();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return (
      <div>
        Oops, this error occured:
        {error}
      </div>
    );
  }

  const backgroundStyling = (url) => (
    {
      background: `url('${url}')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }
  );.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 90vh;
    // align-items: center;
  
    h1,
    h2 {
      padding: 0;
      text-align: center;
      color: black;
    }
  
    & > p {
      text-align: center;
      color: #b9b9b9;
      font-weight: bold;
      padding-bottom: 100px;
    }
  
    .carousel li > div {
      display: flex;
      gap: 150px;
      text-align: center;
      justify-content: center;
  
      & > div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 250px;
        gap: 10px;
      }
    }
  
    @media (min-width: 800px) {
      margin-left: 270px;
    }
  }
  
  .teacherImage {
    width: 250px;
    height: 250px;
    border-radius: 50%;

  function teachersList(teachers) {
    // eslint-disable-next-line no-nested-ternary
    const divider = window.innerWidth < 1580 ? (window.innerWidth < 1150 ? 1 : 2) : 3;
    const teachersBlockList = [];
    let teachersBlock = [];
    for (let i = 0; i < teachers.length; i += 1) {
      teachersBlock.push(
        <div key={teachers[i].id}>
          <div
            style={backgroundStyling(teachers[i].professional_photo)}
            className={style.teacherImage}
          />
          <br />
          <h2>{teachers[i].name}</h2>
          <br />
          <p>
            {teachers[i].name}
            {' '}
            is willing to teach you about
            {' '}
            {teachers[i].subject}
          </p>
          <br />
          <Link
            key={teachers[i].id}
            href="/#"
            to={`${url}teachers/${teachers[i].id}`}
          >
            See details
          </Link>
        </div>,
      );
      if ((i + 1) % divider === 0) {
        teachersBlockList.push(teachersBlock);
        teachersBlock = [];
      }
    }
    if (teachers.length > 0) {
      teachersBlockList.push(teachersBlock);
    }
    const carouselBlocks = [];
    teachersBlockList.forEach((block) => {
      carouselBlocks.push(
        <div>{block}</div>,
      );
    });
    return <Carousel className={style.carousel}>{carouselBlocks}</Carousel>;
  }

  return (
    <div className={style.container}>
      <h1>OUR TEACHERS</h1>
      <p>Pick one of our Teachers to Start Learning!</p>
      <div>
        {teachersList(teachers)}
      </div>
    </div>
  );
};

export default Main;
