
import React from 'react';
import { Globe, FileText, Users, Shield, Download } from 'lucide-react';

export const AVAILABLE_PERMISSIONS = [
    { id: 'audit:create', label: 'Create Audits', icon: <Globe size={14} /> },
    { id: 'audit:view', label: 'View All Audits', icon: <FileText size={14} /> },
    { id: 'user:manage', label: 'Manage Users', icon: <Users size={14} /> },
    { id: 'role:manage', label: 'Manage Roles', icon: <Shield size={14} /> },
    { id: 'report:export', label: 'Export Reports', icon: <Download size={14} /> },
    { id: 'marketing:view', label: 'Access Marketing', icon: <Globe size={14} /> },
    { id: 'settings:manage', label: 'Manage Settings', icon: <Shield size={14} /> },
    { id: 'system:manage', label: 'System Maintenance', icon: <Shield size={14} /> }
];

export const PERMISSION_IDS = AVAILABLE_PERMISSIONS.map(p => p.id);
