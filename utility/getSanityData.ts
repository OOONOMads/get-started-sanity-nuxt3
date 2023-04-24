export async function fetchLandingPage(PROJECT_ID, DATASET, LANDING_PAGE) {
  const QUERY = encodeURIComponent(`*[_type == "${LANDING_PAGE}"]`);
  const URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;

  try {
    const res = await fetch(URL);
    const { result } = await res.json();
    return result;
  } catch (err) {
    console.error(err);
  }
}
