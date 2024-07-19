// server.js
import express from 'express';
import axios from 'axios';
import cors from 'cors';
require('dotenv').config();

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

const CLIENT_ID = process.env.LINKEDIN_CLIENT_ID;
const CLIENT_SECRET = process.env.LINKEDIN_CLIENT_SECRET;
const REDIRECT_URI = process.env.LINKEDIN_REDIRECT_URI;

app.get('/api/linkedin/auth', (req, res) => {
  const authUrl = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=r_liteprofile%20r_emailaddress%20rw_organization_admin`;
  res.json({ authUrl });
});

app.get('/api/linkedin/callback', async (req, res) => {
  const { code } = req.query;

  try {
    const tokenResponse = await axios.post('https://www.linkedin.com/oauth/v2/accessToken', null, {
      params: {
        grant_type: 'authorization_code',
        code,
        redirect_uri: REDIRECT_URI,
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
      },
    });

    const accessToken = tokenResponse.data.access_token;

    // Fetch LinkedIn profiles (this is a simplified example)
    const profilesResponse = await axios.get('https://api.linkedin.com/v2/recruiterSearchProfiles', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    // Process and send the profiles back to the client
    res.json(profilesResponse.data);
  } catch (error) {
    console.error('Error in LinkedIn API process:', error);
    res.status(500).json({ error: 'An error occurred during the LinkedIn import process' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});