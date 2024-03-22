import {BsSearch} from "react-icons/bs"
import { useState, KeyboardEvent} from "react"
import styles from "./Search.module.css"
import { keyboardKey } from "@testing-library/user-event"

type SearchProps = 
{
    loadUser: (userName : string) => Promise<void>
}



export default function Search({loadUser} : SearchProps)
{

    const [userName, setUserName] = useState<string>("")

    const handleKeyDown = (e : KeyboardEvent ) =>
    {
        if(e.key === "Enter")
        {
            loadUser(userName)
        }
    }

    return(
        <div className={styles.Search}>
            <h2>Busque por usuário</h2>
            <p>Conheça os melhores repositórios</p>
            <div className={styles.Search_container}>
                <input type="text" 
                placeholder="Digite o nome do usuário" 
                onChange={(e) => setUserName(e.target.value)}
                onKeyDown={handleKeyDown}
                />    
                <button onClick={() => loadUser(userName)}>
                    <BsSearch/>
                </button>
            </div>
        </div>
    )
}