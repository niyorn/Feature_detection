(function(){

    const app = {
        init: function (){
            html.script();
            event.menu();
        }
    }

    const html = {
        //If the html uses javascipt than the no-script will be remove
        script: function () {
            document.querySelector('body').classList.remove('no-script')
        },
        menu: function () {
            console.log('test')
            document.querySelector('header nav').classList.toggle('active');
        }
    }

    const event = {
        menu: function () {
            document.querySelector('header  button').addEventListener('click', function(){
                html.menu()
            })
        }
    }

    app.init();

})();