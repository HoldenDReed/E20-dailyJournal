import { getJournalEntrys, addNewJournalEntry } from "./database.js"

export const displayQuotes = () => {
    const journalEntrys = getJournalEntrys()
    let quotesHtml = ""
    journalEntrys.forEach(entry => {
        quotesHtml += `<div class="singleQuote">
    <p>${entry.date}</p>
    <p>${entry.concept}</p>
    <p>${entry.entry}</p>
    <p>${entry.mood}</p>
    <button class="entryButtons" id="editButton">Edit</button>
    <button class="entryButtons" id="removeButton">Remove</button>
    </div>`
    })
    return quotesHtml
};

document.addEventListener("click", (e) => {
 
    if (e.target.id === "submitJournalEntry") {
      // Need logic to get all the values from the form, 
      // format them into an object and add that object to the `orders` array in `orders.js`
      const dateElement = document.querySelector("input[name=entryDate")?.value

      const conceptElement= document.querySelector("input[name=conceptCovered")?.value

      const entryElement =  document.getElementById("journalEntry")?.value

      const moodElement = document.getElementById("moods")?.value
    
      let newJournalEntry =
      {
        date: dateElement,
        concept: conceptElement,
        entry: entryElement,
        mood: moodElement
      }
      console.log(newJournalEntry)
      addNewJournalEntry(newJournalEntry)
    }
});
    
// document.getElementById('quotes').innerHTML = htmlQuotes
//     {
//         id: 1,
//         date: "2022-02-04",
//         concept: "Complex HTML",
//         entry: "Today I used html to make cards.",
//         mood: "Excited 😁",
//     },
//     {
//         id: 2,
//         date: "2022-02-06",
//         concept: "Complex Flexbox",
//         entry: "Today I used flex box to make cards in a grid.",
//         mood: "Sleepy 🐱‍👤",
//     },
//     {
//         id: 3,
//         date: "2022-02-09",
//         concept: "Basic JavaScript",
//         entry: "Today I used JavaScript to manipulate html.",
//         mood: "Sad 😢",
//     },
//     {
//         id: 4,
//         date: "2022-02-15",
//         concept: "JaveScript Loops",
//         entry: "Today I used JavaScript to make a loop.",
//         mood: "Excited 😁",
//     }
// ]
// const getNewJournalEntryId = () => {
//     let highestJournalEntryId = journalEntrys.sort((a, b) => b.id - a.id)[0].id
//     return highestJournalEntryId + 1
//   }
//   console.log(getNewJournalEntryId())
  
//   export const addNewJournalEntry = (journalEntry) => {
//     const newId = getNewJournalEntryId()
//     journalEntry.id = newId
//     journalEntrys.push(journalEntry)
//     console.log(journalEntrys)
   
//     document.dispatchEvent(new CustomEvent("stateChanged"))
//   }
// export const getJournalEntrys = () => {
//     const copyOfJournalEntrys = journalEntrys.map(entrys => ({ ...entrys }))
//     return copyOfJournalEntrys
// }