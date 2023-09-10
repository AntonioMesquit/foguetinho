export class GithubUser {
    static search(username){
     const endpoint = `https://api.github.com/users/${username}`
     return fetch(endpoint).then(data => data.json()).then(data => ({
        login: data.login,
        name: data.name,
        public_repos: data.public_repos,
        followers: data.followers
     }))
    }
}


export class Favorites {
    constructor(root) {
        this.root = document.querySelector(root)
        this.load()
        this.tbody = this.root.querySelector("table tbody")
     
    }
    load() {
        this.entries = JSON.parse(localStorage.getItem('@github-favorites:')) || [];
    }
    
    save (){
        localStorage.setItem('@github-favorites:' , JSON.stringify(this.entries))
    }
    async add(username){
        try {
            const user = await GithubUser.search(username)

            const usuario = this.entries.find(entry => entry.login === user.login);

            if (usuario) {
                throw new Error('Este usuário já está na lista de favoritos.');
            }   
    
  if(user.login === undefined){
throw new Error('Usuario nao encontrado')
 }


this.entries = [user, ...this.entries]
this.save()
this.update()



}catch(error){
    alert(error.message)

}
    }
 delete(user){
        const filter = this.entries.filter(entry => entry.login !== user.login)
        

        this.entries = filter
        this.update()
        this.save()
    

       
    }
}



export class FavoritesView extends Favorites {
    constructor(root) {
        super(root)
        console.log(this.root)
        this.update()
        this.onadd()
    }


    onadd(){
        const button = this.root.querySelector('.search button') 
        button.onclick = () => {
            const {value} = this.root.querySelector('.search input')
        
            this.add(value)
            

        }
    }
    


    update() {
        this.removeallTr()


        this.entries.forEach(user => {
         const row = this.createRow()
         row.querySelector('.user img').src = `https://github.com/${user.login}.png`
         row.querySelector('.user p').textContent = `${user.name}`
         row.querySelector('.user a').href = `https://github.com/${user.login}`
         row.querySelector('span').textContent = user.login
         row.querySelector('.followers').textContent = user.followers
         row.querySelector('.repositories').textContent = user.public_repos
         row.querySelector(".remove").onclick = () => {
            const isOk= confirm("Certeza que voce deseja deletar?")
            if(isOk){
             this.delete(user)
            }
         }

         this.tbody.append(row)
        })
         
    }
    createRow(){
        const tr = document.createElement("tr")
        const data = `
    
                <td class="user" >
                    <img src="https://github.com/AntonioMesquit.png" alt="">
                    <a href="https://github.com/AntonioMesquit" target="_blank">
                        <p>Antonio Mesquita</p>
                        <span>AntonioMesquit</span>
                    </a>
                </td>
                <td class="repositories">
                    76
                </td>
                <td class="followers">
                 1000
                </td>
                <td><button class="remove">&times;</button></td>
        
    
    
`
tr.innerHTML = data

return tr;
    }
    removeallTr() {
        const tbody = this.root.querySelector("table tbody")
        tbody.querySelectorAll('tr').forEach((tr) => {
         
            tr.remove()
        })
    }
}