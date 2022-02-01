<template>
    
    <div class="menu">
        <menu-site></menu-site>
    </div>

    <div class="container pt-5 mb-4">

        <div class="row pt-5">
            <h3 v-if="confirm == false">Produtos (1)</h3>
            <h3 v-if="confirm == true">Confirmar Pedido</h3>
            <div class="col-md-8">


                <div v-if="confirm == true" class="card p-3 mb-2 card-info">
                    <h3>Informação de envio</h3>
                    <p>Edson Dos Santos Bandola, 924467073</p>
                    <p>
                        <span>Bairro popular</span>
                        <span>Luanda, Luanda, Angola, 000</span>
                        <span>
                            <a href="">+Adicionar novo endereço.</a>
                        </span>
                        <span>
                            <a href="">Selecionar outro endereço.</a>
                        </span>
                    </p>

                    <h3>Método de pagamento</h3>

                    <p>
                        <span>Cartão: VISA</span>
                        <span>Número: 00001111******34</span>
                    </p>

                </div>

                <div v-if="confirm == false" class="card p-3 mb-2">
                    <h3>Métodos de Pagamento</h3>
                    <img src="../assets/cartoes.jpg" class="card-img-payment" alt="">
                    <div class="row">
                        <div class="col-md-4">
                            <label for="">Número do cartão</label>
                            <input type="number" class="form-control" name="" id="">
                        </div>

                        <div class="col-md-4">
                            <label for="">Nome do titular</label>
                            <input type="text" class="form-control" name="" id="">
                        </div>

                        <div class="col-md-4">
                            <label for="">Data de expiração</label>
                            <input type="date" class="form-control" name="" id="">
                        </div>
                        
                    </div>
                </div>

               <div class="card cart p-1">
                   <div class="card-body">
                        <div class="table-responsive">
                            <table class="table ">

                                <thead>
                                    <tr>
                                        <th>
                                            Produto
                                        </th>
                                        <th>Descrição</th>
                                        <th>Disponiblidade</th>
                                        <th>Preço Unitário</th>
                                        <th>Qtd</th>
                                        <th>Total</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <img src="../assets/dd.jpg" alt="">
                                        </td>
                                        <td class="description">
                                            Lorem ipsum dolor sit amet consectetur
                                        </td>
                                        <td>Em estoque</td>
                                        <td>Kz 100.000</td>
                                        <td>
                                            <span @click="removeQtd"><i class="fa fa-minus"></i> </span>
                                            <span >{{qtd}}</span>
                                            <span @click="addQtd"> <i class="fa fa-plus"></i></span>
                                        </td>
                                        <td>Kz 100.000</td>
                                        <td v-if="confirm == false">
                                            <a href="" class="btn btn-danger"><i class="fa fa-trash"></i></a>
                                        </td>
                                    </tr>
                                </tbody>

                            </table>
                        </div>
                   </div>
               </div>

            </div>

            <div class="col-md-4">

                <div class="card p-3">
                    <h4>Resumo do pedido</h4>
                    <table>
                        <tbody>
                            <tr>
                                <th class="pt-2">Subtotal</th>
                                <td class="pt-2">Kz 100.000</td>
                            </tr>
                            <tr>
                                <th>Frete</th>
                                <td>Kz 0.00</td>
                            </tr>
                            <tr >
                                <th class="pt-5 price-total">Total</th>
                                <td class="pt-5">Kz {{totalPrice}}</td>
                            </tr>
                        </tbody>
                    </table>
                    <a href="" @click.prevent="changeConfirm(0)" v-if="confirm == false" class="btn btn-danger mt-2">Comprar(1)</a>
                    <a href="" @click.prevent="changeConfirm(1)" v-if="confirm == true" class="btn btn-danger mt-2">Fzer pedido</a>
                </div>
                

            </div>

        </div>

    </div>

    <footer-site></footer-site>

</template>
<script>

import menuSite from "../components/menu.vue"
import footerSite from "../components/footerSite.vue"
import { useToast } from "vue-toastification";
import {  ref } from 'vue'

export default {
    components:{footerSite, menuSite},

    setup() {
        const toast = useToast();
        let qtd = ref(1)
        let totalPrice = ref(100000) 
        
        let confirm = ref(false)
       
        
        function changeConfirm(confirmed){
            
            if(confirm.value == true && confirmed == 1){
                toast("Compra feita com sucesso!");
                confirmed = 0
                confirm.value = false
            }
            
           
            if(confirmed == 0 && confirm.value == false){

                confirm.value = true

            }else{

                confirm.value = false
                
            }

        }

        console.log(confirm.value)

        function addQtd(){
            qtd.value += 1
            totalPrice.value = parseFloat(totalPrice.value) * parseFloat(qtd.value)
        }

        function removeQtd(){
            if(qtd.value >= 1){
                qtd.value -=1
                totalPrice.value = parseFloat(totalPrice.value) * parseFloat(qtd.value)
            }
        }

        return {qtd, totalPrice, removeQtd, addQtd, confirm, changeConfirm}

    }

}
</script>