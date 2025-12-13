import { useState, useEffect } from "react";
import { 
  Search, 
  Filter, 
  Download, 
  Plus, 
  Eye, 
  Edit2, 
  Trash2, 
  MoreVertical,
  User,
  Phone,
  Mail,
  Calendar,
  Hash,
  BookOpen,
  TrendingUp,
  TrendingDown,
  CheckCircle,
  XCircle,
  ChevronLeft,
  ChevronRight,
  SortAsc,
  SortDesc,
  Users,
  AlertTriangle
} from "lucide-react";
import StudentModal from "./StudentModal";

// Custom styles for your colors
const customStyles = {
  primary: '#00CF0E', // Your green
  highlight: '#FFFFA3', // Your yellow
  primaryHover: '#00b30d', // Slightly darker green for hover
  highlightHover: '#e6e693' // Slightly darker yellow for hover
};

// Mock data - replace with your API data
const mockStudents = [
  {
    id: 1,
    admissionNo: "S-2024-001",
    name: "John Ochieng",
    firstName: "John",
    lastName: "Ochieng",
    class: "Form 3A",
    gender: "M",
    dateOfBirth: "2009-05-15",
    birthCertNo: "BC1234567",
    parentName: "Peter Ochieng",
    parentContact: "+254712345678",
    parentEmail: "peter@email.com",
    address: "Nairobi, Kenya",
    status: "active",
    balance: -15000,
    lastPayment: "2024-03-10",
    enrollmentDate: "2021-01-10"
  },
  {
    id: 2,
    admissionNo: "S-2024-002",
    name: "Sarah Mwangi",
    firstName: "Sarah",
    lastName: "Mwangi",
    class: "Form 2B",
    gender: "F",
    dateOfBirth: "2010-08-22",
    birthCertNo: "BC2345678",
    parentName: "Jane Mwangi",
    parentContact: "+254723456789",
    parentEmail: "jane@email.com",
    address: "Mombasa, Kenya",
    status: "active",
    balance: 0,
    lastPayment: "2024-04-05",
    enrollmentDate: "2021-01-15"
  },
  {
    id: 3,
    admissionNo: "S-2024-003",
    name: "David Kimani",
    firstName: "David",
    lastName: "Kimani",
    class: "Form 4A",
    gender: "M",
    dateOfBirth: "2008-03-30",
    birthCertNo: "BC3456789",
    parentName: "James Kimani",
    parentContact: "+254734567890",
    parentEmail: "james@email.com",
    address: "Kisumu, Kenya",
    status: "inactive",
    balance: -25000,
    lastPayment: "2023-11-20",
    enrollmentDate: "2020-01-10"
  },
  {
    id: 4,
    admissionNo: "S-2024-004",
    name: "Mary Wanjiku",
    firstName: "Mary",
    lastName: "Wanjiku",
    class: "Form 1A",
    gender: "F",
    dateOfBirth: "2011-11-12",
    birthCertNo: "BC4567890",
    parentName: "Esther Wanjiku",
    parentContact: "+254745678901",
    parentEmail: "esther@email.com",
    address: "Nakuru, Kenya",
    status: "active",
    balance: 3400,
    lastPayment: "2024-04-15",
    enrollmentDate: "2024-01-08"
  },
  {
    id: 5,
    admissionNo: "S-2024-005",
    name: "Peter Omondi",
    firstName: "Peter",
    lastName: "Omondi",
    class: "Form 3B",
    gender: "M",
    dateOfBirth: "2009-07-25",
    birthCertNo: "BC5678901",
    parentName: "Thomas Omondi",
    parentContact: "+254756789012",
    parentEmail: "thomas@email.com",
    address: "Eldoret, Kenya",
    status: "active",
    balance: -8500,
    lastPayment: "2024-03-28",
    enrollmentDate: "2021-01-12"
  },
  {
    id: 6,
    admissionNo: "S-2024-006",
    name: "Grace Wambui",
    firstName: "Grace",
    lastName: "Wambui",
    class: "Form 2A",
    gender: "F",
    dateOfBirth: "2010-02-18",
    birthCertNo: "BC6789012",
    parentName: "Ruth Wambui",
    parentContact: "+254767890123",
    parentEmail: "ruth@email.com",
    address: "Thika, Kenya",
    status: "active",
    balance: -12500,
    lastPayment: "2024-02-15",
    enrollmentDate: "2021-01-20"
  },
  {
    id: 7,
    admissionNo: "S-2024-007",
    name: "Michael Otieno",
    firstName: "Michael",
    lastName: "Otieno",
    class: "Form 4B",
    gender: "M",
    dateOfBirth: "2008-12-05",
    birthCertNo: "BC7890123",
    parentName: "Daniel Otieno",
    parentContact: "+254778901234",
    parentEmail: "daniel@email.com",
    address: "Kisii, Kenya",
    status: "active",
    balance: 0,
    lastPayment: "2024-04-10",
    enrollmentDate: "2020-01-15"
  },
  {
    id: 8,
    admissionNo: "S-2024-008",
    name: "Linda Achieng",
    firstName: "Linda",
    lastName: "Achieng",
    class: "Form 1B",
    gender: "F",
    dateOfBirth: "2011-09-30",
    birthCertNo: "BC8901234",
    parentName: "Susan Achieng",
    parentContact: "+254789012345",
    parentEmail: "susan@email.com",
    address: "Kitale, Kenya",
    status: "inactive",
    balance: -18000,
    lastPayment: "2023-12-10",
    enrollmentDate: "2024-01-05"
  },
  {
    id: 9,
    admissionNo: "S-2024-009",
    name: "Brian Kamau",
    firstName: "Brian",
    lastName: "Kamau",
    class: "Form 3C",
    gender: "M",
    dateOfBirth: "2009-04-12",
    birthCertNo: "BC9012345",
    parentName: "Robert Kamau",
    parentContact: "+254790123456",
    parentEmail: "robert@email.com",
    address: "Nyeri, Kenya",
    status: "active",
    balance: -9200,
    lastPayment: "2024-03-20",
    enrollmentDate: "2021-01-18"
  },
  {
    id: 10,
    admissionNo: "S-2024-010",
    name: "Ann Wanjiru",
    firstName: "Ann",
    lastName: "Wanjiru",
    class: "Form 2C",
    gender: "F",
    dateOfBirth: "2010-06-08",
    birthCertNo: "BC0123456",
    parentName: "Margaret Wanjiru",
    parentContact: "+254701234567",
    parentEmail: "margaret@email.com",
    address: "Embu, Kenya",
    status: "active",
    balance: 0,
    lastPayment: "2024-04-12",
    enrollmentDate: "2021-01-22"
  },
  {
    id: 11,
    admissionNo: "S-2024-011",
    name: "Joseph Kiprotich",
    firstName: "Joseph",
    lastName: "Kiprotich",
    class: "Form 4C",
    gender: "M",
    dateOfBirth: "2008-10-15",
    birthCertNo: "BC1234568",
    parentName: "Samuel Kiprotich",
    parentContact: "+254712345679",
    parentEmail: "samuel@email.com",
    address: "Bomet, Kenya",
    status: "active",
    balance: -21000,
    lastPayment: "2024-02-28",
    enrollmentDate: "2020-01-25"
  },
  {
    id: 12,
    admissionNo: "S-2024-012",
    name: "Susan Njeri",
    firstName: "Susan",
    lastName: "Njeri",
    class: "Form 1C",
    gender: "F",
    dateOfBirth: "2011-03-22",
    birthCertNo: "BC2345679",
    parentName: "Lucy Njeri",
    parentContact: "+254723456780",
    parentEmail: "lucy@email.com",
    address: "Kericho, Kenya",
    status: "active",
    balance: 1500,
    lastPayment: "2024-04-18",
    enrollmentDate: "2024-01-12"
  }
];

function Students() {
  const [open, setOpen] = useState(false);
  const [action, setAction] = useState('');
  const [selectedStudent, setSelectedStudent] = useState(null);
  
  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  
  // State for filters
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedClass, setSelectedClass] = useState('All Classes');
  const [selectedGender, setSelectedGender] = useState('All Genders');
  const [selectedStatus, setSelectedStatus] = useState('All Status');
  const [sortBy, setSortBy] = useState('name');
  const [sortOrder, setSortOrder] = useState('asc');
  
  // Filter and sort students (same logic as before)
  const filteredStudents = mockStudents.filter(student => {
    const matchesSearch = searchTerm === '' || 
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.admissionNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.parentName.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesClass = selectedClass === 'All Classes' || student.class === selectedClass;
    const matchesGender = selectedGender === 'All Genders' || student.gender === selectedGender;
    const matchesStatus = selectedStatus === 'All Status' || student.status === selectedStatus.toLowerCase();
    
    return matchesSearch && matchesClass && matchesGender && matchesStatus;
  }).sort((a, b) => {
    let aValue, bValue;
    
    switch(sortBy) {
      case 'name': aValue = a.name; bValue = b.name; break;
      case 'class': aValue = a.class; bValue = b.class; break;
      case 'balance': aValue = a.balance; bValue = b.balance; break;
      case 'admissionNo': aValue = a.admissionNo; bValue = b.admissionNo; break;
      case 'status': aValue = a.status; bValue = b.status; break;
      default: aValue = a.name; bValue = b.name;
    }
    
    if (sortOrder === 'asc') {
      return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
    } else {
      return aValue > bValue ? -1 : aValue < bValue ? 1 : 0;
    }
  });
  
  // Calculate pagination
  const totalPages = Math.ceil(filteredStudents.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentStudents = filteredStudents.slice(startIndex, endIndex);
  
  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  
  // Handle sort
  const handleSort = (column) => {
    if (sortBy === column) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(column);
      setSortOrder('asc');
    }
  };
  
  // Handle student actions
  const handleViewStudent = (student) => {
    setSelectedStudent(student);
    setAction('View');
    setOpen(true);
  };
  
  const handleEditStudent = (student) => {
    setSelectedStudent(student);
    setAction('Edit');
    setOpen(true);
  };
  
  const handleDeleteStudent = (student) => {
    if (window.confirm(`Are you sure you want to delete ${student.name}?`)) {
      alert(`Student ${student.name} deleted successfully`);
    }
  };
  
  // Reset filters
  const handleResetFilters = () => {
    setSearchTerm('');
    setSelectedClass('All Classes');
    setSelectedGender('All Genders');
    setSelectedStatus('All Status');
    setCurrentPage(1);
  };
  
  // Calculate statistics
  const totalStudents = mockStudents.length;
  const activeStudents = mockStudents.filter(s => s.status === 'active').length;
  const inactiveStudents = mockStudents.filter(s => s.status === 'inactive').length;
  const studentsInArrears = mockStudents.filter(s => s.balance < 0).length;
  
  // Format currency
  const formatCurrency = (amount) => {
    if (amount >= 0) {
      return `KSh ${Math.abs(amount).toLocaleString()}`;
    } else {
      return `-KSh ${Math.abs(amount).toLocaleString()}`;
    }
  };
  
  // Format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  };
  
  // Get status badge with your colors
  const getStatusBadge = (status) => {
    if (status === 'active') {
      return (
        <span className="px-2 py-1 text-xs font-medium rounded-full flex items-center gap-1"
          style={{ backgroundColor: 'rgba(0, 207, 14, 0.1)', color: customStyles.primary }}>
          <CheckCircle size={12} /> Active
        </span>
      );
    } else {
      return (
        <span className="px-2 py-1 text-xs font-medium bg-red-100 text-red-800 rounded-full flex items-center gap-1">
          <XCircle size={12} /> Inactive
        </span>
      );
    }
  };
  
  // Get balance badge with your colors
  const getBalanceBadge = (balance) => {
    if (balance === 0) {
      return (
        <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">
          Paid Up
        </span>
      );
    } else if (balance > 0) {
      return (
        <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full flex items-center gap-1">
          <TrendingUp size={12} /> Credit
        </span>
      );
    } else {
      return (
        <span className="px-2 py-1 text-xs font-medium bg-red-100 text-red-800 rounded-full flex items-center gap-1">
          <TrendingDown size={12} /> Arrears
        </span>
      );
    }
  };

  return (
    <div className="p-6 min-h-screen">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Student Management</h1>
        <p className="text-gray-600">Manage student records, view balances, and track enrollment</p>
      </div>
      
      {/* Quick Stats with your colors */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 font-medium mb-1">Total Students</p>
              <p className="text-2xl font-bold text-gray-900">{totalStudents}</p>
            </div>
            <div className="p-3 rounded-lg" style={{ backgroundColor: 'rgba(0, 207, 14, 0.1)' }}>
              <Users size={24} style={{ color: customStyles.primary }} />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 font-medium mb-1">Active Students</p>
              <p className="text-2xl font-bold text-gray-900">{activeStudents}</p>
            </div>
            <div className="p-3 rounded-lg" style={{ backgroundColor: 'rgba(0, 207, 14, 0.1)' }}>
              <CheckCircle size={24} style={{ color: customStyles.primary }} />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 font-medium mb-1">Inactive Students</p>
              <p className="text-2xl font-bold text-gray-900">{inactiveStudents}</p>
            </div>
            <div className="p-3 bg-red-50 rounded-lg">
              <XCircle size={24} className="text-red-600" />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 font-medium mb-1">Students in Arrears</p>
              <p className="text-2xl font-bold text-gray-900">{studentsInArrears}</p>
            </div>
            <div className="p-3 bg-amber-50 rounded-lg">
              <AlertTriangle size={24} className="text-amber-600" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Filters and Actions Section with your colors */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 mb-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-6">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">All Students</h2>
            <p className="text-sm text-gray-600">Filter and manage student records</p>
          </div>
          
          <div className="flex flex-wrap gap-3">
            <button
              onClick={handleResetFilters}
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 flex items-center gap-2"
            >
              <Filter size={18} />
              Reset Filters
            </button>
            
            <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 flex items-center gap-2">
              <Download size={18} />
              Export
            </button>
            
            <button
              onClick={() => {
                setSelectedStudent(null);
                setAction('Add');
                setOpen(true);
              }}
              className="px-4 py-2 text-white rounded-lg flex items-center gap-2 hover:opacity-90 transition-opacity"
              style={{ backgroundColor: customStyles.primary }}
            >
              <Plus size={18} />
              Add New Student
            </button>
          </div>
        </div>
        
        {/* Filter Form with your colors */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Search Box */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by name, admission no..."
              className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent"
              style={{ focusRingColor: customStyles.primary }}
            />
          </div>
          
          {/* Class Filter */}
          <div>
            <select
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
              className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent"
              style={{ focusRingColor: customStyles.primary }}
            >
              <option value="All Classes">All Classes</option>
              <option value="Form 1A">Form 1A</option>
              <option value="Form 1B">Form 1B</option>
              <option value="Form 1C">Form 1C</option>
              <option value="Form 2A">Form 2A</option>
              <option value="Form 2B">Form 2B</option>
              <option value="Form 2C">Form 2C</option>
              <option value="Form 3A">Form 3A</option>
              <option value="Form 3B">Form 3B</option>
              <option value="Form 3C">Form 3C</option>
              <option value="Form 4A">Form 4A</option>
              <option value="Form 4B">Form 4B</option>
              <option value="Form 4C">Form 4C</option>
            </select>
          </div>
          
          {/* Gender Filter */}
          <div>
            <select
              value={selectedGender}
              onChange={(e) => setSelectedGender(e.target.value)}
              className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent"
              style={{ focusRingColor: customStyles.primary }}
            >
              <option value="All Genders">All Genders</option>
              <option value="M">Male</option>
              <option value="F">Female</option>
            </select>
          </div>
          
          {/* Status Filter */}
          <div>
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent"
              style={{ focusRingColor: customStyles.primary }}
            >
              <option value="All Status">All Status</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
        </div>
        
        {/* Active Filters Display with your colors */}
        {(searchTerm || selectedClass !== 'All Classes' || selectedGender !== 'All Genders' || selectedStatus !== 'All Status') && (
          <div className="mt-4 flex items-center gap-2">
            <span className="text-sm text-gray-600">Active filters:</span>
            {searchTerm && (
              <span className="px-3 py-1 text-sm rounded-full flex items-center gap-1"
                style={{ backgroundColor: customStyles.highlight, color: '#333' }}>
                Search: "{searchTerm}"
                <button onClick={() => setSearchTerm('')} className="ml-1">×</button>
              </span>
            )}
            {selectedClass !== 'All Classes' && (
              <span className="px-3 py-1 text-sm rounded-full flex items-center gap-1"
                style={{ backgroundColor: 'rgba(0, 207, 14, 0.1)', color: customStyles.primary }}>
                Class: {selectedClass}
                <button onClick={() => setSelectedClass('All Classes')} className="ml-1">×</button>
              </span>
            )}
            {selectedGender !== 'All Genders' && (
              <span className="px-3 py-1 bg-purple-50 text-purple-700 text-sm rounded-full flex items-center gap-1">
                Gender: {selectedGender}
                <button onClick={() => setSelectedGender('All Genders')} className="ml-1 text-purple-900">×</button>
              </span>
            )}
            {selectedStatus !== 'All Status' && (
              <span className="px-3 py-1 bg-amber-50 text-amber-700 text-sm rounded-full flex items-center gap-1">
                Status: {selectedStatus}
                <button onClick={() => setSelectedStatus('All Status')} className="ml-1 text-amber-900">×</button>
              </span>
            )}
          </div>
        )}
      </div>
      
      {/* Students Table with your colors */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr style={{ backgroundColor: customStyles.primary }}>
                <th 
                  className="py-4 px-6 text-left text-xs font-medium text-white uppercase tracking-wider cursor-pointer"
                  onClick={() => handleSort('admissionNo')}
                >
                  <div className="flex items-center gap-2">
                    <Hash size={14} />
                    Admission No
                    {sortBy === 'admissionNo' && (
                      sortOrder === 'asc' ? <SortAsc size={14} /> : <SortDesc size={14} />
                    )}
                  </div>
                </th>
                <th 
                  className="py-4 px-6 text-left text-xs font-medium text-white uppercase tracking-wider cursor-pointer"
                  onClick={() => handleSort('name')}
                >
                  <div className="flex items-center gap-2">
                    <User size={14} />
                    Student Name
                    {sortBy === 'name' && (
                      sortOrder === 'asc' ? <SortAsc size={14} /> : <SortDesc size={14} />
                    )}
                  </div>
                </th>
                <th 
                  className="py-4 px-6 text-left text-xs font-medium text-white uppercase tracking-wider cursor-pointer"
                  onClick={() => handleSort('class')}
                >
                  <div className="flex items-center gap-2">
                    <BookOpen size={14} />
                    Class
                    {sortBy === 'class' && (
                      sortOrder === 'asc' ? <SortAsc size={14} /> : <SortDesc size={14} />
                    )}
                  </div>
                </th>
                <th className="py-4 px-6 text-left text-xs font-medium text-white uppercase tracking-wider">
                  Gender
                </th>
                <th className="py-4 px-6 text-left text-xs font-medium text-white uppercase tracking-wider">
                  Parent Contact
                </th>
                <th className="py-4 px-6 text-left text-xs font-medium text-white uppercase tracking-wider">
                  Status
                </th>
                <th 
                  className="py-4 px-6 text-left text-xs font-medium text-white uppercase tracking-wider cursor-pointer"
                  onClick={() => handleSort('balance')}
                >
                  <div className="flex items-center gap-2">
                    Balance
                    {sortBy === 'balance' && (
                      sortOrder === 'asc' ? <SortAsc size={14} /> : <SortDesc size={14} />
                    )}
                  </div>
                </th>
                <th className="py-4 px-6 text-left text-xs font-medium text-white uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {currentStudents.length > 0 ? (
                currentStudents.map((student) => (
                  <tr key={student.id} className="hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6">
                      <div className="font-medium text-gray-900">{student.admissionNo}</div>
                      <div className="text-sm text-gray-500">DOB: {formatDate(student.dateOfBirth)}</div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full flex items-center justify-center"
                          style={{ backgroundColor: 'rgba(0, 207, 14, 0.1)' }}>
                          <User size={18} style={{ color: customStyles.primary }} />
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">{student.name}</div>
                          <div className="text-sm text-gray-500">{student.parentName}</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="font-medium text-gray-900">{student.class}</div>
                      <div className="text-sm text-gray-500">
                        Enrolled: {formatDate(student.enrollmentDate)}
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm ${
                        student.gender === 'M' 
                          ? 'bg-blue-50 text-blue-700' 
                          : 'bg-pink-50 text-pink-700'
                      }`}>
                        {student.gender === 'M' ? 'Male' : 'Female'}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-sm text-gray-700">
                          <Phone size={14} />
                          {student.parentContact}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <Mail size={14} />
                          {student.parentEmail}
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      {getStatusBadge(student.status)}
                    </td>
                    <td className="py-4 px-6">
                      <div className={`font-medium ${student.balance >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {formatCurrency(student.balance)}
                      </div>
                      <div className="mt-1">
                        {getBalanceBadge(student.balance)}
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleViewStudent(student)}
                          className="p-2 text-gray-500 hover:text-gray-700 rounded-lg transition-colors"
                          style={{ hoverBackgroundColor: customStyles.highlight }}
                          title="View Student"
                        >
                          <Eye size={18} />
                        </button>
                        <button
                          onClick={() => handleEditStudent(student)}
                          className="p-2 text-gray-500 hover:text-blue-600 rounded-lg transition-colors"
                          style={{ hoverBackgroundColor: customStyles.highlight }}
                          title="Edit Student"
                        >
                          <Edit2 size={18} />
                        </button>
                        <button
                          onClick={() => handleDeleteStudent(student)}
                          className="p-2 text-gray-500 hover:text-red-600 rounded-lg transition-colors"
                          style={{ hoverBackgroundColor: customStyles.highlight }}
                          title="Delete Student"
                        >
                          <Trash2 size={18} />
                        </button>
                        <button className="p-2 text-gray-500 hover:text-gray-700 rounded-lg transition-colors"
                          style={{ hoverBackgroundColor: customStyles.highlight }}>
                          <MoreVertical size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8" className="py-12 px-6 text-center">
                    <div className="text-gray-500">
                      <User size={48} className="mx-auto mb-4 text-gray-300" />
                      <p className="text-lg font-medium mb-2">No students found</p>
                      <p className="mb-6">Try adjusting your filters or add a new student</p>
                      <button
                        onClick={() => {
                          setSelectedStudent(null);
                          setAction('Add');
                          setOpen(true);
                        }}
                        className="px-4 py-2 text-white rounded-lg flex items-center gap-2 mx-auto hover:opacity-90 transition-opacity"
                        style={{ backgroundColor: customStyles.primary }}
                      >
                        <Plus size={18} />
                        Add New Student
                      </button>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        
        {/* Pagination with your colors */}
        {currentStudents.length > 0 && (
          <div className="px-6 py-4 border-t border-gray-200">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-sm text-gray-600">
                Showing <span className="font-medium">{startIndex + 1}</span> to{" "}
                <span className="font-medium">{Math.min(endIndex, filteredStudents.length)}</span> of{" "}
                <span className="font-medium">{filteredStudents.length}</span> students
              </div>
              
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`px-3 py-2 rounded-lg flex items-center gap-2 ${
                    currentPage === 1
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <ChevronLeft size={18} />
                  Previous
                </button>
                
                <div className="flex items-center gap-1">
                  {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                    let pageNum;
                    if (totalPages <= 5) {
                      pageNum = i + 1;
                    } else if (currentPage <= 3) {
                      pageNum = i + 1;
                    } else if (currentPage >= totalPages - 2) {
                      pageNum = totalPages - 4 + i;
                    } else {
                      pageNum = currentPage - 2 + i;
                    }
                    
                    return (
                      <button
                        key={pageNum}
                        onClick={() => handlePageChange(pageNum)}
                        className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                          currentPage === pageNum
                            ? 'text-white'
                            : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
                        }`}
                        style={currentPage === pageNum ? { backgroundColor: customStyles.primary } : {}}
                      >
                        {pageNum}
                      </button>
                    );
                  })}
                  
                  {totalPages > 5 && currentPage < totalPages - 2 && (
                    <>
                      <span className="px-2">...</span>
                      <button
                        onClick={() => handlePageChange(totalPages)}
                        className="w-10 h-10 rounded-lg bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 flex items-center justify-center"
                      >
                        {totalPages}
                      </button>
                    </>
                  )}
                </div>
                
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={`px-3 py-2 rounded-lg flex items-center gap-2 ${
                    currentPage === totalPages
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  Next
                  <ChevronRight size={18} />
                </button>
              </div>
              
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Rows per page:</span>
                <select
                  value={itemsPerPage}
                  onChange={(e) => {}}
                  className="px-2 py-1 bg-white border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:border-transparent"
                  style={{ focusRingColor: customStyles.primary }}
                >
                  <option value={10}>10</option>
                  <option value={25}>25</option>
                  <option value={50}>50</option>
                  <option value={100}>100</option>
                </select>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Student Modal */}
      {open && (
        <StudentModal 
          open={open} 
          setOpen={setOpen} 
          action={action}
          student={selectedStudent}
        />
      )}
    </div>
  );
}

export default Students;