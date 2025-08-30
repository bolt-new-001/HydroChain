import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { 
  BarChart3, 
  Settings, 
  Users, 
  Factory, 
  Shield, 
  ShoppingCart, 
  FileText,
  TrendingUp,
  AlertCircle,
  CheckCircle,
  Clock,
  DollarSign
} from 'lucide-react';

const RoleBasedDashboard = () => {
  const { user } = useAuth();

  const renderProducerDashboard = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Production Metrics */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">Monthly Production</p>
            <p className="text-2xl font-bold text-gray-900">1,250 kg</p>
            <p className="text-sm text-green-600">+12% from last month</p>
          </div>
          <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center">
            <TrendingUp className="h-6 w-6 text-green-600" />
          </div>
        </div>
      </div>

      {/* Credits Issued */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">Credits Issued</p>
            <p className="text-2xl font-bold text-gray-900">847</p>
            <p className="text-sm text-blue-600">Verified: 823</p>
          </div>
          <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center">
            <CheckCircle className="h-6 w-6 text-blue-600" />
          </div>
        </div>
      </div>

      {/* Facility Status */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">Facility Status</p>
            <p className="text-2xl font-bold text-gray-900">Operational</p>
            <p className="text-sm text-green-600">98.5% uptime</p>
          </div>
          <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center">
            <Factory className="h-6 w-6 text-green-600" />
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="md:col-span-2 lg:col-span-3 bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
        <div className="space-y-3">
          <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
            <CheckCircle className="h-5 w-5 text-green-600" />
            <div>
              <p className="text-sm font-medium text-gray-900">50 credits verified</p>
              <p className="text-xs text-gray-500">2 hours ago</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
            <Clock className="h-5 w-5 text-blue-600" />
            <div>
              <p className="text-sm font-medium text-gray-900">Production report submitted</p>
              <p className="text-xs text-gray-500">5 hours ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderVerifierDashboard = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Pending Verifications */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">Pending Verifications</p>
            <p className="text-2xl font-bold text-gray-900">23</p>
            <p className="text-sm text-orange-600">Requires attention</p>
          </div>
          <div className="h-12 w-12 bg-orange-100 rounded-lg flex items-center justify-center">
            <Clock className="h-6 w-6 text-orange-600" />
          </div>
        </div>
      </div>

      {/* Verified Credits */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">Verified This Month</p>
            <p className="text-2xl font-bold text-gray-900">1,456</p>
            <p className="text-sm text-green-600">+8% from last month</p>
          </div>
          <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center">
            <Shield className="h-6 w-6 text-green-600" />
          </div>
        </div>
      </div>

      {/* Rejection Rate */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">Rejection Rate</p>
            <p className="text-2xl font-bold text-gray-900">2.3%</p>
            <p className="text-sm text-red-600">Quality maintained</p>
          </div>
          <div className="h-12 w-12 bg-red-100 rounded-lg flex items-center justify-center">
            <AlertCircle className="h-6 w-6 text-red-600" />
          </div>
        </div>
      </div>
    </div>
  );

  const renderBuyerDashboard = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Available Credits */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">Available Credits</p>
            <p className="text-2xl font-bold text-gray-900">5,432</p>
            <p className="text-sm text-blue-600">Ready to purchase</p>
          </div>
          <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center">
            <ShoppingCart className="h-6 w-6 text-blue-600" />
          </div>
        </div>
      </div>

      {/* Purchased Credits */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">Purchased Credits</p>
            <p className="text-2xl font-bold text-gray-900">892</p>
            <p className="text-sm text-green-600">This quarter</p>
          </div>
          <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center">
            <CheckCircle className="h-6 w-6 text-green-600" />
          </div>
        </div>
      </div>

      {/* Total Spent */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">Total Spent</p>
            <p className="text-2xl font-bold text-gray-900">$45,230</p>
            <p className="text-sm text-purple-600">This year</p>
          </div>
          <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center">
            <DollarSign className="h-6 w-6 text-purple-600" />
          </div>
        </div>
      </div>
    </div>
  );

  const renderRegulatorDashboard = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Total Transactions */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">Total Transactions</p>
            <p className="text-2xl font-bold text-gray-900">12,456</p>
            <p className="text-sm text-blue-600">This month</p>
          </div>
          <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center">
            <BarChart3 className="h-6 w-6 text-blue-600" />
          </div>
        </div>
      </div>

      {/* Compliance Rate */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">Compliance Rate</p>
            <p className="text-2xl font-bold text-gray-900">97.8%</p>
            <p className="text-sm text-green-600">Above target</p>
          </div>
          <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center">
            <Shield className="h-6 w-6 text-green-600" />
          </div>
        </div>
      </div>

      {/* Active Facilities */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">Active Facilities</p>
            <p className="text-2xl font-bold text-gray-900">156</p>
            <p className="text-sm text-purple-600">Monitored</p>
          </div>
          <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center">
            <Factory className="h-6 w-6 text-purple-600" />
          </div>
        </div>
      </div>
    </div>
  );

  const renderAdminDashboard = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Total Users */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">Total Users</p>
            <p className="text-2xl font-bold text-gray-900">1,234</p>
            <p className="text-sm text-green-600">+15 this week</p>
          </div>
          <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center">
            <Users className="h-6 w-6 text-green-600" />
          </div>
        </div>
      </div>

      {/* System Health */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">System Health</p>
            <p className="text-2xl font-bold text-gray-900">99.9%</p>
            <p className="text-sm text-green-600">All systems operational</p>
          </div>
          <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center">
            <CheckCircle className="h-6 w-6 text-green-600" />
          </div>
        </div>
      </div>

      {/* Revenue */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">Platform Revenue</p>
            <p className="text-2xl font-bold text-gray-900">$125K</p>
            <p className="text-sm text-purple-600">This month</p>
          </div>
          <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center">
            <DollarSign className="h-6 w-6 text-purple-600" />
          </div>
        </div>
      </div>

      {/* Active Transactions */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">Active Transactions</p>
            <p className="text-2xl font-bold text-gray-900">89</p>
            <p className="text-sm text-orange-600">In progress</p>
          </div>
          <div className="h-12 w-12 bg-orange-100 rounded-lg flex items-center justify-center">
            <Clock className="h-6 w-6 text-orange-600" />
          </div>
        </div>
      </div>
    </div>
  );

  const renderRoleSpecificContent = () => {
    switch (user.role) {
      case 'producer':
        return renderProducerDashboard();
      case 'verifier':
        return renderVerifierDashboard();
      case 'buyer':
        return renderBuyerDashboard();
      case 'regulator':
        return renderRegulatorDashboard();
      case 'admin':
        return renderAdminDashboard();
      default:
        return (
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <p className="text-gray-600">Welcome to GreenChain! Your role-specific dashboard is being prepared.</p>
          </div>
        );
    }
  };

  return (
    <div className="space-y-6">
      {/* Role-specific header */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          {user.role.charAt(0).toUpperCase() + user.role.slice(1)} Dashboard
        </h2>
        <p className="text-gray-600">
          Manage your {user.role === 'admin' ? 'system administration' : 
                      user.role === 'producer' ? 'hydrogen production' :
                      user.role === 'verifier' ? 'verification tasks' :
                      user.role === 'buyer' ? 'credit purchases' :
                      'regulatory oversight'} activities
        </p>
      </div>

      {/* Role-specific content */}
      {renderRoleSpecificContent()}
    </div>
  );
};

export default RoleBasedDashboard;