import {getJournalEntrys} from "./journalEntrys.js"
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
const diplayQuotes = () => {
    const journalEntrys = getJournalEntrys()
let quotesHtml = ""
for(let entry of journalEntrys){
    quotesHtml +=`<div class="singleQuote">
    <p>${entry.date}</p>
    <p>${entry.concept}</p>
    <p>${entry.entry}</p>
    <p>${entry.mood}</p>
    <button class="entryButtons" id="editButton">Edit</button>
    <button class="entryButtons" id="removeButton">Remove</button>
    </div>`
    }
    document.getElementById('entries').innerHTML = quotesHtml
}

diplayQuotes()


