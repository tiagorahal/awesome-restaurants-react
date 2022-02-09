/* eslint-disable no-alert, no-console */
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
  const {
    data: restaurants,
    error,
    isLoading,
    refetch,
  } = useGetRestaurantsQuery();

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
  
  .restaurantImage {
    width: 250px;
    height: 250px;
    border-radius: 50%;

  function restaurantList(restaurants) {
    // eslint-disable-next-line no-nested-ternary
    const divider = window.innerWidth < 1580 ? (window.innerWidth < 1150 ? 1 : 2) : 3;
    const restaurantsBlockList = [];
    let restaurantsBlock = [];
    for (let i = 0; i < restaurants.length; i += 1) {
      restaurantsBlock.push(
        <div key={restaurants[i].id}>
          <div
            style={backgroundStyling(restaurants[i].professional_photo)}
            className={style.restaurantImage}
          />
          <br />
          <h2>{restaurants[i].name}</h2>
          <br />
          <p>
            {restaurants[i].name}
            {' '}
            Best place to eat!!
            {' '}
            {restaurants[i].type}
          </p>
          <br />
          <Link
            key={restaurants[i].id}
            href="/#"
            to={`${url}restaurants/${restaurants[i].id}`}
          >
            See details
          </Link>
        </div>,
      );
      if ((i + 1) % divider === 0) {
        restaurantsBlockList.push(restaurantsBlock);
        restaurantsBlock = [];
      }
    }
    if (restaurants.length > 0) {
      restaurantsBlockList.push(restaurantsBlock);
    }
    const carouselBlocks = [];
    restaurantsBlockList.forEach((block) => {
      restaurantBlocks.push(
        <div>{block}</div>,
      );
    });
    return <Carousel className={style.carousel}>{carouselBlocks}</Carousel>;
  }

  return (
    <div className={style.container}>
      <h1>OUR Restaurants</h1>
      <p>Pick one of our Restaurants!</p>
      <div>
        {restaurantsList(restaurants)}
      </div>
    </div>
  );
};

export default Main;
