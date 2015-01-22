url2form.js
==============

A JavaScript library to fill a form with the current url queries.

It allows you to create JavaScript application with savable states without having a back-end.
Start filling your form, validate, bookmark the generated URL, and you be able to go back to this specific state later.

Example
--------------

```js
<form name="myFormName">
  <input type="text" name="myInput" value="" />
  <button>Validate</button>
</form>

<script>
  url2form('myFormName');
</script>
```

If the URI is "?myInput=myValue" the `input` will be valued with "myValue".
Every time you click on validate, you create an URL to bookmark.