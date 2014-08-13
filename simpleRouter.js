/*
    Name: SimpleRouter.js
    Author: Thibaut Baillet
*/

var Router = {
    routes: [],
    
    add: function(route, handler) {
        this.routes.push({ route: route, handler: handler});
        return this;
    },

    check: function(f) {
        var fragment = f || location.pathname;
        
        for(var i=0; i<this.routes.length; i++) {
            var match = fragment.match(this.routes[i].route);
            if(match) {
                this.routes[i].handler.apply({}, match);
                return this;
            }           
        }
        return this;
    },
    
    listen: function() {
        var self = this,
            current = location.pathname;
        var fn = function() {
            if(current !== location.pathname) {
                current = location.pathname;
                self.check(current);
            }
        }
        
        //@todo : add popstate
        
        clearInterval(this.interval);
        this.interval = setInterval(fn, 50);
    
        return this;
    }
    
}