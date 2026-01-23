import React, { useState, useEffect, useMemo } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MovieRow from './components/MovieRow';
import MovieGrid from './components/MovieGrid';
import Modal from './components/Modal';
import Login from './components/Login';
import ProfileGate, { Profile } from './components/ProfileGate';
import { FEATURED_MOVIE, TRENDING_MOVIES, TOP_RATED_MOVIES, ACTION_MOVIES, COMEDY_MOVIES, FNAF_MOVIE, DEMON_SLAYER_MOVIE, BLOCKBUSTER_COLLECTION, TV_SERIES_COLLECTION } from './constants';
import { Movie } from './types';
import { ChevronRight } from 'lucide-react';

// Interface pour les Collections
interface Collection {
    id: string;
    title: string;
    description: string;
    image: string;
    movies: Movie[];
}

function App() {
  // --- State Initialization ---
  
  // Load User from Session Storage (Active Session)
  const [user, setUser] = useState<any>(() => {
    try {
      const sessionUser = sessionStorage.getItem('netstream_active_session');
      return sessionUser ? JSON.parse(sessionUser) : null;
    } catch (e) {
      return null;
    }
  });

  // Profiles are derived from the User object now
  const [profiles, setProfiles] = useState<Profile[]>([]);

  // Update profiles whenever user changes
  useEffect(() => {
    if (user && user.profiles) {
      setProfiles(user.profiles);
    } else {
      setProfiles([]);
    }
  }, [user]);

  // Current Active Profile
  const [currentProfile, setCurrentProfile] = useState<Profile | null>(null);

  // States dynamiques par profil
  const [myList, setMyList] = useState<string[]>([]);
  const [likedMovies, setLikedMovies] = useState<string[]>([]);

  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [currentView, setCurrentView] = useState('home'); 
  const [searchQuery, setSearchQuery] = useState('');
  
  // State for selected Collection
  const [activeCollection, setActiveCollection] = useState<Collection | null>(null);

  // --- Persistence Effects ---

  // Chargement des données spécifiques au profil quand le profil change
  useEffect(() => {
    if (currentProfile) {
        // Charger la liste du profil
        const savedList = localStorage.getItem(`netstream_list_${currentProfile.id}`);
        setMyList(savedList ? JSON.parse(savedList) : []);

        // Charger les likes du profil
        const savedLikes = localStorage.getItem(`netstream_likes_${currentProfile.id}`);
        setLikedMovies(savedLikes ? JSON.parse(savedLikes) : []);
        
        // Reset View
        setCurrentView('home');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [currentProfile]);

  // Sauvegarde automatique des changements de liste pour le profil actif
  useEffect(() => {
      if (currentProfile) {
          localStorage.setItem(`netstream_list_${currentProfile.id}`, JSON.stringify(myList));
      }
  }, [myList, currentProfile]);

  // Sauvegarde automatique des changements de likes pour le profil actif
  useEffect(() => {
      if (currentProfile) {
          localStorage.setItem(`netstream_likes_${currentProfile.id}`, JSON.stringify(likedMovies));
      }
  }, [likedMovies, currentProfile]);


  // Combine all movies into a single pool for filtering
  const allMovies = useMemo(() => {
    const map = new Map();
    const add = (m: Movie) => map.set(m.id, m);
    
    add(FEATURED_MOVIE);
    add(FNAF_MOVIE);
    add(DEMON_SLAYER_MOVIE);
    BLOCKBUSTER_COLLECTION.forEach(add);
    TV_SERIES_COLLECTION.forEach(add); // Integration des séries
    TRENDING_MOVIES.forEach(add);
    TOP_RATED_MOVIES.forEach(add);
    ACTION_MOVIES.forEach(add);
    COMEDY_MOVIES.forEach(add);
    
    return Array.from(map.values());
  }, []);

  // --- Collection Filters ---

  const fastSagaMovies = useMemo(() => {
    return allMovies.filter(m => 
      m.title.toLowerCase().includes('fast') || 
      m.title.toLowerCase().includes('furious') || 
      m.title.toLowerCase().includes('hobbs') ||
      m.title.toLowerCase().includes('tokyo')
    ).sort((a, b) => b.year - a.year);
  }, [allMovies]);

  const starWarsMovies = useMemo(() => {
    return allMovies.filter(m => 
      m.title.toLowerCase().includes('star wars') || 
      m.title.toLowerCase().includes('empire') || 
      m.title.toLowerCase().includes('jedi') ||
      m.title.toLowerCase().includes('étoiles')
    ).sort((a, b) => a.year - b.year);
  }, [allMovies]);

  const marvelMovies = useMemo(() => {
    return allMovies.filter(m => 
      m.title.toLowerCase().includes('avengers') || 
      m.title.toLowerCase().includes('iron man') ||
      m.title.toLowerCase().includes('captain america') ||
      m.title.toLowerCase().includes('thor') ||
      m.title.toLowerCase().includes('spider-man') ||
      m.title.toLowerCase().includes('deadpool') ||
      m.title.toLowerCase().includes('ant-man') ||
      m.title.toLowerCase().includes('venom')
    ).sort((a, b) => b.year - a.year);
  }, [allMovies]);

  const harryPotterMovies = useMemo(() => {
    return allMovies.filter(m => 
      m.title.toLowerCase().includes('harry potter') || 
      m.title.toLowerCase().includes('animaux fantastiques')
    ).sort((a, b) => a.year - b.year);
  }, [allMovies]);

  const jurassicMovies = useMemo(() => {
     return allMovies.filter(m => m.title.toLowerCase().includes('jurassic')).sort((a, b) => a.year - b.year);
  }, [allMovies]);
  
  const missionImpossibleMovies = useMemo(() => {
    return allMovies.filter(m => m.title.toLowerCase().includes('mission')).sort((a, b) => a.year - b.year);
  }, [allMovies]);

  const sciFiClassics = useMemo(() => {
    return allMovies.filter(m => 
      m.title.toLowerCase().includes('matrix') || 
      m.title.toLowerCase().includes('alien') ||
      m.title.toLowerCase().includes('mad max') ||
      m.title.toLowerCase().includes('furiosa')
    );
  }, [allMovies]);

  const animationMovies = useMemo(() => {
    return allMovies.filter(m => 
        (m.genre.includes('Animation') || m.genre.includes('Famille')) &&
        !m.title.toLowerCase().includes('demon slayer') &&
        !m.title.toLowerCase().includes('harry') &&
        !m.title.toLowerCase().includes('star wars')
    );
  }, [allMovies]);

  const horrorMovies = useMemo(() => {
    return allMovies.filter(m => m.genre.includes('Horreur') || m.genre.includes('Thriller'));
  }, [allMovies]);

  // --- Collections Data ---
  const collections: Collection[] = useMemo(() => [
      {
          id: 'marvel',
          title: 'Univers Marvel',
          description: 'Retrouvez les Avengers, Spider-Man et tous les héros du MCU.',
          image: marvelMovies[0]?.backdrop || '',
          movies: marvelMovies
      },
      {
          id: 'starwars',
          title: 'Star Wars Saga',
          description: 'Que la Force soit avec vous. L\'intégrale de la saga Skywalker.',
          image: starWarsMovies.find(m => m.title.includes('Réveil'))?.backdrop || starWarsMovies[0]?.backdrop || '',
          movies: starWarsMovies
      },
      {
          id: 'wizarding',
          title: 'Monde des Sorciers',
          description: 'Poudlard, les Animaux Fantastiques et la magie de J.K. Rowling.',
          image: harryPotterMovies[0]?.backdrop || '',
          movies: harryPotterMovies
      },
      {
          id: 'fast',
          title: 'Fast & Furious',
          description: 'Vitesse, famille et action explosive.',
          image: fastSagaMovies[0]?.backdrop || '',
          movies: fastSagaMovies
      },
      {
          id: 'jurassic',
          title: 'Monde Jurassique',
          description: '65 millions d\'années d\'aventure.',
          image: jurassicMovies[0]?.backdrop || '',
          movies: jurassicMovies
      },
      {
          id: 'mi',
          title: 'Mission: Impossible',
          description: 'Votre mission, si vous l\'acceptez...',
          image: missionImpossibleMovies.find(m => m.title.includes('Fallout'))?.backdrop || '',
          movies: missionImpossibleMovies
      },
      {
          id: 'scifi',
          title: 'Légendes Sci-Fi',
          description: 'Matrix, Alien, Mad Max. Les piliers de la science-fiction.',
          image: sciFiClassics.find(m => m.title.includes('Matrix'))?.backdrop || '',
          movies: sciFiClassics
      },
      {
          id: 'animation',
          title: 'Animation & Famille',
          description: 'Pour les petits et les grands enfants.',
          image: animationMovies[0]?.backdrop || '',
          movies: animationMovies
      },
       {
          id: 'horror',
          title: 'Frissons & Horreur',
          description: 'Ne regardez pas ça tout seul dans le noir.',
          image: horrorMovies[0]?.backdrop || '',
          movies: horrorMovies
      }
  ], [marvelMovies, starWarsMovies, harryPotterMovies, fastSagaMovies, jurassicMovies, missionImpossibleMovies, sciFiClassics, animationMovies, horrorMovies]);


  // Handle incoming user data from Login component
  const handleLogin = (userData: any) => {
    setUser(userData);
    sessionStorage.setItem('netstream_active_session', JSON.stringify(userData));
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentProfile(null);
    setCurrentView('home');
    sessionStorage.removeItem('netstream_active_session');
  };

  const handleProfileSelect = (profile: Profile) => {
    setCurrentProfile(profile);
  };

  // --- Actions ---
  const handleOpenModal = (movie: Movie) => {
    setSelectedMovie(movie);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setSelectedMovie(null);
    document.body.style.overflow = 'auto';
  };

  const toggleMyList = (movie: Movie) => {
    setMyList(prev => {
      if (prev.includes(movie.id)) {
        return prev.filter(id => id !== movie.id);
      } else {
        return [...prev, movie.id];
      }
    });
  };

  const toggleLike = (movie: Movie) => {
    setLikedMovies(prev => {
        if (prev.includes(movie.id)) {
            return prev.filter(id => id !== movie.id);
        } else {
            return [...prev, movie.id];
        }
    });
  };

  const handleCollectionClick = (collection: Collection) => {
      setActiveCollection(collection);
      setCurrentView('collection-detail');
      window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // --- Filtering Logic for Content and Kids Mode ---
  
  // Fonction utilitaire pour filtrer par âge si c'est un enfant
  const filterForProfile = (moviesToFilter: Movie[]) => {
      if (currentProfile?.isKid) {
          // Filtrer les contenus 16+ et 18+ pour les profils enfants
          return moviesToFilter.filter(m => m.maturityRating !== '16+' && m.maturityRating !== '18+');
      }
      return moviesToFilter;
  };

  const getFilteredContent = () => {
    let content: Movie[] = [];

    switch (currentView) {
      case 'series':
        content = allMovies.filter(m => m.category === 'Série' || m.genre.includes('Drame'));
        break;
      case 'movies':
        content = allMovies.filter(m => m.category === 'Film' || m.category === 'Anime');
        break;
      case 'new':
        content = allMovies.filter(m => m.year >= 2024);
        break;
      case 'list':
        content = allMovies.filter(m => myList.includes(m.id));
        break;
      case 'search':
        content = allMovies.filter(m => 
          m.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
          m.genre.some(g => g.toLowerCase().includes(searchQuery.toLowerCase()))
        );
        break;
      case 'collection-detail':
        content = activeCollection ? activeCollection.movies : [];
        break;
      default:
        content = [];
    }

    return filterForProfile(content);
  };

  const filteredMovies = getFilteredContent();

  // 1. Pas connecté -> Login
  if (!user) {
    return <Login onLogin={handleLogin} />;
  }

  // 2. Connecté mais pas de profil choisi -> Profile Gate
  if (!currentProfile) {
    return <ProfileGate profiles={profiles} onSelectProfile={handleProfileSelect} />;
  }

  // 3. Connecté et Profil choisi -> Main App
  return (
    <div className="relative min-h-screen bg-[#141414]">
      <Navbar 
        user={user}
        currentProfile={currentProfile}
        profiles={profiles}
        onSwitchProfile={handleProfileSelect}
        currentView={currentView} 
        setView={(view) => {
            setCurrentView(view);
            if (view !== 'collection-detail') setActiveCollection(null);
        }} 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        myListCount={myList.length}
        onLogout={handleLogout}
      />
      
      <main className="relative pb-24">
        {/* VIEW: HOME */}
        {currentView === 'home' && (
          <>
            <Hero movie={FEATURED_MOVIE} onOpenModal={handleOpenModal} />
            <section className="md:space-y-12 pl-4 lg:pl-16 mt-4 lg:mt-0">
              
              {/* Adaptation de l'accueil pour le mode enfant */}
              {!currentProfile.isKid && (
                 <MovieRow title="Les Incontournables & Exclusivités" movies={filterForProfile(BLOCKBUSTER_COLLECTION.slice(0, 10))} onOpenModal={handleOpenModal} />
              )}
              
              <MovieRow title={currentProfile.isKid ? "Dessins animés et Séries" : "Séries du moment"} movies={filterForProfile(TV_SERIES_COLLECTION)} onOpenModal={handleOpenModal} />

              <MovieRow title="Animation & Famille" movies={animationMovies} onOpenModal={handleOpenModal} />

              {!currentProfile.isKid && (
                  <>
                    <MovieRow title="Univers Cinématographique Marvel" movies={filterForProfile(marvelMovies)} onOpenModal={handleOpenModal} />
                    <MovieRow title="Saga Skywalker" movies={filterForProfile(starWarsMovies)} onOpenModal={handleOpenModal} />
                    <MovieRow title="Monde des Sorciers" movies={filterForProfile(harryPotterMovies)} onOpenModal={handleOpenModal} />
                    <MovieRow title="Monde Jurassique" movies={filterForProfile(jurassicMovies)} onOpenModal={handleOpenModal} />
                    <MovieRow title="Intégrale Fast & Furious" movies={filterForProfile(fastSagaMovies)} onOpenModal={handleOpenModal} />
                    <MovieRow title="Espionnage & Action" movies={filterForProfile(missionImpossibleMovies)} onOpenModal={handleOpenModal} />
                    <MovieRow title="Classiques Science-Fiction" movies={filterForProfile(sciFiClassics)} onOpenModal={handleOpenModal} />
                    <MovieRow title="Frissons & Horreur" movies={filterForProfile(horrorMovies)} onOpenModal={handleOpenModal} />
                  </>
              )}
              
              <MovieRow title="Les mieux notés" movies={filterForProfile(TOP_RATED_MOVIES)} onOpenModal={handleOpenModal} />
            </section>
          </>
        )}

        {/* VIEW: COLLECTIONS LIST */}
        {currentView === 'collections' && (
            <div className="px-4 md:px-12 py-8 mt-16 animate-in fade-in duration-500">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Sagas & Collections</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {collections.filter(c => !currentProfile.isKid || (c.id === 'animation' || c.id === 'starwars')).map((collection) => (
                        <div 
                           key={collection.id}
                           onClick={() => handleCollectionClick(collection)}
                           className="group relative h-48 md:h-64 rounded-lg overflow-hidden cursor-pointer border-2 border-transparent hover:border-white transition-all duration-300 transform hover:scale-[1.02]"
                        >
                            <img 
                                src={collection.image} 
                                alt={collection.title}
                                className="w-full h-full object-cover group-hover:opacity-80 transition duration-300" 
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-6 w-full">
                                <h3 className="text-2xl font-bold text-white mb-1 drop-shadow-md">{collection.title}</h3>
                                <p className="text-gray-300 text-sm line-clamp-2">{collection.description}</p>
                                <div className="mt-4 flex items-center text-white font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0 duration-300">
                                    Voir la collection <ChevronRight className="w-4 h-4 ml-1" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )}

        {/* VIEW: COLLECTION DETAIL */}
        {currentView === 'collection-detail' && activeCollection && (
            <>
               {/* Hero Header for Collection */}
               <div className="relative h-[40vh] w-full object-cover mb-8">
                  <div className="absolute top-0 left-0 w-full h-full">
                    <img 
                      src={activeCollection.image} 
                      alt={activeCollection.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/50 to-transparent"></div>
                    <div className="absolute inset-0 bg-black/30"></div>
                  </div>
                  <div className="absolute bottom-8 left-4 md:left-12 max-w-2xl">
                     <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">{activeCollection.title}</h1>
                     <p className="text-gray-200 text-lg md:text-xl font-medium">{activeCollection.description}</p>
                     <p className="text-gray-400 mt-2">{activeCollection.movies.length} titres</p>
                  </div>
               </div>

               <MovieGrid 
                title={`Tous les titres de : ${activeCollection.title}`} 
                movies={filterForProfile(activeCollection.movies)} 
                onOpenModal={handleOpenModal} 
              />
            </>
        )}

        {/* VIEW: SERIES */}
        {currentView === 'series' && (
          <MovieGrid 
            title="Séries TV" 
            movies={filteredMovies} 
            onOpenModal={handleOpenModal} 
            emptyMessage="Aucune série trouvée pour le moment."
          />
        )}

        {/* VIEW: MOVIES */}
        {currentView === 'movies' && (
          <MovieGrid 
            title="Films" 
            movies={filteredMovies} 
            onOpenModal={handleOpenModal} 
            emptyMessage="Aucun film trouvé."
          />
        )}

        {/* VIEW: NEW */}
        {currentView === 'new' && (
          <MovieGrid 
            title="Nouveautés 2024-2025" 
            movies={filteredMovies} 
            onOpenModal={handleOpenModal} 
          />
        )}

        {/* VIEW: MY LIST */}
        {currentView === 'list' && (
          <MovieGrid 
            title={currentProfile.isKid ? "Ma liste de favoris" : "Ma Liste"} 
            movies={filteredMovies} 
            onOpenModal={handleOpenModal} 
            emptyMessage="Votre liste est vide. Ajoutez des films et séries pour les retrouver ici."
          />
        )}

        {/* VIEW: SEARCH */}
        {currentView === 'search' && (
           <MovieGrid 
            title={`Résultats pour "${searchQuery}"`} 
            movies={filteredMovies} 
            onOpenModal={handleOpenModal} 
          />
        )}
      </main>

      {/* Modal */}
      {selectedMovie && (
        <Modal 
          movie={selectedMovie} 
          onClose={handleCloseModal} 
          isInList={myList.includes(selectedMovie.id)}
          onToggleList={toggleMyList}
          isLiked={likedMovies.includes(selectedMovie.id)}
          onToggleLike={toggleLike}
        />
      )}
      
      {/* Footer (Only show on bottom of pages) */}
      <footer className="w-full bg-[#141414] py-8 px-8 text-gray-500 text-sm flex flex-col items-center justify-center border-t border-gray-800 mt-auto">
        <div className="max-w-4xl w-full grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
             <a href="#" className="hover:underline">Audio et sous-titres</a>
             <a href="#" className="hover:underline">Presse</a>
             <a href="#" className="hover:underline">Confidentialité</a>
             <a href="#" className="hover:underline">Nous contacter</a>
        </div>
        <p>&copy; 2025 NetStream France. Clone réalisé par IA.</p>
      </footer>
    </div>
  );
}

export default App;