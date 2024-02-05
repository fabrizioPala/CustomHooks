export function useGitHubUser(){
    const [data,setData]=useState(null)
    const [error,setError]=useState(null)
    const [loading,setLoading]=useState(false)
    async function fetchData(username){
        try {
            setLoading(true)
    const res= await fetch(`https://api.github.com/users/${username}`)
    const users= await res.json()
    setData(users)
    setError(null)

        } catch (error) {
            console.log("Errore")
            setData(null)
            setError(error)
            
        }finally{
  setLoading(false)
    }}
    return{
        data,
        error,
        loading,
        fetchData
    }
}