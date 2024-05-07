const fs = require('fs');
const assert = require('assert');

eval(fs.readFileSync('code.js')+'');

var graph = { 'a': { 'b': 3, 'c': 2},
    'b': {'d': 2 },
    'c': {'d': 6},
    'd': {}}

assert(JSON.stringify(dijkstra(graph, 'a')) == JSON.stringify({ a: 0, b: 3, c: 2, d: 5 }));

var graph = { 'a': {},
    'b': {'d': 2 },
    'c': {'d': 6},
    'd': {}}

assert(JSON.stringify(dijkstra(graph, 'a')) == JSON.stringify({ a: 0, b: Infinity, c: Infinity, d: Infinity }));

var graph = { 'a': { 'b' : 2, 'c': 4},
    'b': {'c': 2 },
    'c': {'d': 3, 'e': 5, 'f': 1},
    'd': {'e':2},
    'e': {},
    'f': {'e':3}}

assert(JSON.stringify(dijkstra(graph, 'a')) == JSON.stringify({ a: 0, b: 2, c: 4, d: 7, e: 8, f: 5}));

var graph = { }

assert(JSON.stringify(dijkstra(graph, 'a')) == JSON.stringify({ }));
