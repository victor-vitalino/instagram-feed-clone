import sharp from 'sharp';
import { resolve } from 'path';
import { unlinkSync } from 'fs';
import Post from '../models/Post';

class PostController {
  async index(req, res) {
    const posts = await Post.find().sort('-createdAt');
    return res.json(posts);
  }

  async store(req, res) {
    const { author, place, description, hashtags } = req.body;
    const { filename: image } = req.file;

    const [name] = image.split('.');
    const filename = `${name}.jpg`;

    await sharp(req.file.path)
      .resize(500) // redimensiona
      .jpeg({ quality: 70 }) // joeg com 70% da qualidade
      .toFile(resolve(req.file.destination, 'resized', filename)); // destino e nome da image

    const post = await Post.create({
      author,
      place,
      description,
      hashtags,
      image: filename,
    });
    // excluindo imagem nao redimensionada
    unlinkSync(req.file.path);

    req.io.emit('post', post);
    return res.json(post);
  }
}

export default new PostController();
