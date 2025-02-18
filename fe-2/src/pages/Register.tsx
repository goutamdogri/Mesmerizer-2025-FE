import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, Upload, Zap, AlertCircle } from 'lucide-react';

function Register() {
  const { eventId } = useParams();
  const [formData, setFormData] = useState({
    eventId: eventId || '',
    teamName: '',
    participants: [{ name: '', email: '', phone: '' }],
    paymentProof: null as File | null
  });

  const addParticipant = () => {
    setFormData(prev => ({
      ...prev,
      participants: [
        ...prev.participants,
        { name: '', email: '', phone: '' }
      ]
    }));
  };

  const removeParticipant = (index: number) => {
    setFormData(prev => ({
      ...prev,
      participants: prev.participants.filter((_, i) => i !== index)
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({
        ...prev,
        paymentProof: e.target.files![0]
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary-100 dark:from-background dark:to-secondary-900 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="container mx-auto px-4"
      >
        <div className="max-w-3xl mx-auto">
          <div className="comic-border bg-white dark:bg-gray-800 p-8 relative">
            {/* Comic-style header */}
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-primary-500 comic-border px-8 py-2 rotate-2">
              <h1 className="text-3xl font-bold text-white">Join the Adventure!</h1>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8 mt-8">
              {/* Team Name Section */}
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <label className="block text-xl font-bold mb-4">
                  Team Name
                  <motion.div
                    className="comic-border mt-2 relative overflow-hidden"
                    whileFocus={{ scale: 1.02 }}
                  >
                    <input
                      type="text"
                      value={formData.teamName}
                      onChange={e => setFormData(prev => ({ ...prev, teamName: e.target.value }))}
                      className="w-full p-3 pr-10 bg-transparent outline-none"
                      required
                    />
                    <Zap className="absolute right-3 top-1/2 transform -translate-y-1/2 text-primary-500" />
                  </motion.div>
                </label>
              </motion.div>

              {/* Participants Section */}
              <motion.div 
                className="space-y-6"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-bold">Team Members</h2>
                  <motion.button
                    type="button"
                    onClick={addParticipant}
                    className="comic-button bg-primary-500 text-white"
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Plus className="w-5 h-5" />
                  </motion.button>
                </div>

                <AnimatePresence>
                  {formData.participants.map((participant, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="comic-border p-6 bg-gray-50 dark:bg-gray-700 relative"
                    >
                      <div className="absolute -top-4 left-4 bg-black text-white px-3 py-1 text-sm">
                        Superhero #{index + 1}
                      </div>

                      <div className="grid md:grid-cols-2 gap-4 mt-2">
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Name
                          </label>
                          <input
                            type="text"
                            value={participant.name}
                            onChange={e => {
                              const newParticipants = [...formData.participants];
                              newParticipants[index].name = e.target.value;
                              setFormData(prev => ({ ...prev, participants: newParticipants }));
                            }}
                            className="w-full p-2 comic-border"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Email
                          </label>
                          <input
                            type="email"
                            value={participant.email}
                            onChange={e => {
                              const newParticipants = [...formData.participants];
                              newParticipants[index].email = e.target.value;
                              setFormData(prev => ({ ...prev, participants: newParticipants }));
                            }}
                            className="w-full p-2 comic-border"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Phone
                          </label>
                          <input
                            type="tel"
                            value={participant.phone}
                            onChange={e => {
                              const newParticipants = [...formData.participants];
                              newParticipants[index].phone = e.target.value;
                              setFormData(prev => ({ ...prev, participants: newParticipants }));
                            }}
                            className="w-full p-2 comic-border"
                            required
                          />
                        </div>
                      </div>

                      {index > 0 && (
                        <motion.button
                          type="button"
                          onClick={() => removeParticipant(index)}
                          className="absolute -top-3 -right-3 bg-red-500 text-white p-2 rounded-full comic-border"
                          whileHover={{ scale: 1.1, rotate: 90 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Minus className="w-4 h-4" />
                        </motion.button>
                      )}
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>

              {/* Payment Proof Upload */}
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="comic-border p-6 bg-gray-50 dark:bg-gray-700 relative"
              >
                <div className="flex items-start space-x-2 mb-4">
                  <AlertCircle className="text-primary-500 w-5 h-5 mt-1" />
                  <p className="text-sm">
                    Please upload a screenshot of your payment transaction.
                    Supported formats: PNG, JPG, PDF (max 5MB)
                  </p>
                </div>

                <label className="block w-full">
                  <div className="comic-border bg-white dark:bg-gray-800 p-8 text-center cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                    <Upload className="mx-auto w-12 h-12 text-primary-500 mb-4" />
                    <p className="font-medium">
                      {formData.paymentProof 
                        ? `Selected: ${formData.paymentProof.name}`
                        : 'Drop your payment proof here or click to browse'
                      }
                    </p>
                  </div>
                  <input
                    type="file"
                    onChange={handleFileChange}
                    accept="image/*,application/pdf"
                    className="hidden"
                  />
                </label>
              </motion.div>

              <motion.button
                type="submit"
                className="comic-button w-full bg-primary-500 text-white text-xl py-4"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Submit Registration
              </motion.button>
            </form>

            {/* Comic-style decorative elements */}
            <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-black transform rotate-45"></div>
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-black transform rotate-45"></div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Register;