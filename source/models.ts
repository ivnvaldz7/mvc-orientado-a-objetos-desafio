//  Será el único encargado de hablar con el archivo contacts.json. Su único trabajo es leer, agregar, buscar y guardar contactos en ese archivo.
import * as fs from "fs";
import * as path from "path";
import "./contacts.json";
const contactsFilePath = path.join(__dirname, "contacts.json");
//defino una interfaz para el contacto
export interface Contact {
  id: number;
  name: string;
}
export class ContactsCollection {
  //defino una propiedad que será un array de contactos
  contacts: Contact[];
  constructor() {
    this.contacts = [];
  }
  load() {
    const data = fs.readFileSync(contactsFilePath, "utf-8");
    this.contacts = JSON.parse(data);
  }
  getAll(): Contact[] {
    return this.contacts;
  }
  addOne(contact: Contact): void {
    this.contacts.push(contact);
  }
  save(){
    const data = JSON.stringify(this.contacts, null, 2);
    fs.writeFileSync(contactsFilePath, data, "utf-8");
  }
  getOneById(id): Contact | undefined {
    return this.contacts.find(contact => contact.id === id);
  }
}
