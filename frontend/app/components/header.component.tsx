import React from 'react';

interface HeaderProps {
  importCVs: (source: string) => void;
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

const Header: React.FC<HeaderProps> = ({ importCVs, searchTerm, setSearchTerm }) => {
  return (
    <header>
      <h1>CROP (Common Recruitment Online Portal)</h1>
      <div className="button-container">
        <button className="import-btn" onClick={() => importCVs('LinkedIn')}>Import CV from LinkedIn</button>
        <button className="import-btn" onClick={() => importCVs('Naukri')}>Import CV from Naukri</button>
        <button className="import-btn" onClick={() => importCVs('Email')}>Import CV from Email</button>
        <button className="import-btn" onClick={() => importCVs('Disk')}>Import CV from Disk</button>
      </div>
      <input 
        type="text" 
        placeholder="Filter/Search Bar" 
        value={searchTerm}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
      />
    </header>
  );
}

export default Header;