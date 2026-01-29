import React, { useState, useEffect, useMemo, useRef } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import MovieRow from './MovieRow';
import MovieGrid from './MovieGrid';
import Modal from './Modal';
import Login from './Login';
import ProfileGate, { Profile } from './ProfileGate';
import { FEATURED_MOVIE, TRENDING_MOVIES, TOP_RATED_MOVIES, ACTION_MOVIES, COMEDY_MOVIES, FNAF_MOVIE, DEMON_SLAYER_MOVIE, BLOCKBUSTER_COLLECTION, TV_SERIES_COLLECTION } from '../constants';
import { Movie } from '../types';
import { ChevronRight, Search, X, Shuffle, CheckCircle, AlertCircle, Filter } from 'lucide-react';

interface Collection {
    id: string;
    title: string;
    description: string;
    image: string;
    movies: Movie[];
}

// Toast System
interface Toast {
    id: number;
    message: string;
    type: 'success' | 'error' | 'info';
}

const NetStreamApp: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const [user, setUser] = useState<any>(() => {
    try {
      const sessionUser = sessionStorage.getItem('netstream_active_session');
      return sessionUser ? JSON.parse(sessionUser) : null;
    } catch (e) {
      return null;
    }
  });

  const [profiles, setProfiles] = useState<Profile[]>([]);
  useEffect(() => {
    if (user && user.profiles) setProfiles(user.profiles);
    else setProfiles([]);
  }, [user]);

  const [currentProfile, setCurrentProfile] = useState<Profile | null>(null);
  const [myList, setMyList] = useState<string[]>([]);
  const [likedMovies, setLikedMovies] = useState<string[]>([]);
  
  // Watch History State (ID -> Progress %)
  const [watchHistory, setWatchHistory] = useState<Record<string, number>>({});

  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [currentView, setCurrentView] = useState('home'); 
  const [searchQuery, setSearchQuery] = useState('');
  const [collectionSearchQuery, setCollectionSearchQuery] = useState('');
  const [selectedSeriesGenres, setSelectedSeriesGenres] = useState<string[]>([]);
  const [activeCollection, setActiveCollection] = useState<Collection | null>(null);
  
  // Sorting State
  const [sortBy, setSortBy] = useState<'relevance' | 'year_desc' | 'year_asc' | 'title'>('relevance');

  // Toasts State
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = (message: string, type: 'success' | 'error' | 'info' = 'info') => {
      const id = Date.now();
      setToasts(prev => [...prev, { id, message, type }]);
      setTimeout(() => setToasts(prev => prev.filter(t => t.id !== id)), 3000);
  };

  useEffect(() => {
    if (currentProfile) {
        const savedList = localStorage.getItem(`netstream_list_${currentProfile.id}`);
        setMyList(savedList ? JSON.parse(savedList) : []);
        const savedLikes = localStorage.getItem(`netstream_likes_${currentProfile.id}`);
        setLikedMovies(savedLikes ? JSON.parse(savedLikes) : []);
        const savedHistory = localStorage.getItem(`netstream_history_${currentProfile.id}`);
        setWatchHistory(savedHistory ? JSON.parse(savedHistory) : {});
        setCurrentView('home');
        if (containerRef.current) containerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [currentProfile]);

  useEffect(() => {
      if (currentProfile) {
          localStorage.setItem(`netstream_list_${currentProfile.id}`, JSON.stringify(myList));
          localStorage.setItem(`netstream_history_${currentProfile.id}`, JSON.stringify(watchHistory));
      }
  }, [myList, watchHistory, currentProfile]);

  useEffect(() => {
      if (currentProfile) {
          localStorage.setItem(`netstream_likes_${currentProfile.id}`, JSON.stringify(likedMovies));
      }
  }, [likedMovies, currentProfile]);

  const allMovies = useMemo(() => {
    const map = new Map();
    const add = (m: Movie) => map.set(m.id, m);
    add(FEATURED_MOVIE); add(FNAF_MOVIE); add(DEMON_SLAYER_MOVIE);
    BLOCKBUSTER_COLLECTION.forEach(add); TV_SERIES_COLLECTION.forEach(add);
    TRENDING_MOVIES.forEach(add); TOP_RATED_MOVIES.forEach(add);
    ACTION_MOVIES.forEach(add); COMEDY_MOVIES.forEach(add);
    return Array.from(map.values());
  }, []);

  const recommendedMovies = useMemo(() => {
      if (!currentProfile) return [];
      // Recommendation logic: prioritize genres in liked movies and history
      const likedGenres = new Set<string>();
      likedMovies.forEach(id => {
          const m = allMovies.find(mov => mov.id === id);
          if (m) m.genre.forEach(g => likedGenres.add(g));
      });
      // Fallback random shuffle weighted by genre match
      const scored = allMovies.map(m => {
          let score = Math.random();
          if (m.genre.some(g => likedGenres.has(g))) score += 2;
          return { m, score };
      });
      return scored.sort((a,b) => b.score - a.score).map(x => x.m).slice(0, 15);
  }, [allMovies, currentProfile, likedMovies]);

  // Continue Watching List (Movies with progress > 0 and < 95)
  const continueWatchingMovies = useMemo(() => {
      return allMovies.filter(m => {
          const prog = watchHistory[m.id];
          return prog && prog > 5 && prog < 95;
      });
  }, [allMovies, watchHistory]);

  const availableSeriesGenres = useMemo(() => {
      const series = allMovies.filter(m => m.category === 'Série' || m.genre.includes('Drame') || m.seasons);
      const genres = new Set<string>();
      series.forEach(s => s.genre.forEach(g => genres.add(g)));
      return Array.from(genres).sort();
  }, [allMovies]);

  const animationMovies = useMemo(() => allMovies.filter(m => (m.genre.includes('Animation') || m.genre.includes('Famille'))), [allMovies]);
  
  const collections: Collection[] = useMemo(() => [
      { id: 'animation', title: 'Animation & Famille', description: 'Pour les petits et les grands enfants.', image: animationMovies[0]?.backdrop || '', movies: animationMovies },
      { id: 'marvel', title: 'Univers Marvel', description: 'Retrouvez les Avengers et tous les héros.', image: "https://images.squarespace-cdn.com/content/v1/57b29c442994cab73855c706/1525540051597-L50PIH7AF3HERAO7CDWT/Infinity+War.png?format=1000w", movies: allMovies.filter(m => m.title.includes('Avengers') || m.title.includes('Iron Man') || m.title.includes('Thor') || m.title.includes('Captain') || m.title.includes('Spider')) },
      { id: 'starwars', title: 'Saga Star Wars', description: 'Que la Force soit avec vous.', image: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/cfb349dd-303c-464c-a6ee-b52051ca209f/compose?aspectRatio=1.78&format=webp&width=1200", movies: allMovies.filter(m => m.title.includes('Star Wars')) },
      { id: 'fast', title: 'Fast & Furious', description: 'Vitesse et famille.', image: "https://i.ytimg.com/vi/RgQPp3LFWUY/maxresdefault.jpg", movies: allMovies.filter(m => m.title.includes('Fast')) }
  ], [animationMovies, allMovies]); 

  const handleLogin = (userData: any) => {
    setUser(userData);
    sessionStorage.setItem('netstream_active_session', JSON.stringify(userData));
    addToast(`Bienvenue, ${userData.name} !`, 'success');
  };

  const handleLogout = () => {
    setUser(null); setCurrentProfile(null); setCurrentView('home');
    sessionStorage.removeItem('netstream_active_session');
    addToast('Déconnexion réussie.', 'info');
  };

  const handleUserUpdate = (updatedUser: any) => {
      setUser(updatedUser);
      sessionStorage.setItem('netstream_active_session', JSON.stringify(updatedUser));
      const accounts = JSON.parse(localStorage.getItem('netstream_accounts') || '[]');
      const updatedAccounts = accounts.map((acc: any) => acc.email === updatedUser.email ? updatedUser : acc);
      localStorage.setItem('netstream_accounts', JSON.stringify(updatedAccounts));
      addToast('Profil mis à jour.', 'success');
  };

  const handleProfileSelect = (profile: Profile) => {
    setCurrentProfile(profile);
    addToast(`Profil : ${profile.name}`, 'info');
  };

  const handleExitProfile = () => setCurrentProfile(null);

  const handleOpenModal = (movie: Movie) => {
    setSelectedMovie(movie);
    // document.body.style.overflow = 'hidden'; // Don't block whole body in windowed mode
    // Simulate watching progress start
    if (!watchHistory[movie.id]) {
        setWatchHistory(prev => ({ ...prev, [movie.id]: 1 }));
    }
  };

  const handleCloseModal = () => {
    // Simulate progress update on close (randomized for demo)
    if (selectedMovie) {
        setWatchHistory(prev => ({ 
            ...prev, 
            [selectedMovie.id]: Math.min((prev[selectedMovie.id] || 0) + Math.floor(Math.random() * 20), 100) 
        }));
    }
    setSelectedMovie(null);
    // document.body.style.overflow = 'auto'; 
  };

  const toggleMyList = (movie: Movie) => {
    setMyList(prev => {
      if (prev.includes(movie.id)) {
        addToast('Retiré de ma liste', 'info');
        return prev.filter(id => id !== movie.id);
      } else {
        addToast('Ajouté à ma liste', 'success');
        return [...prev, movie.id];
      }
    });
  };

  const toggleLike = (movie: Movie) => {
    setLikedMovies(prev => {
        if (prev.includes(movie.id)) {
            return prev.filter(id => id !== movie.id);
        } else {
            addToast('Titre liké !', 'success');
            return [...prev, movie.id];
        }
    });
  };

  const handleCollectionClick = (collection: Collection) => {
      setActiveCollection(collection);
      setCurrentView('collection-detail');
      if (containerRef.current) containerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleSeriesGenre = (genre: string) => {
      setSelectedSeriesGenres(prev => prev.includes(genre) ? prev.filter(g => g !== genre) : [...prev, genre]);
  };

  const handleShuffle = () => {
      const random = allMovies[Math.floor(Math.random() * allMovies.length)];
      handleOpenModal(random);
      addToast('Sélection aléatoire !', 'success');
  };

  const filterForProfile = (moviesToFilter: Movie[]) => {
      if (currentProfile?.isKid) {
          return moviesToFilter.filter(m => m.maturityRating !== '16+' && m.maturityRating !== '18+');
      }
      return moviesToFilter;
  };

  const getFilteredContent = () => {
    let content: Movie[] = [];
    switch (currentView) {
      case 'series':
        content = allMovies.filter(m => m.category === 'Série' || m.genre.includes('Drame') && m.seasons);
        if (selectedSeriesGenres.length > 0) content = content.filter(m => m.genre.some(g => selectedSeriesGenres.includes(g)));
        break;
      case 'movies': content = allMovies.filter(m => m.category === 'Film' || m.category === 'Anime'); break;
      case 'new': content = allMovies.filter(m => m.year >= 2024); break;
      case 'list': content = allMovies.filter(m => myList.includes(m.id)); break;
      case 'search':
        content = allMovies.filter(m => m.title.toLowerCase().includes(searchQuery.toLowerCase()) || m.genre.some(g => g.toLowerCase().includes(searchQuery.toLowerCase())));
        break;
      case 'collection-detail': content = activeCollection ? activeCollection.movies : []; break;
      default: content = [];
    }
    
    // Apply Sorting
    if (sortBy === 'year_desc') content.sort((a, b) => b.year - a.year);
    else if (sortBy === 'year_asc') content.sort((a, b) => a.year - b.year);
    else if (sortBy === 'title') content.sort((a, b) => a.title.localeCompare(b.title));
    
    return filterForProfile(content);
  };

  const filteredMovies = getFilteredContent();
  
  const filteredCollections = collections.filter(c => {
      if (currentProfile?.isKid && !(c.id === 'animation')) return false;
      if (!collectionSearchQuery) return true;
      return c.title.toLowerCase().includes(collectionSearchQuery.toLowerCase());
  });

  // Use a ref to scroll to top when changing views
  useEffect(() => {
      if (containerRef.current) {
          containerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
      }
  }, [currentView]);

  if (!user) return <div className="h-full w-full overflow-y-auto"><Login onLogin={handleLogin} /></div>;
  if (!currentProfile) return <div className="h-full w-full overflow-y-auto"><ProfileGate profiles={profiles} onSelectProfile={handleProfileSelect} user={user} onUpdateUser={handleUserUpdate} /></div>;

  return (
    <div ref={containerRef} className="relative h-full w-full bg-[#141414] overflow-y-auto custom-scrollbar">
      {/* Toast Container */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[200] flex flex-col gap-2 pointer-events-none">
          {toasts.map(t => (
              <div key={t.id} className={`pointer-events-auto px-6 py-3 rounded shadow-2xl flex items-center gap-3 animate-in slide-in-from-bottom-5 fade-in duration-300 ${t.type === 'success' ? 'bg-green-600 text-white' : t.type === 'error' ? 'bg-red-600 text-white' : 'bg-white text-black'}`}>
                  {t.type === 'success' ? <CheckCircle className="w-5 h-5"/> : <AlertCircle className="w-5 h-5"/>}
                  <span className="font-bold text-sm">{t.message}</span>
              </div>
          ))}
      </div>

      <Navbar containerRef={containerRef} user={user} currentProfile={currentProfile} profiles={profiles} onSwitchProfile={handleProfileSelect} onExitProfile={handleExitProfile} currentView={currentView} setView={(view) => { setCurrentView(view); if (view !== 'collection-detail') setActiveCollection(null); setCollectionSearchQuery(''); setSelectedSeriesGenres([]); }} searchQuery={searchQuery} setSearchQuery={setSearchQuery} myListCount={myList.length} onLogout={handleLogout} />
      
      <main className="relative pb-24">
        {currentView === 'home' && (
          <>
            <Hero movie={FEATURED_MOVIE} onOpenModal={handleOpenModal} />
            <section className="md:space-y-12 pl-4 lg:pl-16 mt-4 lg:mt-0 relative z-10 -mt-20 md:-mt-32">
              {/* Continue Watching Row */}
              {continueWatchingMovies.length > 0 && (
                  <MovieRow title="Reprendre la lecture" movies={continueWatchingMovies} onOpenModal={handleOpenModal} />
              )}

              {!currentProfile.isKid && <MovieRow title="Les Incontournables & Exclusivités" movies={filterForProfile(BLOCKBUSTER_COLLECTION.slice(0, 10))} onOpenModal={handleOpenModal} />}
              <MovieRow title="Recommandé pour vous" movies={filterForProfile(recommendedMovies)} onOpenModal={handleOpenModal} />
              <MovieRow title="Séries du moment" movies={filterForProfile(TV_SERIES_COLLECTION)} onOpenModal={handleOpenModal} />
              <MovieRow title="Animation & Famille" movies={animationMovies} onOpenModal={handleOpenModal} />
            </section>
          </>
        )}

        {/* Global Toolbar for Grid Views */}
        {['movies', 'series', 'list', 'new', 'search'].includes(currentView) && (
            <div className="px-4 md:px-12 pt-24 pb-4 flex flex-wrap gap-4 items-center justify-between">
                <div className="flex items-center gap-2">
                    <button onClick={handleShuffle} className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition text-sm font-bold">
                        <Shuffle className="w-4 h-4" /> Surprends-moi
                    </button>
                </div>
                <div className="flex items-center gap-2">
                    <Filter className="w-4 h-4 text-gray-400" />
                    <select value={sortBy} onChange={(e) => setSortBy(e.target.value as any)} className="bg-black border border-gray-700 text-white text-sm py-1 px-3 rounded focus:outline-none focus:border-gray-500">
                        <option value="relevance">Pertinence</option>
                        <option value="year_desc">Année (Récent)</option>
                        <option value="year_asc">Année (Ancien)</option>
                        <option value="title">Titre (A-Z)</option>
                    </select>
                </div>
            </div>
        )}

        {/* Views Rendering */}
        {currentView === 'collections' && (
            <div className="px-4 md:px-12 py-8 mt-16 animate-in fade-in duration-500">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Sagas & Collections</h2>
                <div className="mb-8 relative max-w-md">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input type="text" placeholder="Rechercher une collection..." value={collectionSearchQuery} onChange={(e) => setCollectionSearchQuery(e.target.value)} className="w-full bg-[#333] text-white pl-10 pr-4 py-3 rounded focus:outline-none focus:bg-[#444] transition-colors" />
                    {collectionSearchQuery && <X className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 cursor-pointer hover:text-white" onClick={() => setCollectionSearchQuery('')} />}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredCollections.map((collection) => (
                        <div key={collection.id} onClick={() => handleCollectionClick(collection)} className="group relative h-48 md:h-64 rounded-lg overflow-hidden cursor-pointer border-2 border-transparent hover:border-white transition-all duration-300 transform hover:scale-[1.02]">
                            <img src={collection.image} alt={collection.title} className="w-full h-full object-cover group-hover:opacity-80 transition duration-300" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-6 w-full">
                                <h3 className="text-2xl font-bold text-white mb-1 drop-shadow-md">{collection.title}</h3>
                                <p className="text-gray-300 text-sm line-clamp-2">{collection.description}</p>
                                <div className="mt-4 flex items-center text-white font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0 duration-300">Voir la collection <ChevronRight className="w-4 h-4 ml-1" /></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )}

        {currentView === 'collection-detail' && activeCollection && (
            <>
               <div className="relative h-[40vh] w-full object-cover mb-8">
                  <div className="absolute top-0 left-0 w-full h-full"><img src={activeCollection.image} alt={activeCollection.title} className="w-full h-full object-cover"/><div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/50 to-transparent"></div><div className="absolute inset-0 bg-black/30"></div></div>
                  <div className="absolute bottom-8 left-4 md:left-12 max-w-2xl"><h1 className="text-4xl md:text-6xl font-bold text-white mb-2">{activeCollection.title}</h1><p className="text-gray-200 text-lg md:text-xl font-medium">{activeCollection.description}</p></div>
               </div>
               <MovieGrid title={`Tous les titres`} movies={filterForProfile(activeCollection.movies)} onOpenModal={handleOpenModal} />
            </>
        )}

        {currentView === 'series' && (
          <div className="px-4 md:px-12 py-8 mt-4 animate-in fade-in duration-500">
              <div className="flex flex-wrap gap-2 mb-8">
                  {availableSeriesGenres.map(genre => (
                      <button key={genre} onClick={() => toggleSeriesGenre(genre)} className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors ${selectedSeriesGenres.includes(genre) ? 'bg-white text-black border-white' : 'bg-transparent text-gray-300 border-gray-600 hover:border-white hover:text-white'}`}>{genre}</button>
                  ))}
                  {selectedSeriesGenres.length > 0 && <button onClick={() => setSelectedSeriesGenres([])} className="px-4 py-1.5 text-sm text-gray-400 hover:text-white underline">Effacer filtres</button>}
              </div>
              <MovieGrid title="Séries TV" movies={filteredMovies} onOpenModal={handleOpenModal} emptyMessage="Aucune série trouvée." />
          </div>
        )}

        {currentView === 'movies' && <MovieGrid title="Films" movies={filteredMovies} onOpenModal={handleOpenModal} emptyMessage="Aucun film trouvé." />}
        {currentView === 'new' && <MovieGrid title="Nouveautés 2024-2025" movies={filteredMovies} onOpenModal={handleOpenModal} />}
        {currentView === 'list' && <MovieGrid title={currentProfile.isKid ? "Ma liste de favoris" : "Ma Liste"} movies={filteredMovies} onOpenModal={handleOpenModal} emptyMessage="Votre liste est vide." />}
        {currentView === 'search' && <MovieGrid title={`Résultats pour "${searchQuery}"`} movies={filteredMovies} onOpenModal={handleOpenModal} />}
      </main>

      {selectedMovie && (
        <Modal 
          movie={selectedMovie} 
          onClose={handleCloseModal} 
          isInList={myList.includes(selectedMovie.id)} 
          onToggleList={toggleMyList} 
          isLiked={likedMovies.includes(selectedMovie.id)} 
          onToggleLike={toggleLike}
          allMovies={allMovies}
        />
      )}
      
      <footer className="w-full bg-[#141414] py-8 px-8 text-gray-500 text-sm flex flex-col items-center justify-center border-t border-gray-800 mt-auto">
        <div className="max-w-4xl w-full grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 text-center md:text-left">
             <a href="#" className="hover:underline">Audio et sous-titres</a><a href="#" className="hover:underline">Presse</a><a href="#" className="hover:underline">Confidentialité</a><a href="#" className="hover:underline">Nous contacter</a>
             <a href="#" className="hover:underline">Paramètres des cookies</a><a href="#" className="hover:underline">Mentions légales</a>
        </div>
        <p>&copy; 2025 NetStream France. Clone réalisé par IA.</p>
      </footer>
    </div>
  );
}

export default NetStreamApp;