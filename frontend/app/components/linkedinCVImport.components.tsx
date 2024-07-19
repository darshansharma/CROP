// LinkedInCVImport.tsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface LinkedInCVImportProps {
  onImportSuccess: (cvs: any[]) => void;
}

const LinkedInCVImport: React.FC<LinkedInCVImportProps> = ({ onImportSuccess }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleImportClick = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get('http://localhost:8000/api/linkedin/auth');
      window.location.href = response.data.authUrl;
    } catch (error) {
      console.error('Error initiating LinkedIn auth:', error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    
    if (code) {
      (async () => {
        try {
          const response = await axios.get(`http://localhost:8000/api/linkedin/callback?code=${code}`);
          onImportSuccess(response.data);
        } catch (error) {
          console.error('Error in LinkedIn CV import process:', error);
        } finally {
          setIsLoading(false);
        }
      })();
    }
  }, [onImportSuccess]);

  return (
    <button onClick={handleImportClick} disabled={isLoading}>
      {isLoading ? 'Importing...' : 'Import CV from LinkedIn'}
    </button>
  );
};

export default LinkedInCVImport;