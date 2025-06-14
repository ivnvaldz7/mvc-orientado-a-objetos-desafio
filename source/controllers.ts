import { ContactsCollection } from "./models";
export interface ContactsControllerOptions {
  action: "get" | "save"; 
  params: any; 
}

export class ContactsController{
  model: ContactsCollection
  constructor() {
    //instancia y ejecución de load()
    this.model = new ContactsCollection()
    this.model.load()
  } 
  processOptions(op:ContactsControllerOptions){
    switch (op.action){
      case 'get':
        if(op.params && op.params.id){
          return this.model.getOneById(op.params.id)
        }else{
          return this.model.getAll()
        }
        case 'save':
          this.model.addOne(op.params)
          this.model.save()
          return {message: 'Contacto guardado correctamente'}
    }
  }
}

