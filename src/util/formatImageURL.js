type Thumbnail = {
  path: string,
  extension: string,
};

export default function formatImageURL(thumbnail: Thumbnail) {
  const { extension, path } = thumbnail;
  return `${path}.${extension}`;
}
