//Normally data is stored in DB, when app sends a request to DB, it return this array of data
//Link: https://www.imdb.com/chart/top/
let items =[{id: 1, title: "The Shawshank Redemption", year: 1994, price: 7.50, category: 1, image_url: "Images/ItemImage.jpg", description: "When an innocent male banker is sent to prison accused of murdering his wife, he does everything that he can over the years to break free and escape from prison. While on the inside, he develops a friendship with a fellow inmate that could last for years."}, 
    {id: 2, title: "The Godfather", year: 1972, price: 7.75, category: 2, image_url: "Images/ItemImage.jpg", description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son."}, 
    {id: 3, title: "The Dark Knight", year: 2008, price: 8.95, category: 3, image_url: "Images/ItemImage.jpg", description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman, James Gordon and Harvey Dent must work together to put an end to the madness."}, 
    {id: 4, title: "12 Angry Men", year: 1957, price: 5.95, category: 2, image_url: "Images/ItemImage.jpg", description: "The jury in a New York City murder trial is frustrated by a single member whose skeptical caution forces them to more carefully consider the evidence before jumping to a hasty verdict."}, 
    {id: 5, title: "Schindler\'s List", year: 1993, price: 8.50, category: 1, image_url: "Images/ItemImage.jpg", description: "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis."}, 
    {id: 6, title: "The Lord of the Rings: The Return of the King", year: 2003, price: 8.95, category: 4, image_url: "Images/ItemImage.jpg", description: "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring."}, 
    {id: 7, title: "Pulp Fiction", year: 1994, price: 6.95, category: 4, image_url: "Images/ItemImage.jpg", description: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption."}, 
    {id: 8, title: "The Lord of the Rings: The Fellowship of the Ring", year: 2001, price: 10.95, category: 4, image_url: "Images/ItemImage.jpg", description: "Praesent vulputate, ligula ac vehicula consectetur, dui lectus feugiat tellus, rutrum hendrerit tellus mi nec lorem. Praesent vitae dapibus lectus."}, 
    {id: 9, title: "The Good, the Bad and the Ugly", year: 1966, price: 7.50, category: 3, image_url: "Images/ItemImage.jpg", description: "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron."}, 
    {id: 10, title: "Forrest Gump", year: 1994, price: 11.95, category: 3, image_url: "Images/ItemImage.jpg", description: "The history of the United States from the 1950s to the '70s unfolds from the perspective of an Alabama man with an IQ of 75, who yearns to be reunited with his childhood sweetheart."},
    {id: 11, title: "Fight Club", year: 1999, price: 12.95, category: 3, image_url: "Images/ItemImage.jpg", description: "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more."},
    {id: 12, title: "Inception", year: 2010, price: 7.95, category: 4, image_url: "Images/ItemImage.jpg", description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster."},
    {id: 13, title: "The Matrix", year: 1999, price: 9.95, category: 4, image_url: "Images/ItemImage.jpg", description: "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence."},
    {id: 14, title: "Goodfellas", year: 1990, price: 5.95, category: 2, image_url: "Images/ItemImage.jpg", description: "The story of Henry Hill and his life in the mafia, covering his relationship with his wife Karen and his mob partners Jimmy Conway and Tommy DeVito."},
    {id: 15, title: "One Flew Over the Cuckoo\'s Nest", year: 1975, price: 8.95, category: 1, image_url: "Images/ItemImage.jpg", description: "In the Fall of 1963, a Korean War veteran and criminal pleads insanity and is admitted to a mental institution, where he rallies up the scared patients against the tyrannical nurse."},
    {id: 16, title: "Interstellar", year: 2014, price: 11.95, category: 4, image_url: "Images/ItemImage.jpg", description: "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans."}
];

//Normally data is stored in DB, when app sends a request to DB, it return this array of data
let categories = [ {id: 1, category: "Tragedy"},
	{id: 2, category: "Crime"},
	{id: 3, category: "Action"},
	{id: 4, category: "Fantasy"}
];
        
//Normally data is stored in DB, when app sends a request to DB, it return this array of data
//Link: https://www.imdb.com/chart/top/
let votes =[{id: 1, like: 1345, dislike: 10},
    {id: 2, like: 5432, dislike: 11},
    {id: 3, like: 7895, dislike: 15},
    {id: 4, like: 9287, dislike: 3},
    {id: 5, like: 9978, dislike: 2},
    {id: 6, like: 19002, dislike: 0},
    {id: 7, like: 2020, dislike: 16},
    {id: 8, like: 3241, dislike: 12},
    {id: 9, like: 2029, dislike: 10},
    {id: 10, like: 9109, dislike: 18},
    {id: 11, like: 10982, dislike: 23},
    {id: 12, like: 7860, dislike: 12},
    {id: 13, like: 8965, dislike: 21},
    {id: 14, like: 7836, dislike: 8},
    {id: 15, like: 1563, dislike: 4},
    {id: 16, like: 8973, dislike: 1}
];

//Normally data is stored in DB, when app sends a request to DB, it return this array of data
//Link: https://www.imdb.com/chart/top/
let comments =[ {id: 1, comments: [{user: "John", comment:"Good Movie"}, {user: "Ian", comment:"Not bad"},{user: "Daniel", comment:"Recommended"}]},
    {id: 2, comments: [{user: "Graham", comment:"Great Movie"}, {user: "Noor", comment:"Very interesting"},{user: "Kim", comment:"Excellent movie"}]},
    {id: 3, comments: [{user: "John", comment:"Good Movie"}, {user: "Ian", comment:"Not bad"},{user: "Daniel", comment:"Recommended"}]},
    {id: 4, comments: [{user: "Graham", comment:"Great Movie"}]},
    {id: 5, comments: [{user: "Ian", comment:"Not bad"},{user: "Daniel", comment:"Recommended"}]},
    {id: 6, comments: [{user: "Kim", comment:"Excellent movie"}]},
    {id: 7, comments: [ {user: "Ian", comment:"Must watch"},{user: "Daniel", comment:"Recommended"}]},
    {id: 8, comments: [{user: "Noor", comment:"Very interesting"}]},
    {id: 9, comments: [{user: "John", comment:"Good Movie"}]},
    {id: 10, comments: [{user: "Noor", comment:"Great movie, recommended"},{user: "Kim", comment:"Excellent movie"}]},
    {id: 11, comments: [{user: "John", comment:"Good Movie"}, {user: "Ian", comment:"Not bad"},{user: "Daniel", comment:"Recommended"}]},
    {id: 12, comments: [{user: "Noor", comment:"Very interesting"},{user: "Kim", comment:"Excellent movie"}]},
    {id: 13, comments: [{user: "John", comment:"Good Movie"}, {user: "Ian", comment:"Not bad"},{user: "Daniel", comment:"Recommended"}]},
    {id: 14, comments: [ {user: "Noor", comment:"Very interesting"},{user: "Kim", comment:"Excellent movie"}, {user: "Graham", comment:"Great Movie"}]},
    {id: 15, comments: [{user: "John", comment:"Good Movie"}, {user: "Ian", comment:"Not bad"},{user: "Daniel", comment:"Recommended"}]},
    {id: 16, comments: [{user: "Kim", comment:"Excellent movie"}, {user: "Graham", comment:"Great Movie"}, {user: "Noor", comment:"Very interesting"}]},
];     