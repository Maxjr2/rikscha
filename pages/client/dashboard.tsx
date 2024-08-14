import React from 'react';
import { useSession } from 'next-auth/react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Calendar, Clock, MapPin, CreditCard } from 'lucide-react';

const mockRideData = [
  { date: '2024-08-01', rides: 3 },
  { date: '2024-08-02', rides: 2 },
  { date: '2024-08-03', rides: 4 },
  { date: '2024-08-04', rides: 1 },
  { date: '2024-08-05', rides: 5 },
  { date: '2024-08-06', rides: 2 },
  { date: '2024-08-07', rides: 3 },
];

const ClientDashboard = () => {
  const { data: session } = useSession();

  if (!session) {
    return <div>Please log in to view your dashboard.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Welcome, {session.user.name}</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Total Rides</CardTitle>
              <Calendar className="h-4 w-4 text-gray-400" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">28</div>
            <p className="text-xs text-gray-500">+2 from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Average Ride Duration</CardTitle>
              <Clock className="h-4 w-4 text-gray-400" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">23 min</div>
            <p className="text-xs text-gray-500">-2 min from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Most Common Destination</CardTitle>
              <MapPin className="h-4 w-4 text-gray-400" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Central Station</div>
            <p className="text-xs text-gray-500">8 rides this month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Total Spent</CardTitle>
              <CreditCard className="h-4 w-4 text-gray-400" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">€342.50</div>
            <p className="text-xs text-gray-500">+€50.75 from last month</p>
          </CardContent>
        </Card>
      </div>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Ride History</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={mockRideData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="rides" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Recent Rides</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="divide-y divide-gray-200">
            <li className="py-4">
              <div className="flex items-center space-x-4">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    Airport to Home
                  </p>
                  <p className="text-sm text-gray-500">
                    August 12, 2024 - 45 minutes
                  </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900">
                  €32.50
                </div>
              </div>
            </li>
            <li className="py-4">
              <div className="flex items-center space-x-4">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    Home to Central Station
                  </p>
                  <p className="text-sm text-gray-500">
                    August 10, 2024 - 20 minutes
                  </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900">
                  €15.75
                </div>
              </div>
            </li>
            <li className="py-4">
              <div className="flex items-center space-x-4">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    Shopping Mall to Home
                  </p>
                  <p className="text-sm text-gray-500">
                    August 8, 2024 - 30 minutes
                  </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900">
                  €22.00
                </div>
              </div>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default ClientDashboard;