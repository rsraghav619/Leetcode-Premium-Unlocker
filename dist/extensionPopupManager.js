
function fetchLatestUpdate() { 
    let range = "metadata!A1:B4"
    let url =  `https://sheets.googleapis.com/v4/spreadsheets/1hW-bfeFKSkEDzfjaDMjDQmgsupEZz3gysXpG0mrf6QE/values/${range}?key=AIzaSyDDAE3rf1fjLGKM0FUHQeTcsmS6fCQjtDs`
    fetch(url)
    .then(data => data.json())
    .then(data => setTextToElement(data))
}

function setTextToElement(data) { 
    let strings = data["values"]
    for(let i =0; i <= strings.length-1; i ++) { 
        let text = strings[i][0] + ": " + strings[i][1]
        let element = getSpan(text)
        let parent = document.getElementById("data-update-data")
        parent.appendChild(element)
        parent.appendChild(document.createElement('br'))
    }
    // alert(data["values"][2])
    return data["values"][0][1]
}

function getSpan(text){ 
    let span =  document.createElement("span")
    span.textContent = text; 
    return span 
}


fetchLatestUpdate()