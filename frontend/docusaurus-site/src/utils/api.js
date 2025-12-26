export const signup = async (backendUrl, email, password) => {
  const response = await fetch(`${backendUrl}/auth/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });
  return response;
};

export const signin = async (backendUrl, email, password) => {
  const response = await fetch(`${backendUrl}/auth/jwt/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({ username: email, password }).toString(),
  });
  return response;
};

export const logout = async (backendUrl) => {
  const token = localStorage.getItem('access_token');
  const response = await fetch(`${backendUrl}/auth/jwt/logout`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });
  if (response.ok) {
    localStorage.removeItem('access_token');
  }
  return response;
};

export const fetchUserProfile = async (backendUrl) => {
  const token = localStorage.getItem('access_token');
  if (!token) {
    return null;
  }
  const response = await fetch(`${backendUrl}/users/me`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });
  if (response.ok) {
    return response.json();
  }
  return null;
};

export const updateUserProfile = async (backendUrl, backgroundData) => {
  const token = localStorage.getItem('access_token');
  if (!token) {
    throw new Error('No access token found.');
  }
  const response = await fetch(`${backendUrl}/users/me`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify({ background_data: backgroundData }),
  });
  return response;
};