const loadScript = (src) => {
        return new Promise((resolve, reject) => {
                let script = document.createElement("script")
                script.type = "text/javascript"
                script.src = src
                document.body.appendChild(script)
                script.onload = (script) => {
                        resolve("Script has been loaded sir")
                }
                script.onerror = () => { reject(0) }
        })
}

let p1 = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js")
p1.then((value) => {
        console.log(value)
        return loadScript("https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js")
}).then((value) => {
        console.log("Second script ready")
}).catch((error) => {
        console.log("We are sorry but we are having problems loading this script")
})