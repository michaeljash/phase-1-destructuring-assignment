
// Strings
const [cowSound, horseSound, sheepSound, pigSound, chickenSound] = farmAnimals.split(' ');
const [bessie, , dolly, babe, little] = farmAnimals.split(' ');
const [blackAndWhite, black, pink] = farmAnimals.split(' ').filter(animal => animal !== 'chicken');

// Arrays
const [red, orange, yellow, green, blue, indigo, violet] = colors;
const [r, o, y, g, b, , v] = colors;
const [, , , , , indg] = colors;

// Objects
const { muppetName, color, song, job, partner } = muppet;
const { song2, song4 } = nestedMuppet.album.theMuppetMovie;
const { nestedName, nestedColor, album, nestedJob, nestedPartner } = nestedMuppet;
const { theMuppetMovie } = album;
const { song1, song3 } = theMuppetMovie;