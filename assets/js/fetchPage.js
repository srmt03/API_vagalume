const hotspot = async () => {
    const url = `https://api.vagalume.com.br/hotspots.php?apikey={e2bbefd6f2ae71722c41c7c3fddac649}`
    const response = await fetch(url)
    const data = await response.json()
    return data
}

export { hotspot }