'use strict';

const generateAnimal = (type) =>{
  let imageURL, imageDescription, name, sex, age, breed, story ;

  if(type === 'cat'){
    imageURL =catImages[Math.floor(Math.random()*catImages.length)];
    name = catNames[Math.floor(Math.random()*catNames.length)];
    breed = catBreeds[Math.floor(Math.random()*catBreeds.length)];
    story = 'this is a cat.';
  }

  if(type === 'dog'){
    imageURL =dogImages[Math.floor(Math.random()*dogImages.length)];
    name = dogNames[Math.floor(Math.random()*dogNames.length)];
    breed = dogBreeds[Math.floor(Math.random()*dogBreeds.length)];
    story = 'this is a dog.';
  }

  imageDescription = `this is a ${type}, it's name is ${name}`; 
  sex = sexes[Math.floor(Math.random())*2];
  age = Math.floor(Math.random())*15 +1;
  
  return {
    imageURL, 
    imageDescription,
    name, 
    sex, 
    age, 
    breed, 
    story 
  };

};


module.exports ={generateAnimal};

const sexes = ['male','female'];
const catNames = ['Fluffy', 'Spotty', 'Derpy', 'Winston ChurchHill', 'Mr. Bigglesworth','simba'];
const dogNames = ['Zeus', 'Poseidon', 'Aristophanese', 'Herculese', 'Theseus', 'Platinus', 'Chuck'];
const catBreeds =['Abyssinian','American Bobtail','Arabian Mau','Asian','Bengal','Burmese', 'Ocicat'];
const dogBreeds = ['Afghan Shepherd', 'Bulldog', 'American Foxhound', 'Bloodhound', 'Collie', 'Dachshund','Dalmatian', 'German Shepherd'];
const dogImages = [
  'http://images1.fanpop.com/images/photos/1900000/Puppy-3-dogs-1993798-1024-768.jpg',
  'http://images6.fanpop.com/image/photos/35200000/Dog-dogs-35247719-3706-2480.jpg',
  'http://images5.fanpop.com/image/photos/25600000/DOG-ssssss-dogs-25606625-1024-768.jpg',
  'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
  'https://i.amz.mshcdn.com/Rgsx9ry-JwFbo9nvDP8Fhb2-owM=/fit-in/1200x9600/https%3A%2F%2Fblueprint-api-production.s3.amazonaws.com%2Fuploads%2Fcard%2Fimage%2F454862%2Fea6e4b84-4a1c-49ee-acc1-0455bfc72e93.jpg',
  'https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half/public/field_blog_entry_images/2018-02/vicious_dog_0.png?itok=nsghKOHs',
  'http://www.pets4homes.co.uk/images/articles/2969/large/five-universal-personality-traits-of-the-rottweiler-558575581dde5.jpg'
];

const catImages =[
  'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg', 
  'http://images4.fanpop.com/image/photos/16000000/Beautiful-Cat-cats-16096437-1280-800.jpg',
  'http://images2.fanpop.com/image/photos/9400000/Funny-Cats-cats-9473424-1600-1200.jpg',
  'http://4.bp.blogspot.com/-0YymOJT87J0/USITOYT4zJI/AAAAAAAAA5k/UoMM5CKO3OY/s1600/funny-cat-wallpaper_175700-1440x9001.jpg',
  'http://images2.fanpop.com/image/photos/9400000/Funny-Cats-cats-9474424-1600-1200.jpg',
  'https://i.ytimg.com/vi/GgdgTdx2rtI/maxresdefault.jpg',
  'http://www.qnaguides.com/images/fastanimal15.jpg'
];

// {
//     imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
//     imageDescription: 'An over-eager Labradoodle',
//     name: 'Poseidon',
//     sex: 'Male',
//     age: 5,
//     breed: 'Labradoodle',
//     story: 'Ran Away From Home'
//   }


