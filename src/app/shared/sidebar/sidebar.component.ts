import { Component, OnInit } from '@angular/core';
import { HomeComponent } from 'src/app/pages/home/home.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public items: any

  constructor(
    private homeComponent: HomeComponent
  ){}

  addReceita(){
    this.homeComponent.adicionarReceita=true
  }

  addDespesa(){
    this.homeComponent.adicionarDespesa=true
  }

  updateUser(){
    this.homeComponent.manageUser=true
  }

  ngOnInit() {
    this.items = [
        {
            label: 'Usuário',
            icon: 'pi pi-fw pi-user',
            items: [
                {
                    label: 'Atualizar Usuário',
                    icon: 'pi pi-fw pi-user-edit',
                    command: () => this.updateUser()
                },
                {
                    label: 'Deletar Usuário',
                    icon: 'pi pi-fw pi-user-minus'
                }
            ]
        },
        {
            label: 'Adiconar Valor',
            icon: 'pi pi-fw pi-dollar',
            items: [
                {
                    label: 'Receitas',
                    icon: 'pi pi-fw pi-plus-circle',
                    command: () => this.addReceita()
                    // items: [
                    //     {
                    //         label: 'Adicionar Receita',
                    //         icon: 'pi pi-fw pi-plus',
                    //     }
                    // ]
                },
                {
                    label: 'Despesas',
                    icon: 'pi pi-fw pi-minus-circle',
                    command: () => this.addDespesa()
                    // items: [
                    //     {
                    //         label: 'Adicionar Despesa',
                    //         icon: 'pi pi-fw pi-minus',
                    //     }
                    // ]
                }
            ]
        }
    ];
}
}
