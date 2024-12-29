import videos from 'videos.json';
interface Episode {
  id: number;
  title: string;
  link: string;
  date: string;
  thumbnail: string;
}

const episodes: Episode[] = []
videos.forEach(video => {
  episodes.push({
    id: video.id,
    title: video.title,
    link: video.link,
    date: video.date,
    thumbnail: video.thumbnail
  })
});

export default episodes;
  