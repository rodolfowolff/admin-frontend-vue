export async function getGithubUser(username) {
  const response = await fetch(`https://api.github.com/users/${username}`);
  try {
    const user = await response.json();
    return user;
  }
  catch (error) {
    console.log("error", error);
  }
}
