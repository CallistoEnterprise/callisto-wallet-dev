const colors = require("crypto-icons/colors.json");
const customIcons = {
    'btt':"url('images/coins/btt.svg')"
}

module.exports = function coinIcon() {
    return {
        restrict: "E",
        template: require("./coinIcon.html"),
        scope: {
            icon: "@",
            hidetext: "@?"
        },
        link: function(scope, e, attrs) {
            scope.colors = colors;
            scope.customIcons = customIcons;
            scope.colors['bnb']='#f3ba2f';
            scope.colors['clo']='#34c88a';
            scope.colors['clot']='#34c88a';
            scope.colors['btt']='#9a9a9a';
            if (!attrs.hidetext) {
                attrs.hidetext = false;
            }
        }
    };
};
