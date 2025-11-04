document.addEventListener('corru_entered', ()=>{
    if(page.path == '/local/beneath/embassy/' || page.path == '/local/ozo/') {
    addResources(["https://raw.githubusercontent.com/C0D3Hermit/ovarianactor/refs/heads/main/ovarianactor.css"])
    addResources(["https://raw.githubusercontent.com/C0D3Hermit/ovarianactor/refs/heads/main/ovarianactor.js"])
    addResources(["https://adenator.neocities.org/corrumods/literallyTooManyHumors.js"]) //quality of life thing
    }
})
