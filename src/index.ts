import type { Readable } from 'node:stream';
import { extractFileType } from './extract-file-type.js';
import { TYPE } from './constants.js';
import { parseJPG } from './parsers/jpg.js';
import { parsePNG } from './parsers/png.js';

export const parse = async (stream: Readable) => {
	return new Promise((resolve, reject) => {
		stream.on('error', (err) => reject(err));

		stream.on('data', (firstChunk) => {
			const type = extractFileType(firstChunk);

			if (type === TYPE.JPG) {
				parseJPG(firstChunk, stream).then(resolve).catch(reject);
			}

			if (type === TYPE.PNG) {
				parsePNG(firstChunk, stream).then(resolve).catch(reject);
			}
		});
	});

	// 1. Extract file type
	// 2. Error if we don't have a parser
	// 3. Buffer the metadata chunk
	// 4. Pass metadata buffer to parser
	// 5. Return results
};
