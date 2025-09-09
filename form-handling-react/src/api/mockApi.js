// Mock API function to simulate user registration
export const registerUser = async (userData) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Simulate validation: reject if username is 'admin' (for demo purposes)
  if (userData.username.toLowerCase() === 'admin') {
    throw new Error('Username "admin" is not allowed');
  }

  // Simulate successful registration
  return {
    id: Date.now(), // Mock user ID
    ...userData,
    registeredAt: new Date().toISOString()
  };
};
