#!/bin/sh

if [ -f "dist/cluarData.js" ]; then
    mv dist/cluarData.js .cluarData.js
fi

if [ -d "dist/images" ]; then
    rsync -av dist/images/ public/images/
fi

npm install --force

npm run build

if [ -f ".cluarData.js" ]; then
    mv .cluarData.js dist/cluarData.js
fi
