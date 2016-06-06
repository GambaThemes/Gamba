(function() {
    'use strict';

    angular
        .module('app')
        .config(configLanguage);

    function configLanguage($translateProvider) {
        $translateProvider
            .useStaticFilesLoader({
                prefix: '../public/translations/locale-',
                suffix: '.json'
            })
            .preferredLanguage('en')
            .useLocalStorage()
            .useMissingTranslationHandlerLog();
    }

})();
