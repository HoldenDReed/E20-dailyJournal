import { getJournalEntrys } from "./journalEntrys.js"
import { addNewJournalEntry } from "./journalEntrys.js"
// getJournalEntrys = journal
// journalEntrys.forEach(function(journalEntrys){
//     console.log(journalEntrys)
// });
// journalEntrys.forEach(function(journalEntrys){
//     console.log(journalEntrys.concept)
// });
// for(journal of journalEntrys){
//     if(journal.id % 2 != 0) {
//         console.log(journal.id);
//      }
// }
const displayQuotes = () => {
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
    document.getElementById('entries').innerHTML = quotesHtml
};
displayQuotes()

document.addEventListener("click", (e) => {
    if (e.target.id === "submitJournalEntry") {
      // Need logic to get all the values from the form, 
      // format them into an object and add that object to the `orders` array in `orders.js`
      const dateElement = document.querySelector("input[name=entryDate")?.value

      const conceptElement= document.querySelector("input[name=conceptCovered")?.value

      const entryElement =  document.getElementById("journalEntry")?.value

      const moodElement = document.querySelector("input[name=moods")?.value
    
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
    
document.addEventListener("stateChanged", event => {
    displayQuotes()
  })
