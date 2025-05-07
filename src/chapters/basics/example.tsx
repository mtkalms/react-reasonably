import { useState } from "react"

function Test() {
    const [name, setName] = useState<string>("");
    
    return <div className="flex gap-4">
        <label>Name:</label>
        <input 
            value={name} 
            onChange={(event) => setName(event.target.value)}
        />
    </div>
}
export default Test