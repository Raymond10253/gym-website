import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('bookings');
  const [bookings, setBookings] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!token) return;

    const fetchDashboardData = async () => {
      setLoading(true);
      setError('');

      try {
        const headers = { Authorization: `Bearer ${token}` };
        const [bookingsRes, contactsRes] = await Promise.all([
          axios.get('/api/bookings', { headers }),
          axios.get('/api/contacts', { headers }),
        ]);
        setBookings(bookingsRes.data);
        setContacts(contactsRes.data);
      } catch (err) {
        console.error(err);
        setError(err.response?.data?.error || 'Failed to load dashboard data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, [token]);

  const handlePasswordSubmit = async (event) => {
    event.preventDefault();
    setError('');

    try {
      const response = await axios.post('/api/admin/login', { password });
      setToken(response.data.token);
      setPassword('');
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.error || 'Unable to sign in. Please try again later.');
      setPassword('');
    }
  };

  const handleLogout = () => {
    setToken('');
    setBookings([]);
    setContacts([]);
  };

  const handleDeleteBooking = async (id) => {
    try {
      await axios.delete(`/api/bookings/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setBookings((previousBookings) => previousBookings.filter((booking) => booking.id !== id));
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.error || 'Failed to delete booking. Please try again later.');
    }
  };

  const handleDeleteContact = async (id) => {
    try {
      await axios.delete(`/api/contacts/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setContacts((previousContacts) => previousContacts.filter((contact) => contact.id !== id));
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.error || 'Failed to delete contact message. Please try again later.');
    }
  };

  if (!token) {
    return (
      <section className="min-h-screen px-4 py-32 text-white">
        <div className="mx-auto max-w-md rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-2xl sm:p-12">
          <h1 className="mb-4 text-2xl font-bold">Admin Login</h1>
          {error && (
            <div className="mb-6 rounded-xl border border-red-500/50 bg-red-950/50 p-4 text-center text-sm text-red-300">
              {error}
            </div>
          )}
          <form onSubmit={handlePasswordSubmit} className="space-y-4">
            <div>
              <label htmlFor="admin-password" className="my-2 block font-bold">Password</label>
              <input
                id="admin-password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="w-full rounded-lg border border-slate-700 bg-slate-800 p-3 text-white"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-amber-500 p-3 font-bold text-slate-950 transition hover:bg-amber-400"
            >
              Sign in
            </button>
          </form>
        </div>
      </section>
    );
  }

  if (loading) {
    return <div className="py-32 text-center text-xl text-white">Loading dashboard data...</div>;
  }

  return (
    <section className="mx-auto min-h-screen max-w-7xl px-4 py-16 text-white">
      <div className="mb-10 flex flex-col items-start justify-between gap-4 border-b border-slate-800 pb-6 md:flex-row md:items-center">
        <div>
          <span className="text-sm font-semibold uppercase tracking-widest text-amber-500">Management Portal</span>
          <h1 className="mt-1 text-3xl font-extrabold">Admin Dashboard</h1>
        </div>
        <div className="flex flex-wrap items-center gap-2 rounded-xl border border-slate-800 bg-slate-900 p-1.5">
          <button
            onClick={() => setActiveTab('bookings')}
            className={`rounded-lg px-6 py-2 text-sm font-medium transition duration-300 ${activeTab === 'bookings' ? 'bg-amber-500 text-slate-950' : 'text-white hover:bg-amber-400/20'}`}
          >
            Trial Bookings ({bookings.length})
          </button>
          <button
            onClick={() => setActiveTab('contacts')}
            className={`rounded-lg px-6 py-2 text-sm font-medium transition duration-300 ${activeTab === 'contacts' ? 'bg-amber-500 text-slate-950' : 'text-white hover:bg-amber-400/20'}`}
          >
            Contact Messages ({contacts.length})
          </button>
          <button
            onClick={handleLogout}
            className="rounded-lg px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-slate-800"
          >
            Log out
          </button>
        </div>
      </div>

      {error && (
        <div className="mb-6 rounded-xl border border-red-500/50 bg-red-950/50 p-4 text-center text-sm text-red-300">
          {error}
        </div>
      )}

      {activeTab === 'bookings' ? (
        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-2xl sm:p-12">
          <div className="overflow-x-auto">
            <h2 className="mb-4 text-2xl font-bold">Trial Bookings</h2>
            <table className="w-full border-collapse text-left">
              <thead>
                <tr>
                  <th className="p-4 text-sm font-semibold text-slate-400">Name</th>
                  <th className="p-4 text-sm font-semibold text-slate-400">Email</th>
                  <th className="p-4 text-sm font-semibold text-slate-400">Phone</th>
                  <th className="p-4 text-sm font-semibold text-slate-400">Date</th>
                  <th className="p-4 text-sm font-semibold text-slate-400">Action</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking) => (
                  <tr key={booking.id} className="border-t border-slate-800">
                    <td className="p-4">{booking.name}</td>
                    <td className="p-4">{booking.email}</td>
                    <td className="p-4">{booking.phone}</td>
                    <td className="p-4">{booking.date}</td>
                    <td className="p-4">
                      <button
                        onClick={() => handleDeleteBooking(booking.id)}
                        className="text-red-300 hover:text-red-200"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
                {bookings.length === 0 && (
                  <tr>
                    <td colSpan="5" className="p-4 text-center text-slate-400">No trial bookings yet.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-2xl sm:p-12">
          <div className="overflow-x-auto">
            <h2 className="mb-4 text-2xl font-bold">Contact Messages</h2>
            <table className="w-full border-collapse text-left">
              <thead>
                <tr>
                  <th className="p-4 text-sm font-semibold text-slate-400">Name</th>
                  <th className="p-4 text-sm font-semibold text-slate-400">Email</th>
                  <th className="p-4 text-sm font-semibold text-slate-400">Message</th>
                  <th className="p-4 text-sm font-semibold text-slate-400">Action</th>
                </tr>
              </thead>
              <tbody>
                {contacts.map((contact) => (
                  <tr key={contact.id} className="border-t border-slate-800">
                    <td className="p-4">{contact.name}</td>
                    <td className="p-4">{contact.email}</td>
                    <td className="p-4">{contact.message}</td>
                    <td className="p-4">
                      <button
                        onClick={() => handleDeleteContact(contact.id)}
                        className="text-red-300 hover:text-red-200"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
                {contacts.length === 0 && (
                  <tr>
                    <td colSpan="4" className="p-4 text-center text-slate-400">No contact messages yet.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </section>
  );
}
