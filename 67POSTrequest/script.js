const createTodo = async (todo) => {
        let options = {
                method: "POST",
                headers: {
                        "Content-type": "application/json"
                },
                body: JSON.stringify(todo),
        }
        let p = await fetch('https://jsonplaceholder.typicode.com/posts', options)
        let response = await p.json()
        return response
}

const getTodo = async (id) => {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts/' + id)
        let r = await response.json()
        return r
}

const mainFunc = async () => {
        let todo = {
                title: 'Harry2',
                body: 'bhai2',
                userId: 1100,
        }
        let todor = await createTodo(todo)
        console.log(todor)
        console.log(await getTodo(101))
}

mainFunc()