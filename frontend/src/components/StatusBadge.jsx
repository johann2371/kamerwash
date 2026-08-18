import React from 'react';

const STATUS_MAP = {
  pending: { label: 'En attente', bg: 'bg-amber-100', text: 'text-amber-800', dot: 'bg-amber-500' },
  confirmed: { label: 'Confirmé', bg: 'bg-blue-100', text: 'text-blue-800', dot: 'bg-blue-500' },
  in_progress: { label: 'Lavage en cours', bg: 'bg-purple-100', text: 'text-purple-800', dot: 'bg-purple-500' },
  completed: { label: 'Terminé', bg: 'bg-emerald-100', text: 'text-emerald-800', dot: 'bg-emerald-500' },
  cancelled: { label: 'Annulé', bg: 'bg-rose-100', text: 'text-rose-800', dot: 'bg-rose-500' },
};

export default function StatusBadge({ status }) {
  const current = STATUS_MAP[status] || STATUS_MAP.pending;

  return (
    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold ${current.bg} ${current.text}`}>
      <span className={`w-1.5 h-1.5 rounded-full mr-1.5 ${current.dot}`}></span>
      {current.label}
    </span>
  );
}
