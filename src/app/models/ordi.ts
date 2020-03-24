export class Ordi {
    
    id: number;
    model: string;
    marque: string;
    type: string;
    categorie: string;
    date: Date;
    prixAchat: number;
    prixVente: number;

    constructor(id?: number, model?: string, marque?: string, type?: string, categorie?: string, date?: Date, prixAchat?: number, prixVente?: number) {
    this.id = id;
    this.model = model;
    this.marque = marque;
    this.type = type;
    this.categorie = categorie;
    this.date = date;
    this.prixAchat = prixAchat;
    this.prixVente = prixVente;
    }
}