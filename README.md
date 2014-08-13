##Registering routes

Add a simple route:
```javascript
Router
  .add('/articles/', function() {
    //Articles page
  })
  .add('/', function() {
    //Home page
  })
```

##Listen for URL changes

Manualy
```javascript
Router.check();
```

Automatically
```javascript
Router.listen();
```

