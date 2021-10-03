define(['jquery', 'knockout'], ($, ko) => {
    class SignIn {
        constructor(options) {
            this.User = null;
            this.init();
        }

        Destroy() {
            RemoveUIBindings.call(this);
            delete App.SignIn;
        }

        init() {
            ApplyUIBindings.call(this);
        }
    }

    function fetchUserData() {
        
    }
})