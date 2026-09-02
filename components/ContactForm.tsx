'use client';

import { useState } from 'react';
import type { Dictionary } from '@/lib/dictionaries';

// Tres campos, como pide el rediseño. El campo "contacto" acepta email o
// teléfono indistintamente, así que la API no valida formato de email acá.
export default function ContactForm({ dict }: { dict: Dictionary }) {
  const t = dict.contacto;
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('failed');
      setStatus('sent');
      form.reset();
    } catch {
      setStatus('error');
    }
  };

  if (status === 'sent') {
    return (
      <div className="flex flex-col justify-center border-t-2 border-ink pt-8">
        <p className="aside-serif text-3xl text-ink">{t.thanks}</p>
        <p className="mt-3 text-prose">{t.thanksBody}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div>
        <label htmlFor="nombre" className="label mb-2 block text-label">
          {t.nombre}
        </label>
        <input id="nombre" name="nombre" required placeholder={t.nombrePlaceholder} className="field-line" />
      </div>
      <div>
        <label htmlFor="contacto" className="label mb-2 block text-label">
          {t.contacto}
        </label>
        <input id="contacto" name="contacto" required placeholder={t.contactoPlaceholder} className="field-line" />
      </div>
      <div>
        <label htmlFor="mensaje" className="label mb-2 block text-label">
          {t.mensaje}
        </label>
        <textarea id="mensaje" name="mensaje" rows={4} placeholder={t.mensajePlaceholder} className="field-line resize-y" />
      </div>
      <button type="submit" disabled={status === 'sending'} className="btn btn-ink self-start disabled:opacity-50">
        {status === 'sending' ? t.sending : t.submit}
      </button>
      <p className="aside-serif text-xl text-ink md:text-2xl">{t.aside}</p>
      {status === 'error' && <p className="text-sm text-wine">{t.error}</p>}
    </form>
  );
}
