app.component("ice-cream", {
    props: {
        cart: {
            type: Array,
            required: true
        }
    },
    template:
    /*html*/
    `<div>
        <div class="icecream" id="icecream">
        <p class="cone"></p>
        <div
            class="scoop"
            v-for="cartItem in cart"
            :class="cartItem.name.toLowerCase()"
        ></div>
        <div class="cherry" v-if="cart.length > 0"></div>
        <div class="question" v-else></div>
        </div>
    </div>`
});