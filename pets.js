const pets = [
  {
    name: "Dusty",
    color: "Green",
    specialSkill: "Gives sincere apologies.",
    type: "cat",
    imageUrl:
      "http://kittentoob.com/wp-content/uploads/2015/06/funny-cat-with-a-towel.jpg",
  },
  {
    name: "Trouble",
    color: "Poop-Colored",
    specialSkill:
      "Just picks the tomatoes off of a sandwich instead of requesting a whole new sandwich.",
    type: "dino",
    imageUrl: "http://www.jozilife.co.za/wp-content/uploads/The-Dino-Expo.jpg",
  },
  {
    name: "Whiskers",
    color: "Yellow",
    specialSkill: "Can prove he is a real man by drinking whiskey.",
    type: "dino",
    imageUrl:
      "https://mydinosaurs.com/wp-content/uploads/2017/02/2-3-600x400.jpg",
  },
  {
    name: "Coco",
    color: "Black",
    specialSkill: "Burps minimally.",
    type: "dog",
    imageUrl:
      "http://cdn.akc.org/content/article-body-image/funny-pembroke_welsh_corgi.jpg",
  },
  {
    name: "Spooky",
    color: "Brown",
    specialSkill: "Comfortable in the outdoors for up to eight hours.",
    type: "cat",
    imageUrl:
      "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg",
  },
  {
    name: "Tiger",
    color: "Black",
    specialSkill: "Can read (but cannot understand) Hebrew.",
    type: "dog",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/7/7e/Basset_Hound_600.jpg",
  },
  {
    name: "Oreo",
    color: "Yellow",
    specialSkill: "Able to stop chewing ice or whistling on request.",
    type: "cat",
    imageUrl:
      "https://i.pinimg.com/originals/9d/da/3e/9dda3e5fd2b9886fc3d13ee47f52e8a0.jpg",
  },
  {
    name: "Ginger",
    color: "Grey",
    specialSkill: "Comfortable in the outdoors for up to eight hours.",
    type: "dino",
    imageUrl:
      "http://www.theouthousers.com/images/jck//ThanosCopter/news/grumpasaur.jpg",
  },
  {
    name: "Sassy",
    color: "Poop-Colored",
    specialSkill: "Adept at talking self and others out of fights.",
    type: "cat",
    imageUrl:
      "https://tailandfur.com/wp-content/uploads/2015/09/40-Amazing-Cat-Funny-Moment-Pictures-Feature-Image.jpg",
  },
  {
    name: "Sammy",
    color: "Blue",
    specialSkill: "Listens attentively to boring stories.",
    type: "cat",
    imageUrl:
      "https://i.pinimg.com/originals/04/54/92/0454926d39eeb420f4f01948e94e9e41.jpg",
  },
  {
    name: "Coco",
    color: "Orange",
    specialSkill: "Can be around food without staring creepily at it.",
    type: "dino",
    imageUrl:
      "http://www.cantref.com/userfiles/events/walking%20dino.jpg?w=600",
  },
  {
    name: "Buster",
    color: "Green",
    specialSkill: "Does not use excessive acronyms.",
    type: "dog",
    imageUrl:
      "https://i.pinimg.com/originals/1f/30/8c/1f308c9c108a384b91b39430cc7312e9.jpg",
  },
  {
    name: "Chester",
    color: "Red",
    specialSkill:
      "Expertly quotes and recognizes dialogue from early seasons of The Simpsons.",
    type: "dog",
    imageUrl:
      "http://1kjkdg1axrkd2g03cnboj761.wpengine.netdna-cdn.com/wp-content/uploads/2017/12/braydon-anderson-105552-e1512684107659.jpg",
  },
  {
    name: "Samantha",
    color: "Brown",
    specialSkill: "Always up for dessert.",
    type: "cat",
    imageUrl:
      "http://3.bp.blogspot.com/-RzIFLsIO-XQ/UFoMLOT66JI/AAAAAAAAVps/JRF98hdA9S8/s640/funny-cat-pictures-016-027.jpg",
  },
  {
    name: "Coco",
    color: "Red",
    specialSkill: "Burps minimally.",
    type: "cat",
    imageUrl:
      "http://cathumor.net/wp-content/uploads/2013/12/cat-humor-funny-karate-cat-2.jpg",
  },
  {
    name: "Muffin",
    color: "Yellow",
    specialSkill:
      "Does not freak out if you haven’t seen his favorite movie (The Big Lebowski).",
    type: "cat",
    imageUrl: "http://www.funnycatsite.com/pictures/Close_Up_Yawn.jpg",
  },
  {
    name: "Spooky",
    color: "Black",
    specialSkill: "Uses litter box at appropriate hours.",
    type: "cat",
    imageUrl: "http://www.funnycatsite.com/pictures/Lazy_White_Cat.jpg",
  },
  {
    name: "Buddy",
    color: "Red",
    specialSkill: "Enjoys fine wine.",
    type: "dog",
    imageUrl:
      "http://1.bp.blogspot.com/-VjM0CmtN-vU/T7YX-LXa09I/AAAAAAAADA0/Vt1oGWEG0lw/s1600/sheepdog+border+collie+shakes+off+water+funny+picture+photo+pulling+faces+raspberry+tongue.jpg",
  },
  {
    name: "George",
    color: "Brown",
    specialSkill:
      "Participates in karaoke but does not force others to go out to karaoke.",
    type: "dog",
    imageUrl:
      "http://www.dogbreedplus.com/dog_breeds/images/basset-hound-4.jpg",
  },
  {
    name: "Bubba",
    color: "Yellow",
    specialSkill: "Cleans himself.",
    type: "dog",
    imageUrl:
      "https://www.thetrendywhippet.co.uk/wp-content/uploads/2016/11/IMG_1651-600x400.jpg",
  },
  {
    name: "Chloe",
    color: "Green",
    specialSkill: "Admits he is wrong",
    type: "dino",
    imageUrl:
      "https://assets.creationmuseum.org/img/pages/1703-DinoDen-TwoCard.jpg",
  },
  {
    name: "Nala",
    color: "Purple",
    specialSkill: "Dances when he has to.",
    type: "cat",
    imageUrl:
      "https://tailandfur.com/wp-content/uploads/2016/03/40-Scary-and-Funny-Cat-Pictures-8.jpg",
  },
];

const printToDom = (divID, textToPrint) => {
  const selectedDiv = document.getElementById(divID);
  selectedDiv.innerHTML = textToPrint;
};

const buildPetCards = () => {
  let domString = "";

  for (let i = 0; i < pets.length; i++) {
    domString += `<div class="animal">`;
    domString += `<h2>${pets[i].name}</h2>`;
    domString += `<img src=${pets[i].imageUrl} alt="pet image"/>`;
    domString += `<p>${pets[i].color}</p>`;
    domString += `<p class="special-skill">${pets[i].specialSkill}</p>`;
    domString += `<footer>${pets[i].type}</footer>`;
    domString += `</div>`;
  }

  printToDom("pets", domString);
};

const buildPetCardsCat = () => {
  domString = "";
  for (let i = 0; i < pets.length; i++) {
    if (pets[i].type === "cat") {
      domString += `<div class="animal">`;
      domString += `<h2>${pets[i].name}</h2>`;
      domString += `<img src=${pets[i].imageUrl} alt="pet image"/>`;
      domString += `<p>${pets[i].color}</p>`;
      domString += `<p class="special-skill">${pets[i].specialSkill}</p>`;
      domString += `<footer>${pets[i].type}</footer>`;
      domString += `</div>`;
    }
    printToDom("pets", domString);
  }
};

const buildPetsCardsDog = () => {
  domString = "";
  for (let i = 0; i < pets.length; i++) {
    if (pets[i].type === "dog") {
      domString += `<div class="animal">`;
      domString += `<h2>${pets[i].name}</h2>`;
      domString += `<img src=${pets[i].imageUrl} alt="pet image"/>`;
      domString += `<p>${pets[i].color}</p>`;
      domString += `<p class="special-skill">${pets[i].specialSkill}</p>`;
      domString += `<footer>${pets[i].type}</footer>`;
      domString += `</div>`;
    }
    printToDom("pets", domString);
  }
};

const buildPetCardsDino = () => {
  domString = "";
  for (let i = 0; i < pets.length; i++) {
    if (pets[i].type === "dino") {
      domString += `<div class="animal">`;
      domString += `<h2>${pets[i].name}</h2>`;
      domString += `<img src=${pets[i].imageUrl} alt="pet image"/>`;
      domString += `<p>${pets[i].color}</p>`;
      domString += `<p class="special-skill">${pets[i].specialSkill}</p>`;
      domString += `<footer>${pets[i].type}</footer>`;
      domString += `</div>`;
    }
    printToDom("pets", domString);
  }
};

const init = () => {
  buildPetCards();
};

init();

// sort by button click

document.getElementById("cats").addEventListener("click", buildPetCardsCat);

document.getElementById("dogs").addEventListener("click", buildPetsCardsDog);

document.getElementById("dino").addEventListener("click", buildPetCardsDino);

document.getElementById("all").addEventListener("click", buildPetCards);
