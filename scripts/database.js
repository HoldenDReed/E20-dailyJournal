const API = "http://localhost:8080"
const applicationState = {
    journalEntrys : []
}

export const fetchJournalEntrys = async () => {
    const dataFetch = await fetch(`${API}/journalEntrys`)
    const journalEntrys = await dataFetch.json()
    // Store the external state in application state
    applicationState.journalEntrys = journalEntrys
  }

    export const getJournalEntrys = () => {
        const copyOfJournalEntrys = applicationState.journalEntrys.map(journalEntry => ({ ...journalEntry }))
        return copyOfJournalEntrys
    }
    export const addNewJournalEntry = async (journalEntry) => {
        const fetchOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(journalEntry)
        }
        const response = await fetch(`${API}/journalEntrys`, fetchOptions)
        const responseJson = await response.json()
        document.dispatchEvent(new CustomEvent("stateChanged"))
        return responseJson
      }
      
      export const deleteJournalEntry = async (id) => {
        await fetch(`${API}/journalEntrys/${id}`, { method: "DELETE" })
        document.dispatchEvent(new CustomEvent("stateChanged"))
      }
      