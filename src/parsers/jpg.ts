import type { Buffer } from 'node:buffer';
import type { Readable } from 'node:stream';

export const parseJPG = async (
	firstChunk: Buffer,
	stream: Readable
): Promise<{
	exif: Record<string, unknown>;
	iptc: Record<string, unknown>;
	icc: Record<string, unknown>;
}> => {};
