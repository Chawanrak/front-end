export async function getAllMovies() {
    try {
      const response = await fetch("http://api.se-rmutl.net//api/movie/all");
  
      return await response.json();
    } catch (error) {
      return [];
    }
  }
  
  export async function createMovie(data) {
    const response = await fetch(`http://api.se-rmutl.net//api/movie/insert`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data }),
    });
    return await response.json();
  }
  