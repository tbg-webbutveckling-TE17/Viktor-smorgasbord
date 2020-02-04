var output = document.querySelector("body > p");
var person = ["Sid", 31, "Eagleshieldbay" ];

output.innerHTML = person[2];

var persona = {
    name: "Sid",  //keyvalue pair
    age: 41,
    hometown: "heresneezedduck"
};

persona.hometown = "Buy a Harbour"

output.innerHTML = "He lives in " + persona.hometown;

var oddNums = {};
oddNums.number = 1;
oddNums.str = "now";
oddNums.isOdd = true;

output.innerHTML = oddNums.number;

//Most common
var dog = {
    name: "Doggo",
    breed: "Golden",
    age: 3,
    isFriendly: true 
}

var cat = new Object();
cat.name = "Smilla";
cat.age = 3;
output.innerHTML = cat.name;

var junkObject = {
    name: "junk",
    age: 33,
    color: "space grey",
    isEvil: false,
    friends: ["derek", "simon", "joje"],
    pet: {
        name: "charlie",
        species: "pig", 
        age: 9,

    }
};

output.innerHTML = junkObject.pet.species;



var posts = [
    {
        author: "Catlover",
        title: "Cats are gr8",
        comments: ["I have such and adorable cat"]
    },
    {   
        
        author: "Dogking",
        title: "Dogs eat much",
        comments: ["i have a big dog"]
    },
    {    
        author: "Tiger",
        title: "Big cat",
        comments: ["he is such a big cat"]
    }
];
posts.forEach(function(post) {
output.innerHTML += "Author:" + post.author + " " + "<br/>Title: " + post.title + " " + "<br/>Comments: " + post.comments + "<br/><br/> ";
});

//output.innerHTML = "Author" + posts[1].author + "comments" + posts[1].comments;


