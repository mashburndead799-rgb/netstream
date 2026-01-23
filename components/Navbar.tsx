import React, { useEffect, useState, useRef } from 'react';
import { Search, Bell, Menu, X, ChevronDown, User, LogOut, HelpCircle, Edit2 } from 'lucide-react';
import { Profile } from './ProfileGate';

interface NavbarProps {
  user: any; // Compte utilisateur global
  currentProfile: Profile; // Profil actif
  profiles: Profile[]; // Liste des profils disponibles
  onSwitchProfile: (profile: Profile) => void;
  currentView: string;
  setView: (view: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  myListCount: number;
  onLogout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ 
  user, 
  currentProfile, 
  profiles, 
  onSwitchProfile, 
  currentView, 
  setView, 
  searchQuery, 
  setSearchQuery, 
  myListCount, 
  onLogout 
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showSearchInput, setShowSearchInput] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  // Refs for click outside handling
  const notificationRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Click outside to close dropdowns
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target as Node)) {
        setShowNotifications(false);
      }
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setShowProfileMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNavClick = (viewName: string) => {
    setView(viewName);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { id: 'home', label: 'Accueil' },
    { id: 'series', label: 'Séries' },
    { id: 'movies', label: 'Films' },
    { id: 'collections', label: 'Collections' },
    { id: 'new', label: 'Nouveautés' },
    { id: 'list', label: 'Ma liste' },
  ];

  const notifications = [
    { id: 1, text: "Nouveauté : Five Nights at Freddy's 2 est arrivé !", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm5K3fR0hySUprmtF4P6qjNEg6f386XwBCQQ&s", time: "Il y a 10 min" },
    { id: 2, text: "Reprenez la lecture de Demon Slayer", img: "https://media.themoviedb.org/t/p/w780/1RgPyOhN4DRs225BGTlHJqCudII.jpg", time: "Hier" },
    { id: 3, text: "K-Pop Demon Hunter est #1 aujourd'hui", img: "https://img.youtube.com/vi/AzCAwdp1uIQ/maxresdefault.jpg", time: "Il y a 2 jours" }
  ];

  const otherProfiles = profiles.filter(p => p.id !== currentProfile.id);

  return (
    <nav className={`fixed w-full z-50 transition-colors duration-500 ${isScrolled ? 'bg-[#141414]' : 'bg-gradient-to-b from-black/80 to-transparent'}`}>
      <div className="px-4 md:px-12 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          {/* Logo */}
          <div 
            onClick={() => handleNavClick('home')}
            className="text-red-600 text-2xl md:text-3xl font-bold tracking-tighter cursor-pointer select-none"
          >
            NETSTREAM
          </div>

          {/* Desktop Links */}
          <ul className="hidden md:flex space-x-6 text-sm text-gray-200">
            {navItems.map((item) => (
              <li 
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`cursor-pointer transition ${currentView === item.id ? 'text-white font-bold' : 'hover:text-gray-300 font-medium'}`}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side Icons */}
        <div className="flex items-center space-x-4 md:space-x-6 text-white">
          {/* Search */}
          <div className={`flex items-center bg-black/0 border ${showSearchInput ? 'border-white bg-black/60' : 'border-transparent'} transition-all duration-300 rounded-sm px-1`}>
            <Search 
              className="w-5 h-5 cursor-pointer hover:text-gray-300" 
              onClick={() => setShowSearchInput(!showSearchInput)}
            />
            <input 
              type="text"
              placeholder="Titres, personnes, genres"
              className={`bg-transparent text-sm text-white placeholder-gray-400 outline-none ml-2 transition-all duration-300 ${showSearchInput ? 'w-48 md:w-64 opacity-100' : 'w-0 opacity-0'}`}
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                if (e.target.value.length > 0) setView('search');
                else if (currentView === 'search') setView('home');
              }}
            />
          </div>

          {/* Notifications */}
          <div 
            className="relative cursor-pointer hover:text-gray-300"
            ref={notificationRef}
            onClick={() => setShowNotifications(!showNotifications)}
          >
            <Bell className="w-5 h-5" />
            {myListCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-600 rounded-full text-[10px] flex items-center justify-center font-bold">
                {myListCount}
              </span>
            )}
            
            {/* Notifications Dropdown */}
            {showNotifications && (
              <div className="absolute right-0 mt-4 w-72 md:w-80 bg-black/90 border border-gray-800 rounded shadow-xl py-2 animate-in fade-in slide-in-from-top-2">
                 <div className="absolute -top-2 right-1 w-4 h-4 bg-black/90 border-t border-l border-gray-800 transform rotate-45"></div>
                 <div className="max-h-80 overflow-y-auto">
                    {notifications.map((notif) => (
                      <div key={notif.id} className="flex items-start gap-3 px-4 py-3 hover:bg-gray-800 transition border-b border-gray-800/50 last:border-0">
                         <img src={notif.img} alt="thumb" className="w-16 h-9 object-cover rounded" />
                         <div className="flex-1">
                            <p className="text-sm text-gray-200 leading-snug">{notif.text}</p>
                            <span className="text-xs text-gray-500">{notif.time}</span>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>
            )}
          </div>
          
          {/* Profile */}
          <div 
            className="relative flex items-center space-x-2 cursor-pointer group"
            ref={profileRef}
            onClick={() => setShowProfileMenu(!showProfileMenu)}
            onMouseEnter={() => setShowProfileMenu(true)}
          >
            <img 
              src={currentProfile.avatar} 
              alt={currentProfile.name} 
              className="w-8 h-8 rounded-md object-cover transition duration-200"
            />
            <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${showProfileMenu ? 'rotate-180' : ''}`} />

            {/* Profile Menu */}
            {showProfileMenu && (
               <div 
                 className="absolute top-full right-0 mt-4 w-52 bg-black/95 border border-gray-800 rounded shadow-xl py-0 animate-in fade-in slide-in-from-top-2 overflow-hidden"
                 onMouseLeave={() => setShowProfileMenu(false)}
               >
                  <div className="absolute -top-2 right-6 w-4 h-4 bg-black/95 border-t border-l border-gray-800 transform rotate-45"></div>
                  
                  {/* Autres Profils */}
                  {otherProfiles.length > 0 && (
                      <div className="py-2">
                          {otherProfiles.map(profile => (
                              <div 
                                key={profile.id}
                                onClick={(e) => { e.stopPropagation(); onSwitchProfile(profile); setShowProfileMenu(false); }}
                                className="px-3 py-2 flex items-center gap-3 hover:bg-gray-800 hover:underline cursor-pointer transition-colors"
                              >
                                  <img src={profile.avatar} className="w-8 h-8 rounded" alt={profile.name} />
                                  <span className="text-sm text-gray-300 hover:text-white">{profile.name}</span>
                              </div>
                          ))}
                      </div>
                  )}

                  {/* Gestion des profils */}
                  <div className="px-3 py-3 hover:underline cursor-pointer text-sm text-gray-300 flex items-center gap-2 border-t border-gray-800">
                      <Edit2 className="w-4 h-4" />
                      Gérer les profils
                  </div>
                  
                  {/* Liens Compte */}
                  <div className="border-t border-gray-800 py-2">
                      <button className="w-full px-4 py-2 text-left text-sm text-white hover:underline flex items-center gap-2 font-bold">
                         <User className="w-4 h-4" /> Compte
                      </button>
                      <button className="w-full px-4 py-2 text-left text-sm text-white hover:underline flex items-center gap-2 font-bold">
                         <HelpCircle className="w-4 h-4" /> Centre d'aide
                      </button>
                  </div>
                  
                  {/* Déconnexion */}
                  <div className="border-t border-gray-800 py-2">
                      <button 
                        onClick={(e) => { e.stopPropagation(); onLogout(); }}
                        className="w-full px-4 py-2 text-center text-sm hover:underline text-white block"
                      >
                         Se déconnecter de NetStream
                      </button>
                  </div>
               </div>
            )}
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#141414] absolute top-16 left-0 w-full p-4 border-t border-gray-800 animate-in slide-in-from-top-5 shadow-2xl">
          <ul className="flex flex-col space-y-4 text-white text-sm font-medium items-center">
             {navItems.map((item) => (
                <li 
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`cursor-pointer hover:text-gray-300 text-lg ${currentView === item.id ? 'text-red-500 font-bold' : ''}`}
                >
                  {item.label}
                </li>
             ))}
             <li className="w-full border-t border-gray-700 pt-4 flex flex-col items-center gap-3">
                <div className="flex items-center gap-2 mb-2" onClick={() => setShowProfileMenu(!showProfileMenu)}>
                     <img src={currentProfile.avatar} className="w-8 h-8 rounded" />
                     <span className="text-gray-300">{currentProfile.name}</span>
                     <ChevronDown className="w-4 h-4" />
                </div>
                {showProfileMenu && (
                    <div className="flex flex-col gap-2 items-center mb-2">
                         {otherProfiles.map(p => (
                             <div key={p.id} onClick={() => onSwitchProfile(p)} className="flex items-center gap-2 opacity-70">
                                 <img src={p.avatar} className="w-6 h-6 rounded" />
                                 <span>{p.name}</span>
                             </div>
                         ))}
                    </div>
                )}
                <button onClick={onLogout} className="text-gray-400 hover:text-white">Se déconnecter</button>
             </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;