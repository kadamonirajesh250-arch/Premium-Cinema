const movies = [
  {
    id: 1,
    title: "Avengers: Endgame",
    rating: 8.9,
    image: "https://i1-e.pinimg.com/1200x/d1/14/df/d114df4eea58602b3007101ad8b3a7a2.jpg",
    genre: "Marvel",
    duration: "3h 02m",
    genreLabel: "Action / Sci-Fi",
    lang: "English"
  },
  {
    id: 2,
    title: "OG",
    rating: 8.8,
    image: "https://i1-c.pinimg.com/1200x/a9/3d/93/a93d9302d04ce54914291fe9c73d911e.jpg",
    genre: "Action",
    duration: "2h 45m",
    genreLabel: "Action / Drama",
    lang: "Telugu"
  },
  {
    id: 3,
    title: "Interstellar",
    rating: 8.7,
    image: "https://i1-e.pinimg.com/webp80/1200x/f0/0e/f4/f00ef4ef28062a3ffe32c80cfa039c86.webp",
    genre: "Sci-Fi",
    duration: "2h 49m",
    genreLabel: "Sci-Fi / Drama",
    lang: "English"
  },
  {
    id: 4,
    title: "The Dark Knight",
    rating: 9.0,
    image: "https://i1-e.pinimg.com/1200x/5f/fe/79/5ffe79003530da912a82acac80be1426.jpg",
    genre: "Action",
    duration: "2h 32m",
    genreLabel: "Action / Thriller",
    lang: "English"
  },
  {
    id: 5,
    title: "Joker",
    rating: 8.5,
    image: "https://i.pinimg.com/736x/42/bb/ba/42bbbaefd687903bc80b02c014e64a5b.jpg",
    genre: "Drama",
    duration: "2h 02m",
    genreLabel: "Crime / Drama",
    lang: "English"
  },
  {
    id: 6,
    title: "Spider-Man: No Way Home",
    rating: 8.4,
    image: "https://i1-e.pinimg.com/1200x/b3/64/71/b36471519fbddde3346067c1d7ad0127.jpg",
    genre: "Marvel",
    duration: "2h 28m",
    genreLabel: "Action / Marvel",
    lang: "English"
  },
  {
    id: 7,
    title: "Doctor Strange",
    rating: 7.9,
    image: "https://i1-e.pinimg.com/webp80/1200x/bd/be/57/bdbe5773be1c1a59a18569f99705452c.webp",
    genre: "Marvel",
    duration: "1h 55m",
    genreLabel: "Sci-Fi / Marvel",
    lang: "English"
  },
  {
    id: 8,
    title: "Black Panther",
    rating: 8.0,
    image: "https://i1-e.pinimg.com/1200x/22/84/f2/2284f2721fb7c37a824fe3f5770dafa3.jpg",
    genre: "Marvel",
    duration: "2h 14m",
    genreLabel: "Action / Marvel",
    lang: "English"
  },
  {
    id: 9,
    title: "Thor: Ragnarok",
    rating: 8.1,
    image: "https://i1-e.pinimg.com/1200x/1b/06/ce/1b06ce230340db050811d1836506714f.jpg",
    genre: "Marvel",
    duration: "2h 10m",
    genreLabel: "Comedy / Marvel",
    lang: "English"
  },
  {
    id: 10,
    title: "Iron Man",
    rating: 8.3,
    image: "https://i1-e.pinimg.com/736x/52/be/e1/52bee1ca0ef72474b398b4b23ae2d911.jpg",
    genre: "Marvel",
    duration: "2h 06m",
    genreLabel: "Action / Marvel",
    lang: "English"
  },
  {
    id: 11,
    title: "Captain America: Civil War",
    rating: 8.2,
    image: "https://i1-e.pinimg.com/1200x/45/1c/97/451c97801dacffe00eb7314e843ec5e3.jpg",
    genre: "Marvel",
    duration: "2h 27m",
    genreLabel: "Action / Marvel",
    lang: "English"
  },
  {
    id: 12,
    title: "Frozen",
    rating: 7.8,
    image: "https://i.pinimg.com/736x/cd/f0/2f/cdf02fbb3554e09507bad8789e238b26.jpg",
    genre: "Family",
    duration: "1h 42m",
    genreLabel: "Family / Musical",
    lang: "English"
  },
  {
    id: 13,
    title: "Moana",
    rating: 7.7,
    image: "https://i.pinimg.com/736x/08/5e/dd/085edd8ede953f1e3a5bd369faf193ed.jpg",
    genre: "Family",
    duration: "1h 47m",
    genreLabel: "Family / Adventure",
    lang: "English"
  },
  {
    id: 14,
    title: "Toy Story 4",
    rating: 7.9,
    image: "https://i1-e.pinimg.com/1200x/31/4a/8d/314a8dd05e9e1e0aab908d9f1e828b58.jpg",
    genre: "Family",
    duration: "1h 40m",
    genreLabel: "Family / Animated",
    lang: "English"
  },
  {
    id: 15,
    title: "Coco",
    rating: 8.4,
    image: "https://i1-e.pinimg.com/webp80/736x/a1/6c/89/a16c89e3dcd2bbc3d19c1c23ceaf266d.webp",
    genre: "Family",
    duration: "1h 45m",
    genreLabel: "Family / Fantasy",
    lang: "English"
  },
  {
    id: 16,
    title: "Finding Nemo",
    rating: 8.1,
    image: "https://i.pinimg.com/736x/e3/15/1e/e3151e0a099a7aea3741a520948ddd82.jpg",
    genre: "Family",
    duration: "1h 40m",
    genreLabel: "Family / Classic",
    lang: "English"
  },
  {
    id: 17,
    title: "The Lion King",
    rating: 8.5,
    image: "https://i1-e.pinimg.com/1200x/fd/0c/44/fd0c44fd41b80385b1a21999a42195f9.jpg",
    genre: "Family",
    duration: "1h 58m",
    genreLabel: "Family / Drama",
    lang: "English"
  },
  {
    id: 18,
    title: "Aladdin",
    rating: 7.6,
    image: "https://i1-e.pinimg.com/736x/54/28/0f/54280fd7fcfb716035ed07c76d27b2b9.jpg",
    genre: "Family",
    duration: "2h 08m",
    genreLabel: "Fantasy / Family",
    lang: "English"
  },
  {
    id: 19,
    title: "Titanic",
    rating: 8.6,
    image: "https://i.pinimg.com/736x/41/49/e8/4149e88bc78090b7232ce51bd4270e99.jpg",
    genre: "Drama",
    duration: "3h 14m",
    genreLabel: "Romance / Drama",
    lang: "English"
  },
  {
    id: 20,
    title: "Avatar",
    rating: 7.9,
    image: "https://i.pinimg.com/736x/66/ec/b5/66ecb58a7db3308030eac58dbb3d39c3.jpg",
    genre: "Sci-Fi",
    duration: "2h 42m",
    genreLabel: "Sci-Fi / Action",
    lang: "English"
  },
  {
    id: 21,
    title: "Avatar: The Way of Water",
    rating: 8.0,
    image: "https://i.pinimg.com/736x/45/51/6e/45516e797bb9574f746ed1af03e4eb0f.jpg",
    genre: "Sci-Fi",
    duration: "3h 12m",
    genreLabel: "Sci-Fi / Action",
    lang: "English"
  },
  {
    id: 22,
    title: "Fast & Furious 7",
    rating: 7.4,
    image: "https://i1-c.pinimg.com/1200x/8c/85/bd/8c85bd16e8f280991b86f3ee7a852cae.jpg",
    genre: "Action",
    duration: "2h 17m",
    genreLabel: "Action / Crime",
    lang: "English"
  },
  {
    id: 23,
    title: "John Wick",
    rating: 8.0,
    image: "https://i1-c.pinimg.com/236x/5b/d8/0e/5bd80ee0c096d63eb0b02c342c066180.jpg",
    genre: "Action",
    duration: "1h 41m",
    genreLabel: "Action / Thriller",
    lang: "English"
  },
  {
    id: 24,
    title: "John Wick 4",
    rating: 8.3,
    image: "https://i1-c.pinimg.com/1200x/0e/1e/fc/0e1efcf34892ea5c72a17eb04910771e.jpg",
    genre: "Action",
    duration: "2h 49m",
    genreLabel: "Action / Thriller",
    lang: "English"
  },
  {
    id: 25,
    title: "Mission Impossible",
    rating: 7.9,
    image: "https://i1-c.pinimg.com/1200x/7e/a3/99/7ea399e4b592a0b969d77916a93e001a.jpg",
    genre: "Action",
    duration: "2h 43m",
    genreLabel: "Action / Spy",
    lang: "English"
  },
  {
    id: 26,
    title: "Top Gun: Maverick",
    rating: 8.5,
    image: "https://i1-c.pinimg.com/1200x/e5/83/b4/e583b43e320271408499d7af729a81b4.jpg",
    genre: "Action",
    duration: "2h 10m",
    genreLabel: "Action / Drama",
    lang: "English"
  },
  {
    id: 27,
    title: "Oppenheimer",
    rating: 8.8,
    image: "https://i.pinimg.com/736x/25/f6/e2/25f6e2f71318f1438f8ea611e35a4057.jpg",
    genre: "Drama",
    duration: "3h 00m",
    genreLabel: "Biography / Drama",
    lang: "English"
  },
  {
    id: 28,
    title: "Barbie",
    rating: 7.5,
    image: "https://i.pinimg.com/736x/d4/25/a5/d425a57222166746eb82e1fa77b7a127.jpg",
    genre: "Family",
    duration: "1h 54m",
    genreLabel: "Comedy / Fantasy",
    lang: "English"
  },
  {
    id: 29,
    title: "Dune",
    rating: 8.2,
    image: "https://i.pinimg.com/736x/f2/b1/48/f2b148cffab60969df40a90a6abd66ef.jpg",
    genre: "Sci-Fi",
    duration: "2h 35m",
    genreLabel: "Sci-Fi / Adventure",
    lang: "English"
  },
  {
    id: 30,
    title: "Dune Part Two",
    rating: 8.9,
    image: "https://i.pinimg.com/736x/b7/95/44/b795447414c34b18eddc91fdea0fffef.jpg",
    genre: "Sci-Fi",
    duration: "2h 46m",
    genreLabel: "Sci-Fi / Adventure",
    lang: "English"
  },
  {
    id: 31,
    title: "The Batman",
    rating: 8.1,
    image: "https://i.pinimg.com/736x/ab/3d/63/ab3d6358c7ee93923de8caec086aa259.jpg",
    genre: "Action",
    duration: "2h 56m",
    genreLabel: "Crime / Action",
    lang: "English"
  },
  {
    id: 32,
    title: "Aquaman",
    rating: 7.0,
    image: "https://i1-c.pinimg.com/1200x/6b/41/a1/6b41a14dd81c2822134398657f5bf80b.jpg",
    genre: "Action",
    duration: "2h 23m",
    genreLabel: "Action / Fantasy",
    lang: "English"
  },
  {
    id: 33,
    title: "Wonder Woman",
    rating: 7.8,
    image: "https://i1-c.pinimg.com/736x/33/39/2c/33392c0c657e2dec26a3c29173af8067.jpg",
    genre: "Action",
    duration: "2h 21m",
    genreLabel: "Action / Fantasy",
    lang: "English"
  },
  {
    id: 34,
    title: "Shazam",
    rating: 7.2,
    image: "https://i1-c.pinimg.com/736x/88/d4/33/88d433850a67b4873f0d7d36f7041155.jpg",
    genre: "Action",
    duration: "2h 12m",
    genreLabel: "Fantasy / Comedy",
    lang: "English"
  },
  {
    id: 35,
    title: "Deadpool",
    rating: 8.0,
    image: "https://i1-c.pinimg.com/1200x/1d/32/1f/1d321fc032ac2afb4947d2f065c36a8d.jpg",
    genre: "Action",
    duration: "1h 48m",
    genreLabel: "Action / Comedy",
    lang: "English"
  },
  {
    id: 36,
    title: "Deadpool 2",
    rating: 7.9,
    image: "https://i1-c.pinimg.com/1200x/f2/7f/dd/f27fddb6e9b21fc953cae9fb6229edcc.jpg",
    genre: "Action",
    duration: "1h 59m",
    genreLabel: "Action / Comedy",
    lang: "English"
  },
  {
    id: 37,
    title: "Peddi",
    rating: 8.4,
    image: "https://i.pinimg.com/736x/2a/38/1f/2a381f5654f5d6fc69262b2bfe0645e1.jpg",
    genre: "Drama",
    duration: "2h 30m",
    genreLabel: "Action / Drama",
    lang: "Telugu"
  },
  {
    id: 38,
    title: "The Wolverine",
    rating: 6.7,
    image: "https://i1-c.pinimg.com/1200x/70/35/b3/7035b3da4a1afc74552ad12cd3a1b4a2.jpg",
    genre: "Action",
    duration: "2h 06m",
    genreLabel: "Action / Sci-Fi",
    lang: "English"
  },
  {
    id: 39,
    title: "Mad Max: Fury Road",
    rating: 8.1,
    image: "https://i1-c.pinimg.com/1200x/a6/5f/e5/a65fe533096f92828113b4b880b5ee07.jpg",
    genre: "Action",
    duration: "2h 00m",
    genreLabel: "Action / Sci-Fi",
    lang: "English"
  },
  {
    id: 40,
    title: "Gladiator",
    rating: 8.5,
    image: "https://i1-c.pinimg.com/1200x/49/22/6c/49226cc2be5cb537218993fa89d075a8.jpg",
    genre: "Drama",
    duration: "2h 35m",
    genreLabel: "Action / Drama",
    lang: "English"
  }
];

export default movies;
