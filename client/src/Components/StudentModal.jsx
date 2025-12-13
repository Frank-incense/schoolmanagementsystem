import { X, User, Phone, Mail, Calendar, Hash, BookOpen, MapPin, CheckCircle, XCircle } from "lucide-react";

function StudentModal({ open, setOpen, action, student }) {
  if (!open) return null;
  
  const isViewMode = action === 'View';
  const isEditMode = action === 'Edit';
  const isAddMode = action === 'Add';
  
  // Custom styles
  const customStyles = {
    primary: '#00CF0E',
    highlight: '#FFFFA3',
    primaryHover: '#00b30d',
    highlightHover: '#e6e693'
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden">
        {/* Modal Header */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                {isViewMode && 'View Student'}
                {isEditMode && 'Edit Student'}
                {isAddMode && 'Add New Student'}
              </h2>
              <p className="text-gray-600 mt-1">
                {isViewMode && 'Student details and information'}
                {isEditMode && 'Update student information'}
                {isAddMode && 'Enter new student details'}
              </p>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-lg"
            >
              <X size={24} />
            </button>
          </div>
        </div>
        
        {/* Modal Content */}
        <div className="p-6 overflow-y-auto max-h-[60vh]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Personal Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                <User size={20} />
                Personal Information
              </h3>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  First Name *
                </label>
                <input
                  type="text"
                  defaultValue={student?.firstName || ''}
                  readOnly={isViewMode}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent"
                  style={{ focusRingColor: customStyles.primary }}
                  placeholder="Enter first name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name *
                </label>
                <input
                  type="text"
                  defaultValue={student?.lastName || ''}
                  readOnly={isViewMode}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent"
                  style={{ focusRingColor: customStyles.primary }}
                  placeholder="Enter last name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Date of Birth *
                </label>
                <input
                  type="date"
                  defaultValue={student?.dateOfBirth || ''}
                  readOnly={isViewMode}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent"
                  style={{ focusRingColor: customStyles.primary }}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Gender *
                </label>
                <select
                  defaultValue={student?.gender || ''}
                  disabled={isViewMode}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent"
                  style={{ focusRingColor: customStyles.primary }}
                >
                  <option value="">Select gender</option>
                  <option value="M">Male</option>
                  <option value="F">Female</option>
                </select>
              </div>
            </div>
            
            {/* Academic Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                <BookOpen size={20} />
                Academic Information
              </h3>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Admission Number *
                </label>
                <input
                  type="text"
                  defaultValue={student?.admissionNo || ''}
                  readOnly={isViewMode || isEditMode}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent"
                  style={{ focusRingColor: customStyles.primary }}
                  placeholder="S-YYYY-XXX"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Class *
                </label>
                <select
                  defaultValue={student?.class || ''}
                  disabled={isViewMode}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent"
                  style={{ focusRingColor: customStyles.primary }}
                >
                  <option value="">Select class</option>
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
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Birth Certificate Number
                </label>
                <input
                  type="text"
                  defaultValue={student?.birthCertNo || ''}
                  readOnly={isViewMode}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent"
                  style={{ focusRingColor: customStyles.primary }}
                  placeholder="BC1234567"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Enrollment Date
                </label>
                <input
                  type="date"
                  defaultValue={student?.enrollmentDate || ''}
                  readOnly={isViewMode}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent"
                  style={{ focusRingColor: customStyles.primary }}
                />
              </div>
            </div>
            
            {/* Parent/Guardian Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                <User size={20} />
                Parent/Guardian Information
              </h3>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Parent Name *
                </label>
                <input
                  type="text"
                  defaultValue={student?.parentName || ''}
                  readOnly={isViewMode}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent"
                  style={{ focusRingColor: customStyles.primary }}
                  placeholder="Enter parent/guardian name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Contact Number *
                </label>
                <input
                  type="tel"
                  defaultValue={student?.parentContact || ''}
                  readOnly={isViewMode}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent"
                  style={{ focusRingColor: customStyles.primary }}
                  placeholder="+2547XXXXXXXX"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  defaultValue={student?.parentEmail || ''}
                  readOnly={isViewMode}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent"
                  style={{ focusRingColor: customStyles.primary }}
                  placeholder="parent@email.com"
                />
              </div>
            </div>
            
            {/* Additional Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                <MapPin size={20} />
                Additional Information
              </h3>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Residential Address
                </label>
                <textarea
                  defaultValue={student?.address || ''}
                  readOnly={isViewMode}
                  rows="3"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent"
                  style={{ focusRingColor: customStyles.primary }}
                  placeholder="Enter full address"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Status
                </label>
                <div className="flex items-center gap-4">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="status"
                      value="active"
                      defaultChecked={student?.status === 'active' || isAddMode}
                      disabled={isViewMode}
                      className="h-4 w-4"
                      style={{ accentColor: customStyles.primary }}
                    />
                    <span className="flex items-center gap-1">
                      <CheckCircle size={16} className="text-green-600" />
                      Active
                    </span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="status"
                      value="inactive"
                      defaultChecked={student?.status === 'inactive'}
                      disabled={isViewMode}
                      className="h-4 w-4"
                      style={{ accentColor: customStyles.primary }}
                    />
                    <span className="flex items-center gap-1">
                      <XCircle size={16} className="text-red-600" />
                      Inactive
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Modal Footer */}
        <div className="p-6 border-t border-gray-200 bg-gray-50">
          <div className="flex justify-end gap-3">
            <button
              onClick={() => setOpen(false)}
              className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
            >
              Cancel
            </button>
            
            {isViewMode ? (
              <button 
                className="px-4 py-2 text-white rounded-lg hover:opacity-90 transition-opacity"
                style={{ backgroundColor: customStyles.primary }}
              >
                Print Student Card
              </button>
            ) : (
              <button 
                className="px-4 py-2 text-white rounded-lg hover:opacity-90 transition-opacity"
                style={{ backgroundColor: customStyles.primary }}
              >
                {isEditMode ? 'Update Student' : 'Add Student'}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentModal;