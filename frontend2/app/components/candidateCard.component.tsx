import React from 'react';
import { Candidate } from '../types/candidate.type';

interface CandidateCardProps {
  candidate: Candidate;
}

const CandidateCard: React.FC<CandidateCardProps> = ({ candidate }) => {
  const scheduleInterview = (name: string, phone: string): void => {
    alert(`Schedule interview for ${name} at ${phone}`);
    // Implement interview scheduling logic here
  };

  const sendWhatsApp = (name: string, phone: string): void => {
    alert(`Send WhatsApp message to ${name} at ${phone}`);
    // Implement WhatsApp messaging logic here
  };

  return (
    <div className="candidate-card">
      <h3>{candidate.name}</h3>
      <p>Source: {candidate.source}</p>
      <p>Phone: {candidate.phone}</p>
      <div className="contact-icons">
        <button onClick={() => scheduleInterview(candidate.name, candidate.phone)}>📞</button>
        <button onClick={() => sendWhatsApp(candidate.name, candidate.phone)}>💬</button>
      </div>
    </div>
  );
}

export default CandidateCard;