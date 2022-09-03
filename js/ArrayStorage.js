// Stockage local de nos tâches

class ArrayStorage {

    constructor(name){
        this.name = name
        this.list = this.get()
    }

    // récuperer les valeurs du tableau 
    get() {
        if(!localStorage.getItem(this.name)){
            localStorage.setItem(this.name,'[]')
        }
        return JSON.parse(localStorage.getItem(this.name))
    }

    // ajouter une valeur dans le tableau 
    set(value){

        this.list.push(value)
        localStorage.setItem(this.name,JSON.stringify(this.list))
    }


    // supprimer une valeur dans le tableau
    remove(value){
        const index = this.list.indexOf(value)
        this.list.splice(index,1)
        localStorage.setItem(this.name,JSON.stringify(this.list))

    }

    // vider le tableau 
    clear(){
        localStorage.removeItem(this.name)

    }
}

