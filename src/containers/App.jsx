import React from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import '../assets/styles/App.scss';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import useInitialState from '../hooks/useInitialState';

const App = () => {

  const [videos, categories] = useInitialState('http://localhost:3000/initialState');

  return (
    <>
      <Header />
      <Search />
      {
        categories.length > 0 && (
          categories.map((category, index) => (
            <>
              { videos[category].length > 0 && (
                <Categories title={category} key={`index_${index + 10}`}>
                  <Carousel>
                    {
                      videos[category].map((item, index) => (
                        <CarouselItem
                          key={`in_${index + 1}`}
                          cover={item.cover}
                          title={item.title}
                          year={item.year}
                          contentRating={item.contentRating}
                          duration={item.duration}
                        />
                      ))
                    }
                  </Carousel>
                </Categories>
              )}
            </>
          ))
        )
      }
    </>
  );
};

export default App;
