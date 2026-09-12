import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
​// Initialisation du client Supabase
const supabaseUrl = import.meta.env.VITE_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_PUBLIC_SUPABASE_ANON_KEY || '';
const supabase = createClient(supabaseUrl, supabaseAnonKey);
​interface NewsletterFormProps {
className?: string;
}
​export const NewsletterForm: React.FC<NewsletterFormProps> = ({ className = '' }) => {
const [email, setEmail] = useState('');
const [isSubmitting, setIsSubmitting] = useState(false);
const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
const [errorMessage, setErrorMessage] = useState('');
​const handleSubmit = async (e: React.FormEvent) => {
e.preventDefault();
if (!email) return;
​setIsSubmitting(true);
setStatus('idle');
setErrorMessage('');
​try {
const { error } = await supabase
.from('newsletters') // Nom de votre table Supabase
.insert([{ email: email, created_at: new Date().toISOString() }]);
​if (error) throw error;
​setStatus('success');
setEmail('');
} catch (err: any) {
console.error('Erreur lors de l’inscription à la newsletter :', err.message);
setStatus('error');
setErrorMessage(err.message || 'Une erreur est survenue.');
} finally {
setIsSubmitting(false);
}
};
​return (
<form onSubmit={handleSubmit} className={space-y-3 ${className}}>
<div className="flex flex-col sm:flex-row gap-2">
<input
type="email"
required
value={email}
onChange={(e) => setEmail(e.target.value)}
placeholder="Votre adresse e-mail"
className="bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white flex-1 focus:outline-none focus:border-amber-400"
/>
<button
type="submit"
disabled={isSubmitting}
className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-semibold px-5 py-2 rounded-lg transition-colors disabled:opacity-50 cursor-pointer"
>
{isSubmitting ? 'Inscription...' : "S'inscrire"}
</button>
</div>
​{status === 'success' && (
<p className="text-emerald-400 text-sm">Inscription réussie ! Merci.</p>
)}
​{status === 'error' && (
<p className="text-rose-400 text-sm">Échec de l'inscription : {errorMessage}</p>
)}
</form>
);
};
export default NewsletterForm;
