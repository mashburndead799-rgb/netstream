import { Movie } from './types';

// The specific requested movie object from JSON
export const FEATURED_MOVIE: Movie = {
  "id": "1",
  "title": "K-Pop Demon Hunter",
  "description": "Icônes mondiales de la K-Pop le jour, chasseuses de démons la nuit, cinq jeunes stars mènent une double vie dangereuse. Entre concerts survoltés, rivalités médiatiques et forces surnaturelles ancestrales, elles doivent protéger l’humanité sans révéler leur véritable identité.",
  "tagline": "Quand la scène s’éteint, la chasse commence",
  "category": "Film",
  "genre": ["Action", "Fantastique", "Aventure", "Musical"],
  "thumbnail": "https://img.youtube.com/vi/AzCAwdp1uIQ/maxresdefault.jpg",
  "backdrop": "https://img.youtube.com/vi/AzCAwdp1uIQ/maxresdefault.jpg",
  "video_url": "https://bramtiv.com/iframe/mDoeggeb8I",
  "trailer_url": "https://drive.google.com/uc?export=preview&id=1s9RUfLy4i77h6aG4TAM9gQ_TwnzLonPm",
  "year": 2025,
  "duration": "1h 38min",
  "rating": "4.0",
  "maturityRating": "PG-10",
  "featured": true,
  "director": "Kim Ji-won",
  "cast": [
    {
      "name": "Kim Soo-yeon (Jisoo)",
      "role": "Jina – Leader du groupe / Chasseuse de démons",
      "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Kim_Ji-soo_at_Omotesando_Hills_on_June_2022_%282%29.jpg/400px-Kim_Ji-soo_at_Omotesando_Hills_on_June_2022_%282%29.jpg"
    },
    {
      "name": "Park Min-seo (Karina)",
      "role": "Ara – Danseuse principale / Experte en armes sacrées",
      "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Karina_for_Acqua_di_Parma_x_W_Korea_on_November_17%2C_2023.jpg/400px-Karina_for_Acqua_di_Parma_x_W_Korea_on_November_17%2C_2023.jpg"
    },
    {
      "name": "Lee Hae-rin (Haerin)",
      "role": "Yuna – Vocaliste / Utilisatrice de magie vocale",
      "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/NewJeans_Haerin_Marie_Claire_Korea_Video.jpg/400px-NewJeans_Haerin_Marie_Claire_Korea_Video.jpg"
    },
    {
      "name": "Choi Ji-hoon (Cha Eun-woo)",
      "role": "Min-jae – Manager du groupe / Gardien du secret",
      "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Cha_Eun-woo_in_2024.jpg/400px-Cha_Eun-woo_in_2024.jpg"
    }
  ]
};

// Five Nights at Freddy's 2 (Standalone constant for specific use if needed, also in list)
export const FNAF_MOVIE: Movie = {
  "id": "2",
  "title": "Five Nights at Freddy's 2 ",
  "description": "Mike Schmidt pense en avoir fini avec ses cauchemars, mais le passé ne meurt jamais vraiment. La pizzeria rouvre ses portes avec de nouveaux animatroniques 'Toy' dotés de technologies de reconnaissance faciale avancées.",
  "tagline": "La fête recommence... et le cauchemar aussi.",
  "category": "Film",
  "genre": ["Horreur", "Thriller", "Mystère"],
  "thumbnail": "https://attractionsmagazine.com/wp-content/uploads/2025/12/Five-Nights-at-Freddys-2-courtesy-of-Unviersal.jpg",
  "backdrop": "https://attractionsmagazine.com/wp-content/uploads/2025/12/Five-Nights-at-Freddys-2-courtesy-of-Unviersal.jpg",
  "video_url": "https://moovbob.fr/iframe/qWS1VKQBTc",
  "trailer_url": "https://www.youtube.com/embed/Z_PG_s1_i_U",
  "year": 2025,
  "duration": "1h 50min",
  "rating": "4.5",
  "maturityRating": "16+",
  "featured": false,
  "director": "Emma Tammi",
  "cast": [
    { "name": "Josh Hutcherson", "role": "Mike Schmidt", "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Josh_Hutcherson_Canon.jpg/400px-Josh_Hutcherson_Canon.jpg" },
    { "name": "Matthew Lillard", "role": "William Afton", "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Matthew_Lillard_2016.jpg/400px-Matthew_Lillard_2016.jpg" }
  ]
};

// Demon Slayer Movie
export const DEMON_SLAYER_MOVIE: Movie = {
  "id": "3",
  "title": "Demon Slayer : La Forteresse infinie",
  "description": "Tanjiro et le corps des pourfendeurs de démons affrontent Muzan Kibutsuji dans une bataille finale épique au cœur de la Forteresse Infinie.",
  "tagline": "L'ultime bataille commence.",
  "category": "Anime",
  "genre": ["Animation", "Action", "Fantastique", "Shonen"],
  "thumbnail": "https://image.tmdb.org/t/p/w500/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg",
  "backdrop": "https://image.tmdb.org/t/p/original/b34jPzmB0wZy7EXYefMXQA6uLPZ.jpg",
  "video_url": "https://moovbob.fr/iframe/wZVai4oTdn",
  "trailer_url": "https://www.youtube.com/embed/SQk1jP_uU1E", 
  "year": 2025,
  "duration": "1h 50min",
  "rating": "4.9",
  "maturityRating": "16+",
  "featured": false,
  "director": "Haruo Sotozaki",
  "cast": [
    { "name": "Natsuki Hanae", "role": "Tanjiro", "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Natsuki_Hanae_Tokyo_International_Film_Festival_2019.jpg/400px-Natsuki_Hanae_Tokyo_International_Film_Festival_2019.jpg" },
    { "name": "Akari Kitō", "role": "Nezuko", "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Akari_Kito_at_The_Crucible_Greeting_2020.jpg/400px-Akari_Kito_at_The_Crucible_Greeting_2020.jpg" }
  ]
};

// --- COLLECTION BLOCKBUSTERS & NOUVEAUTÉS ---

export const BLOCKBUSTER_COLLECTION: Movie[] = [
  // --- Nouveautés & Blockbusters ---
  { "id": "10", "title": "Wicked", "description": "L'histoire méconnue des sorcières d'Oz.", "category": "Film", "genre": ["Fantastique", "Musical"], "thumbnail": "https://photos.tf1.fr/330/186/program-card-landscape-e8d65f-a0e8d8-0@3x.jpg", "backdrop": "https://photos.tf1.fr/330/186/program-card-landscape-e8d65f-a0e8d8-0@3x.jpg", "video_url": "https://bramtiv.com/iframe/riwo1v2i1E", "year": 2024, "duration": "2h 40min", "rating": "4.2", "maturityRating": "PG", "featured": false },
  { "id": "11", "title": "Wicked: Part Two", "description": "La suite épique des aventures d'Elphaba et Glinda.", "category": "Film", "genre": ["Fantastique", "Musical"], "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo-unptTBaSZX6NFUf1MfKMPeAmS3Yj2y0UA&s", "backdrop": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo-unptTBaSZX6NFUf1MfKMPeAmS3Yj2y0UA&s", "video_url": "https://moovbob.fr/iframe/8anD8wTR9h", "year": 2025, "duration": "2h 30min", "rating": "4.7", "maturityRating": "PG", "featured": false },
  { "id": "12", "title": "Avatar", "description": "Sur Pandora, un ancien marine se retrouve tiraillé entre sa mission et la protection de ce nouveau monde.", "category": "Film", "genre": ["Sci-Fi", "Action"], "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvmVmJ3RuB-dRosJP1RYQZdhBrT6OGT_sxlw&s", "backdrop": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvmVmJ3RuB-dRosJP1RYQZdhBrT6OGT_sxlw&s", "video_url": "https://sharecloudy.com/iframe/H7bwftkMvc", "year": 2009, "duration": "2h 42min", "rating": "4.8", "maturityRating": "13+", "featured": false },
  { "id": "13", "title": "Avatar: La Voie de l'eau", "description": "Jake Sully et Neytiri explorent les régions océaniques de Pandora.", "category": "Film", "genre": ["Sci-Fi", "Action"], "thumbnail": "https://www.ecranlarge.com/content/uploads/2023/01/avatar-2-la-voie-de-leau-photo-1461935.png", "backdrop": "https://www.ecranlarge.com/content/uploads/2023/01/avatar-2-la-voie-de-leau-photo-1461935.png", "video_url": "https://sharecloudy.com/iframe/xy3dDUerDg", "year": 2022, "duration": "3h 12min", "rating": "4.6", "maturityRating": "13+", "featured": false },
  { "id": "14", "title": "Avatar: Fire and Ash", "description": "Le troisième chapitre de la saga Avatar.", "category": "Film", "genre": ["Sci-Fi", "Action"], "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPbHZ0VJj78rnLqT6MsWJhXE29Nbx3RP2vHw&s", "backdrop": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPbHZ0VJj78rnLqT6MsWJhXE29Nbx3RP2vHw&s", "video_url": "https://vidzy.org/embed-rhuf5ridhui7.html", "year": 2025, "duration": "3h 00min", "rating": "4.9", "maturityRating": "13+", "featured": false },
  { "id": "15", "title": "The Running Man", "description": "Dans une dystopie, un homme doit survivre à un jeu télévisé mortel.", "category": "Film", "genre": ["Action", "Thriller"], "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgcWHIM96T_CdtcmuhMhSF2PfPpNsE_pZERg&s", "backdrop": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgcWHIM96T_CdtcmuhMhSF2PfPpNsE_pZERg&s", "video_url": "https://moovtop.fr/iframe/lyEwf4mAEd", "year": 2025, "duration": "2h 10min", "rating": "4.3", "maturityRating": "16+", "featured": false },
  { "id": "16", "title": "Tron: Ares", "description": "Ares, un programme sophistiqué, entre dans le monde réel.", "category": "Film", "genre": ["Sci-Fi", "Action"], "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLabSBM_nXotyLt5uAZPial9NcJeukO0jscQ&s", "backdrop": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLabSBM_nXotyLt5uAZPial9NcJeukO0jscQ&s", "video_url": "https://moovtop.fr/iframe/w1fgH3Q71G", "year": 2025, "duration": "2h 15min", "rating": "4.4", "maturityRating": "13+", "featured": false },
  { "id": "17", "title": "F1® Le Film", "description": "Un pilote de F1 sort de sa retraite pour devenir le mentor d'un jeune prodige.", "category": "Film", "genre": ["Sport", "Action"], "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt-jlSCNDuvOnRexqzFr4LyW8l6HNGrbBrdA&s", "backdrop": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt-jlSCNDuvOnRexqzFr4LyW8l6HNGrbBrdA&s", "video_url": "https://sharecloudy.com/iframe/9NxxNKlyR2", "year": 2025, "duration": "2h 20min", "rating": "4.5", "maturityRating": "13+", "featured": false },
  { "id": "18", "title": "Mission: Impossible - The Final Reckoning", "description": "Ethan Hunt se lance dans sa mission la plus périlleuse.", "category": "Film", "genre": ["Action", "Espionnage"], "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi9cMxA_zDBzNHP4k9uQIjurfvfFeD5xjOaw&s", "backdrop": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi9cMxA_zDBzNHP4k9uQIjurfvfFeD5xjOaw&s", "video_url": "https://sharecloudy.com/iframe/sMXIgLJrWI", "year": 2025, "duration": "2h 45min", "rating": "4.9", "maturityRating": "13+", "featured": false },
  { "id": "19", "title": "28 Years Later", "description": "Le virus de la rage a évolué.", "category": "Film", "genre": ["Horreur", "Thriller"], "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZlypRlDTirZTFsjv5DKvXHfyjaxtEg9ZIAg&s", "backdrop": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZlypRlDTirZTFsjv5DKvXHfyjaxtEg9ZIAg&s", "video_url": "https://sharecloudy.com/iframe/plUi3WOe6X", "year": 2025, "duration": "2h 05min", "rating": "4.6", "maturityRating": "18+", "featured": false },
  { "id": "20", "title": "Zootopie 2", "description": "Judy Hopps et Nick Wilde sont de retour.", "category": "Film", "genre": ["Animation", "Famille", "Aventure"], "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiiwo0ozOF4GR3zHZXstRLZFxiN0ii87Ez7w&s", "backdrop": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiiwo0ozOF4GR3zHZXstRLZFxiN0ii87Ez7w&s", "video_url": "https://vidzy.org/embed-tanvmu3n6m9w.html", "year": 2025, "duration": "1h 40min", "rating": "4.5", "maturityRating": "7+", "featured": false },
  { "id": "21", "title": "Zootopie", "description": "Une lapine policière et un renard escroc doivent faire équipe.", "category": "Film", "genre": ["Animation", "Famille"], "thumbnail": "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/019b2eff-aa60-7afd-baef-0ae7ca832329/compose?aspectRatio=1.78&format=webp&width=1200", "backdrop": "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/019b2eff-aa60-7afd-baef-0ae7ca832329/compose?aspectRatio=1.78&format=webp&width=1200", "video_url": "https://vidzy.org/embed-1xjt2lwo8d04.html", "year": 2016, "duration": "1h 48min", "rating": "4.8", "maturityRating": "7+", "featured": false },
  { "id": "22", "title": "Jurassic World : Renaissance", "description": "Une nouvelle ère jurassique commence.", "category": "Film", "genre": ["Sci-Fi", "Aventure"], "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUtT_CeQzCpMCeg_syW8WPT_AmGl4U5aRmDQ&s", "backdrop": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUtT_CeQzCpMCeg_syW8WPT_AmGl4U5aRmDQ&s", "video_url": "https://bramtiv.com/iframe/7gK3PHQtkw", "year": 2025, "duration": "2h 10min", "rating": "4.4", "maturityRating": "13+", "featured": false },
  { "id": "23", "title": "Blanche-Neige", "description": "L'adaptation en prise de vues réelles du classique de Disney.", "category": "Film", "genre": ["Fantastique", "Famille", "Musical"], "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN433B3BZwaR8m4IkjrWV7g8tg_gtaZGO4Yg&s", "backdrop": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN433B3BZwaR8m4IkjrWV7g8tg_gtaZGO4Yg&s", "video_url": "https://sharecloudy.com/iframe/oqBmAs3nPr", "year": 2025, "duration": "2h 00min", "rating": "4.1", "maturityRating": "7+", "featured": false },
  { "id": "24", "title": "Minecraft, le film", "description": "Quatre marginaux sont aspirés dans l'Overworld.", "category": "Film", "genre": ["Aventure", "Fantastique", "Famille"], "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOzZBfPvqhaG0THKwS9HgrQx3XWQGaJNk_Ow&s", "backdrop": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOzZBfPvqhaG0THKwS9HgrQx3XWQGaJNk_Ow&s", "video_url": "https://sharecloudy.com/iframe/pmbzgK4Q2G", "year": 2025, "duration": "1h 55min", "rating": "3.8", "maturityRating": "7+", "featured": false },
  { "id": "25", "title": "Lilo et Stitch", "description": "L'histoire d'une jeune fille hawaïenne et son alien.", "category": "Film", "genre": ["Famille", "Sci-Fi", "Comédie"], "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvYaypzIYnJJ2XMgzrpulULgfa9I0PaIbbXQ&s", "backdrop": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvYaypzIYnJJ2XMgzrpulULgfa9I0PaIbbXQ&s", "video_url": "https://vidzy.org/embed-7nb05d1oswly.html", "year": 2025, "duration": "1h 50min", "rating": "4.3", "maturityRating": "7+", "featured": false },
  { "id": "26", "title": "Ballerina", "description": "Spin-off de John Wick.", "category": "Film", "genre": ["Action", "Thriller"], "thumbnail": "https://atalantasapple.com/wp-content/uploads/2025/07/ballerina.jpg", "backdrop": "https://atalantasapple.com/wp-content/uploads/2025/07/ballerina.jpg", "video_url": "https://sharecloudy.com/iframe/LdbvTzEFLJ", "year": 2025, "duration": "2h 05min", "rating": "4.6", "maturityRating": "16+", "featured": false },
  { "id": "27", "title": "Paddington au Pérou", "description": "Paddington retourne au Pérou.", "category": "Film", "genre": ["Famille", "Aventure", "Comédie"], "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJfvoHYCojOnwV3II-tUaoiqsKU2vniseF3Q&s", "backdrop": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJfvoHYCojOnwV3II-tUaoiqsKU2vniseF3Q&s", "video_url": "https://bramtiv.com/iframe/ZZ9mPV4gH5", "year": 2025, "duration": "1h 45min", "rating": "4.7", "maturityRating": "Tous publics", "featured": false },
  { "id": "28", "title": "Paddington 2", "description": "Paddington en prison.", "category": "Film", "genre": ["Famille", "Aventure"], "thumbnail": "https://www.bang2write.com/wp-content/uploads/2017/12/111532-640x360-paddington-no-hat-640.jpg", "backdrop": "https://www.bang2write.com/wp-content/uploads/2017/12/111532-640x360-paddington-no-hat-640.jpg", "video_url": "https://sharecloudy.com/iframe/HI1PvO4QMx", "year": 2017, "duration": "1h 43min", "rating": "5.0", "maturityRating": "Tous publics", "featured": false },
  { "id": "29", "title": "Paddington", "description": "Un ours péruvien débarque à Londres.", "category": "Film", "genre": ["Famille", "Aventure"], "thumbnail": "https://entertainment-focus.com/wp-content/uploads/2015/11/rsz_12d_dvd_master_padd_lenticular.jpg", "backdrop": "https://entertainment-focus.com/wp-content/uploads/2015/11/rsz_12d_dvd_master_padd_lenticular.jpg", "video_url": "https://sharecloudy.com/iframe/AyESMaxQEE", "year": 2014, "duration": "1h 35min", "rating": "4.8", "maturityRating": "Tous publics", "featured": false },
  { "id": "30", "title": "Conjuring : L'Heure du jugement", "description": "Ed et Lorraine Warren face à leur cas le plus terrifiant.", "category": "Film", "genre": ["Horreur", "Mystère"], "thumbnail": "https://jvmag.ch/wp-content/uploads/2025/09/conjuring-heure-du-jugement-cover-JVMag.jpg", "backdrop": "https://jvmag.ch/wp-content/uploads/2025/09/conjuring-heure-du-jugement-cover-JVMag.jpg", "video_url": "https://sharecloudy.com/iframe/DP0Aw0fWQD", "year": 2025, "duration": "1h 52min", "rating": "4.2", "maturityRating": "16+", "featured": false },
  { "id": "31", "title": "Destination finale : Bloodlines", "description": "La mort a un nouveau plan.", "category": "Film", "genre": ["Horreur", "Thriller"], "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScp4RXPEZFBLcGXJU6xyKe2fVykDRAx7IvAg&s", "backdrop": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScp4RXPEZFBLcGXJU6xyKe2fVykDRAx7IvAg&s", "video_url": "https://sharecloudy.com/iframe/suvbRMnKVq", "year": 2025, "duration": "1h 40min", "rating": "4.0", "maturityRating": "16+", "featured": false },
  { "id": "32", "title": "Elio", "description": "Elio se retrouve transporté au Communiverse.", "category": "Film", "genre": ["Animation", "Sci-Fi", "Famille"], "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3hJ1xUfdI1RvHECL-PcckDuBh7kRNpSL6rg&s", "backdrop": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3hJ1xUfdI1RvHECL-PcckDuBh7kRNpSL6rg&s", "video_url": "https://sharecloudy.com/iframe/nKRZSFRRth", "year": 2025, "duration": "1h 45min", "rating": "4.5", "maturityRating": "Tous publics", "featured": false },
  { "id": "33", "title": "Frankenstein", "description": "Une nouvelle vision gothique.", "category": "Film", "genre": ["Horreur", "Drame"], "thumbnail": "https://cdn.mos.cms.futurecdn.net/DYgiM6K3WKweaHeGBFxau5.jpg", "backdrop": "https://cdn.mos.cms.futurecdn.net/DYgiM6K3WKweaHeGBFxau5.jpg", "video_url": "https://moovtop.fr/iframe/cuB0He5K9l", "year": 2025, "duration": "2h 10min", "rating": "4.3", "maturityRating": "16+", "featured": false },
  { "id": "34", "title": "Le Seigneur des Anneaux : La Guerre des Rohirrim", "description": "L'histoire de Helm Hammerhand.", "category": "Anime", "genre": ["Animation", "Fantastique", "Action"], "thumbnail": "https://i.ytimg.com/vi/UsWy4055b4I/maxresdefault.jpg", "backdrop": "https://i.ytimg.com/vi/UsWy4055b4I/maxresdefault.jpg", "video_url": "https://bramtiv.com/iframe/4wzswReHOj", "year": 2024, "duration": "2h 10min", "rating": "4.6", "maturityRating": "13+", "featured": false },
  { "id": "35", "title": "Novocaïne", "description": "Thriller d'action viscéral.", "category": "Film", "genre": ["Action", "Thriller"], "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh0dfeYQ6qGhT1kOcCBzB-VCfFD-A4ZS0FAQ&s", "backdrop": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh0dfeYQ6qGhT1kOcCBzB-VCfFD-A4ZS0FAQ&s", "video_url": "https://bramtiv.com/iframe/rAs9sG2rxO", "year": 2025, "duration": "1h 55min", "rating": "4.1", "maturityRating": "16+", "featured": false },
  { "id": "36", "title": "Beetlejuice Beetlejuice", "description": "Le fantôme est de retour.", "category": "Film", "genre": ["Comédie", "Fantastique", "Horreur"], "thumbnail": "https://www.filmofilia.com/wp-content/uploads/2024/08/Beetlejuice-Beetlejuice-1-scaled.jpg", "backdrop": "https://www.filmofilia.com/wp-content/uploads/2024/08/Beetlejuice-Beetlejuice-1-scaled.jpg", "video_url": "https://sharecloudy.com/iframe/Fm1aAgzDat", "year": 2024, "duration": "1h 45min", "rating": "4.4", "maturityRating": "13+", "featured": false },
  { "id": "37", "title": "Five Nights at Freddy's 2", "description": "Le retour terrifiant.", "category": "Film", "genre": ["Horreur", "Thriller"], "thumbnail": "https://attractionsmagazine.com/wp-content/uploads/2025/12/Five-Nights-at-Freddys-2-courtesy-of-Unviersal.jpg", "backdrop": "https://attractionsmagazine.com/wp-content/uploads/2025/12/Five-Nights-at-Freddys-2-courtesy-of-Unviersal.jpg", "video_url": "https://moovbob.fr/iframe/qWS1VKQBTc", "year": 2025, "duration": "1h 50min", "rating": "4.5", "maturityRating": "16+", "featured": false },
  { "id": "38", "title": "Five Nights at Freddy's", "description": "Survivre 5 nuits.", "category": "Film", "genre": ["Horreur", "Thriller"], "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOmtS4he0eZPMA7aVTxFyfikEI47YIjsV6YA&s", "backdrop": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOmtS4he0eZPMA7aVTxFyfikEI47YIjsV6YA&s", "video_url": "https://moovbob.fr/iframe/qBmUWKooE7", "year": 2023, "duration": "1h 50min", "rating": "4.3", "maturityRating": "16+", "featured": false },

  // --- Saga Fast & Furious ---
  { "id": "39", "title": "Fast X", "description": "La fin de la route commence.", "category": "Film", "genre": ["Action", "Thriller"], "thumbnail": "https://i.ytimg.com/vi/RgQPp3LFWUY/maxresdefault.jpg", "backdrop": "https://i.ytimg.com/vi/RgQPp3LFWUY/maxresdefault.jpg", "video_url": "https://sharecloudy.com/iframe/yxqmS1qzkv", "year": 2023, "duration": "2h 21min", "rating": "4.3", "maturityRating": "13+", "featured": false },
  { "id": "40", "title": "Fast & Furious 9", "description": "La famille s'agrandit.", "category": "Film", "genre": ["Action", "Thriller"], "thumbnail": "https://i.ytimg.com/vi/fEE4RO-_jug/maxresdefault.jpg", "backdrop": "https://i.ytimg.com/vi/fEE4RO-_jug/maxresdefault.jpg", "video_url": "https://sharecloudy.com/iframe/9SZIs2Pzwi", "year": 2021, "duration": "2h 23min", "rating": "4.2", "maturityRating": "13+", "featured": false },
  { "id": "41", "title": "Fast & Furious : Hobbs & Shaw", "description": "Duo de choc.", "category": "Film", "genre": ["Action", "Comédie"], "thumbnail": "https://photos.tf1.fr/330/186/vignette-16-9-fastandfurious-hobbsandshaw-e4174a-bb8941-0@3x.jpg", "backdrop": "https://photos.tf1.fr/330/186/vignette-16-9-fastandfurious-hobbsandshaw-e4174a-bb8941-0@3x.jpg", "video_url": "https://sharecloudy.com/iframe/zQtrvVm8SF", "year": 2019, "duration": "2h 17min", "rating": "4.4", "maturityRating": "13+", "featured": false },
  { "id": "42", "title": "Fast & Furious 8", "description": "Le destin des furieux.", "category": "Film", "genre": ["Action", "Thriller"], "thumbnail": "https://photos.tf1.fr/330/186/vignette-16-9-7fadb8-70f56b-0@3x.jpg", "backdrop": "https://photos.tf1.fr/330/186/vignette-16-9-7fadb8-70f56b-0@3x.jpg", "video_url": "https://sharecloudy.com/iframe/tRlc6X7neP", "year": 2017, "duration": "2h 16min", "rating": "4.5", "maturityRating": "13+", "featured": false },
  { "id": "43", "title": "Fast & Furious 7", "description": "Pour Paul.", "category": "Film", "genre": ["Action", "Thriller"], "thumbnail": "https://i.ytimg.com/vi/s4F2FNpTDf4/maxresdefault.jpg", "backdrop": "https://i.ytimg.com/vi/s4F2FNpTDf4/maxresdefault.jpg", "video_url": "https://sharecloudy.com/iframe/2jrkjKNb3Y", "year": 2015, "duration": "2h 17min", "rating": "4.8", "maturityRating": "13+", "featured": false },
  { "id": "44", "title": "Fast & Furious 6", "description": "Tous les chemins mènent au même endroit.", "category": "Film", "genre": ["Action", "Thriller"], "thumbnail": "https://photos.tf1.fr/330/186/vignette-16-9-fast-and-furious-6-f6c709-052369-0@3x.jpg", "backdrop": "https://photos.tf1.fr/330/186/vignette-16-9-fast-and-furious-6-f6c709-052369-0@3x.jpg", "video_url": "https://sharecloudy.com/iframe/GE7c1xPcoh", "year": 2013, "duration": "2h 10min", "rating": "4.6", "maturityRating": "13+", "featured": false },
  { "id": "45", "title": "Fast & Furious 5", "description": "Le braquage de Rio.", "category": "Film", "genre": ["Action", "Thriller"], "thumbnail": "https://photos.tf1.fr/1200/720/vignette-16-9-fastandfurious5-a432c1-9d73aa-0@1x.jpg", "backdrop": "https://photos.tf1.fr/1200/720/vignette-16-9-fastandfurious5-a432c1-9d73aa-0@1x.jpg", "video_url": "https://sharecloudy.com/iframe/yD6j7OqNCv", "year": 2011, "duration": "2h 10min", "rating": "4.9", "maturityRating": "13+", "featured": false },
  { "id": "46", "title": "Fast and Furious 4", "description": "Nouveau modèle. Pièces d'origine.", "category": "Film", "genre": ["Action", "Thriller"], "thumbnail": "https://photos.tf1.fr/330/186/vignette-16-9-fast-and-furious-4-f6d14f-78cb23-0@3x.jpg", "backdrop": "https://photos.tf1.fr/330/186/vignette-16-9-fast-and-furious-4-f6d14f-78cb23-0@3x.jpg", "video_url": "https://sharecloudy.com/iframe/0pxpieEoja", "year": 2009, "duration": "1h 47min", "rating": "4.1", "maturityRating": "13+", "featured": false },
  { "id": "47", "title": "Fast & Furious : Tokyo Drift", "description": "Le drift à Tokyo.", "category": "Film", "genre": ["Action", "Course"], "thumbnail": "https://proxymedia.woopic.com/api/v1/images/331%2Ffast-and-furious-3-tokyo-drift%7CFASTFURIOUSW0015118_BAN1_2424_NEWTV_HD.jpg", "backdrop": "https://proxymedia.woopic.com/api/v1/images/331%2Ffast-and-furious-3-tokyo-drift%7CFASTFURIOUSW0015118_BAN1_2424_NEWTV_HD.jpg", "video_url": "https://sharecloudy.com/iframe/tm7wShdLM4", "year": 2006, "duration": "1h 44min", "rating": "4.2", "maturityRating": "13+", "featured": false },
  { "id": "48", "title": "2 Fast 2 Furious", "description": "Trop rapide, trop furieux.", "category": "Film", "genre": ["Action", "Thriller"], "thumbnail": "https://ntvb.tmsimg.com/assets/p32092_v_h8_ba.jpg?w=1280&h=720", "backdrop": "https://ntvb.tmsimg.com/assets/p32092_v_h8_ba.jpg?w=1280&h=720", "video_url": "https://sharecloudy.com/iframe/M5f5fKUkBQ", "year": 2003, "duration": "1h 47min", "rating": "4.0", "maturityRating": "13+", "featured": false },
  { "id": "49", "title": "Fast and Furious", "description": "Là où tout a commencé.", "category": "Film", "genre": ["Action", "Thriller"], "thumbnail": "https://wallpapers.com/images/hd/fast-and-furious-1-ldu86nwo99ibn6yt.jpg", "backdrop": "https://wallpapers.com/images/hd/fast-and-furious-1-ldu86nwo99ibn6yt.jpg", "video_url": "https://sharecloudy.com/iframe/LKOmMBdTDO", "year": 2001, "duration": "1h 46min", "rating": "4.7", "maturityRating": "13+", "featured": false },

  // --- Saga Jurassic ---
  { "id": "50", "title": "Jurassic Park", "description": "Des scientifiques clonent des dinosaures pour un parc à thème qui tourne mal.", "category": "Film", "genre": ["Sci-Fi", "Aventure"], "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThrcaGIj0S2snZxOOZqU_JlFvXW1PqWyoMHA&s", "backdrop": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThrcaGIj0S2snZxOOZqU_JlFvXW1PqWyoMHA&s", "video_url": "https://bramtiv.com/iframe/46ycsLXFCU", "year": 1993, "duration": "2h 07min", "rating": "4.9", "maturityRating": "13+", "featured": false },
  { "id": "51", "title": "Le monde perdu : Jurassic Park", "description": "Une seconde île aux dinosaures est révélée.", "category": "Film", "genre": ["Sci-Fi", "Aventure"], "thumbnail": "https://s2.dmcdn.net/v/VYHSh1eoWzP0oGML_/x1080", "backdrop": "https://s2.dmcdn.net/v/VYHSh1eoWzP0oGML_/x1080", "video_url": "https://bramtiv.com/iframe/oElX8sZ2ol", "year": 1997, "duration": "2h 09min", "rating": "4.2", "maturityRating": "13+", "featured": false },
  { "id": "52", "title": "Jurassic Park III", "description": "Le docteur Alan Grant retourne sur l'île malgré lui.", "category": "Film", "genre": ["Sci-Fi", "Aventure"], "thumbnail": "https://i.ytimg.com/vi/C9yMaLlXisg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBuUpkC13mQ5Tl4fL1YNoQ7hWHtZg", "backdrop": "https://i.ytimg.com/vi/C9yMaLlXisg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBuUpkC13mQ5Tl4fL1YNoQ7hWHtZg", "video_url": "https://bramtiv.com/iframe/U4zDlaik0c", "year": 2001, "duration": "1h 32min", "rating": "3.9", "maturityRating": "13+", "featured": false },
  { "id": "53", "title": "Jurassic World", "description": "Le parc est enfin ouvert, mais une nouvelle création s'échappe.", "category": "Film", "genre": ["Sci-Fi", "Aventure"], "thumbnail": "https://static1.squarespace.com/static/54e310f0e4b0f4a6ba3ac899/t/68c5363b043dbc22647a3b21/1738328631622/?format=1500w", "backdrop": "https://static1.squarespace.com/static/54e310f0e4b0f4a6ba3ac899/t/68c5363b043dbc22647a3b21/1738328631622/?format=1500w", "video_url": "https://bramtiv.com/iframe/YNobh2XhQQ", "year": 2015, "duration": "2h 04min", "rating": "4.5", "maturityRating": "13+", "featured": false },
  { "id": "54", "title": "Jurassic World : Fallen Kingdom", "description": "Sauver les dinosaures d'une éruption volcanique.", "category": "Film", "genre": ["Sci-Fi", "Aventure"], "thumbnail": "https://ntvb.tmsimg.com/assets/p13446763_v_h10_bi.jpg?w=960&h=540", "backdrop": "https://ntvb.tmsimg.com/assets/p13446763_v_h10_bi.jpg?w=960&h=540", "video_url": "https://bramtiv.com/iframe/NYj0bnXhEP", "year": 2018, "duration": "2h 08min", "rating": "4.1", "maturityRating": "13+", "featured": false },
  { "id": "55", "title": "Jurassic World : Le Monde d’après", "description": "Les dinosaures vivent désormais parmi les humains.", "category": "Film", "genre": ["Sci-Fi", "Aventure"], "thumbnail": "https://m.media-amazon.com/images/S/pv-target-images/12dbae5225b7a2c62e346aefdb2961bfd4e261ee70bbd475a35f75c9e6f7931f.jpg", "backdrop": "https://m.media-amazon.com/images/S/pv-target-images/12dbae5225b7a2c62e346aefdb2961bfd4e261ee70bbd475a35f75c9e6f7931f.jpg", "video_url": "https://sharecloudy.com/iframe/Q7Ews2plQa", "year": 2022, "duration": "2h 27min", "rating": "4.0", "maturityRating": "13+", "featured": false },

  // --- Saga Star Wars ---
  { "id": "56", "title": "La Guerre des étoiles", "description": "Luke Skywalker rejoint la Rébellion contre l'Empire.", "category": "Film", "genre": ["Sci-Fi", "Fantastique"], "thumbnail": "https://i.ytimg.com/vi/rfGNDtwlRHM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBwMDlZiWZ8U7UWWeqPvkWXfvFgLA", "backdrop": "https://i.ytimg.com/vi/rfGNDtwlRHM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBwMDlZiWZ8U7UWWeqPvkWXfvFgLA", "video_url": "https://sharecloudy.com/iframe/LCJwZ02g55", "year": 1977, "duration": "2h 01min", "rating": "5.0", "maturityRating": "Tous publics", "featured": false },
  { "id": "57", "title": "L'Empire contre-attaque", "description": "Dark Vador traque Luke et ses amis à travers la galaxie.", "category": "Film", "genre": ["Sci-Fi", "Fantastique"], "thumbnail": "https://proxymedia.woopic.com/api/v1/images/331%2Fstar-wars-l-empire-contre-attaque%7CSTARWARSLEMW0098739_BAN1_2424_NEWTV_HD.jpg?format=512x&saveas=webp&saveasquality=70", "backdrop": "https://proxymedia.woopic.com/api/v1/images/331%2Fstar-wars-l-empire-contre-attaque%7CSTARWARSLEMW0098739_BAN1_2424_NEWTV_HD.jpg?format=512x&saveas=webp&saveasquality=70", "video_url": "https://sharecloudy.com/iframe/wDLTOwzI0n", "year": 1980, "duration": "2h 04min", "rating": "5.0", "maturityRating": "Tous publics", "featured": false },
  { "id": "58", "title": "Le Retour du Jedi", "description": "L'ultime confrontation entre Luke et son père.", "category": "Film", "genre": ["Sci-Fi", "Fantastique"], "thumbnail": "https://www.disneypixar.fr/medias/fullsize/e2baae19c7b0e8955fa681fc3061d1e6_star-wars-episode-vi-le-retour-du-jedi.jpg", "backdrop": "https://www.disneypixar.fr/medias/fullsize/e2baae19c7b0e8955fa681fc3061d1e6_star-wars-episode-vi-le-retour-du-jedi.jpg", "video_url": "https://sharecloudy.com/iframe/pdiIK7DprF", "year": 1983, "duration": "2h 11min", "rating": "4.9", "maturityRating": "Tous publics", "featured": false },
  { "id": "59", "title": "Star Wars : La Menace fantôme", "description": "Deux Jedi découvrent un jeune garçon puissant sur Tatooine.", "category": "Film", "genre": ["Sci-Fi", "Fantastique"], "thumbnail": "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/ffe91367-db1c-4159-b9bd-f79be3e5955a/compose?aspectRatio=1.78&format=webp&width=1200", "backdrop": "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/ffe91367-db1c-4159-b9bd-f79be3e5955a/compose?aspectRatio=1.78&format=webp&width=1200", "video_url": "https://sharecloudy.com/iframe/mdOrVGrCRU", "year": 1999, "duration": "2h 16min", "rating": "4.0", "maturityRating": "Tous publics", "featured": false },
  { "id": "60", "title": "Star Wars : L'Attaque des clones", "description": "Anakin Skywalker succombe à l'amour interdit et aux tentations.", "category": "Film", "genre": ["Sci-Fi", "Fantastique"], "thumbnail": "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/5ba7e619-d209-4cf3-81f5-fabe9b94f3d4/compose?aspectRatio=1.78&format=webp&width=1200", "backdrop": "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/5ba7e619-d209-4cf3-81f5-fabe9b94f3d4/compose?aspectRatio=1.78&format=webp&width=1200", "video_url": "https://sharecloudy.com/iframe/4rUKIakmH8", "year": 2002, "duration": "2h 22min", "rating": "4.1", "maturityRating": "Tous publics", "featured": false },
  { "id": "61", "title": "Star Wars : La Revanche des Sith", "description": "La chute de la République et la naissance de Dark Vador.", "category": "Film", "genre": ["Sci-Fi", "Fantastique"], "thumbnail": "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/cb6ac150-c5e5-49be-85bb-18a5c349d61c/compose?aspectRatio=1.78&format=webp&width=1200", "backdrop": "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/cb6ac150-c5e5-49be-85bb-18a5c349d61c/compose?aspectRatio=1.78&format=webp&width=1200", "video_url": "https://sharecloudy.com/iframe/UZhsVs6jxu", "year": 2005, "duration": "2h 20min", "rating": "4.8", "maturityRating": "13+", "featured": false },
  { "id": "62", "title": "Star Wars : Le Réveil de la Force", "description": "Une nouvelle menace émerge des cendres de l'Empire.", "category": "Film", "genre": ["Sci-Fi", "Fantastique"], "thumbnail": "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/cfb349dd-303c-464c-a6ee-b52051ca209f/compose?aspectRatio=1.78&format=webp&width=1200", "backdrop": "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/cfb349dd-303c-464c-a6ee-b52051ca209f/compose?aspectRatio=1.78&format=webp&width=1200", "video_url": "https://sharecloudy.com/iframe/gdBCz8xD0s", "year": 2015, "duration": "2h 18min", "rating": "4.5", "maturityRating": "13+", "featured": false },
  { "id": "63", "title": "Star Wars : Les Derniers Jedi", "description": "Rey développe ses pouvoirs avec l'aide de Luke Skywalker.", "category": "Film", "genre": ["Sci-Fi", "Fantastique"], "thumbnail": "https://proxymedia.woopic.com/api/v1/images/331%2FSTARWARSLESW0137953_BAN1_2424_NEWTV_HD.jpg", "backdrop": "https://proxymedia.woopic.com/api/v1/images/331%2FSTARWARSLESW0137953_BAN1_2424_NEWTV_HD.jpg", "video_url": "https://sharecloudy.com/iframe/0fbMbB1ogz", "year": 2017, "duration": "2h 32min", "rating": "4.2", "maturityRating": "13+", "featured": false },
  { "id": "64", "title": "Star Wars : L'Ascension de Skywalker", "description": "La conclusion épique de la saga Skywalker.", "category": "Film", "genre": ["Sci-Fi", "Fantastique"], "thumbnail": "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/1251fb52-cd93-4dd9-8281-a85125b3ec55/compose?aspectRatio=1.78&format=webp&width=1200", "backdrop": "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/1251fb52-cd93-4dd9-8281-a85125b3ec55/compose?aspectRatio=1.78&format=webp&width=1200", "video_url": "https://sharecloudy.com/iframe/JXtv2iyHl1", "year": 2019, "duration": "2h 22min", "rating": "4.0", "maturityRating": "13+", "featured": false },

  // --- Saga Harry Potter & Animaux Fantastiques ---
  { "id": "65", "title": "Harry Potter à l'école des sorciers", "description": "Un orphelin découvre qu'il est un sorcier.", "category": "Film", "genre": ["Fantastique", "Aventure"], "thumbnail": "https://i.ytimg.com/vi/UMs6IqPievo/maxresdefault.jpg", "backdrop": "https://i.ytimg.com/vi/UMs6IqPievo/maxresdefault.jpg", "video_url": "https://sharecloudy.com/iframe/jFdo9AcEa4", "year": 2001, "duration": "2h 32min", "rating": "4.9", "maturityRating": "Tous publics", "featured": false },
  { "id": "66", "title": "Harry Potter et la Chambre des secrets", "description": "Harry retourne à Poudlard malgré une mise en garde.", "category": "Film", "genre": ["Fantastique", "Aventure"], "thumbnail": "https://i.ytimg.com/vi/XrduUzX6tRw/maxresdefault.jpg", "backdrop": "https://i.ytimg.com/vi/XrduUzX6tRw/maxresdefault.jpg", "video_url": "https://sharecloudy.com/iframe/H1b5510Lto", "year": 2002, "duration": "2h 41min", "rating": "4.8", "maturityRating": "Tous publics", "featured": false },
  { "id": "67", "title": "Harry Potter et le Prisonnier d'Azkaban", "description": "Un dangereux sorcier s'échappe de la prison d'Azkaban.", "category": "Film", "genre": ["Fantastique", "Aventure"], "thumbnail": "https://beam-images.warnermediacdn.com/BEAM_LWM_DELIVERABLES/73553a76-1658-45f6-9e26-1b9c4443b0d6/3513f636-582f-481f-b5bb-b435e2d04d08?host=wbd-images.prod-vod.h264.io&partner=beamcom", "backdrop": "https://beam-images.warnermediacdn.com/BEAM_LWM_DELIVERABLES/73553a76-1658-45f6-9e26-1b9c4443b0d6/3513f636-582f-481f-b5bb-b435e2d04d08?host=wbd-images.prod-vod.h264.io&partner=beamcom", "video_url": "https://sharecloudy.com/iframe/Iuj9jJyMOk", "year": 2004, "duration": "2h 22min", "rating": "4.9", "maturityRating": "Tous publics", "featured": false },
  { "id": "68", "title": "Harry Potter et la Coupe de feu", "description": "Le tournoi des trois sorciers.", "category": "Film", "genre": ["Fantastique", "Aventure"], "thumbnail": "https://proxymedia.woopic.com/api/v1/images/331%2FHARRYPOTTERW0027066_BAN1_2424_NEWTV_UHD.jpg", "backdrop": "https://proxymedia.woopic.com/api/v1/images/331%2FHARRYPOTTERW0027066_BAN1_2424_NEWTV_UHD.jpg", "video_url": "https://sharecloudy.com/iframe/nCKt188dl6", "year": 2005, "duration": "2h 37min", "rating": "4.8", "maturityRating": "13+", "featured": false },
  { "id": "69", "title": "Harry Potter et l'Ordre du Phénix", "description": "La rébellion commence à Poudlard.", "category": "Film", "genre": ["Fantastique", "Aventure"], "thumbnail": "https://i.ytimg.com/vi/3NE9IGZ2t2g/maxresdefault.jpg", "backdrop": "https://i.ytimg.com/vi/3NE9IGZ2t2g/maxresdefault.jpg", "video_url": "https://sharecloudy.com/iframe/dT6HFqczSV", "year": 2007, "duration": "2h 18min", "rating": "4.7", "maturityRating": "13+", "featured": false },
  { "id": "70", "title": "Harry Potter et le Prince de sang-mêlé", "description": "Harry découvre un vieux livre de potions mystérieux.", "category": "Film", "genre": ["Fantastique", "Aventure"], "thumbnail": "https://proxymedia.woopic.com/api/v1/images/331%2FHARRYPOTTERW0015105_BAN1_2424_NEWTV_UHD.jpg", "backdrop": "https://proxymedia.woopic.com/api/v1/images/331%2FHARRYPOTTERW0015105_BAN1_2424_NEWTV_UHD.jpg", "video_url": "https://sharecloudy.com/iframe/6DEXDb8iVH", "year": 2009, "duration": "2h 33min", "rating": "4.8", "maturityRating": "13+", "featured": false },
  { "id": "71", "title": "Harry Potter et les Reliques de la Mort - Partie 1", "description": "La chasse aux Horcruxes commence.", "category": "Film", "genre": ["Fantastique", "Aventure"], "thumbnail": "https://proxymedia.woopic.com/api/v1/images/331%2FHARRYPOTTERW0027161_BAN1_2424_NEWTV_UHD.jpg", "backdrop": "https://proxymedia.woopic.com/api/v1/images/331%2FHARRYPOTTERW0027161_BAN1_2424_NEWTV_UHD.jpg", "video_url": "https://sharecloudy.com/iframe/gc7lXDEmns", "year": 2010, "duration": "2h 26min", "rating": "4.9", "maturityRating": "13+", "featured": false },
  { "id": "72", "title": "Harry Potter et les Reliques de la Mort - Partie 2", "description": "La bataille finale pour Poudlard.", "category": "Film", "genre": ["Fantastique", "Aventure"], "thumbnail": "https://proxymedia.woopic.com/api/v1/images/331%2FHARRYPOTTERW0057946_BAN1_2424_NEWTV_UHD.jpg", "backdrop": "https://proxymedia.woopic.com/api/v1/images/331%2FHARRYPOTTERW0057946_BAN1_2424_NEWTV_UHD.jpg", "video_url": "https://sharecloudy.com/iframe/Iuj9jJyMOk", "year": 2011, "duration": "2h 10min", "rating": "5.0", "maturityRating": "13+", "featured": false },
  { "id": "153", "title": "Les Animaux Fantastiques", "description": "Newt Scamander arrive à New York avec sa valise magique.", "category": "Film", "genre": ["Fantastique", "Aventure"], "thumbnail": "https://i0.wp.com/carnetdesgeekeries.com/wp-content/uploads/2017/01/Les-Animaux-Fantastiques.jpg?fit=664%2C347&ssl=1", "backdrop": "https://i0.wp.com/carnetdesgeekeries.com/wp-content/uploads/2017/01/Les-Animaux-Fantastiques.jpg?fit=664%2C347&ssl=1", "video_url": "https://sharecloudy.com/iframe/3WrwRG5VDd", "year": 2016, "duration": "2h 13min", "rating": "4.5", "maturityRating": "13+", "featured": false },
  { "id": "154", "title": "Les Animaux Fantastiques : Les Crimes de Grindelwald", "description": "Grindelwald rassemble ses adeptes.", "category": "Film", "genre": ["Fantastique", "Aventure"], "thumbnail": "https://www.notrecinema.com/images/cache/les-animaux-fantastiques-les-crimes-de-grindelwald-wallpaper_572362_14371.jpg", "backdrop": "https://www.notrecinema.com/images/cache/les-animaux-fantastiques-les-crimes-de-grindelwald-wallpaper_572362_14371.jpg", "video_url": "https://sharecloudy.com/iframe/68IysrO9p8", "year": 2018, "duration": "2h 14min", "rating": "4.3", "maturityRating": "13+", "featured": false },
  { "id": "155", "title": "Les Animaux fantastiques : Les Secrets de Dumbledore", "description": "Dumbledore confie une mission dangereuse à Newt.", "category": "Film", "genre": ["Fantastique", "Aventure"], "thumbnail": "https://www.gazette-du-sorcier.com/wp-content/uploads/2022/04/Secrets-de-Dumbledore-banner-titre-AF3-700x394.png", "backdrop": "https://www.gazette-du-sorcier.com/wp-content/uploads/2022/04/Secrets-de-Dumbledore-banner-titre-AF3-700x394.png", "video_url": "https://sharecloudy.com/iframe/RrQxyUwMXw", "year": 2022, "duration": "2h 22min", "rating": "4.2", "maturityRating": "13+", "featured": false },

  // --- Saga Mission Impossible ---
  { "id": "73", "title": "Mission : Impossible", "description": "Ethan Hunt est accusé de trahison.", "category": "Film", "genre": ["Action", "Espionnage"], "thumbnail": "https://i.ytimg.com/vi/psmnxpwwvCQ/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBb6j0EmlHKHZ6kPeRrrBZUr5OgrQ", "backdrop": "https://i.ytimg.com/vi/psmnxpwwvCQ/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBb6j0EmlHKHZ6kPeRrrBZUr5OgrQ", "video_url": "https://sharecloudy.com/iframe/hZgM0k58zl", "year": 1996, "duration": "1h 50min", "rating": "4.6", "maturityRating": "13+", "featured": false },
  { "id": "74", "title": "Mission : Impossible 2", "description": "Ethan Hunt doit stopper un virus mortel.", "category": "Film", "genre": ["Action", "Espionnage"], "thumbnail": "https://thumbnails.cbsig.net/CBS_Production_Entertainment_VMS/2021/01/09/1842230851597/MI2_SAlone_THM_16.9_1920x1080_1277857_1920x1080.jpg", "backdrop": "https://thumbnails.cbsig.net/CBS_Production_Entertainment_VMS/2021/01/09/1842230851597/MI2_SAlone_THM_16.9_1920x1080_1277857_1920x1080.jpg", "video_url": "https://sharecloudy.com/iframe/cXveeT1c7Q", "year": 2000, "duration": "2h 03min", "rating": "4.1", "maturityRating": "13+", "featured": false },
  { "id": "75", "title": "Mission : Impossible 3", "description": "Ethan Hunt affronte un dangereux trafiquant d'armes.", "category": "Film", "genre": ["Action", "Espionnage"], "thumbnail": "https://i.ytimg.com/vi/HMHB0NN40b4/maxresdefault.jpg", "backdrop": "https://i.ytimg.com/vi/HMHB0NN40b4/maxresdefault.jpg", "video_url": "https://sharecloudy.com/iframe/i4VI7XKHQ1", "year": 2006, "duration": "2h 06min", "rating": "4.5", "maturityRating": "13+", "featured": false },
  { "id": "76", "title": "Mission : Impossible - Protocole Fantôme", "description": "L'IMF est dissoute après un attentat au Kremlin.", "category": "Film", "genre": ["Action", "Espionnage"], "thumbnail": "https://i.ytimg.com/vi/JnafGlF4Uy4/maxresdefault.jpg", "backdrop": "https://i.ytimg.com/vi/JnafGlF4Uy4/maxresdefault.jpg", "video_url": "https://sharecloudy.com/iframe/zGPmxuDASm", "year": 2011, "duration": "2h 13min", "rating": "4.8", "maturityRating": "13+", "featured": false },
  { "id": "77", "title": "Mission : Impossible - Rogue Nation", "description": "Ethan chasse le Syndicat.", "category": "Film", "genre": ["Action", "Espionnage"], "thumbnail": "https://i.ytimg.com/vi/Jsya9xCVLUk/maxresdefault.jpg", "backdrop": "https://i.ytimg.com/vi/Jsya9xCVLUk/maxresdefault.jpg", "video_url": "https://sharecloudy.com/iframe/BejafGiYTN", "year": 2015, "duration": "2h 11min", "rating": "4.7", "maturityRating": "13+", "featured": false },
  { "id": "78", "title": "Mission : Impossible - Fallout", "description": "Ethan Hunt court contre la montre après une mission ratée.", "category": "Film", "genre": ["Action", "Espionnage"], "thumbnail": "https://i.ytimg.com/vi/GH94euhUeL8/maxresdefault.jpg", "backdrop": "https://i.ytimg.com/vi/GH94euhUeL8/maxresdefault.jpg", "video_url": "https://sharecloudy.com/iframe/Js1yPrgsoH", "year": 2018, "duration": "2h 27min", "rating": "4.9", "maturityRating": "13+", "featured": false },
  { "id": "79", "title": "Mission : Impossible - Dead Reckoning Partie 1", "description": "Une nouvelle arme menace l'humanité.", "category": "Film", "genre": ["Action", "Espionnage"], "thumbnail": "https://popcult.blog/wp-content/uploads/2023/12/mi-dead-01-banner.png", "backdrop": "https://popcult.blog/wp-content/uploads/2023/12/mi-dead-01-banner.png", "video_url": "https://sharecloudy.com/iframe/RvJebdiPMT", "year": 2023, "duration": "2h 43min", "rating": "4.8", "maturityRating": "13+", "featured": false },

  // --- Horreur / Frissons ---
  { "id": "80", "title": "The Monkey", "description": "D'après Stephen King.", "category": "Film", "genre": ["Horreur", "Thriller"], "thumbnail": "https://images.squarespace-cdn.com/content/v1/54e310f0e4b0f4a6ba3ac899/4b3ed1c4-c244-4670-af82-f700152b9108/The+Monkey+Theatrical+Poster+650.jpg", "backdrop": "https://images.squarespace-cdn.com/content/v1/54e310f0e4b0f4a6ba3ac899/4b3ed1c4-c244-4670-af82-f700152b9108/The+Monkey+Theatrical+Poster+650.jpg", "video_url": "https://sharecloudy.com/iframe/tRSgKCUPl5", "year": 2025, "duration": "1h 50min", "rating": "4.2", "maturityRating": "16+", "featured": false },
  { "id": "81", "title": "Destination finale", "description": "On ne trompe pas la mort.", "category": "Film", "genre": ["Horreur", "Thriller"], "thumbnail": "https://a.ltrbxd.com/resized/sm/upload/8h/qd/17/cc/final-destination-1200-1200-675-675-crop-000000.jpg?v=78c2daccf8", "backdrop": "https://a.ltrbxd.com/resized/sm/upload/8h/qd/17/cc/final-destination-1200-1200-675-675-crop-000000.jpg?v=78c2daccf8", "video_url": "https://sharecloudy.com/iframe/VWGixAUsuZ", "year": 2000, "duration": "1h 38min", "rating": "4.3", "maturityRating": "16+", "featured": false },
  { "id": "82", "title": "Destination finale 2", "description": "La mort recommence son plan sur l'autoroute.", "category": "Film", "genre": ["Horreur", "Thriller"], "thumbnail": "https://i.ytimg.com/vi/rHgYhxQOV_M/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAPuoe4u0BgideA7BMPIR3QxIUd2Q", "backdrop": "https://i.ytimg.com/vi/rHgYhxQOV_M/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAPuoe4u0BgideA7BMPIR3QxIUd2Q", "video_url": "https://sharecloudy.com/iframe/obY9sqOXh1", "year": 2003, "duration": "1h 30min", "rating": "4.1", "maturityRating": "16+", "featured": false },
  { "id": "83", "title": "Destination finale 3", "description": "Méfiez-vous des montagnes russes.", "category": "Film", "genre": ["Horreur", "Thriller"], "thumbnail": "https://horrorghouls.com/wp-content/uploads/2025/05/final-destination-3-horror-movie-review-768x432.jpg", "backdrop": "https://horrorghouls.com/wp-content/uploads/2025/05/final-destination-3-horror-movie-review-768x432.jpg", "video_url": "https://sharecloudy.com/iframe/jpYF9Pxl46", "year": 2006, "duration": "1h 33min", "rating": "4.0", "maturityRating": "16+", "featured": false },
  { "id": "84", "title": "Destination finale 4", "description": "La mort au circuit.", "category": "Film", "genre": ["Horreur", "Thriller"], "thumbnail": "https://i.ytimg.com/vi/6ew2Ll7Nzaw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLA06cpEwP6O3wDzFg2Jpv_c-oUphQ", "backdrop": "https://i.ytimg.com/vi/6ew2Ll7Nzaw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLA06cpEwP6O3wDzFg2Jpv_c-oUphQ", "video_url": "https://sharecloudy.com/iframe/CDxqeJxYsS", "year": 2009, "duration": "1h 22min", "rating": "3.8", "maturityRating": "16+", "featured": false },
  { "id": "85", "title": "Destination finale 5", "description": "On ne triche pas avec la mort.", "category": "Film", "genre": ["Horreur", "Thriller"], "thumbnail": "https://i.ytimg.com/vi/BLSCBUNsv2o/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBVT-WYd0DnpNL7BGWu3I0D3EqaMw", "backdrop": "https://i.ytimg.com/vi/BLSCBUNsv2o/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBVT-WYd0DnpNL7BGWu3I0D3EqaMw", "video_url": "https://sharecloudy.com/iframe/1ynX30rQNW", "year": 2011, "duration": "1h 32min", "rating": "4.4", "maturityRating": "16+", "featured": false },

  // --- Pirates des Caraïbes ---
  { "id": "86", "title": "Pirates des Caraïbes : La Malédiction du Black Pearl", "description": "Jack Sparrow cherche à récupérer son navire.", "category": "Film", "genre": ["Aventure", "Fantastique"], "thumbnail": "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/7f69f1fe-1382-48aa-85db-17a2398fde68/compose?aspectRatio=1.78&format=webp&width=1200", "backdrop": "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/7f69f1fe-1382-48aa-85db-17a2398fde68/compose?aspectRatio=1.78&format=webp&width=1200", "video_url": "https://sharecloudy.com/iframe/r7g3ZhoTi3", "year": 2003, "duration": "2h 23min", "rating": "4.9", "maturityRating": "13+", "featured": false },
  { "id": "87", "title": "Pirates des Caraïbes : Le Secret du coffre maudit", "description": "Jack Sparrow a une dette envers Davy Jones.", "category": "Film", "genre": ["Aventure", "Fantastique"], "thumbnail": "https://proxymedia.woopic.com/api/v1/images/331%2FPIRATESDESCW0039910_BAN1_2424_NEWTV_HD.jpg", "backdrop": "https://proxymedia.woopic.com/api/v1/images/331%2FPIRATESDESCW0039910_BAN1_2424_NEWTV_HD.jpg", "video_url": "https://sharecloudy.com/iframe/yotVs50FYt", "year": 2006, "duration": "2h 31min", "rating": "4.8", "maturityRating": "13+", "featured": false },
  { "id": "88", "title": "Pirates des Caraïbes : Jusqu'au bout du monde", "description": "Will et Elizabeth naviguent vers le bout du monde.", "category": "Film", "genre": ["Aventure", "Fantastique"], "thumbnail": "https://proxymedia.woopic.com/api/v1/images/331%2FPIRATESDESCW0039911_BAN1_2424_NEWTV_HD.jpg", "backdrop": "https://proxymedia.woopic.com/api/v1/images/331%2FPIRATESDESCW0039911_BAN1_2424_NEWTV_HD.jpg", "video_url": "https://sharecloudy.com/iframe/qV1ikItMVr", "year": 2007, "duration": "2h 49min", "rating": "4.7", "maturityRating": "13+", "featured": false },
  { "id": "89", "title": "Pirates des Caraïbes : La Fontaine de jouvence", "description": "Jack Sparrow part à la recherche de la fontaine de jouvence.", "category": "Film", "genre": ["Aventure", "Fantastique"], "thumbnail": "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/019b2f1b-c3e3-7126-8323-d84cf838bf5f/compose?aspectRatio=1.78&format=webp&width=1200", "backdrop": "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/019b2f1b-c3e3-7126-8323-d84cf838bf5f/compose?aspectRatio=1.78&format=webp&width=1200", "video_url": "https://sharecloudy.com/iframe/mGOUuJSdH9", "year": 2011, "duration": "2h 16min", "rating": "4.2", "maturityRating": "13+", "featured": false },
  { "id": "90", "title": "Pirates des Caraïbes : La Vengeance de Salazar", "description": "Un ennemi terrifiant s'échappe du Triangle du Diable.", "category": "Film", "genre": ["Aventure", "Fantastique"], "thumbnail": "https://m.media-amazon.com/images/S/pv-target-images/136d8c3daf9445ff5127d4e7db4c6201e4247fc9f9eb25e8bce6adb5d9b08a80.jpg", "backdrop": "https://m.media-amazon.com/images/S/pv-target-images/136d8c3daf9445ff5127d4e7db4c6201e4247fc9f9eb25e8bce6adb5d9b08a80.jpg", "video_url": "https://sharecloudy.com/iframe/YkHsAu0QZ1", "year": 2017, "duration": "2h 09min", "rating": "4.3", "maturityRating": "13+", "featured": false },

  // --- Saga Alien ---
  { "id": "95", "title": "Alien, le huitième passager", "description": "Dans l'espace, personne ne vous entend crier.", "category": "Film", "genre": ["Sci-Fi", "Horreur"], "thumbnail": "https://proxymedia.woopic.com/api/v1/images/331%2Falien-le-huitieme-passager%7CALIENLEHUITW0045793_BAN1_2424_NEWTV_HD.jpg", "backdrop": "https://proxymedia.woopic.com/api/v1/images/331%2Falien-le-huitieme-passager%7CALIENLEHUITW0045793_BAN1_2424_NEWTV_HD.jpg", "video_url": "https://sharecloudy.com/iframe/q8q8Rb0UVc", "year": 1979, "duration": "1h 57min", "rating": "4.9", "maturityRating": "16+", "featured": false },
  { "id": "96", "title": "Aliens, le retour", "description": "Ripley retourne sur LV-426.", "category": "Film", "genre": ["Sci-Fi", "Action"], "thumbnail": "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/b947d3cf-02b1-47c9-98e2-24a64845502d/compose?aspectRatio=1.78&format=webp&width=1200", "backdrop": "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/b947d3cf-02b1-47c9-98e2-24a64845502d/compose?aspectRatio=1.78&format=webp&width=1200", "video_url": "https://sharecloudy.com/iframe/PuHzVuH77O", "year": 1986, "duration": "2h 17min", "rating": "4.9", "maturityRating": "16+", "featured": false },
  { "id": "97", "title": "Alien³", "description": "Ripley s'écrase sur une planète prison.", "category": "Film", "genre": ["Sci-Fi", "Horreur"], "thumbnail": "https://i.ytimg.com/vi/IffBvfTUxag/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCx0YZ3M1NZCLkfa7y6SVa1pky4Uw", "backdrop": "https://i.ytimg.com/vi/IffBvfTUxag/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCx0YZ3M1NZCLkfa7y6SVa1pky4Uw", "video_url": "https://sharecloudy.com/iframe/Nc4FGMSTkd", "year": 1992, "duration": "1h 54min", "rating": "4.0", "maturityRating": "16+", "featured": false },
  { "id": "98", "title": "Alien, la résurrection", "description": "Ripley est clonée 200 ans plus tard.", "category": "Film", "genre": ["Sci-Fi", "Horreur"], "thumbnail": "https://ukfilmnerd.wordpress.com/wp-content/uploads/2025/05/review-alien-resurrection-banner-1.jpg?w=800", "backdrop": "https://ukfilmnerd.wordpress.com/wp-content/uploads/2025/05/review-alien-resurrection-banner-1.jpg?w=800", "video_url": "https://sharecloudy.com/iframe/ZyWywbH7MR", "year": 1997, "duration": "1h 49min", "rating": "3.8", "maturityRating": "16+", "featured": false },
  { "id": "99", "title": "Alien: Romulus", "description": "Terreur dans les profondeurs de l'espace.", "category": "Film", "genre": ["Sci-Fi", "Horreur"], "thumbnail": "https://images.squarespace-cdn.com/content/v1/54e310f0e4b0f4a6ba3ac899/283efc10-1e47-40ef-a96d-f96a8512a67b/Alien+Romulus+Poster+650.jpg", "backdrop": "https://images.squarespace-cdn.com/content/v1/54e310f0e4b0f4a6ba3ac899/283efc10-1e47-40ef-a96d-f96a8512a67b/Alien+Romulus+Poster+650.jpg", "video_url": "https://sharecloudy.com/iframe/UWjOPnQmPz", "year": 2024, "duration": "1h 59min", "rating": "4.5", "maturityRating": "16+", "featured": false },
  { "id": "100", "title": "Alien : Rubicon", "description": "Le nouveau chapitre.", "category": "Film", "genre": ["Sci-Fi", "Horreur"], "thumbnail": "https://horrorbrains.com/wp-content/uploads/2025/12/Alien-Rubicon-2024-Horror-Movie-Poster-2.jpg", "backdrop": "https://horrorbrains.com/wp-content/uploads/2025/12/Alien-Rubicon-2024-Horror-Movie-Poster-2.jpg", "video_url": "https://sharecloudy.com/iframe/HiNj2mE6W5", "year": 2024, "duration": "1h 55min", "rating": "4.2", "maturityRating": "16+", "featured": false },

  // --- Saga Matrix ---
  { "id": "101", "title": "Matrix", "description": "Néo découvre la vérité sur son monde.", "category": "Film", "genre": ["Sci-Fi", "Action"], "thumbnail": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/26a479c4-486a-41a1-8d5a-30a3769b104d/dfi6ui6-4dfddcec-0c7f-468a-a05e-b034f3a27282.png/v1/fill/w_1920,h_1092,q_80,strp/the_matrix__1999__wallpaper_by_stephen_fisher_dfi6ui6-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA5MiIsInBhdGgiOiIvZi8yNmE0NzljNC00ODZhLTQxYTEtOGQ1YS0zMGEzNzY5YjEwNGQvZGZpNnVpNi00ZGZkZGNlYy0wYzdmLTQ2OGEtYTA1ZS1iMDM0ZjNhMjcyODIucG5nIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.RzryS-efmm9Di4cuVWpb6D8X6ZNmJ1sTSHscelVb3UQ", "backdrop": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/26a479c4-486a-41a1-8d5a-30a3769b104d/dfi6ui6-4dfddcec-0c7f-468a-a05e-b034f3a27282.png/v1/fill/w_1920,h_1092,q_80,strp/the_matrix__1999__wallpaper_by_stephen_fisher_dfi6ui6-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA5MiIsInBhdGgiOiIvZi8yNmE0NzljNC00ODZhLTQxYTEtOGQ1YS0zMGEzNzY5YjEwNGQvZGZpNnVpNi00ZGZkZGNlYy0wYzdmLTQ2OGEtYTA1ZS1iMDM0ZjNhMjcyODIucG5nIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.RzryS-efmm9Di4cuVWpb6D8X6ZNmJ1sTSHscelVb3UQ", "video_url": "https://sharecloudy.com/iframe/HlVBeWiBp4", "year": 1999, "duration": "2h 16min", "rating": "5.0", "maturityRating": "13+", "featured": false },
  { "id": "102", "title": "Matrix Reloaded", "description": "La guerre contre les machines continue.", "category": "Film", "genre": ["Sci-Fi", "Action"], "thumbnail": "https://www.framerated.co.uk/frwpcontent/uploads/2021/10/matrixreloaded01.jpeg", "backdrop": "https://www.framerated.co.uk/frwpcontent/uploads/2021/10/matrixreloaded01.jpeg", "video_url": "https://sharecloudy.com/iframe/uMkXG342C9", "year": 2003, "duration": "2h 18min", "rating": "4.6", "maturityRating": "13+", "featured": false },
  { "id": "103", "title": "Matrix Revolutions", "description": "L'ultime combat pour Sion.", "category": "Film", "genre": ["Sci-Fi", "Action"], "thumbnail": "https://cinemadroide.com/wp-content/uploads/2025/09/image-23.png", "backdrop": "https://cinemadroide.com/wp-content/uploads/2025/09/image-23.png", "video_url": "https://sharecloudy.com/iframe/jncNKVzLQs", "year": 2003, "duration": "2h 09min", "rating": "4.5", "maturityRating": "13+", "featured": false },
  { "id": "104", "title": "Matrix Resurrections", "description": "Retour dans la Matrice.", "category": "Film", "genre": ["Sci-Fi", "Action"], "thumbnail": "https://m.media-amazon.com/images/S/pv-target-images/32cbdbe4273fdfbb0f88c22efee93bb93975a357a34b7afffb3ec8a2634ced6f.jpg", "backdrop": "https://m.media-amazon.com/images/S/pv-target-images/32cbdbe4273fdfbb0f88c22efee93bb93975a357a34b7afffb3ec8a2634ced6f.jpg", "video_url": "https://sharecloudy.com/iframe/NulaWtEoT6", "year": 2021, "duration": "2h 28min", "rating": "4.0", "maturityRating": "13+", "featured": false },

  // --- Univers Cinématographique Marvel (Extrait) ---
  { "id": "91", "title": "Avengers", "description": "Les héros les plus puissants de la Terre s'unissent.", "category": "Film", "genre": ["Action", "Sci-Fi"], "thumbnail": "https://ntvb.tmsimg.com/assets/p8815512_v_h10_ac.jpg?w=1280&h=720", "backdrop": "https://ntvb.tmsimg.com/assets/p8815512_v_h10_ac.jpg?w=1280&h=720", "video_url": "https://sharecloudy.com/iframe/wzkjc1nJZY", "year": 2012, "duration": "2h 23min", "rating": "4.9", "maturityRating": "13+", "featured": false },
  { "id": "92", "title": "Avengers : L'Ère d'Ultron", "description": "Les Avengers affrontent une intelligence artificielle.", "category": "Film", "genre": ["Action", "Sci-Fi"], "thumbnail": "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/50c3f5a7-7675-4632-9e73-e0f274e5d2d9/compose?aspectRatio=1.78&format=webp&width=1200", "backdrop": "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/50c3f5a7-7675-4632-9e73-e0f274e5d2d9/compose?aspectRatio=1.78&format=webp&width=1200", "video_url": "https://sharecloudy.com/iframe/2ziTgwMstx", "year": 2015, "duration": "2h 21min", "rating": "4.5", "maturityRating": "13+", "featured": false },
  { "id": "93", "title": "Avengers : Infinity War", "description": "Thanos menace l'univers.", "category": "Film", "genre": ["Action", "Sci-Fi"], "thumbnail": "https://images.squarespace-cdn.com/content/v1/57b29c442994cab73855c706/1525540051597-L50PIH7AF3HERAO7CDWT/Infinity+War.png?format=1000w", "backdrop": "https://images.squarespace-cdn.com/content/v1/57b29c442994cab73855c706/1525540051597-L50PIH7AF3HERAO7CDWT/Infinity+War.png?format=1000w", "video_url": "https://sharecloudy.com/iframe/9jP6MPd9Lw", "year": 2018, "duration": "2h 29min", "rating": "5.0", "maturityRating": "13+", "featured": false },
  { "id": "94", "title": "Avengers : Endgame", "description": "La conclusion épique.", "category": "Film", "genre": ["Action", "Sci-Fi"], "thumbnail": "https://scera.org/wp-content/uploads/2019/04/Avengers-Endgame-2019-Poster-Wallpaper.jpg", "backdrop": "https://scera.org/wp-content/uploads/2019/04/Avengers-Endgame-2019-Poster-Wallpaper.jpg", "video_url": "https://sharecloudy.com/iframe/2uIRQuRv5W", "year": 2019, "duration": "3h 01min", "rating": "5.0", "maturityRating": "13+", "featured": false },

  { "id": "105", "title": "Thor", "description": "Le dieu du tonnerre est banni sur Terre.", "category": "Film", "genre": ["Action", "Fantastique"], "thumbnail": "https://media.themoviedb.org/t/p/w780/cDJ61O1STtbWNBwefuqVrRe3d7l.jpg", "backdrop": "https://media.themoviedb.org/t/p/w780/cDJ61O1STtbWNBwefuqVrRe3d7l.jpg", "video_url": "https://sharecloudy.com/iframe/fRFzso2FGq", "year": 2011, "duration": "1h 55min", "rating": "4.4", "maturityRating": "13+", "featured": false },
  { "id": "106", "title": "Thor : Le Monde des ténèbres", "description": "Thor affronte les Elfes Noirs.", "category": "Film", "genre": ["Action", "Fantastique"], "thumbnail": "https://xyz.comic.systems/images/affiche/cinema/Marvel-Thor2-LeMondeDesTenebres?v=20251224090934", "backdrop": "https://xyz.comic.systems/images/affiche/cinema/Marvel-Thor2-LeMondeDesTenebres?v=20251224090934", "video_url": "https://sharecloudy.com/iframe/z1lYVCX6aC", "year": 2013, "duration": "1h 52min", "rating": "4.2", "maturityRating": "13+", "featured": false },
  { "id": "107", "title": "Thor : Ragnarok", "description": "Thor doit sauver Asgard.", "category": "Film", "genre": ["Action", "Fantastique", "Comédie"], "thumbnail": "https://ntvb.tmsimg.com/assets/p12402331_v_h8_am.jpg?w=1280&h=720", "backdrop": "https://ntvb.tmsimg.com/assets/p12402331_v_h8_am.jpg?w=1280&h=720", "video_url": "https://sharecloudy.com/iframe/lH1zgTcdmD", "year": 2017, "duration": "2h 10min", "rating": "4.8", "maturityRating": "13+", "featured": false },
  { "id": "108", "title": "Thor : Love and Thunder", "description": "Thor affronte Gorr le Boucher des Dieux.", "category": "Film", "genre": ["Action", "Fantastique"], "thumbnail": "https://m.media-amazon.com/images/M/MV5BNGUxN2ZhNjQtMmZiOC00M2JlLTg3NGEtM2NiMmRlZTQ0MDljXkEyXkFqcGc@._V1_QL75_UX500_CR0,2,500,281_.jpg", "backdrop": "https://m.media-amazon.com/images/M/MV5BNGUxN2ZhNjQtMmZiOC00M2JlLTg3NGEtM2NiMmRlZTQ0MDljXkEyXkFqcGc@._V1_QL75_UX500_CR0,2,500,281_.jpg", "video_url": "https://sharecloudy.com/iframe/jWzhhFgb19", "year": 2022, "duration": "1h 59min", "rating": "4.1", "maturityRating": "13+", "featured": false },

  { "id": "109", "title": "Captain America : First Avenger", "description": "La naissance du premier Avenger.", "category": "Film", "genre": ["Action", "Sci-Fi"], "thumbnail": "https://material.asset.catchplay.com/DIS-TW-001-A0025/artworks/posters/DIS-TW-001-A0025-P1200.jpg", "backdrop": "https://material.asset.catchplay.com/DIS-TW-001-A0025/artworks/posters/DIS-TW-001-A0025-P1200.jpg", "video_url": "https://sharecloudy.com/iframe/ZKKQjfcMtu", "year": 2011, "duration": "2h 04min", "rating": "4.5", "maturityRating": "13+", "featured": false },
  { "id": "110", "title": "Captain America : Le Soldat de l'hiver", "description": "Steve Rogers découvre une conspiration au SHIELD.", "category": "Film", "genre": ["Action", "Thriller"], "thumbnail": "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/ec741ad0-e8b9-4dba-b864-f3c372799433/compose?aspectRatio=1.78&format=webp&width=1200", "backdrop": "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/ec741ad0-e8b9-4dba-b864-f3c372799433/compose?aspectRatio=1.78&format=webp&width=1200", "video_url": "https://sharecloudy.com/iframe/H4HOUsZfzQ", "year": 2014, "duration": "2h 16min", "rating": "4.9", "maturityRating": "13+", "featured": false },
  { "id": "111", "title": "Captain America : Civil War", "description": "Les Avengers se divisent.", "category": "Film", "genre": ["Action", "Sci-Fi"], "thumbnail": "https://www.10wallpaper.com/wallpaper/1366x768/1601/Captain_America_Civil_War_2016_Movies_HD_Wallpaper_17_1366x768.jpg", "backdrop": "https://www.10wallpaper.com/wallpaper/1366x768/1601/Captain_America_Civil_War_2016_Movies_HD_Wallpaper_17_1366x768.jpg", "video_url": "https://sharecloudy.com/iframe/T43umFSzOf", "year": 2016, "duration": "2h 27min", "rating": "4.8", "maturityRating": "13+", "featured": false },
  { "id": "112", "title": "Captain America : Brave New World", "description": "Sam Wilson reprend le bouclier.", "category": "Film", "genre": ["Action", "Sci-Fi"], "thumbnail": "https://cinephellas.com/wp-content/uploads/2025/05/screenshot-2025-05-09-at-2.05.49e280afpm.png", "backdrop": "https://cinephellas.com/wp-content/uploads/2025/05/screenshot-2025-05-09-at-2.05.49e280afpm.png", "video_url": "https://sharecloudy.com/iframe/pQrHAAxV6o", "year": 2025, "duration": "2h 10min", "rating": "4.3", "maturityRating": "13+", "featured": false },

  { "id": "116", "title": "Deadpool", "description": "L'anti-héros le plus irrévérencieux.", "category": "Film", "genre": ["Action", "Comédie"], "thumbnail": "https://imageio.forbes.com/blogs-images/scottmendelson/files/2016/02/WHAM_10X15-FirePl_%C6%924.0_MECH-1200x800.jpg?height=400&width=711&fit=bounds", "backdrop": "https://imageio.forbes.com/blogs-images/scottmendelson/files/2016/02/WHAM_10X15-FirePl_%C6%924.0_MECH-1200x800.jpg?height=400&width=711&fit=bounds", "video_url": "https://sharecloudy.com/iframe/tb1lzwhBqI", "year": 2016, "duration": "1h 48min", "rating": "4.7", "maturityRating": "16+", "featured": false },
  { "id": "117", "title": "Deadpool 2", "description": "Deadpool forme la X-Force.", "category": "Film", "genre": ["Action", "Comédie"], "thumbnail": "https://berkreviews.com/wp-content/uploads/2019/09/a6a2d-deadpool-2-end-credits-962112.png", "backdrop": "https://berkreviews.com/wp-content/uploads/2019/09/a6a2d-deadpool-2-end-credits-962112.png", "video_url": "https://sharecloudy.com/iframe/mMeoWWqjLx", "year": 2018, "duration": "1h 59min", "rating": "4.6", "maturityRating": "16+", "featured": false },
  { "id": "118", "title": "Deadpool & Wolverine", "description": "Le duo explosif entre dans le MCU.", "category": "Film", "genre": ["Action", "Comédie"], "thumbnail": "https://flixchatter.net/wp-content/uploads/2024/07/deadpool-wolverine-poster.jpg", "backdrop": "https://flixchatter.net/wp-content/uploads/2024/07/deadpool-wolverine-poster.jpg", "video_url": "https://bramtiv.com/iframe/dNP5fyxUfv", "year": 2024, "duration": "2h 07min", "rating": "4.8", "maturityRating": "16+", "featured": false },

  { "id": "119", "title": "Spider-Man : Homecoming", "description": "Peter Parker tente de concilier vie de lycéen et super-héros.", "category": "Film", "genre": ["Action", "Sci-Fi"], "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0TY5wATIRIwiwxCg4P03JghzDDuVujWcxbA&s", "backdrop": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0TY5wATIRIwiwxCg4P03JghzDDuVujWcxbA&s", "video_url": "https://sharecloudy.com/iframe/YigxGUCezM", "year": 2017, "duration": "2h 13min", "rating": "4.6", "maturityRating": "13+", "featured": false },
  { "id": "120", "title": "Spider-Man : Far From Home", "description": "Peter part en voyage scolaire en Europe.", "category": "Film", "genre": ["Action", "Sci-Fi"], "thumbnail": "https://ntvb.tmsimg.com/assets/p14569140_v_h10_ap.jpg?w=1280&h=720", "backdrop": "https://ntvb.tmsimg.com/assets/p14569140_v_h10_ap.jpg?w=1280&h=720", "video_url": "https://sharecloudy.com/iframe/046rzasw4K", "year": 2019, "duration": "2h 09min", "rating": "4.5", "maturityRating": "13+", "featured": false },
  { "id": "121", "title": "Spider-Man : No Way Home", "description": "Le multivers est ouvert.", "category": "Film", "genre": ["Action", "Sci-Fi"], "thumbnail": "https://proxymedia.woopic.com/api/v1/images/331%2FSPIDERMANNOW0193655_BAN1_2424_NEWTV_UHD.jpg", "backdrop": "https://proxymedia.woopic.com/api/v1/images/331%2FSPIDERMANNOW0193655_BAN1_2424_NEWTV_UHD.jpg", "video_url": "https://sharecloudy.com/iframe/HsPmskIRaW", "year": 2021, "duration": "2h 28min", "rating": "4.9", "maturityRating": "13+", "featured": false },
  { "id": "122", "title": "Spider-Man : No Way Home - Version longue", "description": "Version étendue avec plus de scènes.", "category": "Film", "genre": ["Action", "Sci-Fi"], "thumbnail": "https://proxymedia.woopic.com/api/v1/images/331%2FSPIDERMANNOW0193655_BAN1_2424_NEWTV_UHD.jpg", "backdrop": "https://proxymedia.woopic.com/api/v1/images/331%2FSPIDERMANNOW0193655_BAN1_2424_NEWTV_UHD.jpg", "video_url": "https://sharecloudy.com/iframe/fJgFq9Zjfl", "year": 2022, "duration": "2h 37min", "rating": "4.9", "maturityRating": "13+", "featured": false },

  { "id": "126", "title": "Iron Man", "description": "Tony Stark construit une armure high-tech.", "category": "Film", "genre": ["Action", "Sci-Fi"], "thumbnail": "https://cdn.mos.cms.futurecdn.net/kSTXcsUuQhXRaJbgP8JL9o.jpg", "backdrop": "https://cdn.mos.cms.futurecdn.net/kSTXcsUuQhXRaJbgP8JL9o.jpg", "video_url": "https://sharecloudy.com/iframe/9zAfky4GNf", "year": 2008, "duration": "2h 06min", "rating": "4.8", "maturityRating": "13+", "featured": false },
  { "id": "127", "title": "Iron Man 2", "description": "Le monde sait que Tony Stark est Iron Man.", "category": "Film", "genre": ["Action", "Sci-Fi"], "thumbnail": "https://spoilertown.com/wp-content/uploads/2024/07/iron-man-2-2010.webp", "backdrop": "https://spoilertown.com/wp-content/uploads/2024/07/iron-man-2-2010.webp", "video_url": "https://sharecloudy.com/iframe/3ejwJKRXyU", "year": 2010, "duration": "2h 04min", "rating": "4.3", "maturityRating": "13+", "featured": false },
  { "id": "128", "title": "Iron Man 3", "description": "Tony Stark face au Mandarin.", "category": "Film", "genre": ["Action", "Sci-Fi"], "thumbnail": "https://spoilertown.com/wp-content/uploads/2024/07/iron-man-3-2013.webp", "backdrop": "https://spoilertown.com/wp-content/uploads/2024/07/iron-man-3-2013.webp", "video_url": "https://sharecloudy.com/iframe/lQM0gGLM2D", "year": 2013, "duration": "2h 10min", "rating": "4.4", "maturityRating": "13+", "featured": false },

  { "id": "146", "title": "Venom", "description": "Nous sommes Venom.", "category": "Film", "genre": ["Action", "Sci-Fi"], "thumbnail": "https://www.10wallpaper.com/wallpaper/1366x768/1809/Venom_2018_Movies_HD_Poster_1366x768.jpg", "backdrop": "https://www.10wallpaper.com/wallpaper/1366x768/1809/Venom_2018_Movies_HD_Poster_1366x768.jpg", "video_url": "https://bramtiv.com/iframe/nJvtx7lKLX", "year": 2018, "duration": "1h 52min", "rating": "4.4", "maturityRating": "13+", "featured": false },
  { "id": "147", "title": "Venom : Let There Be Carnage", "description": "Venom affronte Carnage.", "category": "Film", "genre": ["Action", "Sci-Fi"], "thumbnail": "https://proxymedia.woopic.com/api/v1/images/331%2FVENOM2XXXXXW0176317_BAN1_2424_NEWTV_UHD.jpg", "backdrop": "https://proxymedia.woopic.com/api/v1/images/331%2FVENOM2XXXXXW0176317_BAN1_2424_NEWTV_UHD.jpg", "video_url": "https://bramtiv.com/iframe/aleDkjOuE1", "year": 2021, "duration": "1h 37min", "rating": "4.2", "maturityRating": "13+", "featured": false },
  { "id": "148", "title": "Venom : The Last Dance", "description": "La dernière danse.", "category": "Film", "genre": ["Action", "Sci-Fi"], "thumbnail": "https://m.media-amazon.com/images/S/pv-target-images/ad255f3cbd09584d050fe4775f7631db912588d306c1b26c5692d357cebf754d.jpg", "backdrop": "https://m.media-amazon.com/images/S/pv-target-images/ad255f3cbd09584d050fe4775f7631db912588d306c1b26c5692d357cebf754d.jpg", "video_url": "https://bramtiv.com/iframe/CMDrAXolHS", "year": 2024, "duration": "1h 50min", "rating": "4.3", "maturityRating": "13+", "featured": false },

  { "id": "162", "title": "Ant-Man", "description": "Un voleur devient un héros miniature.", "category": "Film", "genre": ["Action", "Sci-Fi"], "thumbnail": "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/eb218d92-4457-4640-9a24-ec1163cffa1c/compose?aspectRatio=1.78&format=webp&width=1200", "backdrop": "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/eb218d92-4457-4640-9a24-ec1163cffa1c/compose?aspectRatio=1.78&format=webp&width=1200", "video_url": "https://sharecloudy.com/iframe/3xK6GBsSq2", "year": 2015, "duration": "1h 57min", "rating": "4.4", "maturityRating": "13+", "featured": false },
  { "id": "163", "title": "Ant-Man et la Guêpe", "description": "Scott Lang fait équipe avec Hope van Dyne.", "category": "Film", "genre": ["Action", "Sci-Fi"], "thumbnail": "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/019b5cae-1800-7a24-a84f-01047320df09/compose?aspectRatio=1.78&format=webp&width=1200", "backdrop": "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/019b5cae-1800-7a24-a84f-01047320df09/compose?aspectRatio=1.78&format=webp&width=1200", "video_url": "https://sharecloudy.com/iframe/eQYulTsshh", "year": 2018, "duration": "1h 58min", "rating": "4.3", "maturityRating": "13+", "featured": false },
  { "id": "164", "title": "Ant-Man et la Guêpe : Quantumania", "description": "Voyage dans le royaume quantique.", "category": "Film", "genre": ["Action", "Sci-Fi"], "thumbnail": "https://xyz.comic.systems/images/affiche/cinema/Marvel-AntManetlaGuepe-Quantumania?v=20251228235118", "backdrop": "https://xyz.comic.systems/images/affiche/cinema/Marvel-AntManetlaGuepe-Quantumania?v=20251228235118", "video_url": "https://sharecloudy.com/iframe/vQlIhamagj", "year": 2023, "duration": "2h 04min", "rating": "4.0", "maturityRating": "13+", "featured": false },


  // --- Terre du Milieu ---
  { "id": "113", "title": "Le Seigneur des anneaux : La Communauté de l'anneau", "description": "L'aventure commence.", "category": "Film", "genre": ["Fantastique", "Aventure"], "thumbnail": "https://thumb.canalplus.pro/http/unsafe/1440x810/filters:quality(80)/img-hapi.canalplus.pro:80/ServiceImage/ImageID/110924420", "backdrop": "https://thumb.canalplus.pro/http/unsafe/1440x810/filters:quality(80)/img-hapi.canalplus.pro:80/ServiceImage/ImageID/110924420", "video_url": "https://bramtiv.com/iframe/f1fXcHiM5M", "year": 2001, "duration": "2h 58min", "rating": "5.0", "maturityRating": "13+", "featured": false },
  { "id": "114", "title": "Le Seigneur des anneaux : Les Deux Tours", "description": "La guerre s'intensifie.", "category": "Film", "genre": ["Fantastique", "Aventure"], "thumbnail": "https://proxymedia.woopic.com/api/v1/images/331%2Fle-seigneur-des-anneaux-les-deux-tours%7CLESEIGNEURDW0200619_BAN1_2424_NEWTV_UHD.jpg?format=512x&saveas=webp&saveasquality=70", "backdrop": "https://proxymedia.woopic.com/api/v1/images/331%2Fle-seigneur-des-anneaux-les-deux-tours%7CLESEIGNEURDW0200619_BAN1_2424_NEWTV_UHD.jpg?format=512x&saveas=webp&saveasquality=70", "video_url": "https://bramtiv.com/iframe/MXA7NWEHXk", "year": 2002, "duration": "2h 59min", "rating": "5.0", "maturityRating": "13+", "featured": false },
  { "id": "115", "title": "Le Seigneur des anneaux : Le Retour du roi", "description": "L'ultime bataille pour la Terre du Milieu.", "category": "Film", "genre": ["Fantastique", "Aventure"], "thumbnail": "https://i.ytimg.com/vi/KYJCe_PLVaE/mqdefault.jpg", "backdrop": "https://i.ytimg.com/vi/KYJCe_PLVaE/mqdefault.jpg", "video_url": "https://bramtiv.com/iframe/C8MzUOcXSF", "year": 2003, "duration": "3h 21min", "rating": "5.0", "maturityRating": "13+", "featured": false },
  { "id": "123", "title": "Le Hobbit : Un voyage inattendu", "description": "Bilbon Sacquet part à l'aventure.", "category": "Film", "genre": ["Fantastique", "Aventure"], "thumbnail": "https://resize.programme-television.org/original/images/imported/programs/43611614/e77955a15dbc43988be07e0578ae76a2", "backdrop": "https://resize.programme-television.org/original/images/imported/programs/43611614/e77955a15dbc43988be07e0578ae76a2", "video_url": "https://bramtiv.com/iframe/VFevUgSrHz", "year": 2012, "duration": "2h 49min", "rating": "4.5", "maturityRating": "13+", "featured": false },
  { "id": "124", "title": "Le Hobbit : La Désolation de Smaug", "description": "Le dragon se réveille.", "category": "Film", "genre": ["Fantastique", "Aventure"], "thumbnail": "https://m.media-amazon.com/images/S/pv-target-images/59d9be5c5ca1ad4971abdd4ec9593fe4a52c1f145b8707739ca04e8d30a046c5.jpg", "backdrop": "https://m.media-amazon.com/images/S/pv-target-images/59d9be5c5ca1ad4971abdd4ec9593fe4a52c1f145b8707739ca04e8d30a046c5.jpg", "video_url": "https://bramtiv.com/iframe/wF2zghJACS", "year": 2013, "duration": "2h 41min", "rating": "4.6", "maturityRating": "13+", "featured": false },
  { "id": "125", "title": "Le Hobbit : La Bataille des cinq armées", "description": "La guerre pour la Montagne Solitaire.", "category": "Film", "genre": ["Fantastique", "Aventure"], "thumbnail": "https://www.notrecinema.com/images/cache/le-hobbit--la-bataille-des-cinq-armees-wallpaper_497751_19314.jpg", "backdrop": "https://www.notrecinema.com/images/cache/le-hobbit--la-bataille-des-cinq-armees-wallpaper_497751_19314.jpg", "video_url": "https://bramtiv.com/iframe/hOfNgRoUiY", "year": 2014, "duration": "2h 24min", "rating": "4.5", "maturityRating": "13+", "featured": false },

  // --- Animation & Autres ---
  { "id": "129", "title": "28 Jours plus tard", "description": "Un virus ravage la Grande-Bretagne.", "category": "Film", "genre": ["Horreur", "Thriller"], "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKzo2Cw6CzPKExUXwShtM-71eNpWzbnXySjA&s", "backdrop": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKzo2Cw6CzPKExUXwShtM-71eNpWzbnXySjA&s", "video_url": "https://sharecloudy.com/iframe/0LXq15XDVZ", "year": 2002, "duration": "1h 53min", "rating": "4.5", "maturityRating": "16+", "featured": false },
  { "id": "130", "title": "28 Semaines plus tard", "description": "Le virus réapparaît.", "category": "Film", "genre": ["Horreur", "Thriller"], "thumbnail": "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/4c34b46e-142f-4819-a0d9-a6cc23c19f42/compose?aspectRatio=1.78&format=webp&width=1200", "backdrop": "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/4c34b46e-142f-4819-a0d9-a6cc23c19f42/compose?aspectRatio=1.78&format=webp&width=1200", "video_url": "https://sharecloudy.com/iframe/IwRL81OAfo", "year": 2007, "duration": "1h 40min", "rating": "4.3", "maturityRating": "16+", "featured": false },
  { "id": "131", "title": "28 Ans plus tard", "description": "La saga continue.", "category": "Film", "genre": ["Horreur", "Thriller"], "thumbnail": "https://cdn.sortiraparis.com/images/80/69688/1133337-28-ans-plus-tard-l-epopee-horrifique-de-danny-boyle.jpg", "backdrop": "https://cdn.sortiraparis.com/images/80/69688/1133337-28-ans-plus-tard-l-epopee-horrifique-de-danny-boyle.jpg", "video_url": "https://sharecloudy.com/iframe/plUi3WOe6X", "year": 2025,"duration": "2h 00min", "rating": "4.6", "maturityRating": "16+", "featured": false },

  { "id": "132", "title": "Vice-versa", "description": "Dans la tête d'une petite fille.", "category": "Film", "genre": ["Animation", "Famille"], "thumbnail": "https://proxymedia.woopic.com/api/v1/images/331%2FVICEVERSAXXW0100355_BAN1_2424_NEWTV_HD.jpg", "backdrop": "https://proxymedia.woopic.com/api/v1/images/331%2FVICEVERSAXXW0100355_BAN1_2424_NEWTV_HD.jpg", "video_url": "https://bramtiv.com/iframe/iZJYDcLoM7", "year": 2015, "duration": "1h 35min", "rating": "4.8", "maturityRating": "Tous publics", "featured": false },
  { "id": "133", "title": "Vice-versa 2", "description": "L'adolescence et de nouvelles émotions.", "category": "Film", "genre": ["Animation", "Famille"], "thumbnail": "https://digitalcine.fr/wp-content/uploads/2024/10/vice-versa-2_image-une-fiche-film.jpg", "backdrop": "https://digitalcine.fr/wp-content/uploads/2024/10/vice-versa-2_image-une-fiche-film.jpg", "video_url": "https://bramtiv.com/iframe/e9Su9XpsRc", "year": 2024, "duration": "1h 36min", "rating": "4.7", "maturityRating": "Tous publics", "featured": false },
  { "id": "134", "title": "Vaiana, la légende du bout du monde", "description": "Une jeune fille navigue pour sauver son peuple.", "category": "Film", "genre": ["Animation", "Famille"], "thumbnail": "https://cdn.tv-programme.com/photos/vaiana-la-legende-du-bout-du-monde-75-750505-1200.webp", "backdrop": "https://cdn.tv-programme.com/photos/vaiana-la-legende-du-bout-du-monde-75-750505-1200.webp", "video_url": "https://bramtiv.com/iframe/scNL1bl7gD", "year": 2016, "duration": "1h 47min", "rating": "4.8", "maturityRating": "Tous publics", "featured": false },
  { "id": "135", "title": "Vaiana 2", "description": "Nouvelle aventure en mer.", "category": "Film", "genre": ["Animation", "Famille"], "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzTGKidL4HhX9K83079B40fciPYepwc4DrLA&s", "backdrop": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzTGKidL4HhX9K83079B40fciPYepwc4DrLA&s", "video_url": "https://bramtiv.com/iframe/kam3jfRBYW", "year": 2024, "duration": "1h 40min", "rating": "4.6", "maturityRating": "Tous publics", "featured": false },

  { "id": "136", "title": "Mad Max", "description": "La vengeance d'un flic de la route.", "category": "Film", "genre": ["Action", "Sci-Fi"], "thumbnail": "https://i.ebayimg.com/images/g/ODMAAOSwNJZlPmqu/s-l1200.jpg", "backdrop": "https://i.ebayimg.com/images/g/ODMAAOSwNJZlPmqu/s-l1200.jpg", "video_url": "https://sharecloudy.com/iframe/kJ8cGeULxL", "year": 1979, "duration": "1h 33min", "rating": "4.5", "maturityRating": "16+", "featured": false },
  { "id": "137", "title": "Mad Max 2 : Le Défi", "description": "Le guerrier de la route.", "category": "Film", "genre": ["Action", "Sci-Fi"], "thumbnail": "https://proxymedia.woopic.com/api/v1/images/331%2FMADMAXIILEDW0002494_BAN1_2424_NEWTV_HD.jpg", "backdrop": "https://proxymedia.woopic.com/api/v1/images/331%2FMADMAXIILEDW0002494_BAN1_2424_NEWTV_HD.jpg", "video_url": "https://sharecloudy.com/iframe/Kj8c8JfkoJ", "year": 1981, "duration": "1h 35min", "rating": "4.8", "maturityRating": "16+", "featured": false },
  { "id": "138", "title": "Mad Max : Au-delà du dôme du tonnerre", "description": "Deux hommes entrent, un homme sort.", "category": "Film", "genre": ["Action", "Sci-Fi"], "thumbnail": "https://proxymedia.woopic.com/api/v1/images/331%2FMADMAXAUDELW0000936_BAN1_2424_NEWTV_HD.jpg", "backdrop": "https://proxymedia.woopic.com/api/v1/images/331%2FMADMAXAUDELW0000936_BAN1_2424_NEWTV_HD.jpg", "video_url": "https://sharecloudy.com/iframe/wMrA88Uy5f", "year": 1985, "duration": "1h 47min", "rating": "4.1", "maturityRating": "16+", "featured": false },
  { "id": "139", "title": "Mad Max : Fury Road", "description": "Une course poursuite effrénée dans le désert.", "category": "Film", "genre": ["Action", "Sci-Fi"], "thumbnail": "https://typeset-beta.imgix.net/rehost%2F2016%2F9%2F13%2F974cfa96-fe15-4465-ab8f-06f914f61249.png", "backdrop": "https://typeset-beta.imgix.net/rehost%2F2016%2F9%2F13%2F974cfa96-fe15-4465-ab8f-06f914f61249.png", "video_url": "https://sharecloudy.com/iframe/sels5FDfhy", "year": 2015, "duration": "2h 00min", "rating": "4.9", "maturityRating": "16+", "featured": false },
  { "id": "140", "title": "Furiosa : Une saga Mad Max", "description": "L'origine de Furiosa.", "category": "Film", "genre": ["Action", "Sci-Fi"], "thumbnail": "https://cinemalegyptis.org/app/uploads/sites/2/2024/06/Furiosa-una-saga-Mad-Max.jpg", "backdrop": "https://cinemalegyptis.org/app/uploads/sites/2/2024/06/Furiosa-una-saga-Mad-Max.jpg", "video_url": "https://bramtiv.com/iframe/vaIZ1ijINb", "year": 2024, "duration": "2h 28min", "rating": "4.7", "maturityRating": "16+", "featured": false },

  { "id": "141", "title": "Toy Story", "description": "La vie secrète des jouets.", "category": "Film", "genre": ["Animation", "Famille"], "thumbnail": "https://i.pinimg.com/736x/ee/dd/a2/eedda282cce0908addaea7c7cdb85c5b.jpg", "backdrop": "https://i.pinimg.com/736x/ee/dd/a2/eedda282cce0908addaea7c7cdb85c5b.jpg", "video_url": "https://vidzy.org/embed-w2d3bejr38p7.html", "year": 1995, "duration": "1h 21min", "rating": "5.0", "maturityRating": "Tous publics", "featured": false },
  { "id": "142", "title": "Toy Story 2", "description": "Woody est enlevé par un collectionneur.", "category": "Film", "genre": ["Animation", "Famille"], "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUW58OyslWwWLf5rJBEPg36aK_TO55A120DQ&s", "backdrop": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUW58OyslWwWLf5rJBEPg36aK_TO55A120DQ&s", "video_url": "https://vidzy.org/embed-nqezhczzgare.html", "year": 1999, "duration": "1h 32min", "rating": "4.9", "maturityRating": "Tous publics", "featured": false },
  { "id": "143", "title": "Toy Story 3", "description": "Andy part à l'université.", "category": "Film", "genre": ["Animation", "Famille"], "thumbnail": "https://www.hdwallpapers.in/download/toy_story_3_2010_movie-1920x1200.jpg", "backdrop": "https://www.hdwallpapers.in/download/toy_story_3_2010_movie-1920x1200.jpg", "video_url": "https://vidzy.org/embed-lioyr5vpyna1.html", "year": 2010, "duration": "1h 43min", "rating": "5.0", "maturityRating": "Tous publics", "featured": false },
  { "id": "144", "title": "Toy Story 4", "description": "Woody et Fourchette partent en voyage.", "category": "Film", "genre": ["Animation", "Famille"], "thumbnail": "https://static0.srcdn.com/wordpress/wp-content/uploads/2019/03/Toy-Story-4-UK-poster.jpg?w=1200&h=628&fit=crop", "backdrop": "https://static0.srcdn.com/wordpress/wp-content/uploads/2019/03/Toy-Story-4-UK-poster.jpg?w=1200&h=628&fit=crop", "video_url": "https://vidzy.org/embed-h4ai1tg6j3vh.html", "year": 2019, "duration": "1h 40min", "rating": "4.5", "maturityRating": "Tous publics", "featured": false },

  { "id": "145", "title": "Super Mario Bros., le film", "description": "Mario et Luigi au Royaume Champignon.", "category": "Film", "genre": ["Animation", "Famille", "Aventure"], "thumbnail": "https://photos.tf1.fr/330/186/program-card-landscape-4e1595-7c848a-0@3x.jpg", "backdrop": "https://photos.tf1.fr/330/186/program-card-landscape-4e1595-7c848a-0@3x.jpg", "video_url": "https://sharecloudy.com/iframe/ikVnJHuHIq", "year": 2023, "duration": "1h 32min", "rating": "4.4", "maturityRating": "Tous publics", "featured": false },

  { "id": "149", "title": "S.O.S. Fantômes", "description": "Qui allez-vous appeler ?", "category": "Film", "genre": ["Fantastique", "Comédie"], "thumbnail": "https://m1.quebecormedia.com/pfu/2025/08/b11e9b88-5701-4f11-b5f2-4f548b70c139.jpg", "backdrop": "https://m1.quebecormedia.com/pfu/2025/08/b11e9b88-5701-4f11-b5f2-4f548b70c139.jpg", "video_url": "https://sharecloudy.com/iframe/Zc2eyBnkn4", "year": 1984, "duration": "1h 45min", "rating": "4.8", "maturityRating": "Tous publics", "featured": false },
  { "id": "150", "title": "S.O.S. Fantômes II", "description": "Les chasseurs de fantômes sont de retour.", "category": "Film", "genre": ["Fantastique", "Comédie"], "thumbnail": "https://m1.quebecormedia.com/pfu/2025/08/b11e9b88-5701-4f11-b5f2-4f548b70c139.jpg", "backdrop": "https://m1.quebecormedia.com/pfu/2025/08/b11e9b88-5701-4f11-b5f2-4f548b70c139.jpg", "video_url": "https://sharecloudy.com/iframe/8rwaRpamHb", "year": 1989, "duration": "1h 48min", "rating": "4.2", "maturityRating": "Tous publics", "featured": false },
  { "id": "151", "title": "S.O.S. Fantômes : L'Héritage", "description": "Une nouvelle génération découvre l'héritage.", "category": "Film", "genre": ["Fantastique", "Comédie"], "thumbnail": "https://www.geekgeneration.fr/wp-content/uploads/2021/11/SOS-Fanto%CC%82mes-LHe%CC%81ritage-2.jpg", "backdrop": "https://www.geekgeneration.fr/wp-content/uploads/2021/11/SOS-Fanto%CC%82mes-LHe%CC%81ritage-2.jpg", "video_url": "https://sharecloudy.com/iframe/EXOZ0WngbG", "year": 2021, "duration": "2h 04min", "rating": "4.5", "maturityRating": "Tous publics", "featured": false },
  { "id": "152", "title": "S.O.S. Fantômes : La Menace de Glace", "description": "Une force maléfique gèle New York.", "category": "Film", "genre": ["Fantastique", "Comédie"], "thumbnail": "https://proxymedia.woopic.com/api/v1/images/331%2Fsos-fantomes-la-menace-de-glace%7CSOSFANTOMESW0208554_BAN1_2424_NEWTV_UHD.jpg?format=512x&saveas=webp&saveasquality=70", "backdrop": "https://proxymedia.woopic.com/api/v1/images/331%2Fsos-fantomes-la-menace-de-glace%7CSOSFANTOMESW0208554_BAN1_2424_NEWTV_UHD.jpg?format=512x&saveas=webp&saveasquality=70", "video_url": "https://sharecloudy.com/iframe/A79k7caSHA", "year": 2024, "duration": "1h 55min", "rating": "4.3", "maturityRating": "Tous publics", "featured": false },

  { "id": "156", "title": "Cars : Quatre roues", "description": "Flash McQueen découvre la Route 66.", "category": "Film", "genre": ["Animation", "Famille"], "thumbnail": "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/acbcb998-a49e-4ad8-bd49-2dda0a1a1c4a/compose?aspectRatio=1.78&format=webp&width=1200", "backdrop": "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/acbcb998-a49e-4ad8-bd49-2dda0a1a1c4a/compose?aspectRatio=1.78&format=webp&width=1200", "video_url": "https://vidzy.org/embed-h4ai1tg6j3vh.html", "year": 2006, "duration": "1h 57min", "rating": "4.7", "maturityRating": "Tous publics", "featured": false },
  { "id": "157", "title": "Cars 2", "description": "Grand Prix mondial et espionnage.", "category": "Film", "genre": ["Animation", "Famille"], "thumbnail": "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/6dd64a64-c7d9-435b-b179-1b30ddfbe007/scale?format=webp&width=600", "backdrop": "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/6dd64a64-c7d9-435b-b179-1b30ddfbe007/scale?format=webp&width=600", "video_url": "https://vidzy.org/embed-qx678unagcju.html", "year": 2011, "duration": "1h 46min", "rating": "4.0", "maturityRating": "Tous publics", "featured": false },
  { "id": "158", "title": "Cars 3", "description": "Flash McQueen face à la nouvelle génération.", "category": "Film", "genre": ["Animation", "Famille"], "thumbnail": "https://thedisneydrivenlife.com/wp-content/uploads/2016/12/cars3internationalheader.jpg", "backdrop": "https://thedisneydrivenlife.com/wp-content/uploads/2016/12/cars3internationalheader.jpg", "video_url": "https://vidzy.org/embed-08iiij0fnqnx.html", "year": 2017, "duration": "1h 42min", "rating": "4.5", "maturityRating": "Tous publics", "featured": false },

  { "id": "159", "title": "Jumanji", "description": "Un jeu de société aux conséquences réelles.", "category": "Film", "genre": ["Aventure", "Fantastique"], "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHdQF9DyXUB2ZaxhtiG-F_HKg5dYPFbcCfkw&s", "backdrop": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHdQF9DyXUB2ZaxhtiG-F_HKg5dYPFbcCfkw&s", "video_url": "https://sharecloudy.com/iframe/a2SNJwibpZ", "year": 1995, "duration": "1h 44min", "rating": "4.8", "maturityRating": "Tous publics", "featured": false },
  { "id": "160", "title": "Jumanji : Bienvenue dans la jungle", "description": "Le jeu évolue en jeu vidéo.", "category": "Film", "genre": ["Aventure", "Action", "Comédie"], "thumbnail": "https://www.notrecinema.com/images/cache/jumanji--bienvenue-dans-la-jungle-wallpaper_550896_38627.jpg", "backdrop": "https://www.notrecinema.com/images/cache/jumanji--bienvenue-dans-la-jungle-wallpaper_550896_38627.jpg", "video_url": "https://sharecloudy.com/iframe/M29g2xvtFO", "year": 2017, "duration": "1h 59min", "rating": "4.5", "maturityRating": "13+", "featured": false },
  { "id": "161", "title": "Jumanji : Next Level", "description": "Le niveau suivant est plus dangereux.", "category": "Film", "genre": ["Aventure", "Action", "Comédie"], "thumbnail": "https://ntvb.tmsimg.com/assets/p15446613_v_h8_aq.jpg?w=1280&h=720", "backdrop": "https://ntvb.tmsimg.com/assets/p15446613_v_h8_aq.jpg?w=1280&h=720", "video_url": "https://sharecloudy.com/iframe/TUVpaKOAF3", "year": 2019, "duration": "2h 03min", "rating": "4.4", "maturityRating": "13+", "featured": false },




  {
    "id": "162",
    "title": "RIPD : brigade fantôme",
    "description": "Un policier tué en service rejoint une brigade de flics fantômes travaillant pour l'au-delà afin de combattre des esprits malveillants restés sur Terre.",
    "category": "Film",
    "genre": ["Action", "Comédie", "Fantastique"],
    "thumbnail": "https://lh5.googleusercontent.com/proxy/lcSblzuEFZODUqv07ir60xRLhHrwpS6ui9yrb2O0cWBvLECQiDRouu4fT_6h_2tpyHrU12_IejyVaoa3CDn616RTlhs2H-h2hBBVGyk14qfeo59aP2s0DX43F7vvXf7f044566tKcK19C98zT4V0oZsCngqawNZM738",
    "backdrop": "https://lh5.googleusercontent.com/proxy/lcSblzuEFZODUqv07ir60xRLhHrwpS6ui9yrb2O0cWBvLECQiDRouu4fT_6h_2tpyHrU12_IejyVaoa3CDn616RTlhs2H-h2hBBVGyk14qfeo59aP2s0DX43F7vvXf7f044566tKcK19C98zT4V0oZsCngqawNZM738",
    "video_url": "https://vidzy.org/embed-md10yihorge6.html",
    "year": 2013,
    "duration": "1h 36m",
    "rating": "5.6",
    "maturityRating": "12+",
    "featured": false
  },
  {
    "id": "163",
    "title": "La Prophétie de l'horloge",
    "description": "Un jeune orphelin aide son oncle sorcier à retrouver une horloge maléfique cachée dans les murs de sa maison avant qu'elle ne provoque la fin du monde.",
    "category": "Film",
    "genre": ["Fantastique", "Famille"],
    "thumbnail": "https://thumb.canalplus.pro/http/unsafe/1440x810/filters:quality(80)/img-hapi.canalplus.pro:80/ServiceImage/ImageID/109613910",
    "backdrop": "https://thumb.canalplus.pro/http/unsafe/1440x810/filters:quality(80)/img-hapi.canalplus.pro:80/ServiceImage/ImageID/109613910",
    "video_url": "https://vidzy.org/embed-4b2ynfz6ddh9.html",
    "year": 2018,
    "duration": "1h 45m",
    "rating": "6.0",
    "maturityRating": "10+",
    "featured": false
  },
  {
    "id": "164",
    "title": "Free Guy",
    "description": "Un employé de banque découvre qu'il n'est qu'un personnage d'arrière-plan dans un jeu vidéo en ligne et décide de devenir le héros de sa propre histoire.",
    "category": "Film",
    "genre": ["Action", "Aventure", "Comédie"],
    "thumbnail": "https://wallpapers.com/images/featured/free-guy-pictures-vjxyhwaz14h88a4n.jpg",
    "backdrop": "https://wallpapers.com/images/featured/free-guy-pictures-vjxyhwaz14h88a4n.jpg",
    "video_url": "https://vidzy.org/embed-f22t9jaq6fwj.html",
    "year": 2021,
    "duration": "1h 55m",
    "rating": "7.1",
    "maturityRating": "10+",
    "featured": false
  },
  {
    "id": "165",
    "title": "The Fall Guy",
    "description": "Un cascadeur usé par le métier reprend du service sur un plateau de tournage où la star a disparu, se retrouvant mêlé à un complot criminel.",
    "category": "Film",
    "genre": ["Action", "Comédie"],
    "thumbnail": "https://antredeluciole.fr/wp-content/uploads/the-fall-guy-l-homme-qui-tombe-a-pic.jpg",
    "backdrop": "https://antredeluciole.fr/wp-content/uploads/the-fall-guy-l-homme-qui-tombe-a-pic.jpg",
    "video_url": "https://vidzy.org/embed-5a8ouyhc4xg7.html",
    "year": 2024,
    "duration": "2h 06m",
    "rating": "7.0",
    "maturityRating": "12+",
    "featured": false
  },
  {
    "id": "166",
    "title": "Ready Player One",
    "description": "Dans un futur dystopique, un adolescent cherche un trésor caché dans un univers de réalité virtuelle immense appelé l'OASIS.",
    "category": "Film",
    "genre": ["Science-fiction", "Action", "Aventure"],
    "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5xxkbkWVP9yA_9aj9HkZI_Un1GJpUKwWWbQ&s",
    "backdrop": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5xxkbkWVP9yA_9aj9HkZI_Un1GJpUKwWWbQ&s",
    "video_url": "https://vidzy.org/embed-m9unfgv5elrm.html",
    "year": 2018,
    "duration": "2h 20m",
    "rating": "7.4",
    "maturityRating": "10+",
    "featured": false
  },
  {
    "id": "167",
    "title": "Forrest Gump",
    "description": "L'histoire incroyable d'un homme simple d'esprit qui traverse les événements marquants de l'histoire américaine du XXe siècle.",
    "category": "Film",
    "genre": ["Drame", "Romance"],
    "thumbnail": "https://image.tmdb.org/t/p/w400/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",
    "backdrop": "https://lagandragons.com/wp-content/uploads/2020/09/Forrest-Gump-Movie-Poster.jpg",
    "video_url": "https://vidzy.org/embed-pzfxsdabxyoy.html",
    "year": 1994,
    "duration": "2h 22m",
    "rating": "8.8",
    "maturityRating": "10+",
    "featured": false
  },
  {
    "id": "168",
    "title": "Interstellar",
    "description": "Un groupe d'explorateurs utilise une faille spatio-temporelle pour repousser les limites de la conquête spatiale et sauver l'humanité.",
    "category": "Film",
    "genre": ["Science-fiction", "Drame"],
    "thumbnail": "https://thumbnails.cbsig.net/CBS_Production_Entertainment_VMS/2021/07/09/1919558723588/INST_SAlone_16_9_1920x1080_1887272_1920x1080.jpg",
    "backdrop": "https://thumbnails.cbsig.net/CBS_Production_Entertainment_VMS/2021/07/09/1919558723588/INST_SAlone_16_9_1920x1080_1887272_1920x1080.jpg",
    "video_url": "https://vidzy.org/embed-klmzta4kjysa.html",
    "year": 2014,
    "duration": "2h 49m",
    "rating": "8.7",
    "maturityRating": "10+",
    "featured": false
  },
  {
    "id": "169",
    "title": "Parasite",
    "description": "Toute la famille de Ki-taek est au chômage. Elle s'intéresse particulièrement au train de vie de la richissime famille Park.",
    "category": "Film",
    "genre": ["Thriller", "Drame", "Comédie noire"],
    "thumbnail": "https://thelambertpost.com/wp-content/uploads/2019/12/unnamed-2-900x506.png",
    "backdrop": "https://thelambertpost.com/wp-content/uploads/2019/12/unnamed-2-900x506.png",
    "video_url": "https://vidzy.org/embed-s57hfcaoodvx.html",
    "year": 2019,
    "duration": "2h 12m",
    "rating": "8.5",
    "maturityRating": "12+",
    "featured": false
  },
  {
    "id": "170",
    "title": "WALL·E",
    "description": "Un petit robot compacteur de déchets laissé seul sur Terre tombe amoureux d'une sonde spatiale et la suit dans une aventure qui changera le destin de l'humanité.",
    "category": "Film",
    "genre": ["Animation", "Science-fiction", "Famille"],
    "thumbnail": "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/420d143c-4a83-4cf8-8c90-03fb28a6c19c/compose?aspectRatio=1.78&format=webp&width=1200",
    "backdrop": "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/420d143c-4a83-4cf8-8c90-03fb28a6c19c/compose?aspectRatio=1.78&format=webp&width=1200",
    "video_url": "https://vidzy.org/embed-4ocscfe6vpl1.html",
    "year": 2008,
    "duration": "1h 38m",
    "rating": "8.4",
    "maturityRating": "Tous publics",
    "featured": false
  },
  {
    "id": "171",
    "title": "Your Name.",
    "description": "Deux adolescents, l'un vivant à Tokyo et l'autre dans un village rural, commencent mystérieusement à échanger leurs corps.",
    "category": "Film",
    "genre": ["Animation", "Romance", "Fantastique"],
    "thumbnail": "https://i.pinimg.com/736x/15/4f/6c/154f6ca485b9abbaa503e64fad3a9ab9.jpg",
    "backdrop": "https://i.pinimg.com/736x/15/4f/6c/154f6ca485b9abbaa503e64fad3a9ab9.jpg",
    "video_url": "https://vidzy.org/embed-arkl2rteddb8.html",
    "year": 2016,
    "duration": "1h 46m",
    "rating": "8.4",
    "maturityRating": "10+",
    "featured": false
  },
  {
    "id": "172",
    "title": "Le Loup de Wall Street",
    "description": "L'ascension fulgurante et la chute spectaculaire du courtier en bourse Jordan Belfort, rythmée par la drogue, l'argent et les excès.",
    "category": "Film",
    "genre": ["Biopic", "Comédie", "Crime"],
    "thumbnail": "https://nospensees.fr/wp-content/uploads/2018/03/le-loup-de-wall-street.jpg",
    "backdrop": "https://nospensees.fr/wp-content/uploads/2018/03/le-loup-de-wall-street.jpg",
    "video_url": "https://vidzy.org/embed-hw6jmtan8y2h.html",
    "year": 2013,
    "duration": "3h 00m",
    "rating": "8.2",
    "maturityRating": "16+",
    "featured": false
  },
  {
    "id": "173",
    "title": "Oppenheimer",
    "description": "Le parcours de J. Robert Oppenheimer, le physicien théoricien américain qui a joué un rôle clé dans le développement de la bombe atomique.",
    "category": "Film",
    "genre": ["Biopic", "Drame", "Historique"],
    "thumbnail": "https://i.ytimg.com/vi/CoXtvSRpHgM/maxresdefault.jpg",
    "backdrop": "https://i.ytimg.com/vi/CoXtvSRpHgM/maxresdefault.jpg",
    "video_url": "https://vidzy.org/embed-3yqwxbmaris0.html",
    "year": 2023,
    "duration": "3h 00m",
    "rating": "8.3",
    "maturityRating": "12+",
    "featured": false
  },
  {
    "id": "174",
    "title": "The Truman Show",
    "description": "Un agent d'assurances découvre que toute sa vie est en réalité une émission de télé-réalité filmée 24h/24 et regardée par le monde entier.",
    "category": "Film",
    "genre": ["Comédie dramatique", "Science-fiction"],
    "thumbnail": "https://digitalcine.fr/wp-content/uploads/2023/06/the-truman-show-peter-weir-blu-ray-4k-uhd-une.jpg",
    "backdrop": "https://digitalcine.fr/wp-content/uploads/2023/06/the-truman-show-peter-weir-blu-ray-4k-uhd-une.jpg",
    "video_url": "https://vidzy.org/embed-915ay4yb98mp.html",
    "year": 1998,
    "duration": "1h 43m",
    "rating": "8.2",
    "maturityRating": "10+",
    "featured": false
  },
  {
    "id": "175",
    "title": "Top Gun: Maverick",
    "description": "Après plus de trente ans de service, Pete 'Maverick' Mitchell retourne à l'école Top Gun pour former une nouvelle génération de pilotes.",
    "category": "Film",
    "genre": ["Action", "Drame"],
    "thumbnail": "https://www.singe-urbain.com/wp-content/uploads/2024/02/top-gun-maverick-affiche.jpg",
    "backdrop": "https://www.singe-urbain.com/wp-content/uploads/2024/02/top-gun-maverick-affiche.jpg",
    "video_url": "https://vidzy.org/embed-wd7meuigxpr2.html",
    "year": 2022,
    "duration": "2h 10m",
    "rating": "8.3",
    "maturityRating": "10+",
    "featured": false
  },
  {
    "id": "176",
    "title": "Top Gun",
    "description": "Les aventures et les rivalités de jeunes pilotes de chasse d'élite à l'école de l'aéronavale américaine.",
    "category": "Film",
    "genre": ["Action", "Drame"],
    "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5gLaC3jGEgvtKXNJYRXNJJbtcqzkwn8iBqA&s",
    "backdrop": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5gLaC3jGEgvtKXNJYRXNJJbtcqzkwn8iBqA&s",
    "video_url": "https://vidzy.org/embed-weetazcka4z7.html",
    "year": 1986,
    "duration": "1h 50m",
    "rating": "6.9",
    "maturityRating": "10+",
    "featured": false
  },
  {
    "id": "177",
    "title": "Le Mans '66",
    "description": "L'histoire vraie de l'ingénieur Carroll Shelby et du pilote Ken Miles, engagés par Ford pour construire une voiture capable de battre Ferrari.",
    "category": "Film",
    "genre": ["Drame", "Biopic", "Sport"],
    "thumbnail": "https://proxymedia.woopic.com/api/v1/images/331%2FLEMANS66XXXW0163027_BAN1_2424_NEWTV_HD.jpg",
    "backdrop": "https://proxymedia.woopic.com/api/v1/images/331%2FLEMANS66XXXW0163027_BAN1_2424_NEWTV_HD.jpg",
    "video_url": "https://vidzy.org/embed-3fjdgd5uanvg.html",
    "year": 2019,
    "duration": "2h 32m",
    "rating": "8.1",
    "maturityRating": "10+",
    "featured": false
  },
  {
    "id": "178",
    "title": "Pixels",
    "description": "Des extraterrestres attaquent la Terre en utilisant des modèles de jeux vidéo d'arcade des années 80 comme armes de destruction.",
    "category": "Film",
    "genre": ["Action", "Comédie", "Science-fiction"],
    "thumbnail": "https://gangeekstyle.com/wp-content/uploads/2016/04/maxresdefault.jpg",
    "backdrop": "https://gangeekstyle.com/wp-content/uploads/2016/04/maxresdefault.jpg",
    "video_url": "https://vidzy.org/embed-r7yucik3gcvy.html",
    "year": 2015,
    "duration": "1h 46m",
    "rating": "5.6",
    "maturityRating": "10+",
    "featured": false
  },
  {
    "id": "179",
    "title": "Le Labyrinthe",
    "description": "Thomas se réveille dans un lieu étrange entouré d'un labyrinthe géant, sans aucun souvenir de son passé, aux côtés d'autres garçons.",
    "category": "Film",
    "genre": ["Action", "Science-fiction", "Thriller"],
    "thumbnail": "https://www.actusf.com/files/new_images/actualit%C3%A9s/2024%20Semestre%201/LeLabyrinthe.png",
    "backdrop": "https://www.actusf.com/files/new_images/actualit%C3%A9s/2024%20Semestre%201/LeLabyrinthe.png",
    "video_url": "https://vidzy.org/embed-frzaz3eu8n68.html",
    "year": 2014,
    "duration": "1h 53m",
    "rating": "6.8",
    "maturityRating": "12+",
    "featured": false
  },
  {
    "id": "180",
    "title": "Le Labyrinthe : La Terre brûlée",
    "description": "Après avoir échappé au Labyrinthe, Thomas et ses amis doivent faire face à un nouveau défi sur une Terre dévastée.",
    "category": "Film",
    "genre": ["Action", "Science-fiction"],
    "thumbnail": "https://proxymedia.woopic.com/api/v1/images/331%2FTHEMAZERUNNW0103638_BAN1_2424_NEWTV_HD.jpg",
    "backdrop": "https://proxymedia.woopic.com/api/v1/images/331%2FTHEMAZERUNNW0103638_BAN1_2424_NEWTV_HD.jpg",
    "video_url": "https://vidzy.org/embed-4hrl65fu2uo4.html",
    "year": 2015,
    "duration": "2h 11m",
    "rating": "6.3",
    "maturityRating": "12+",
    "featured": false
  },
  {
    "id": "181",
    "title": "Le Labyrinthe : Le Remède mortel",
    "description": "Pour sauver leurs amis, Thomas et les Blocards doivent pénétrer dans la légendaire Dernière Ville contrôlée par l'organisation WICKED.",
    "category": "Film",
    "genre": ["Action", "Science-fiction"],
    "thumbnail": "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/081f513a-93e8-429e-b7a7-11c4f31b6d6f/compose?aspectRatio=1.78&format=webp&width=1200",
    "backdrop": "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/081f513a-93e8-429e-b7a7-11c4f31b6d6f/compose?aspectRatio=1.78&format=webp&width=1200",
    "video_url": "https://vidzy.org/embed-6ztx1orbvimw.html",
    "year": 2018,
    "duration": "2h 23m",
    "rating": "6.2",
    "maturityRating": "12+",
    "featured": false
  },
  {
    "id": "182",
    "title": "Dune",
    "description": "Paul Atreides, un jeune homme brillant, doit se rendre sur la planète la plus dangereuse de l'univers pour assurer l'avenir de sa famille et de son peuple.",
    "category": "Film",
    "genre": ["Science-fiction", "Aventure", "Drame"],
    "thumbnail": "https://cdna.artstation.com/p/assets/images/images/046/331/706/large/lars-dune-3.jpg?1644866430",
    "backdrop": "https://cdna.artstation.com/p/assets/images/images/046/331/706/large/lars-dune-3.jpg?1644866430",
    "video_url": "https://vidzy.org/embed-8xx0mtz9p5vy.html",
    "year": 2021,
    "duration": "2h 35m",
    "rating": "8.0",
    "maturityRating": "10+",
    "featured": false
  },
  {
    "id": "183",
    "title": "Dune, deuxième partie",
    "description": "Paul Atreides s'unit à Chani et aux Fremen pour mener la révolte contre ceux qui ont anéanti sa famille.",
    "category": "Film",
    "genre": ["Science-fiction", "Aventure", "Action"],
    "thumbnail": "https://xyz.comic.systems/images/affiche/cinema/Dune2",
    "backdrop": "https://xyz.comic.systems/images/affiche/cinema/Dune2",
    "video_url": "https://vidzy.org/embed-ldfm9dessufv.html",
    "year": 2024,
    "duration": "2h 46m",
    "rating": "8.6",
    "maturityRating": "12+",
    "featured": false
  },
  {
    "id": "184",
    "title": "Retour vers le futur",
    "description": "Un lycéen est accidentellement envoyé trente ans dans le passé dans une DeLorean voyageant dans le temps inventée par son ami scientifique.",
    "category": "Film",
    "genre": ["Science-fiction", "Aventure", "Comédie"],
    "thumbnail": "https://45.kidiklik.fr/sites/default/files/styles/crop_image/public/2024-06/Retour%20vers%20le%20futur.png?itok=UVDIW9SE",
    "backdrop": "https://45.kidiklik.fr/sites/default/files/styles/crop_image/public/2024-06/Retour%20vers%20le%20futur.png?itok=UVDIW9SE",
    "video_url": "https://vidzy.org/embed-mkdgcm7sqn6e.html",
    "year": 1985,
    "duration": "1h 56m",
    "rating": "8.5",
    "maturityRating": "Tous publics",
    "featured": false
  },
  {
    "id": "185",
    "title": "Retour vers le futur 2",
    "description": "Marty et Doc voyagent en 2015 pour empêcher le futur fils de Marty de commettre une erreur, mais perturbent le continuum espace-temps.",
    "category": "Film",
    "genre": ["Science-fiction", "Aventure", "Comédie"],
    "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeXdNR535WC95lruR_4MlLsAvUkdeW4Dskyw&s",
    "backdrop": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeXdNR535WC95lruR_4MlLsAvUkdeW4Dskyw&s",
    "video_url": "https://vidzy.org/embed-xiw7kdkumz6j.html",
    "year": 1989,
    "duration": "1h 48m",
    "rating": "7.8",
    "maturityRating": "Tous publics",
    "featured": false
  },
  {
    "id": "186",
    "title": "Retour vers le futur 3",
    "description": "Bloqué en 1955, Marty doit voyager vers le Far West de 1885 pour sauver Doc Brown d'une mort prématurée.",
    "category": "Film",
    "genre": ["Science-fiction", "Western", "Comédie"],
    "thumbnail": "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/019b248c-a61a-7045-a86c-ef49915e50a5/compose?aspectRatio=1.78&format=webp&width=1200",
    "backdrop": "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/019b248c-a61a-7045-a86c-ef49915e50a5/compose?aspectRatio=1.78&format=webp&width=1200",
    "video_url": "https://vidzy.org/embed-iy7ea2rp52l6.html",
    "year": 1990,
    "duration": "1h 58m",
    "rating": "7.4",
    "maturityRating": "Tous publics",
    "featured": false
  },
  {
    "id": "187",
    "title": "Terminator",
    "description": "Un cyborg est envoyé du futur pour assassiner Sarah Connor, dont le fils à naître doit sauver l'humanité de l'extinction.",
    "category": "Film",
    "genre": ["Science-fiction", "Action"],
    "thumbnail": "https://media.gettyimages.com/id/86871480/fr/photo/barcelona-spain-the-terminator-robot-is-seen-in-the-paddock-following-qualifying-for-the.jpg?s=612x612&w=gi&k=20&c=as0X0vm5qUhoCjsYUwQGanCNUvF6__LsAwHMSojhKNQ=",
    "backdrop": "https://media.gettyimages.com/id/86871480/fr/photo/barcelona-spain-the-terminator-robot-is-seen-in-the-paddock-following-qualifying-for-the.jpg?s=612x612&w=gi&k=20&c=as0X0vm5qUhoCjsYUwQGanCNUvF6__LsAwHMSojhKNQ=",
    "video_url": "https://vidzy.org/embed-y14c3xl4riyp.html",
    "year": 1984,
    "duration": "1h 47m",
    "rating": "8.1",
    "maturityRating": "12+",
    "featured": false
  },
  {
    "id": "188",
    "title": "Terminator 2",
    "description": "Un cyborg identique à celui qui a échoué à tuer Sarah Connor doit maintenant protéger son fils adolescent d'un cyborg plus avancé et plus puissant.",
    "category": "Film",
    "genre": ["Science-fiction", "Action"],
    "thumbnail": "https://cordcuttersnews.com/wp-content/uploads/2025/07/TERM2_US_1991_SA_16x9_1920x1080_NB_2307948_1920x1080.jpg",
    "backdrop": "https://cordcuttersnews.com/wp-content/uploads/2025/07/TERM2_US_1991_SA_16x9_1920x1080_NB_2307948_1920x1080.jpg",
    "video_url": "https://vidzy.org/embed-zj6meows9no8.html",
    "year": 1991,
    "duration": "2h 17m",
    "rating": "8.6",
    "maturityRating": "12+",
    "featured": false
  },
  {
    "id": "189",
    "title": "Terminator 3 : Le Soulèvement des machines",
    "description": "Un guerrier cybernétique d'un futur post-apocalyptique voyage dans le temps pour protéger un jeune homme et sa future femme d'une machine à tuer robotique avancée.",
    "category": "Film",
    "genre": ["Science-fiction", "Action"],
    "thumbnail": "https://m.media-amazon.com/images/S/pv-target-images/3e45ef3f36b4f0217a2b839bdbb418ca026358e8efa40cdd5afe3ba8a17d09c9.jpg",
    "backdrop": "https://m.media-amazon.com/images/S/pv-target-images/3e45ef3f36b4f0217a2b839bdbb418ca026358e8efa40cdd5afe3ba8a17d09c9.jpg",
    "video_url": "https://vidzy.org/embed-0t5df82gqp8g.html",
    "year": 2003,
    "duration": "1h 49m",
    "rating": "6.3",
    "maturityRating": "12+",
    "featured": false
  },
  {
    "id": "190",
    "title": "Terminator Renaissance",
    "description": "En 2018, John Connor mène la guerre contre Skynet et découvre un mystérieux inconnu dont le passé pourrait détenir la clé du salut de l'humanité.",
    "category": "Film",
    "genre": ["Science-fiction", "Action"],
    "thumbnail": "https://proxymedia.woopic.com/api/v1/images/331%2Fterminator-renaissance%7CTERMINATORRW0021166_BAN1_2424_NEWTV_HD.jpg",
    "backdrop": "https://proxymedia.woopic.com/api/v1/images/331%2Fterminator-renaissance%7CTERMINATORRW0021166_BAN1_2424_NEWTV_HD.jpg",
    "video_url": "https://vidzy.org/embed-eqmdmdsdubpe.html",
    "year": 2009,
    "duration": "1h 55m",
    "rating": "6.5",
    "maturityRating": "12+",
    "featured": false
  },
  {
    "id": "191",
    "title": "Terminator Genisys",
    "description": "Lorsque John Connor envoie Kyle Reese en 1984 pour protéger sa mère, un événement inattendu crée une ligne temporelle fracturée.",
    "category": "Film",
    "genre": ["Science-fiction", "Action"],
    "thumbnail": "https://img.goodfon.com/wallpaper/big/a/28/arnold-schwarzenegger-terminator-genezis-terminator-genisys.webp",
    "backdrop": "https://img.goodfon.com/wallpaper/big/a/28/arnold-schwarzenegger-terminator-genezis-terminator-genisys.webp",
    "video_url": "https://vidzy.org/embed-0xt65etk51z6.html",
    "year": 2015,
    "duration": "2h 06m",
    "rating": "6.3",
    "maturityRating": "12+",
    "featured": false
  },
  {
    "id": "192",
    "title": "Terminator: Dark Fate",
    "description": "Sarah Connor et une humaine augmentée doivent protéger une jeune femme d'un nouveau Terminator liquide envoyé du futur.",
    "category": "Film",
    "genre": ["Science-fiction", "Action"],
    "thumbnail": "https://m.media-amazon.com/images/S/pv-target-images/b68784967103d20a0a0b4ab61fd77d1c763fbcd7e2897edcacd39cd2e35000cf.jpg",
    "backdrop": "https://m.media-amazon.com/images/S/pv-target-images/b68784967103d20a0a0b4ab61fd77d1c763fbcd7e2897edcacd39cd2e35000cf.jpg",
    "video_url": "https://vidzy.org/embed-gch6miea9aax.html",
    "year": 2019,
    "duration": "2h 08m",
    "rating": "6.2",
    "maturityRating": "12+",
    "featured": false
  },
  {
    "id": "193",
    "title": "Gladiator",
    "description": "Un ancien général romain cherche à se venger de l'empereur corrompu qui a assassiné sa famille et l'a envoyé en esclavage.",
    "category": "Film",
    "genre": ["Péplum", "Action", "Drame"],
    "thumbnail": "https://www.screentune.com/wp-content/uploads/2019/04/94538.jpg",
    "backdrop": "https://www.screentune.com/wp-content/uploads/2019/04/94538.jpg",
    "video_url": "https://vidzy.org/embed-j56lyiu8iliv.html",
    "year": 2000,
    "duration": "2h 35m",
    "rating": "8.5",
    "maturityRating": "12+",
    "featured": false
  },
  {
    "id": "194",
    "title": "Gladiator 2",
    "description": "Des années après la mort de Maximus, Lucius est forcé d'entrer dans le Colisée après la conquête de son foyer par les empereurs tyranniques.",
    "category": "Film",
    "genre": ["Péplum", "Action", "Aventure"],
    "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjMLhjFlhNs_juxKd_7Pb2cYA5Xuj6BIwdeQ&s",
    "backdrop": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjMLhjFlhNs_juxKd_7Pb2cYA5Xuj6BIwdeQ&s",
    "video_url": "https://vidzy.org/embed-as5wdq6fo58j.html",
    "year": 2024,
    "duration": "2h 28m",
    "rating": "7.0",
    "maturityRating": "12+",
    "featured": false
  },
  {
    "id": "195",
    "title": "Yoroï",
    "description": "Un homme s'installe au Japon pour commencer une nouvelle vie, mais découvre une mystérieuse armure qui va bouleverser son destin.",
    "category": "Film",
    "genre": ["Fantastique", "Action"],
    "thumbnail": "https://assets.diverto.tv/media/yoroi.jpg?w=800&h=418&fit=crop&fm=webp&s=5243759d70da4f71321b67a27dfd26a1",
    "backdrop": "https://assets.diverto.tv/media/yoroi.jpg?w=800&h=418&fit=crop&fm=webp&s=5243759d70da4f71321b67a27dfd26a1",
    "video_url": "https://vidzy.org/embed-r1nwq6bzduij.html",
    "year": 2025,
    "duration": "1h 50m",
    "rating": "N/A",
    "maturityRating": "12+",
    "featured": false
  },
  {
    "id": "196",
    "title": "One Piece : Le Film",
    "description": "Luffy et son équipage affrontent le pirate El Drago qui recherche le trésor légendaire du capitaine Woonan, caché sur une île lointaine.",
    "category": "Film",
    "genre": ["Animation", "Aventure", "Fantastique"],
    "thumbnail": "https://m.media-amazon.com/images/M/MV5BNGI1MDkyMDgtMzA1My00ZWM4LWJhYmItNDcwNTEzZWNmNzJlXkEyXkFqcGc@._V1_.jpg",
    "backdrop": "https://m.media-amazon.com/images/M/MV5BNGI1MDkyMDgtMzA1My00ZWM4LWJhYmItNDcwNTEzZWNmNzJlXkEyXkFqcGc@._V1_.jpg",
    "video_url": "",
    "year": 2000,
    "duration": "50m",
    "rating": "6.6",
    "maturityRating": "10+",
    "featured": false
  },
  {
    "id": "197",
    "title": "One Piece : L'Aventure de l'île de l'horloge",
    "description": "L'équipage du Chapeau de Paille doit récupérer son navire, le Vogue Merry, volé par les frères Trump sur l'île de l'Horloge.",
    "category": "Film",
    "genre": ["Animation", "Aventure", "Comédie"],
    "thumbnail": "https://media.senscritique.com/media/000017643447/1200/one_piece_l_aventure_de_l_ile_de_l_horloge.jpg",
    "backdrop": "https://media.senscritique.com/media/000017643447/1200/one_piece_l_aventure_de_l_ile_de_l_horloge.jpg",
    "video_url": "",
    "year": 2001,
    "duration": "55m",
    "rating": "6.7",
    "maturityRating": "10+",
    "featured": false
  },
  {
    "id": "198",
    "title": "One Piece : Le Royaume de Chopper, l'île des bêtes étranges",
    "description": "Chopper devient accidentellement le roi d'une île peuplée d'animaux étranges, tandis que ses amis recherchent un trésor légendaire.",
    "category": "Film",
    "genre": ["Animation", "Aventure", "Fantastique"],
    "thumbnail": "https://www.manga-news.com/public/2013/dvd/one-piece-film-3-chopper-kingdom-screenshot-5.jpg",
    "backdrop": "https://www.manga-news.com/public/2013/dvd/one-piece-film-3-chopper-kingdom-screenshot-5.jpg",
    "video_url": "",
    "year": 2002,
    "duration": "56m",
    "rating": "6.5",
    "maturityRating": "10+",
    "featured": false
  },
  {
    "id": "199",
    "title": "One Piece : L'Aventure sans issue",
    "description": "Luffy et son équipage participent à une course de pirates clandestine et dangereuse, la 'Dead End Race', contre un ancien marine redoutable.",
    "category": "Film",
    "genre": ["Animation", "Aventure", "Action"],
    "thumbnail": "https://m.media-amazon.com/images/S/pv-target-images/539279e8cfc4d7ddb649f3268236533c0a643ccb53cca7be55451ae4b61379b9.jpg",
    "backdrop": "https://m.media-amazon.com/images/S/pv-target-images/539279e8cfc4d7ddb649f3268236533c0a643ccb53cca7be55451ae4b61379b9.jpg",
    "video_url": "",
    "year": 2003,
    "duration": "1h 35m",
    "rating": "7.1",
    "maturityRating": "10+",
    "featured": false
  },
  {
    "id": "200",
    "title": "One Piece : La Malédiction de l'épée sacrée",
    "description": "Zoro retrouve un ami d'enfance corrompu par une épée maudite sur l'île d'Aska, mettant en péril sa loyauté envers l'équipage.",
    "category": "Film",
    "genre": ["Animation", "Aventure", "Fantastique"],
    "thumbnail": "https://m.media-amazon.com/images/S/pv-target-images/b3ac5405906bd411329b0498a52fde060292714e9d913ba1331d685d1bea27f0.jpg",
    "backdrop": "https://m.media-amazon.com/images/S/pv-target-images/b3ac5405906bd411329b0498a52fde060292714e9d913ba1331d685d1bea27f0.jpg",
    "video_url": "https://vidzy.org/embed-9ogehjddakrw.html",
    "year": 2004,
    "duration": "1h 35m",
    "rating": "6.6",
    "maturityRating": "10+",
    "featured": false
  },
  {
    "id": "201",
    "title": "One Piece : Le Baron Omatsuri et l'Île secrète",
    "description": "L'équipage accepte une invitation sur une île de villégiature, mais découvre que son hôte, le Baron Omatsuri, cache un sombre secret.",
    "category": "Film",
    "genre": ["Animation", "Aventure", "Horreur"],
    "thumbnail": "https://m.media-amazon.com/images/S/pv-target-images/a5398a65ab528968a0de869bcb0516c1bb31b95500e71677cb1790c8ca18763e.jpg",
    "backdrop": "https://m.media-amazon.com/images/S/pv-target-images/a5398a65ab528968a0de869bcb0516c1bb31b95500e71677cb1790c8ca18763e.jpg",
    "video_url": "",
    "year": 2005,
    "duration": "1h 32m",
    "rating": "7.3",
    "maturityRating": "12+",
    "featured": false
  },
  {
    "id": "202",
    "title": "One Piece : Le Mecha géant du château Karakuri",
    "description": "Les pirates découvrent une vieille dame dans un coffre au trésor qui leur promet une récompense légendaire s'ils la ramènent chez elle.",
    "category": "Film",
    "genre": ["Animation", "Aventure", "Comédie"],
    "thumbnail": "https://m.media-amazon.com/images/S/pv-target-images/1ebc9de1951fb5c6dc88d433e06d07bd04355d93b71b4c8628fdf82c4fff86da.jpg",
    "backdrop": "https://m.media-amazon.com/images/S/pv-target-images/1ebc9de1951fb5c6dc88d433e06d07bd04355d93b71b4c8628fdf82c4fff86da.jpg",
    "video_url": "",
    "year": 2006,
    "duration": "1h 34m",
    "rating": "6.5",
    "maturityRating": "10+",
    "featured": false
  },
  {
    "id": "203",
    "title": "One Piece : Épisode d'Alabasta",
    "description": "Une relecture cinématographique de l'arc Alabasta, où l'équipage aide la princesse Vivi à sauver son royaume d'une guerre civile.",
    "category": "Film",
    "genre": ["Animation", "Aventure", "Action"],
    "thumbnail": "https://m.media-amazon.com/images/S/pv-target-images/e52c0c3ee486a7f21f2ac5a905005d15123b34a560382631ae3c848bd7fcad54.jpg",
    "backdrop": "https://m.media-amazon.com/images/S/pv-target-images/e52c0c3ee486a7f21f2ac5a905005d15123b34a560382631ae3c848bd7fcad54.jpg",
    "video_url": "",
    "year": 2007,
    "duration": "1h 30m",
    "rating": "6.8",
    "maturityRating": "10+",
    "featured": false
  },
  {
    "id": "204",
    "title": "One Piece : Épisode de Chopper",
    "description": "Une version alternative de l'histoire de Chopper et de son recrutement par l'équipage, avec de nouveaux personnages et rebondissements.",
    "category": "Film",
    "genre": ["Animation", "Aventure", "Comédie dramatique"],
    "thumbnail": "https://assets.bubblebd.com/art/images/large/11730.jpeg",
    "backdrop": "https://assets.bubblebd.com/art/images/large/11730.jpeg",
    "video_url": "",
    "year": 2008,
    "duration": "1h 53m",
    "rating": "6.9",
    "maturityRating": "10+",
    "featured": false
  },
  {
    "id": "205",
    "title": "One Piece: Strong World",
    "description": "Le légendaire pirate Shiki le Lion d'Or enlève Nami et force l'équipage à lutter pour leur survie sur des îles flottantes peuplées de monstres.",
    "category": "Film",
    "genre": ["Animation", "Aventure", "Action"],
    "thumbnail": "https://wallpapers.com/images/hd/one-piece-pictures-eg5sb8cgow7re7u1.jpg",
    "backdrop": "https://wallpapers.com/images/hd/one-piece-pictures-eg5sb8cgow7re7u1.jpg",
    "video_url": "",
    "year": 2009,
    "duration": "1h 53m",
    "rating": "7.5",
    "maturityRating": "10+",
    "featured": false
  },
  {
    "id": "206",
    "title": "One Piece 3D : À la poursuite du chapeau de paille",
    "description": "Luffy perd son précieux chapeau de paille et se lance dans une course-poursuite effrénée à travers l'océan pour le récupérer.",
    "category": "Film",
    "genre": ["Animation", "Aventure", "Court métrage"],
    "thumbnail": "https://image.tmdb.org/t/p/w1280/dpwfPVCD2eQgEWY7GtCYAyRaVAP.jpg",
    "backdrop": "https://image.tmdb.org/t/p/w1280/dpwfPVCD2eQgEWY7GtCYAyRaVAP.jpg",
    "video_url": "",
    "year": 2011,
    "duration": "30m",
    "rating": "6.4",
    "maturityRating": "Tous publics",
    "featured": false
  },
  {
    "id": "207",
    "title": "One Piece : Z",
    "description": "Un ancien amiral de la Marine nommé Z menace de détruire le Nouveau Monde, forçant Luffy et ses amis à l'arrêter.",
    "category": "Film",
    "genre": ["Animation", "Action", "Aventure"],
    "thumbnail": "https://media.senscritique.com/media/000017643530/1200/one_piece_z.jpg",
    "backdrop": "https://media.senscritique.com/media/000017643530/1200/one_piece_z.jpg",
    "video_url": "",
    "year": 2012,
    "duration": "1h 48m",
    "rating": "7.8",
    "maturityRating": "10+",
    "featured": false
  },
  {
    "id": "208",
    "title": "One Piece : Gold",
    "description": "L'équipage visite Gran Tesoro, une ville de divertissement flottante dirigée par Gild Tesoro, un homme obsédé par l'or et le pouvoir.",
    "category": "Film",
    "genre": ["Animation", "Aventure", "Fantastique"],
    "thumbnail": "https://images.fathomevents.com/image/upload/w_2000,dpr_2,f_auto,q_auto/v1654286376/Events/2022/1663/One_Piece_Gold_1920x700.jpg.jpg",
    "backdrop": "https://images.fathomevents.com/image/upload/w_2000,dpr_2,f_auto,q_auto/v1654286376/Events/2022/1663/One_Piece_Gold_1920x700.jpg.jpg",
    "video_url": "https://vidzy.org/embed-n1i2vc572vbs.html",
    "year": 2016,
    "duration": "2h 00m",
    "rating": "7.2",
    "maturityRating": "10+",
    "featured": false
  },
  {
    "id": "209",
    "title": "One Piece : Stampede",
    "description": "Les plus grands pirates du monde se rassemblent pour une expo pirate massive afin de trouver un trésor laissé par Gol D. Roger.",
    "category": "Film",
    "genre": ["Animation", "Action", "Aventure"],
    "thumbnail": "https://freakingeek.com/wp-content/uploads/2020/06/OnePieceStampede-Banniere-800x445.jpg",
    "backdrop": "https://freakingeek.com/wp-content/uploads/2020/06/OnePieceStampede-Banniere-800x445.jpg",
    "video_url": "https://vidzy.org/embed-l5nhj9dck5qy.html",
    "year": 2019,
    "duration": "1h 41m",
    "rating": "7.5",
    "maturityRating": "10+",
    "featured": false
  },
  {
    "id": "210",
    "title": "One Piece : Red",
    "description": "Uta, la chanteuse la plus aimée au monde et fille de Shanks le Roux, révèle son identité lors d'un concert qui change le destin du monde.",
    "category": "Film",
    "genre": ["Animation", "Action", "Musical"],
    "thumbnail": "https://i.pathehome.com/product/global/phf-re61dfg4mg/727e82-onepiecefilmred_b_fr.png?auto=format,compress",
    "backdrop": "https://i.pathehome.com/product/global/phf-re61dfg4mg/727e82-onepiecefilmred_b_fr.png?auto=format,compress",
    "video_url": "https://vidzy.org/embed-6ueuvgpv0spv.html",
    "year": 2022,
    "duration": "1h 55m",
    "rating": "6.6",
    "maturityRating": "10+",
    "featured": false
  },
  {
    "id": "211",
    "title": "Bad Boys 4 : Ride or Die",
    "description": "Le détective de Miami Mike Lowrey apprend que son ex-supérieur à l'escouade anti-drogue, le défunt capitaine Howard, aurait reçu des centaines de millions de dollars de la part des cartels mexicains. Avec son coéquipier et ami Marcus Burnett, Mike entreprend de blanchir la réputation de Howard. Or, le meurtrier du capitaine, le trafiquant Armando Aretas, est le seul à pouvoir identifier le véritable traître au sein des forces de police de Miami. Et puisque le repenti Armando est également le fils de Mike, ce dernier obtient qu'il soit temporairement libéré de prison pour participer à l'enquête. Mais ce faisant, Marcus, Mike et son fils se retrouvent à leur tour compromis par le chef des conspirateurs, qui lance des chasseurs de primes à leurs trousses.",
    "category": "Film",
    "genre": ["Action", "Crime", "Thriller", "Comédie"],
    "thumbnail": "https://m.media-amazon.com/images/S/aplus-media-library-service-media/ddfac719-2a6b-4343-901d-2af13be5ca68.__CR174,0,3492,2160_PT0_SX970_V1___.jpg",
    "backdrop": "https://m.media-amazon.com/images/S/aplus-media-library-service-media/ddfac719-2a6b-4343-901d-2af13be5ca68.__CR174,0,3492,2160_PT0_SX970_V1___.jpg",
    "video_url": "https://vidzy.org/embed-al4e6qkji5am.html",
    "year": 2024,
    "duration": "1h 55m",
    "rating": "7",
    "maturityRating": "16+",
    "featured": false
  },
  { "id": "212", "title": "28 ans plus tard : Le Temple des morts", "description": "Le docteur Kelson noue une relation aussi troublante qu'inattendue dont les répercussions sont susceptibles de bouleverser le monde. De l'autre côté, la rencontre entre Spike et Jimmy Crystal tourne au cauchemar.", "category": "Film", "genre": ["Horreur", "Thriller"], "thumbnail": "https://image.tmdb.org/t/p/w500/9Q1KexhHbHJFbiKjV4PUeMFt64N.jpg", "backdrop": "https://image.tmdb.org/t/p/w500/9Q1KexhHbHJFbiKjV4PUeMFt64N.jpg", "video_url": "https://vidzy.org/embed-ok9h3y6py4ir.html", "year": 2026, "duration": "2h 00min", "rating": "7.2", "maturityRating": "16+", "featured": false },

  { "id": "213", "title": "Exit 8", "description": "Un homme piégé dans un couloir de métro cherche la sortie numéro 8. Pour la trouver, il faut traquer les anomalies. S’il en voit une, il fait demi-tour. S’il n’en voit aucune, il continue. Mais s’il se trompe, il est renvoyé à son point de départ. Parviendra-t-il à sortir de ce couloir sans fin ?", "category": "Film", "genre": ["Horreur","Mystère", "Thriller"], "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReN1UxYmqHhPwMfeme72WUod5wmUyXFHqGDA&s", "backdrop": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReN1UxYmqHhPwMfeme72WUod5wmUyXFHqGDA&s", "video_url": "https://vidzy.org/embed-28o6ot3y8dqp.html", "year": 2025, "duration": "1h 40min", "rating": "6.4", "maturityRating": "14+", "featured": false },

  { "id": "214", "title": "Bob l'éponge, le film : Un pour tous, tous pirates !", "description": "Bob l’Éponge et ses amis quittent Bikini Bottom pour leur plus grande aventure ! Voulant prouver qu’il est un grand garçon, Bob invoque par erreur le terrifiant Hollandais Volant, un pirate fantôme légendaire. Propulsés dans une quête délirante, Bob et Patrick devront relever des défis titanesques, suivis de près par une équipe de sauvetage. Au fil des épreuves, Bob découvre que le véritable courage réside dans l’amitié : ensemble, ils peuvent affronter l’inconnu et briller plus fort que jamais.", "category": "Film", "genre": ["Animation", "Comédie", "Aventure", "Famille", "Fantastique"], "thumbnail": "https://www.journaldugeek.com/app/uploads/2025/07/bob-eponge-1600x900.jpg", "backdrop": "https://www.journaldugeek.com/app/uploads/2025/07/bob-eponge-1600x900.jpg", "video_url": "https://moovtop.fr/iframe/67zp8dPGTf", "year": 2025, "duration": "1h 28min", "rating": "5.8", "maturityRating": "Tout public", "featured": false },

  { "id": "215", "title": "Kaguya, princesse cosmique", "description": "La vie d'Iroha bascule lorsque Kaguya, une chanteuse insouciante qui a fui la Lune, emménage chez elle et la convainc de se produire ensemble dans un monde virtuel.", "category": "Film", "genre": ["Animation", "Drame", "Fantastique", "Conte de fées"], "thumbnail": "https://fr.web.img4.acsta.net/r_1280_720/img/2d/c1/2dc1c03c37c45201d3ab01ba0868d682.jpg", "backdrop": "https://fr.web.img4.acsta.net/r_1280_720/img/2d/c1/2dc1c03c37c45201d3ab01ba0868d682.jpg", "video_url": "https://moovbob.fr/iframe/UDAZIa1LF5", "year": 2026, "duration": "2h 28min", "rating": "7.1", "maturityRating": "Tout public", "featured": false },

  { "id": "216", "title": "Kaiju No. 8: Mission Recon", "description": "Le Japon est infesté de kaiju, et le travail de Kafka Hibino consiste à se débarrasser de leurs carcasses. Pendant ce temps, son amie d’enfance, Mina Ashiro, grimpe les échelons dans les Forces de Défense anti-kaiju. Kafka avait abandonné l’idée de les intégrer, mais décide finalement de retenter sa chance pour se rapprocher de Mina. Un seul bémol : il devient subitement le puissant Kaiju No. 8 ! Avec la complicité de Reno Ichikawa, son jeune collègue, Kafka dissimule sa transformation et passe le concours d’entrée des Forces, dans le but de réaliser son rêve de petit garçon et de se tenir aux côtés de Mina. Lorsqu’un mystérieux kaiju doté de raison attaque la base où a lieu l’épreuve, il va devoir faire un choix cornélien dans une situation critique…", "category": "Film", "genre": ["Animation", "Action", "Science-fiction"], "thumbnail": "https://www.journaldugeek.com/app/uploads/2025/03/Kaiju-N%C2%B08.jpg", "backdrop": "https://www.journaldugeek.com/app/uploads/2025/03/Kaiju-N%C2%B08.jpg", "video_url": "https://vidzy.org/embed-rzhyffrdoazu.html", "year": 2025, "duration": "2h 00min", "rating": "6.8", "maturityRating": "14+", "featured": false },
  {
    "id": "217",
    "title": "Ferrari",
    "description": "Au cours de l'été 1957, Enzo Ferrari, ancien pilote automobile, est en crise. La faillite guette l'entreprise que lui et sa femme, Laura, ont créée à partir de rien dix ans plus tôt. Leur mariage tumultueux doit faire face au deuil d'un fils et à la reconnaissance d'un autre. Pour tenter d'assurer leur survie, il jette les dés sur une course - 1 000 miles à travers l'Italie, l'emblématique Mille Miglia.",
    "category": "Film",
    "genre": ["Biopic", "Drame", "Sport", "Historique"],
    "thumbnail": "https://letourdecran.wordpress.com/wp-content/uploads/2024/07/ferrari.jpg?w=440",
    "backdrop": "https://letourdecran.wordpress.com/wp-content/uploads/2024/07/ferrari.jpg?w=440",
    "video_url": "https://sharecloudy.com/iframe/RCvp3X2Kux",
    "year": 2024,
    "duration": "2h 10m",
    "rating": "6.4",
    "maturityRating": "Tout public",
    "featured": false
  }






];

// --- NOUVELLE COLLECTION DE SÉRIES ---
export const TV_SERIES_COLLECTION: Movie[] = [
  {
    "id": "s1",
    "title": "Arcane",
    "description": "Au milieu du conflit entre les cités jumelles de Piltover et Zaun, deux sœurs se battent dans les camps opposés d'une guerre entre technologies magiques et convictions incompatibles.",
    "category": "Série",
    "genre": ["Animation", "Action", "Fantastique", "Drame"],
    "thumbnail": "https://d18qa1zi1lagoc.cloudfront.net/articles/Yz3vVX0buQFhnrOoUsEOvIlASKPPeeJ0ERYAEoIz.png",
    "backdrop": "https://d18qa1zi1lagoc.cloudfront.net/articles/Yz3vVX0buQFhnrOoUsEOvIlASKPPeeJ0ERYAEoIz.png",
    "video_url": "", // Pas d'URL globale, on utilise les épisodes
    "trailer_url": "https://www.youtube.com/watch?v=fXmAurh012s",
    "year": 2021,
    "duration": "2 Saisons",
    "rating": "5.0",
    "maturityRating": "16+",
    "featured": true,
    "seasons": [
      {
        "seasonNumber": 1,
        "title": "Saison 1",
        "episodes": [
          {
            "id": "s1e1",
            "title": "1. Welcome to the Playground",
            "description": "Les sœurs orphelines Vi et Powder causent des remous dans les rues souterraines de Zaun à la suite d'un braquage dans le très huppé Piltover.",
            "duration": "43m",
            "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/53000/53436-1x01-welcome-to-the-playground.jpg",
            "video_url": "https://vidzy.org/embed-a6aqehhqxd95.html" // Remplace par le vrai lien
          },
          {
            "id": "s1e2",
            "title": "2. Some Mysteries Are Better Left Unsolved",
            "description": "Idéaliste, le chercheur Jayce tente de maîtriser la magie par la science malgré les avertissements de son mentor. Le criminel Silco teste une substance puissante.",
            "duration": "41m",
            "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/53000/53437-1x02-certains-mysteres-ne-devraient-jamais-etre-resolus.jpg",
            "video_url": "https://vidzy.org/embed-qya61xi65hjk.html"
          },
          {
            "id": "s1e3",
            "title": "3. The Base Violence Necessary for Change",
            "description": "Deux anciens rivaux s'affrontent lors d'un défi spectaculaire qui se révèle fatidique pour Zaun. Jayce et Viktor prennent de gros risques pour leurs recherches.",
            "duration": "44m",
            "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/53000/53438-1x03-cette-violence-crasse-necessaire-au-changement.jpg",
            "video_url": "https://vidzy.org/embed-23kxf6vdc4h8.html"
          },
          {
            "id": "s1e4",
            "title": "4. Happy Progress Day!",
            "description": "Alors que Piltover profite de leur technologie, Jayce et Viktor réfléchissent à ce qu'ils vont faire. Un visage familier ressort de Zaun pour semer la pagaille.",
            "duration": "40m",
            "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/53000/53439-1x04-joyeuse-fete-du-progres.jpg",
            "video_url": "https://vidzy.org/embed-icplyb1cubwa.html"
          },
          {
            "id": "s1e5",
            "title": "5. Everybody Wants to Be My Enemy",
            "description": "Caitlyn, la pacifieuse qui n'en fait qu'à sa tête, arpente les bas-fonds pour trouver Silco. Jayce devient une cible en combattant la corruption à Piltover.",
            "duration": "40m",
            "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/53000/53440-1x05-l-ennemi-commun.jpg",
            "video_url": "https://vidzy.org/embed-52rkf7c1k2yu.html"
          },
          {
            "id": "s1e6",
            "title": "6. SWhen These Walls Come Tumbling Down",
            "description": "Un protégé discrédite son mentor devant le Conseil à cause de l'évolution rapide d'une technologie magique. Poursuivie par les autorités, Jinx doit affronter son passé.",
            "duration": "42m",
            "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/53000/53441-1x06-quand-l-empire-s-effondre.jpg",
            "video_url": "https://vidzy.org/embed-f0lzi9rluz7c.html"
          },
          {
            "id": "s1e7",
            "title": "7. The Boy Savior",
            "description": "Caitlyn et Vi retrouvent un allié dans les rues de Zaun et se déchaînent contre une ennemie commune. Viktor prend une décision désespérée.",
            "duration": "40m",
            "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/53000/53442-1x07-le-petit-sauveur.jpg",
            "video_url": "https://vidzy.org/embed-bm9o8xmrtlwa.html"
          },
          {
            "id": "s1e8",
            "title": "8. Oil and Water",
            "description": "L'héritière désavouée Mel et sa mère échangent des tactiques de combat. Caitlyn et Vi forgent une alliance improbable. Jinx subit une étonnante transformation.",
            "duration": "40m",
            "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/53000/53443-1x08-l-eau-et-l-huile.jpg",
            "video_url": "https://vidzy.org/embed-leh1ahb76rui.html"
          },
          {
            "id": "s1e9",
            "title": "9. The Monster You Created",
            "description": "À deux doigts d'entrer en guerre, les chefs de Piltover et de Zaun sont face à un ultimatum, jusqu'à ce qu'un affrontement fatidique bouleverse les deux villes à jamais.",
            "duration": "39m",
            "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/53000/53444-1x09-rouages-et-engrenages.jpg",
            "video_url": "https://vidzy.org/embed-b63g84fnj6mx.html"
          }
        ]
      },
      {
        "seasonNumber": 2,
        "title": "Saison 2",
        "episodes": [
          {
            "id": "s2e1",
            "title": "1. Heavy Is The Crown",
            "description": "Vi et Caitlyn hésitent sur la meilleure attitude à adopter face à une horrible tragédie qui fait de nombreuses victimes et aggrave les tensions entre les villes jumelles.",
            "duration": "40m",
            "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/53000/53445-2x01-le-fardeau-des-responsabilites.jpg",
            "video_url": "https://vidzy.org/embed-r9hfw9yvjv6x.html"
          },
          {
            "id": "s2e2",
            "title": "2. Watch It All Burn",
            "description": "Tandis que Piltover prône la guerre, la Basse-Ville évalue ses options. Jinx fait profil bas et imagine son prochain coup. Une conversation décisive a lieu.",
            "duration": "39m",
            "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/53000/53446-2x02-tout-regarder-bruler.jpg",
            "video_url": "https://vidzy.org/embed-qzmupvgadyh4.html"
          },
          {
            "id": "s2e3",
            "title": "3. Finally Got the Name Right",
            "description": "Caitlyn redouble d'efforts pour capturer Jinx. Ambessa accepte une rencontre fatidique. De grands bouleversements secouent Zaun. S'ensuit une découverte choquante…",
            "duration": "40m",
            "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/53000/53447-2x03-tu-m-appelles-enfin-par-mon-nom.jpg",
            "video_url": "https://vidzy.org/embed-0n5qgi0x43ks.html"
          },
          {
            "id": "s2e4",
            "title": "4. Paint the Town Blue",
            "description": "Alors que les rumeurs parlent d'un retour de Jinx, Ambessa redouble d'ardeur dans la poursuite de sa cible. Jinx et Sevika s'infiltrent dans le ventre de la bête.",
            "duration": "39m",
            "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/53000/53448-2x04-peins-la-ville-en-bleu.jpg",
            "video_url": "https://vidzy.org/embed-1owkwupztm5s.html"
          },
          {
            "id": "s2e5",
            "title": "5. Blisters and Bedrock",
            "description": "Vi est réveillée par des nouvelles surprenantes. Lors de retrouvailles perturbantes, la réalité est bien différente des apparences. Caitlyn découvre les origines de Shimmer.",
            "duration": "42m",
            "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/53000/53449-2x05-creuser-malgre-tout.jpg",
            "video_url": "https://vidzy.org/embed-7kka5mv0hj87.html"
          },
          {
            "id": "s2e6",
            "title": "6. The Message Hidden Within the Pattern",
            "description": "Un instant d'obscurité, un autre de lumière… et une vision de ce qui aurait pu être.",
            "duration": "39m",
            "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/53000/53450-2x06-le-message-cache-dans-le-schema.jpg",
            "video_url": "https://vidzy.org/embed-nqcx49scxrcn.html"
          },
          {
            "id": "s2e7",
            "title": "7. Pretend Like It's the First Time",
            "description": "Un instant d'obscurité, un autre de lumière… et une vision de ce qui aurait pu être.",
            "duration": "41m",
            "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/53000/53451-2x07-comme-si-c-etait-la-premiere-fois.jpg",
            "video_url": "https://vidzy.org/embed-8d27fi1ifldp.html"
          },
          {
            "id": "s2e8",
            "title": "8. Killing Is a Cycle",
            "description": "La tempête qui se prépare nourrit une série de transformations saisissantes. Ailleurs, l'étincelle de la rébellion brûle toujours.",
            "duration": "40m",
            "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/53000/53452-2x08-tuer-est-un-cycle.jpg",
            "video_url": "https://vidzy.org/embed-borw15a0e19l.html"
          },
          {
            "id": "s2e9",
            "title": "9. The Dirt Under Your Nails",
            "description": "Magie. Science. Pouvoir. Vengeance. Dans un final épique, les destins se heurtent, déchaînant une guerre sans merci.",
            "duration": "50m",
            "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/53000/53453-2x09-la-terre-sous-tes-ongles.jpg",
            "video_url": "https://vidzy.org/embed-l2rmb9a8fkm9.html"
          }
        ]
      }
    ]
  },
  {
    "id": "s2",
    "title": "Beast Games",
    "description": "Dans cette compétition de téléréalité historique, 1 000 participants s'affrontent dans des défis physiques, mentaux et sociaux épiques pour tenter de remporter un prix de 5 millions de dollars, le plus gros gain de l'histoire de la télévision.",
    "category": "Série",
    "genre": ["Téléréalité", "Compétition", "Action"],
    "thumbnail": "https://img.asmedia.epimg.net/resizer/v2/XNVXCGY3PVG4TFODMOUNX6225M.jpg?auth=692a1d7335a7725c08587dedc633cc87e1b78772567ad4b2006e3a63c82701e0&width=360&height=203&smart=true",
    "backdrop": "https://img.asmedia.epimg.net/resizer/v2/XNVXCGY3PVG4TFODMOUNX6225M.jpg?auth=692a1d7335a7725c08587dedc633cc87e1b78772567ad4b2006e3a63c82701e0&width=360&height=203&smart=true",
    "video_url": "",
    "trailer_url": "https://www.youtube.com/watch?v=zNWjI5J_w68",
    "year": 2024,
    "duration": "2 Saisons",
    "rating": "4.8",
    "maturityRating": "13+",
    "featured": true,
    "seasons": [
      {
        "seasonNumber": 1,
        "title": "Saison 1",
        "episodes": [
          {
            "id": "s2e1",
            "title": "1. 1,000 People, 1 Winner",
            "description": "L'arrivée massive des 1 000 joueurs. Le premier défi élimine instantanément une partie des candidats dans une épreuve de rapidité sans précédent.",
            "duration": "48m",
            "thumbnail": "https://img.asmedia.epimg.net/resizer/v2/XNVXCGY3PVG4TFODMOUNX6225M.jpg?auth=692a1d7335a7725c08587dedc633cc87e1b78772567ad4b2006e3a63c82701e0&width=360&height=203&smart=true",
            "video_url": "https://vidzy.org/embed-k5ym7or1kp8c.html"
          },
          {
            "id": "s2e2",
            "title": "2. The Stadium Chaos",
            "description": "Les joueurs doivent s'organiser en équipes. La trahison commence à s'installer lorsque les ressources de nourriture deviennent limitées.",
            "duration": "45m",
            "thumbnail": "https://img.asmedia.epimg.net/resizer/v2/XNVXCGY3PVG4TFODMOUNX6225M.jpg?auth=692a1d7335a7725c08587dedc633cc87e1b78772567ad4b2006e3a63c82701e0&width=360&height=203&smart=true",
            "video_url": "https://vidzy.org/embed-7230r56cmiov.html"
          },
          {
            "id": "s2e3",
            "title": "3. Red Light, Dead Light",
            "description": "Une version monumentale du jeu 'Un, deux, trois, soleil' avec une technologie de détection laser. La précision est la clé de la survie.",
            "duration": "50m",
            "thumbnail": "https://img.asmedia.epimg.net/resizer/v2/XNVXCGY3PVG4TFODMOUNX6225M.jpg?auth=692a1d7335a7725c08587dedc633cc87e1b78772567ad4b2006e3a63c82701e0&width=360&height=203&smart=true",
            "video_url": "https://vidzy.org/embed-b6p1cvm8nimw.html"
          },
          {
            "id": "s2e4",
            "title": "4. The Grid",
            "description": "Un labyrinthe géant teste le sens de l'orientation et la coopération. Les alliances se brisent sous la pression du chronomètre.",
            "duration": "42m",
            "thumbnail": "https://img.asmedia.epimg.net/resizer/v2/XNVXCGY3PVG4TFODMOUNX6225M.jpg?auth=692a1d7335a7725c08587dedc633cc87e1b78772567ad4b2006e3a63c82701e0&width=360&height=203&smart=true",
            "video_url": "https://vidzy.org/embed-omeu48dsiflm.html"
          },
          {
            "id": "s2e5",
            "title": "5. Sink or Swim",
            "description": "Un défi aquatique met à rude épreuve les capacités physiques des 200 participants restants. Le froid devient un facteur éliminatoire.",
            "duration": "46m",
            "thumbnail": "https://img.asmedia.epimg.net/resizer/v2/XNVXCGY3PVG4TFODMOUNX6225M.jpg?auth=692a1d7335a7725c08587dedc633cc87e1b78772567ad4b2006e3a63c82701e0&width=360&height=203&smart=true",
            "video_url": "https://vidzy.org/embed-wwueou9hmxgz.html"
          },
          {
            "id": "s2e6",
            "title": "6. The Tower of Greed",
            "description": "Les joueurs doivent choisir entre un gain d'argent immédiat pour partir ou risquer de tout perdre pour rester dans la course au gros lot.",
            "duration": "44m",
            "thumbnail": "https://img.asmedia.epimg.net/resizer/v2/XNVXCGY3PVG4TFODMOUNX6225M.jpg?auth=692a1d7335a7725c08587dedc633cc87e1b78772567ad4b2006e3a63c82701e0&width=360&height=203&smart=true",
            "video_url": "https://vidzy.org/embed-3hunrkzgtze2.html"
          },
          {
            "id": "s2e7",
            "title": "7. Blind Trust",
            "description": "Un défi psychologique où les participants doivent se faire confiance à l'aveugle. Une seule erreur élimine le duo.",
            "duration": "41m",
            "thumbnail": "https://img.asmedia.epimg.net/resizer/v2/XNVXCGY3PVG4TFODMOUNX6225M.jpg?auth=692a1d7335a7725c08587dedc633cc87e1b78772567ad4b2006e3a63c82701e0&width=360&height=203&smart=true",
            "video_url": "https://vidzy.org/embed-k0fbczcvii79.html"
          },
          {
            "id": "s2e8",
            "title": "8. The Last 50",
            "description": "La tension atteint son paroxysme. MrBeast introduit un twist qui change radicalement les règles du jeu pour les derniers survivants.",
            "duration": "47m",
            "thumbnail": "https://img.asmedia.epimg.net/resizer/v2/XNVXCGY3PVG4TFODMOUNX6225M.jpg?auth=692a1d7335a7725c08587dedc633cc87e1b78772567ad4b2006e3a63c82701e0&width=360&height=203&smart=true",
            "video_url": "https://vidzy.org/embed-cc7gu2txi2tf.html"
          },
          {
            "id": "s2e9",
            "title": "9. Semi-Final Showdown",
            "description": "Les 10 derniers candidats s'affrontent dans une série de mini-jeux iconiques de la chaîne MrBeast, mais avec une difficulté décuplée.",
            "duration": "49m",
            "thumbnail": "https://img.asmedia.epimg.net/resizer/v2/XNVXCGY3PVG4TFODMOUNX6225M.jpg?auth=692a1d7335a7725c08587dedc633cc87e1b78772567ad4b2006e3a63c82701e0&width=360&height=203&smart=true",
            "video_url": "https://vidzy.org/embed-176fkstnulr0.html"
          },
          {
            "id": "s2e10",
            "title": "10. The 5 Million Dollar Winner",
            "description": "La grande finale. Un dernier duel d'endurance et de volonté pure détermine qui repartira avec la valise de 5 millions de dollars.",
            "duration": "55m",
            "thumbnail": "https://img.asmedia.epimg.net/resizer/v2/XNVXCGY3PVG4TFODMOUNX6225M.jpg?auth=692a1d7335a7725c08587dedc633cc87e1b78772567ad4b2006e3a63c82701e0&width=360&height=203&smart=true",
            "video_url": "https://vidzy.org/embed-66n14f65cubj.html"
          }
        ]
      },
      {
        "seasonNumber": 2,
        "title": "Saison 2",
        "episodes": [
          {
            "id": "s2s2e1",
            "title": "1. Les Muscles et les Cerveaux s’affrontent pour 5 000 000 $",
            "description": "200 des joueurs les plus forts et les plus intelligents s'affrontent pour 100 places à Beast City et s'assurer une chance de gagner 5 000 000 $. Seulement les meilleurs progresseront: les Muscles s'affrontent dans un jeu de persévérance et les.",
            "duration": "52m",
            "thumbnail": "https://image.chilimovie.com/cos/20260108/o3lCv2yczU1xUqp6DToGyXVvUZY.jpg",
            "video_url": "https://vidzy.org/embed-iea0i31if95s.html"
          },
          {
            "id": "s2s2e2",
            "title": "2. La Course d'Obstacles",
            "description": "Après un rebondissement inattendu, les 50 Cerveaux et les 50 Muscles font face à une décision importante. Un pot-de-vin d'un million de dollars est en jeu et ça pourrait changer le cours de la saison. Accepteront-ils l'offre incroyable.",
            "duration": "50m",
            "thumbnail": "https://image.chilimovie.com/cos/20260108/9wyQBP4AAHVilSoxc1JZMfjz24Y.jpg",
            "video_url": "https://vidzy.org/embed-6ukoxfyhp2cm.html"
          },
          {
            "id": "s2s2e3",
            "title": "3. Choisissez votre destin",
            "description": "Le Top 50 fait face à la prochaine épreuve : une course d'obstacles nécessitant un équilibre entre la force et l'intelligence. De nouvelles alliances se forment et des amitiés se brisent, chaque victoire compte et seule la moitié des candidats.",
            "duration": "48m",
            "thumbnail": "https://image.chilimovie.com/cos/20260108/q5jx8i2OJCJDWJJSyM5Nv6743bj.jpg",
            "video_url": "https://vidzy.org/embed-mc4x163olpw7.html"
          },
          {
            "id": "s2s2e4",
            "title": "4. Survivor prend le contrôle",
            "description": "Survivor et les Beast Games s'associent dans un crossover incroyable ! Le présentateur Jeff Probst rejoint MrBeast tandis que les candidats arrivent sur l'île de Survivor. Les candidats participent à une série de défis emblématiques inspirés de.",
            "duration": "60m",
            "thumbnail": "https://image.chilimovie.com/cos/20260115/fG80R33utnGELwrchTgO6547anp.jpg",
            "video_url": "https://vidzy.org/embed-w8wbyeo0myx6.html"
          },
          {
            "id": "s2s2e5",
            "title": "5. Ask For Anything You Want",
            "description": "The $10,000,000 Coin returns. As the Islanders come home, shifting power dynamics throw Beast City into chaos. The top 20 face their biggest challenge yet as the infamous Cubes reappear alongside surprise guest Druski. Three enter, but only two can leave as players can ask for anything to help make this impossible choice. Can you still trust your allies when a life-changing prize is on the line?",
            "duration": "60m",
            "thumbnail": "https://m.media-amazon.com/images/S/pv-target-images/9511dfbeea04d1e32fd283be70d640747bb9d824f84823669311d7372fbf6f02._BR-6_AC_SX720_FMwebp_.png",
            "video_url": "https://vidzy.org/embed-bzp2zhu5nnc4.html"
          },
          {
            "id": "s2s2e6",
            "title": "6. Des cœurs seront brisés",
            "description": "Une bataille entre les Cerveaux et les Muscles se tient à 30 m du sol et dans un puzzle à taille humaine pour déterminer le plus fort ainsi que le plus intelligent de Beast City. Les mensonges et les déceptions fusent alors que les joueurs choisissent trois cœurs à briser, ce qui les éliminera du jeu ! Personne n'est à l'abri à Beast City... La pièce aux 10 millions de dollars, survivra-t-elle ?",
            "duration": "62m",
            "thumbnail": "https://m.media-amazon.com/images/S/pv-target-images/53446d9bfc3e744abd1cce1d02330f0ea98a4b5a95fe4796cef990a18ffbdcaf._BR-6_AC_SX720_FMwebp_.jpg",
            "video_url": "https://vidzy.org/embed-bywc3cw0922y.html"
          }
        ]
      }
    ]
  },
  {
    "id": "s3",
    "title": "Stranger Things",
    "description": "À Hawkins, en Indiana, après la disparition mystérieuse d'un jeune garçon, une petite ville découvre une affaire impliquant des expériences secrètes, des forces surnaturelles terrifiantes et une fillette aux pouvoirs étranges.",
    "category": "Série",
    "genre": ["Science-Fiction", "Horreur", "Drame"],
    "thumbnail": "https://upload.wikimedia.org/wikipedia/commons/3/38/Stranger_Things_logo.png",
    "backdrop": "https://upload.wikimedia.org/wikipedia/commons/3/38/Stranger_Things_logo.png",
    "video_url": "",
    "trailer_url": "https://www.youtube.com/watch?v=R1ZXOOLMJ8s",
    "year": 2016,
    "duration": "5 Saisons",
    "rating": "4.9",
    "maturityRating": "16+",
    "featured": true,
    "seasons": [
      {
        "seasonNumber": 1,
        "title": "Saison 1",
        "episodes": [

          { "id": "s3s1e1",
            "title": "1. La Disparition de Will Byers", 
            "duration": "49m", 
            "description": "Tandis qu'il rentre chez lui, le jeune Will est témoin d'une scène terrifiante. Non loin de là, un sinistre secret hante les sous-sols d'un laboratoire du gouvernement.", 
            "thumbnail": "https://image.chilimovie.com/cos/20251130/uLES7sRpy7Ih6Kr6XCaYj1GyfTw.jpg", 
            "video_url": "https://vidzy.org/embed-rnzezejllxj1.html" },

          { "id": "s3s1e2", 
            "title": "2. La Barjot de Maple Street", 
            "duration": "56m", 
            "description": "Lucas, Mike et Dustin tentent de communiquer avec la fille qu'ils ont découverte dans les bois. Hopper interroge Joyce à propos d'un étrange appel téléphonique.", 
            "thumbnail": "https://image.chilimovie.com/cos/20251130/8iA56ugQyHZmX81wSsNqwXjCE6F.jpg", 
            "video_url": "https://vidzy.org/embed-xhssj94w89ng.html" },

          { "id": "s3s1e3", 
            "title": "3. Petit Papa Noël", 
            "duration": "52m", 
            "description": "Plus inquiète que jamais, Nancy se met à la recherche de Barbara et découvre à cette occasion ce que tramait Jonathan. Joyce est persuadée que Will essaie de lui parler.", 
            "thumbnail": "https://image.chilimovie.com/cos/20251130/5snULpWQWp7aqFto7UbRcEkEyyS.jpg", 
            "video_url": "https://vidzy.org/embed-adv0w48boge8.html" },

          { "id": "s3s1e4", 
            "title": "4. Le Corps", 
            "duration": "51m", 
            "description": "Refusant de croire que Will est mort, Joyce essaye d'entrer en contact avec son fils. Onze subit une transformation. Nancy et Jonathan décident d'unir leurs forces.", 
            "thumbnail": "https://image.chilimovie.com/cos/20251130/60wmC1e20HV8gu688GAhsWxqxPx.jpg", 
            "video_url": "https://vidzy.org/embed-4k9linp04h4u.html" },

          { "id": "s3s1e5", 
            "title": "5. La Puce et l'Acrobate", 
            "duration": "53m", 
            "description": "Hopper s'introduit dans le labo, Nancy et Jonathan affrontent la force qui a enlevé Will, et les garçons demandent à M. Clarke comment se rendre dans une autre dimension.", 
            "thumbnail": "https://image.chilimovie.com/cos/20251130/exT4NW9EdXG1qLZHKJnRpq3gh1H.jpg", 
            "video_url": "https://vidzy.org/embed-2fak75cmw6p7.html" },

          { "id": "s3s1e6", 
            "title": "6. Le Monstre", 
            "duration": "47m", 
            "description": "Paniqué, Jonathan cherche Nancy dans le noir. Steve est lui aussi sur ses traces. Hopper et Joyce découvrent la vérité sur les activités secrètes du laboratoire.", 
            "thumbnail": "https://image.chilimovie.com/cos/20251130/lNS6qycyucewz3duTr1tf1LU688.jpg", 
            "video_url": "https://vidzy.org/embed-g25gqlf8jj1y.html" },

          { "id": "s3s1e7", 
            "title": "7. Le Bain", 
            "duration": "42m", 
            "description": "Onze n'arrive pas à entrer en contact avec Will. Lucas donne l'alerte sur un danger imminent. Nancy et Jonathan montrent à la police les clichés pris par Jonathan.", 
            "thumbnail": "https://image.chilimovie.com/cos/20251130/fjsTVEnqTKUO0GJSpiWKBZRUBcx.jpg", 
            "video_url": "https://vidzy.org/embed-49l56tupm6zn.html" },

          { "id": "s3s1e8", 
            "title": "8. Le Monde à l'envers", 
            "duration": "55m", 
            "description": "Hopper et Joyce sont aux mains du Dr Brenner. Les garçons attendent avec Onze dans le gymnase. Nancy et Jonathan s'arment pour livrer bataille.", 
            "thumbnail": "https://image.chilimovie.com/cos/20251130/1teJ5dbuepfqOOs9uYhYTUjr2qs.jpg", 
            "video_url": "https://vidzy.org/embed-65h85ssdhnhd.html" }

        ]
      },
      {
        "seasonNumber": 2,
        "title": "Saison 2",
        "episodes": [

          { "id": "s3s2e1", 
            "title": "1. MADMAX", 
            "duration": "48m", 
            "description": "Alors que la ville se prépare pour Halloween, la salle de jeux frémit devant des scores exceptionnels et les citrouilles réservent bien des surprises à Hopper, sceptique.", 
            "thumbnail": "https://image.chilimovie.com/cos/20251130/efz0MgPAxPw11PIeAJNgKKg3Paa.jpg", 
            "video_url": "https://vidzy.org/embed-ws0pwuvrzfwq.html" },

          { "id": "s3s2e2", 
            "title": "2. Des bonbons ou un sort", 
            "duration": "56m", 
            "description": "Après l’expérience terrifiante de Will lors de la nuit d'Halloween, Mike se demande si Onze traîne encore dans le coin. Obsédée par Barbara, Nancy veut parler.", 
            "thumbnail": "https://image.chilimovie.com/cos/20251130/3gzPnRilyASmcoSyUKXhaD5ofhr.jpg", 
            "video_url": "https://vidzy.org/embed-8jsfxymq3li3.html" },

          { "id": "s3s2e3", 
            "title": "3. Le têtard", 
            "duration": "51m", 
            "description": "Tandis que Dustin adopte un nouvel animal de compagnie plutôt bizarre, Onze s’énerve. Plein de bonnes intentions, Bob exhorte Will à affronter ses peurs.", 
            "thumbnail": "https://image.chilimovie.com/cos/20251130/792NQjFydcr5ucb1sga55LS6Vt3.jpg", 
            "video_url": "https://vidzy.org/embed-1sdabplcwkkc.html" },

          { "id": "s3s2e4", 
            "title": "4. Will le sage", 
            "duration": "46m", 
            "description": "Épuisé par ses crises, Will se confie à Joyce qui réagit de façon surprenante. Tous deux assoiffés de vérité, Hopper creuse sans relâche et Onze fouille des archives.", 
            "thumbnail": "https://image.chilimovie.com/cos/20251130/wZXeV5cWC1RuaCls2mm6imzchnN.jpg", 
            "video_url": "https://vidzy.org/embed-dl5gg0otkj5v.html" },

          { "id": "s3s2e5", 
            "title": "5. Dig Dug", 
            "duration": "52m", 
            "description": "Tandis qu'Onze enquête sur son passé, Nancy et Jonathan discutent théories du complot avec un nouvel allié. \"Bob la Malice\" s'attaque à un problème difficile.", 
            "thumbnail": "https://image.chilimovie.com/cos/20251130/oshY3LAwQRzhcjmEEr7EbOnypuU.jpg", 
            "video_url": "https://vidzy.org/embed-9rj02l33jnr5.html" },

          { "id": "s3s2e6", 
            "title": "6. L'espion", 
            "duration": "51m", 
            "description": "Pendant que la connexion de Will au monstre de l'ombre s'intensifie sans que personne sache comment arrêter le processus, Dustin et Steve partent en expédition.", 
            "thumbnail": "https://image.chilimovie.com/cos/20251130/oshY3LAwQRzhcjmEEr7EbOnypuU.jpg", 
            "video_url": "https://vidzy.org/embed-t3yn5bpjmf41.html" },

          { "id": "s3s2e7", 
            "title": "7. La sœur perdue", 
            "duration": "45m", 
            "description": "Guidée par ses visions, Onze arrive seule dans la planque d'une bande de zonards violents dont la chef a plus d'un tour dans son sac et beaucoup à raconter.", 
            "thumbnail": "https://image.chilimovie.com/cos/20251130/kgOaaTbAutwAoA7tkVzYCfTjPXn.jpg", 
            "video_url": "https://vidzy.org/embed-3jsnmyktdgz4.html" },

          { "id": "s3s2e8", 
            "title": "8. Le Flagelleur mental", 
            "duration": "47m", 
            "description": "Un héros improbable se révèle quand un événement meurtrier boucle le laboratoire d’Hawkins, piégeant Will et plusieurs autres à l'intérieur.", 
            "thumbnail": "https://image.chilimovie.com/cos/20251130/vuLea0DA9rYc9Y4M2Ic28CXL4Al.jpg", 
            "video_url": "https://vidzy.org/embed-y1hm3nxajyy7.html" },

          { "id": "s3s2e9", 
            "title": "9. Le portail", 
            "duration": "62m", 
            "description": "Entre retrouvailles et explications, Onze continue sur sa lancée pendant que les survivants donnent l'assaut contre la force monstrueuse qui tient Will en otage.", 
            "thumbnail": "https://image.chilimovie.com/cos/20251130/cxCf7O5WPHfyXb7PLSJCG6EvXc3.jpg", 
            "video_url": "https://vidzy.org/embed-0m0700ycmmfz.html" }

        ]
      },
      {
        "seasonNumber": 3,
        "title": "Saison 3",
        "episodes": [

          { "id": "s3s3e1", 
            "title": "1. Suzie, tu me reçois ?", 
            "duration": "51m", 
            "description": "Avec l'été, on prend un nouveau job, on tombe amoureux... Mais un étrange message radio capté par Dustin et une inquiétante réaction de Will cassent toute l'ambiance.", 
            "thumbnail": "https://image.chilimovie.com/cos/20251130/g1iZmyn42qSFkXhw6gjoNE0diKb.jpg", 
            "video_url": "https://vidzy.org/embed-pjyf02faw8zt.html" },

          { "id": "s3s3e2", 
            "title": "2. Comme des rats", 
            "duration": "50m",
            "description": "Nancy et Jonathan se penchent sur un tuyau alarmant. Steve et Robin sont recrutés pour une mission secrète. Max et Onze font des courses. Billy a des visions troublantes.", 
            "thumbnail": "https://image.chilimovie.com/cos/20251130/qDlMvdlRGzIGtKYdV9lktEUM4vj.jpg", 
            "video_url": "https://vidzy.org/embed-jrca6u0abc5d.html" },

          { "id": "s3s3e3",  
            "title": "3. La maître-nageuse disparue",  
            "duration": "50m",  
            "description": "Elfe et Max partent à la recherche de Billy. Will regrette les camaraderies d'enfance. Steve et Dustin enquêtent. Joyce et Hopper retournent au laboratoire d'Hawkins.",  
            "thumbnail": "https://image.chilimovie.com/cos/20251130/oaYdVvYwnvoQ7SLelKUcaAt0HKJ.jpg",  
            "video_url": "https://vidzy.org/embed-6ldbuh45s57j.html" },

          { "id": "s3s3e4",  
            "title": "4. Le test du sauna",  
            "duration": "52m",  
            "description": "Le lancement du code rouge fédère les vieux amis contre un ennemi terriblement familier. Karen exhorte Nancy à approfondir ses recherches. Robin trouve une carte utile.",  
            "thumbnail": "https://image.chilimovie.com/cos/20251130/tEgd6fXKngAG8eC92dH7ey6Y4eA.jpg",  
            "video_url": "https://vidzy.org/embed-rzw7humvshgc.html" },

          { "id": "s3s3e5",  
            "title": "5. L'armée du Flagelleur",  
            "duration": "52m",  
            "description": "De drôles de surprises se cachent dans une ancienne ferme et dans les tréfonds du centre commercial Starcourt. Pendant ce temps, le flagelleur mental reprend des forces.",  
            "thumbnail": "https://image.chilimovie.com/cos/20251130/cxIZ4btU6h9GQM1Fn0kotuaXlwo.jpg",  
            "video_url": "https://vidzy.org/embed-leakr7a99mru.html" },

          { "id": "s3s3e6",  
            "title": "6. E pluribus unum",  
            "duration": "52m",  
            "description": "Le docteur Alexei révèle ce que les Russes sont en train de construire. Mike enrage. Onze fait une découverte cruciale. Dustin et Erica organisent un sauvetage audacieux.",  
            "thumbnail": "https://image.chilimovie.com/cos/20251130/dZKsMHJm8DPdBuqFcZxdIulrpNs.jpg",  
            "video_url": "https://vidzy.org/embed-dof5tvpw5k1o.html" },

          { "id": "s3s3e7",  
            "title": "7. La morsure",  
            "duration": "55m",  
            "description": "Le temps presse. L'équipe de Hopper revient en trombe à Hawkins, avec un assassin aux trousses. Onze et les enfants se préparent à la guerre.",  
            "thumbnail": "https://image.chilimovie.com/cos/20251130/6QA91GJK2ze1EaGPEKhil9MJIXx.jpg",  
            "video_url": "https://vidzy.org/embed-emb19v48zfr2.html" },

          { "id": "s3s3e8",  
            "title": "8. La bataille de Starcourt",  
            "duration": "77m",  
            "description": "La terreur règne dans l'espace de restauration quand le flagelleur mental réclame son dû, tandis que dans les profondeurs obscures de Starcourt se joue l’avenir du monde.",  
            "thumbnail": "https://image.chilimovie.com/cos/20251130/5YcjTWas07RteM9lssOzL9UhmJh.jpg",  
            "video_url": "https://vidzy.org/embed-113m0xtspg0q.html" }

        ]
      },
      {
        "seasonNumber": 4,
        "title": "Saison 4",
        "episodes": [

          { "id": "s3s4e1",  
            "title": "1. Le Club de l'Enfer",  
            "duration": "78m",  
            "description": "Harcelée dans son nouveau lycée, Elfe est dans l'incapacité de riposter. Joyce ouvre un mystérieux paquet. À Hawkins, une joueuse bagarreuse enflamme la soirée D&D.",  
            "thumbnail": "https://image.chilimovie.com/cos/20251130/xeNKubDmPiMraW4hXqzEBrN6f4A.jpg",  
            "video_url": "https://vidzy.org/embed-u5eramegaz7n.html" },

          { "id": "s3s4e2",  
            "title": "2. La Malédiction de Vecna",  
            "duration": "77m",  
            "description": "Mike s'envole pour la Californie, tandis qu'un cadavre prend Hawkins de court. Nancy cherche des indices. Très ébranlé, Eddie raconte à la bande ce qu'il a vu.",  
            "thumbnail": "https://image.chilimovie.com/cos/20251130/lSSWqv7XrO51uY2uc4lql9Hub3f.jpg",   
            "video_url": "https://vidzy.org/embed-pxghrmmr8a5g.html" },

          { "id": "s3s4e3",    
            "title": "3. Le Monstre et la Super-héroïne",    
            "duration": "64m",    
            "description": "Murray et Joyce vont en Alaska, Elfe paie le prix de ses actes, et Robin et Nancy trouvent des infos sur les démons d'Hawkins. Le Dr Owens apporte de terribles nouvelles.",    
            "thumbnail": "https://image.chilimovie.com/cos/20251130/6q1UM63T5tiQcWrbsJvY3bunkyZ.jpg",     
            "video_url": "https://vidzy.org/embed-vux6f6y3fz6z.html" },

          { "id": "s3s4e4",      
            "title": "4. Cher Billy",      
            "duration": "79m",      
            "description": "Max court un grave danger… et manque de temps. Un patient de l'hôpital psychiatrique de Pennhurst reçoit des visiteuses. En Russie, Hopper fait du mieux qu'il peut.",      
            "thumbnail": "https://image.chilimovie.com/cos/20251130/u3LeFRR7AhyPp4y0Ii7hpkD488b.jpg",      
            "video_url": "https://vidzy.org/embed-n91h12exugsn.html" },

          { "id": "s3s4e5",      
            "title": "5. Projet Nina",      
            "duration": "76m",      
            "description": "Dans le Nevada avec le Dr. Owens, Elfe est contrainte d'affronter son passé. La bande d'Hawkins fouille une maison à la recherche d'indices. Vecna fait encore une victime.",      
            "thumbnail": "https://image.chilimovie.com/cos/20251130/edZ12qbUdOvfaDbfG9I7Xa4C4Ac.jpg",      
            "video_url": "https://vidzy.org/embed-lqjpjviob0e2.html" },

          { "id": "s3s4e6",      
            "title": "6. Le Plongeon",      
            "duration": "75m",      
            "description": "Un sauvetage périlleux se prépare derrière le rideau de fer. En Californie, la bande demande de l'aide à une hackeuse. Steve prend un gros risque pour l'équipe.",      
            "thumbnail": "https://image.chilimovie.com/cos/20251130/kvfmI9kzwpjpohLI1DSRomcYF66.jpg",      
            "video_url": "https://vidzy.org/embed-r3k6qxld17gl.html" },

          { "id": "s3s4e7",      
            "title": "7. Le Massacre du laboratoire",      
            "duration": "99m",      
            "description": "Hopper s'apprête à combattre un monstre. Dustin décortique les motivations de Vecna… et décode un message venu de l'au-delà. Un vieux souvenir redonne des forces à Elfe.",      
            "thumbnail": "https://image.chilimovie.com/cos/20251130/n64hMYFaVunT8jqSVgYq5qt0Vbn.jpg",      
            "video_url": "https://vidzy.org/embed-2emy8hos6pmo.html" },

          { "id": "s3s4e8",      
            "title": "8. Papa",      
            "duration": "85m",      
            "description": "Nancy est saisie de visions peu réjouissantes, et Elfe réussit un test décisif. Réunie à Hawkins, la bande récupère du matériel et se prépare à la bagarre.",      
            "thumbnail": "https://image.chilimovie.com/cos/20251130/sdNa4Z49RTZDkezFAMg00hciFZZ.jpg",      
            "video_url": "https://vidzy.org/embed-kyyhrovlatx7.html" },

          { "id": "s3s4e9",      
            "title": "9. L'Infiltration",      
            "duration": "150m",      
            "description": "Dans un fracas de métal, les héroïques protagonistes au cœur pur luttent âprement aux quatre coins du champ de bataille. Il faut sauver Hawkins, et le monde entier avec !",      
            "thumbnail": "https://image.chilimovie.com/cos/20251130/jQeh2GYSQ4QxHkkBJ1LC2hPzfNm.jpg",      
            "video_url": "https://vidzy.org/embed-urobdybz8fyt.html" }

        ]
      },
      {
        "seasonNumber": 5,
        "title": "Saison 5 : Le Chapitre Final",
        "episodes": [

          { "id": "s3s5e1",       
            "title": "1. Mission de secours",       
            "duration": "80m",       
            "description": "Novembre 1987. La bande berne les militaires pour entrer dans le monde à l'envers et chercher Vecna... sans s'apercevoir qu'un danger menace quelqu'un de proche.",       
            "thumbnail": "https://image.chilimovie.com/cos/20251130/jnpSxSMdFAj4dtF59agzgmKM9fg.jpg",       
            "video_url": "https://vidzy.org/embed-kzub7pawws8w.html" },

          { "id": "s3s5e2",       
            "title": "2. La disparition",       
            "duration": "75m",       
            "description": "Après une attaque sournoise chez les Wheeler, Mike et Nancy paient le prix de leur silence. Onze et Hopper se lancent dans une mission de sauvetage.",       
            "thumbnail": "https://image.chilimovie.com/cos/20251130/dI8N4IQpZNKloK4Dw6MugpSrwMS.jpg",       
            "video_url": "https://vidzy.org/embed-skx2bql7dkkg.html" },

          { "id": "s3s5e3",       
            "title": "3. Le Piège de l'Arcane",       
            "duration": "78m", "description":       
            "Will perçoit les intentions de Vecna, ce qui permet à l'équipe de lui tendre un piège. Holly explore son nouvel environnement.",       
            "thumbnail": "https://image.chilimovie.com/cos/20251130/vBLzxoyZTbT0ImHXKWG2fe7j2om.jpg",       
            "video_url": "https://vidzy.org/embed-nhdnal3xxx6n.html" },

          { "id": "s3s5e4",       
            "title": "4. Le Sorcier",       
            "duration": "82m",       
            "description": "Les militaires resserrent leur emprise sur la ville. Mike, Lucas et Robin planifient une évasion audacieuse. Elfe se retrouve face à son adversaire.",       
            "thumbnail": "https://image.chilimovie.com/cos/20251130/mp6nFiganZCbieJ0wSjIHz7bS8r.jpg",       
            "video_url": "https://vidzy.org/embed-cfvjsxl2jil0.html" },

          { "id": "s3s5e5",       
            "title": "5. Shock Jock",       
            "duration": "80m",       
            "description": "La bande envisage de provoquer un véritable électrochoc pour reconnecter Will à l'esprit de Vecna. La tension monte pendant la fouille du labo d'Hawkins dans le monde à l'envers.",       
            "thumbnail": "https://image.chilimovie.com/cos/20251226/4dnRX3S1II3NGkrnwCFZkYpgK83.jpg",       
            "video_url": "https://vidzy.org/embed-pwgshhf40rfu.html" },

          { "id": "s3s5e6",       
            "title": "6. Escape from Camazotz",       
            "duration": "85m",       
            "description": "Holly et Max tentent de s'échapper de l'esprit de Vecna, et Elfe cherche à entrer dans celui de Will. Joyce est rongée par la culpabilité. Jonathan et Nancy sont à un tournant.",       
            "thumbnail": "https://image.chilimovie.com/cos/20251226/4joGuE1zoHIyGta2tlcSBI5XiV8.jpg",       
            "video_url": "https://vidzy.org/embed-qe6n341vhwip.html" },

          { "id": "s3s5e7",       
            "title": "7. Le Pont",       
            "duration": "95m",       
            "description": "À la date anniversaire de la disparition de Will, le groupe se réunit pour se préparer à un combat dont les répercussions risquent de transformer le monde à tout jamais.",       
            "thumbnail": "https://image.chilimovie.com/cos/20251226/WHdrgCxqNDuOIf65cW9It3XSZW.jpg",       
            "video_url": "https://vidzy.org/embed-lxfirf4jegd3.html" },

          { "id": "s3s5e8",       
            "title": "8. Chapitre huit : Le monde à l'endroit",       
            "duration": "160m",       
            "description": "Alors que Vecna se prépare à anéantir le monde tel qu'il existe, la bande doit tout risquer dans l'espoir de vaincre son adversaire une fois pour toutes.",       
            "thumbnail": "https://image.chilimovie.com/cos/20260101/qYSB9DA25yveOfw7HUgkw7vXCjv.jpg",       
            "video_url": "https://vidzy.org/embed-8lwsvaas8nzq.html" }

        ]
      }
    ]
  },
  {
    "id": "s4",
    "title": "squid game",
    "description": "Des centaines de joueurs acceptent une invitation à des jeux pour enfants mortels.",
    "category": "Série",
    "genre": ["Thriller", "Drame", "Survie"],
    "thumbnail": "https://i.imgur.com/e55DD3j.jpg",
    "backdrop": "https://i.imgur.com/e55DD3j.jpg",
    "video_url": "",
    "trailer_url": "https://youtu.be/oqxAJKy0ii4",
    "year": 2021,
    "duration": "3 Saisons",
    "rating": "4.8",
    "maturityRating": "16+",
    "featured": true,
    "seasons": [
      {
        "seasonNumber": 1,
        "title": "Saison 1",
        "episodes": [
          {
            "id": "s2e1",
            "title": "1. S1.E1 ∙ Mugunghwa kkochi pideon nal",
            "description": "Gi-hun, un joueur endetté, accepte de participer à un jeu énigmatique, dans l'espoir de gagner de l'argent facilement. Mais dès le premier tour, des horreurs inattendues surviennent.",
            "duration": "59m",
            "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/40000/40870-1x01-un-deux-trois-soleil.jpg",
            "video_url": "https://vidzy.org/embed-hvdidomixmfy.html"
          },
          {
            "id": "s2e2",
            "title": "2. S1.E2 ∙ Jiok",
            "description": "Divisés quant à la poursuite ou l'abandon du jeu, les membres du groupe procèdent à un vote. Mais la réalité du monde extérieur risque d'être tout aussi impitoyable que le jeu.",
            "duration": "62m",
            "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/40000/40871-1x02-enfer.jpg",
            "video_url": "https://vidzy.org/embed-1fw1apl7mijq.html"
          },
          {
            "id": "s2e3",
            "title": "3. S1.E3 ∙ Usan-eul sseun namja",
            "description": "Quelques joueurs abordent le tour suivant - qui promet d'être aussi intense que dangereux - avec des avantages cachés. Pendant ce temps, Jun-ho s'infiltre discrètement.",
            "duration": "54m",
            "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/40000/40878-1x03-l-homme-au-parapluie.jpg",
            "video_url": "https://vidzy.org/embed-asnf91k71xlr.html"
          },
          {
            "id": "s2e4",
            "title": "4. S1.E4 ∙ Jollyeodo pyeonmeokgi",
            "description": "Alors que des alliances se forment entre les joueurs, personne n'est à l'abri dans le dortoir après l'extinction des feux. Le troisième match met l'équipe de Gi-hun au défi de faire preuve de stratégie.",
            "duration": "54m",
            "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/40000/40875-1x04-l-equipe-avant-tout.jpg",
            "video_url": "https://vidzy.org/embed-v4bsvxbljpor.html"
          },
          {
            "id": "s2e5",
            "title": "5. S1.E5 ∙ Pyeongdeung-han sesang",
            "description": "Gi-hun et son équipe se relaient pour monter la garde toute la nuit. Les hommes masqués rencontrent des difficultés avec leurs complices.",
            "duration": "51m",
            "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/40000/40877-1x05-un-monde-juste.jpg",
            "video_url": "https://vidzy.org/embed-n2j2xmyxi8np.html"
          },
          {
            "id": "s2e6",
            "title": "6. S1.E6 ∙ Kkanbu",
            "description": "Pour la quatrième partie, les joueurs s'associent par deux. Gi-hun est confronté à un dilemme moral, Sang-woo choisit l'instinct de survie et Sae-byeok partage son histoire inédite.",
            "duration": "61m",
            "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/40000/40876-1x06-gganbu.jpg",
            "video_url": "https://vidzy.org/embed-qo7g4sauj7eh.html"
          },
          {
            "id": "s2e7",
            "title": "7. S1.E7 ∙ VIPS",
            "description": "Le Leader Masqué accueille des invités VIP pour assister au spectacle aux premières loges. Lors du cinquième match, certains joueurs craquent sous la pression.",
            "duration": "57m",
            "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/40000/40874-1x07-vip.jpg",
            "video_url": "https://vidzy.org/embed-7zq0cx9wfzyb.html"
          },
          {
            "id": "s2e8",
            "title": "8. S1.E8 ∙ Peuronteumaen",
            "description": "À l'approche de la dernière manche, la méfiance et le dégoût règnent parmi les finalistes. Jun-ho prend la fuite, déterminé à révéler les secrets inavouables du jeu.",
            "duration": "32m",
            "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/40000/40872-1x08-leader.jpg",
            "video_url": "https://vidzy.org/embed-rx022dw8sypa.html"
          },
          {
            "id": "s2e9",
            "title": "9. S1.E9 ∙ Unsu joeun nal",
            "description": "Le dernier round réserve une nouvelle épreuve cruelle, mais cette fois, son issue ne repose que sur un seul joueur. Le créateur du jeu sort de l'ombre.",
            "duration": "55m",
            "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/40000/40873-1x09-jour-de-chance.jpg",
            "video_url": "https://vidzy.org/embed-9vin2bb52z2w.html"
          }
        ]
      },
      {
        "seasonNumber": 2,
        "title": "Saison 2",
        "episodes": [
          {
            "id": "s4s2e1",
            "title": "1. S2.E1 ∙ Ppang-gwa bokgwon",
            "description": "Animé d'un désir de vengeance, Gi-hun fait demi-tour à l'aéroport. Plus tard, dans sa cachette, il intensifie ses recherches pour retrouver le recruteur insaisissable à la recherche de nouveaux joueurs.",
            "duration": "65m",
            "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/41000/41418-2x01-du-pain-et-des-jeux-de-hasard.jpg",
            "video_url": "https://vidzy.org/embed-1bosnc5qwcfe.html"
          },
          {
            "id": "s4s2e2",
            "title": "2. S2.E2 ∙ Hallowin pati",
            "description": "Gi-hun finit par obtenir une invitation, datée du jour d'Halloween. Dans un moment tendu face à Jun-ho, ils se révèlent la vérité l'un à l'autre.",
            "duration": "51m",
            "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/41000/41417-2x02-la-fete-d-halloween.jpg",
            "video_url": "https://vidzy.org/embed-ac4m48ta181r.html"
          },
          {
            "id": "s4s2e3",
            "title": "3. S2.E3 ∙ 001",
            "description": "De nouveaux joueurs se rassemblent pour tenter de remporter 45,6 milliards de wons. Après une première manche intense, le sort des survivants est en jeu",
            "duration": "61m",
            "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/41000/41425-2x03-001.jpg",
            "video_url": "https://vidzy.org/embed-29vgfpz4lu9b.html"
          },
          {
            "id": "s4s2e4",
            "title": "4. S2.E4 ∙ Yeoseot gaeui dari",
            "description": "Les joueurs se préparent pour la prochaine épreuve : un pentathlon à six jambes, où chaque membre de l'équipe doit réussir un mini-jeu pour survivre - ou faire face à une élimination collective.",
            "duration": "62m",
            "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/41000/41420-2x04-six-jambes.jpg",
            "video_url": "https://vidzy.org/embed-h0s98hqmzskz.html"
          },
          {
            "id": "s4s2e5",
            "title": "5. S2.E5 ∙ Han pan deo",
            "description": "Kang No-eul s'attire des ennemis par son comportement indiscipliné. La tension est à son comble lorsque les joueurs restants votent pour décider s'ils passent au tour suivant.",
            "duration": "76m",
            "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/41000/41426-2x05-un-jeu-de-plus.jpg",
            "video_url": "https://vidzy.org/embed-jjmpxvvp49vc.html"
          },
          {
            "id": "s4s2e6",
            "title": "6. S2.E6 ∙ O X",
            "description": "Jun-ho et son équipe se préparent à infiltrer une île suspecte. Alors que les enjeux financiers et les tensions montent, les joueurs se divisent en deux factions opposées.",
            "duration": "52m",
            "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/41000/41424-2x06-o-x.jpg",
            "video_url": "https://vidzy.org/embed-cpbrrp5h9rrl.html"
          },
          {
            "id": "s4s2e7",
            "title": "7. S2.E7 ∙ Chinguwa jeok",
            "description": "Les joueurs restants élaborent des stratégies pour survivre à la nuit. Gi-hun propose un plan risqué, mais il aura besoin d'alliés de confiance pour le mettre à exécution.",
            "duration": "60m",
            "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/41000/41419-2x07-amis-ou-ennemis.jpg",
            "video_url": "https://vidzy.org/embed-046xbos33pl8.html"
          }
        ]
      },
      {
        "seasonNumber": 3,
        "title": "Saison 3",
        "episodes": [
          {
            "id": "s4s3e1",
            "title": "1. S3.E1 ∙ Yeolsoewa kal",
            "description": "No-eul infiltre une opération dangereuse avec un plan risqué. Un nouveau jeu est annoncé : cache-cache, où un groupe détient une clé et l'autre un couteau.",
            "duration": "57m",
            "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/58000/58414-3x01-cles-et-poignards.jpg",
            "video_url": "https://vidzy.org/embed-2lcc098u60gz.html"
          },
          {
            "id": "s4s3e2",
            "title": "2. S3.E2 ∙ Byeol-i bichnaneun bam",
            "description": "Les jeux reprennent, et Gi-hun se focalise sur la confrontation avec Kang Dae-ho. Pendant ce temps, Kim Jun-hee fait face à une crise soudaine qui pousse sa volonté à ses limites extrêmes.",
            "duration": "60m",
            "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/58000/58415-3x02-nuit-etoilee.jpg",
            "video_url": "https://vidzy.org/embed-gyc4uutyhevu.html"
          },
          {
            "id": "s4s3e3",
            "title": "3.S3.E3 ∙ Dangsin-ui tas-i anida",
            "description": "L'équipe de Jun-ho se rapproche de la localisation de l'île. Jang Geum-ja lance un appel désespéré à Gi-hun pour qu'il aide Jun-hee. Les VIPs discutent d'une proposition cruelle qui pourrait changer le cours des jeux.",
            "duration": "66m",
            "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/58000/58416-3x03-ce-n-est-pas-ta-faute.jpg",
            "video_url": "https://vidzy.org/embed-h0d7xbnwr8q2.html"
          },
          {
            "id": "s4s3e4",
            "title": "4. S3.E4 ∙ 222",
            "description": "Même si Gi-Hun soutient Jun-hee au milieu des tensions croissantes, elle doit prendre une décision centrale. Avant le dernier match, le front Man donne à Gi-Hun un ultimatum.",
            "duration": "66m",
            "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/58000/58417-3x04-222.jpg",
            "video_url": "https://vidzy.org/embed-fmocuhuurq28.html"
          },
          {
            "id": "s4s3e5",
            "title": "5. S3.E5 ∙ o/_\|_|",
            "description": "No-eul tente de prendre l'avantage lors de négociations cruciales, mais ses plans se retournent contre elle de manière dramatique. Gi-hun se retrouve à un carrefour moral intense, qui met à l'épreuve ses limites",
            "duration": "62m",
            "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/58000/58418-3x05.jpg",
            "video_url": "https://vidzy.org/embed-sghl8rcmndi7.html"
          },
          {
            "id": "s4s3e6",
            "title": "6. S3.E6 ∙ Saram-eun...",
            "description": "Alors que Jun-ho se précipite vers l'île, la tension atteint son comble lors de la manche finale. Les derniers joueurs se retrouvent dans une situation désespérée dans les dernières minutes de la partie.",
            "duration": "55m",
            "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/58000/58419-3x06-les-etres-humain-sont.jpg",
            "video_url": "https://vidzy.org/embed-m6cw584h2prv.html"
          }
        ]
      }

    ]
  },

  {
    "id": "s5",
    "title": "alice in borderland",
    "description": "Arisu, un jeune homme apathique, sans emploi et obsédé par les jeux vidéo, se retrouve soudainement dans une version étrange et désertée de Tokyo, où lui et ses amis doivent participer à des jeux dangereux pour survivre.",
    "category": "Série",
    "genre": ["Science-fiction", "Thriller"],
    "thumbnail": "https://wallpapers.com/images/featured/alice-in-borderland-79olr58iub9u7zbl.jpg",
    "backdrop": "https://wallpapers.com/images/featured/alice-in-borderland-79olr58iub9u7zbl.jpg",
    "video_url": "",
    "trailer_url": "https://youtu.be/7O239-jHa6E",
    "year": 2020,
    "duration": "3 Saisons",
    "rating": "3.9",
    "maturityRating": "16+",
    "featured": true,
    "seasons": [
      {
        "seasonNumber": 1,
        "title": "Saison 1",
        "episodes": [
          {
            "id": "s2e1",
            "title": "1. S1.E1 ∙ Episode 1",
            "description": "Arisu et ses amis se réfugient dans des toilettes publiques pour échapper à la police, mais lorsqu'ils en ressortent, les rues de Tokyo sont soudainement complètement désertes.",
            "duration": "47m",
            "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/52000/52537-1x01-episode-1.jpg",
            "video_url": "https://vidzy.org/embed-ii2g9kux7po6.html"
          },
          {
            "id": "s2e2",
            "title": "2. S1.E2 ∙ Episode 2",
            "description": "Laissant Chota blessé, Arisu et Karube partent en quête d'expérience. Ils arrivent devant un vaste immeuble où les attend une partie de chat mortelle.",
            "duration": "47m",
            "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/52000/52538-1x02-episode-2.jpg",
            "video_url": "https://vidzy.org/embed-nln5d1dmy4at.html"
          },
          {
            "id": "s2e3",
            "title": "3. S1.E3 ∙ Episode 3",
            "description": "Alors que les visas de Chota et Shibuki arrivent bientôt à expiration, les quatre amis pénètrent dans un vaste jardin botanique de Shinjuku, où ils se livrent à un jeu cruel de trahison.",
            "duration": "42m",
            "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/52000/52539-1x03-episode-3.jpg",
            "video_url": "https://vidzy.org/embed-by4flcqdxw71.html"
          },
          {
            "id": "s2e4",
            "title": "4. S1.E4 ∙ Episode 4",
            "description": "Arisu est rongé par la culpabilité et prêt à abandonner, mais Usagi l'encourage à persévérer. La prochaine épreuve est une course d'endurance sur une autoroute souterraine.",
            "duration": "47m",
            "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/52000/52540-1x04-episode-4.jpg",
            "video_url": "https://vidzy.org/embed-u7iw831day6e.html"
          },
          {
            "id": "s2e5",
            "title": "5. S1.E5 ∙ Episode 5",
            "description": "Une fois qu'Arisu et Usagi ont trouvé leur chemin jusqu'à la plage, le roi de ce prétendu havre utopique les oblige à l'aider à rassembler les cartes à jouer restantes.",
            "duration": "51m",
            "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/52000/52541-1x05-episode-5.jpg",
            "video_url": "https://vidzy.org/embed-73u2h3072w4q.html"
          },
          {
            "id": "s2e6",
            "title": "6. S1.E6 ∙ Episode 6",
            "description": "Chishiya recrute Arisu et Usagi pour l'aider à changer la donne. Un événement imprévu bouleverse l'équilibre fragile des pouvoirs sur la Plage.",
            "duration": "41m",
            "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/52000/52542-1x06-episode-6.jpg",
            "video_url": "https://vidzy.org/embed-a1ndegjaap98.html"
          },
          {
            "id": "s2e7",
            "title": "7. S1.E7 ∙ Episode 7",
            "description": "Autrefois un havre de paix, la Plage devient le théâtre de l'étape suivante, où une chasse aux sorcières épique dresse tout le monde les uns contre les autres dans une confrontation hostile.",
            "duration": "48m",
            "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/52000/52543-1x07-episode-7.jpg",
            "video_url": "https://vidzy.org/embed-c87val5o88kb.html"
          },
          {
            "id": "s2e8",
            "title": "8. S1.E8 ∙ Episode 8",
            "description": "La tension est à son comble au sein du complexe hôtelier. Alors que le temps imparti touche à sa fin, les survivants de cette épreuve font face à un avenir incertain.",
            "duration": "52m",
            "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/52000/52544-1x08-episode-8.jpg",
            "video_url": "https://vidzy.org/embed-m7zan7drp9iy.html"
          }
        ]
      },
      {
        "seasonNumber": 2,
        "title": "Saison 2",
        "episodes": [
          {
            "id": "s5s2e1",
            "title": "1. S2.E1 ∙ Épisode 1",
            "description": "Arisu, Usagi, Kuina et Chishiya attendent depuis plus d'une heure au carrefour de Shibuya que la prochaine étape commence, mais rien ne semble se passer.",
            "duration": "48m",
            "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/52000/52545-2x01-episode-1.jpg",
            "video_url": "https://vidzy.org/embed-ut3h7wr1kjql.html"
          },
          {
            "id": "s5s2e2",
            "title": "2. S2.E2 ∙ Épisode 2",
            "description": "Maintenant que le Roi de Trèfle s'est révélé dans toute sa gloire, le jeu commence enfin. À la grande surprise d'Arisu, les choses se passent plutôt bien.",
            "duration": "60m",
            "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/52000/52546-2x02-episode-2.jpg",
            "video_url": "https://vidzy.org/embed-hywofqs49iu0.html"
          },
          {
            "id": "s5s2e3",
            "title": "3. S2.E3 ∙ Épisode 3",
            "description": "À quelques minutes de la fin du match, les résultats de chaque équipe semblent fixés. Arisu s'approche de Kyuma et lui demande de lui serrer la main.",
            "duration": "66m",
            "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/52000/52547-2x03-episode-3.jpg",
            "video_url": "https://vidzy.org/embed-s9ujl5oji5d9.html"
          },
          {
            "id": "s5s2e4",
            "title": "4. S2.E4 ∙ Épisode 4",
            "description": "Il ne reste plus qu'une poignée de joueurs, et Chishiya est le seul à ne pas avoir de partenaire. Le prochain tour pourrait bien être le dernier du jeu.",
            "duration": "52m",
            "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/52000/52548-2x04-episode-4.jpg",
            "video_url": "https://vidzy.org/embed-kh0acqyizqhp.html"
          },
          {
            "id": "s5s2e5",
            "title": "5. S2.E5 ∙ Épisode 5",
            "description": "Aguni n'a qu'une idée en tête : trouver et tuer le Roi de Pique. Il est rejoint par Arisu et une lycéenne déterminée nommée Akane Heiya.",
            "duration": "67m",
            "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/52000/52549-2x05-episode-5.jpg",
            "video_url": "https://vidzy.org/embed-840kcsoka0w5.html"
          },
          {
            "id": "s5s2e6",
            "title": "6. S2.E6 ∙ Épisode 6",
            "description": "Usagi devra changer les cœurs et les esprits des joueurs cyniques de l'équipe de la Reine. A la Cour Suprême, Chishiya rencontre le Roi de Carreau.",
            "duration": "75m",
            "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/52000/52550-2x06-episode-6.jpg",
            "video_url": "https://vidzy.org/embed-clyalfw8bzew.html"
          },
          {
            "id": "s5s2e7",
            "title": "7. S2.E7 ∙ Épisode 7",
            "description": "Au milieu d'un passage à niveau de Shibuya envahi par la végétation, Niragi défie Arisu et Chishiya à un jeu. C'est alors qu'arrive le Roi de Pique.",
            "duration": "59m",
            "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/52000/52551-2x07-episode-7.jpg",
            "video_url": "https://vidzy.org/embed-1lax4ezrhgkf.html"
          },
          {
            "id": "s5s2e8",
            "title": "8. S2.E8 ∙ Épisode 8",
            "description": "Pour leur dernière partie, ils devront survivre à trois tours de croquet ; mais avant qu'ils ne puissent aller bien loin, la reine leur demande de s'asseoir pour prendre le thé.",
            "duration": "80m",
            "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/52000/52551-2x07-episode-7.jpg",
            "video_url": "https://vidzy.org/embed-thx4g2ow049l.html"
          }
        ]
      },
      {
        "seasonNumber": 3,
        "title": "Saison 3",
        "episodes": [
          {
            "id": "s5s3e1",
            "title": "1. S3.E1 ∙ Épisode 1",
            "description": "De retour dans le monde réel, sans aucun souvenir de Borderland, Arisu et Usagi rencontrent Ryuji, un professeur obsédé par les expériences de mort imminente.",
            "duration": "61m",
            "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/57000/57709-3x01-episode-1.jpg",
            "video_url": "https://vidzy.org/embed-37oqxkjvq836.html"
          },
          {
            "id": "s5s3e2",
            "title": "2. S3.E2 ∙ Épisode 2",
            "description": "La première partie commence dans un sanctuaire. Arisu et les autres joueurs doivent résoudre des problèmes de mathématiques sur le champ avant que tout ne s'embrase.",
            "duration": "55m",
            "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/57000/57710-3x02-episode-2.jpg",
            "video_url": "https://vidzy.org/embed-pn949pfzpew9.html"
          },
          {
            "id": "s5s3e3",
            "title": "3. S3.E3 ∙ Épisode 3",
            "description": "Alors que le plan de Rei s'effondre, Arisu prend un risque considérable pour sauver son équipe. Sur une autre scène, Usagi et Ryuji font face à un déluge de lasers.",
            "duration": "62m",
            "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/57000/57711-3x03-episode-3.jpg",
            "video_url": "https://vidzy.org/embed-ad4xefo08sos.html"
          },
          {
            "id": "s5s3e4",
            "title": "4. S3.E4 ∙ Épisode 4",
            "description": "Alors que le temps presse et qu'un accident est imminent, le groupe d'Usagi doit sauter dans les trains pour survivre. Une partie explosive de « Kick the Can » attend l'équipe d'Arisu.",
            "duration": "61m",
            "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/57000/57712-3x04-episode-4.jpg",
            "video_url": "https://vidzy.org/embed-saccdgfo3ylf.html"
          },
          {
            "id": "s5s3e5",
            "title": "5. S3.E5 ∙ Épisode 5",
            "description": "Arisu suit son double numérique à travers une simulation du futur, Shibuya, et s'arrête sur une scène touchante : la véritable Usagi se trouve devant lui.",
            "duration": "77m",
            "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/57000/57713-3x05-episode-5.jpg",
            "video_url": "https://vidzy.org/embed-ugvy97kytqgn.html"
          },
          {
            "id": "s5s3e6",
            "title": "6. S3.E6 ∙ Épisode 6",
            "description": "Hanté par une vision terrifiante de l'avenir, Arisu s'effondre sous la pression de sauver tout le monde. Lui, Usagi et l'équipe parviendront-ils à la sortie ?",
            "duration": "76m",
            "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/57000/57714-3x06-episode-6.jpg",
            "video_url": "https://vidzy.org/embed-lm0x3dbna0r4.html"
          }
        ]
      }
    ]
  },
  {
    "id": "s6",
    "title": "fallout",
    "description": "Adaptation du jeu vidéo se déroulant dans une Amérique post apocalyptique.",
    "category": "Série",
    "genre": ["Action", "Aventure", "SF"],
    "thumbnail": "https://www.paddingtonarts.org.uk/wp-content/uploads/2024/04/fallout-show-official-trailer.png",
    "backdrop": "https://www.paddingtonarts.org.uk/wp-content/uploads/2024/04/fallout-show-official-trailer.png",
    "video_url": "",
    "trailer_url": "https://youtu.be/0kQ8i2FpRDk",
    "year": 2024,
    "duration": "2 Saisons",
    "rating": "4,2",
    "maturityRating": "13+",
    "featured": true,
    "seasons": [
      {
        "seasonNumber": 1,
        "title": "Saison 1",
        "episodes": [
          {
            "id": "s2e1",
            "title": "1. S1.E1 ∙ Fallout",
            "description": "Une modeste recrue d'une organisation post-apocalyptique est chargée de parcourir les terres désolées à la recherche de la technologie d'avant-guerre afin de la préserver, faisant face à des défis et des critiques en cours de route.",
            "duration": "74m",
            "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/53000/53563-1x01-la-fin.jpg",
            "video_url": "https://vidzy.org/embed-pknco84j8zsh.html"
          },
          {
            "id": "s2e2",
            "title": "2. S1.E2 ∙ The Target",
            "description": "Je sais que la vie n'a pas dû être facile ici.",
            "duration": "65m",
            "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/53000/53564-1x02-la-cible.jpg",
            "video_url": "https://vidzy.org/embed-f7brj7bukbyr.html"
          },
          {
            "id": "s2e3",
            "title": "3. S1.E3 ∙ The Head",
            "description": "Le Wasteland, la zone contaminée, a sa propre règle d'or.",
            "duration": "57m",
            "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/53000/53565-1x03-la-tete.jpg",
            "video_url": "https://vidzy.org/embed-g4gh6ve20er7.html"
          },
          {
            "id": "s2e4",
            "title": "4. S1.E4 ∙ The Ghouls",
            "description": "Lucy et La Goule se retrouvent dans des situations dangereuses, ce qui entraîne un dilemme moral et des confrontations intenses. Norm découvre des secrets dans la chambre forte 32, qui renvoient au passé de sa mère.",
            "duration": "49m",
            "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/53000/53566-1x04-les-goules.jpg",
            "video_url": "https://vidzy.org/embed-r5dnd4hlq68l.html"
          },
          {
            "id": "s2e5",
            "title": "5. S1.E5 ∙ The Past",
            "description": "Chacun a le désir de sauver le monde et se bat pour y parvenir.",
            "duration": "45m",
            "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/53000/53567-1x05-le-passe.jpg",
            "video_url": "https://vidzy.org/embed-l3i07p7i4ulh.html"
          },
          {
            "id": "s2e6",
            "title": "6. S1.E6 ∙ The Trap",
            "description": "Que se passe-t-il lorsque les fermiers ont plus de pouvoir que le shérif ?",
            "duration": "60m",
            "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/53000/53568-1x06-le-piege.jpg",
            "video_url": "https://vidzy.org/embed-odou891zdg2l.html"
          },
          {
            "id": "s2e7",
            "title": "7. S1.E7 ∙ The Radio",
            "description": "Chaque génération a ses idées stupides.",
            "duration": "61m",
            "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/53000/53569-1x07-la-radio.jpg",
            "video_url": "https://vidzy.org/embed-rq279h4dp6lr.html"
          },
          {
            "id": "s2e8",
            "title": "8. S1.E8 ∙ The Beginning",
            "description": "Guerre",
            "duration": "62m",
            "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/53000/53570-1x08-le-commencement.jpg",
            "video_url": "https://vidzy.org/embed-h9wfrnh7jxqh.html"
          }
        ]
      },
      {
        "seasonNumber": 2,
        "title": "Saison 2",
        "episodes": [
          {
            "id": "s6s2e1",
            "title": "1. S2.E1 ∙ The Innovator",
            "description": "Lucy et le Ghoul sont sur la piste du père de Lucy, mais doivent d'abord échapper à un gang qui a capturé le Ghoul. Des flashbacks nous dévoilent les événements qui ont mené à la guerre nucléaire qui a ravagé la Terre, notamment les innovations et le pouvoir de Robert House, l'homme le plus riche des États-Unis.",
            "duration": "62m",
            "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/58000/58179-2x01-l-inventeur.jpg",
            "video_url": "https://vidzy.org/embed-fxy7e0l7fgcr.html"
          },
          {
            "id": "s6s2e2",
            "title": "2. S2.E2 ∙ The Golden Rule",
            "description": "La famille n'a pas de prix.",
            "duration": "58m",
            "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/58000/58180-2x02-la-regle-d-or.jpg",
            "video_url": "https://vidzy.org/embed-gwkzu8d081js.html"
          },
          {
            "id": "s6s2e3",
            "title": "3. S2.E3 ∙ The Profligate",
            "description": "La plupart des enfants meurent à cet âge-là.",
            "duration": "55m",
            "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/58000/58181-2x03-la-dissipatrice.jpg",
            "video_url": "https://vidzy.org/embed-9fjvj65yevmz.html"
          },
          {
            "id": "s6s2e4",
            "title": "4. S2.E4 ∙ The Demon in the Snow",
            "description": "De la pierre à la lance, et ainsi de suite.",
            "duration": "49m",
            "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/58000/58182-2x04-le-demon-dans-la-neige.jpg",
            "video_url": "https://vidzy.org/embed-ylr5lzbsuyo0.html"
          },
          {
            "id": "s6s2e5",
            "title": "5. S2.E5 ∙ The Wrangler",
            "description": "Don't tell me.",
            "duration": "57m",
            "thumbnail": "...",
            "video_url": "..."
          },
          {
            "id": "s6s2e6",
            "title": "6. S2.E6 ∙ The Other Player",
            "description": "I remember good people.",
            "duration": "51m",
            "thumbnail": "...",
            "video_url": "..."
          },
          {
            "id": "s6s2e7",
            "title": "7. S2.E7 ∙ The Handoff",
            "description": "...",
            "duration": "...",
            "thumbnail": "...",
            "video_url": "..."
          },
          {
            "id": "s6s2e8",
            "title": "8. S2.E8 ∙ The Strip",
            "description": "...",
            "duration": "...",
            "thumbnail": "...",
            "video_url": "..."
          }
        ]
      }
    ]
  },
  {
    "id": "s7",
    "title": "série loup garou",
    "description": "Les Loups-Garous de Thiercelieux, le jeu de société français le plus vendu au monde, est réinventé comme jamais auparavant : CANAL+ transforme ce jeu culte en une expérience sociale grandeur nature. Imaginé par Fary et Panayotis Pascot, avec la voix de Mister V.",
    "category": "Série",
    "genre": ["Jeu télévisé", "Téléréalité", "Stratégie", "Psychologie", "Divertissement"],
    "thumbnail": "https://bullesdeculture.com/bdc-content/uploads/2024/10/loups-garous-affiche.jpg",
    "backdrop": "https://bullesdeculture.com/bdc-content/uploads/2024/10/loups-garous-affiche.jpg",
    "video_url": "",
    "trailer_url": "https://youtu.be/gUpm27E2lZw",
    "year": 2024,
    "duration": "2 Saisons",
    "rating": "4.1",
    "maturityRating": "13+",
    "featured": true,
    "seasons": [
      {
        "seasonNumber": 1,
        "title": "Saison 1",
        "episodes": [
          {
            "id": "s2e1",
            "title": "1. Je suis Villageois",
            "description": "13 joueurs aux capacités exceptionnelles arrivent au village de Thiercelieux pour une partie grandeur nature qui durera 13 jours. Les cartes rôles sont tirées et font naître les premiers soupçons. A la tombée de la nuit, l’un d’eux se fera dévorer par les loups-garous.",
            "duration": "37m",
            "thumbnail": "https://fr.web.img6.acsta.net/c_400_200/img/8e/9c/8e9c8af43cf84717eed56d75de631bcd.jpg",
            "video_url": "https://vidzy.org/embed-kqw2rcn2xt3l.html"
          },
          {
            "id": "s2e2",
            "title": "2. Un problème de maths",
            "description": "Le village se réveille et la première victime des loups-garous quitte Thiercelieux. Après l’élection du capitaine, la première quête met à l’épreuve la capacité des joueurs à collaborer. La première assemblée du village s’annonce sous haute tension...",
            "duration": "43m",
            "thumbnail": "https://fr.web.img6.acsta.net/c_400_200/img/8e/9c/8e9c8af43cf84717eed56d75de631bcd.jpg",
            "video_url": "https://vidzy.org/embed-nt7o26j9hi5n.html"
          },
          {
            "id": "s2e3",
            "title": "3. Je te sors des stats mec",
            "description": "Les villageois se livrent à un débat acharné, chacun essayant de sonder les intentions des autres. Une nouvelle carte rôle est révélée bouleversant les équilibres, tandis que les loups-garous se rassemblent dans l'ombre, prêts à frapper de nouveau.",
            "duration": "35m",
            "thumbnail": "https://fr.web.img6.acsta.net/c_400_200/img/8e/9c/8e9c8af43cf84717eed56d75de631bcd.jpg",
            "video_url": "https://vidzy.org/embed-5yd7pulufim3.html"
          },
          {
            "id": "s2e4",
            "title": "4. Je sais que tu vas me dévorer",
            "description": "Une nouvelle quête aux conséquences imprévues se profile pour les villageois, où cohésion et compromis seront essentiels. L'assemblée à venir promet d'être particulièrement tendue, avec des renoncements pour certains villageois.",
            "duration": "45m",
            "thumbnail": "https://fr.web.img6.acsta.net/c_400_200/img/8e/9c/8e9c8af43cf84717eed56d75de631bcd.jpg",
            "video_url": "https://vidzy.org/embed-v8empwld3zxc.html"
          },
          {
            "id": "s2e5",
            "title": "5. Plus le choix",
            "description": "Une nouvelle carte rôle fait son apparition, attisant les tensions parmi les joueurs. Et alors que les loups-garous choisissent leur nouvelle victime, une mystérieuse intervention pourrait bien renverser le cours des événements...",
            "duration": "42m",
            "thumbnail": "https://fr.web.img6.acsta.net/c_400_200/img/8e/9c/8e9c8af43cf84717eed56d75de631bcd.jpg",
            "video_url": "https://vidzy.org/embed-ul6iu0e1o77l.html"
          },
          {
            "id": "s2e6",
            "title": "6. Diiinguerie !",
            "description": "Une nouvelle quête vertigineuse attend les villageois et va complètement rebattre les cartes de la partie. Après l’assemblée du village et une nouvelle élimination, de lourdes accusations viennent inquiéter les loups-garous, et semer la discorde au village.",
            "duration": "48m",
            "thumbnail": "https://fr.web.img6.acsta.net/c_400_200/img/8e/9c/8e9c8af43cf84717eed56d75de631bcd.jpg",
            "video_url": "https://vidzy.org/embed-y6txcv0bsnwe.html"
          },
          {
            "id": "s2e7",
            "title": "7. Keyser Söze",
            "description": "Les villageois vont continuer à affronter leurs peurs pour avancer dans la partie. Pour espérer remporter la victoire ils devront garder la tête froide car chaque décision est maintenant cruciale.",
            "duration": "37m",
            "thumbnail": "https://fr.web.img6.acsta.net/c_400_200/img/8e/9c/8e9c8af43cf84717eed56d75de631bcd.jpg",
            "video_url": "https://vidzy.org/embed-f91wu2dyzxqx.html"
          },
          {
            "id": "s2e8",
            "title": "8. Devant tout le monde",
            "description": "Voici venu l'heure de l'ultime assemblée, où les joueurs vont tenter pour la dernière fois de défendre leur cause. Alors, qui des villageois ou des loups-garous remportera cette partie d'anthologie ?",
            "duration": "39m",
            "thumbnail": "https://fr.web.img6.acsta.net/c_400_200/img/8e/9c/8e9c8af43cf84717eed56d75de631bcd.jpg",
            "video_url": "https://vidzy.org/embed-czqtjhiqv207.html"
          }
        ]
      },
      {
        "seasonNumber": 2,
        "title": "Saison 2",
        "episodes": [
          {
            "id": "s7s2e1",
            "title": "1. Ils sont treize",
            "description": "15 joueurs aux capacités exceptionnelles, rêvent d’entrer au village de Thiercelieux pour une nouvelle partie grandeur nature où tout ne va se passer comme ils le pensent. Les cartes rôles sont tirées et font naître les premiers soupçons des joueurs qui redoutent la tombée de la nuit et son premier conseil des loups-garous.",
            "duration": "36m",
            "thumbnail": "https://fr.web.img6.acsta.net/c_400_200/img/b6/a5/b6a573648c9e144368a55a6cb6f42061.jpg",
            "video_url": "https://vidzy.org/embed-ojirhkmdln0h.html"
          },
          {
            "id": "s7s2e2",
            "title": "2. Vision double",
            "description": "Après le conseil des loups-garous, un premier dévoré quitte Thiercelieux. La première quête est lancée, et déjà, les soupçons vont bon train. Les alliances semblent se former mais personne ne sait vraiment à qui se fier. L’assemblée du village s’annonce sous haute tension…",
            "duration": "52m",
            "thumbnail": "https://fr.web.img6.acsta.net/c_400_200/img/b6/a5/b6a573648c9e144368a55a6cb6f42061.jpg",
            "video_url": "https://vidzy.org/embed-th3n02oi696t.html"
          },
          {
            "id": "s7s2e3",
            "title": "3. Elle avait tout prévu",
            "description": "Dans l’ombre, certains joueurs observent et préparent leurs coups comme sur un échiquier. Peu à peu, ils commencent à jouer au grand jour, avançant leurs premiers pions. Une nouvelle carte rôle est révélée, changeant radicalement la donne tant pour les villageois que pour les loups garous qui se rassemblent à la tombée de la nuit, prêts à frapper de nouveau.",
            "duration": "42m",
            "thumbnail": "https://fr.web.img6.acsta.net/c_400_200/img/b6/a5/b6a573648c9e144368a55a6cb6f42061.jpg",
            "video_url": "https://vidzy.org/embed-r3exv1ui5on8.html"
          },
          {
            "id": "s7s2e4",
            "title": "4. Rideau",
            "description": "Une nouvelle quête théâtrale met les nerfs des villageois à rude épreuve, transformant le village en véritable scène de tensions. L’assemblée qui s’ensuit sème la discorde : chaque mot résonne, chaque geste pèse, et le vote se joue comme un acte décisif sur cette scène dramatique.",
            "duration": "47m",
            "thumbnail": "https://fr.web.img6.acsta.net/c_400_200/img/b6/a5/b6a573648c9e144368a55a6cb6f42061.jpg",
            "video_url": "https://vidzy.org/embed-ltaadzpmcbcu.html"
          },
          {
            "id": "s7s2e5",
            "title": "5. Le piège à loups",
            "description": "Après une assemblée et une nouvelle élimination, un coup de maitre pourrait bien renverser le cours des événements et inquiéter les loups-garous. ",
            "duration": "35m",
            "thumbnail": "https://fr.web.img6.acsta.net/c_400_200/img/b6/a5/b6a573648c9e144368a55a6cb6f42061.jpg",
            "video_url": "https://vidzy.org/embed-42ko9803pj1k.html"
          },
          {
            "id": "s7s2e6",
            "title": "6. Destination finale",
            "description": "Nouvelle quête et nouvelle chance pour le village d'acquérir une carte rôle supplémentaire. Mais des invités inattendus viennent compliquer cette quête, pour le bonheur des Loups-garous et le malheur des villageois. De retour au village, la soirée semble calme… mais les tensions montent, annonçant une assemblée du village qui ne laissera personne indemne.",
            "duration": "40m",
            "thumbnail": "https://fr.web.img6.acsta.net/c_400_200/img/b6/a5/b6a573648c9e144368a55a6cb6f42061.jpg",
            "video_url": "https://vidzy.org/embed-8zq5tr7hct6k.html"
          },
          {
            "id": "s7s2e7",
            "title": "7. Foutue enquête",
            "description": "Loups et villageois sont sous pression, les suspicions s’enchaînent, les alliances et les stratégies se dessinent, chaque indice faisant monter la tension. Pendant la nuit, le Conseil des Loups se réunit… une proie a été particulièrement ciblée…  ",
            "duration": "41m",
            "thumbnail": "https://fr.web.img6.acsta.net/c_400_200/img/b6/a5/b6a573648c9e144368a55a6cb6f42061.jpg",
            "video_url": "https://vidzy.org/embed-36we32dxllgu.html"
          },
          {
            "id": "s7s2e8",
            "title": "8. Dissociation",
            "description": "Après une assemblée extraordinaire et une nouvelle élimination, une quête nocturne attend les villageois. Conséquences inattendues et apparition d’une nouvelle carte rôle viendront bouleverser les équilibres. ",
            "duration": "40m",
            "thumbnail": "https://fr.web.img6.acsta.net/c_400_200/img/b6/a5/b6a573648c9e144368a55a6cb6f42061.jpg",
            "video_url": "https://vidzy.org/embed-ibl14cqg15wv.html"
          },
          {
            "id": "s7s2e9",
            "title": "9. ...",
            "description": "...",
            "duration": "...",
            "thumbnail": "...",
            "video_url": "..."
          },
          {
            "id": "s7s2e10",
            "title": "10. ...",
            "description": "...",
            "duration": "...",
            "thumbnail": "...",
            "video_url": "..."
          }
        ]
      }
    ]
  },
  {
    "id": "s8",
    "title": "game of throne",
    "description": "Neuf familles nobles se battent pour le contrôle des terres mythiques de Westeros, tandis qu'un ancien ennemi revient après avoir été endormi pendant des milliers d'années.",
    "category": "Série",
    "genre": ["Fantasy", "Drame", "Action", "Aventure", "Tragédie"],
    "thumbnail": "https://usercontent.one/wp/www.screentune.com/wp-content/uploads/2019/03/403589.png?media=1649161309",
    "backdrop": "https://usercontent.one/wp/www.screentune.com/wp-content/uploads/2019/03/403589.png?media=1649161309",
    "video_url": "",
    "trailer_url": "https://youtu.be/KPLWWIOCOOQ",
    "year": 2011,
    "duration": "8 Saisons",
    "rating": "4.7",
    "maturityRating": "12+",
    "featured": true,
    "seasons": [
      {
                "seasonNumber": 1,
                "title": "Saison 1",
                "episodes": [
          { "id": "s1e1", "title": "1. L'hiver vient", "description": "Ned Stark est sollicité par le roi Robert Baratheon pour devenir sa Main.", "duration": "62 min", "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/21000/21847-1x01-l-hiver-vient.jpg", "video_url": "https://vidzy.org/embed-remmnyq4xysh.html" },
          { "id": "s1e2", "title": "2. La Route royale", "description": "Les Stark partent pour Port-Réal ; un incident crée des tensions avec les Lannister.", "duration": "56 min", "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/21000/21848-1x02-la-route-royale.jpg", "video_url": "https://vidzy.org/embed-gnt0szdae1i3.html" },
          { "id": "s1e3", "title": "3. Lord Snow", "description": "Ned arrive à Port-Réal ; Jon commence son entraînement au Mur.", "duration": "58 min", "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/21000/21849-1x03-lord-snow.jpg", "video_url": "https://vidzy.org/embed-r9dpmu8gc1gj.html" },
          { "id": "s1e4", "title": "4. Infirmes, Bâtards et Choses brisées", "description": "Ned enquête sur la mort de Jon Arryn ; Tyrion est arrêté par Catelyn.", "duration": "56 min", "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/21000/21850-1x04-infirmes-batards-et-choses-brisees.jpg", "video_url": "https://vidzy.org/embed-3tu8haxq9anm.html" },
          { "id": "s1e5", "title": "5. Le Loup et le Lion", "description": "Conflit armé entre les Stark et les Lannister dans les rues de Port-Réal.", "duration": "55 min", "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/21000/21851-1x05-le-loup-et-le-lion.jpg", "video_url": "https://vidzy.org/embed-g1wcr52us1dc.html" },
          { "id": "s1e6", "title": "6. Une couronne d'or", "description": "Viserys exige son dû auprès de Drogo de manière brutale.", "duration": "53 min", "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/21000/21852-1x06-la-couronne-d-or.jpg", "video_url": "https://vidzy.org/embed-sx6xa4a53fvq.html" },
          { "id": "s1e7", "title": "7. Gagner ou mourir", "description": "Ned confronte Cersei ; Robert est mortellement blessé à la chasse.", "duration": "58 min", "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/21000/21853-1x07-gagner-ou-mourir.jpg", "video_url": "https://vidzy.org/embed-7w7xws4g8af5.html" },
          { "id": "s1e8", "title": "8. Frapper d'estoc", "description": "Les Lannister prennent le contrôle ; Ned est emprisonné pour trahison.", "duration": "59 min", "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/21000/21854-1x08-frapper-d-estoc.jpg", "video_url": "https://vidzy.org/embed-n59fjnhdc6qy.html" },
          { "id": "s1e9", "title": "9. Baelor", "description": "Le destin de Ned Stark se joue devant le Septuaire de Baelor.", "duration": "57 min", "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/21000/21855-1x09-baelor.jpg", "video_url": "https://vidzy.org/embed-vgdyntk0o5mx.html" },
          { "id": "s1e10", "title": "10. De feu et de sang", "description": "Naissance des dragons dans le bûcher funéraire de Khal Drogo.", "duration": "53 min", "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/21000/21856-1x10-de-feu-et-de-sang.jpg", "video_url": "https://vidzy.org/embed-poi3jmsfhcv6.html" }
        ]
      },
      {
                "seasonNumber": 2,
                "title": "Saison 2",
                "episodes": [
          { "id": "s2e1", "title": "1. Le Nord se souvient", "description": "Tyrion devient Main du Roi ; Stannis Baratheon revendique le trône.", "duration": "53 min", "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/24000/24056-2x01-le-nord-se-souvient.jpg", "video_url": "https://vidzy.org/embed-vtzngxrjzgff.html" },
          { "id": "s2e2", "title": "2. Les Contrées de la nuit", "description": "Theon retourne aux Îles de Fer ; Arya partage un secret avec Gendry.", "duration": "54 min", "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/24000/24057-2x02-les-contrees-noctures.jpg", "video_url": "https://vidzy.org/embed-yg88tci1nq8v.html" },
          { "id": "s2e3", "title": "3. Ce qui est mort ne saurait mourir", "description": "Tyrion teste la loyauté du Conseil ; Brienne gagne sa place auprès de Renly.", "duration": "53 min", "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/24000/24058-2x03-ce-qui-est-mort-ne-saurait-mourir.jpg", "video_url": "https://vidzy.org/embed-482o6q8pqn2v.html" },
          { "id": "s2e4", "title": "4. Jardin d'Os", "description": "Joffrey terrorise Sansa ; Daenerys arrive aux portes de Qarth.", "duration": "51 min", "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/24000/24059-2x04-le-jardin-des-os.jpg", "video_url": "https://vidzy.org/embed-i5yg9n3kdb7a.html" },
          { "id": "s2e5", "title": "5. Le Fantôme d'Harrenhal", "description": "Une ombre assassine Renly ; Arya reçoit une offre de Jaqen H'ghar.", "duration": "55 min", "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/24000/24060-2x05-le-fantome-d-harrenhal.jpg", "video_url": "https://vidzy.org/embed-0x62p8ovvgsg.html" },
          { "id": "s2e6", "title": "6. Les Anciens et les Nouveaux Dieux", "description": "Theon capture Winterfell ; les dragons de Daenerys sont volés.", "duration": "54 min", "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/24000/24061-2x06-les-anciens-et-les-nouveaux-dieux.jpg", "video_url": "https://vidzy.org/embed-8n568f0r1fx0.html" },
          { "id": "s2e7", "title": "7. Un homme sans honneur", "description": "Jaime tente de s'échapper ; Bran et Rickon disparaissent de Winterfell.", "duration": "56 min", "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/24000/24062-2x07-un-homme-sans-honneur.jpg", "video_url": "https://vidzy.org/embed-5rbo9jqr07z9.html" },
          { "id": "s2e8", "title": "8. Le Prince de Winterfell", "description": "Tyrion prépare la défense de Port-Réal avec le Feu Grégeois.", "duration": "54 min", "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/24000/24063-2x08-le-prince-de-winterfell.jpg", "video_url": "https://vidzy.org/embed-zfakxvnp469u.html" },
          { "id": "s2e9", "title": "9. La Néra", "description": "La grande bataille navale entre Stannis et les forces de Port-Réal.", "duration": "55 min", "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/24000/24064-2x09-la-nera.jpg", "video_url": "https://vidzy.org/embed-clvhrty07qne.html" },
          { "id": "s2e10", "title": "10. Valar Morghulis", "description": "Daenerys entre dans l'Hôtel des Nonmourants ; l'armée des morts approche.", "duration": "64 min", "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/24000/24065-2x10-valar-morghulis.jpg", "video_url": "https://vidzy.org/embed-5hih0yko89m1.html" }
        ]
      },
      {
                "seasonNumber": 3,
                "title": "Saison 3",
                "episodes": [
          { "id": "s3e1", "title": "1. Valar Dohaeris", "description": "Jon rencontre Mance Rayder ; Daenerys cherche une armée à Astapor.", "duration": "55 min", "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/24000/24066-3x01-valar-dohaeris.jpg", "video_url": "https://vidzy.org/embed-kc1m5f5ykqln.html" },
          { "id": "s3e2", "title": "2. Ailes sombres, paroles sombres", "description": "Sansa rencontre Olenna Tyrell ; Bran rencontre Jojen et Meera Reed.", "duration": "58 min", "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/24000/24067-3x02-noires-ailes-noires-nouvelles.jpg", "video_url": "https://vidzy.org/embed-yqvyb9pe0d7u.html" },
          { "id": "s3e3", "title": "3. L'Allée du Châtiment", "description": "Jaime perd sa main ; Daenerys négocie pour les Immaculés.", "duration": "53 min", "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/24000/24068-3x03-la-promenade-du-chatiment.jpg", "video_url": "https://vidzy.org/embed-8zgyf541b8v9.html" },
          { "id": "s3e4", "title": "4. Voici que son tour de garde s'achève", "description": "Daenerys libère Astapor avec Dracarys ; la Garde de Nuit se mutine.", "duration": "54 min", "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/24000/24069-3x04-et-maintenant-sa-garde-a-pris-fin.jpg", "video_url": "https://vidzy.org/embed-pm31sh0v6ynj.html" },
          { "id": "s3e5", "title": "5. Baisé par le feu", "description": "Le Limier affronte Beric Dondarrion ; Jon et Ygritte se rapprochent.", "duration": "58 min", "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/24000/24070-3x05-embrassee-par-le-feu.jpg", "video_url": "https://vidzy.org/embed-jrhzmllsww4i.html" },
          { "id": "s3e6", "title": "6. L'Ascension", "description": "Jon et les Sauvageons escaladent le Mur ; Littlefinger dévoile ses plans.", "duration": "53 min", "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/24000/24071-3x06-l-escalade.jpg", "video_url": "https://vidzy.org/embed-0unagaby18gr.html" },
          { "id": "s3e7", "title": "7. L'Ours et la Belle", "description": "Jaime sauve Brienne d'une fosse aux ours à Harrenhal.", "duration": "58 min", "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/24000/24072-3x07-la-belle-et-l-ours.jpg", "video_url": "https://vidzy.org/embed-k7451g8mvifs.html" },
          { "id": "s3e8", "title": "8. Les Seconds Fils", "description": "Tyrion et Sansa se marient ; Sam tue un Marcheur Blanc.", "duration": "57 min", "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/24000/24073-3x08-deuxiemes-fils.jpg", "video_url": "https://vidzy.org/embed-bs6w3phzaqoe.html" },
          { "id": "s3e9", "title": "9. Les Pluies de Castamere", "description": "Les Noces Pourpres : la trahison des Frey contre les Stark.", "duration": "51 min", "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/24000/24074-3x09-les-pluies-de-castamere.jpg", "video_url": "https://vidzy.org/embed-u5vi2fvks115.html" },
          { "id": "s3e10", "title": "10. Mhysa", "description": "Les Lannister célèbrent leur victoire ; Daenerys libère Yunkai.", "duration": "63 min", "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/24000/24075-3x10-mhysa.jpg", "video_url": "https://vidzy.org/embed-ga9b46ea7bbc.html" }
        ]
      },
      {
                "seasonNumber": 4,
                "title": "Saison 4",
                "episodes": [
          { "id": "s4e1", "title": "1. Deux épées", "description": "Tywin fond l'épée de Ned ; Oberyn Martell arrive à Port-Réal.", "duration": "58 min", "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/24000/24504-4x01-deux-epees.jpg", "video_url": "https://vidzy.org/embed-o52bzs3r3jf4.html" },
          { "id": "s4e2", "title": "2. Le Lion et la Rose", "description": "Le mariage de Joffrey et Margaery se termine par une mort brutale.", "duration": "52 min", "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/24000/24623-4x02-le-lion-et-la-rose.jpg", "video_url": "https://vidzy.org/embed-ggh9eel64c8j.html" },
          { "id": "s4e3", "title": "3. Briseuse de chaînes", "description": "Tyrion est emprisonné ; Daenerys arrive aux portes de Meereen.", "duration": "57 min", "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/24000/24624-4x03-briseur-de-chaines.jpg", "video_url": "https://vidzy.org/embed-pxzav6eta1hh.html" },
          { "id": "s4e4", "title": "4. Féale", "description": "Jaime charge Brienne de protéger Sansa ; Bran est capturé au Nord.", "duration": "55 min", "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/24000/24832-4x04-gardien-de-la-foi.jpg", "video_url": "https://vidzy.org/embed-w4xjldrcusar.html" },
          { "id": "s4e5", "title": "5. Premier du nom", "description": "Tommen est couronné ; Jon Snow élimine les mutants chez Craster.", "duration": "53 min", "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/24000/24833-4x05-premier-du-nom.jpg", "video_url": "https://vidzy.org/embed-thvj64h77krh.html" },
          { "id": "s4e6", "title": "6. Les Lois des dieux et des hommes", "description": "Le procès de Tyrion et son discours de haine envers la cité.", "duration": "51 min", "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/24000/24834-4x06-les-lois-divines-et-humaines.jpg", "video_url": "https://vidzy.org/embed-9p6b1rly1s8p.html" },
          { "id": "s4e7", "title": "7. L'Oiseau moqueur", "description": "Oberyn devient le champion de Tyrion ; Littlefinger tue Lysa Arryn.", "duration": "51 min", "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/24000/24835-4x07-oiseau-moqueur.jpg", "video_url": "https://vidzy.org/embed-brrj8nxhuoiq.html" },
          { "id": "s4e8", "title": "8. La Montagne et la Vipère", "description": "Combat à mort entre Oberyn Martell et Gregor Clegane.", "duration": "52 min", "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/24000/24836-4x08-la-montagne-et-la-vipere.jpg", "video_url": "https://vidzy.org/embed-kdv704p1i2au.html" },
          { "id": "s4e9", "title": "9. Les Veilleurs au rempart", "description": "L'assaut massif des Sauvageons contre Châteaunoir et le Mur.", "duration": "51 min", "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/24000/24837-4x09-les-marcheurs-sur-le-mur.jpg", "video_url": "https://vidzy.org/embed-gmypgc14oo7f.html" },
          { "id": "s4e10", "title": "10. Les Enfants", "description": "Tyrion tue son père ; Bran rencontre la Corneille à Trois Yeux.", "duration": "65 min", "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/24000/24838-4x10-les-enfants.jpg", "video_url": "https://vidzy.org/embed-4p5w2g8u38zb.html" }
        ]
      },
      {
                "seasonNumber": 5,
                "title": "Saison 5",
                "episodes": [
          { "id": "s5e1", "title": "1. Les Guerres à venir", "description": "Cersei s'inquiète du pouvoir des Tyrell ; Jon tente de convaincre Mance.", "duration": "53 min", "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/25000/25901-5x01-the-wars-to-come.jpg", "video_url": "https://vidzy.org/embed-r7gih12xtvpp.html" },
          { "id": "s5e2", "title": "2. La Demeure du Noir et du Blanc", "description": "Arya commence son initiation à Braavos ; Jon est élu Lord Commandant.", "duration": "56 min", "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/26000/26129-5x02-the-house-of-black-and-white.jpg", "video_url": "https://vidzy.org/embed-5lkjkner04tw.html" },
          { "id": "s5e3", "title": "3. Le Grand Moineau", "description": "Tommen et Margaery se marient ; Sansa retourne à Winterfell.", "duration": "60 min", "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/26000/26130-5x03-high-sparrow.jpg", "video_url": "https://vidzy.org/embed-yccjdktskug6.html" },
          { "id": "s5e4", "title": "4. Les Fils de la Harpie", "description": "Les fanatiques religieux prennent le contrôle de Port-Réal.", "duration": "51 min", "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/26000/26131-5x04-the-sons-of-the-harpy.jpg", "video_url": "https://vidzy.org/embed-93946t4la6ox.html" },
          { "id": "s5e5", "title": "5. Tuez l'enfant", "description": "Jon fait alliance avec les Sauvageons ; Stannis marche vers le sud.", "duration": "57 min", "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/26000/26132-5x05-kill-the-boy.jpg", "video_url": "https://vidzy.org/embed-zs0qch6njzjj.html" },
          { "id": "s5e6", "title": "6. Insoumis, Invaincus, Intacts", "description": "Sansa est mariée de force à Ramsay ; Myrcella est menacée à Dorne.", "duration": "54 min", "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/26000/26133-5x06-unbowed-unbent-unbroken.jpg", "video_url": "https://vidzy.org/embed-9jufu7utssab.html" },
          { "id": "s5e7", "title": "7. Le Don", "description": "Tyrion rencontre enfin Daenerys ; Cersei finit dans une cellule.", "duration": "59 min", "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/26000/26134-5x07-the-gift.jpg", "video_url": "https://vidzy.org/embed-xdm2g0gk6jhu.html" },
          { "id": "s5e8", "title": "8. Durehome", "description": "L'attaque terrifiante des Marcheurs Blancs sur le campement côtier.", "duration": "61 min", "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/26000/26135-5x08-episode-8.jpg", "video_url": "https://vidzy.org/embed-t6qgp963y1y5.html" },
          { "id": "s5e9", "title": "9. La Danse des dragons", "description": "Stannis sacrifie sa fille ; Daenerys s'échappe sur le dos de Drogon.", "duration": "52 min", "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/26000/26136-5x09-episode-9.jpg", "video_url": "https://vidzy.org/embed-l91msft0rs6z.html" },
          { "id": "s5e10", "title": "10. La Miséricorde de la Mère", "description": "Jon Snow est trahi par ses frères ; Cersei fait sa marche de la honte.", "duration": "60 min", "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/26000/26137-5x10-episode-10.jpg", "video_url": "https://vidzy.org/embed-mvp1xtobtdv1.html" }
        ]
      },
      {
                "seasonNumber": 6,
                "title": "Saison 6",
                "episodes": [
          { "id": "s6e1", "title": "1. La Femme rouge", "description": "Sansa et Theon fuient Winterfell ; Melisandre révèle son secret.", "duration": "50 min", "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/26000/26519-6x01-the-red-woman.jpg", "video_url": "https://vidzy.org/embed-k2fbp3cyo8qu.html" },
          { "id": "s6e2", "title": "2. La Maison", "description": "Bran explore le passé ; Jon Snow revient du royaume des morts.", "duration": "54 min", "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/26000/26520-6x02-white-harbour.jpg", "video_url": "https://vidzy.org/embed-v7vr8ppqi4i1.html" },
          { "id": "s6e3", "title": "3. Briseur de serments", "description": "Jon quitte la Garde ; Ramsay reçoit un cadeau (Rickon Stark).", "duration": "53 min", "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/26000/26521-6x03-oathbreaker.jpg", "video_url": "https://vidzy.org/embed-gwormh2xc9ut.html" },
          { "id": "s6e4", "title": "4. Le Livre de l'Étranger", "description": "Jon et Sansa se retrouvent ; Daenerys brûle les leaders Dothrakis.", "duration": "59 min", "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/26000/26522-6x04-my-lord.jpg", "video_url": "https://vidzy.org/embed-jseeqhsupu5t.html" },
          { "id": "s6e5", "title": "5. La Porte", "description": "Le sacrifice tragique de Hodor ; les origines du Roi de la Nuit.", "duration": "57 min", "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/26000/26523-6x05-the-last-heir.jpg", "video_url": "https://vidzy.org/embed-k668z11b39di.html" },
          { "id": "s6e6", "title": "6. Sang de mon sang", "description": "Benjen Stark sauve Bran ; Sam vole l'épée de son père.", "duration": "52 min", "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/26000/26524-6x06-blood-of-my-blood.jpg", "video_url": "https://vidzy.org/embed-8ff4tyigrjb6.html" },
          { "id": "s6e7", "title": "7. L'Homme brisé", "description": "On retrouve Sandor Clegane vivant ; Jon et Sansa cherchent des alliés.", "duration": "51 min", "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/26000/26525-6x07-the-broken-man.jpg", "video_url": "https://vidzy.org/embed-soipgloxe3i9.html" },
          { "id": "s6e8", "title": "8. Personne", "description": "Arya survit à l'Orpheline ; Jaime reprend Vivesaigues.", "duration": "59 min", "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/26000/26526-6x08-no-one.jpg", "video_url": "https://vidzy.org/embed-h9jjxjrv2h5c.html" },
          { "id": "s6e9", "title": "9. La Bataille des Bâtards", "description": "L'affrontement épique entre Jon Snow et Ramsay Bolton.", "duration": "60 min", "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/26000/26527-6x09-the-battle-of-the-bastards.jpg", "video_url": "https://vidzy.org/embed-0a81ufez2wtf.html" },
          { "id": "s6e10", "title": "10. Les Vents de l'hiver", "description": "Cersei explose le Septuaire ; Jon est proclamé Roi du Nord.", "duration": "68 min", "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/26000/26528-6x10-the-winds-of-winter.jpg", "video_url": "https://vidzy.org/embed-480aizzq6aey.html" }
        ]
      },
      {
                "seasonNumber": 7,
                "title": "Saison 7",
                "episodes": [
          { "id": "s7e1", "title": "1. Peyredragon", "description": "Daenerys s'installe dans son fief ancestral ; Arya venge sa famille.", "duration": "59 min", "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/28000/28510-7x01-dragonstone.jpg", "video_url": "https://vidzy.org/embed-j2rsadt7y5db.html" },
          { "id": "s7e2", "title": "2. Du Typhon", "description": "Daenerys prépare l'attaque ; Arya croise un vieil ami.", "duration": "59 min", "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/28000/28511-7x02-stormborn.jpg", "video_url": "https://vidzy.org/embed-7pubvlr39o6y.html" },
          { "id": "s7e3", "title": "3. La Justice de la Reine", "description": "Première rencontre historique entre Jon Snow et Daenerys Targaryen.", "duration": "63 min", "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/28000/28512-7x03-the-queen-s-justice.jpg", "video_url": "https://vidzy.org/embed-t9eyd7kd9c5j.html" },
          { "id": "s7e4", "title": "4. Les Butins de guerre", "description": "Daenerys utilise Drogon contre l'armée de Jaime.", "duration": "50 min", "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/28000/28513-7x04-the-spoils-of-war.jpg", "video_url": "https://vidzy.org/embed-wgbo5ziiryzc.html" },
          { "id": "s7e5", "title": "5. Fort-Orient", "description": "Jon forme une équipe pour capturer un spectre au-delà du Mur.", "duration": "59 min", "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/28000/28514-7x05-eastwatch.jpg", "video_url": "https://vidzy.org/embed-47909xjq5ctt.html" },
          { "id": "s7e6", "title": "6. Au-delà du Mur", "description": "Le groupe affronte l'armée des morts ; la perte d'un dragon.", "duration": "70 min", "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/28000/28515-7x06-beyond-the-wall.jpg", "video_url": "https://vidzy.org/embed-rd0jnm1pgweu.html" },
          { "id": "s7e7", "title": "7. Le Dragon et le Loup", "description": "Rencontre au Fossé aux Dragons ; le Mur tombe devant Viserion.", "duration": "80 min", "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/28000/28516-7x07-le-dragon-et-le-loup.jpg", "video_url": "https://vidzy.org/embed-hajkknka4l7u.html" }
        ]
      },
      {
                "seasonNumber": 8,
                "title": "Saison 8",
                "episodes": [
          { "id": "s8e1", "title": "1. Winterfell", "description": "Daenerys arrive à Winterfell ; Jon apprend qui il est vraiment.", "duration": "54 min", "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/28000/28517-8x01-winterfell.jpg", "video_url": "https://vidzy.org/embed-pjge2plloya4.html" },
          { "id": "s8e2", "title": "2. Un chevalier des Sept Couronnes", "description": "L'attente anxieuse avant l'attaque des Marcheurs Blancs.", "duration": "58 min", "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/28000/28518-8x02-a-knight-of-the-seven-kingdoms.jpg", "video_url": "https://vidzy.org/embed-g8ypo5u8le6i.html" },
          { "id": "s8e3", "title": "3. La Longue Nuit", "description": "La bataille finale contre le Roi de la Nuit à Winterfell.", "duration": "82 min", "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/28000/28519-8x03-the-long-night.jpg", "video_url": "https://vidzy.org/embed-ywapyqqiewre.html" },
          { "id": "s8e4", "title": "4. Les Derniers des Stark", "description": "Deuils et célébrations ; Daenerys se prépare pour Port-Réal.", "duration": "78 min", "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/29000/29872-8x04-episode-4.jpg", "video_url": "https://vidzy.org/embed-ufqsctl2wyzt.html" },
          { "id": "s8e5", "title": "5. Les Cloches", "description": "Daenerys déchaîne le feu sur Port-Réal malgré la reddition.", "duration": "78 min", "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/29000/29873-8x05-episode-5.jpg", "video_url": "https://vidzy.org/embed-ilty3otugpfi.html" },
          { "id": "s8e6", "title": "6. Le Trône de Fer", "description": "Le dénouement final et le choix du nouveau souverain.", "duration": "80 min", "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/29000/29874-8x06-episode-6.jpg", "video_url": "https://vidzy.org/embed-qno5umhg0wct.html" }
        ]
      }
    ]
  },
  {
    "id": "s9",
    "title": "live action One piece",
    "description": "Dans cette adaptation en prise de vues réelles du manga culte, le jeune pirate au chapeau de paille Monkey D. Luffy emmène son équipage improbable dans une épique chasse au trésor.",
    "category": "Série",
    "genre": ["Action", "Aventure", "Fantasy", "Comédie", "Drame", "Piraterie"],
    "thumbnail": "https://cdn.oneesports.gg/cdn-data/2023/01/Anime_OnePiece_LiveAction_Poster_FullCast_Netflix.jpg",
    "backdrop": "https://cdn.oneesports.gg/cdn-data/2023/01/Anime_OnePiece_LiveAction_Poster_FullCast_Netflix.jpg",
    "video_url": "",
    "trailer_url": "https://youtu.be/peumO_fzbXM",
    "year": 2023,
    "duration": "1 Saison",
    "rating": "4.1",
    "maturityRating": "14+",
    "featured": true,
    "seasons": [
      {
        "seasonNumber": 1,
        "title": "Saison 1",
        "episodes": [
          {
            "id": "s2e1",
            "title": "1. S1.E1 ∙ Romance Dawn",
            "description": "Luffy entreprend un voyage pour atteindre le plus grand trésor : le one piece. Après l'exécution publique de l'ancien roi des pirates il y a 22 ans, le monde est entré dans une grande ère de piraterie, et Luffy veut être au sommet.",
            "duration": "64m",
            "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/43000/43626-1x01-a-l-aube-d-une-grande-aventure.jpg",
            "video_url": "https://vidzy.org/embed-25fks4k91ai2.html"
          },
          {
            "id": "s2e2",
            "title": "2. S1.E2 ∙ The Man in the Straw Hat",
            "description": "Luffy, Zoro et Nami se retrouvent emprisonnés sur une île envahie par le clown pirate dérangé Buggy. Koby s'engage dans les Marines et fait ses preuves.",
            "duration": "55m",
            "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/48000/48723-1x02-l-homme-au-chapeau-de-paille.jpg",
            "video_url": "https://vidzy.org/embed-520twpiz5ojd.html"
          },
          {
            "id": "s2e3",
            "title": "3. S1.E3 ∙ Tell No Tales",
            "description": "Luffy, Zoro et Nami atterrissent au village de Syrup, où ils rencontrent Usopp, un habitant qui leur présente Kaya, une héritière de chantier naval malade, sous la tutelle d'un trio d'employés de maison autoritaires.",
            "duration": "58m",
            "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/48000/48729-1x03-pas-d-histoires.jpg",
            "video_url": "https://vidzy.org/embed-40jnxq4qfpbr.html"
          },
          {
            "id": "s2e4",
            "title": "4. S1.E4 ∙ The Pirates Are Coming",
            "description": "Luffy, Zoro et Nami se frayent un chemin à travers le manoir de Kaya, devenu une prison. Usopp fait appel à Koby, Helmeppo et aux Marines. Luffy obtient enfin le navire de ses rêves alors que Garp se rapproche.",
            "duration": "62m",
            "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/48000/48727-1x04-pirates-droit-devant.jpg",
            "video_url": "https://vidzy.org/embed-ruuima36iks6.html"
          },
          {
            "id": "s2e5",
            "title": "5. S1.E5 ∙ Eat at Baratie!",
            "description": "Luffy et sa bande sont mis à l'épreuve dans leur capacité à se battre ensemble en haute mer. Ils arrivent à Baratie, un restaurant flottant, où ils rencontrent Sanji, un jeune chef cuisinier passionné par la gastronomie.",
            "duration": "51m",
            "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/48000/48727-1x04-pirates-droit-devant.jpg",
            "video_url": "https://vidzy.org/embed-ww5ohzyzba6g.html"
          },
          {
            "id": "s2e6",
            "title": "6. S1.E6 ∙ The Chef and the Chore Boy",
            "description": "Le groupe est pris en embuscade par une menace que personne ne voit venir. Après une bataille acharnée au Baratie, Sanji poursuit enfin ses rêves tandis qu'un autre membre de l'équipage montre son vrai visage.",
            "duration": "54m",
            "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/48000/48725-1x06-le-chef-et-le-plongeur.jpg",
            "video_url": "https://vidzy.org/embed-43s732d86syy.html"
          },
          {
            "id": "s2e7",
            "title": "7. S1.E7 ∙ The Girl with the Sawfish Tattoo",
            "description": "L'équipage vient en aide à un membre qui a besoin d'une famille.",
            "duration": "58m",
            "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/48000/48726-1x07-la-fille-au-tatouage-de-poisson-scie.jpg",
            "video_url": "https://vidzy.org/embed-ts1w4guyoeei.html"
          },
          {
            "id": "s2e8",
            "title": "8. S1.E8 ∙ Worst in the East",
            "description": "Un nouvel équipage de pirates est né.",
            "duration": "49m",
            "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/48000/48724-1x08-le-plus-grand-bandit-d-east-blue.jpg",
            "video_url": "https://vidzy.org/embed-61l4h2n1xukc.html"
          }
        ]
      },
      {
        "seasonNumber": 2,
        "title": "Saison 2",
        "episodes": [
          {
            "id": "s9s2e1",
            "title": "1. ...",
            "description": "...",
            "duration": "...",
            "thumbnail": "...",
            "video_url": "..."
          },
          {
            "id": "s9s2e2",
            "title": "2. ...",
            "description": "...",
            "duration": "...",
            "thumbnail": "...",
            "video_url": "..."
          },
          {
            "id": "s9s2e3",
            "title": "3. ...",
            "description": "...",
            "duration": "...",
            "thumbnail": "...",
            "video_url": "..."
          },
          {
            "id": "s9s2e4",
            "title": "4. ...",
            "description": "...",
            "duration": "...",
            "thumbnail": "...",
            "video_url": "..."
          },
          {
            "id": "s9s2e5",
            "title": "5. ...",
            "description": "...",
            "duration": "...",
            "thumbnail": "...",
            "video_url": "..."
          },
          {
            "id": "s9s2e6",
            "title": "6. ...",
            "description": "...",
            "duration": "...",
            "thumbnail": "...",
            "video_url": "..."
          },
          {
            "id": "s9s2e7",
            "title": "7. ...",
            "description": "...",
            "duration": "...",
            "thumbnail": "...",
            "video_url": "..."
          },
          {
            "id": "s9s2e8",
            "title": "8. ...",
            "description": "...",
            "duration": "...",
            "thumbnail": "...",
            "video_url": "..."
          }
        ]
      }
    ]
  },
  {
    "id": "s10",
    "title": "Hazbin Hotel",
    "description": "Alors qu'elle tente de trouver une alternative pacifique pour réduire la surpopulation de l'Enfer, la fille de Lucifer ouvre un centre de réinsertion qui offre une chance de rédemption à un groupe de démons marginaux.",
    "category": "Série",
    "genre": ["Animation pour adultes", "Comédie musicale", "Fantasy urbaine", "Comédie noire", "Drame"],
    "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-3yEZ203OGNBymPBcMhnGgj3CvCy-14nhoA&s",
    "backdrop": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-3yEZ203OGNBymPBcMhnGgj3CvCy-14nhoA&s",
    "video_url": "",
    "trailer_url": "https://youtu.be/OLSWVCwy88g",
    "year": 2019,
    "duration": "2 Saisons",
    "rating": "3.8",
    "maturityRating": "18+",
    "featured": true,
    "seasons": [
      {
        "seasonNumber": 1,
        "title": "Saison 1",
        "episodes": [
          {
            "id": "s2e1",
            "title": "1. S1.E1 ∙ Overture",
            "description": "Charlie Morningstar, la princesse de l'enfer, présente au public sa conception de la rédemption.",
            "duration": "25m",
            "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/58000/58420-1x01-histoire-de-l-enfer.jpg",
            "video_url": "https://vidzy.org/embed-honfxnr3xa43.html"
          },
          {
            "id": "s2e2",
            "title": "2. S1.E2 ∙ Radio Killed the Video Star",
            "description": "Les Vee - Vox, Velvette et Valentino - règnent sur leur coin de l'enfer, mais le retour d'Alastor dans l'éther pourrait bien faire basculer les choses. Pendant ce temps, un nouveau client de l'hôtel met la patience d'Angel à l'épreuve.",
            "duration": "25m",
            "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/58000/58420-1x01-histoire-de-l-enfer.jpg",
            "video_url": "https://vidzy.org/embed-o4ptla3if8kg.html"
          },
          {
            "id": "s2e3",
            "title": "3. S1.E3 ∙ Scrambled Eggs",
            "description": "Alors que les clients et l'équipe de l'hôtel passent la journée à apprendre ce qu'est la confiance, des informations divulguées lors d'une réunion des grands seigneurs provoquent une dispute irrespectueuse.",
            "duration": "24m",
            "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/58000/58422-1x03-oeufs-brouilles.jpg",
            "video_url": "https://vidzy.org/embed-gkn4yg9amwgp.html"
          },
          {
            "id": "s2e4",
            "title": "4. S1.E4 ∙ Masquerade",
            "description": "Angel s'efforce de jongler entre son travail et son séjour à l'hôtel. Charlie décide qu'il est temps de mettre à profit son statut de princesse auprès du patron d'Angel.",
            "duration": "25m",
            "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/58000/58423-1x04-mascarade.jpg",
            "video_url": "https://vidzy.org/embed-lhx7ygnw22dc.html"
          },
          {
            "id": "s2e5",
            "title": "5. S1.E5 ∙ Dad Beat Dad",
            "description": "Lucifer, le père de Charlie, s'intéresse enfin à sa vie et tente de mettre fin à ses anciennes habitudes de père mauvais payeur.",
            "duration": "25m",
            "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/58000/58424-1x05-lucifer-entre-en-scene.jpg",
            "video_url": "https://vidzy.org/embed-w26a9rovzpic.html"
          },
          {
            "id": "s2e6",
            "title": "6. S1.E6 ∙ Welcome to Heaven",
            "description": "Charlie and Vaggie make their way to Heaven to speak to Adam's manager. Meanwhile, an explosive reunion gives Angel the opportunity to show how far he's come.",
            "duration": "25m",
            "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/58000/58425-1x06-sur-les-chemins-de-la-redemption.jpg",
            "video_url": "https://vidzy.org/embed-bmox6ksb6zpc.html"
          },
          {
            "id": "s2e7",
            "title": "7. S1.E7 ∙ Hello Rosie!",
            "description": "With secrets revealed and the Hotel in the crosshairs, Charlie and Vaggie must do what they can to protect their home from destruction by any means necessary.",
            "duration": "25m",
            "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/58000/58426-1x07-hello-rosie.jpg",
            "video_url": "https://vidzy.org/embed-1wysl15gjhzx.html"
          },
          {
            "id": "s2e8",
            "title": "8. S1.E8 ∙ The Show Must Go On",
            "description": "In the Season One finale, all bets are off as the confrontation between the legions of Heaven and Hell begins.",
            "duration": "25m",
            "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/58000/58427-1x08-le-grand-final.jpg",
            "video_url": "https://vidzy.org/embed-0c7z9ke9a7ra.html"
          }
        ]
      },
      {
        "seasonNumber": 2,
        "title": "Saison 2",
        "episodes": [
          {
            "id": "s10s2e1",
            "title": "1. S2.E1 ∙ Nouveau Pentious",
            "description": "L'hôtel renaît de ses cendres, et Charlie et son équipe tentent de lui redonner sa stabilité d'antan. Cependant, Vox et les Vees sont prêts à tout pour les en empêcher, quitte à franchir les limites, tandis qu'une sombre vérité se dévoile",
            "duration": "25m",
            "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/58000/58428-2x01-pentious-au-paradis.jpg",
            "video_url": "https://vidzy.org/embed-s3dgb83klq9m.html"
          },
          {
            "id": "s10s2e2",
            "title": "2. S2.E2 ∙ Conteur",
            "description": "Alors que le paradis, lieu paisible et charmant, accueille avec soulagement la tristesse de Sir Pentious face à la mort, Sara est contrainte d'agir avant qu'une guerre imminente ne se déclare, tandis que Lute tente de se venger de Charlie pour la mort d'Adam.",
            "duration": "25m",
            "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/58000/58429-2x02-l-histoire-de-pentious.jpg",
            "video_url": "https://vidzy.org/embed-rqhxxyrohsx6.html"
          },
          {
            "id": "s10s2e3",
            "title": "3. S2.E3 ∙ Hazbin Hotel : Derrière les portes closes",
            "description": "Charlie invites Voxtek to do a piece on the Hotel and Pentious' redemption. But she will need hard proof to convince her skeptical guests.",
            "duration": "25m",
            "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/58000/58430-2x03-l-envers-du-decor.jpg",
            "video_url": "https://vidzy.org/embed-ra3vjtdalrfe.html"
          },
          {
            "id": "s10s2e4",
            "title": "4. S2.E4 ∙ C'est un marché",
            "description": "Charlie tente de limiter les dégâts en s'exprimant en direct à la télévision. Pendant ce temps, Alastor atteint le point de rupture.",
            "duration": "25m",
            "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/58000/58431-2x04-marche-conclu.jpg",
            "video_url": "https://vidzy.org/embed-oh66f19fiw9e.html"
          },
          {
            "id": "s10s2e5",
            "title": "5. S2.E5 ∙ Silencieux",
            "description": "Vox organise un rassemblement pour ses partisans de plus en plus nombreux. Pendant ce temps, Charlie se tourne vers le Ciel pour obtenir de l'aide.",
            "duration": "25m",
            "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/58000/58432-2x05-reduite-au-silence.jpg",
            "video_url": "https://vidzy.org/embed-uxka8bed5bjq.html"
          },
          {
            "id": "s10s2e6",
            "title": "6. S2.E6 ∙ Pluie hurlante",
            "description": "Vox entraîne les seigneurs dans une guerre contre le Ciel. La tension est palpable à l'hôtel et Husk retombe dans ses travers.",
            "duration": "25m",
            "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/58000/58433-2x06-pluie-hurlante.jpg",
            "video_url": "https://vidzy.org/embed-3nxbwoef49t1.html"
          },
          {
            "id": "s10s2e7",
            "title": "7. S2.E7 ∙ Arme de distraction massive",
            "description": "Vox dévoile son arme secrète, adressant ainsi à Heaven son dernier",
            "duration": "25m",
            "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/58000/58434-2x07-arme-de-distraction-massive.jpg",
            "video_url": "https://vidzy.org/embed-vq2saul3fjvy.html"
          },
          {
            "id": "s10s2e8",
            "title": "8. S2.E8 ∙ Rappel",
            "description": "Vox (et probablement les Vees) organisent une fête pour que tout le monde puisse le voir conquérir le Paradis – et vous êtes tous invités.",
            "duration": "25m",
            "thumbnail": "https://www.scifi-universe.com/upload/episodes/icones/58000/58435-2x08-rappel.jpg",
            "video_url": "https://vidzy.org/embed-k12wsdk29d40.html"
          }
        ]
      }
    ]
  },
  {
    "id": "s11",
    "title": "The Amazing Digital Circus",
    "description": "Après avoir mis un casque de réalité virtuelle, une humaine se retrouve piégée dans un univers numérique sur le thème du cirque, où elle prend l'avatar d'une bouffonne et rencontre cinq autres personnes qui partagent sa situation, incapables de se souvenir de leurs noms ni des détails de leur passé. La jeune femme reçoit le nouveau nom de « Pomni » par le chef du cirque, une intelligence artificielle nommée Caine, qui a l’apparence d’un dentier, qui contrôle le monde numérique et leur propose des aventures pour les empêcher de devenir fous. Les six luttent désormais pour garder la raison dans le monde numérique, tandis que Pomni cherche une sortie insaisissable.",
    "category": "Série",
    "genre": ["Animation", "Comédie noire", "Horreur psychologique", "Surréalisme", "Science-fiction dystopique"],
    "thumbnail": "https://www.trillmag.com/wp-content/uploads/2024/10/Screenshot-61.png",
    "backdrop": "https://www.trillmag.com/wp-content/uploads/2024/10/Screenshot-61.png",
    "video_url": "",
    "trailer_url": "https://youtu.be/iuaRQ5NQFq8",
    "year": 2023,
    "duration": "1 Saison",
    "rating": "4.1",
    "maturityRating": "10+",
    "featured": true,
    "seasons": [
      {
        "seasonNumber": 1,
        "title": "Saison 1",
        "episodes": [
          {
            "id": "s2e1",
            "title": "1. S1.E1 ∙ Pilot",
            "description": "Piégée dans le Cirque numérique sans issue possible, Pomni fait la rencontre d'autres humains transformés en personnages virtuels - et de Caine, l'excentrique Monsieur Loyal.",
            "duration": "25m",
            "thumbnail": "https://static.wikia.nocookie.net/tadc/images/3/32/HwAPLksQ3w.png/revision/latest/scale-to-width-down/250?cb=20240102042010",
            "video_url": "https://vidzy.org/embed-9kira026wg81.html"
          },
          {
            "id": "s2e2",
            "title": "2. S1.E2 ∙ Candy Carrier Chaos!",
            "description": "La bande est chargée d'arrêter des voleurs de sirop au Royaume du Canyon confit. Pomni aide un hors-la-loi numérique à traverser une crise d'identité.",
            "duration": "25m",
            "thumbnail": "https://static.wikia.nocookie.net/tadc/images/1/14/Candy_Carrier_Chaos.png/revision/latest/scale-to-width-down/250?cb=20240502001932",
            "video_url": "https://vidzy.org/embed-0x4rg17sisd7.html"
          },
          {
            "id": "s2e3",
            "title": "3. S1.E3 ∙ The Mystery Of Mildenhall Manor",
            "description": "Entre folles aventures et séances de thérapie, Kinger et Pomni explorent un manoir hanté par des monstres et des fantômes.",
            "duration": "25m",
            "thumbnail": "https://static.wikia.nocookie.net/tadc/images/2/23/The_Mystery_Of_Mildenhall_Manor.jpg/revision/latest/scale-to-width-down/250?cb=20241003225026",
            "video_url": "https://vidzy.org/embed-ofc7gg6v59c1.html"
          },
          {
            "id": "s2e4",
            "title": "4. S1.E4 ∙ Fast Food Masquerade",
            "description": "L'équipe passe sa journée à travailler chez Spudsy, une chaîne de burgers. Nos amis survivront-ils à ces longues heures de dur labeur ?",
            "duration": "25m",
            "thumbnail": "https://static.wikia.nocookie.net/tadc/images/a/a3/Fast_Food_Masquerade.jpg/revision/latest/scale-to-width-down/250?cb=20241212231841",
            "video_url": "https://vidzy.org/embed-isinuhv6jhzf.html"
          },
          {
            "id": "s2e5",
            "title": "5. S1.E5 ∙ Untitled",
            "description": "The gang go on a Lightning Round of their own suggested adventures such as poaching, stargazing and some good old softball. Pomni and Jax form an unlikely friendship which troubles Ragatha.",
            "duration": "25m",
            "thumbnail": "https://static.wikia.nocookie.net/tadc/images/7/7f/Untitled.jpg/revision/latest/scale-to-width-down/250?cb=20250619211500",
            "video_url": "https://vidzy.org/embed-euqhfp7scfvg.html"
          },
          {
            "id": "s2e6",
            "title": "6. S1.E6 ∙ They All Get Guns",
            "description": "Armed with weapons, a group of characters engage in a deadly game while uncovering Jax's mysterious past, leading to a popularity contest hosted by Caine to crown the most beloved among them.",
            "duration": "35m",
            "thumbnail": "https://static.wikia.nocookie.net/tadc/images/5/53/TheyAllGetGunsThumbnail.png/revision/latest/scale-to-width-down/250?cb=20250814231705",
            "video_url": "https://vidzy.org/embed-z8w2m1rbmta1.html"
          },
          {
            "id": "s2e7",
            "title": "7. S1.E7 ∙ Beach Episode",
            "description": "The Gang decide to have a chill day at the beach, before they meet someone who knows a few things they don't about the circus.",
            "duration": "33m",
            "thumbnail": "https://static.wikia.nocookie.net/tadc/images/0/09/BeachEpisode.png/revision/latest/scale-to-width-down/250?cb=20251211201337",
            "video_url": "https://vidzy.org/embed-sy03ods9rvhl.html"
          },
          {
            "id": "s2e8",
            "title": "8. S1.E8 ∙ Fun",
            "description": "...",
            "duration": "...",
            "thumbnail": "...",
            "video_url": "..."
          },
          {
            "id": "s2e9",
            "title": "9. S1.E9 ∙ Épisode #1.9",
            "description": "...",
            "duration": "...",
            "thumbnail": "...",
            "video_url": "..."
          }
        ]
      }
    ]
  },
  {
    "id": "s12",
    "title": "Exploding Kittens",
    "description": "Un conflit éternel atteint des proportions épiques lorsque Dieu et le Diable sont envoyés sur Terre dans le corps de gros chats domestiques.",
    "category": "Série",
    "genre": ["Animation pour adultes", "Comédie loufoque", "Fantasy humoristique", "Action", "Satire"],
    "thumbnail": "https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABRiGalmD4PP3vwDuSZcTc_-u18J5QDloWtiNr6r43nS8qOCP0z1mbZKSBoHHTjG7LMGUomm5kO5Hftftt-Y8mElk7vS9z6jT9nqP.jpg?r=54e",
    "backdrop": "https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABRiGalmD4PP3vwDuSZcTc_-u18J5QDloWtiNr6r43nS8qOCP0z1mbZKSBoHHTjG7LMGUomm5kO5Hftftt-Y8mElk7vS9z6jT9nqP.jpg?r=54e",
    "video_url": "",
    "trailer_url": "https://youtu.be/T3F0Nt6ssLU",
    "year": 2024,
    "duration": "1 Saison",
    "rating": "3.4",
    "maturityRating": "18+",
    "featured": true,
    "seasons": [
      {
        "seasonNumber": 1,
        "title": "Saison 1",
        "episodes": [
          {
            "id": "s2e1",
            "title": "1. S1.E1 ∙ Pilot",
            "description": "Envoyé sur Terre dans le corps d'un chat, Dieu s'installe chez les Higgins, une famille dysfonctionnelle, et impose sa patte (meurtrière) à leur traditionnelle soirée jeux.",
            "duration": "25m",
            "thumbnail": "https://occ-0-56-55.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABfQpccnYeVMEpidGh3z7g1kErYeXnxAPSFujaOai75zCRT1uNiZfWHassCg0ew8DdX8Ydk8Ic-SIfbn6H4h12XkP_lh5zyf7QGUuotl_IW_QVJj_So6zr9Wp.webp?r=f69",
            "video_url": "https://vidzy.org/embed-z78gzfn8qr1y.html"
          },
          {
            "id": "s2e2",
            "title": "2. S1.E2 ∙ Tartar Recall",
            "description": "Greta part travailler avec Marv. Chadieu et Chatan se font un film : \"Armageddon\". Travis et Abbie suivent Aidan en Denfer… pas en enfer.",
            "duration": "25m",
            "thumbnail": "https://occ-0-56-55.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABSZyTEakXJC3YEbzX6k-5vl4ofycRAZDE3F3QRRytTy5IT4zR80se14snzp8kOpGEPMF2u9eB1gA4rNAskzA4BRG-k4LVcneYvpAIdxYQCXOLrTqEly8m0pT.webp?r=694",
            "video_url": "https://vidzy.org/embed-2c77e91pzp08.html"
          },
          {
            "id": "s2e3",
            "title": "3. S1.E3 ∙ Shane & Chugger's",
            "description": "Pour prouver à Travis qu'ils l'aiment, Abbie et Marv lui organisent une méga fête de demi-anniversaire. Chadieu convoque les chérubins pour leur montrer les beautés de la Terre.",
            "duration": "25m",
            "thumbnail": "https://occ-0-56-55.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABVhF4c1yBcYFdWa-wvIZiRmZUiflIrBCaZ5ESiw6O_kIU5XdMu9UxBdxwMy2WFmIeiBS7l4mNdN7EcLE-H2SIilMQ1mfbDBPc32NT1qFYqxg8WxeB5-vg9YT.webp?r=124",
            "video_url": "https://vidzy.org/embed-jjb5ob89c63w.html"
          },
          {
            "id": "s2e4",
            "title": "4. S1.E4 ∙ Emotions Are Hard",
            "description": "Greta s'inscrit à un concours de conception de fusée sponsorisé par le milliardaire Jefflon Bezmusk. Travis fait une fugue. Les chats s'insinuent dans la tête de Marv.",
            "duration": "25m",
            "thumbnail": "https://occ-0-56-55.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABW-wVHwQHCXnxmVjoMrQJgdF3t5kcuyXjYHCr5QrL0xAuiAC3-16kcz7D4OjZ1deP-zcOU1ypjjbqUX3Qw7AFQIv8edEi3eGRR1dSfkCZuLTXgzHE7SSaf_p.webp?r=b4c",
            "video_url": "https://vidzy.org/embed-ngiduir5vle7.html"
          },
          {
            "id": "s2e5",
            "title": "5. S1.E5 ∙ No Regrets",
            "description": "Chatan fait de Chadieu son cavalier lors d'un mariage en enfer. Travis remonte dans le temps pour remédier à son plus grand regret… mais changer le passé est lourd de conséquences.",
            "duration": "25m",
            "thumbnail": "https://occ-0-56-55.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABdb-5wdb-EhHTvvwrBo9nGBNY3fNaSw2MHCVHbfVZYU8wynjfSrcIbYP9eI8WGWk0_dat5DSEu3E7fGzFgI74Zdk4WgVp8gNN62bpDy-PtjCIT2CJyrC-iSQ.webp?r=b7f",
            "video_url": "https://vidzy.org/embed-5gaarcylwhfo.html"
          },
          {
            "id": "s2e6",
            "title": "6. S1.E6 ∙ The Town with No Internet",
            "description": "Chatan emmène Abbie et les enfants en road trip infernal jusqu'à Halcyon Springs pour voir sa mère perdue de vue depuis longtemps. Chadieu aide Marv à obtenir une promotion.",
            "duration": "25m",
            "thumbnail": "https://occ-0-56-55.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABT8ziTZzHWUKxB9pVuwgFTcBeep4IM243S9tNhu_9sqMxrvzQqtLF3-NcsNRVIyWWfk2gV8NkG47TFaGEB0gsJXZnq2ZYWfXX0e3p_Lv9Dg-cYcloAnAr86D.webp?r=41c",
            "video_url": "https://vidzy.org/embed-vukto8u0lhkg.html"
          },
          {
            "id": "s2e7",
            "title": "7. S1.E7 ∙ SeaWorld Is Hell",
            "description": "Chatan et Chadieu vont à SeaWorld, Marv traîne Abbie à un afterwork dans un dirigeable d'entreprise, et Greta aide Travis à découvrir l'identité d'un troll.",
            "duration": "25m",
            "thumbnail": "https://occ-0-56-55.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABcO0F6KJQPCLgb38Kpl7FnHKMxAUur7-cfAx1sRHpCbr2dvmf6FjsjnWpAoSEgEQY9_upniq1V0cAuk6x_SsCWmk65RaUIPXxhVG9O6f1Qj1YrgEKqzx1Rxw.webp?r=47d",
            "video_url": "https://vidzy.org/embed-unpr7bnwrcra.html"
          },
          {
            "id": "s2e8",
            "title": "8. S1.E8 ∙ Let the Games Begin",
            "description": "Lors des Jeux Divins, le bien et le mal s'affrontent, les chats voulant régner sur le ciel et l'enfer. Les amis de Travis le trahissent. Marv est dans la mouise au travail.",
            "duration": "25m",
            "thumbnail": "https://occ-0-56-55.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABQQWyiY5OrbR69B2gMswFEREkeuxIFPxQqkGfDB9CuGlw2Or5fvLFGdcOKVMMrwie4GcMRuhadVGGH_Ng0Bzoug9uRy8KpDXNhzGTp-pXECP97OaD7NOympp.webp?r=ec1",
            "video_url": "https://vidzy.org/embed-caexyqojcwh9.html"
          },
          {
            "id": "s2e9",
            "title": "9. S1.E9 ∙ The Westminster Human Show",
            "description": "Le chaos rapproche les membres de la famille Higgins quand Chadieu et Chatan relèvent le dernier défi : pousser les humains à aller à l'encontre de leur nature.",
            "duration": "25m",
            "thumbnail": "https://occ-0-56-55.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABXKd8-_2P3ZfYdqBuXYl-hiDD7YSOkjhQn31iykIIt0RlCprJ5PV7o1geq7WTXVveBEzjZje1hLwOipVECwtT59KIVls6W2O70IAeKSZy3PMTu8yHz_B6xnd.webp?r=899",
            "video_url": "https://vidzy.org/embed-t0ooto562d0x.html"
          }
        ]
      }
    ]
  }	 
];

export const TRENDING_MOVIES: Movie[] = [
    FEATURED_MOVIE,
    FNAF_MOVIE,
    DEMON_SLAYER_MOVIE,
    ...BLOCKBUSTER_COLLECTION.filter(m => m.year >= 2024).slice(0, 10),
    TV_SERIES_COLLECTION[0] // Ajout de Arcane aux tendances
];

export const TOP_RATED_MOVIES: Movie[] = [
    ...BLOCKBUSTER_COLLECTION.filter(m => parseFloat(m.rating) >= 4.7),
    DEMON_SLAYER_MOVIE,
    TV_SERIES_COLLECTION[0]
];

export const ACTION_MOVIES: Movie[] = [
    FEATURED_MOVIE,
    ...BLOCKBUSTER_COLLECTION.filter(m => m.genre.includes('Action')),
    TV_SERIES_COLLECTION[0]
];

export const COMEDY_MOVIES: Movie[] = [
    ...BLOCKBUSTER_COLLECTION.filter(m => m.genre.includes('Comédie') || m.genre.includes('Famille'))
];