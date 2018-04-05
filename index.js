'use strict';
const gutil = require('gulp-util');
const PluginError = gutil.PluginError;
const colors = gutil.colors;
const through = require('through2');
const request = require('request');
const fs = require('fs');

module.exports.run = (auth, deps) => {
	return through.obj((file, enc, cb) => {
		if (file.isNull()) {
			cb(null, file);
			return;
		}
		if (auth) {
			request.post({
				url: 'https://localhost:5555/api/taskrunners/components',
				rejectUnauthorized: false,
				formData: {
					file: fs.createReadStream(file.path),
					credentials: JSON.stringify(auth)
				},

			}, (err, response, body)=> {
				if (err) {
					gutil.log(colors.red('[gulp-surepath]: ' + err))
					cb( new PluginError('gulp-surepath', err));
					return;
				} else {
					let res = JSON.parse(body);
					if (res.status === 400) {
						gutil.log(colors.red('[gulp-surepath]: ' + res.type))
						cb( new PluginError('gulp-surepath', res.type));
						return;
					} else {
						gutil.log(colors.green('[gulp-surepath]: File ' + file.relative + ' have been uploaded'))
					}
				}
			})
		} else {
			gutil.log(colors.red('[gulp-surepath]: Tokens not provided'))
			cb(new PluginError('gulp-surepath', 'Tokens not provided'));
			return;
		}
		cb();
	});
};
