require('dotenv').config();

// OAuth 2.0 Authentication
const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;
const redirectUri = process.env.REDIRECT_URI;
const state = 'randomStringForSecurity';

function getAuthorizationCode() {
  const authUrl = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&state=${state}&scope=r_liteprofile%20r_emailaddress%20w_member_social`;
  document.getElementById('oauthFrame').src = authUrl;
}

function fetchAccessToken(code) {
  const tokenUrl = 'https://www.linkedin.com/oauth/v2/accessToken';
  const data = {
    grant_type: 'authorization_code',
    code: code,
    redirect_uri: redirectUri,
    client_id: clientId,
    client_secret: clientSecret
  };

  fetch(tokenUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams(data)
  })
  .then(response => response.json())
  .then(data => {
    if (data.access_token) {
      fetchLinkedInProfile(data.access_token);
    } else {
      console.error('Error fetching access token:', data);
    }
  })
  .catch(error => console.error('Error:', error));
}

function fetchLinkedInProfile(accessToken) {
  fetch('https://api.linkedin.com/v2/me', {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${accessToken}`
    }
  })
  .then(response => response.json())
  .then(data => {
    console.log('LinkedIn Profile:', data);
    // Process and display LinkedIn profile data here
  })
  .catch(error => console.error('Error fetching LinkedIn profile:', error));
}

// Function to import CVs from LinkedIn
function importCVsFromLinkedIn() {
  getAuthorizationCode();
}