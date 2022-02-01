<template>
    
    
    <div class="menu">

        <menu-site></menu-site>

    </div>

    <div class="container mb-5">

        <div class="banner">
            <h3>Bém vindo a Shopp</h3>
            <p>Aqui você encontra diversos produtos.</p>
        </div>

        <h3 class="mt-4">A melhor oferta para si</h3>

        <div class="row">

            <div v-for="item in 8" :key="item" class="col-md-3 mb-2">

                <div class="card">
                    <div class="card-img-top">
                        <img class="w-100" src="../assets/dd.jpg" alt="">
                    </div>
                    <div class="card-body">
                        <div class="card-title">Kz 100.000</div>
                        <span>Frete grátis</span>
                        <div class="card-text">Lorem ipsum dolor, sit amet consectetur 
                            adipisicing elit. </div>
                            <router-link to="/checkout" class="btn btn-primary pt-2"><i class="fas fa-cart-plus"></i> Comprar</router-link>
                    </div>
                </div>

            </div>

        </div>

    </div>

   
    <footer-site></footer-site>

</template>

<script>
import menuSite from "../components/menu.vue"
import footerSite from "../components/footerSite.vue"
export default {
    components:{footerSite, menuSite}
}
</script>

<style scoped>
    footer{
        position: initial;
    }
</style>