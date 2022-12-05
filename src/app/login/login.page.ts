import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formRegistro: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formRegistro = this.formBuilder.group({
      nome: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      cpf: ['',  Validators.compose([Validators.required, Validators.minLength(11)])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      senha: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      confirmaSenha: ['',  Validators.compose([Validators.required, Validators.minLength(6)])]

    });
    // o minLength, serve para colocar o minimos de dados para vocÊ validar, exemplo
    //coloque no minimo 3 letras ou nao vai funcionar e o mesmo vale com o maxLenght
   }

  ngOnInit() {
  }

}
