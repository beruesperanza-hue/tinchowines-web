import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const { nombre, contacto, mensaje } = data;

    if (!nombre || !contacto) {
      return NextResponse.json({ error: 'Faltan nombre y contacto' }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      // Sin RESEND_API_KEY (ej. en desarrollo local) sólo se loguea, para no
      // bloquear la prueba del formulario.
      console.log('Consulta de contacto (RESEND_API_KEY no configurada):', data);
      return NextResponse.json({ ok: true });
    }

    // El campo "contacto" puede ser email o teléfono: sólo se usa como
    // reply-to cuando efectivamente parece un email.
    const esEmail = typeof contacto === 'string' && /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(contacto.trim());

    const resend = new Resend(apiKey);
    await resend.emails.send({
      from: process.env.CONTACT_EMAIL_FROM || 'Tincho Wines <web@tinchowines.com>',
      to: process.env.CONTACT_EMAIL_TO || 'hello@tinchowines.com',
      ...(esEmail ? { replyTo: contacto.trim() } : {}),
      subject: `Consulta desde tinchowines.com — ${nombre}`,
      text: [`Nombre y negocio: ${nombre}`, `Contacto: ${contacto}`, '', 'Mensaje:', mensaje || '—'].join('\n'),
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Error enviando la consulta de contacto:', error);
    return NextResponse.json({ error: 'No se pudo enviar el mensaje' }, { status: 500 });
  }
}
