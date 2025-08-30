import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Configure axios defaults
  axios.defaults.withCredentials = true;
  axios.defaults.baseURL = '/api';

  // Check authentication status on mount
  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    try {
      const token = localStorage.getItem('token');
      if (token) {
        const response = await axios.get('/auth/profile');
        if (response.data.success) {
          setUser(response.data.data.user);
          setIsAuthenticated(true);
        } else {
          localStorage.removeItem('token');
        }
      }
    } catch (error) {
      localStorage.removeItem('token');
    } finally {
      setLoading(false);
    }
  };

  const signup = async (userData) => {
    try {
      const response = await axios.post('/auth/signup', userData);
      if (response.data.success) {
        toast.success('Registration successful! Please check your email for verification.');
        return { success: true, data: response.data.data };
      }
    } catch (error) {
      const message = error.response?.data?.message || 'Registration failed. Please try again.';
      toast.error(message);
      throw error;
    }
  };

  const verifyOTP = async (email, otp) => {
    try {
      const response = await axios.post('/auth/verify-otp', { email, otp });
      if (response.data.success) {
        const { user: userData, token } = response.data.data;
        setUser(userData);
        setIsAuthenticated(true);
        localStorage.setItem('token', token);
        toast.success('Email verified successfully!');
        return { success: true, data: response.data.data };
      }
    } catch (error) {
      const message = error.response?.data?.message || 'OTP verification failed. Please try again.';
      toast.error(message);
      throw error;
    }
  };

  const login = async (email, password) => {
    try {
      const response = await axios.post('/auth/login', { email, password });
      if (response.data.success) {
        const { user: userData, token } = response.data.data;
        setUser(userData);
        setIsAuthenticated(true);
        localStorage.setItem('token', token);
        toast.success('Login successful!');
        return { success: true, data: response.data.data };
      }
    } catch (error) {
      const message = error.response?.data?.message || 'Login failed. Please check your credentials.';
      toast.error(message);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await axios.post('/auth/logout');
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      setUser(null);
      setIsAuthenticated(false);
      localStorage.removeItem('token');
      toast.success('Logged out successfully');
    }
  };

  const forgotPassword = async (email) => {
    try {
      const response = await axios.post('/auth/forgot-password', { email });
      if (response.data.success) {
        toast.success('Password reset link sent to your email!');
        return { success: true };
      }
    } catch (error) {
      const message = error.response?.data?.message || 'Failed to send reset link. Please try again.';
      toast.error(message);
      throw error;
    }
  };

  const resetPassword = async (token, password) => {
    try {
      const response = await axios.post(`/auth/reset-password/${token}`, { password });
      if (response.data.success) {
        toast.success('Password reset successfully! You can now login with your new password.');
        return { success: true };
      }
    } catch (error) {
      const message = error.response?.data?.message || 'Password reset failed. Please try again.';
      toast.error(message);
      throw error;
    }
  };

  const resendOTP = async (email) => {
    try {
      const response = await axios.post('/auth/resend-otp', { email });
      if (response.data.success) {
        toast.success('New OTP sent to your email!');
        return { success: true };
      }
    } catch (error) {
      const message = error.response?.data?.message || 'Failed to resend OTP. Please try again.';
      toast.error(message);
      throw error;
    }
  };

  const updateProfile = async (profileData) => {
    try {
      const response = await axios.put('/auth/profile', profileData);
      if (response.data.success) {
        setUser(response.data.data.user);
        toast.success('Profile updated successfully!');
        return { success: true, data: response.data.data };
      }
    } catch (error) {
      const message = error.response?.data?.message || 'Profile update failed. Please try again.';
      toast.error(message);
      throw error;
    }
  };

  const value = {
    user,
    loading,
    isAuthenticated,
    signup,
    verifyOTP,
    login,
    logout,
    forgotPassword,
    resetPassword,
    resendOTP,
    updateProfile,
    checkAuthStatus
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

