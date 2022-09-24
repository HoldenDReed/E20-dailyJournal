import { fetchJournalEntrys } from "./database.js"
import { displayQuotes } from "./journalEntrys.js"

const mainContainer = document.getElementById("entries")

const render = async () => {
    await fetchJournalEntrys()
    mainContainer.innerHTML = displayQuotes()
}

render()

document.addEventListener("stateChanged", (event) => {
  render()
})
