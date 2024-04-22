// pages/api/preguntas.js
import { query } from '../../lib/db';

export default async function handler(req, res) {
    try {
        const results = await query('SELECT * FROM preguntas');
        res.status(200).json(results);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}