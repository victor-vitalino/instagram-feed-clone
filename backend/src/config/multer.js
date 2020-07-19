import multer from 'multer';
import { resolve, extname } from 'path';
import crypto from 'crypto';

export default {
  storage: multer.diskStorage({
    destination: resolve(__dirname, '..', '..', 'uploads'),
    filename: (req, file, cb) => {
      // modificando nome
      crypto.randomBytes(16, (err, res) => {
        if (err) return cb(err);
        // retorna nome do arquivo  = string aleatoria + extensão
        return cb(null, res.toString('hex') + extname(file.originalname));
      });
    },
  }),
};
