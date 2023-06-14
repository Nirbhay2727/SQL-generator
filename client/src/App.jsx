import styles from './index.module.css'
import sqlLogo from './assets/sql-logo.png'
import { useState } from "react";

function App() {
  const[query, setQuery] = useState("")
  const onSubmit = (e) => {
    e.preventDefault()
    console.log("query:",query);
  }  
  return (
    <main className={styles.main}>
      <img src={sqlLogo} alt="SQL Logo" className={styles.icon}/>
      <h3> Generate SQL with AI</h3>
      <form onSubmit={onSubmit}>
        <input 
          type="text" 
          name="query descriptor"
          placeholder="Describe your query" 
          onChange={(e) => setQuery(e.target.value)}
        />
        <input type="submit" value="Generate SQL" />
      </form>
    </main>  
  )
}

export default App
