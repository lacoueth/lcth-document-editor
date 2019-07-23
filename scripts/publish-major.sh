git add .
cd projects/lcth-document-editor
npm version major
cd ../../

git add . && git commit
npm version major

git push && git push --tags

npm run package
npm publish dist/lcth-document-editor/*.tgz