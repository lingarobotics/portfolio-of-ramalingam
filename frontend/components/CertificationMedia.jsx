function getEmbedUrl(url) {
  try {
    const parsedUrl = new URL(url)

    if (parsedUrl.hostname === 'youtu.be') {
      return `https://www.youtube.com/embed/${parsedUrl.pathname.slice(1)}`
    }

    if (parsedUrl.hostname.endsWith('youtube.com') && parsedUrl.searchParams.get('v')) {
      return `https://www.youtube.com/embed/${parsedUrl.searchParams.get('v')}`
    }

    if (parsedUrl.hostname.endsWith('vimeo.com')) {
      const videoId = parsedUrl.pathname.split('/').filter(Boolean).pop()
      return videoId ? `https://player.vimeo.com/video/${videoId}` : null
    }
  } catch {
    return null
  }

  return null
}

function CertificationMedia({ media }) {
  if (media.type === 'image') {
    return <img src={media.url} alt={media.label} className="h-auto max-h-[75vh] w-full object-contain" />
  }

  const embedUrl = getEmbedUrl(media.url)

  if (embedUrl) {
    return <iframe src={embedUrl} title={media.label} className="aspect-video w-full" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
  }

  return (
    <video className="w-full" controls aria-label={media.label}>
      <source src={media.url} />
      Your browser does not support video playback.
    </video>
  )
}

export default CertificationMedia