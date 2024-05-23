window.onload = () => {
    document.querySelector("form").addEventListener("submit", function () {
        event.preventDefault()

        const form = document.querySelector("form")

        const formData = new FormData(form)
        const userdata = Object.fromEntries(formData)

        console.log(userdata);
    })
}