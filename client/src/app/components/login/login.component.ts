import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component ({
	selector: 'login',
	templateUrl: './login.component.html',
	providers: [UserService]
})

export class LoginComponent implements OnInit{
	
	public title:string;
	public user:User;
	public status: string;
	public identity;
	public token;

	constructor(
		private _route: ActivatedRoute,
		private _router: Router,
		private _userService: UserService

	) {
		this.title = 'Identificate';
		this.user = new User("","",	"",	"",	"",	"",	"ROLE_USER", "");
	}
	
	ngOnInit() {
		console.log('Componente de login cargado...');
	}

	onSubmit() {
		//loguear al usuario y conseguir sus datos
		this._userService.signup(this.user).subscribe(
			response => {
				this.identity = response.user;

				if(!this.identity || !this.identity._id) {
					this.status = 'error';
				}else{
					this.status = 'success';

					//persistir datos de usuario, no guarda objetos solo string, numeros..
					localStorage.setItem('identity', JSON.stringify(this.identity));

					this.getToken();

				}


			},
			error => {
				var errorMessage = <any>error;

				if (errorMessage != null) {
					this.status = 'error';
				}
			}
		);
	}


	getToken() {
		this._userService.signup(this.user, 'true').subscribe(
			response => {
				this.token = response.token;

				if(this.token.length < 0) {
					this.status = 'error';
				}else{
					//persistir datos de usuario, no guarda objetos solo string, numeros..
					localStorage.setItem('token', this.token);

					//conseguir los contadores o estadisticas del usuario
					this.getCounters();
					

				}


			},
			error => {
				var errorMessage = <any>error;

				if (errorMessage != null) {
					this.status = 'error';
				}
			}
		);
	}


	getCounters() {

		this._userService.getCounters().subscribe(
			response => {
				localStorage.setItem('stats', JSON.stringify(response));
				this.status = 'success';
				this._router.navigate(['/']);
				
			},
			error => {

			}
		)
	}

	

}