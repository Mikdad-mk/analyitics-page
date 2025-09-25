'use client';

import React, { useState } from 'react';
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
  Check,
  MoreHorizontal,
  MoreVertical,
  Filter,
  Calendar,
  User,
  FileText,
  Star,
  Menu,
  Grid3X3,
  LayoutGrid,
  ClipboardList,
  Ticket,
  Puzzle,
  ChevronRight,
  Zap,
  Timer,
  Bell,
  PanelLeft
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, LineChart, Line, Cell } from 'recharts';

const ticketVolumeData = [
  { day: 'Sun', tickets: 420 },
  { day: 'Mon', tickets: 580 },
  { day: 'Tue', tickets: 584 },
  { day: 'Wed', tickets: 650 },
  { day: 'Thu', tickets: 720 },
  { day: 'Fri', tickets: 680 },
  { day: 'Sat', tickets: 550 },
  { day: 'Sun', tickets: 460 },
  { day: 'Mon', tickets: 600 },
  { day: 'Tue', tickets: 610 },
  { day: 'Wed', tickets: 670 },
  { day: 'Thu', tickets: 740 },
  { day: 'Fri', tickets: 690 },
  { day: 'Sat', tickets: 570 }
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

function getActivityStyle(type: string) {
  switch (type) {
    case 'Ticket Updated':
      return { bubbleBg: 'bg-blue-50', bubbleBorder: 'border-blue-200', icon: 'text-blue-600' };
    case 'New Client Added':
      return { bubbleBg: 'bg-emerald-50', bubbleBorder: 'border-emerald-200', icon: 'text-emerald-600' };
    case 'Agent Reassigned':
      return { bubbleBg: 'bg-purple-50', bubbleBorder: 'border-purple-200', icon: 'text-purple-600' };
    case 'SLA Breach Risk':
      return { bubbleBg: 'bg-red-50', bubbleBorder: 'border-red-200', icon: 'text-red-600' };
    case 'Knowledge Base':
      return { bubbleBg: 'bg-cyan-50', bubbleBorder: 'border-cyan-200', icon: 'text-cyan-700' };
    case 'Customer Feedback':
      return { bubbleBg: 'bg-amber-50', bubbleBorder: 'border-amber-200', icon: 'text-amber-600' };
    default:
      return { bubbleBg: 'bg-gray-50', bubbleBorder: 'border-gray-200', icon: 'text-gray-600' };
  }
}

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
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div className="min-h-screen bg-white flex flex-col md:flex-row">
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black/20 z-30 md:hidden" onClick={() => setIsSidebarOpen(false)} />
      )}
      {/* Sidebar */}
      <div className={`bg-gray-50 md:border-r border-b border-gray-200 flex flex-col md:static fixed inset-y-0 left-0 z-40 w-64 md:w-64 transform transition-transform duration-200 md:translate-x-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}> 
        {/* Logo */}
        <div className="p-4 bg-gray-100 border-b border-dashed border-gray-300">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">K</span>
              </div>
              <span className="text-xl font-semibold text-gray-900">Kravio</span>
            </div>
            <button className="p-2 rounded-lg hover:bg-gray-100 text-gray-600" onClick={() => setIsSidebarOpen(false)}>
              <PanelLeft className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Search */}
        <div className="p-4 bg-gray-100">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search anything"
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white placeholder:text-gray-500"
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs text-gray-400">⌘K</div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex-1 p-4 bg-gray-100">
          <nav className="space-y-2 ">
            <h3 className="text-[12px] font-semibold text-gray-500 uppercase tracking-wider mb-2">Main Navigation</h3>
            <div className="bg-white text-gray-900 px-3 py-2 rounded-lg flex items-center space-x-2 border border-gray-200 shadow-sm cursor-pointer" onClick={() => setIsSidebarOpen(false)}>
              <LayoutGrid className="w-4 h-4" />
              <span className="font-medium">Overview</span>
            </div>
            
            <div className="space-y-1">
              <div className="flex items-center justify-between px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg cursor-pointer">
                <div className="flex items-center space-x-2">
                  <Ticket className="w-4 h-4 rotate-[-30deg]" />
                  <span>Tickets</span>
                </div>
                <ChevronDown className="w-4 h-4" />
              </div>
              <div className="ml-4 pl-3 border-l border-gray-200 space-y-1">
                <div className="px-2 py-1 text-sm text-gray-600 hover:bg-gray-50 rounded cursor-pointer">All / My Queue</div>
                <div className="px-2 py-1 text-sm text-gray-600 hover:bg-gray-50 rounded cursor-pointer">SLA Breach Risk</div>
                <div className="px-2 py-1 text-sm text-gray-600 hover:bg-gray-50 rounded cursor-pointer">Escalations</div>
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
            <h3 className="text-[12px] font-semibold text-gray-500 uppercase tracking-wider mb-3">Analytics & Insights</h3>
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
            <h3 className="text-[12px] font-semibold text-gray-500 uppercase tracking-wider mb-3">Support</h3>
            <nav className="space-y-1">
              <div className="px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg cursor-pointer flex items-center space-x-2">
                <MessageSquare className="w-4 h-4" />
                <span>Feedback</span>
              </div>
              <div className="px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg cursor-pointer flex items-center space-x-2">
                <Bell className="w-4 h-4" />
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
        <div className="p-3  bg-gray-100 ">
          <div className="flex items-center justify-between bg-white  rounded-xl px-3 py-2 shadow-sm">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-700 text-sm font-medium">AH</div>
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
      <div className="flex-1 flex flex-col bg-white">
        {/* Header */}
        <div className="bg-white px-4 sm:px-6 py-3 sm:py-4">
          {/* Top row: breadcrumb + icons */}
          <div className="flex items-center justify-between">
            <div className="flex items-center text-sm text-gray-600">
              <LayoutGrid className="w-4 h-4 mr-2" />
              <span>Overview</span>
              <ChevronRight className="w-4 h-4 mx-2" />
              <span className="text-gray-900 font-medium">Dashboard</span>
            </div>
            <div className="flex items-center gap-2">
              <button className="md:hidden p-2 hover:bg-gray-100 rounded-lg text-gray-600" onClick={() => setIsSidebarOpen(true)}>
                <PanelLeft className="w-4 h-4" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg text-gray-600">
                <Bell className="w-4 h-4" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg text-gray-600">
                <Settings className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="mt-5 border-t border-dashed border-gray-200" />
          {/* Bottom row: title + controls */}
          <div className="mt-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div>
              <h1 className="text-xl sm:text-2xl font-semibold text-gray-900">Hello, Achmad Hakim <span role="img" aria-label="wave">👋</span></h1>
              <p className="text-gray-600 mt-1">Here are the latest insights from your customer interactions.</p>
            </div>
            <div className="flex items-center gap-2">
              <button className="flex items-center gap-2 text-sm text-gray-700 border border-gray-200 rounded-md px-3 py-2 bg-white">
                <Calendar className="w-4 h-4 text-gray-500" />
                <span>Last week</span>
                <ChevronDown className="w-4 h-4 text-gray-500" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg text-gray-600">
                <MoreVertical className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="flex-1 p-3 sm:p-4 md:p-6 space-y-4 sm:space-y-6 bg-white">
          {/* Main Grid: KPI Cards + Ticket Volume Trend + Latest Updates (Vertical Span) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-4 lg:gap-6 bg-transparent auto-rows-max">
            {/* Current Tickets */}
            <div className="bg-gray-100 rounded-xl border border-gray-200 p-2 shadow-sm flex flex-col h-auto sm:h-[160px] md:h-[180px] col-span-1">
              <div className="flex items-center justify-between mb-2 sm:mb-3 pl-2 sm:pl-3">
                <h3 className="text-xs sm:text-sm font-medium text-gray-700">Current Tickets</h3>
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-md flex items-center justify-center">
                  <Ticket className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500 rotate-[-30deg]" />
                </div>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 p-2 sm:p-3 flex-1 flex flex-col justify-end">
                <div className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 tracking-tight mb-1 sm:mb-2">3,484</div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-xs sm:text-sm">
                    <span className="text-emerald-600 font-semibold">+7.1%</span>
                    <span className="text-gray-500 ml-1 sm:ml-2 hidden sm:inline">vs last week</span>
                    <span className="text-gray-500 ml-1 sm:hidden">vs LW</span>
                  </div>
                  <div className="w-16 sm:w-20 h-6 sm:h-8 flex items-center justify-end">
                    <TrendingUp className="w-12 h-5 sm:w-14 sm:h-7 text-emerald-400" />
                  </div>
                </div>
              </div>
            </div>

            {/* Daily Avg Resolution */}
            <div className="bg-gray-100 rounded-xl border border-gray-200 p-2 shadow-sm flex flex-col h-auto sm:h-[160px] md:h-[180px] col-span-1">
              <div className="flex items-center justify-between mb-2 sm:mb-3 pl-2 sm:pl-3">
                <h3 className="text-xs sm:text-sm font-medium text-gray-700">Daily Avg. Resolution</h3>
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-md flex items-center justify-center">
                  <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500" />
                </div>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 p-2 sm:p-3 flex-1 flex flex-col justify-end">
                <div className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 tracking-tight mb-1 sm:mb-2">486</div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-xs sm:text-sm">
                    <span className="text-emerald-600 font-semibold">+2%</span>
                    <span className="text-gray-500 ml-1 sm:ml-2 hidden sm:inline">vs last week</span>
                    <span className="text-gray-500 ml-1 sm:hidden">vs LW</span>
                  </div>
                  <div className="w-16 sm:w-20 h-6 sm:h-8 flex items-center justify-end">
                    <TrendingUp className="w-12 h-5 sm:w-14 sm:h-7 text-emerald-400" />
                  </div>
                </div>
              </div>
            </div>

            {/* SLA Compliance Rate */}
            <div className="bg-gray-100 rounded-xl border border-gray-200 p-2 shadow-sm flex flex-col h-auto sm:h-[160px] md:h-[180px] col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-1">
              <div className="flex items-center justify-between mb-2 sm:mb-3 pl-2 sm:pl-3">
                <h3 className="text-xs sm:text-sm font-medium text-gray-700">SLA Compliance Rate</h3>
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-md flex items-center justify-center">
                  <Timer className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500" />
                </div>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 p-2 sm:p-3 flex-1 flex flex-col justify-end">
                <div className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 tracking-tight mb-1 sm:mb-2">92%</div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-xs sm:text-sm">
                    <span className="text-red-600 font-semibold">-1.3%</span>
                    <span className="text-gray-500 ml-1 sm:ml-2 hidden sm:inline">vs last week</span>
                    <span className="text-gray-500 ml-1 sm:hidden">vs LW</span>
                  </div>
                    <div className="w-16 sm:w-20 h-6 sm:h-8 flex items-center justify-end">
                      <TrendingDown className="w-12 h-5 sm:w-14 sm:h-7 text-red-400" />
                    </div>
                </div>
              </div>
            </div>

            {/* Latest Updates (Vertical Span - covers both rows) */}
            <div className="bg-gray-100 rounded-xl border border-gray-200 p-2 shadow-sm h-[280px] sm:h-[350px] md:h-[400px] lg:h-[655px] flex flex-col col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-1 lg:row-span-2">
              <div className="flex items-center justify-between mb-2 sm:mb-3 pl-2 sm:pl-3">
                <h3 className="text-xs sm:text-sm font-medium text-gray-700">Latest Updates</h3>
                <button className="p-1.5 sm:p-2 rounded-md hover:bg-gray-200/60 text-gray-600">
                  <ClipboardList className="w-3 h-3 sm:w-4 sm:h-4" />
                </button>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 p-2 sm:p-3 flex-1 flex flex-col overflow-hidden">
              <div className="mb-2 sm:mb-3 lg:mb-4">
                  <div className="grid grid-cols-3 gap-1 sm:gap-2 lg:gap-3 w-full">
                    <button className="w-full px-1 sm:px-2 lg:px-3 py-1 sm:py-1.5 lg:py-2 rounded-md text-[9px] sm:text-[9px] md:text-[9px] lg:text-[11px] font-normal leading-none bg-gray-900 text-white shadow-sm whitespace-nowrap">Today</button>
                    <button className="w-full px-1 sm:px-2 lg:px-3 py-1 sm:py-1.5 lg:py-2 rounded-md text-[9px] sm:text-[9px] md:text-[9px] lg:text-[11px] font-normal leading-none bg-gray-900 text-white whitespace-nowrap">Yesterday</button>
                    <button className="w-full px-1 sm:px-2 lg:px-3 py-1 sm:py-1.5 lg:py-2 rounded-md text-[9px] sm:text-[9px] md:text-[9px] lg:text-[11px] font-normal leading-none bg-gray-900 text-white whitespace-nowrap">This week</button>
                  </div>
                </div>

                <div className="relative mb-2 sm:mb-3">
                  <Search className="absolute left-2 sm:left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-3 h-3 sm:w-4 sm:h-4" />
                  <input
                    type="text"
                    placeholder="Search activities"
                    className="w-full pl-8 sm:pl-10 pr-3 sm:pr-4 py-1.5 sm:py-2 border border-gray-200 rounded-lg text-xs sm:text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="text-xs sm:text-sm text-gray-600 mb-1 sm:mb-2">6 new activities today</div>
                <div className="border-t border-dashed border-gray-200 mb-2 sm:mb-3" />

                <div className="relative flex-1 overflow-hidden pr-1">
                  <div className="absolute left-3 sm:left-4 top-0 bottom-0 border-l border-dashed border-gray-200" />
                  <div className="space-y-3 sm:space-y-4 lg:space-y-6">
                    {activities.map((activity, index) => (
                      <div key={index} className="grid grid-cols-[auto_1fr_auto] gap-1.5 sm:gap-2 lg:gap-3 items-start">
                        <div className={`relative z-10 w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 rounded-full border flex items-center justify-center ${getActivityStyle(activity.type).bubbleBg} ${getActivityStyle(activity.type).bubbleBorder}`}>
                          <activity.icon className={`w-2.5 h-2.5 sm:w-3 sm:h-3 lg:w-4 lg:h-4 ${getActivityStyle(activity.type).icon}`} />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="text-xs sm:text-sm font-medium text-gray-900 truncate">{activity.type}</div>
                          <p className="text-xs sm:text-sm text-gray-600 mt-0.5 sm:mt-1 overflow-hidden" style={{display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical'}}>{activity.description}</p>
                        </div>
                        <div className="text-xs text-gray-500 whitespace-nowrap mt-0.5">{activity.time}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Ticket Volume Trend (smaller width) */}
            <div className="bg-gray-100 rounded-xl border border-gray-200 p-2 shadow-sm h-[280px] sm:h-[350px] md:h-[400px] lg:h-[450px] flex flex-col col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-3">
              <div className="flex items-center justify-between mb-2 sm:mb-3 pl-2 sm:pl-3">
                <div className="flex items-center gap-1 sm:gap-2">
                  <Ticket className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600 rotate-[-45deg]" />
                  <h3 className="text-xs sm:text-sm font-medium text-gray-700">Ticket Volume Trend</h3>
                </div>
                <button className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-700 border border-gray-200 rounded-md px-2 sm:px-3 py-1 sm:py-1.5 bg-white">
                  <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500" />
                  <span className="hidden sm:inline">Last week</span>
                  <span className="sm:hidden">LW</span>
                </button>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 p-2 sm:p-3 flex-1 flex flex-col overflow-hidden">
                <div className="mb-2 sm:mb-3 flex items-baseline gap-2 sm:gap-3 whitespace-nowrap">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">4,790</div>
                  <div className="text-xs sm:text-sm">
                    <span className="text-emerald-600 font-semibold">+8%</span>
                    <span className="text-gray-500 ml-1 sm:ml-2 hidden sm:inline">vs last week</span>
                    <span className="text-gray-500 ml-1 sm:hidden">vs LW</span>
                  </div>
                </div>
                <div className="flex-1 min-h-0">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={ticketVolumeData} margin={{ right: 24 }}>
                      <XAxis dataKey="day" axisLine={false} tickLine={false} interval="preserveStartEnd" minTickGap={8} tickMargin={6} tick={{ fontSize: 10 }} />
                      <YAxis orientation="right" axisLine={false} tickLine={false} width={34} />
                      <Bar dataKey="tickets" radius={[6, 6, 0, 0]}>
                        {ticketVolumeData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={index === 5 ? '#111827' : '#E5E7EB'} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>

          {/* SLA Monitoring Table */}
          <div className="bg-gray-100 rounded-xl border border-gray-200 p-2 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0 mb-3 pl-2 sm:pl-3">
              <div className="flex items-center gap-1 sm:gap-2">
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-md bg-gray-100 border border-gray-200 flex items-center justify-center">
                  <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600" />
                </div>
                <h3 className="text-xs sm:text-sm font-medium text-gray-700">SLA Monitoring</h3>
              </div>
              <div className="flex items-center gap-1 sm:gap-2">
                <div className="relative">
                  <Search className="absolute left-2 sm:left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-3 h-3 sm:w-4 sm:h-4" />
                  <input
                    type="text"
                    placeholder="Ticket"
                    className="pl-7 sm:pl-10 pr-2 sm:pr-4 py-1.5 sm:py-2 border border-gray-200 text-black text-bold rounded-lg text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  />
                </div>
                <button className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 border border-gray-200 rounded-lg text-xs sm:text-sm hover:bg-gray-50 bg-white">
                  <Filter className="w-3 h-3 sm:w-4 sm:h-4 text-gray-700" />
                  <span className="hidden sm:inline text-gray-800">Filter</span>
                </button>
                <button className="p-1.5 sm:p-2 hover:bg-gray-200/60 rounded-lg text-gray-600">
                  <MoreHorizontal className="w-3 h-3 sm:w-4 sm:h-4" />
                </button>
              </div>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden pt-1 ">
              <div className="overflow-x-auto px-1.5 md:px-1.5 pt-0.5 pb-1">
                  <table className="w-full border-separate border-spacing-0">
                    <thead className="bg-gray-100 text-gray-600 ">
                  <tr>
                      <th className="px-3 sm:px-6 py-2 sm:py-3.5 text-left text-xs font-medium uppercase tracking-wider rounded-l-lg">
                      <input type="checkbox" className="rounded-md border-gray-300 accent-gray-900" />
                    </th>
                      <th className="px-3 sm:px-6 py-2 sm:py-3.5 text-left text-xs font-medium uppercase tracking-wider">
                      <div className="flex items-center space-x-1">
                        <span className="hidden sm:inline">Ticket ID</span>
                        <span className="sm:hidden">ID</span>
                        <ChevronDown className="w-3 h-3" />
                      </div>
                    </th>
                      <th className="px-3 sm:px-6 py-2 sm:py-3.5 text-left text-xs font-medium uppercase tracking-wider">
                      <div className="flex items-center space-x-1">
                        <span className="hidden md:inline">Subject</span>
                        <span className="md:hidden">Sub</span>
                        <ChevronDown className="w-3 h-3" />
                      </div>
                    </th>
                      <th className="px-3 sm:px-6 py-2 sm:py-3.5 text-left text-xs font-medium uppercase tracking-wider">
                      <div className="flex items-center space-x-1">
                        <span className="hidden sm:inline">Priority</span>
                        <span className="sm:hidden">P</span>
                        <ChevronDown className="w-3 h-3" />
                      </div>
                    </th>
                      <th className="px-3 sm:px-6 py-2 sm:py-3.5 text-left text-xs font-medium uppercase tracking-wider">
                      <div className="flex items-center space-x-1">
                        <span className="hidden md:inline">Assigned To</span>
                        <span className="md:hidden">Agent</span>
                        <ChevronDown className="w-3 h-3" />
                      </div>
                    </th>
                      <th className="px-3 sm:px-6 py-2 sm:py-3.5 text-left text-xs font-medium uppercase tracking-wider">
                      <div className="flex items-center space-x-1">
                        <span>Status</span>
                        <ChevronDown className="w-3 h-3" />
                      </div>
                    </th>
                      <th className="px-3 sm:px-6 py-2 sm:py-3.5 text-left text-xs font-medium uppercase tracking-wider">
                      <div className="flex items-center space-x-1">
                        <span className="hidden lg:inline">Created Date</span>
                        <span className="lg:hidden">Date</span>
                        <ChevronDown className="w-3 h-3" />
                      </div>
                    </th>
                      <th className="px-3 sm:px-6 py-2 sm:py-3.5 text-left text-xs font-medium uppercase tracking-wider">
                      <div className="flex items-center space-x-1">
                        <span className="hidden sm:inline">SLA Due</span>
                        <span className="sm:hidden">SLA</span>
                        <ChevronDown className="w-3 h-3" />
                      </div>
                    </th>
                      <th className="px-3 sm:px-6 py-2 sm:py-3.5 text-left text-xs font-medium uppercase tracking-wider rounded-r-lg"></th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {slaTickets.map((ticket, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap">
                        <input type="checkbox" className="rounded-md border-gray-300 accent-gray-900" defaultChecked={index === 0} />
                      </td>
                      <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm font-medium text-gray-900">{ticket.id}</td>
                      <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-900">{ticket.subject}</td>
                      <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap">
                        <div className="flex items-center space-x-2">
                          <div className="flex items-end gap-[2px]">
                            <span className={`w-[3px] h-[6px] rounded-sm ${
                              ticket.priority === 'High' ? 'bg-red-500' :
                              ticket.priority === 'Medium' ? 'bg-amber-500' :
                              'bg-yellow-400'
                            }`}></span>
                            <span className={`w-[3px] h-[8px] rounded-sm ${
                              ticket.priority === 'High' ? 'bg-red-500' :
                              ticket.priority === 'Medium' ? 'bg-amber-500' :
                              'bg-yellow-400'
                            }`}></span>
                            <span className={`w-[3px] h-[10px] rounded-sm ${
                              ticket.priority === 'High' ? 'bg-red-500' :
                              ticket.priority === 'Medium' ? 'bg-amber-500' :
                              'bg-yellow-400'
                            }`}></span>
                          </div>
                          <span className="text-xs sm:text-sm text-gray-900">{ticket.priority}</span>
                        </div>
                      </td>
                      <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap">
                        <div className="flex items-center space-x-1 sm:space-x-2">
                          <div className="w-5 h-5 sm:w-6 sm:h-6 bg-blue-600 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs font-medium">{ticket.avatar}</span>
                          </div>
                          <span className="text-xs sm:text-sm text-gray-900">{ticket.assignedTo}</span>
                        </div>
                      </td>
                      <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap">
                        <div className="flex items-center space-x-2">
                          {ticket.status === 'In Review' && (
                            <span className="inline-flex items-center justify-center w-5 h-5 rounded-md ">
                              <FileText className="w-4 h-4 text-blue-600" />
                            </span>
                          )}
                          {ticket.status === 'Delivered' && (
                            <Check className="w-4 h-4 text-green-600" />
                          )}
                          {ticket.status === 'In Progress' && (
                            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full   ">
                              <Clock className="w-4 h-4 text-amber-600" />
                            </span>
                          )}
                          <span className="text-xs sm:text-sm text-gray-900">{ticket.status}</span>
                        </div>
                      </td>
                      <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-900">{ticket.createdDate}</td>
                      <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap">
                        <span className={`text-xs sm:text-sm font-medium ${
                          ticket.slaDue.includes('h left') && parseInt(ticket.slaDue) <= 2 ? 'text-red-600' :
                          ticket.slaDue.includes('h left') ? 'text-yellow-600' :
                          'text-green-600'
                        }`}>
                          {ticket.slaDue}
                        </span>
                      </td>
                      <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap">
                        <button className="p-1 hover:bg-gray-100 rounded">
                          <MoreHorizontal className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600" />
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
    </div>
  );
}
