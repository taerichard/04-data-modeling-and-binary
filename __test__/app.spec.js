'use strict';

/*
Gather user input (infile, outfile, and transform)
Read the input bitmap file using the fs module
Parse the bitmap's buffer into object representing a bitmap (using a constructor)
Using metadata from the parsed bitmap object run a transform on the buffer directly (mutate the color or raster data)
Write the mutated buffer to the output file path
*/


//const bpmList = require('.../src/app');
const fileHandler = require('../src/lib/file.js');

describe('Testing file.js', () => {

    it('should correctly read the file', (done) => {
        fileHandler.readFile(`${__dirname}/../assets/bitmap.bmp`, (error, data) => {
            expect(error).toBe(null);
            done();
        })    
    
    });
    it('should throw an error for wrong filename', (done) => {
        fileHandler.readFile(`${__dirname}/../assets/rockstar.bmp`, (error, data) => {
            expect(error).not.toBe(null);
            done();
        })
    })
    

    
})