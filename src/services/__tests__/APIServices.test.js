import axios from 'axios';

import fetchMovies, { fetchPoster } from 'services/APIServices';

jest.mock('axios');

describe("Given APIServices.js", () => {
    it("fetchMovies should retrun data sucessfully WHEN API is sucessful", () => {
      const movies = [{
        title: 'A New Hope',
        release_date: '1980-12-05'
      },
      {
        title: 'Return of the jedi',
        release_date: '1983-05-25'
      }];

      axios.get.mockImplementationOnce(()=> Promise.resolve({ data: movies }));
      fetchMovies().then((res) => {
        expect(res.length).toBe(2);
        expect(res[0].title).toBe('A New Hope');
      });
    });

    it("fetchMovies should throw error WHEN API is failed", () => {  
        axios.get.mockImplementationOnce(()=> Promise.reject(new Error('404 Error')));
        fetchMovies().then((res) => {
            expect(res.isError).toBeTruthy();
          });
    });

    it("fetchPoster should retrun data sucessfully WHEN API is sucessful", () => {
        const movie = {
          title: 'A New Hope',
          plot: 'Plot',
          Poster: 'https://somedomain.com/poster.png'
        };
  
        axios.get.mockImplementationOnce(()=> Promise.resolve({ data: movie }));
        fetchPoster('A New Hope', '1980').then((res) => {
          expect(res.title).toBe('A New Hope');
        });
    });
  
    it("fetchPoster should throw error WHEN API is failed", () => {  
        axios.get.mockImplementationOnce(()=> Promise.reject(new Error('404 Error')));
        fetchPoster('A New Hope', '1980').then((res) => {
            expect(res.isError).toBeTruthy();
        });
    });
  });