import { Component, OnInit } from '@angular/core';
import { BudgetService } from '../budget-service/budget.service';
import { createReceita } from 'src/app/shared/models/receitas';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { createDespesa } from 'src/app/shared/models/despesas';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.scss']
})
export class HomeContainerComponent implements OnInit{
public adicionarReceita: boolean = false
public adicionarDespesa: boolean = false
public loading: boolean = false
public createOrUpdateReceita: boolean = false
public createOrUpdateDespesa: boolean = false
public receitas: any
public despesas: any
public totalReceitas: any
public totalDespesas: any
public currentReceitaId: string = ""
public currentDespesaId: string = ""

constructor(
    private formBuilder: FormBuilder,
    private budgetService: BudgetService,
){}

data: any;

options: any;

ngOnInit() {
this.getCurrentReceitas()
this.getCurrentDespesas()

// this.budgetService.getUsers().subscribe(
//     res =>{
//         console.log(res)
//     }
// )

const documentStyle = getComputedStyle(document.documentElement);
const textColor = documentStyle.getPropertyValue('--text-color');

this.options = {
    plugins: {
        legend: {
            labels: {
                usePointStyle: true,
                color: textColor
            }
        }
    }
};

this.createReceitaForm(new createReceita())
this.createDespesaForm(new createDespesa())
}

getCurrentReceitas(){
    let valorTotal = 0
    this.budgetService.getUsers().subscribe(
        res =>{
            this.receitas  = res.receitas
            this.receitas.forEach((objeto: any) => {
                valorTotal += objeto.entrada;
            });
            this.totalReceitas = valorTotal

            const documentStyle = getComputedStyle(document.documentElement);
            const textColor = documentStyle.getPropertyValue('--text-color');

            this.data = {
                labels: ['Despesa Total', 'Receita Total'],
                datasets: [
                    {
                        data: [this.totalDespesas, this.totalReceitas],
                        backgroundColor: [documentStyle.getPropertyValue('--red-500'), documentStyle.getPropertyValue('--green-500')],
                        hoverBackgroundColor: [documentStyle.getPropertyValue('--red-400'), documentStyle.getPropertyValue('--green-400')]
                    }
                ]
            };
        }
    )
}

getCurrentDespesas(){
    let valorTotal = 0
    this.budgetService.getUsers().subscribe(
        res =>{
            this.despesas  = res.despesas
            this.despesas.forEach((objeto: any) => {
                valorTotal += objeto.saida;
            });
            this.totalDespesas = valorTotal

            const documentStyle = getComputedStyle(document.documentElement);
            const textColor = documentStyle.getPropertyValue('--text-color');

            this.data = {
                labels: ['Despesa Total', 'Receita Total'],
                datasets: [
                    {
                        data: [this.totalDespesas, this.totalReceitas],
                        backgroundColor: [documentStyle.getPropertyValue('--red-500'), documentStyle.getPropertyValue('--green-500')],
                        hoverBackgroundColor: [documentStyle.getPropertyValue('--red-400'), documentStyle.getPropertyValue('--green-400')]
                    }
                ]
            };
        }
    )
}

openEntradaToUpdate(entrada: any){
    this.createOrUpdateReceita = true
    
    this.currentReceitaId = entrada.id
    this.createReceitaForm(entrada)
    this.adicionarReceita = true
}

openSaidaToUpdate(saida: any){
    this.createOrUpdateDespesa = true
    this.currentDespesaId = saida.id
    this.createDespesaForm(saida)
    this.adicionarDespesa = true
}

onHideModal(){
    this.currentReceitaId = ""
    this.currentDespesaId = ""
    this.registerReceitaForm.reset()
    this.registerDespesaForm.reset()
    this.createOrUpdateReceita = false
    this.createOrUpdateDespesa = false
}

registerReceitaForm!: FormGroup
public createReceitaForm(Register: createReceita){
this.registerReceitaForm = this.formBuilder.group({
    entrada: [Register.entrada, [Validators.required]],
})
}

submitReceitas(){
    if(this.currentReceitaId){
        if(this.registerReceitaForm.valid){
            this.budgetService.updateReceita(this.registerReceitaForm.value, this.currentReceitaId).subscribe(
                res =>{
                    this.getCurrentReceitas()
                    this.adicionarReceita = false
                }
            )
        } else{
            this.budgetService.registerReceita(this.registerReceitaForm.value).subscribe(
                res =>{
                    this.getCurrentReceitas()
                    this.adicionarReceita = false
                }
            )
        }
    } else if(this.registerReceitaForm.valid){
        this.budgetService.registerReceita(this.registerReceitaForm.value).subscribe(
            res =>{
                this.getCurrentReceitas()
                this.adicionarReceita = false
            }
        )
    }
}

deleteReceitaFn(receitaId: string){
    this.budgetService.deleteReceita(receitaId).subscribe(
        res =>{
            this.getCurrentReceitas()
            this.adicionarReceita = false
        }
    )
}

registerDespesaForm!: FormGroup
public createDespesaForm(Register: createDespesa){
this.registerDespesaForm = this.formBuilder.group({
    saida: [Register.saida, [Validators.required]],
})
}

submitDespesa(){
    if(this.currentDespesaId){
        if(this.registerDespesaForm.valid){
            this.budgetService.updateDespesa(this.registerDespesaForm.value, this.currentDespesaId).subscribe(
                res =>{
                    this.getCurrentDespesas()
                    this.adicionarDespesa = false
                }
            )
        } else{
            this.budgetService.registerDespesa(this.registerDespesaForm.value).subscribe(
                res =>{
                    this.getCurrentDespesas()
                    this.adicionarDespesa = false
                }
            )
        }
    } else if(this.registerDespesaForm.valid){
        this.budgetService.registerDespesa(this.registerDespesaForm.value).subscribe(
            res =>{
                this.getCurrentDespesas()
                this.adicionarDespesa = false
            }
        )
    }
}

deleteDespesaFn(despesaId: string){
    this.budgetService.deleteDespesas(despesaId).subscribe(
        res => {
            this.getCurrentDespesas()
            this.adicionarDespesa = false
        }
    )
}

}
