import React, { useState, useRef, useEffect } from 'react';
import { Check, ChevronDown, ArrowRight, Smartphone, Tablet, Laptop, Watch, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Device {
  name: string;
  icon: any;
  models: string[];
}

interface DeviceSelectionProps {
  onComplete: (data: {
    device: string;
    model: string;
    issues: string[];
    phoneNumber: string;
  }) => void;
}

const devices: Device[] = [
  {
    name: 'iPhone',
    icon: Smartphone,
    models: [
      'iPhone 16 Pro Max',
      'iPhone 16 Pro',
      'iPhone 16 Plus',
      'iPhone 16',
      'iPhone 15 Pro Max',
      'iPhone 15 Pro',
      'iPhone 15 Plus',
      'iPhone 15',
      'iPhone 14 Pro Max',
      'iPhone 14 Pro',
      'iPhone 14 Plus',
      'iPhone 14',
      'iPhone 13 Pro Max',
      'iPhone 13 Pro',
      'iPhone 13'
    ]
  },
  {
    name: 'iPad',
    icon: Tablet,
    models: ['iPad Pro', 'iPad Air', 'iPad mini', 'iPad']
  },
  {
    name: 'MacBook',
    icon: Laptop,
    models: ['MacBook Pro', 'MacBook Air']
  },
  {
    name: 'iWatch',
    icon: Watch,
    models: ['Series 9', 'Series 8', 'Series 7', 'SE']
  }
];

const repairIssues = [
  'Screen|Display Repair & Replacement',
  'Back Glass Repair & Replacement',
  'Ear Speaker Repair & Replacement',
  'Battery Repair & Replacement',
  'Speaker|Ringer Repair & Replacement',
  'Mic Repair & Replacement',
  'Front Camera Repair & Replacement',
  'Back Camera Repair & Replacement',
  'Charging Port Repair & Replacement',
  'Power Button Repair & Replacement',
  'Volume Button Repair & Replacement',
  'Water Damage Repair'
];

const DeviceSelection = ({ onComplete }: DeviceSelectionProps) => {
  const [selectedDevice, setSelectedDevice] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [selectedIssues, setSelectedIssues] = useState<string[]>([]);
  const [showIssues, setShowIssues] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [step, setStep] = useState(1);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowIssues(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleDeviceSelect = (device: string) => {
    setSelectedDevice(device);
    setSelectedModel('');
    setStep(2);
  };

  const handleModelSelect = (model: string) => {
    setSelectedModel(model);
    setStep(3);
  };

  const handleIssueSelect = (issue: string) => {
    if (selectedIssues.includes(issue)) {
      setSelectedIssues(selectedIssues.filter(i => i !== issue));
    } else {
      setSelectedIssues([...selectedIssues, issue]);
    }
  };

  const handleSubmit = () => {
    if (phoneNumber.length >= 10) {
      onComplete({
        device: selectedDevice,
        model: selectedModel,
        issues: selectedIssues,
        phoneNumber
      });
    }
  };

  const stepTitles = {
    1: "Select Your Device",
    2: `Select ${selectedDevice} Model`,
    3: "Select Issues"
  };

  return (
    <div className="text-tech-100">
      <motion.div 
        className="text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold bg-gradient-to-r from-tech-300 to-tech-500 text-transparent bg-clip-text">
          {stepTitles[step as keyof typeof stepTitles]}
        </h2>
        {step > 1 && (
          <div className="flex items-center justify-center mt-4 space-x-2 text-sm text-tech-300">
            <span>{selectedDevice}</span>
            {selectedModel && (
              <>
                <ChevronDown className="" />
                <span>{selectedModel}</span>
              </>
            )}
          </div>
        )}
      </motion.div>

      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div 
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
          >
            {devices.map((device) => {
              const DeviceIcon = device.icon;
              return (
                <motion.button
                  key={device.name}
                  onClick={() => handleDeviceSelect(device.name)}
                  className="relative group p-6 bg-gradient-to-br from-tech-800/50 to-tech-900/50 rounded-xl border border-tech-700/50 hover:border-tech-600 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="absolute inset-0 bg-tech-pattern opacity-5 rounded-xl"></div>
                  <div className="relative flex flex-col items-center">
                    <div className="w-16 h-16 mb-4 bg-gradient-to-br from-tech-500/20 to-tech-600/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <DeviceIcon className="w-8 h-8 text-tech-400 group-hover:text-tech-300 transition-colors" />
                    </div>
                    <span className="text-lg font-medium text-tech-100 group-hover:text-tech-50 transition-colors">
                      {device.name}
                    </span>
                  </div>
                </motion.button>
              );
            })}
          </motion.div>
        )}

        {step === 2 && selectedDevice && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            <button
              onClick={() => setStep(1)}
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-tech-300 hover:text-tech-200 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Devices
            </button>
            <div className="grid grid-cols-2 gap-4">
              {devices.find(d => d.name === selectedDevice)?.models.map((model) => (
                <motion.button
                  key={model}
                  onClick={() => handleModelSelect(model)}
                  className="p-4 bg-gradient-to-br from-tech-800/50 to-tech-900/50 rounded-xl border border-tech-700/50 hover:border-tech-600 transition-all duration-300 text-left group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="text-tech-100 group-hover:text-tech-50 transition-colors">
                    {model}
                  </span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}

        {step === 3 && selectedModel && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <button
              onClick={() => setStep(2)}
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-tech-300 hover:text-tech-200 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Models
            </button>

            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setShowIssues(!showIssues)}
                className="w-full p-4 bg-gradient-to-br from-tech-800/50 to-tech-900/50 rounded-xl border border-tech-700/50 hover:border-tech-600 transition-all duration-300 flex items-center justify-between group"
              >
                <span className="text-tech-100 group-hover:text-tech-50">
                  {selectedIssues.length ? `${selectedIssues.length} issues selected` : 'Select repair issues'}
                </span>
                <ChevronDown className={`w-5 h-5 text-tech-400 transform transition-transform duration-300 ${showIssues ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {showIssues && (
                  <motion.div 
                    className="absolute left-0 right-0 mt-2 bg-gradient-to-b from-tech-800 to-tech-900 border border-tech-700 rounded-xl shadow-xl overflow-hidden z-50 w-full custom-scroll"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    style={{
                      maxHeight: '60vh',
                      overflowY: 'auto'
                    }}
                  >
                    <div className="py-2">
                      {repairIssues.map((issue) => (
                        <button
                          key={issue}
                          onClick={() => handleIssueSelect(issue)}
                          className="w-full px-4 py-3 text-left hover:bg-tech-700/50 transition-colors flex items-center space-x-3 group"
                        >
                          <div className={`w-5 h-5 rounded-lg flex items-center justify-center transition-colors ${
                            selectedIssues.includes(issue) 
                              ? 'bg-tech-500 text-white'
                              : 'bg-tech-700 group-hover:bg-tech-600'
                          }`}>
                            {selectedIssues.includes(issue) && <Check className="w-4 h-4" />}
                          </div>
                          <span className="text-tech-100">{issue}</span>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {selectedIssues.length > 0 && (
              <motion.div 
                className="space-y-4 pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <span className="text-tech-400">+91</span>
                  </div>
                  <input
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="Enter your phone number"
                    className="w-full pl-12 pr-4 py-4 bg-gradient-to-br from-tech-800/50 to-tech-900/50 rounded-xl border border-tech-700/50 focus:border-tech-500 focus:ring-1 focus:ring-tech-500 transition-all duration-300 text-tech-100 placeholder-tech-400"
                  />
                </div>
                <motion.button
                  onClick={handleSubmit}
                  disabled={phoneNumber.length < 10}
                  className="w-full p-4 bg-gradient-to-r from-tech-500 to-tech-600 text-white rounded-xl flex items-center justify-center space-x-2 hover:from-tech-600 hover:to-tech-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:from-tech-500 disabled:hover:to-tech-600"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Continue</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DeviceSelection;