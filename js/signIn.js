define(['jquery', 'knockout'], ($, ko) => {
    class SignIn {
        constructor(options) {}

        Destroy() {
            RemoveUIBindings.call(this);
            delete App.SignIn;
        }

        init() {
            ApplyUIBindings.call(this);
        }
    }
});