#!/usr/bin/env node

const stringToFullWidth = require( './index.js' )

process.stdin.resume()
process.stdin.setEncoding( 'utf8' )

process.stdin.on( 'data', chunk => process.stdout.write( stringToFullWidth( chunk ) ) )
