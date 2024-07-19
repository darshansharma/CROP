// App.tsx
import React, { useState } from 'react';
import Header from './components/header.component';
import CandidateGrid from './components/candidateGrid.component';
import FeedbackSection from './components/feedback.component';
import './home.css';
import { Candidate } from './types/candidate.type';



const initialCandidates: Candidate[] = [
  { name: "John Doe", source: "LinkedIn", phone: "123-456" },
  { name: "Jane Smith", source: "Naukri", phone: "789-012" },
  { name: "Bob Lee", source: "Email", phone: "345-678" },
  { name: "Alice Brown", source: "Company Website", phone: "234-567" },
  { name: "Charlie Black", source: "Referral", phone: "456-789" },
];

const App: React.FC = () => {
  const [candidates, setCandidates] = useState<Candidate[]>(initialCandidates);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const importCVs = (source: string): void => {
    const newCandidates: Candidate[] = [
      { name: `${source} Candidate 1`, source, phone: "555-111" },
      { name: `${source} Candidate 2`, source, phone: "555-222" }
    ];
    setCandidates([...candidates, ...newCandidates]);
  };

  const filteredCandidates = candidates.filter(candidate =>
    candidate.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    candidate.source.toLowerCase().includes(searchTerm.toLowerCase()) ||
    candidate.phone.includes(searchTerm)
  );

  return (
    <div className="container">
      <Header 
        importCVs={importCVs} 
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm} 
      />
      <main>
        <CandidateGrid candidates={filteredCandidates} />
      </main>
      <FeedbackSection />
    </div>
  );
}

export default App;