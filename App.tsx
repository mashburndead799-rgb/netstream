import React, { useState, useEffect } from 'react';
import { Terminal, Monitor, Globe, Settings, Wifi, Battery, FolderOpen, Power, FileText, Film, Calculator, Calendar, Mail, MessageSquare, DollarSign, Activity, Box, Grid, AlertTriangle, Eye, Hexagon, Music, Camera, Image, Map, Palette, ShieldAlert, Info, Square, Watch, Music4, Binary, Shuffle, FileWarning, TrendingUp, Circle, Radio, LayoutGrid, Search, Bell, Archive, Scissors, Key, BarChart, PenTool, Feather, Disc, LayoutDashboard, Trash2, Mic, Video, Coffee, Sun, ShieldCheck } from 'lucide-react';
import NetStreamApp from './components/NetStreamApp';
import Window from './components/Window';
import { 
  TerminalApp, DataPadApp, SettingsApp, BrowserApp, CalculatorApp, PaintApp, SnakeApp, 
  CameraApp, CryptoApp, TaskManagerApp, WeatherApp, NotesApp, MusicApp, MapsApp, 
  CalendarApp, MailApp, ChatApp, GalleryApp, AntivirusApp, ShopApp, NewsApp, HelpApp, 
  CodeApp, EyeApp, TicTacToeApp, StopwatchApp, RadioApp, TranslatorApp, SynthApp, 
  ConverterApp, MinesweeperApp, HackerTyperApp, BreathingApp, ColorPickerApp, 
  WorldClockApp, DrumPadApp, SecretsApp, SysGraphApp, EverythingApp, PowerToysApp, 
  SevenZipApp, WizTreeApp, RevoApp, BleachBitApp, VLCApp, HandBrakeApp, AudacityApp, 
  GimpApp, DaVinciApp, ObsidianApp, LibreOfficeApp, FluxApp, KeePassApp, GlassWireApp 
} from './components/OsApps';
import { CineDashApp } from './components/CineDashApp';

type AppId = 'netstream' | 'terminal' | 'settings' | 'browser' | 'datapad' | 'cinedash' | 'calculator' | 'paint' | 'snake' | 'camera' | 'crypto' | 'taskmanager' | 'weather' | 'notes' | 'music' | 'maps' | 'calendar' | 'mail' | 'chat' | 'gallery' | 'antivirus' | 'shop' | 'news' | 'help' | 'code' | 'eye' | 'tictactoe' | 'stopwatch' | 'radio' | 'translator' | 'synth' | 'converter' | 'minesweeper' | 'hackertyper' | 'breathing' | 'colorpicker' | 'worldclock' | 'drumpad' | 'secrets' | 'sysgraph' | 'everything' | 'powertoys' | '7zip' | 'wiztree' | 'revo' | 'bleachbit' | 'vlc' | 'handbrake' | 'audacity' | 'gimp' | 'davinci' | 'obsidian' | 'libreoffice' | 'flux' | 'keepass' | 'glasswire';

interface WindowState {
  id: AppId;
  title: string;
  isOpen: boolean;
  isMinimized: boolean;
  zIndex: number;
  icon: React.ReactNode;
  component: React.ReactNode;
}

const DesktopIcon = ({ icon, label, onDoubleClick }: { icon: React.ReactNode, label: string, onDoubleClick: () => void }) => (
    <div 
        className="group flex flex-col items-center gap-2 cursor-pointer w-[100px] h-[110px] opacity-90 hover:opacity-100 transition-all hover:bg-white/10 p-2 rounded-xl mb-2"
        onDoubleClick={onDoubleClick}
    >
        <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/10 group-hover:bg-white/20 transition-colors shadow-lg shadow-black/20 group-hover:scale-105 transform duration-200">
            {icon}
        </div>
        <span className="text-[11px] text-white font-medium drop-shadow-md bg-black/40 px-2 py-0.5 rounded-full truncate max-w-full text-center border border-white/5 group-hover:bg-black/60">
            {label}
        </span>
    </div>
);

const App = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [startMenuOpen, setStartMenuOpen] = useState(false);
  const [activeWindowId, setActiveWindowId] = useState<AppId | null>(null);
  const [theme, setTheme] = useState('windows');
  const [wallpaper, setWallpaper] = useState('https://images.unsplash.com/photo-1477346611705-65d1883cee1e?auto=format&fit=crop&q=80&w=2000'); 
  
  // OS Windows State
  const [windows, setWindows] = useState<WindowState[]>([
    { id: 'netstream', title: 'NetStream', isOpen: false, isMinimized: false, zIndex: 1, icon: <Monitor size={18} />, component: <NetStreamApp /> },
    { id: 'terminal', title: 'Terminal', isOpen: false, isMinimized: false, zIndex: 2, icon: <Terminal size={18} />, component: <TerminalApp onClose={() => closeWindow('terminal')} onOpenApp={(id) => openWindow(id as AppId)} /> },
    { id: 'cinedash', title: 'CineDash', isOpen: false, isMinimized: false, zIndex: 0, icon: <Film size={18} />, component: <CineDashApp /> },
    { id: 'browser', title: 'Chrome', isOpen: false, isMinimized: false, zIndex: 0, icon: <Globe size={18} />, component: <BrowserApp /> },
    { id: 'datapad', title: 'Bloc-notes', isOpen: false, isMinimized: false, zIndex: 0, icon: <FileText size={18} />, component: <DataPadApp /> },
    { id: 'settings', title: 'Paramètres', isOpen: false, isMinimized: false, zIndex: 0, icon: <Settings size={18} />, component: <SettingsApp currentTheme={theme} onThemeChange={setTheme} onWallpaperChange={setWallpaper} /> },
    
    // Utilitaires & Système
    { id: 'everything', title: 'Everything', isOpen: false, isMinimized: false, zIndex: 0, icon: <Search size={18} />, component: <EverythingApp /> },
    { id: 'powertoys', title: 'PowerToys', isOpen: false, isMinimized: false, zIndex: 0, icon: <Box size={18} />, component: <PowerToysApp /> },
    { id: '7zip', title: '7-Zip', isOpen: false, isMinimized: false, zIndex: 0, icon: <Archive size={18} />, component: <SevenZipApp /> },
    { id: 'wiztree', title: 'WizTree', isOpen: false, isMinimized: false, zIndex: 0, icon: <LayoutDashboard size={18} />, component: <WizTreeApp /> },
    { id: 'revo', title: 'Revo Uninstaller', isOpen: false, isMinimized: false, zIndex: 0, icon: <Trash2 size={18} />, component: <RevoApp /> },
    { id: 'bleachbit', title: 'BleachBit', isOpen: false, isMinimized: false, zIndex: 0, icon: <Trash2 size={18} />, component: <BleachBitApp /> },

    // Multimédia & Création
    { id: 'vlc', title: 'VLC Media Player', isOpen: false, isMinimized: false, zIndex: 0, icon: <AlertTriangle size={18} className="text-orange-500"/>, component: <VLCApp /> },
    { id: 'handbrake', title: 'HandBrake', isOpen: false, isMinimized: false, zIndex: 0, icon: <Disc size={18} />, component: <HandBrakeApp /> },
    { id: 'audacity', title: 'Audacity', isOpen: false, isMinimized: false, zIndex: 0, icon: <Mic size={18} />, component: <AudacityApp /> },
    { id: 'gimp', title: 'GIMP', isOpen: false, isMinimized: false, zIndex: 0, icon: <Palette size={18} />, component: <GimpApp /> },
    { id: 'davinci', title: 'DaVinci Resolve', isOpen: false, isMinimized: false, zIndex: 0, icon: <Film size={18} />, component: <DaVinciApp /> },

    // Productivité
    { id: 'obsidian', title: 'Obsidian', isOpen: false, isMinimized: false, zIndex: 0, icon: <Feather size={18} />, component: <ObsidianApp /> },
    { id: 'libreoffice', title: 'LibreOffice', isOpen: false, isMinimized: false, zIndex: 0, icon: <FileText size={18} />, component: <LibreOfficeApp /> },
    { id: 'flux', title: 'f.lux', isOpen: false, isMinimized: false, zIndex: 0, icon: <Sun size={18} />, component: <FluxApp /> },

    // Sécurité
    { id: 'keepass', title: 'KeePassXC', isOpen: false, isMinimized: false, zIndex: 0, icon: <Key size={18} />, component: <KeePassApp /> },
    { id: 'glasswire', title: 'GlassWire', isOpen: false, isMinimized: false, zIndex: 0, icon: <BarChart size={18} />, component: <GlassWireApp /> },

    // Existing Apps
    { id: 'calculator', title: 'Calculatrice', isOpen: false, isMinimized: false, zIndex: 0, icon: <Calculator size={18} />, component: <CalculatorApp /> },
    { id: 'paint', title: 'Studio', isOpen: false, isMinimized: false, zIndex: 0, icon: <Palette size={18} />, component: <PaintApp /> },
    { id: 'snake', title: 'Snake', isOpen: false, isMinimized: false, zIndex: 0, icon: <Activity size={18} />, component: <SnakeApp /> },
    { id: 'camera', title: 'Caméra', isOpen: false, isMinimized: false, zIndex: 0, icon: <Camera size={18} />, component: <CameraApp /> },
    { id: 'crypto', title: 'Finances', isOpen: false, isMinimized: false, zIndex: 0, icon: <DollarSign size={18} />, component: <CryptoApp /> },
    { id: 'taskmanager', title: 'Moniteur', isOpen: false, isMinimized: false, zIndex: 0, icon: <Activity size={18} />, component: <TaskManagerApp /> },
    { id: 'weather', title: 'Météo', isOpen: false, isMinimized: false, zIndex: 0, icon: <AlertTriangle size={18} />, component: <WeatherApp /> },
    { id: 'music', title: 'Musique', isOpen: false, isMinimized: false, zIndex: 0, icon: <Music size={18} />, component: <MusicApp /> },
    { id: 'maps', title: 'Cartes', isOpen: false, isMinimized: false, zIndex: 0, icon: <Map size={18} />, component: <MapsApp /> },
    { id: 'calendar', title: 'Calendrier', isOpen: false, isMinimized: false, zIndex: 0, icon: <Calendar size={18} />, component: <CalendarApp /> },
    { id: 'mail', title: 'Courrier', isOpen: false, isMinimized: false, zIndex: 0, icon: <Mail size={18} />, component: <MailApp /> },
    { id: 'chat', title: 'Messagerie', isOpen: false, isMinimized: false, zIndex: 0, icon: <MessageSquare size={18} />, component: <ChatApp /> },
    { id: 'gallery', title: 'Galerie', isOpen: false, isMinimized: false, zIndex: 0, icon: <Image size={18} />, component: <GalleryApp /> },
    { id: 'antivirus', title: 'Sécurité', isOpen: false, isMinimized: false, zIndex: 0, icon: <ShieldAlert size={18} />, component: <AntivirusApp /> },
    { id: 'shop', title: 'Boutique', isOpen: false, isMinimized: false, zIndex: 0, icon: <Box size={18} />, component: <ShopApp /> },
    { id: 'news', title: 'Actualités', isOpen: false, isMinimized: false, zIndex: 0, icon: <Grid size={18} />, component: <NewsApp /> },
    { id: 'help', title: 'Aide', isOpen: false, isMinimized: false, zIndex: 0, icon: <Info size={18} />, component: <HelpApp /> },
    { id: 'code', title: 'Code', isOpen: false, isMinimized: false, zIndex: 0, icon: <Hexagon size={18} />, component: <CodeApp /> },
    { id: 'eye', title: 'Caméras', isOpen: false, isMinimized: false, zIndex: 0, icon: <Eye size={18} />, component: <EyeApp /> },
    { id: 'tictactoe', title: 'Morpion', isOpen: false, isMinimized: false, zIndex: 0, icon: <Square size={18} />, component: <TicTacToeApp /> },
    { id: 'stopwatch', title: 'Chronomètre', isOpen: false, isMinimized: false, zIndex: 0, icon: <Watch size={18} />, component: <StopwatchApp /> },
    { id: 'radio', title: 'Radio FM', isOpen: false, isMinimized: false, zIndex: 0, icon: <Radio size={18} />, component: <RadioApp /> },
    { id: 'translator', title: 'Traducteur', isOpen: false, isMinimized: false, zIndex: 0, icon: <Binary size={18} />, component: <TranslatorApp /> },
    { id: 'synth', title: 'Synthétiseur', isOpen: false, isMinimized: false, zIndex: 0, icon: <Music4 size={18} />, component: <SynthApp /> },
    { id: 'converter', title: 'Convertisseur', isOpen: false, isMinimized: false, zIndex: 0, icon: <Shuffle size={18} />, component: <ConverterApp /> },
    { id: 'minesweeper', title: 'Démineur', isOpen: false, isMinimized: false, zIndex: 0, icon: <FileWarning size={18} />, component: <MinesweeperApp /> },
    { id: 'hackertyper', title: 'Hacker', isOpen: false, isMinimized: false, zIndex: 0, icon: <Terminal size={18} />, component: <HackerTyperApp /> },
    { id: 'breathing', title: 'Bien-être', isOpen: false, isMinimized: false, zIndex: 0, icon: <Circle size={18} />, component: <BreathingApp /> },
    { id: 'colorpicker', title: 'Couleurs', isOpen: false, isMinimized: false, zIndex: 0, icon: <Palette size={18} />, component: <ColorPickerApp /> },
    { id: 'worldclock', title: 'Horloge', isOpen: false, isMinimized: false, zIndex: 0, icon: <Globe size={18} />, component: <WorldClockApp /> },
    { id: 'drumpad', title: 'Rythmes', isOpen: false, isMinimized: false, zIndex: 0, icon: <Grid size={18} />, component: <DrumPadApp /> },
    { id: 'secrets', title: 'Coffre', isOpen: false, isMinimized: false, zIndex: 0, icon: <ShieldAlert size={18} />, component: <SecretsApp /> },
    { id: 'sysgraph', title: 'Performances', isOpen: false, isMinimized: false, zIndex: 0, icon: <TrendingUp size={18} />, component: <SysGraphApp /> },
  ]);

  // Apply Theme
  useEffect(() => {
      const root = document.documentElement;
      root.style.setProperty('--accent-color', '#0078d7'); // Windows Blue
  }, [theme]);

  // Clock
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Boot Sequence Effect
  useEffect(() => {
    // Auto-open NetStream after "boot"
    const timer = setTimeout(() => {
        openWindow('netstream');
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Window Management
  const bringToFront = (id: AppId) => {
    setWindows(prev => {
      const highestZ = Math.max(...prev.map(w => w.zIndex), 0);
      const targetWindow = prev.find(w => w.id === id);
      if (targetWindow && targetWindow.zIndex === highestZ && activeWindowId === id) return prev;

      return prev.map(w => w.id === id ? { ...w, zIndex: highestZ + 1, isMinimized: false } : w);
    });
    setActiveWindowId(id);
  };

  const openWindow = (id: AppId) => {
    setWindows(prev => prev.map(w => w.id === id ? { ...w, isOpen: true, isMinimized: false } : w));
    bringToFront(id);
    setStartMenuOpen(false);
  };

  const closeWindow = (id: AppId) => {
    setWindows(prev => prev.map(w => w.id === id ? { ...w, isOpen: false } : w));
    if (activeWindowId === id) setActiveWindowId(null);
  };

  const minimizeWindow = (id: AppId) => {
    setWindows(prev => prev.map(w => w.id === id ? { ...w, isMinimized: true } : w));
    setActiveWindowId(null);
  };

  const toggleWindow = (id: AppId) => {
    const win = windows.find(w => w.id === id);
    if (win?.isOpen && !win.isMinimized && activeWindowId === id) {
      minimizeWindow(id);
    } else {
      openWindow(id);
    }
  };

  // Close Start Menu on click outside
  useEffect(() => {
      const handleClick = (e: MouseEvent) => {
          const target = e.target as HTMLElement;
          if (!target.closest('#start-menu') && !target.closest('#start-btn')) {
              setStartMenuOpen(false);
          }
      };
      document.addEventListener('mousedown', handleClick);
      return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <div 
        className="h-screen w-screen flex flex-col overflow-hidden text-slate-100 font-sans select-none bg-black bg-cover bg-center transition-all duration-700"
        style={{ backgroundImage: wallpaper ? `url(${wallpaper})` : 'none' }}
    >
      
      {/* Background Dimming for Readability */}
      <div className="absolute inset-0 bg-black/10 pointer-events-none z-0"></div>

      {/* --- STATUS BAR (Samsung/Android Style) --- */}
      <div className="h-8 bg-black/20 backdrop-blur-md flex items-center justify-between px-4 z-[9999] relative text-white text-xs font-medium border-b border-white/5">
        <div className="flex items-center gap-4 opacity-90">
          <span>{currentTime.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}</span>
          <span className="hidden md:inline text-white/50">|</span>
          <span className="hidden md:inline">Lun. 15 Juin</span>
        </div>
        <div className="flex items-center gap-4 opacity-90">
          <Wifi size={14} />
          <span className="hidden md:inline">5G</span>
          <Battery size={14} />
          <span>100%</span>
        </div>
      </div>

      {/* --- DESKTOP AREA --- */}
      <div className="flex-1 relative overflow-hidden p-6 z-10">
        
        {/* Desktop Icons - Flex Wrap for "New Line" Behavior */}
        <div className="absolute inset-4 z-0 flex flex-wrap content-start gap-4 overflow-y-auto pb-20 items-start">
            {windows.slice(0, 56).map(win => (
                <DesktopIcon key={win.id} icon={React.cloneElement(win.icon as React.ReactElement<any>, { size: 28 })} label={win.title} onDoubleClick={() => openWindow(win.id)} />
            ))}
            
            <div className="group flex flex-col items-center gap-2 cursor-pointer w-[100px] h-[110px] opacity-90 hover:opacity-100 transition-all hover:bg-white/10 p-2 rounded-xl" onDoubleClick={() => alert("Dossier Sécurisé")}>
                <div className="w-14 h-14 bg-blue-500/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-blue-400/30 group-hover:bg-blue-500/30 transition-colors shadow-lg">
                    <FolderOpen className="text-blue-400" size={28} />
                </div>
                <span className="text-[11px] text-white font-medium drop-shadow-md bg-black/30 px-2 py-0.5 rounded-full border border-white/5">Privé</span>
            </div>
        </div>

        {/* --- WINDOWS RENDER LOOP --- */}
        {windows.map(win => (
            <Window 
                key={win.id}
                {...win}
                onClose={() => closeWindow(win.id)}
                onMinimize={() => minimizeWindow(win.id)}
                onFocus={() => bringToFront(win.id)}
            >
                {win.component}
            </Window>
        ))}

      </div>

      {/* --- TASKBAR (Windows 11 / Mac Style) --- */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-[10000] flex flex-col items-center gap-4 w-auto">
        
        {/* Start Menu (Floating) */}
        <div 
            id="start-menu" 
            className={`mb-2 w-[600px] max-w-[90vw] bg-slate-900/80 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 ease-out origin-bottom transform
            ${startMenuOpen ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto' : 'opacity-0 scale-95 translate-y-4 pointer-events-none h-0'}`}
        >
            <div className="p-6">
                <div className="relative mb-6">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input type="text" placeholder="Rechercher des applications, des fichiers..." className="w-full bg-black/40 border border-white/10 rounded-lg py-2.5 pl-10 pr-4 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50 transition-colors" />
                </div>

                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-sm font-bold text-gray-300">Épinglé</h3>
                    <button className="text-xs text-blue-400 hover:text-blue-300 bg-blue-500/10 px-2 py-1 rounded">Tout afficher</button>
                </div>

                <div className="grid grid-cols-6 gap-4 mb-8">
                    {windows.slice(0, 18).map(win => (
                        <button key={win.id} onClick={() => openWindow(win.id)} className="flex flex-col items-center gap-2 group p-2 hover:bg-white/5 rounded-xl transition-colors">
                            <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform shadow-inner">
                                {win.icon}
                            </div>
                            <span className="text-[10px] text-gray-300 truncate w-full text-center group-hover:text-white">{win.title}</span>
                        </button>
                    ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/10 bg-black/20 -mx-6 -mb-6 px-6 py-4">
                    <div className="flex items-center gap-3 hover:bg-white/5 p-2 rounded-lg cursor-pointer transition-colors">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 p-0.5">
                            <img src="https://robohash.org/modern?set=set4" alt="Avatar" className="w-full h-full rounded-full object-cover bg-black"/>
                        </div>
                        <div className="text-left">
                            <p className="text-xs font-bold text-white">Utilisateur</p>
                            <p className="text-[10px] text-gray-400">Compte Local</p>
                        </div>
                    </div>
                    <button className="p-2 hover:bg-red-500/20 hover:text-red-400 rounded-lg text-gray-400 transition-colors">
                        <Power size={18} />
                    </button>
                </div>
            </div>
        </div>

        {/* Dock / Taskbar */}
        <div className="h-16 px-4 bg-slate-900/60 backdrop-blur-2xl border border-white/10 rounded-2xl flex items-center gap-2 shadow-2xl relative z-50">
            
            <button 
                id="start-btn"
                onClick={() => setStartMenuOpen(!startMenuOpen)} 
                className="p-2 rounded-xl hover:bg-white/10 transition-colors mr-2 group relative"
            >
                <LayoutGrid size={24} className={`text-blue-400 transition-transform duration-300 ${startMenuOpen ? 'rotate-180' : ''}`} />
            </button>

            <div className="w-px h-8 bg-white/10 mx-1"></div>

            {/* Pinned / Open Apps */}
            {windows.filter(w => w.zIndex > -1).slice(0, 8).map(win => (
                <div key={win.id} className="relative group">
                    <button 
                        onClick={() => toggleWindow(win.id)}
                        className={`w-10 h-10 flex items-center justify-center rounded-xl transition-all duration-300 ${win.isOpen ? 'bg-white/10 shadow-inner' : 'hover:bg-white/5'} ${activeWindowId === win.id ? 'ring-1 ring-blue-400/50' : ''}`}
                    >
                        {win.icon}
                    </button>
                    {win.isOpen && (
                        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-400 rounded-full"></div>
                    )}
                    {/* Tooltip */}
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-black/80 text-xs text-white rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-white/10">
                        {win.title}
                    </div>
                </div>
            ))}

        </div>
      </div>
    </div>
  );
};

export default App;