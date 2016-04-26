# ES6 Performance in V8 transpiled vs untranspiled

See [the blog post](https://www.redfin.com/blog/category/redfin-ceo/engineering-at-redfin)

# Results

Here's the output on my laptop:

```
Testing array-includes
    Node results: min 865.39 ms max: 887.29 ms mean: 877.9619999999999 ms
    Babel results: min 870.71 ms max: 906.53 ms mean: 888.872 ms
    node is 1.2% faster
Testing default-parameters
    Node results: min 719.47 ms max: 1165.03 ms mean: 899.086 ms
    Babel results: min 716.88 ms max: 741.43 ms mean: 729.324 ms
    babel is 18.9% faster
Testing destructuring
    Node results: min 845.47 ms max: 873.15 ms mean: 859.4529999999999 ms
    Babel results: min 830.17 ms max: 867.17 ms mean: 852.933 ms
    babel is 0.8% faster
Testing proxy
    Node results: min 715.15 ms max: 1186.28 ms mean: 1063.049 ms
    Babel results: min 726.51 ms max: 1180.13 ms mean: 1108.535 ms
    node is 4.1% faster
Testing rest
    Node results: min 1230.66 ms max: 1296.05 ms mean: 1255.2350000000001 ms
    Babel results: min 1230.19 ms max: 1292.25 ms mean: 1252.0760000000002 ms
    babel is 0.3% faster
Testing spread
    Node results: min 827.29 ms max: 855.65 ms mean: 844.019 ms
    Babel results: min 833.51 ms max: 861.93 ms mean: 847.01 ms
    node is 0.4% faster
Testing to-primitive
    Node results: min 1034.85 ms max: 1146.37 ms mean: 1093.8049999999998 ms
    Babel results: min 1030.12 ms max: 1104.63 ms mean: 1074.011 ms
    babel is 1.8% faster
Testing to-string-tag
    Node results: min 715.22 ms max: 1157.05 ms mean: 933.577 ms
    Babel results: min 710.71 ms max: 1168.74 ms mean: 896.434 ms
    babel is 4% faster
Testing unicode-regex
    Node results: min 1013.32 ms max: 1065.64 ms mean: 1048.119 ms
    Babel results: min 1037.11 ms max: 1078.2 ms mean: 1057.127 ms
    node is 0.9% faster
```

# Running the test

You have to have node v6 installed.  I use [n](https://github.com/tj/n)

```
# n 6.0.0

     install : node-v6.0.0
       mkdir : /usr/local/n/versions/node/6.0.0
       fetch : https://nodejs.org/dist/v6.0.0/node-v6.0.0-darwin-x64.tar.gz
   installed : v6.0.0

```

Then run the tests

```
node test.js
```

# Contributing

Please do!  Submit a pull request with additional tests in `tests/`; I'll update the results periodically with additional test results.
