'use client';

import { 
  Search, 
  ChevronDown, 
  BarChart3, 
  Users, 
  BookOpen, 
  Settings, 
  HelpCircle, 
  MessageSquare,
  TrendingUp,
  TrendingDown,
  Clock,
  AlertTriangle,
  CheckCircle,
  MoreHorizontal,
  Filter,
  Calendar,
  User,
  FileText,
  Star,
  Menu,
  Grid3X3,
  Ticket,
  Puzzle,
  ChevronRight,
  Zap,
  Timer
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, LineChart, Line } from 'recharts';

const ticketVolumeData = [
  { day: 'Sun', tickets: 420 },
  { day: 'Mon', tickets: 580 },
  { day: 'Tue', tickets: 584 },
  { day: 'Wed', tickets: 650 },
  { day: 'Thu', tickets: 720 },
  { day: 'Fri', tickets: 680 },
  { day: 'Sat', tickets: 550 }
];

const kpiTrendData = [
  { value: 3200 },
  { value: 3300 },
  { value: 3400 },
  { value: 3484 }
];

const slaTrendData = [
  { value: 94 },
  { value: 93 },
  { value: 92.5 },
  { value: 92 }
];

const resolutionTrendData = [
  { value: 450 },
  { value: 470 },
  { value: 480 },
  { value: 486 }
];

const activities = [
  { time: '11:20 AM', type: 'Ticket Updated', description: 'Ticket #2319 SLA updated', icon: FileText },
  { time: '11:15 AM', type: 'New Client Added', description: 'PT. Alpha Indonesia registered', icon: User },
  { time: '11:00 AM', type: 'Agent Reassigned', description: 'Ticket #2322 moved to Michael Wong', icon: Users },
  { time: '10:45 AM', type: 'SLA Breach Risk', description: 'Ticket #2320 "Login issue"', icon: AlertTriangle },
  { time: '10:30 AM', type: 'Knowledge Base', description: 'New article published: "Login Troubleshooting"', icon: BookOpen },
  { time: '10:30 AM', type: 'Customer Feedback', description: '"Great support response, thanks Sarah!"', icon: Star }
];

const slaTickets = [
  { id: '#2319', subject: 'Payment failed on invoice', priority: 'High', assignedTo: 'John Doe', status: 'In Review', createdDate: '2025-08-18', slaDue: '2h left', avatar: 'JD' },
  { id: '#2320', subject: 'Login issue', priority: 'Medium', assignedTo: 'Sarah Lee', status: 'Delivered', createdDate: '2025-08-19', slaDue: '1h left', avatar: 'SL' },
  { id: '#2321', subject: 'Feature request export', priority: 'Low', assignedTo: 'John Doe', status: 'In Progress', createdDate: '2025-08-19', slaDue: '1d left', avatar: 'JD' },
  { id: '#2322', subject: 'Contract renewal issue', priority: 'Medium', assignedTo: 'Michael Wong', status: 'In Progress', createdDate: '2025-08-20', slaDue: '9h left', avatar: 'MW' }
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">K</span>
              </div>
              <span className="text-xl font-semibold text-gray-900">Kravio</span>
            </div>
            <Menu className="w-5 h-5 text-gray-600" />
          </div>
        </div>

        {/* Search */}
        <div className="p-4 border-b border-gray-200">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Q Search anything"
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs text-gray-400">⌘K</div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex-1 p-4">
          <nav className="space-y-2">
            <div className="bg-blue-50 text-blue-700 px-3 py-2 rounded-lg flex items-center space-x-2">
              <Grid3X3 className="w-4 h-4" />
              <span className="font-medium">Overview</span>
            </div>
            
            <div className="space-y-1">
              <div className="flex items-center justify-between px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg cursor-pointer">
                <div className="flex items-center space-x-2">
                  <Ticket className="w-4 h-4" />
                  <span>Tickets</span>
                </div>
                <ChevronDown className="w-4 h-4" />
              </div>
              <div className="ml-6 space-y-1">
                <div className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-50 rounded cursor-pointer">All / My Queue</div>
                <div className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-50 rounded cursor-pointer">SLA Breach Risk</div>
                <div className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-50 rounded cursor-pointer">Escalations</div>
              </div>
            </div>

            <div className="px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg cursor-pointer flex items-center space-x-2">
              <Users className="w-4 h-4" />
              <span>Clients</span>
            </div>

            <div className="space-y-1">
              <div className="flex items-center justify-between px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg cursor-pointer">
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4" />
                  <span>Agents & Teams</span>
                </div>
                <ChevronDown className="w-4 h-4" />
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex items-center justify-between px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg cursor-pointer">
                <div className="flex items-center space-x-2">
                  <BookOpen className="w-4 h-4" />
                  <span>Knowledge Base</span>
                </div>
                <ChevronDown className="w-4 h-4" />
              </div>
            </div>

            <div className="px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg cursor-pointer flex items-center space-x-2">
              <Puzzle className="w-4 h-4" />
              <span>Integrations</span>
            </div>
          </nav>

          {/* Analytics & Insights */}
          <div className="mt-8">
            <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Analytics & Insights</h3>
            <nav className="space-y-1">
              <div className="px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg cursor-pointer flex items-center space-x-2">
                <BarChart3 className="w-4 h-4" />
                <span>SLA Compliance</span>
              </div>
              <div className="px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg cursor-pointer flex items-center space-x-2">
                <Star className="w-4 h-4" />
                <span>CSAT & NPS</span>
              </div>
              <div className="px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg cursor-pointer flex items-center space-x-2">
                <BarChart3 className="w-4 h-4" />
                <span>Workload Analytics</span>
              </div>
              <div className="px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg cursor-pointer flex items-center space-x-2">
                <FileText className="w-4 h-4" />
                <span>Reports</span>
              </div>
            </nav>
          </div>

          {/* Support */}
          <div className="mt-8">
            <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Support</h3>
            <nav className="space-y-1">
              <div className="px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg cursor-pointer flex items-center space-x-2">
                <MessageSquare className="w-4 h-4" />
                <span>Feedback</span>
              </div>
              <div className="px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg cursor-pointer flex items-center space-x-2">
                <HelpCircle className="w-4 h-4" />
                <span>Help & Support</span>
              </div>
              <div className="px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg cursor-pointer flex items-center space-x-2">
                <Settings className="w-4 h-4" />
                <span>Settings</span>
              </div>
            </nav>
          </div>
        </div>

        {/* User Profile */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">AH</span>
              </div>
              <div>
                <div className="text-sm font-medium text-gray-900">Achmad Hakim</div>
                <div className="text-xs text-gray-500">achmadhakim@gmail.com</div>
              </div>
            </div>
            <ChevronDown className="w-4 h-4 text-gray-600" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <span>88</span>
              <ChevronRight className="w-4 h-4" />
              <span>Overview</span>
              <ChevronRight className="w-4 h-4" />
              <span className="text-gray-900 font-medium">Dashboard</span>
            </div>
            <div className="flex items-center space-x-3">
              <select className="px-3 py-1 border border-gray-200 rounded-md text-sm">
                <option>Last week</option>
              </select>
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <MoreHorizontal className="w-4 h-4 text-gray-600" />
              </button>
            </div>
          </div>
          <h1 className="text-2xl font-semibold text-gray-900">Hello, Achmad Hakim 👋</h1>
          <p className="text-gray-600 mt-1">Here are the latest insights from your customer interactions.</p>
        </div>

        {/* Dashboard Content */}
        <div className="flex-1 p-6 space-y-6">
          {/* KPI Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Current Tickets */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 relative">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-sm font-medium text-gray-600">Current Tickets</h3>
                <Ticket className="w-5 h-5 text-gray-400" />
              </div>
              <div className="flex items-end justify-between">
                <div className="flex-1">
                  <div className="text-3xl font-bold text-gray-900 mb-2">3,484</div>
                  <div className="flex items-center text-sm">
                    <span className="text-green-600 font-medium">+7.1%</span>
                    <span className="text-gray-500 ml-2">vs. last week</span>
                  </div>
                </div>
                <div className="w-16 h-12 ml-4">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={kpiTrendData}>
                      <Line type="monotone" dataKey="value" stroke="#10b981" strokeWidth={2} dot={false} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            {/* Daily Avg Resolution */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 relative">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-sm font-medium text-gray-600">Daily Avg. Resolution</h3>
                <Zap className="w-5 h-5 text-gray-400" />
              </div>
              <div className="flex items-end justify-between">
                <div className="flex-1">
                  <div className="text-3xl font-bold text-gray-900 mb-2">486</div>
                  <div className="flex items-center text-sm">
                    <span className="text-green-600 font-medium">+2%</span>
                    <span className="text-gray-500 ml-2">vs. last week</span>
                  </div>
                </div>
                <div className="w-16 h-12 ml-4">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={resolutionTrendData}>
                      <Line type="monotone" dataKey="value" stroke="#10b981" strokeWidth={2} dot={false} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            {/* SLA Compliance Rate */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 relative">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-sm font-medium text-gray-600">SLA Compliance Rate</h3>
                <Timer className="w-5 h-5 text-gray-400" />
              </div>
              <div className="flex items-end justify-between">
                <div className="flex-1">
                  <div className="text-3xl font-bold text-gray-900 mb-2">92%</div>
                  <div className="flex items-center text-sm">
                    <span className="text-red-600 font-medium">-1.3%</span>
                    <span className="text-gray-500 ml-2">vs. last week</span>
                  </div>
                </div>
                <div className="w-16 h-12 ml-4">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={slaTrendData}>
                      <Line type="monotone" dataKey="value" stroke="#ef4444" strokeWidth={2} dot={false} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>

          {/* Charts and Updates */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Ticket Volume Trend */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Ticket Volume Trend</h3>
                <div className="text-sm text-gray-600">
                  <span className="font-medium">4,790</span> tickets
                  <span className="text-green-600 ml-2">+8% vs. last week</span>
                </div>
              </div>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={ticketVolumeData}>
                    <XAxis dataKey="day" axisLine={false} tickLine={false} />
                    <YAxis axisLine={false} tickLine={false} />
                    <Bar dataKey="tickets" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Latest Updates */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Latest Updates</h3>
                <div className="flex space-x-1">
                  <button className="px-3 py-1 bg-blue-100 text-blue-700 rounded-md text-sm font-medium">Today</button>
                  <button className="px-3 py-1 text-gray-600 rounded-md text-sm">Yesterday</button>
                  <button className="px-3 py-1 text-gray-600 rounded-md text-sm">This week</button>
                </div>
              </div>
              
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Q Search activities"
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="text-sm text-gray-600 mb-4">8 new activities today</div>

              <div className="space-y-4">
                {activities.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <activity.icon className="w-4 h-4 text-gray-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2">
                        <span className="text-sm font-medium text-gray-900">{activity.type}</span>
                        <span className="text-xs text-gray-500">{activity.time}</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">{activity.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* SLA Monitoring Table */}
          <div className="bg-white rounded-lg border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">SLA Monitoring</h3>
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="text"
                      placeholder="Q Ticket"
                      className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <button className="flex items-center space-x-2 px-3 py-2 border border-gray-200 rounded-lg text-sm hover:bg-gray-50">
                    <Filter className="w-4 h-4" />
                    <span>Filter</span>
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-lg">
                    <MoreHorizontal className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      <input type="checkbox" className="rounded border-gray-300" />
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      <div className="flex items-center space-x-1">
                        <span>Ticket ID</span>
                        <ChevronDown className="w-3 h-3" />
                      </div>
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      <div className="flex items-center space-x-1">
                        <span>Subject</span>
                        <ChevronDown className="w-3 h-3" />
                      </div>
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      <div className="flex items-center space-x-1">
                        <span>Priority</span>
                        <ChevronDown className="w-3 h-3" />
                      </div>
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      <div className="flex items-center space-x-1">
                        <span>Assigned To</span>
                        <ChevronDown className="w-3 h-3" />
                      </div>
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      <div className="flex items-center space-x-1">
                        <span>Status</span>
                        <ChevronDown className="w-3 h-3" />
                      </div>
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      <div className="flex items-center space-x-1">
                        <span>Created Date</span>
                        <ChevronDown className="w-3 h-3" />
                      </div>
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      <div className="flex items-center space-x-1">
                        <span>SLA Due</span>
                        <ChevronDown className="w-3 h-3" />
                      </div>
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {slaTickets.map((ticket, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <input type="checkbox" className="rounded border-gray-300" defaultChecked={index === 0} />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{ticket.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{ticket.subject}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center space-x-2">
                          <div className={`w-1 h-4 rounded ${
                            ticket.priority === 'High' ? 'bg-red-500' :
                            ticket.priority === 'Medium' ? 'bg-orange-500' :
                            'bg-yellow-500'
                          }`}></div>
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                            ticket.priority === 'High' ? 'bg-red-100 text-red-800' :
                            ticket.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-green-100 text-green-800'
                          }`}>
                            {ticket.priority}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center space-x-2">
                          <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs font-medium">{ticket.avatar}</span>
                          </div>
                          <span className="text-sm text-gray-900">{ticket.assignedTo}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center space-x-2">
                          {ticket.status === 'In Review' && <Clock className="w-4 h-4 text-blue-600" />}
                          {ticket.status === 'Delivered' && <CheckCircle className="w-4 h-4 text-green-600" />}
                          {ticket.status === 'In Progress' && <Clock className="w-4 h-4 text-yellow-600" />}
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                            ticket.status === 'In Review' ? 'bg-blue-100 text-blue-800' :
                            ticket.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                            'bg-yellow-100 text-yellow-800'
                          }`}>
                            {ticket.status}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{ticket.createdDate}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`text-sm font-medium ${
                          ticket.slaDue.includes('h left') && parseInt(ticket.slaDue) <= 2 ? 'text-red-600' :
                          ticket.slaDue.includes('h left') ? 'text-yellow-600' :
                          'text-green-600'
                        }`}>
                          {ticket.slaDue}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <button className="p-1 hover:bg-gray-100 rounded">
                          <MoreHorizontal className="w-4 h-4 text-gray-600" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
