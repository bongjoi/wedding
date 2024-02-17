function generateImageUrl({
  filename,
  format,
  option = 'q_auto,c_fill'
}: {
  filename: string;
  format: 'jpg' | 'webp';
  option?: string;
}) {
  return `https://res.cloudinary.com/devbgram/image/upload/${option}/v1708174585/${format}/${filename}.${format}`;
}

export default generateImageUrl;
