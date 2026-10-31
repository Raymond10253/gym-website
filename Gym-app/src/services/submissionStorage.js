const BOOKINGS_KEY = "gym-bookings";
const CONTACTS_KEY = "gym-contacts";

function readRecords(key) {
  const serializedRecords = localStorage.getItem(key);
  if (serializedRecords === null) {
    return [];
  }

  const records = JSON.parse(serializedRecords);
  if (!Array.isArray(records)) {
    throw new Error("Saved form data has an invalid format.");
  }

  return records;
}

function saveRecord(key, record) {
  const records = readRecords(key);
  const savedRecord = {
    ...record,
    id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
    createdAt: new Date().toISOString(),
  };

  localStorage.setItem(key, JSON.stringify([...records, savedRecord]));
  window.dispatchEvent(new Event("gym-data-updated"));
}

function deleteRecord(key, id) {
  const records = readRecords(key);
  localStorage.setItem(
    key,
    JSON.stringify(records.filter((record) => record.id !== id)),
  );
  window.dispatchEvent(new Event("gym-data-updated"));
}

export function getBookings() {
  return readRecords(BOOKINGS_KEY);
}

export function saveBooking(booking) {
  saveRecord(BOOKINGS_KEY, booking);
}

export function deleteBooking(id) {
  deleteRecord(BOOKINGS_KEY, id);
}

export function getContacts() {
  return readRecords(CONTACTS_KEY);
}

export function saveContact(contact) {
  saveRecord(CONTACTS_KEY, contact);
}

export function deleteContact(id) {
  deleteRecord(CONTACTS_KEY, id);
}
