// breedFetcherTest.js

const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      // compare returned description
      assert.equal(expectedDesc, desc.trim());

      done();
    });
  });

  describe('fetchBreedDescription', () => {
    it('returns invalid when a non-existent breed is passed in, via callback', (done) => {
      fetchBreedDescription('Pitbull', (err, desc) => {
        assert.equal(err, desc);

        const expectedDesc = "Invalid. Breed does not exist.";

        assert.equal(null, desc);

        done();
      });
    });
  });
});