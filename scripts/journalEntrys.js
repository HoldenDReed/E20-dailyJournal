const journalEntrys = [
    {
        id: 1,
        date: "03/02/2022",
        concept: "Complex HTML",
        entry: "Today I used html to make cards.",
        mood: "Excited 😁",
    },
    {
        id: 2,
        date: "05/02/2022",
        concept: "Complex Flexbox",
        entry: "Today I used flex box to make cards in a grid.",
        mood: "Sleepy 🐱‍👤",
    },
    {
        id: 3,
        date: "06/02/2022",
        concept: "Basic JavaScript",
        entry: "Today I used JavaScript to manipulate html.",
        mood: "Sad 😢",
    },
    {
        id: 4,
        date: "07/02/2022",
        concept: "JaveScript Loops",
        entry: "Today I used JavaScript to make a loop.",
        mood: "Excited 😁",
    }
]

export const getJournalEntrys = () => {
    const copyOfJournalEntrys = journalEntrys.map(entrys => ({ ...entrys }))
    return copyOfJournalEntrys
}