import React, { createContext, useState, useContext, useEffect } from 'react';
import api from '../services/api';
import toast from 'react-hot-toast';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        checkUser();
    }, []);

    const checkUser = async () => {
        const token = localStorage.getItem('token');
        if (!token) {
            setLoading(false);
            return;
        }

        try {
            const res = await api.get('/auth/me');
            if (res.data.success) {
                setUser(res.data.data);
            }
        } catch (error) {
            localStorage.removeItem('token');
            setUser(null);
        } finally {
            setLoading(false);
        }
    };

    const signup = async (userData) => {
        try {
            const res = await api.post('/auth/signup', userData);
            if (res.data.success) {
                localStorage.setItem('token', res.data.token);
                await checkUser();
                toast.success('Account created successfully!');
                return true;
            }
        } catch (error) {
            toast.error(error.response?.data?.message || 'Signup failed');
            return false;
        }
    };

    const login = async (credentials) => {
        try {
            const res = await api.post('/auth/login', credentials);
            if (res.data.success) {
                localStorage.setItem('token', res.data.token);
                await checkUser();
                toast.success('Welcome back!');
                return res.data.data || true;
            }
        } catch (error) {
            toast.error(error.response?.data?.message || 'Login failed');
            return false;
        }
    };

    const logout = async () => {
        try {
            await api.get('/auth/logout');
            localStorage.removeItem('token');
            setUser(null);
            toast.success('Logged out');
            window.location.href = '/';
        } catch (error) {
            toast.error('Logout failed');
        }
    };

    const hasPermission = (permission) => {
        if (!user) return false;
        if (user.role === 'admin') return true; // Super-admin fallback
        return user.assignedRole?.permissions?.includes(permission) || false;
    };

    return (
        <AuthContext.Provider value={{ user, loading, signup, login, logout, hasPermission }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
