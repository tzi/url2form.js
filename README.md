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



How to Contribute
--------

### Get involved

1. [Star](https://github.com/tzi/url2form.js/stargazers) the project!
2. [Report a bug](https://github.com/tzi/url2form.js/issues/new) that you have found.
3. Tweet and blog about `url2form.js` and [Let me know](https://twitter.com/iamtzi) about it.

### Pull Requests

Pull requests are highly appreciated.<br>
Please review the [guidelines for contributing](https://github.com/tzi/url2form.js/blob/master/CONTRIBUTING.md) to go further.



Author & Community
--------

`url2form.js` is under [MIT License](http://opensource.org/licenses/MIT).<br>
It was created & is maintained by [Thomas ZILLIOX](http://tzi.fr).