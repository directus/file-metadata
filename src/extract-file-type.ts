import { TYPE } from './constants.js';

export const extractFileType = (firstChunk: Buffer) => {
	const dataview = new DataView(firstChunk);
	const firstTwoBytes = dataview.getUint16(0);

	if (firstTwoBytes === 0xffd8) return TYPE.JPG;

	if (firstTwoBytes === 0x8950 && dataview.getUint32(0) === 0x89504e47 && dataview.getUint32(4) === 0x0d0a1a0a) {
		return TYPE.PNG;
	}

	throw new Error(`Can't extract file type from buffer`);
};
