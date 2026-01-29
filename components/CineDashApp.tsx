import React, { useState, useEffect, useRef } from 'react';
import { Search, Moon, Film, Tv, Heart, X, Star, Play, Info, ChevronDown, Check, Loader2 } from 'lucide-react';

// Types pour l'API TMDB
interface TMDBMedia {
  id: number;
  title?: string;
  name?: string;
  poster_path: string | null;
  backdrop_path: string | null;
  overview: string;
  vote_average: number;
  release_date?: string;
  first_air_date?: string;
  genre_ids: number[];
}

interface TMDBDetail extends TMDBMedia {
  tagline?: string;
  genres: { id: number; name: string }[];
  budget?: number;
  revenue?: number;
  seasons?: { name: string; season_number: number }[];
}

interface CastMember {
  name: string;
  character: string;
  profile_path: string | null;
}

const API_KEY = '9cd106776dd0362222b09e5dc938a599';
const BASE_URL = 'https://api.themoviedb.org/3';
const IMG_W500 = 'https://image.tmdb.org/t/p/w500';
const IMG_ORIG = 'https://image.tmdb.org/t/p/original';

export const CineDashApp = () => {
  // --- STATE ---
  const [contentType, setContentType] = useState<'movie' | 'tv'>('movie');
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState<TMDBMedia[]>([]);
  const [heroMovie, setHeroMovie] = useState<TMDBMedia | null>(null);
  const [genres, setGenres] = useState<{ id: number; name: string }[]>([]);
  const [activeGenre, setActiveGenre] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [favorites, setFavorites] = useState<TMDBMedia[]>(() => {
    try {
      return JSON.parse(localStorage.getItem('cinedash_favs') || '[]');
    } catch {
      return [];
    }
  });
  
  // Modal State
  const [selectedMedia, setSelectedMedia] = useState<TMDBDetail | null>(null);
  const [cast, setCast] = useState<CastMember[]>([]);
  const [trailerId, setTrailerId] = useState<string | null>(null);
  const [episodes, setEpisodes] = useState<any[]>([]);
  const [showEpisodes, setShowEpisodes] = useState(false);

  // --- EFFECTS ---

  // Initial Load
  useEffect(() => {
    loadGenres();
    loadTrending();
  }, [contentType]);

  // Search Debounce
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchQuery.length > 2) {
        performSearch();
      } else if (searchQuery === '') {
        loadTrending();
      }
    }, 500);
    return () => clearTimeout(delayDebounceFn);
  }, [searchQuery]);

  // --- API CALLS ---

  const loadGenres = async () => {
    try {
      const res = await fetch(`${BASE_URL}/genre/${contentType}/list?api_key=${API_KEY}&language=fr-FR`);
      const data = await res.json();
      setGenres(data.genres || []);
    } catch (e) { console.error(e); }
  };

  const loadTrending = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${BASE_URL}/trending/${contentType}/day?api_key=${API_KEY}&language=fr-FR`);
      const data = await res.json();
      setResults(data.results || []);
      if (data.results && data.results.length > 0) {
        setHeroMovie(data.results[0]);
      }
    } catch (e) { console.error(e); }
    setLoading(false);
  };

  const performSearch = async () => {
    setLoading(true);
    try {
      const url = activeGenre 
        ? `${BASE_URL}/discover/${contentType}?api_key=${API_KEY}&with_genres=${activeGenre}&language=fr-FR`
        : `${BASE_URL}/search/${contentType}?api_key=${API_KEY}&query=${encodeURIComponent(searchQuery)}&language=fr-FR`;
      
      const res = await fetch(url);
      const data = await res.json();
      setResults(data.results || []);
    } catch (e) { console.error(e); }
    setLoading(false);
  };

  const loadDetails = async (id: number) => {
    setLoading(true);
    try {
      const [details, credits, videos] = await Promise.all([
        fetch(`${BASE_URL}/${contentType}/${id}?api_key=${API_KEY}&language=fr-FR`).then(r => r.json()),
        fetch(`${BASE_URL}/${contentType}/${id}/credits?api_key=${API_KEY}&language=fr-FR`).then(r => r.json()),
        fetch(`${BASE_URL}/${contentType}/${id}/videos?api_key=${API_KEY}`).then(r => r.json())
      ]);

      setSelectedMedia(details);
      setCast(credits.cast ? credits.cast.slice(0, 10) : []);
      
      const trailer = videos.results.find((v: any) => v.type === 'Trailer' && v.site === 'YouTube');
      setTrailerId(trailer ? trailer.key : null);
      
      // Reset Series state
      setEpisodes([]);
      setShowEpisodes(false);
      
      if (contentType === 'tv' && details.seasons?.length > 0) {
          loadEpisodes(details.id, details.seasons[0].season_number);
      }

    } catch (e) { console.error(e); }
    setLoading(false);
  };

  const loadEpisodes = async (tvId: number, seasonNum: number) => {
      try {
        const res = await fetch(`${BASE_URL}/tv/${tvId}/season/${seasonNum}?api_key=${API_KEY}&language=fr-FR`);
        const data = await res.json();
        setEpisodes(data.episodes || []);
        setShowEpisodes(true);
      } catch (e) { console.error(e); }
  };

  // --- ACTIONS ---

  const toggleFavorite = (item: TMDBMedia, e?: React.MouseEvent) => {
    e?.stopPropagation();
    const exists = favorites.find(f => f.id === item.id);
    let newFavs;
    if (exists) {
      newFavs = favorites.filter(f => f.id !== item.id);
    } else {
      newFavs = [...favorites, item];
    }
    setFavorites(newFavs);
    localStorage.setItem('cinedash_favs', JSON.stringify(newFavs));
  };

  const handleGenreClick = (id: number | null) => {
    setActiveGenre(id);
    if (id) {
        setLoading(true);
        fetch(`${BASE_URL}/discover/${contentType}?api_key=${API_KEY}&with_genres=${id}&language=fr-FR`)
            .then(r => r.json())
            .then(d => {
                setResults(d.results || []);
                setLoading(false);
            });
    } else {
        loadTrending();
    }
  };

  const showFavoritesView = () => {
      setResults(favorites);
      setHeroMovie(null); // Hide hero in favorites view
  };

  // --- RENDER HELPERS ---

  const getImageUrl = (path: string | null, size: 'w500' | 'original' = 'w500') => {
      return path ? `https://image.tmdb.org/t/p/${size}${path}` : 'https://via.placeholder.com/500x750/1e293b/ffffff?text=No+Image';
  };

  return (
    <div className="bg-[#020617] text-slate-100 font-sans h-full w-full overflow-y-auto relative selection:bg-cyan-500 selection:text-white">
        
        {/* Background Glow */}
        <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-cyan-600/10 blur-[120px] pointer-events-none"></div>

        {/* --- NAVBAR --- */}
        <nav className="sticky top-0 z-40 bg-[#0f172a]/80 backdrop-blur-xl border-b border-white/5 px-4 py-3">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 max-w-[1600px] mx-auto">
                <div className="flex items-center gap-6 w-full md:w-auto justify-between md:justify-start">
                    <div className="flex items-center gap-2 cursor-pointer group" onClick={() => { setSearchQuery(''); loadTrending(); }}>
                        <div className="bg-gradient-to-br from-cyan-400 to-blue-600 p-1.5 rounded-lg shadow-lg shadow-cyan-500/20 group-hover:rotate-12 transition-transform">
                            <Film className="text-white w-5 h-5" />
                        </div>
                        <h1 className="text-xl font-black tracking-tighter">CineDash<span className="text-cyan-400">.</span>ULTRA</h1>
                    </div>
                    
                    <div className="hidden md:flex items-center gap-4 text-xs font-bold text-slate-400">
                        <button onClick={() => { setSearchQuery(''); loadTrending(); }} className="hover:text-cyan-400 transition-colors">Découvrir</button>
                        <button onClick={showFavoritesView} className="hover:text-cyan-400 transition-colors">Mes Favoris</button>
                    </div>
                </div>

                <div className="flex items-center gap-3 w-full md:w-auto flex-1 md:justify-end">
                    <div className="flex bg-slate-900/50 p-1 rounded-xl border border-white/5">
                        <button 
                            onClick={() => setContentType('movie')} 
                            className={`px-4 py-1.5 rounded-lg text-[10px] font-black transition-all flex items-center gap-2 ${contentType === 'movie' ? 'bg-cyan-500 text-white shadow-[0_0_15px_rgba(6,182,212,0.4)]' : 'text-slate-400 hover:text-white'}`}
                        >
                            <Film size={12}/> FILMS
                        </button>
                        <button 
                            onClick={() => setContentType('tv')} 
                            className={`px-4 py-1.5 rounded-lg text-[10px] font-black transition-all flex items-center gap-2 ${contentType === 'tv' ? 'bg-cyan-500 text-white shadow-[0_0_15px_rgba(6,182,212,0.4)]' : 'text-slate-400 hover:text-white'}`}
                        >
                            <Tv size={12}/> SÉRIES
                        </button>
                    </div>

                    <div className="relative flex-1 max-w-md">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 w-4 h-4" />
                        <input 
                            type="text" 
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Rechercher..." 
                            className="w-full bg-slate-900/50 border border-white/10 rounded-xl py-2 pl-10 pr-4 text-sm outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all text-white placeholder:text-slate-600"
                        />
                    </div>
                </div>
            </div>
        </nav>

        {/* --- GENRES --- */}
        <div className="border-b border-white/5 py-2 overflow-x-auto no-scrollbar bg-[#020617]">
            <div className="flex gap-2 px-4 max-w-[1600px] mx-auto">
                <button 
                    onClick={() => handleGenreClick(null)}
                    className={`px-4 py-1.5 rounded-full border text-[10px] font-bold whitespace-nowrap transition-all ${activeGenre === null ? 'bg-cyan-500 border-cyan-500 text-white' : 'border-white/10 text-slate-400 hover:bg-white/5'}`}
                >
                    Tous
                </button>
                {genres.map(g => (
                    <button 
                        key={g.id}
                        onClick={() => handleGenreClick(g.id)}
                        className={`px-4 py-1.5 rounded-full border text-[10px] font-bold whitespace-nowrap transition-all ${activeGenre === g.id ? 'bg-cyan-500 border-cyan-500 text-white' : 'border-white/10 text-slate-400 hover:bg-white/5'}`}
                    >
                        {g.name}
                    </button>
                ))}
            </div>
        </div>

        {/* --- MAIN CONTENT --- */}
        <main className="max-w-[1600px] mx-auto px-4 py-8 pb-20">
            
            {/* HERO SECTION (Only on Home) */}
            {heroMovie && !searchQuery && !activeGenre && (
                <div className="mb-12 relative rounded-3xl overflow-hidden aspect-[21/9] group cursor-pointer shadow-2xl border border-white/5" onClick={() => loadDetails(heroMovie.id)}>
                    <img src={getImageUrl(heroMovie.backdrop_path, 'original')} className="w-full h-full object-cover transition-transform duration-[10s] group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/20 to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#020617]/40 to-transparent"></div>
                    
                    <div className="absolute bottom-8 left-8 md:bottom-16 md:left-16 max-w-2xl">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="bg-cyan-500 text-white text-[10px] font-black px-2 py-1 rounded uppercase tracking-wider">Tendance N°1</span>
                            <span className="flex items-center gap-1 text-yellow-400 text-xs font-bold"><Star size={12} fill="currentColor"/> {heroMovie.vote_average.toFixed(1)}</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-4 leading-none">{heroMovie.title || heroMovie.name}</h2>
                        <p className="text-slate-300 text-sm md:text-base line-clamp-3 mb-6 font-medium max-w-lg">{heroMovie.overview}</p>
                        <button className="bg-white text-black px-6 py-3 rounded-xl font-black text-xs tracking-widest hover:bg-cyan-400 transition-colors flex items-center gap-2">
                            <Play size={16} fill="currentColor"/> DÉTAILS
                        </button>
                    </div>
                </div>
            )}

            {/* RESULTS GRID */}
            <div className="mb-6 flex items-end justify-between border-l-4 border-cyan-500 pl-4">
                <div>
                    <p className="text-cyan-500 font-black text-[10px] tracking-[0.3em] uppercase mb-1">Catalogue</p>
                    <h2 className="text-2xl font-black text-white">
                        {searchQuery ? `Résultats : "${searchQuery}"` : activeGenre ? 'Films Filtrés' : 'Populaires'}
                    </h2>
                </div>
            </div>

            {loading ? (
                <div className="h-64 flex items-center justify-center">
                    <div className="flex flex-col items-center gap-2">
                        <Loader2 className="w-8 h-8 text-cyan-500 animate-spin" />
                        <span className="text-xs font-bold text-cyan-500 animate-pulse">CHARGEMENT...</span>
                    </div>
                </div>
            ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
                    {results.map(item => (
                        <div 
                            key={item.id} 
                            className="bg-slate-900 rounded-2xl overflow-hidden border border-white/5 relative group cursor-pointer hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300"
                            onClick={() => loadDetails(item.id)}
                        >
                            <div className="aspect-[2/3] overflow-hidden relative">
                                <img src={getImageUrl(item.poster_path)} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy"/>
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <div className="absolute top-2 right-2 bg-black/60 backdrop-blur border border-white/10 px-2 py-1 rounded-lg flex items-center gap-1">
                                    <Star size={10} className="text-yellow-400" fill="currentColor"/>
                                    <span className="text-[10px] font-bold">{item.vote_average.toFixed(1)}</span>
                                </div>
                            </div>
                            <div className="p-4">
                                <h3 className="text-white font-bold text-xs line-clamp-1 mb-1 group-hover:text-cyan-400 transition-colors">{item.title || item.name}</h3>
                                <div className="flex justify-between items-center">
                                    <span className="text-[10px] font-bold text-slate-500 uppercase">
                                        {(item.release_date || item.first_air_date || '????').split('-')[0]}
                                    </span>
                                    <button 
                                        onClick={(e) => toggleFavorite(item, e)}
                                        className={`transition-colors ${favorites.some(f => f.id === item.id) ? 'text-pink-500' : 'text-slate-600 hover:text-white'}`}
                                    >
                                        <Heart size={14} fill={favorites.some(f => f.id === item.id) ? "currentColor" : "none"} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </main>

        {/* --- DETAILS MODAL --- */}
        {selectedMedia && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
                <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-md" onClick={() => setSelectedMedia(null)}></div>
                <div className="relative bg-[#0f172a] w-full max-w-6xl h-full md:h-[85vh] rounded-3xl shadow-2xl border border-white/10 overflow-hidden flex flex-col md:flex-row animate-in fade-in zoom-in-95 duration-200">
                    
                    {/* LEFT: VISUAL */}
                    <div className="w-full md:w-3/5 h-64 md:h-full relative bg-black shrink-0">
                        {trailerId ? (
                            <iframe 
                                src={`https://www.youtube.com/embed/${trailerId}?autoplay=1&mute=0&controls=1&modestbranding=1&rel=0`} 
                                className="w-full h-full object-cover"
                                allow="autoplay; encrypted-media"
                                allowFullScreen
                            />
                        ) : (
                            <img src={getImageUrl(selectedMedia.backdrop_path, 'original')} className="w-full h-full object-cover opacity-60" />
                        )}
                        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#0f172a] via-transparent to-transparent md:bg-gradient-to-r"></div>
                        
                        <div className="absolute bottom-6 left-6 right-6 pointer-events-none">
                            <div className="flex flex-wrap gap-2 mb-3">
                                {selectedMedia.genres.slice(0, 3).map(g => (
                                    <span key={g.id} className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-[8px] font-black rounded border border-cyan-500/30 uppercase tracking-widest backdrop-blur-sm">{g.name}</span>
                                ))}
                            </div>
                            <h2 className="text-3xl md:text-5xl font-black text-white mb-2 leading-none drop-shadow-xl">{selectedMedia.title || selectedMedia.name}</h2>
                            <p className="text-cyan-100 font-bold italic text-sm opacity-80">{selectedMedia.tagline}</p>
                        </div>
                    </div>

                    {/* RIGHT: INFO */}
                    <div className="w-full md:w-2/5 flex flex-col h-full bg-[#0f172a] relative overflow-hidden">
                        <div className="p-6 md:p-8 overflow-y-auto custom-scrollbar flex-1">
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex gap-6">
                                    <div className="text-center">
                                        <span className="block text-2xl font-black text-white">{selectedMedia.vote_average.toFixed(1)}</span>
                                        <span className="text-[8px] font-black text-slate-500 tracking-widest">SCORE</span>
                                    </div>
                                    <div className="w-px h-8 bg-white/10"></div>
                                    <div className="text-center">
                                        <span className="block text-2xl font-black text-white">{(selectedMedia.release_date || selectedMedia.first_air_date || '').split('-')[0]}</span>
                                        <span className="text-[8px] font-black text-slate-500 tracking-widest">ANNÉE</span>
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <button 
                                        onClick={() => toggleFavorite(selectedMedia)}
                                        className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${favorites.some(f => f.id === selectedMedia.id) ? 'bg-pink-500/20 text-pink-500 border border-pink-500/50' : 'bg-white/5 text-slate-400 hover:bg-white/10'}`}
                                    >
                                        <Heart size={18} fill={favorites.some(f => f.id === selectedMedia.id) ? "currentColor" : "none"} />
                                    </button>
                                    <button onClick={() => setSelectedMedia(null)} className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-white/10 transition-all text-slate-400 hover:text-white">
                                        <X size={18} />
                                    </button>
                                </div>
                            </div>

                            <div className="mb-8">
                                <h4 className="text-[10px] font-black text-cyan-500 tracking-[0.3em] uppercase mb-2">Synopsis</h4>
                                <p className="text-slate-300 text-sm leading-relaxed font-medium">{selectedMedia.overview || "Aucun synopsis disponible."}</p>
                            </div>

                            <div className="mb-8">
                                <h4 className="text-[10px] font-black text-cyan-500 tracking-[0.3em] uppercase mb-3">Casting</h4>
                                <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar">
                                    {cast.map((person, i) => (
                                        <div key={i} className="flex-shrink-0 w-16 text-center">
                                            <img src={getImageUrl(person.profile_path)} className="w-14 h-14 rounded-xl object-cover border border-white/10 mb-2 mx-auto" />
                                            <p className="text-[8px] font-bold text-white truncate">{person.name}</p>
                                            <p className="text-[7px] text-slate-500 truncate">{person.character}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* SERIES SEASONS */}
                            {contentType === 'tv' && selectedMedia.seasons && (
                                <div className="mb-8 border-t border-white/5 pt-6">
                                    <h4 className="text-[10px] font-black text-cyan-500 tracking-[0.3em] uppercase mb-3">Saisons</h4>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {selectedMedia.seasons.filter(s => s.season_number > 0).map(s => (
                                            <button 
                                                key={s.season_number}
                                                onClick={() => loadEpisodes(selectedMedia.id, s.season_number)}
                                                className="px-3 py-1 bg-white/5 hover:bg-white/10 border border-white/5 rounded text-[10px] font-bold text-slate-300 transition-colors"
                                            >
                                                {s.name}
                                            </button>
                                        ))}
                                    </div>
                                    
                                    {showEpisodes && (
                                        <div className="space-y-2 max-h-60 overflow-y-auto pr-2 custom-scrollbar">
                                            {episodes.map(ep => (
                                                <div key={ep.id} className="flex gap-3 p-2 hover:bg-white/5 rounded-lg group cursor-pointer transition-colors">
                                                    <div className="w-24 shrink-0 rounded overflow-hidden aspect-video bg-black relative">
                                                        <img src={getImageUrl(ep.still_path)} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" />
                                                    </div>
                                                    <div className="min-w-0">
                                                        <h5 className="text-xs font-bold text-white truncate group-hover:text-cyan-400">{ep.episode_number}. {ep.name}</h5>
                                                        <p className="text-[10px] text-slate-500 line-clamp-2 mt-1">{ep.overview}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            )}

                            {/* MOVIE STATS */}
                            {contentType === 'movie' && (
                                <div className="grid grid-cols-2 gap-4 mt-auto">
                                    <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                                        <span className="block text-[8px] font-black text-slate-500 tracking-widest mb-1">BUDGET</span>
                                        <span className="text-xs font-bold text-white">{selectedMedia.budget ? `$${(selectedMedia.budget/1000000).toFixed(1)}M` : 'N/A'}</span>
                                    </div>
                                    <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                                        <span className="block text-[8px] font-black text-slate-500 tracking-widest mb-1">RECETTES</span>
                                        <span className="text-xs font-bold text-white">{selectedMedia.revenue ? `$${(selectedMedia.revenue/1000000).toFixed(1)}M` : 'N/A'}</span>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        )}
    </div>
  );
};
