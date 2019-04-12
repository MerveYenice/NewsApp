

Vue.component('static-posts', {

    template: '#static-posts-template',

    data: () => ({
        posts: []
    }),

    mounted() {
        this.getPosts();
    },

    methods: {

        getPosts() {
            this.posts = [
                {
                    "title": "Powehi: black hole gets a name meaning 'the adorned fathomless dark creation'"
                },
                {
                    "title": "Black hole picture captured for first time in space breakthrough"
                },
                {
                    "title": "Japanese spacecraft 'bombs' asteroid in scientific mission"
                },
                {
                    "title": "'A terrible thing': India's destruction of satellite threatens ISS, says Nasa"
                }
            ];
        }
    }
});

new Vue({
    el: '#app'
});