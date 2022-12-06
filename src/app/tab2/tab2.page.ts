import { StorageService } from './../services/storage.service';
import { Usuario } from './../models/Usuario';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  listaUsuarios: Usuario[] = [];

  constructor(private sotrageService: StorageService) {}

  async buscarUsuarios() {
    this.listaUsuarios = await this.sotrageService.getAll();
  }

  ionViewDidEnter(){
    this.buscarUsuarios();
  }

  async excluirCadastro(email: string){
    await this.sotrageService.remove(email);
    this.buscarUsuarios();
  }
}
