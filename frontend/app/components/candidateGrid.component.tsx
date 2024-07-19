import React from 'react';
import CandidateCard from './candidateCard.component';
import { Candidate } from '../types/candidate.type';



interface CandidateGridProps {
  candidates: Candidate[];
}

const CandidateGrid: React.FC<CandidateGridProps> = ({ candidates }) => {
  return (
    <div className="candidate-grid">
      {candidates.map((candidate, index) => (
        <CandidateCard key={index} candidate={candidate} />
      ))}
    </div>
  );
}

export default CandidateGrid;