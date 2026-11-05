import { useState } from "react"

const ADM_PASSWORD = "1234"

export default function AdminDashboard() {
  const [formData, setFormData] = useState({
    admpassword: ""
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    if (formData.admpassword !== ADM_PASSWORD) {
      alert("Password does not match")
      return
    }

    alert("Congratulations, you did it")
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }
  const [activeTab, setActiveTab] = useState('booking')
  return (
    <>
      <div className="w-full p-5">
        <div>
          <h1>Dashboard Management</h1>
        </div>
        <div className="flex justify-end">
          <div>
            <button
            type="button"
            aria-pressed={activeTab === 'booking'}
            className={`font-bold ${activeTab === 'booking' ? 'bg-amber-500 text-slate-900' : ''}`}
            onClick={() => setActiveTab('booking')}
            >
              Bookings
            </button>
            <button
            type="button"
            aria-pressed={activeTab === 'contact'}
            className={`font-bold ${activeTab === 'contact' ? 'bg-amber-500 text-slate-900' : ''}`}
            onClick={() => setActiveTab('contact')}
            >
              contact messages
            </button>
          </div>
        </div>
        <section className="mt-6" aria-live="polite">
          {activeTab === 'booking' ? (
            <div>
              <h2 className="text-xl font-bold">Bookings</h2>
              <div>
                <table>
                  <thead>
                    <tr></tr>
                  </thead>
                </table>
              </div>
            </div>
            
          ) : (
            <h2 className="text-xl font-bold">Contact messages</h2>
          )}
        </section>
      </div>
    </>
  )
}