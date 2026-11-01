import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  deleteBooking as removeBooking,
  deleteContact as removeContact,
  getBookings,
  getContacts,
} from '../services/submissionStorage';

const ADMIN_PASSWORD = 'r10253rw';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('bookings');
  const [password, setPassword] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [error, setError] = useState('');

  const handlePasswordSubmit = (e) => {
    e.preventDefault();

    if (password === ADMIN_PASSWORD) {
      setIsUnlocked(true);
      setError('');
      return;
    }

    setError('Wrong password. Try again!');
    setPassword('');
  };

  

  const [bookings, setBookings] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [dataError, setDataError] = useState('');

  useEffect(() => {
    const loadSubmissions = () => {
      try {
        setBookings(getBookings());
        setContacts(getContacts());
        setDataError('');
      } catch (loadError) {
        setDataError(
          loadError instanceof Error ? loadError.message : 'Unable to load saved submissions.',
        );
      }
    };

    loadSubmissions();
    window.addEventListener('gym-data-updated', loadSubmissions);
    window.addEventListener('storage', loadSubmissions);

    return () => {
      window.removeEventListener('gym-data-updated', loadSubmissions);
      window.removeEventListener('storage', loadSubmissions);
    };
  }, []);

  const handleDeleteBooking = (id) => {
    try {
      removeBooking(id);
    } catch (deleteError) {
      setDataError(
        deleteError instanceof Error ? deleteError.message : 'Unable to delete this booking.',
      );
    }
  };

  const handleDeleteContact = (id) => {
    try {
      removeContact(id);
    } catch (deleteError) {
      setDataError(
        deleteError instanceof Error ? deleteError.message : 'Unable to delete this message.',
      );
    }
  };
if (!isUnlocked) {
  return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950 px-4">
        <form
          onSubmit={handlePasswordSubmit}
          className="w-full max-w-md rounded-2xl border border-slate-700 bg-slate-900 p-8 shadow-2xl"
        >
          <h2 className="mb-2 text-2xl font-bold text-white">Admin Access</h2>
          <p className="mb-6 text-sm text-slate-400">Enter the password to continue.</p>

          <label className="mb-2 block text-sm font-medium text-slate-300" htmlFor="admin-password">
            Password
          </label>
          <input
            id="admin-password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none ring-0 placeholder:text-slate-500 focus:border-amber-500"
            placeholder="Enter password"
          />

          {error && <p className="mt-3 text-sm text-red-400">{error}</p>}

          <button
            type="submit"
            className="mt-6 w-full rounded-xl bg-amber-500 px-4 py-3 font-semibold text-slate-950 transition hover:bg-amber-400"
          >
            Unlock Dashboard
          </button>
        </form>
      </div>
    );
}

return (
    <section className="py-16 px-4 max-w-7xl mx-auto min-h-screen text-white">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 border-b border-slate-800 pb-6 gap-4">
        <div>
          <span className="text-amber-500 font-semibold uppercase tracking-widest text-sm">🔒 Management Portal</span>
          <h1 className="text-3xl font-extrabold mt-1">Admin Dashboard</h1>
          <a href="/" className="mt-2 inline-block text-sm text-amber-400 hover:text-amber-300">Back to website</a>
        </div>
        <div className="flex space-x-2 bg-slate-900 p-1.5 rounded-xl border border-slate-800 w-full justify-center md:justify-end md:w-[400px]">
          <button 
            onClick={() => setActiveTab('bookings')}
            className={`px-6 py-2 rounded-lg font-medium text-sm transition ${activeTab === 'bookings' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-gray-400 hover:text-white'}`}
          >
            Trial Bookings ({bookings.length})
          </button>
          <button 
            onClick={() => setActiveTab('contacts')}
            className={`px-6 py-2 rounded-lg font-medium text-sm transition ${activeTab === 'contacts' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-gray-400 hover:text-white'}`}
          >
            Contact Messages ({contacts.length})
          </button>
        </div>
      </div>

      {dataError && <p role="alert" className="mb-4 text-sm text-red-400">{dataError}</p>}

      {activeTab === 'bookings' ? (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl shadow-xl overflow-hidden">
          <div className="p-6 border-b border-slate-800">
            <h2 className="text-xl font-bold">Free Trial Sign-ups</h2>
            <p className="text-gray-400 text-sm">Review users who have booked trial coaching sessions.</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-950 text-gray-400 text-xs uppercase tracking-wider border-b border-slate-800">
                  <th className="p-4">Name</th>
                  <th className="p-4">Contact Info</th>
                  <th className="p-4">Goal</th>
                  <th className="p-4">Date & Time</th>
                  <th className="p-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-sm">
                {bookings.length === 0 ? (
                  <tr><td colSpan="5" className="p-6 text-center text-gray-500">No booking requests found.</td></tr>
                ) : (
                  bookings.map((item) => (
                    <tr key={item.id} className="hover:bg-slate-850 transition">
                      <td className="p-4 font-semibold text-white">{item.name}</td>
                      <td className="p-4 text-gray-300">
                        <div>{item.email}</div>
                        <div className="text-xs text-gray-500">{item.phone}</div>
                      </td>
                      <td className="p-4"><span className="bg-amber-500/10 text-amber-400 px-3 py-1 rounded-full text-xs font-semibold">{item.goal}</span></td>
                      <td className="p-4 text-gray-300">{item.date} at <span className="text-amber-400 font-medium">{item.time}</span></td>
                      <td className="p-4 text-right">
                        <button 
                          onClick={() => handleDeleteBooking(item.id)}
                          className="bg-red-500/10 hover:bg-red-500 text-red-400 hover:text-white px-3 py-1.5 rounded-lg text-xs font-semibold transition"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl shadow-xl overflow-hidden">
          <div className="p-6 border-b border-slate-800">
            <h2 className="text-xl font-bold">Inbound Contact Messages</h2>
            <p className="text-gray-400 text-sm">Review inquiries sent through the website contact form.</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-950 text-gray-400 text-xs uppercase tracking-wider border-b border-slate-800">
                  <th className="p-4">Subject</th>
                  <th className="p-4">Message</th>
                  <th className="p-4">Received</th>
                  <th className="p-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-sm">
                {contacts.length === 0 ? (
                  <tr><td colSpan="4" className="p-6 text-center text-gray-500">No contact messages found.</td></tr>
                ) : (
                  contacts.map((item) => (
                    <tr key={item.id} className="hover:bg-slate-850 transition">
                      <td className="p-4 font-semibold text-white">{item.subject}</td>
                      <td className="p-4 text-gray-300 max-w-xs">{item.message}</td>
                      <td className="p-4 text-gray-400">{item.createdAt ? new Date(item.createdAt).toLocaleString() : '—'}</td>
                      <td className="p-4 text-right">
                        <button 
                          onClick={() => handleDeleteContact(item.id)}
                          className="bg-red-500/10 hover:bg-red-500 text-red-400 hover:text-white px-3 py-1.5 rounded-lg text-xs font-semibold transition"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </section>
  );
}