# gulp-surepatch

> helps you secure your most valuable systems and data

## Getting Started
This plugin requires Gulp `~3.9.1`

If you haven't used [Gulp](https://gulpjs.com/) before, be sure to check out the [Getting Started](https://github.com/gulpjs/gulp/blob/v3.9.1/docs/getting-started.md) guide. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install gulp-surepatch --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gulpfile with this line of JavaScript:

```js
surepath.run(...)
```

## The "surepatch" task
### Overview
In your project's Gulpfile, add a gulp task and provide path to file, data object with `auth_token` and `project_token`.

```js
gulp.task('surepath', () => {
	return gulp.src('Path to file')
		.pipe(
            surepath.run({
                auth_token: 'Your user token from SurePatch'
                project_token: 'Your project token from SurePatch',
            })
        )
});
```
#### auth_token
Type: `String`

Your auth token for SurePatch.
#### project_token
Type: `String`

Your project token for SurePatch.

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Gulp](https://gulpjs.com/).

## Release History
_(Nothing yet)_