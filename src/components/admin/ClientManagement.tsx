import React, { useEffect, useState } from 'react';

interface Client {
  id: string;
  name: string;
  email: string;
  company: string;
}

const API_BASE = '/api/users/clients';

const ClientManagement: React.FC = () => {
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({ name: '', email: '', company: '', password: '' });
  const [editId, setEditId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState({ name: '', email: '', company: '', password: '' });

  // Fetch all clients
  const fetchClients = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(API_BASE, { credentials: 'include' });
      const data = await res.json();
      if (!data.success) throw new Error(data.error || 'Failed to fetch clients');
      setClients(data.clients.map((c: any) => ({
        id: c._id || c.id,
        name: c.name,
        email: c.email,
        company: c.company,
      })));
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchClients();
  }, []);

  // Handle add client
  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      const res = await fetch(API_BASE, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!data.success) throw new Error(data.error || 'Failed to add client');
      setForm({ name: '', email: '', company: '', password: '' });
      fetchClients();
    } catch (err: any) {
      setError(err.message);
    }
  };

  // Handle edit client
  const handleEdit = (client: Client) => {
    setEditId(client.id);
    setEditForm({ name: client.name, email: client.email, company: client.company, password: '' });
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editId) return;
    setError(null);
    try {
      const res = await fetch(`${API_BASE}/${editId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(editForm),
      });
      const data = await res.json();
      if (!data.success) throw new Error(data.error || 'Failed to update client');
      setEditId(null);
      setEditForm({ name: '', email: '', company: '', password: '' });
      fetchClients();
    } catch (err: any) {
      setError(err.message);
    }
  };

  // Handle delete client
  const handleDelete = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this client?')) return;
    setError(null);
    try {
      const res = await fetch(`${API_BASE}/${id}`, {
        method: 'DELETE',
        credentials: 'include',
      });
      const data = await res.json();
      if (!data.success) throw new Error(data.error || 'Failed to delete client');
      fetchClients();
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Client Management</h2>
      {error && <div className="text-red-500 mb-2">{error}</div>}
      <form onSubmit={handleAdd} className="mb-6 flex flex-col md:flex-row gap-2 items-center">
        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
          className="border rounded px-2 py-1"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
          className="border rounded px-2 py-1"
          required
        />
        <input
          type="text"
          placeholder="Company"
          value={form.company}
          onChange={e => setForm(f => ({ ...f, company: e.target.value }))}
          className="border rounded px-2 py-1"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={e => setForm(f => ({ ...f, password: e.target.value }))}
          className="border rounded px-2 py-1"
          required
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-1 rounded">Add</button>
      </form>
      {loading ? (
        <div>Loading clients...</div>
      ) : (
        <table className="w-full border rounded">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 text-left">Name</th>
              <th className="p-2 text-left">Email</th>
              <th className="p-2 text-left">Company</th>
              <th className="p-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {clients.map(client => (
              <tr key={client.id} className="border-t">
                <td className="p-2">
                  {editId === client.id ? (
                    <input
                      type="text"
                      value={editForm.name}
                      onChange={e => setEditForm(f => ({ ...f, name: e.target.value }))}
                      className="border rounded px-2 py-1"
                      required
                    />
                  ) : (
                    client.name
                  )}
                </td>
                <td className="p-2">
                  {editId === client.id ? (
                    <input
                      type="email"
                      value={editForm.email}
                      onChange={e => setEditForm(f => ({ ...f, email: e.target.value }))}
                      className="border rounded px-2 py-1"
                      required
                    />
                  ) : (
                    client.email
                  )}
                </td>
                <td className="p-2">
                  {editId === client.id ? (
                    <input
                      type="text"
                      value={editForm.company}
                      onChange={e => setEditForm(f => ({ ...f, company: e.target.value }))}
                      className="border rounded px-2 py-1"
                      required
                    />
                  ) : (
                    client.company
                  )}
                </td>
                <td className="p-2 flex gap-2">
                  {editId === client.id ? (
                    <>
                      <input
                        type="password"
                        placeholder="New Password (optional)"
                        value={editForm.password}
                        onChange={e => setEditForm(f => ({ ...f, password: e.target.value }))}
                        className="border rounded px-2 py-1"
                      />
                      <button onClick={handleUpdate} className="bg-green-600 text-white px-2 py-1 rounded">Save</button>
                      <button onClick={() => setEditId(null)} className="bg-gray-400 text-white px-2 py-1 rounded">Cancel</button>
                    </>
                  ) : (
                    <>
                      <button onClick={() => handleEdit(client)} className="bg-yellow-500 text-white px-2 py-1 rounded">Edit</button>
                      <button onClick={() => handleDelete(client.id)} className="bg-red-600 text-white px-2 py-1 rounded">Delete</button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ClientManagement; 