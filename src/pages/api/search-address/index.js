
export default async function handler(req, res) {
  const baseUrl = "https://api.mapbox.com/search/searchbox/v1/suggest";

  const { q: searchText } = req.query; 

  // Generate a session token


  try {
    const response = await fetch(
      `${baseUrl}?q=${searchText}&language=en&limit=8&session_token=c4871931-17fb-412b-85ca-c71923ac577a&country=US&access_token=${process.env.NEXT_PUBLIC_MAPBOX}`, 
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      return res.status(response.status).json({ error: response.statusText });
    }

    const searchResult = await response.json();
    res.status(200).json(searchResult);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
}
