// Copyright 2017 Google Inc.
//
// Licensed under the Apache License, Version 2.0 (the “License”);
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// <https://apache.org/licenses/LICENSE-2.0>.
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an “AS IS” BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

const predictFileName = (os) => {
	switch (os) {
		case 'mac64': {
			return 'osx_x64';
		}
		// case 'linux32': {}
		case 'linux64': {
			return 'linux_x64';
		}
		case 'win32':
		case 'win64': {
			return 'windows_all';
		}
		default: {
			throw new Error(
				`Chakra does not offer precompiled ${os} binaries.`
			);
		}
	}
};

const predictUrl = (version, os) => {
	const fileName = predictFileName(os);
	const url = `https://aka.ms/chakracore/cc_${fileName}_${
		version.replace(/\./g, '_')}`;
	return url;
};

module.exports = predictUrl;
