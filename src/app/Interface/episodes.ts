import videos from 'videos.json';
const episodes: any[] = []
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
  