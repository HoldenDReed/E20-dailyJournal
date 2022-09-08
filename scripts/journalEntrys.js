const journalEntrys = [
    {
        id: 1,
        date: "2022-02-04",
        concept: "Complex HTML",
        entry: "Today I used html to make cards.",
        mood: "Excited 😁",
    },
    {
        id: 2,
        date: "2022-02-06",
        concept: "Complex Flexbox",
        entry: "Today I used flex box to make cards in a grid.",
        mood: "Sleepy 🐱‍👤",
    },
    {
        id: 3,
        date: "2022-02-09",
        concept: "Basic JavaScript",
        entry: "Today I used JavaScript to manipulate html.",
        mood: "Sad 😢",
    },
    {
        id: 4,
        date: "2022-02-15",
        concept: "JaveScript Loops",
        entry: "Today I used JavaScript to make a loop.",
        mood: "Excited 😁",
    }
]
const getNewJournalEntryId = () => {
    let highestJournalEntryId = journalEntrys.sort((a, b) => b.id - a.id)[0].id
    return highestJournalEntryId + 1
  }
  console.log(getNewJournalEntryId())
  
  export const addNewJournalEntry = (journalEntry) => {
    const newId = getNewJournalEntryId()
    journalEntry.id = newId
    journalEntrys.push(journalEntry)
    console.log(journalEntrys)
   
    document.dispatchEvent(new CustomEvent("stateChanged"))
  }
export const getJournalEntrys = () => {
    const copyOfJournalEntrys = journalEntrys.map(entrys => ({ ...entrys }))
    return copyOfJournalEntrys
}