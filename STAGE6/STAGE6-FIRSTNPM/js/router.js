export class Router {
    routes = {}
    add(nome, link){
        this.routes[nome] = link
    }
    route(event) {
      event = event || window.event
      event.preventDefault()
      window.history.pushState({}, "", event.target.href)
      this.handle()
    }
      handle(){
        const {pathname} = window.location
        const route = this.routes[pathname] || this.routes[404]
        fetch(route)
            .then(data => data.text())
            .then(html => 
            document.querySelector("#app").innerHTML = html)
            if(pathname == '/universe'){
                let html = document.querySelector("html")
                html.classList.add("universe")
             }
             else{
                let html = document.querySelector("html")
                html.classList.remove("universe")
             }
             if(pathname == '/'){
                let html = document.querySelector("html")
                html.classList.add("home")
             }
             else{
                let html = document.querySelector("html")
                html.classList.remove("home")
             }
             if(pathname == '/exploration'){
               let html = document.querySelector("html")
               html.classList.add("exploration")
            }
            else{
               let html = document.querySelector("html")
               html.classList.remove("exploration")
            }
            if(pathname == '/exploration'){
               let html = document.querySelector("html")
               html.classList.add("exploration")
            }
            else{
               let html = document.querySelector("html")
               html.classList.remove("exploration")
            }
    }

}