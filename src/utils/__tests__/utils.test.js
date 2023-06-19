import searchMovies from "utils/utils";

describe("Given utils.js", () => {
    it("should return correct search results", () => {
      const movies = [{
        title: 'A New Hope',
        release_date: '1980-12-05'
      },
      {
        title: 'Return of the jedi',
        release_date: '1983-05-25'
      }];
      const result = searchMovies(movies, 'hope');
      expect(result.length).toBe(1);
      expect(result[0].title).toBe('A New Hope');
    });
  });