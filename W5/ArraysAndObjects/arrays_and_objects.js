/* Lab: write the code requested by lines marked //TODO
You should NOT modify any of the code that's here already. Add the code requested.   */

/* a. Use this JavaScript object. This represents the current position of the International Space Station
at 1pm on January 12th 2018, fetched from http://api.open-notify.org/iss-now.json.
 */

let iss_location = {
  "timestamp": 1515784140,
  "iss_position":
    {
      "latitude": "49.2167",
      "longitude": "100.5363"
    },
  "message": "success"
}

// Extract the latitude value, and log it to the console.
const latitude = iss_location['iss_position']['latitude'];
console.log(latitude); 
// TODO Extract the longitude value, and log it to the console.
const longitude = iss_location['iss_position']['longitude'];
console.log(longitude);



/* b. Use this JavaScript object of exchange rates relative to Euros.
The properties are currency symbols, the values are the exchange rates.
Data source: http://fixer.io/
* */


let rates = {
    "AUD": 1.5417,
    "BGN": 1.9558,
    "BRL": 3.8959,
    "CAD": 1.5194
}

//add a new property for Swiss Francs. Symbol is CHF, value is 1.1787.
rates['CHF'] = 1.1787;
// if you had 100 Euros, write code to get the exchange rate from the object, then calculate 
//      the equivalent value in Australian Dollars (AUD)
console.log(100 * rates['AUD']);
//write code to identify the currency symbol that has the highest exchange rate compared to Euros.
//    In other words, identify the property with the largest value. the answer is BRL (Brazilian Real) at 3.8959 BRL to 1 Euro.
let highestRate = 0;
let highestRateSymbol = '';
for (symbol in rates) {
  exchangeRate = rates[symbol];
  console.log(exchangeRate);
  if (exchangeRate > highestRate) {
    highestRate = exchangeRate;
    highestRateSymbol = symbol;
  }
}
console.log(`Highest exchange rate: ${highestRateSymbol}: ${highestRate}`);



/* c. Use this JavaScript array of objects of cat owners, and their cats. Source, moderncat.com
 */

let cats_and_owners = [
  { name: "Bill Clinton", cat: "Socks" },
  { name: "Gary Oldman", cat: "Soymilk" },
  { name: "Katy Perry", cat: "Kitty Purry" },
  { name: "Snoop Dogg", cat: "Miles Davis" }
]
//print Gary Oldman's cat's name
gary_Oldman = cats_and_owners.find((catOwnerCombo) => catOwnerCombo['name'] == 'Gary Oldman');
console.log('Gary oldman\'s cat name is: '+gary_Oldman['cat']);
//Taylor Swift's cat is called 'Meredith'. Write code to add this data to the array.
taylor_Swift = {
  name: 'Taylor Swift',
  cat: 'Meredith'
}
cats_and_owners.push(taylor_Swift);
//write a loop to print each cat owner, and their cat's name, one per line. Use the forEach style.
cats_and_owners.forEach((owner) => {
  console.log(`Owner: ${owner['name']}\nCat: ${owner['cat']}`);
})




/* d. Use the following JSON object, describing the Nobel Prize winners in 2017.
Source http://api.nobelprize.org/v1/prize.json?year=2017
* */
let nobel_prize_winners_2017 = {
  "prizes":[
    {
      "year":"2017",
      "category":"physics",
      "laureates":[
        {
          "id":"941",
          "firstname":"Rainer",
          "surname":"Weiss",
          "motivation":"\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
          "share":"2"
        },
        {
          "id":"942",
          "firstname":"Barry C.",
          "surname":"Barish",
          "motivation":"\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
          "share":"4"
        },
        {
          "id":"943",
          "firstname":"Kip S.",
          "surname":"Thorne",
          "motivation":"\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
          "share":"4"
        }
      ]
    },
    {
      "year":"2017",
      "category":"chemistry",
      "laureates":[
        {
          "id":"944",
          "firstname":"Jacques",
          "surname":"Dubochet",
          "motivation":"\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
          "share":"3"
        },
        {
          "id":"945",
          "firstname":"Joachim",
          "surname":"Frank",
          "motivation":"\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
          "share":"3"
        },
        {
          "id":"946",
          "firstname":"Richard",
          "surname":"Henderson",
          "motivation":"\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
          "share":"3"
        }
      ]
    },
    {
      "year":"2017",
      "category":"medicine",
      "laureates":[
        {
          "id":"938",
          "firstname":"Jeffrey C.",
          "surname":"Hall",
          "motivation":"\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
          "share":"3"
        },
        {
          "id":"939",
          "firstname":"Michael",
          "surname":"Rosbash",
          "motivation":"\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
          "share":"3"
        },
        {
          "id":"940",
          "firstname":"Michael W.",
          "surname":"Young",
          "motivation":"\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
          "share":"3"
        }
      ]
    },
    {
      "year":"2017",
      "category":"literature",
      "laureates":[
        {
          "id":"947",
          "firstname":"Kazuo",
          "surname":"Ishiguro",
          "motivation":"\"who, in novels of great emotional force, has uncovered the abyss beneath our illusory sense of connection with the world\"",
          "share":"1"
        }
      ]
    },
    {
      "year":"2017",
      "category":"peace",
      "laureates":[
        {
          "id":"948",
          "firstname":"International Campaign to Abolish Nuclear Weapons (ICAN)",
          "motivation":"\"for its work to draw attention to the catastrophic humanitarian consequences of any use of nuclear weapons and for its ground-breaking efforts to achieve a treaty-based prohibition of such weapons\"",
          "share":"1",
          "surname":""
        }
      ]
    },
    {
      "year":"2017",
      "category":"economics",
      "laureates":[
        {
          "id":"949",
          "firstname":"Richard H.",
          "surname":"Thaler",
          "motivation":"\"for his contributions to behavioural economics\"",
          "share":"1"
        }
      ]
    }
  ]
}
// TODO print the full name of the Literature Nobel laureate.
const literature_prize = nobel_prize_winners_2017['prizes'].find((prize) => prize['category'] == 'literature');
console.log(literature_prize);
const literature_laureate = literature_prize['laureates'][0];
console.log(`Literature laureate: ${literature_laureate['firstname']} ${literature_laureate['surname']}`);
//print the ids of each of the Physics Nobel laureates. Your code should still work without modification if a laureate was added, or removed.
const physics_prize = nobel_prize_winners_2017['prizes'].find((prize) => prize['category'] == 'physics');
const physics_laureates = physics_prize['laureates'];
physics_laureates.forEach((laureate) => {
  console.log(`${laureate['firstname']} ${laureate['surname']}'s id: ${laureate['id']}`);
});
//write code to print the names of all of the prize categories (So your output would start physics, chemistry, medicine... ).
nobel_prize_winners_2017['prizes'].forEach((prize) => {
  console.log(prize['category']);
});
//write code to print the total number of prize categories
console.log(`Number of catgories this year: ${nobel_prize_winners_2017['prizes'].length}`);
//write code to count the total number of laureates from 2017. 
//   have a good look at how the JSON is structured, and think about what loop(s) you'll need to write.
let numberOfLaurates = 0;
nobel_prize_winners_2017['prizes'].forEach((prize) => {
  numberOfLaurates += prize['laureates'].length;
});
console.log('Number of laureates in 2017: '+ numberOfLaurates);



