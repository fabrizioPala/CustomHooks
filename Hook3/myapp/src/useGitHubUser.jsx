export function useGitHubUser(username){
    const [data, setData] = useState(null);

    useEffect(() => {
      fetch(`https://api.github.com/users/${username}`)
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          setData(json);
        })
        .catch((error) => {
          console.error("Error fetching GitHub user:", error);
        });
    }, [username]);
    return data
}