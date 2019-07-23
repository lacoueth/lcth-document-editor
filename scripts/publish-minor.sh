git add .
cd projects/lcth-document-editor
npm version minor
cd ../../

git add . && git commit
npm version minor

git push && git push --tags

npm run package
npm publish dist/lcth-document-editor/*.tgz